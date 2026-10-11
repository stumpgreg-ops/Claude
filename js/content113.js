/* SOL Labyrinth — Grade 11 epic packs (stamina tier for nights 95–100), expansion file 113.
 * Eleven EPIC packs (540–650 words; paired texts 280–330 words each) built around fossils,
 * sign language, a zoo keeper and a wildfire lookout: three stories, one drama, two
 * informational articles, one vocabulary article, one functional text, one argument and two
 * paired sets. Original Virginia EOC Reading-style content for the G11 family; no published
 * text, no real people. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };

  var PACKS = [
    /* ───────────────────────── 1 · LITERARY · a wildfire lookout ───────────────────────── */
    {
      id: "g11-rl-c113-cinderridge",
      family: "G11",
      title: "The Tower at Cinder Ridge",
      kind: "Literary · 11.RL",
      blurb: "A first-season fire lookout calls in two false alarms and learns from a voice on the radio how to watch smoke breathe.",
      level: 2,
      passage:
        "<p>" + N(1) + "The tower on Cinder Ridge was fourteen feet square, glass on all four sides, and on her first morning there Lucia Arrieta decided that it was the loneliest room in the state. " +
        N(2) + "Below her the forest ran in every direction, a rumpled green blanket that went blue at the edges and then simply stopped against the sky. " +
        N(3) + "Her job, as the district ranger had explained in a single brisk sentence, was to look at all of it, all day, and to tell someone the moment any part of it began to burn. " +
        N(4) + "She had nodded as though the task were simple, and for the first week she believed it was.</p>" +
        "<p>" + N(5) + "On her eighth day she saw smoke. " +
        N(6) + "It rose from a fold in the hills to the southwest, tan and billowing, and she was on the radio before she had finished standing up. " +
        N(7) + "Twenty minutes later a ground crew reported back with audible patience: a gravel truck on the Fenwick logging road, dragging a cloud of dust behind it. " +
        N(8) + "Four days after that it happened again, this time with a road grader working the same stretch, and the dispatcher's \"Copy, Cinder Ridge\" had a flatness in it that Lucia heard for the rest of the afternoon.</p>" +
        "<p>" + N(9) + "That evening the radio crackled with a voice she knew only from the daily check-ins. " +
        N(10) + "Walt Penhallow had watched from Bald Knob, the next tower north, for twenty-six summers, and he spoke the way some people walk on ice, slowly and without wasted motion. " +
        N(11) + "\"Heard you had a busy road today,\" he said. " +
        N(12) + "Lucia braced herself for a joke, but none came. " +
        N(13) + "\"Dust lies down,\" Walt went on. " +
        N(14) + "\"It hugs the ground and drifts with the wind like it's tired. " +
        N(15) + "Smoke stands up, at least for a while, and it comes from one place and stays there. " +
        N(16) + "Next time, give it two minutes. " +
        N(17) + "Watch it breathe before you call it in.\" " +
        N(18) + "She wanted to argue that two minutes could matter, but she thought of the dispatcher's flat voice and said only, \"Copy, Bald Knob.\"</p>" +
        "<p>" + N(19) + "The storm came through on the twenty-third night, a dry one, all lightning and almost no rain. " +
        N(20) + "She counted strikes until she lost track and then sat on the insulated stool, as the manual required, while the tower hummed around her. " +
        N(21) + "In the morning the forest looked untouched, washed bright and innocent in the early light. " +
        N(22) + "Then, a little after ten, she noticed a thread of gray above a ridge she had no name for, so thin that it might have been a flaw in the glass.</p>" +
        "<p>" + N(23) + "Every part of her wanted to grab the radio. " +
        N(24) + "Instead she made herself watch. " +
        N(25) + "The thread did not drift or flatten; it stood straight up, wavered, and stood up again, always from the same notch among the trees. " +
        N(26) + "She swung the fire finder's sighting ring until the hairline split the smoke, read the bearing twice, checked her map, and only then pressed the button. " +
        N(27) + "Her voice, she noticed, was steady. " +
        N(28) + "A crew reached the spot by early afternoon and found a single lightning-struck fir smoldering in a circle of blackened needles, small enough to put out with hand tools before supper.</p>" +
        "<p>" + N(29) + "That night Lucia opened the tower logbook, its oldest pages written in pencil by lookouts whose names she did not recognize. " +
        N(30) + "She had skimmed those entries on her first day and found them dull: wind from the west, haze in the valley, nothing to report. " +
        N(31) + "Now she read them slowly, understanding at last that each line recorded a whole day of watching that had ended in nothing, which was the job done well. " +
        N(32) + "Beneath them she wrote the date, the bearing, and the time, and then, after a moment, she added one more line: <em>Watched it breathe first.</em> " +
        N(33) + "The room around her was still fourteen feet square, but it no longer felt like the loneliest one in the state.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme developed through Lucia's season on Cinder Ridge?",
          choices: [
            { letter: "A", text: "Experienced mentors should be obeyed without question." },
            { letter: "B", text: "Patient observation can be a stronger form of alertness than haste." },
            { letter: "C", text: "Time alone in nature eventually brings people self-knowledge." },
            { letter: "D", text: "Mistakes made in front of others are impossible to forget." }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which statement best describes how Lucia changes over the course of the passage?",
          choices: [
            { letter: "A", text: "She moves from enjoying solitude to longing for company." },
            { letter: "B", text: "She moves from trusting the dispatcher to relying only on herself." },
            { letter: "C", text: "She moves from fearing fire to doubting that one will ever come." },
            { letter: "D", text: "She moves from reacting instantly to watching closely before acting." }
          ],
          correct: "D"
        },
        {
          id: "ice",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 10, comparing Walt's way of speaking to the way some people walk on ice suggests that he —",
          choices: [
            { letter: "A", text: "chooses each word with deliberate care" },
            { letter: "B", text: "is nervous about offending the new lookout" },
            { letter: "C", text: "speaks coldly and without any sympathy" },
            { letter: "D", text: "often loses track of what he meant to say" }
          ],
          correct: "A"
        },
        {
          id: "braced",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 12 suggests that when Walt mentions the busy road, Lucia expects him to —",
          choices: [
            { letter: "A", text: "order her to stop reporting smoke until training" },
            { letter: "B", text: "tell her that the dispatcher had complained" },
            { letter: "C", text: "tease her about the two false alarms" },
            { letter: "D", text: "ask her to keep watch on the road for him" }
          ],
          correct: "C"
        },
        {
          id: "breathe",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Walt's advice to watch the smoke breathe (sentence 17) mainly suggests that real smoke —",
          choices: [
            { letter: "A", text: "is too dangerous to be studied from close by" },
            { letter: "B", text: "has a living, rising rhythm a patient watcher can learn" },
            { letter: "C", text: "spreads across the hills faster than the wind blows" },
            { letter: "D", text: "can be heard from the tower before it can be seen" }
          ],
          correct: "B"
        },
        {
          id: "flatness",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 8, the flatness in the dispatcher's voice most nearly suggests —",
          choices: [
            { letter: "A", text: "weary disappointment that he does not say aloud" },
            { letter: "B", text: "anger he wants the whole district to overhear" },
            { letter: "C", text: "confusion about where the tower is located" },
            { letter: "D", text: "relief that no real fire has been found" }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence returns to the description in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "hint that Lucia plans to leave the tower at the end of the season" },
            { letter: "B", text: "emphasize how cramped and uncomfortable the tower really is" },
            { letter: "C", text: "show that Lucia's sense of her post has changed though the room has not" },
            { letter: "D", text: "reveal that Walt will soon be joining her on Cinder Ridge" }
          ],
          correct: "C"
        },
        {
          id: "innocent",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 21, the word innocent suggests that on the morning after the storm the forest —",
          choices: [
            { letter: "A", text: "had never before been struck by lightning" },
            { letter: "B", text: "was too young and green to burn easily" },
            { letter: "C", text: "seemed friendly to the crews working in it" },
            { letter: "D", text: "showed no sign of the harm the storm had done" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 2 · LITERARY · sign language ───────────────────────── */
    {
      id: "g11-rl-c113-handsatthetable",
      family: "G11",
      title: "Hands at the Table",
      kind: "Literary · 11.RL",
      blurb: "A teenager learns sign language for her Deaf younger brother and discovers what it means to be the slow one at the table.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of my brother's life, dinner at our house sounded like a radio left on in another room: four voices overlapping, my father's laugh, the clatter of my mother setting down the rice, and somewhere under it all, the silence of Tobias. " +
        N(2) + "He was born Deaf, and by the time he was nine he had a whole world of sign at his school, friends he argued with in rapid, elegant handshapes, a teacher he adored. " +
        N(3) + "At our table, though, he watched our mouths the way a spectator follows a tennis match, his head turning from speaker to speaker, always a beat behind the point.</p>" +
        "<p>" + N(4) + "My parents had learned enough sign to manage the basics: eat, bath, homework, I love you. " +
        N(5) + "I had learned less, because I was fourteen when he started school and busy, and because it was easy to tell myself that he had his own people now. " +
        N(6) + "It was Tobias who changed my mind, though he never meant to. " +
        N(7) + "One night my uncle told a long story about a goat that had climbed into his truck, and everyone laughed until my mother had to wipe her eyes, and Tobias laughed too, a half second late, looking around the table to see what he was laughing at. " +
        N(8) + "Later I found him in his room, and when I asked in clumsy sign what was wrong, he spelled out a single word with his fingers, slowly, as if for a toddler: G-O-A-T. " +
        N(9) + "Then he shrugged, which was worse than if he had cried.</p>" +
        "<p>" + N(10) + "I signed up for the evening class at the community center the next week. " +
        N(11) + "It was humbling in a way I had not expected. " +
        N(12) + "My hands, which could play scales on a piano without my thinking about them, became strangers at the ends of my arms, and my face, which I had always considered expressive, apparently said nothing at all. " +
        N(13) + "\"Your eyebrows are part of the sentence,\" our instructor, Ms. Adair, signed, raising her own to show me how a statement became a question. " +
        N(14) + "\"If your face is still, you are mumbling.\"</p>" +
        "<p>" + N(15) + "At home I practiced on Tobias, who was a merciless teacher. " +
        N(16) + "He corrected my handshapes with a fingertip, the way you might straighten a picture on a wall, and he laughed openly when I signed that the dog was delicious instead of dirty. " +
        N(17) + "I let him laugh. " +
        N(18) + "It was the first time in years that he had been the expert at our table, and I noticed that he sat up straighter when he was.</p>" +
        "<p>" + N(19) + "The real test came at my grandmother's seventieth birthday, with twenty relatives packed around two tables pushed together. " +
        N(20) + "The talk ran fast and loud in two languages, and I could see Tobias beginning to fold inward, his eyes going to his plate. " +
        N(21) + "So I moved my chair beside his and started to sign, badly, everything I could catch: my cousin's new job, the argument about the soccer match, my aunt's terrible joke about a parrot. " +
        N(22) + "I missed half of it and invented a little of the rest. " +
        N(23) + "It did not matter. " +
        N(24) + "Tobias laughed on time.</p>" +
        "<p>" + N(25) + "Near the end of the night my grandmother leaned across the table and tapped my wrist. " +
        N(26) + "\"That one,\" she said, nodding at my hands, which had just made the sign for birthday. " +
        N(27) + "\"Show me.\" " +
        N(28) + "I showed her, and she repeated it with stiff, careful fingers, and Tobias reached over to fix her thumb exactly the way he fixed mine. " +
        N(29) + "Nobody else at the table noticed, and the noise went on around us like weather. " +
        N(30) + "But for a moment the three of us were having our own conversation, in a language that our family had, at last, begun to share.</p>",
      claims: [
        {
          id: "tennis",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, comparing Tobias to a spectator at a tennis match mainly emphasizes that he —",
          choices: [
            { letter: "A", text: "enjoys watching his family compete for attention" },
            { letter: "B", text: "prefers watching others to joining in himself" },
            { letter: "C", text: "is always chasing talk he cannot fully follow" },
            { letter: "D", text: "is judging which relative argues the best" }
          ],
          correct: "C"
        },
        {
          id: "shrug",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The narrator finds Tobias's shrug in sentence 9 worse than tears most likely because it —",
          choices: [
            { letter: "A", text: "shows he has come to accept being left out" },
            { letter: "B", text: "means he is angry at the uncle for the story" },
            { letter: "C", text: "proves he did not understand her question" },
            { letter: "D", text: "signals that he wants her to leave his room" }
          ],
          correct: "A"
        },
        {
          id: "merciless",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentences 15 and 16, the word merciless means that as a teacher Tobias —",
          choices: [
            { letter: "A", text: "refused to help unless he was rewarded" },
            { letter: "B", text: "lost his temper whenever she slipped up" },
            { letter: "C", text: "expected her to learn with no guidance" },
            { letter: "D", text: "pointed out every error without softening it" }
          ],
          correct: "D"
        },
        {
          id: "straighter",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 18 reveals that the narrator —",
          choices: [
            { letter: "A", text: "regrets letting her brother laugh at her errors" },
            { letter: "B", text: "sees that teaching her gives Tobias rare confidence at home" },
            { letter: "C", text: "believes Tobias should become a sign language instructor" },
            { letter: "D", text: "worries that her parents will be embarrassed by her mistakes" }
          ],
          correct: "B"
        },
        {
          id: "weather",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 29, saying that the noise went on like weather mainly suggests that the family's talk —",
          choices: [
            { letter: "A", text: "carried on as an ordinary background to a private moment" },
            { letter: "B", text: "was about to end because a storm was coming in" },
            { letter: "C", text: "turned angry when the three stopped listening" },
            { letter: "D", text: "grew so loud that nobody could hear a word" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Because the story is told by Tobias's sister in the first person, the reader is able to —",
          choices: [
            { letter: "A", text: "know exactly what Tobias is thinking at every moment" },
            { letter: "B", text: "hear each relative's opinion at the birthday dinner" },
            { letter: "C", text: "learn the full history of the sign language she studies" },
            { letter: "D", text: "follow her own shift from distance to real involvement" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Hands at the Table\"?",
          choices: [
            { letter: "A", text: "A new language is easiest to learn while one is young." },
            { letter: "B", text: "Family parties often leave their quietest guests forgotten." },
            { letter: "C", text: "Learning someone's language is an act of welcome that can spread." },
            { letter: "D", text: "Skill at music makes other kinds of learning come more easily." }
          ],
          correct: "C"
        },
        {
          id: "ontime",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Read in light of sentence 7, the phrase laughed on time in sentence 24 most nearly means that Tobias —",
          choices: [
            { letter: "A", text: "laughed only when his sister signed correctly" },
            { letter: "B", text: "shared the joke at the same moment as everyone" },
            { letter: "C", text: "laughed politely so that his sister would not quit" },
            { letter: "D", text: "knew the party would end at the planned hour" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 3 · LITERARY · fossils ───────────────────────── */
    {
      id: "g11-rl-c113-ammonite",
      family: "G11",
      title: "Bigger Than a Shoebox",
      kind: "Literary · 11.RL",
      blurb: "On a crumbling beach, a teenage fossil hunter finds the ammonite of a lifetime and has to decide whose shelf it belongs on.",
      level: 1,
      passage:
        "<p>" + N(1) + "The beach below the Garrow cliffs was not the kind of beach people visit for swimming. " +
        N(2) + "It was gray and stony, the water was cold even in August, and the cliffs behind it crumbled a little more every winter, dropping slabs of rock onto the shore. " +
        N(3) + "That crumbling was exactly why Hamid Rahimi loved it. " +
        N(4) + "Every storm uncovered something new, and somewhere in all that broken rock were the remains of creatures that had lived in a warm, shallow sea a hundred and eighty million years ago.</p>" +
        "<p>" + N(5) + "Hamid had been coming to Garrow with his grandfather since he was six. " +
        N(6) + "His grandfather walked slowly now, so he usually sat on a flat boulder near the steps with a thermos of tea while Hamid searched. " +
        N(7) + "\"Look with your eyes first and your hands second,\" he always said. " +
        N(8) + "\"The rock tells you where to look if you are patient enough to listen.\" " +
        N(9) + "Hamid had a shoebox at home full of small finds: pieces of shell, a shark tooth, and a dozen ammonites no bigger than a coin, their spiral shapes pressed into dark stone.</p>" +
        "<p>" + N(10) + "On the last morning of the trip, he saw a curve sticking out of a fallen slab near the waterline. " +
        N(11) + "He brushed away the sand with his fingers, then stopped and called for his grandfather. " +
        N(12) + "It took them almost an hour to free the stone safely, and when they finally rinsed it in a tide pool, Hamid forgot to breathe. " +
        N(13) + "It was an ammonite as wide as a dinner plate, its coils perfect, its outer shell still showing a faint rainbow shine like the inside of an oyster. " +
        N(14) + "\"This one is not for the shoebox,\" his grandfather said quietly.</p>" +
        "<p>" + N(15) + "Hamid knew he was right, but he did not want him to be. " +
        N(16) + "Collecting loose fossils on this beach was allowed, and the ammonite was his by every rule he knew. " +
        N(17) + "He imagined it on the shelf above his bed, the first thing he would see every morning. " +
        N(18) + "He imagined showing it to his friends, who mostly thought fossil hunting was a strange hobby for a fifteen-year-old.</p>" +
        "<p>" + N(19) + "Still, he carried it up to the small visitor center at the top of the steps, mostly because his grandfather was already walking that way. " +
        N(20) + "The volunteer at the desk, a retired geologist named Mrs. Lindqvist, put on her glasses, looked at the stone for a long time, and then made a phone call. " +
        N(21) + "The fossil, she explained afterward, belonged to a species that had been found on this coast only a handful of times, and never in such good condition. " +
        N(22) + "The regional museum would be glad to study it if he was willing, she said, and he could take as much time as he needed to decide.</p>" +
        "<p>" + N(23) + "He walked back down to the beach alone. " +
        N(24) + "The tide was coming in, covering the place where the slab had been, and he thought about how many storms it had taken to bring the ammonite to the surface and how easily it could have been ground into gravel instead. " +
        N(25) + "He thought about the scientists who would measure it and the students who would see it behind glass. " +
        N(26) + "Then he climbed the steps again and told Mrs. Lindqvist yes.</p>" +
        "<p>" + N(27) + "Six months later, Hamid and his grandfather stood in front of a glass case in the museum's new gallery. " +
        N(28) + "The ammonite sat on a stand of its own, lit from above so that the rainbow shine glowed. " +
        N(29) + "On the small card beside it, under the long Latin name, were the words <em>Discovered by Hamid Rahimi, Garrow Bay.</em> " +
        N(30) + "\"Bigger than a shoebox,\" his grandfather said, and Hamid laughed, because it was true in more ways than one.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Hamid's decision about the ammonite most clearly develop?",
          choices: [
            { letter: "A", text: "Some treasures grow in value when they are shared." },
            { letter: "B", text: "Young people should always obey their elders." },
            { letter: "C", text: "Wild places should be closed to all visitors." },
            { letter: "D", text: "Hobbies others find odd are seldom worth it." }
          ],
          correct: "A"
        },
        {
          id: "struggle",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which sentence best shows that Hamid is torn about what to do with the fossil?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 25" },
            { letter: "D", text: "Sentence 28" }
          ],
          correct: "B"
        },
        {
          id: "oyster",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 13, comparing the shell's shine to the inside of an oyster mainly helps the reader —",
          choices: [
            { letter: "A", text: "understand why ammonites lived in shallow seas" },
            { letter: "B", text: "see that the fossil was damaged by the tide pool" },
            { letter: "C", text: "realize the ammonite is still a living creature" },
            { letter: "D", text: "picture the shimmering colors left on the fossil" }
          ],
          correct: "D"
        },
        {
          id: "walking",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 19 suggests that Hamid first carries the ammonite to the visitor center because he —",
          choices: [
            { letter: "A", text: "wants to learn how much money the fossil is worth" },
            { letter: "B", text: "fears he broke a rule by taking it from the slab" },
            { letter: "C", text: "is following his grandfather, not a firm decision" },
            { letter: "D", text: "has already chosen to give it to the museum" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the setting described in sentences 1–4 shape the plot of the story?",
          choices: [
            { letter: "A", text: "The cold water explains why Hamid must search alone." },
            { letter: "B", text: "The crumbling cliffs explain how a rare fossil could surface." },
            { letter: "C", text: "The stony beach explains why few people visit the museum." },
            { letter: "D", text: "The August heat explains why the trip ends so suddenly." }
          ],
          correct: "B"
        },
        {
          id: "listen",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The grandfather's statement in sentence 8 that the rock tells you where to look is best described as —",
          choices: [
            { letter: "A", text: "personification that stresses patient, careful observation" },
            { letter: "B", text: "exaggeration that pokes fun at Hamid's eager searching" },
            { letter: "C", text: "a simile comparing the rocks on the beach to a teacher" },
            { letter: "D", text: "irony showing that the grandfather doubts the hobby" }
          ],
          correct: "A"
        },
        {
          id: "crumbled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word crumbled most nearly means —",
          choices: [
            { letter: "A", text: "grew slowly taller" },
            { letter: "B", text: "turned a darker color" },
            { letter: "C", text: "became slippery and wet" },
            { letter: "D", text: "broke apart into pieces" }
          ],
          correct: "D"
        },
        {
          id: "bigger",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Hamid laughs in sentence 30 because the phrase Bigger than a shoebox is true in more ways than one. The phrase most nearly means that the fossil —",
          choices: [
            { letter: "A", text: "is now too heavy for Hamid to carry home" },
            { letter: "B", text: "is worth more than everything in his collection" },
            { letter: "C", text: "is large in size and now matters to many people" },
            { letter: "D", text: "will be moved to a larger case in the gallery" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 4 · INFORMATIONAL · fossils ───────────────────────── */
    {
      id: "g11-ri-c113-trackways",
      family: "G11",
      title: "Reading the Trackways",
      kind: "Informational · 11.RI",
      blurb: "Footprints, burrows and other trace fossils show what ancient animals did, if scientists are careful about what they cannot show.",
      level: 1,
      passage:
        "<p><strong>More Than Bones</strong></p>" +
        "<p>" + N(1) + "When most people picture a fossil, they imagine a skeleton: a long neck of stacked vertebrae, a skull full of teeth, the bones of a creature reassembled in a museum hall. " +
        N(2) + "Bones are valuable, but they record only what an animal was, not what it did. " +
        N(3) + "A skeleton cannot tell a scientist whether its owner ran or walked, lived alone or in a crowd, or stopped one afternoon to rest beside a lake. " +
        N(4) + "For questions like those, paleontologists turn to a different kind of evidence, known as trace fossils.</p>" +
        "<p>" + N(5) + "A trace fossil is any preserved sign of an ancient animal's activity rather than of its body. " +
        N(6) + "Footprints are the most famous example, but the category also includes burrows, nests, tooth marks on bone, and even fossilized droppings. " +
        N(7) + "Trace fossils form when an animal leaves an impression in soft material, such as mud along a shoreline, that dries, is buried by fresh layers of sediment, and slowly hardens into rock. " +
        N(8) + "Because the conditions must be just right, a single track is rare; a long series of tracks, called a trackway, is rarer still.</p>" +
        "<p><strong>Measuring a Stride</strong></p>" +
        "<p>" + N(9) + "Trackways are especially useful because they capture motion, something that no skeleton, however complete, can preserve. " +
        N(10) + "By measuring the length of a single footprint, researchers can estimate how tall an animal stood at the hip, since in most walking animals foot length and leg length are closely related. " +
        N(11) + "They then measure the stride, the distance between one print and the next print made by the same foot. " +
        N(12) + "Comparing stride length to hip height gives a rough estimate of speed: a short stride relative to the leg suggests a leisurely walk, while a long one suggests a jog or a sprint. " +
        N(13) + "Using this method, scientists studying one well-preserved trackway concluded that a group of mid-sized plant-eaters had been moving at about the pace of a person strolling through a park.</p>" +
        "<p>" + N(14) + "Groups of tracks can reveal social behavior as well as speed. " +
        N(15) + "When dozens of trackways run side by side in the same direction, evenly spaced and never crossing, many researchers interpret them as evidence of a herd moving together. " +
        N(16) + "Small prints mixed among large ones, some scientists argue, may even show young animals traveling with adults.</p>" +
        "<p><strong>What Tracks Cannot Tell</strong></p>" +
        "<p>" + N(17) + "For all their value, trace fossils come with a frustrating limitation: they rarely come with a signature. " +
        N(18) + "An animal almost never dies in its own footprints, so scientists must guess the trackmaker by matching the shape of the print to the feet of known skeletons. " +
        N(19) + "Several different species may have had similar feet, and a print can be distorted if the mud was too wet or too dry. " +
        N(20) + "A three-toed track pressed into soupy mud may spread so wide that it looks like the print of a much larger animal.</p>" +
        "<p>" + N(21) + "Because of these uncertainties, careful researchers treat trackway conclusions as strong possibilities rather than settled facts. " +
        N(22) + "A herd interpretation, for example, becomes more convincing when the trackways all show the same depth, suggesting that they were made at the same time in the same mud. " +
        N(23) + "Even with these cautions, trace fossils remain one of the few windows into the daily lives of extinct animals. " +
        N(24) + "A skeleton shows us the machine; a trackway shows us the machine in motion.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"Reading the Trackways\"?",
          choices: [
            { letter: "A", text: "Footprints are the most common fossils that scientists find." },
            { letter: "B", text: "Trace fossils reveal ancient behavior, though with real uncertainty." },
            { letter: "C", text: "Skeletons are less useful to science than trace fossils are." },
            { letter: "D", text: "Scientists can name the exact maker of most fossil tracks." }
          ],
          correct: "B"
        },
        {
          id: "speed",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, how do researchers estimate an animal's speed from a trackway?",
          choices: [
            { letter: "A", text: "They measure how deeply each print sank into the mud." },
            { letter: "B", text: "They count how many trackways run side by side." },
            { letter: "C", text: "They match the prints to the bones of a known skeleton." },
            { letter: "D", text: "They compare stride length with hip height from foot size." }
          ],
          correct: "D"
        },
        {
          id: "interp",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "Which sentence presents an interpretation that the author attributes to only some scientists?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Taken in order, the three headings show that the article is organized to move from —",
          choices: [
            { letter: "A", text: "the oldest fossil discoveries to the most recent ones" },
            { letter: "B", text: "a problem in paleontology to several ways to solve it" },
            { letter: "C", text: "what trace fossils are, to how they are used, to their limits" },
            { letter: "D", text: "one scientist's career to the discoveries she made" }
          ],
          correct: "C"
        },
        {
          id: "soupy",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the example of the three-toed track in sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "show how mud conditions can mislead scientists about size" },
            { letter: "B", text: "prove that three-toed animals were larger than others" },
            { letter: "C", text: "explain why most trackways are found near shorelines" },
            { letter: "D", text: "suggest that the herd in sentence 15 was made of young animals" }
          ],
          correct: "A"
        },
        {
          id: "frustrating",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "By calling the lack of a signature a frustrating limitation in sentence 17, the author conveys an attitude toward trace fossils that is —",
          choices: [
            { letter: "A", text: "doubtful that they should be studied at all" },
            { letter: "B", text: "amused by the mistakes researchers have made" },
            { letter: "C", text: "angry at scientists who rely on them too much" },
            { letter: "D", text: "candid about a weakness while still valuing them" }
          ],
          correct: "D"
        },
        {
          id: "paleo",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word paleontologists in sentence 4 begins with paleo-, as do Paleolithic and paleography. In all three words, paleo- most nearly means —",
          choices: [
            { letter: "A", text: "stone or rock" },
            { letter: "B", text: "ancient or very old" },
            { letter: "C", text: "bone or skeleton" },
            { letter: "D", text: "the study of something" }
          ],
          correct: "B"
        },
        {
          id: "leisurely",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word leisurely most nearly means —",
          choices: [
            { letter: "A", text: "uneven and limping" },
            { letter: "B", text: "careful and nervous" },
            { letter: "C", text: "unhurried and relaxed" },
            { letter: "D", text: "steady and very long" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 5 · INFORMATIONAL · sign language ───────────────────────── */
    {
      id: "g11-ri-c113-grammarofhands",
      family: "G11",
      title: "The Grammar of the Hands",
      kind: "Informational · 11.RI",
      blurb: "Three common beliefs about sign languages, and the evidence linguists use to show that each one is wrong.",
      level: 3,
      passage:
        "<p>" + N(1) + "Ask a room of hearing people what sign language is, and many will describe a kind of elaborate pantomime: gestures that act out ideas, simple enough that anyone could guess their meaning. " +
        N(2) + "Others assume there is a single sign language used by Deaf people everywhere, or that signing is simply spoken English translated onto the hands. " +
        N(3) + "Linguists, the scientists who study how languages work, have spent decades showing that all three beliefs are mistaken. " +
        N(4) + "Sign languages are complete, natural languages, as rich and rule-governed as any spoken tongue, and the evidence for that claim comes from looking closely at how they are built.</p>" +
        "<p>" + N(5) + "Consider first the idea of a universal sign language. " +
        N(6) + "In reality, well over a hundred distinct sign languages are in use around the world, and they are not tied to the spoken languages around them. " +
        N(7) + "American Sign Language and British Sign Language, for instance, are used in countries that share English, yet a signer of one cannot easily understand the other; their manual alphabets are not even formed with the same number of hands. " +
        N(8) + "Like spoken languages, sign languages develop within communities, and they diverge wherever those communities are separated by distance and history.</p>" +
        "<p>" + N(9) + "Nor are signs mostly pantomime. " +
        N(10) + "A few signs do resemble what they represent, much as a handful of spoken words imitate sounds, but most are arbitrary: a person who does not know the language could watch a fluent conversation for an hour and grasp almost nothing. " +
        N(11) + "What makes the language work is its grammar, and that grammar takes advantage of the one resource speech lacks, which is space. " +
        N(12) + "A signer can place a person or object at a point in the air and then refer back to it simply by pointing or by moving a verb toward that location, a system that does the work English handles with pronouns and word order.</p>" +
        "<p>" + N(13) + "Grammar in sign languages also lives on the face. " +
        N(14) + "Raised eyebrows, a tilt of the head, or a particular shape of the mouth can turn a statement into a question, mark a clause as conditional, or show that an action was done carelessly or with great effort. " +
        N(15) + "To a hearing observer these expressions may look like emotion, but to a fluent signer they are as essential as verb endings; leaving them out does not make a sentence calmer, it makes it ungrammatical.</p>" +
        "<p>" + N(16) + "Perhaps the most striking evidence comes from studies of how new sign languages are born. " +
        N(17) + "When Deaf children who have no shared language are brought together, such as at a newly opened school, they quickly create a system of gestures to communicate. " +
        N(18) + "Researchers have observed that the first generation's system is often simple and inconsistent. " +
        N(19) + "Yet when younger children enter the community and learn from those older signers, they do not merely copy what they see; they regularize it, adding consistent rules for things like verb agreement and the use of space. " +
        N(20) + "Within a few generations, the result can be a fully developed language. " +
        N(21) + "This pattern suggests that the capacity for grammar is not tied to the voice or the ear but belongs to the human mind itself, ready to take whatever form a community makes available.</p>" +
        "<p>" + N(22) + "None of this means that learning to sign is easy for hearing adults, any more than learning Japanese or Finnish is. " +
        N(23) + "It means that the effort deserves to be taken seriously. " +
        N(24) + "A sign language is not a substitute for language; it is language, carried in a different channel.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"The Grammar of the Hands\"?",
          choices: [
            { letter: "A", text: "Hearing adults should learn to sign before studying any spoken language." },
            { letter: "B", text: "Sign languages differ by country because each one copies local speech." },
            { letter: "C", text: "Sign languages are full languages, as their structure and growth show." },
            { letter: "D", text: "Most signs act out the objects and actions that they stand for." }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the discussion of sign languages?",
          choices: [
            { letter: "A", text: "by naming common beliefs and answering each with evidence" },
            { letter: "B", text: "by tracing one sign language from its origin to today" },
            { letter: "C", text: "by weighing the advantages of signing against speech" },
            { letter: "D", text: "by describing a problem and proposing several solutions" }
          ],
          correct: "A"
        },
        {
          id: "notenglish",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence best supports the claim that sign languages are not spoken languages translated onto the hands?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward the beliefs described in sentences 1 and 2 is best described as —",
          choices: [
            { letter: "A", text: "scornful of anyone who has ever held them" },
            { letter: "B", text: "sympathetic and partly in agreement with them" },
            { letter: "C", text: "indifferent to whether readers keep them" },
            { letter: "D", text: "firmly corrective without mocking believers" }
          ],
          correct: "D"
        },
        {
          id: "calmer",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 15, the author says that leaving out facial expressions makes a sentence ungrammatical, not calmer, mainly to —",
          choices: [
            { letter: "A", text: "stress that the expressions work as grammar, not mood" },
            { letter: "B", text: "warn hearing learners against showing strong feelings" },
            { letter: "C", text: "suggest that fluent signers are more emotional speakers" },
            { letter: "D", text: "explain why sign languages need no verb endings" }
          ],
          correct: "A"
        },
        {
          id: "born",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the account of new sign languages in sentences 16–21 mainly to —",
          choices: [
            { letter: "A", text: "describe how a particular school taught its first students" },
            { letter: "B", text: "argue that children learn languages faster than adults" },
            { letter: "C", text: "show that grammar comes from the mind, not from speech" },
            { letter: "D", text: "admit that early sign systems were too simple to use" }
          ],
          correct: "C"
        },
        {
          id: "regularize",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The words after the semicolon in sentence 19 show that regularize most nearly means to —",
          choices: [
            { letter: "A", text: "simplify by dropping signs" },
            { letter: "B", text: "teach in a formal classroom" },
            { letter: "C", text: "repeat exactly as first seen" },
            { letter: "D", text: "make consistent and rule-based" }
          ],
          correct: "D"
        },
        {
          id: "diverge",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word diverge in sentence 8 comes from Latin parts meaning to turn apart. Based on this and the context, sign languages that diverge —",
          choices: [
            { letter: "A", text: "blend into a single shared system" },
            { letter: "B", text: "grow more different from one another" },
            { letter: "C", text: "borrow their grammar from speech" },
            { letter: "D", text: "disappear when communities move" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 6 · VOCABULARY · a zoo keeper ───────────────────────── */
    {
      id: "g11-rv-c113-elephantbarn",
      family: "G11",
      title: "Before the Gates Open",
      kind: "Vocabulary · 11.RV",
      blurb: "A long day with an elephant keeper who spends far more time watching and writing than playing with animals.",
      level: 1,
      passage:
        "<p>" + N(1) + "At 6:15 on a gray October morning, two hours before the first visitors arrive at Brookhaven Zoo, Dalia Montserrat is already standing in the elephant barn with a clipboard, a flashlight, and a bucket of chopped sweet potatoes. " +
        N(2) + "She has worked as a keeper here for eleven years, and she says the job looks nothing like what most people imagine. " +
        N(3) + "\"Visitors see us tossing a melon into the yard and think we spend the day playing with animals,\" she says. " +
        N(4) + "\"Mostly we clean, we watch, and we write things down.\"</p>" +
        "<p>" + N(5) + "The writing down matters more than outsiders realize. " +
        N(6) + "Each of the zoo's three elephants follows a daily <strong>regimen</strong>, a fixed plan of meals, exercise, foot care, and training sessions that is repeated in the same order every day. " +
        N(7) + "Dalia records how much each animal eats and drinks, how its feet look, and even the condition of its droppings. " +
        N(8) + "Elephants hide discomfort well, so small changes in these numbers are often the first warning that something is wrong.</p>" +
        "<p>" + N(9) + "Training sessions are the part of the day that visitors find most surprising. " +
        N(10) + "Using only food rewards and praise, keepers teach the elephants to lift a foot, open their mouths, or press an ear against the bars so that a veterinarian can draw blood without sedating them. " +
        N(11) + "None of it works without trust. " +
        N(12) + "Dalia has spent years building a <strong>rapport</strong> with Kesi, the oldest female, a relationship so comfortable that Kesi rumbles a greeting when she hears Dalia's boots in the hallway. " +
        N(13) + "Newer keepers, by contrast, sometimes wait months before Kesi will cooperate with them at all.</p>" +
        "<p>" + N(14) + "This morning Dalia notices that Tembo, the young bull, is <strong>lethargic</strong>. " +
        N(15) + "Normally he paces by the gate at feeding time, trunk swinging, but today he stands in a corner with his head low and ignores the sweet potatoes entirely. " +
        N(16) + "The signs are <strong>subtle</strong>, so faint that a visitor would never notice them, yet to Dalia they are as plain as a fever on a thermometer. " +
        N(17) + "She writes the time on her clipboard and radios the veterinary office.</p>" +
        "<p>" + N(18) + "Knowing when to <strong>intervene</strong> is one of the hardest skills a keeper learns. " +
        N(19) + "Step in too quickly, and the animals never learn to settle problems on their own; wait too long, and a minor illness can become a serious one. " +
        N(20) + "When two of the elephants squabble over a hay feeder, for example, Dalia usually lets them sort it out, but if one animal is cornered and cannot escape, she steps in at once by opening a second gate. " +
        N(21) + "In Tembo's case, the veterinarian decides that a closer look is worthwhile, and by midmorning the cause is found: a sore tooth, easily treated.</p>" +
        "<p>" + N(22) + "Not every animal in Dalia's care keeps her hours. " +
        N(23) + "Later in the afternoon she moves to the small-mammal house, where the bush babies and slow lorises are <strong>nocturnal</strong>, sleeping through the daylight and becoming active only after dark. " +
        N(24) + "To let visitors see them awake, the building uses dim red lights during the day and bright lights at night, tricking the animals' internal clocks into a reversed schedule.</p>" +
        "<p>" + N(25) + "By the time the gates close at five, Dalia has walked nearly eight miles and filled four pages of notes. " +
        N(26) + "She does not mind. " +
        N(27) + "\"The animals can't tell us when something hurts,\" she says, pulling on her jacket. " +
        N(28) + "\"So we have to learn to listen without words.\"</p>",
      claims: [
        {
          id: "regimen",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The explanation after the comma in sentence 6 shows that a regimen is —",
          choices: [
            { letter: "A", text: "a set routine followed on a regular schedule" },
            { letter: "B", text: "a group of animals that are housed together" },
            { letter: "C", text: "a special diet given only to sick animals" },
            { letter: "D", text: "a strict penalty for an animal's misbehavior" }
          ],
          correct: "A"
        },
        {
          id: "rapport",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words from sentence 12 best help the reader understand the meaning of rapport?",
          choices: [
            { letter: "A", text: "Kesi, the oldest female" },
            { letter: "B", text: "a relationship so comfortable" },
            { letter: "C", text: "Dalia's boots in the hallway" },
            { letter: "D", text: "Dalia has spent years" }
          ],
          correct: "B"
        },
        {
          id: "lethargic",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on the details in sentence 15, the word lethargic in sentence 14 most nearly means —",
          choices: [
            { letter: "A", text: "hungry and restless" },
            { letter: "B", text: "angry and aggressive" },
            { letter: "C", text: "sluggish and lacking energy" },
            { letter: "D", text: "frightened of the other elephants" }
          ],
          correct: "C"
        },
        {
          id: "subtle",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author could have written small instead of subtle in sentence 16. Compared with small, the word subtle adds a sense that the signs are —",
          choices: [
            { letter: "A", text: "too minor to be worth reporting" },
            { letter: "B", text: "likely to disappear by themselves" },
            { letter: "C", text: "caused by something the visitors did" },
            { letter: "D", text: "hard to detect without close attention" }
          ],
          correct: "D"
        },
        {
          id: "intervene",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word intervene in sentence 18 begins with the prefix inter-, as do interrupt and international. Based on this, to intervene is to —",
          choices: [
            { letter: "A", text: "watch closely from a safe distance" },
            { letter: "B", text: "come between others to change events" },
            { letter: "C", text: "leave a place quickly and quietly" },
            { letter: "D", text: "repeat an action until it is learned" }
          ],
          correct: "B"
        },
        {
          id: "squabble",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word squabble most nearly means to —",
          choices: [
            { letter: "A", text: "quarrel over something minor" },
            { letter: "B", text: "share food with each other" },
            { letter: "C", text: "trumpet loudly to the keeper" },
            { letter: "D", text: "wander away from the group" }
          ],
          correct: "A"
        },
        {
          id: "nocturnal",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word nocturnal in sentence 23 contains the Latin root noct-, meaning night, also found in nocturne. Sentence 23 confirms that nocturnal animals —",
          choices: [
            { letter: "A", text: "live in small, dark buildings" },
            { letter: "B", text: "sleep through both day and night" },
            { letter: "C", text: "can be seen by visitors only at night" },
            { letter: "D", text: "are active mainly during the dark hours" }
          ],
          correct: "D"
        },
        {
          id: "listen",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "Dalia's phrase listen without words in sentence 28 most nearly refers to —",
          choices: [
            { letter: "A", text: "keeping the barn quiet so animals can rest" },
            { letter: "B", text: "training the elephants to respond to sounds" },
            { letter: "C", text: "reading behavior closely for signs of trouble" },
            { letter: "D", text: "asking the veterinarian to explain an illness" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 7 · PAIRED TEXTS · a wildfire lookout ───────────────────────── */
    {
      id: "g11-dsr-c113-hawkinspeak",
      family: "G11",
      title: "Eyes on Hawkins Peak",
      kind: "Paired texts · 11.DSR",
      blurb: "A fire district explains why cameras will replace its last staffed lookout, and a lookout of nineteen summers answers.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Ridgeline County Fire Protection District, \"A New Set of Eyes\"</strong></p>" +
        "<p>" + N(1) + "This summer, the Ridgeline County Fire Protection District will complete a network of fourteen high-definition cameras mounted on towers and ridgetops across the county's forested land. " +
        N(2) + "Each camera rotates a full circle every two minutes, day and night, and sends its images to a dispatch center in Alder Falls, where trained staff can zoom in on any suspicious haze. " +
        N(3) + "Software flags possible smoke automatically, and when two cameras see the same column, the system calculates its location to within a few hundred yards. " +
        N(4) + "The network replaces three staffed fire lookouts, the last of which, Hawkins Peak, will close at the end of the season.</p>" +
        "<p>" + N(5) + "The decision was not made lightly. " +
        N(6) + "Lookouts have served the county for nearly a century, and we honor the people who climbed those stairs every morning. " +
        N(7) + "But the numbers are difficult to ignore. " +
        N(8) + "A human lookout can watch for about ten hours a day during fire season; the cameras watch every hour of every day, including the nights when lightning storms are most common. " +
        N(9) + "Last year, our three lookouts covered roughly forty percent of the district's forest, while the camera network will see nearly ninety percent. " +
        N(10) + "Finding and keeping lookouts has also grown harder, as fewer applicants are willing to live alone on a mountaintop for four months.</p>" +
        "<p>" + N(11) + "The cameras are not perfect. " +
        N(12) + "Fog and low clouds can blind them, and the software sometimes mistakes dust or mist for smoke. " +
        N(13) + "For that reason, every alert is reviewed by a person before crews are sent. " +
        N(14) + "We believe this combination of constant coverage and human judgment will help firefighters reach new fires while they are still small, which remains the single most effective way to protect lives, homes, and forests.</p>" +
        "<p><strong>Text 2 — Corwin Baptiste, \"What the Glass Remembers\"</strong></p>" +
        "<p>" + N(15) + "I spent nineteen summers in the tower on Hawkins Peak, and I will not pretend that a camera cannot see farther at night than I could, or that it ever needs to sleep. " +
        N(16) + "The district is right about that. " +
        N(17) + "What worries me is the word <em>replaces</em>, because a lookout was never only a pair of eyes.</p>" +
        "<p>" + N(18) + "A camera sees smoke; a lookout reads a day. " +
        N(19) + "By my third season I knew which hollows filled with morning fog and which ridges threw up dust when the logging trucks ran, and I could tell a smoke column from a dust cloud by the way it moved long before I could be sure of its color. " +
        N(20) + "I knew the wind on Hawkins had a habit of shifting east around three in the afternoon, so when I reported a fire I could tell the crews not just where it was but which way it would likely run. " +
        N(21) + "No software I have seen yet offers that kind of warning.</p>" +
        "<p>" + N(22) + "There is also the matter of fog. " +
        N(23) + "The district admits the cameras go blind in low cloud, but from the tower I often stood above that cloud, looking down on a white sea with the ridges poking through like islands, and more than once I spotted smoke rising from one of those islands that no valley camera could have seen.</p>" +
        "<p>" + N(24) + "I am not asking the district to keep every tower open forever. " +
        N(25) + "I am asking it to keep one, Hawkins, staffed through the next few seasons, so that someone can compare what the person sees with what the camera sees. " +
        N(26) + "If the cameras truly catch everything I did, I will be glad to have been wrong. " +
        N(27) + "If they don't, we will have learned it before a fire teaches us.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by both the district's statement and Baptiste's essay?",
          choices: [
            { letter: "A", text: "Human judgment still matters in detecting fires accurately." },
            { letter: "B", text: "Every lookout tower in the county should stay open for good." },
            { letter: "C", text: "Cameras see through fog and low cloud better than people do." },
            { letter: "D", text: "The district should cancel its plan for a camera network." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the purposes of the two texts differ?",
          choices: [
            { letter: "A", text: "Text 1 criticizes lookouts, while Text 2 praises cameras." },
            { letter: "B", text: "Text 1 recruits new lookouts, while Text 2 recalls retirement." },
            { letter: "C", text: "Text 1 defends a decision, while Text 2 asks that it be tested first." },
            { letter: "D", text: "Text 1 reports a fire, while Text 2 tells how it was first spotted." }
          ],
          correct: "C"
        },
        {
          id: "replaces",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Sentence 17 of Text 2 most directly responds to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "B"
        },
        {
          id: "knowledge",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that describe knowledge a lookout gains that, according to the writer, the cameras lack.",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 25" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "fog",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "In sentence 23, Baptiste uses the problem of fog mainly to —",
          choices: [
            { letter: "A", text: "show that the district has hidden the cameras' flaws" },
            { letter: "B", text: "describe the most beautiful view from the tower" },
            { letter: "C", text: "argue that cameras should be moved to the valleys" },
            { letter: "D", text: "turn a weakness Text 1 admits into a case for a lookout" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader who considers both texts could best conclude that the two sides disagree mainly about —",
          choices: [
            { letter: "A", text: "whether the cameras can see at night" },
            { letter: "B", text: "whether cameras can fully replace a person" },
            { letter: "C", text: "whether small fires are easier to put out" },
            { letter: "D", text: "whether lookouts served the county well" }
          ],
          correct: "B"
        },
        {
          id: "advantage",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to Text 1, which advantage do the cameras have over staffed lookouts?",
          choices: [
            { letter: "A", text: "They can predict which way a new fire will run." },
            { letter: "B", text: "They never confuse dust or mist with smoke." },
            { letter: "C", text: "They watch around the clock, even in night storms." },
            { letter: "D", text: "They send crews out without waiting for review." }
          ],
          correct: "C"
        },
        {
          id: "honor",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In Text 1, the statement in sentence 6 that the district honors its lookouts mainly functions to —",
          choices: [
            { letter: "A", text: "announce a ceremony for the retiring lookouts" },
            { letter: "B", text: "argue that the old towers should stay open" },
            { letter: "C", text: "blame the lookouts for the forest left unwatched" },
            { letter: "D", text: "show respect before giving reasons for the change" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 8 · PAIRED TEXTS · a zoo keeper ───────────────────────── */
    {
      id: "g11-dsr-c113-puzzlefeeder",
      family: "G11",
      title: "A Puzzle for Tashi",
      kind: "Paired texts · 11.DSR",
      blurb: "A zoo explains its enrichment program to visitors, and a keeper's journal shows what happens when a snow leopard refuses to play.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Larchmont Zoo, \"Why We Give Animals Puzzles\"</strong></p>" +
        "<p>" + N(1) + "Visitors to Larchmont Zoo sometimes notice strange objects in our habitats: cardboard boxes stuffed with hay, frozen blocks of fish, plastic balls with holes drilled in them. " +
        N(2) + "These items are part of our enrichment program, which aims to give animals the kinds of challenges they would face in the wild. " +
        N(3) + "A wild snow leopard may spend hours each day tracking, stalking, and working for its food. " +
        N(4) + "In a zoo, where meals arrive on schedule, an animal without challenges can become bored, and boredom can lead to repetitive behaviors such as pacing the same path over and over.</p>" +
        "<p>" + N(5) + "Our keepers design enrichment in several categories. " +
        N(6) + "Food puzzles require animals to search, dig, or handle objects to reach a meal. " +
        N(7) + "Sensory enrichment introduces new smells, sounds, or textures, such as spices sprinkled on a log or the recorded calls of other species. " +
        N(8) + "Environmental enrichment changes the habitat itself, by adding new climbing structures, digging pits, or pools, or simply by rearranging the rocks and logs an animal already knows.</p>" +
        "<p>" + N(9) + "Every enrichment item is approved by our animal care team for safety, and keepers record how each animal responds. " +
        N(10) + "Over time, these records show which items an animal enjoys and which it ignores. " +
        N(11) + "Studies at many accredited zoos have found that well-designed enrichment reduces pacing and other stress behaviors and encourages animals to use more of their space. " +
        N(12) + "Enrichment is not a reward for good behavior or a show for visitors; it is a daily part of caring for animals' minds as well as their bodies. " +
        N(13) + "The next time you see a tiger shredding a cardboard box or a bear pawing at a frozen block of fruit, you are watching that care in action.</p>" +
        "<p><strong>Text 2 — From the journal of keeper Tomasz Wierzbicki</strong></p>" +
        "<p>" + N(14) + "<em>March 3.</em> Gave Tashi the new puzzle feeder this morning, a heavy ball with chunks of meat hidden inside that tumble out when it rolls. " +
        N(15) + "The design team was excited about it, since the same model has been a hit with the jaguars across the path. " +
        N(16) + "Tashi sniffed it once, flattened her ears, and went back to her rock ledge, where she stayed for the rest of the day. " +
        N(17) + "Recorded: no interaction.</p>" +
        "<p>" + N(18) + "<em>March 6.</em> Tried the feeder again, this time in the shade where she likes to rest. " +
        N(19) + "Same result, except she watched it for a while from the ledge, the way she watches the crows that land in her yard: interested, but not enough to move. " +
        N(20) + "I'm starting to think the problem is not the puzzle but the plastic. " +
        N(21) + "It doesn't smell like anything she cares about.</p>" +
        "<p>" + N(22) + "<em>March 9.</em> Rubbed the outside of the ball with a goat-hair blanket from the farm exhibit before putting it out. " +
        N(23) + "Within a minute Tashi was off the ledge. " +
        N(24) + "She circled the ball twice, batted it, and then rolled it the length of the yard, chasing it as the meat fell out. " +
        N(25) + "Thirty-five minutes of steady activity, the longest I've recorded since she arrived.</p>" +
        "<p>" + N(26) + "<em>March 10.</em> Told the design team. " +
        N(27) + "They want to add scent to every feeder now, which is fine, but I reminded them that Tashi is not every leopard. " +
        N(28) + "Dorje, our older male, ignored the goat smell completely this afternoon and only got interested when I hid the ball under a pile of leaves. " +
        N(29) + "The categories in our handbook are useful, but the animal decides which one it belongs to. " +
        N(30) + "Tomorrow: leaves for Dorje, goat for Tashi, and careful notes on both, so we can see whether the novelty wears off.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of Text 1?",
          choices: [
            { letter: "A", text: "Visitors enjoy watching animals tear apart cardboard boxes." },
            { letter: "B", text: "Enrichment keeps zoo animals' minds healthy as part of daily care." },
            { letter: "C", text: "Snow leopards need more space than most other zoo animals." },
            { letter: "D", text: "Animals that pace are being rewarded for poor behavior." }
          ],
          correct: "B"
        },
        {
          id: "wild",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Text 1 describes a wild snow leopard in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "explain why snow leopards are hard to see in zoos" },
            { letter: "B", text: "warn visitors that big cats can be dangerous" },
            { letter: "C", text: "show that zoo snow leopards eat more than wild ones" },
            { letter: "D", text: "contrast hard-won wild meals with easy zoo meals" }
          ],
          correct: "D"
        },
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which practice is described in both Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Visitors help choose which enrichment items are used." },
            { letter: "B", text: "Scented items are given to every animal in the zoo." },
            { letter: "C", text: "Keepers write down how animals respond to items." },
            { letter: "D", text: "Feeders are tested on tigers before snow leopards." }
          ],
          correct: "C"
        },
        {
          id: "adds",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does Text 2 add to the information in Text 1?",
          choices: [
            { letter: "A", text: "It shows that an item may work only after it is fitted to one animal." },
            { letter: "B", text: "It proves that enrichment does not reduce pacing in snow leopards." },
            { letter: "C", text: "It explains how the animal care team approves items for safety." },
            { letter: "D", text: "It describes the zoo's history of caring for big cats in winter." }
          ],
          correct: "A"
        },
        {
          id: "categories",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Using the categories in Text 1, the feeder that finally worked for Tashi on March 9 combined —",
          choices: [
            { letter: "A", text: "environmental enrichment and a visitor show" },
            { letter: "B", text: "a food puzzle and environmental enrichment" },
            { letter: "C", text: "sensory and environmental enrichment" },
            { letter: "D", text: "a food puzzle and sensory enrichment" }
          ],
          correct: "D"
        },
        {
          id: "ignored",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that show an animal ignoring an enrichment item, the kind of response Text 1 says keepers track.",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 24" },
            { letter: "C", text: "Sentence 28" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "qualify",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Sentence 29 of Text 2 most directly qualifies which idea from Text 1?",
          choices: [
            { letter: "A", text: "that every item must first be approved for safety" },
            { letter: "B", text: "that enrichment can be sorted into set categories" },
            { letter: "C", text: "that boredom in a zoo can lead to pacing" },
            { letter: "D", text: "that enrichment is not a show for visitors" }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The two texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "argues against enrichment, while Text 2 supports it" },
            { letter: "B", text: "focuses on tigers, while Text 2 focuses on keepers" },
            { letter: "C", text: "explains a program broadly, while Text 2 records trial and error" },
            { letter: "D", text: "uses scientific data, while Text 2 uses only visitor opinions" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 9 · DRAMA · a zoo keeper ───────────────────────── */
    {
      id: "g11-rl-c113-hatchwatch",
      family: "G11",
      title: "Hatch Watch",
      kind: "Drama · 11.RL",
      blurb: "At two in the morning in a zoo's bird nursery, an intern reads the log her veteran supervisor stopped reading years ago.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "The bird nursery at Westmere Zoo, 2:10 a.m. A glass-fronted incubator glows on a steel counter. Inside, a single pale blue crane egg rests on a folded towel, a small star-shaped crack near its top. A clipboard hangs from a hook beside a wall chart of temperatures and humidity levels. BENEDIKT, a senior keeper in his fifties, sits at a desk scrolling through a tablet. YESENIA, a college intern, stands at the incubator.</em></p>" +
        "<p><strong>BENEDIKT:</strong> " + N(2) + "Still pipping. " + N(3) + "She cracked through the shell around eleven, so we're right on schedule.</p>" +
        "<p><strong>YESENIA:</strong> " + N(4) + "How long does it usually take after that?</p>" +
        "<p><strong>BENEDIKT:</strong> " + N(5) + "A day, sometimes more. " + N(6) + "Crane chicks are slow and stubborn, and the worst thing we can do is get impatient on their behalf.</p>" +
        "<p><em>" + N(7) + "YESENIA nods and takes the clipboard from its hook. She flips back through the pages, frowning.</em></p>" +
        "<p><strong>YESENIA:</strong> " + N(8) + "The humidity readings were at fifty-five percent all week. " + N(9) + "The chart on the wall says it should go up once the chick starts pipping.</p>" +
        "<p><strong>BENEDIKT:</strong> <em>(without looking up from his tablet)</em> " + N(10) + "It's handled.</p>" +
        "<p><strong>YESENIA:</strong> " + N(11) + "The chart says sixty-five to seventy, though. " + N(12) + "And the gauge on the incubator says fifty-four.</p>" +
        "<p><em>" + N(13) + "BENEDIKT finally looks over. He crosses to the incubator, squints at the gauge, and taps it with one finger, as if it might change its mind.</em></p>" +
        "<p><strong>BENEDIKT:</strong> " + N(14) + "I raised it at the start of my shift.</p>" +
        "<p><strong>YESENIA:</strong> " + N(15) + "Maybe the water tray ran dry? " + N(16) + "The log shows you filled it at eight, but the heater's been running hot ever since the storm knocked the power out.</p>" +
        "<p><em>" + N(17) + "A pause. BENEDIKT kneels and slides out a shallow tray from beneath the incubator. It is bone dry.</em></p>" +
        "<p><strong>BENEDIKT:</strong> <em>(quietly)</em> " + N(18) + "Well. " + N(19) + "That would do it.</p>" +
        "<p><strong>OKELLO:</strong> <em>(entering with two cups of coffee)</em> " + N(20) + "Do what?</p>" +
        "<p><strong>BENEDIKT:</strong> " + N(21) + "Dry out the membrane. " + N(22) + "If it hardens, she sticks to the shell and can't turn to finish the job. " + N(23) + "Hand me the warm water, would you?</p>" +
        "<p><em>" + N(24) + "OKELLO passes a jug. BENEDIKT refills the tray carefully and slides it back. The three of them watch the gauge. It climbs, slowly: fifty-eight, sixty-one, sixty-four.</em></p>" +
        "<p><strong>OKELLO:</strong> " + N(25) + "How did you catch that at two in the morning?</p>" +
        "<p><strong>BENEDIKT:</strong> <em>(nodding toward YESENIA)</em> " + N(26) + "I didn't.</p>" +
        "<p><strong>YESENIA:</strong> <em>(embarrassed)</em> " + N(27) + "I just read the chart. " + N(28) + "Anybody could have.</p>" +
        "<p><strong>BENEDIKT:</strong> " + N(29) + "Anybody could have, and for six hours nobody did, including the person who taped that chart to the wall. " + N(30) + "Twenty-two years I've done this job, and somewhere along the way I stopped reading the numbers I think I already know.</p>" +
        "<p><em>" + N(31) + "Inside the incubator the egg rocks, once, then again. The star-shaped crack widens into a jagged line.</em></p>" +
        "<p><strong>OKELLO:</strong> " + N(32) + "She's turning.</p>" +
        "<p><strong>BENEDIKT:</strong> " + N(33) + "Nobody touch anything. " + N(34) + "She has to do this part herself; all we can do is give her the right air to do it in.</p>" +
        "<p><em>" + N(35) + "For several minutes no one speaks. The shell splits in a ragged ring, and a damp gray head pushes out, wobbling, eyes shut.</em></p>" +
        "<p><strong>YESENIA:</strong> <em>(whispering)</em> " + N(36) + "She's so ugly.</p>" +
        "<p><strong>OKELLO:</strong> " + N(37) + "They all are, at first. " + N(38) + "Give her a week and she'll be the prettiest thing in the building.</p>" +
        "<p><em>" + N(39) + "BENEDIKT takes the clipboard from YESENIA, writes the time, and then hands it back to her along with his pen. He returns to his desk but leaves the tablet face down.</em></p>" +
        "<p><strong>BENEDIKT:</strong> " + N(40) + "You keep the log tonight. " + N(41) + "And if I ever tell you something's handled again, check anyway.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the night in the Westmere nursery most clearly develop?",
          choices: [
            { letter: "A", text: "Young workers should not question their supervisors." },
            { letter: "B", text: "Animals born in zoos need constant human help to survive." },
            { letter: "C", text: "Fresh attention can catch what long experience overlooks." },
            { letter: "D", text: "Equipment failures are the main danger in caring for animals." }
          ],
          correct: "C"
        },
        {
          id: "admits",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes how Benedikt responds once the dry tray is found?",
          choices: [
            { letter: "A", text: "He owns the mistake and gives Yesenia the credit." },
            { letter: "B", text: "He blames the storm so he can avoid responsibility." },
            { letter: "C", text: "He scolds Yesenia for reading the log without asking." },
            { letter: "D", text: "He tries to keep the problem hidden from Okello." }
          ],
          correct: "A"
        },
        {
          id: "handled",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Benedikt's reply in sentence 10, together with the stage direction that comes with it, suggests that he —",
          choices: [
            { letter: "A", text: "is annoyed that the intern is not watching the egg" },
            { letter: "B", text: "has already noticed the low gauge and fixed it" },
            { letter: "C", text: "wants Yesenia to solve the problem on her own" },
            { letter: "D", text: "assumes the matter is settled without checking" }
          ],
          correct: "D"
        },
        {
          id: "gauge",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "In sentence 13, the stage direction that Benedikt taps the gauge as if it might change its mind suggests that he —",
          choices: [
            { letter: "A", text: "believes the gauge is old and should be replaced" },
            { letter: "B", text: "hopes the low reading is a glitch, not a real problem" },
            { letter: "C", text: "is trying to make Yesenia laugh during a tense wait" },
            { letter: "D", text: "knows exactly what has caused the humidity to fall" }
          ],
          correct: "B"
        },
        {
          id: "ugly",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The exchange between Yesenia and Okello in sentences 36–38 adds a tone that is —",
          choices: [
            { letter: "A", text: "bitter and disappointed" },
            { letter: "B", text: "anxious and fearful" },
            { letter: "C", text: "gently humorous" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "C"
        },
        {
          id: "air",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 34, the phrase give her the right air to do it in most nearly means that the keepers should —",
          choices: [
            { letter: "A", text: "open the incubator so the chick can breathe" },
            { letter: "B", text: "speak softly so the chick is not frightened" },
            { letter: "C", text: "help the chick by peeling away the shell" },
            { letter: "D", text: "keep conditions right so she succeeds alone" }
          ],
          correct: "D"
        },
        {
          id: "clipboard",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The clipboard appears in sentence 7 and again in sentences 39–41. How does its final use resolve the scene?",
          choices: [
            { letter: "A", text: "Benedikt hands over the log, showing new trust in Yesenia." },
            { letter: "B", text: "Benedikt takes back the log to keep Yesenia from erring again." },
            { letter: "C", text: "Yesenia records the hatching to prove she found the problem." },
            { letter: "D", text: "Okello takes charge of the log for the rest of the night shift." }
          ],
          correct: "A"
        },
        {
          id: "pipping",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentences 1–3, the word pipping in sentence 2 most nearly refers to the chick —",
          choices: [
            { letter: "A", text: "calling out to the keepers" },
            { letter: "B", text: "breaking out of its shell" },
            { letter: "C", text: "growing inside the egg" },
            { letter: "D", text: "turning toward the light" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 10 · FUNCTIONAL TEXT · a wildfire lookout ───────────────────────── */
    {
      id: "g11-ri-c113-pellhamguide",
      family: "G11",
      title: "Pellham Lookout Season Guide",
      kind: "Functional text · 11.RI",
      blurb: "A ranger district's guide for volunteers who want to spend part of a summer watching for smoke from a 1936 fire tower.",
      level: 1,
      passage:
        "<p><strong>Granite Fork Ranger District — Volunteer Fire Lookout Program: Season Guide</strong></p>" +
        "<p><strong>About the Program</strong></p>" +
        "<p>" + N(1) + "Each summer, the Granite Fork Ranger District staffs Pellham Lookout, a fire tower built in 1936 on the summit of Pellham Mountain, with trained volunteers who watch for smoke and report it to the district dispatch center. " +
        N(2) + "Since volunteers began staffing the tower in 2009, they have reported more than three hundred smokes, many of them small enough to be put out the same day. " +
        N(3) + "Volunteers also greet hikers who reach the summit, answer questions about fire safety, and record daily weather observations, including temperature, wind speed, and relative humidity. " +
        N(4) + "The program runs from June 15 through September 30.</p>" +
        "<p><strong>Who Can Apply</strong></p>" +
        "<p>" + N(5) + "Applicants must be at least 18 years old by June 1, or at least 16 if they volunteer alongside a parent or guardian who is also accepted into the program. " +
        N(6) + "Every volunteer must be able to hike two miles of steep trail carrying a 25-pound pack and climb the tower's 52 stairs several times a day. " +
        N(7) + "No previous fire experience is required; we will teach you everything you need to know.</p>" +
        "<p><strong>Training</strong></p>" +
        "<p>" + N(8) + "All volunteers must complete a two-day training at the district office in Corbin Falls before their first shift. " +
        N(9) + "Training covers radio procedures, use of the fire finder to locate smoke, lightning safety, and basic first aid. " +
        N(10) + "Sessions are offered on May 17–18 and June 7–8. " +
        N(11) + "Volunteers who miss both sessions cannot be scheduled for the season, with no exceptions.</p>" +
        "<p><strong>Shifts and Lodging</strong></p>" +
        "<p>" + N(12) + "Volunteers sign up for shifts of either four or seven consecutive days. " +
        N(13) + "During a shift, you will live in the lookout's one-room cab, which has a bed, a propane stove, and a solar-powered radio, but no running water or cell service. " +
        N(14) + "The district delivers drinking water each week, and volunteers must pack in their own food, along with a sealed container that keeps it safe from mice and other summit visitors.</p>" +
        "<p><strong>What to Bring</strong></p>" +
        "<p>" + N(15) + "Bring a warm sleeping bag, layers for nights that can drop below freezing even in July, a headlamp, and sturdy boots. " +
        N(16) + "Binoculars are provided, but many volunteers prefer to bring a pair they already know how to use.</p>" +
        "<p><strong>Safety Rules</strong></p>" +
        "<p>" + N(17) + "Your safety comes before any other duty. " +
        N(18) + "During a lightning storm, stay inside the cab, sit on the insulated stool, and keep your hands and feet away from metal; do not go down the stairs until thirty minutes after the last thunder. " +
        N(19) + "Check in with dispatch by radio at 8:00 a.m., noon, and 6:00 p.m. every day. " +
        N(20) + "If you miss two check-ins in a row, a ranger will be sent to the tower to make sure you are safe. " +
        N(21) + "Never leave the summit to investigate a smoke yourself; report its location and let trained crews respond.</p>" +
        "<p><strong>How to Apply</strong></p>" +
        "<p>" + N(22) + "Submit the online application and one reference form by April 15. " +
        N(23) + "Because the tower can host only two volunteers at a time, shifts fill quickly, and applicants are scheduled in the order their completed forms arrive. " +
        N(24) + "Applicants will be contacted for a short phone interview within three weeks. " +
        N(25) + "Returning volunteers who completed at least one full shift last season may skip the interview, but they must still attend one of this year's training sessions. " +
        N(26) + "Questions may be directed to the volunteer coordinator at the district office.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of the Pellham Lookout season guide is to —",
          choices: [
            { letter: "A", text: "persuade hikers to climb to the summit of Pellham Mountain" },
            { letter: "B", text: "explain the history of fire towers in the ranger district" },
            { letter: "C", text: "teach readers how to locate a fire with a fire finder" },
            { letter: "D", text: "tell possible volunteers what is required and how to join" }
          ],
          correct: "D"
        },
        {
          id: "sixteen",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.1",
          stem: "According to the guide, a 16-year-old may volunteer only if —",
          choices: [
            { letter: "A", text: "the volunteer has fought a fire before" },
            { letter: "B", text: "an accepted parent or guardian serves too" },
            { letter: "C", text: "the volunteer signs up for four-day shifts" },
            { letter: "D", text: "a ranger agrees to stay at the tower" }
          ],
          correct: "B"
        },
        {
          id: "notscheduled",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.1",
          stem: "Based on the guide, which applicant would most likely NOT be scheduled for the season?",
          choices: [
            { letter: "A", text: "one who sends forms on time but can train only on June 21" },
            { letter: "B", text: "a 17-year-old applying with a parent who is also accepted" },
            { letter: "C", text: "one who has never worked on or near a wildfire before" },
            { letter: "D", text: "one who would rather work four-day shifts than seven" }
          ],
          correct: "A"
        },
        {
          id: "encourage",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence in the guide is meant mainly to reassure readers rather than to state a rule?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How does arranging the guide under headings such as Training and Safety Rules help an applicant?",
          choices: [
            { letter: "A", text: "It shows the order in which the tower was built." },
            { letter: "B", text: "It lets a reader find one requirement quickly." },
            { letter: "C", text: "It ranks the duties from easiest to hardest." },
            { letter: "D", text: "It compares this program with others nearby." }
          ],
          correct: "B"
        },
        {
          id: "fillquickly",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The guide includes the explanation in sentence 23 mainly to —",
          choices: [
            { letter: "A", text: "warn that the tower is too small to be comfortable" },
            { letter: "B", text: "explain why the phone interview is so short" },
            { letter: "C", text: "suggest that most applicants will be turned away" },
            { letter: "D", text: "urge applicants to send forms well before the deadline" }
          ],
          correct: "D"
        },
        {
          id: "strict",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence shows most clearly that the district will not bend its training requirement?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "consecutive",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word consecutive most nearly means —",
          choices: [
            { letter: "A", text: "following one after another" },
            { letter: "B", text: "chosen by the volunteer" },
            { letter: "C", text: "spread across the summer" },
            { letter: "D", text: "paid at a daily rate" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 11 · ARGUMENT · fossils ───────────────────────── */
    {
      id: "g11-ri-c113-letthemdig",
      family: "G11",
      title: "Let the Amateurs Dig",
      kind: "Argument · 11.RI",
      blurb: "An opinion writer argues that public-land rules should turn casual fossil hunters into trained partners instead of suspects.",
      level: 3,
      passage:
        "<p>" + N(1) + "Nearly every fossil-rich county has a story like the one from Halvorsen Flats. " +
        N(2) + "In the spring of a dry year, a retired bus driver walking his dog noticed a row of dark bumps weathering out of a gully: the vertebrae of a marine reptile that turned out to be the most complete of its kind ever found in the region. " +
        N(3) + "He did exactly what we should want such a person to do. " +
        N(4) + "He photographed the bones, marked the location with his phone, left everything in place, and called the state museum. " +
        N(5) + "Today the skeleton is the centerpiece of a gallery that thousands of schoolchildren visit every year.</p>" +
        "<p>" + N(6) + "Stories like this are not rare, and they point to a truth that our rules on public land too often ignore: amateurs find a large share of the fossils that end up in museums. " +
        N(7) + "Professional paleontologists are few, their field seasons are short, and the land that might hold important specimens covers millions of acres. " +
        N(8) + "Erosion, meanwhile, never takes a season off. " +
        N(9) + "Every rainstorm exposes new bones, and every year that passes without someone noticing them is a year in which wind, frost, and running water grind them toward dust.</p>" +
        "<p>" + N(10) + "Yet in many places, the law treats casual collectors as a problem to be managed rather than an asset to be used. " +
        N(11) + "Rules on some public lands forbid collecting even common fossils, such as small shells, and the penalties for mistakes can be severe enough to frighten people away from reporting what they find. " +
        N(12) + "A hiker who is unsure whether picking up a shell was legal is unlikely to call a museum about the bone lying next to it.</p>" +
        "<p>" + N(13) + "Critics of amateur collecting raise a serious objection, and it deserves a direct answer. " +
        N(14) + "A fossil's value to science depends partly on its context: the exact layer of rock it came from, the other fossils around it, and the position in which it lay. " +
        N(15) + "When an untrained collector pries a specimen loose and carries it home, that information can be lost forever. " +
        N(16) + "Critics also worry, with reason, that rare fossils may be sold to private buyers and disappear from public view.</p>" +
        "<p>" + N(17) + "These concerns argue for better rules, not for shutting amateurs out. " +
        N(18) + "A sensible system would allow the public to collect common shell and plant fossils in reasonable amounts, while requiring that any vertebrate fossil, such as a bone or tooth of a backboned animal, be left in place and reported. " +
        N(19) + "It would offer free training through museums and parks, teaching volunteers how to photograph, record, and protect a find. " +
        N(20) + "And it would recognize finders publicly, as the Halvorsen Flats museum did when it named its gallery for the man who found its reptile, because recognition is a stronger motive than fear.</p>" +
        "<p>" + N(21) + "Some will say that even trained amateurs make mistakes, and they are right. " +
        N(22) + "Professionals make mistakes, too. " +
        N(23) + "The real choice is not between perfect science and careless digging; it is between thousands of informed eyes on the land and a handful of experts who cannot possibly be everywhere at once. " +
        N(24) + "The fossils are coming out of the ground whether anyone is watching or not. " +
        N(25) + "The only question is whether someone will be there, ready and willing, to make sure they reach the rest of us.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the central claim of \"Let the Amateurs Dig\"?",
          choices: [
            { letter: "A", text: "Rules should welcome trained amateurs while protecting key fossils." },
            { letter: "B", text: "Amateur collectors should be allowed to keep any fossil they find." },
            { letter: "C", text: "Professional paleontologists are less careful than most amateurs." },
            { letter: "D", text: "Erosion is the greatest threat that fossil sites face today." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches how the author builds the argument?",
          choices: [
            { letter: "A", text: "a history of fossil laws told in time order" },
            { letter: "B", text: "a comparison of collecting rules in two regions" },
            { letter: "C", text: "a list of statistics followed by a summary" },
            { letter: "D", text: "an example, a claim, objections, then a plan" }
          ],
          correct: "D"
        },
        {
          id: "strengthen",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which evidence, if added, would most strengthen the claim in sentence 6?",
          choices: [
            { letter: "A", text: "a list of rare fossils recently offered for sale online" },
            { letter: "B", text: "a description of how frost slowly breaks apart rock" },
            { letter: "C", text: "data on what share of museum fossils amateurs found" },
            { letter: "D", text: "a profile of one professional paleontologist's career" }
          ],
          correct: "C"
        },
        {
          id: "critics",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward the critics described in sentences 13–16 is best described as —",
          choices: [
            { letter: "A", text: "dismissive of their concerns as exaggerated" },
            { letter: "B", text: "respectful, granting that their worries are real" },
            { letter: "C", text: "fully persuaded that their view should win" },
            { letter: "D", text: "puzzled about what they are objecting to" }
          ],
          correct: "B"
        },
        {
          id: "hiker",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The example of the unsure hiker in sentence 12 mainly serves to —",
          choices: [
            { letter: "A", text: "show how harsh rules can keep key finds from being reported" },
            { letter: "B", text: "suggest that most hikers do not know what fossils look like" },
            { letter: "C", text: "argue that shells are more valuable to science than bones" },
            { letter: "D", text: "explain why museums rarely answer calls from the public" }
          ],
          correct: "A"
        },
        {
          id: "return",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author returns to the Halvorsen Flats story in sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "admit that the bus driver made a few errors" },
            { letter: "B", text: "prove that marine reptiles lived in the region" },
            { letter: "C", text: "suggest that every finder deserves a gallery" },
            { letter: "D", text: "show that honoring finders has already worked" }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 14, the explanation after the colon shows that a fossil's context is —",
          choices: [
            { letter: "A", text: "the price a museum would pay for it" },
            { letter: "B", text: "the name scientists give its species" },
            { letter: "C", text: "the setting and position it was found in" },
            { letter: "D", text: "the age of the animal when it died" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from the passage is an opinion presented as if it were a general truth?",
          choices: [
            { letter: "A", text: "He photographed the bones, marked the location with his phone" },
            { letter: "B", text: "recognition is a stronger motive than fear" },
            { letter: "C", text: "their field seasons are short" },
            { letter: "D", text: "the skeleton is the centerpiece of a gallery" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
