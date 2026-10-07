/* SOL Labyrinth — Grade 11 medium packs (nights 20–45): literary, poetry, drama, informational,
 * functional, argument, vocabulary and paired texts for the G11 family. Topics: a high school
 * orchestra, bike repair and cycling, a local history museum, night-sky astronomy.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g11-rl-c97-secondchair",
      family: "G11",
      title: "Second Chair",
      kind: "Literary · 11.RL",
      blurb: "Inés loses first chair to a new sophomore and finds out what the second seat is for.",
      level: 1,
      passage:
        "<p>" + N(1) + "The seating list went up on the orchestra room door at 7:40, and Inés Calderón read it the way people read weather reports, hoping the bad news was meant for somebody else. " +
        N(2) + "Second chair, first violins. " +
        N(3) + "Above her name, in the same plain type, was Mei Lin Huang, a sophomore who had moved from Ohio in October and who practiced, as far as anyone could tell, in her sleep. " +
        N(4) + "Inés had sat first chair for two years. " +
        N(5) + "She told herself she did not care, and then she spent all of first period caring. " +
        N(6) + "At rehearsal Mr. Abernathy started the symphony without a word of explanation, as if seating were as ordinary as attendance. " +
        N(7) + "Inés played stiffly, pressing her bow so hard that the strings hissed. " +
        N(8) + "Then, in the slow movement, Mei missed an entrance by half a beat and froze, her face going pale above her chin rest. " +
        N(9) + "Without deciding to, Inés leaned closer and breathed the count, \"two, and,\" so quietly that only her stand partner could hear. " +
        N(10) + "Mei came in cleanly on the next bar. " +
        N(11) + "After rehearsal, Mei caught her by the case rack and said, \"Thank you. I lose my place when I'm scared.\" " +
        N(12) + "\"Everybody does,\" Inés said, surprised to find that she meant it. " +
        N(13) + "Walking to second period, she realized that a stand has two chairs for a reason, and that the person in the second one is often the one keeping time." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Second Chair\"?",
          choices: [
            { letter: "A", text: "Talent matters less than seniority in a school orchestra." },
            { letter: "B", text: "Supporting others can matter as much as being ranked first." },
            { letter: "C", text: "Competition between friends always damages the friendship." },
            { letter: "D", text: "New students rarely understand the customs of a group." }
          ],
          correct: "B"
        },
        {
          id: "weather",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing the way Inés reads the list to reading a weather report conveys that she —",
          choices: [
            { letter: "A", text: "expects the seating to change as often as the weather" },
            { letter: "B", text: "reads the list quickly without paying close attention" },
            { letter: "C", text: "believes Mr. Abernathy posts the list carelessly" },
            { letter: "D", text: "hopes the disappointing news applies to someone else" }
          ],
          correct: "D"
        },
        {
          id: "count",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Inés's action in sentence 9 reveals that she —",
          choices: [
            { letter: "A", text: "helps Mei by instinct despite her own disappointment" },
            { letter: "B", text: "wants Mr. Abernathy to notice her skill and reseat her" },
            { letter: "C", text: "is annoyed that Mei's mistake might spoil the rehearsal" },
            { letter: "D", text: "plans to remind Mei later that she still needs help" }
          ],
          correct: "A"
        },
        {
          id: "stiffly",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 7, the word stiffly suggests that Inés is playing —",
          choices: [
            { letter: "A", text: "louder than the rest of the section on purpose" },
            { letter: "B", text: "with careful attention to the conductor's tempo" },
            { letter: "C", text: "with a tension that reflects her hurt feelings" },
            { letter: "D", text: "on an instrument that needs to be repaired" }
          ],
          correct: "C"
        },
        {
          id: "fragment",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Sentence 2 is written as a short fragment mainly to —",
          choices: [
            { letter: "A", text: "stress the blunt shock of the seating result" },
            { letter: "B", text: "show that Inés cannot read the list clearly" },
            { letter: "C", text: "introduce Mei before the reader meets her" },
            { letter: "D", text: "suggest that the list has been posted in error" }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does sentence 13 resolve Inés's conflict about her new seat?",
          choices: [
            { letter: "A", text: "She decides to challenge Mei for first chair next term." },
            { letter: "B", text: "She learns that Mr. Abernathy will rotate the seats." },
            { letter: "C", text: "She sees second chair as a role with its own value." },
            { letter: "D", text: "She admits that she never wanted first chair at all." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c97-truing",
      family: "G11",
      title: "Truing the Wheel",
      kind: "Literary · 11.RL",
      blurb: "In his grandfather's shed, Nkosi learns that a bent wheel cannot be bullied straight.",
      level: 2,
      passage:
        "<p>" + N(1) + "The wheel wobbled like a dinner plate set spinning on a table, and every time it passed the brake pad it kissed the rubber with a soft, accusing tick. " +
        N(2) + "Nkosi Dlamini had found the bicycle in his grandfather's shed under a tarp and three seasons of dust, its green paint faded to the color of pond water. " +
        N(3) + "He wanted it riding by Saturday, when the cycling club met at the library lot. " +
        N(4) + "His grandfather sat on an upturned crate and watched him twist a spoke a full turn, then another, until the wobble moved to the other side and grew worse. " +
        N(5) + "\"You are arguing with it,\" the old man said. " +
        N(6) + "He took the spoke wrench, set the wheel spinning, and held a thumb near the rim to find where it touched. " +
        N(7) + "Then he turned a single spoke a quarter turn, no more, and spun the wheel again. " +
        N(8) + "\"A wheel is a committee,\" he said. \"Every spoke has to agree a little.\" " +
        N(9) + "For an hour Nkosi worked that way, a quarter turn here, a quarter turn opposite, listening for the tick to fade. " +
        N(10) + "Twice he lost patience and reached for a bigger turn, and twice his grandfather simply cleared his throat. " +
        N(11) + "By the time the porch light came on, the rim slid past the brake pad in perfect silence. " +
        N(12) + "Nkosi spun it one more time just to hear nothing. " +
        N(13) + "His grandfather stood, brushed off his trousers, and said only, \"Saturday, then,\" which Nkosi understood was the highest praise the shed had ever heard." +
        "</p>",
      claims: [
        {
          id: "plate",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing the wheel to a spinning dinner plate mainly emphasizes —",
          choices: [
            { letter: "A", text: "how old and fragile the bicycle has become" },
            { letter: "B", text: "how loudly the brake pad scrapes the rubber" },
            { letter: "C", text: "how badly the rim wobbles from side to side" },
            { letter: "D", text: "how quickly the wheel spins when it is pushed" }
          ],
          correct: "C"
        },
        {
          id: "committee",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The grandfather's statement in sentence 8 that \"a wheel is a committee\" is best described as —",
          choices: [
            { letter: "A", text: "a metaphor suggesting the spokes must be balanced together" },
            { letter: "B", text: "an exaggeration meant to make the repair sound impossible" },
            { letter: "C", text: "an ironic remark showing that he dislikes group decisions" },
            { letter: "D", text: "an understatement that hides how simple the job really is" }
          ],
          correct: "A"
        },
        {
          id: "arguing",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 5, the grandfather says Nkosi is \"arguing with\" the wheel to suggest that Nkosi is —",
          choices: [
            { letter: "A", text: "complaining out loud about the difficult repair" },
            { letter: "B", text: "using the wrong tool for the spokes on this wheel" },
            { letter: "C", text: "refusing to listen to the advice of the cycling club" },
            { letter: "D", text: "forcing large corrections instead of working gently" }
          ],
          correct: "D"
        },
        {
          id: "nothing",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 12, in which Nkosi spins the wheel \"just to hear nothing,\" mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that the brake pad has fallen off the frame" },
            { letter: "B", text: "show his satisfaction in the silence he has earned" },
            { letter: "C", text: "reveal that he doubts the repair will hold for long" },
            { letter: "D", text: "explain why his grandfather finally leaves the shed" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story about Nkosi and the wheel most clearly develop?",
          choices: [
            { letter: "A", text: "Old machines are usually better built than new ones." },
            { letter: "B", text: "Young people should not attempt repairs by themselves." },
            { letter: "C", text: "A deadline is the best motivation for finishing a task." },
            { letter: "D", text: "Patient, small adjustments often succeed where force fails." }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The events of \"Truing the Wheel\" are organized mainly around —",
          choices: [
            { letter: "A", text: "Nkosi's search for the bicycle in the crowded shed" },
            { letter: "B", text: "a series of club rides that test the repaired wheel" },
            { letter: "C", text: "a shift from Nkosi's hasty method to a patient one" },
            { letter: "D", text: "a disagreement that ends with Nkosi leaving angrily" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c97-donation",
      family: "G11",
      title: "The Donation",
      kind: "Literary · 11.RL",
      blurb: "A dented quarry pail arrives at a county museum that already owns four of them.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Harlow County Museum accepted donations on the first Tuesday of the month, which meant that Adaeze Nwosu, sixteen and the newest volunteer, spent the afternoon at a folding table beside a sign that read ALL ITEMS SUBJECT TO REVIEW. " +
        N(2) + "Most visitors brought what attics produce: christening gowns, a bayonet of doubtful origin, letters nobody could read. " +
        N(3) + "At four o'clock a man in a pressed windbreaker set a dented tin lunch pail on the table as carefully as if it were a cake. " +
        N(4) + "\"My father carried this to the quarry for thirty-one years,\" he said. \"I thought it might belong here.\" " +
        N(5) + "Adaeze glanced toward Ms. Lindqvist, the curator, who examined the pail for the length of one polite breath and explained that the museum already owned four quarry pails, all in better condition. " +
        N(6) + "The man nodded as though he had expected this, the way a person nods at rain. " +
        N(7) + "He did not pick up the pail, however. " +
        N(8) + "Instead he began to tell Adaeze about the dent: a slab that slipped in 1958, his father's quick sideways step, the pail that took the blow his father's leg would have. " +
        N(9) + "Adaeze found herself writing, first on the back of an intake form and then, when the form ran out, on her own forearm. " +
        N(10) + "When he finished, Ms. Lindqvist was standing behind her chair. " +
        N(11) + "\"Four pails,\" the curator said slowly, \"and not one of them came with a reason to look at it.\" " +
        N(12) + "She slid a fresh accession card across the table. " +
        N(13) + "That evening Adaeze washed her arm only after she had copied every word, and she understood that the museum's real collection was not stored in its cabinets at all." +
        "</p>",
      claims: [
        {
          id: "attics",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The author includes the list of attic items in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "show that Adaeze is bored by her volunteer duties" },
            { letter: "B", text: "suggest that most donations arrive without meaningful stories" },
            { letter: "C", text: "prove that the museum accepts almost everything it is offered" },
            { letter: "D", text: "explain why the museum needs a sign about item reviews" }
          ],
          correct: "B"
        },
        {
          id: "rain",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 6, comparing the man's nod to the way \"a person nods at rain\" suggests that he —",
          choices: [
            { letter: "A", text: "accepts the rejection as familiar and unsurprising" },
            { letter: "B", text: "is upset that the curator has insulted his father" },
            { letter: "C", text: "wants to leave before the weather turns worse" },
            { letter: "D", text: "does not understand what the curator has said" }
          ],
          correct: "A"
        },
        {
          id: "curator",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Ms. Lindqvist's words in sentence 11 reveal that she —",
          choices: [
            { letter: "A", text: "regrets accepting the four pails the museum owns" },
            { letter: "B", text: "wants Adaeze to stop writing during her shift" },
            { letter: "C", text: "now sees the pail's story as the source of its value" },
            { letter: "D", text: "still thinks the pail is in poor condition for display" }
          ],
          correct: "C"
        },
        {
          id: "forearm",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The detail that Adaeze keeps writing \"on her own forearm\" in sentence 9 creates a tone of —",
          choices: [
            { letter: "A", text: "amused carelessness about museum rules" },
            { letter: "B", text: "nervous embarrassment in front of the curator" },
            { letter: "C", text: "quiet resentment at being given too little paper" },
            { letter: "D", text: "urgent absorption in the man's story" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is most clearly supported by \"The Donation\" as a whole?",
          choices: [
            { letter: "A", text: "Museums should accept every object that families offer them." },
            { letter: "B", text: "Volunteers often understand history better than curators do." },
            { letter: "C", text: "An ordinary object gains meaning from the human story behind it." },
            { letter: "D", text: "Objects in poor condition are rarely worth preserving at all." }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The last sentence of \"The Donation\" resolves the story by showing that Adaeze —",
          choices: [
            { letter: "A", text: "plans to ask the curator for a paid job at the museum" },
            { letter: "B", text: "regrets writing on her arm instead of on proper forms" },
            { letter: "C", text: "worries that the cabinets are too full for the pail" },
            { letter: "D", text: "realizes that people's stories are the museum's true holdings" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c97-perseids",
      family: "G11",
      title: "The First One",
      kind: "Literary · 11.RL",
      blurb: "On a dark hayfield during a meteor shower, Kalani has to decide who saw the first streak.",
      level: 2,
      passage:
        "<p>" + N(1) + "By eleven the hayfield behind the Akana farm had gone the deep blue-black that Kalani's astronomy teacher called \"real dark,\" the kind a city never quite reaches. " +
        N(2) + "She lay on a horse blanket with her little brother, Mano, who had promised to be quiet and had kept the promise for almost four minutes. " +
        N(3) + "\"Where are they?\" he whispered. \"You said there'd be a hundred.\" " +
        N(4) + "\"Up to a hundred an hour,\" Kalani said. \"That's an average, not a parade.\" " +
        N(5) + "She explained what Ms. Ferreira had taught the club: that the edges of the eye see faint light better than the center, so the trick is to look at nothing in particular and let the sky come to you. " +
        N(6) + "Mano stared hard at nothing in particular, which seemed to make his whole face tired. " +
        N(7) + "Kalani had been counting down to this night since June, and she had planned to log every meteor in her notebook by time and direction. " +
        N(8) + "Then a streak slid across the northeast, quick as a struck match, and she heard Mano gasp beside her. " +
        N(9) + "\"Did you see it?\" he cried. \"I saw the first one! Did you?\" " +
        N(10) + "She had seen it, plainly, a full second before he did. " +
        N(11) + "\"No,\" she said. \"You'll have to tell me what it looked like.\" " +
        N(12) + "He told her, at length, with sound effects, and she wrote his description in the notebook under 11:14 p.m., northeast, observed by M. Akana. " +
        N(13) + "It was the only entry she made all night that she did not need to check." +
        "</p>",
      claims: [
        {
          id: "answer",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Kalani's answer to Mano in sentence 11 is best interpreted as —",
          choices: [
            { letter: "A", text: "an honest admission that she was looking elsewhere" },
            { letter: "B", text: "a way to test whether Mano really saw a meteor" },
            { letter: "C", text: "an attempt to end the conversation and keep counting" },
            { letter: "D", text: "a small sacrifice that lets Mano own the moment" }
          ],
          correct: "D"
        },
        {
          id: "match",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, the simile \"quick as a struck match\" mainly conveys —",
          choices: [
            { letter: "A", text: "the danger of being outdoors in the dark" },
            { letter: "B", text: "the brief, sudden brightness of the meteor" },
            { letter: "C", text: "the warmth Kalani feels toward her brother" },
            { letter: "D", text: "the noise the meteor makes as it falls" }
          ],
          correct: "B"
        },
        {
          id: "parade",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 4, Kalani says the shower is \"an average, not a parade\" to suggest that the meteors —",
          choices: [
            { letter: "A", text: "will appear unpredictably rather than in a steady line" },
            { letter: "B", text: "are mostly too faint for a person to see without help" },
            { letter: "C", text: "will be easier to spot from a crowded town square" },
            { letter: "D", text: "have already passed earlier in the evening" }
          ],
          correct: "A"
        },
        {
          id: "tired",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Sentence 6, describing Mano staring \"hard at nothing in particular,\" creates a tone that is —",
          choices: [
            { letter: "A", text: "bitterly sarcastic" },
            { letter: "B", text: "solemn and formal" },
            { letter: "C", text: "gently humorous" },
            { letter: "D", text: "tense and anxious" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Kalani and Mano?",
          choices: [
            { letter: "A", text: "Generosity can matter more than getting credit for a discovery." },
            { letter: "B", text: "Careful scientific records are more important than family time." },
            { letter: "C", text: "Younger siblings usually spoil the plans of older ones." },
            { letter: "D", text: "Patience is rarely rewarded when one watches the night sky." }
          ],
          correct: "A"
        },
        {
          id: "check",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence resolves \"The First One\" by suggesting that Kalani —",
          choices: [
            { letter: "A", text: "doubts that Mano's description is accurate at all" },
            { letter: "B", text: "gave up logging meteors after the first one appeared" },
            { letter: "C", text: "plans to show the notebook to Ms. Ferreira for grading" },
            { letter: "D", text: "knows Mano's entry is accurate because she saw it too" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c97-tacet",
      family: "G11",
      title: "Two Hundred and Twelve",
      kind: "Literary · 11.RL",
      blurb: "Ravi has one cymbal crash in the whole movement, and every silent measure before it.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the third movement Ravi Menon had two hundred and twelve measures of rest, followed by a single crash of the cymbals, and then nothing until the bows came down. " +
        N(2) + "His friends in the violin section thought this was the easiest job in the orchestra. " +
        N(3) + "They did not understand that resting, done properly, was a form of labor. " +
        N(4) + "He counted with his whole body: the downbeats in his left heel, the measure numbers in a whisper behind his teeth, the rehearsal letters penciled in the margin like mile markers on a highway he could not see. " +
        N(5) + "At letter F the horns entered and he checked himself against them. " +
        N(6) + "At letter J the conductor, Dr. Osei, slowed the tempo the way she always did, and Ravi stretched his counting to match, like a runner shortening his stride on a hill. " +
        N(7) + "Somewhere around measure one-sixty, a phone buzzed in the audience and a cellist glanced up, and for one terrible second Ravi could not remember whether he had just said one-sixty-three or one-sixty-four. " +
        N(8) + "He did not panic. " +
        N(9) + "He listened instead for the oboe phrase that Dr. Osei had once told him to treat as a lighthouse, and when it came, it came where he expected it. " +
        N(10) + "At measure two-twelve he lifted the cymbals, and the crash bloomed through the hall exactly on the downbeat, as if the music had been leaning toward it all along. " +
        N(11) + "Afterward the violinists congratulated him on his \"one note.\" " +
        N(12) + "Ravi only smiled, because he knew that he had played two hundred and thirteen measures, and that most of them had been silent." +
        "</p>",
      claims: [
        {
          id: "attitude",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Ravi's attitude toward his part in the third movement?",
          choices: [
            { letter: "A", text: "He treats the long rest as demanding work that needs focus." },
            { letter: "B", text: "He resents having so little to play compared with the violins." },
            { letter: "C", text: "He worries that the conductor will forget to cue his entrance." },
            { letter: "D", text: "He considers the cymbal crash too small to practice for." }
          ],
          correct: "A"
        },
        {
          id: "bloomed",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 10, saying the crash \"bloomed through the hall\" emphasizes that the sound —",
          choices: [
            { letter: "A", text: "startled the audience because it came too early" },
            { letter: "B", text: "faded before most listeners could notice it" },
            { letter: "C", text: "spread outward richly and filled the space" },
            { letter: "D", text: "was softer than Dr. Osei had requested" }
          ],
          correct: "C"
        },
        {
          id: "stretched",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 6, the phrase \"stretched his counting\" most nearly means that Ravi —",
          choices: [
            { letter: "A", text: "counted more measures than were written in his part" },
            { letter: "B", text: "moved his body to stay awake during the long rest" },
            { letter: "C", text: "spoke the numbers louder so the cellist could hear" },
            { letter: "D", text: "slowed his inner count to follow the conductor" }
          ],
          correct: "D"
        },
        {
          id: "short",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The author follows the long sentence 7 with the very short sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "show that the phone call ended the performance" },
            { letter: "B", text: "mirror Ravi's moment of confusion and his calm recovery" },
            { letter: "C", text: "suggest that Ravi blames the cellist for distracting him" },
            { letter: "D", text: "signal that the third movement is about to end" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the story of Ravi's cymbal crash?",
          choices: [
            { letter: "A", text: "Musicians who play loudly earn the most respect." },
            { letter: "B", text: "Friends rarely notice when someone is struggling." },
            { letter: "C", text: "Invisible effort often goes unseen by those who see only results." },
            { letter: "D", text: "A single mistake can ruin a long performance." }
          ],
          correct: "C"
        },
        {
          id: "measures",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The narrator's comment in sentence 12 that Ravi \"had played two hundred and thirteen measures\" suggests that he —",
          choices: [
            { letter: "A", text: "counts his silent measures as part of his performance" },
            { letter: "B", text: "miscounted the rests and came in one measure late" },
            { letter: "C", text: "wishes the composer had written him more notes" },
            { letter: "D", text: "is correcting the violinists to embarrass them" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── POETRY AND DRAMA ───────────────────────── */
    {
      id: "g11-rl-c97-tuning",
      family: "G11",
      title: "Tuning",
      kind: "Poetry · 11.RL",
      blurb: "A musician learns to love the sour minute before the concert, when every string disagrees.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the concert, nothing sounds like music:<br>" +
        L(2) + "the oboe lays one long A across the room<br>" +
        L(3) + "and forty strangers lean their strings toward it,<br>" +
        L(4) + "sharp and flat and stubborn, all at once.<br>" +
        L(5) + "I used to hate this part, the sour minute<br>" +
        L(6) + "when every cello argues with its neighbor<br>" +
        L(7) + "and the audience shifts politely in their coats,<br>" +
        L(8) + "waiting for the noise to turn to something.<br>" +
        L(9) + "Now I wait for it. Now I think the tuning<br>" +
        L(10) + "is the only honest moment of the evening,<br>" +
        L(11) + "the one time we admit we disagree<br>" +
        L(12) + "before we spend two hours pretending not to.<br>" +
        L(13) + "Then the hall goes still. The baton rises.<br>" +
        L(14) + "And all that bargaining becomes a chord." +
        "</p>",
      claims: [
        {
          id: "oboe",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 2–3, the image of the oboe laying \"one long A across the room\" suggests that the note —",
          choices: [
            { letter: "A", text: "is too quiet for most of the players to hear" },
            { letter: "B", text: "serves as a shared standard the players adjust to" },
            { letter: "C", text: "annoys the audience before the concert begins" },
            { letter: "D", text: "shows that the oboe player wants to be a soloist" }
          ],
          correct: "B"
        },
        {
          id: "earlier",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Lines 5–8 of \"Tuning\" mainly serve to —",
          choices: [
            { letter: "A", text: "explain how an oboe produces its tuning note" },
            { letter: "B", text: "show that the audience enjoys the tuning most" },
            { letter: "C", text: "predict that the concert will go badly" },
            { letter: "D", text: "describe the speaker's earlier impatience with tuning" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the shift that begins in line 9 shape the meaning of \"Tuning\"?",
          choices: [
            { letter: "A", text: "It moves from the speaker's past dislike of tuning to new appreciation." },
            { letter: "B", text: "It moves from the concert hall to the speaker's memories of home." },
            { letter: "C", text: "It moves from praise of the orchestra to criticism of the audience." },
            { letter: "D", text: "It moves from a calm mood to panic as the concert begins." }
          ],
          correct: "A"
        },
        {
          id: "bargaining",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 14, the word bargaining suggests that tuning is —",
          choices: [
            { letter: "A", text: "a contest that one player finally wins" },
            { letter: "B", text: "a business deal between musicians and the hall" },
            { letter: "C", text: "a process of compromise among the players" },
            { letter: "D", text: "a waste of time that delays the real music" }
          ],
          correct: "C"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "The speaker of \"Tuning\" is best described as —",
          choices: [
            { letter: "A", text: "an audience member who dislikes loud noise" },
            { letter: "B", text: "a conductor who is impatient with the players" },
            { letter: "C", text: "a player who values the group's honest disagreement" },
            { letter: "D", text: "a beginner who is nervous about a first concert" }
          ],
          correct: "C"
        },
        {
          id: "pretending",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Line 12, about spending \"two hours pretending not to,\" creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "wryly humorous" },
            { letter: "C", text: "fearful and uneasy" },
            { letter: "D", text: "coldly neutral" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c97-lightyears",
      family: "G11",
      title: "Light-Years",
      kind: "Poetry · 11.RL",
      blurb: "Above a barn, a grandmother explains how old starlight is, and the speaker refuses to be sad.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother points to a star above the barn<br>" +
        L(2) + "and tells me the light I'm seeing left it<br>" +
        L(3) + "before she was born, before her mother was,<br>" +
        L(4) + "a letter mailed by no one in particular<br>" +
        L(5) + "that took the long way and arrived tonight.<br>" +
        L(6) + "She says the star may not be there at all,<br>" +
        L(7) + "that we could be admiring a house<br>" +
        L(8) + "whose windows went dark centuries ago.<br>" +
        L(9) + "I want to be sad about this. I can't.<br>" +
        L(10) + "The light still came. It crossed all that cold<br>" +
        L(11) + "just to land in the eye of a girl in a field<br>" +
        L(12) + "who wasn't even looking for it yet.<br>" +
        L(13) + "Some things are kind like that, she says,<br>" +
        L(14) + "and squeezes my hand as if to mail it somewhere." +
        "</p>",
      claims: [
        {
          id: "letter",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 4, comparing starlight to \"a letter mailed by no one in particular\" suggests that the light —",
          choices: [
            { letter: "A", text: "was sent to the speaker by her great-grandmother" },
            { letter: "B", text: "is too faint for the speaker to read clearly" },
            { letter: "C", text: "carries a message across time without a clear sender" },
            { letter: "D", text: "will disappear before the speaker can see it again" }
          ],
          correct: "C"
        },
        {
          id: "windows",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The image in lines 7–8 of a house \"whose windows went dark centuries ago\" creates a tone that is —",
          choices: [
            { letter: "A", text: "quietly melancholy" },
            { letter: "B", text: "playfully mocking" },
            { letter: "C", text: "openly fearful" },
            { letter: "D", text: "loudly triumphant" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Lines 9–10 mark a turn in \"Light-Years\" because the speaker —",
          choices: [
            { letter: "A", text: "realizes that her grandmother has made a mistake" },
            { letter: "B", text: "begins to describe the barn instead of the sky" },
            { letter: "C", text: "admits that she has never cared about the stars" },
            { letter: "D", text: "sets aside sadness and focuses on the light's arrival" }
          ],
          correct: "D"
        },
        {
          id: "kind",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 13, the word kind suggests that the starlight is —",
          choices: [
            { letter: "A", text: "a type or category of light" },
            { letter: "B", text: "generous in reaching someone who did not expect it" },
            { letter: "C", text: "gentle enough that it never hurts the eyes" },
            { letter: "D", text: "familiar because the speaker sees it every night" }
          ],
          correct: "B"
        },
        {
          id: "squeeze",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Line 14 suggests that the grandmother —",
          choices: [
            { letter: "A", text: "wants the speaker to write a letter to a relative" },
            { letter: "B", text: "is cold and ready to go back inside the house" },
            { letter: "C", text: "is worried that the speaker misunderstood her" },
            { letter: "D", text: "hopes her love will reach the speaker far into the future" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses the central idea of \"Light-Years\"?",
          choices: [
            { letter: "A", text: "Stars are less impressive once one knows the science." },
            { letter: "B", text: "Grandparents often tell stories that are not quite true." },
            { letter: "C", text: "Gifts of light and love can outlast those who send them." },
            { letter: "D", text: "Looking at the night sky makes people feel lonely." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c97-coop",
      family: "G11",
      title: "Flat on Elm Street",
      kind: "Drama · 11.RL",
      blurb: "Farah promises to fix a flat in ten minutes, and the co-op's founder has another idea.",
      level: 1,
      passage:
        "<p><em>Setting: a cramped community bike co-op on a Saturday morning. Wheels hang from hooks. FARAH, seventeen, wipes grease from her hands as BEN, twelve, rolls in a bike with a flat rear tire. GUS, the co-op's founder, works at a bench.</em></p>" +
        "<p>" + N(1) + "<strong>BEN</strong>: My tire went flat on Elm Street. Can you fix it? I've got four dollars. " +
        N(2) + "<strong>FARAH</strong>: Easy. Give me ten minutes and you'll be riding home. " +
        N(3) + "<strong>GUS</strong> <em>(without looking up)</em>: Farah. What does our sign say? " +
        N(4) + "<strong>FARAH</strong> <em>(sighing)</em>: \"We don't fix your bike. We help you fix your bike.\" " +
        N(5) + "<strong>GUS</strong>: And why? " +
        N(6) + "<strong>FARAH</strong>: Because a tube costs four dollars, but knowing how to change one is worth a lot more the next time you're stuck on Elm Street. " +
        N(7) + "<strong>BEN</strong>: I don't know anything about bikes. " +
        N(8) + "<strong>GUS</strong>: Nobody does, until the afternoon they do. Farah, show him the tire levers. " +
        N(9) + "<em>(FARAH kneels beside BEN and hands him two plastic levers.)</em> " +
        N(10) + "<strong>FARAH</strong>: Hook this under the edge of the tire. No, the other way. There. Now pull it toward the spokes. " +
        N(11) + "<strong>BEN</strong> <em>(straining, then grinning as the tire pops loose)</em>: It moved! " +
        N(12) + "<strong>FARAH</strong>: See? You're already a mechanic. A slow one. " +
        N(13) + "<em>(BEN laughs. GUS keeps working, smiling to himself.)</em> " +
        N(14) + "<strong>GUS</strong>: Ten minutes, she said. Make it thirty, and he'll never need us for this again." +
        "</p>",
      claims: [
        {
          id: "offer",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In line 2, Farah's offer shows that she at first —",
          choices: [
            { letter: "A", text: "wants to solve Ben's problem quickly by herself" },
            { letter: "B", text: "doubts that the bike can be repaired at all" },
            { letter: "C", text: "hopes Gus will take over the job for her" },
            { letter: "D", text: "thinks four dollars is too little to charge" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed in the scene at the bike co-op?",
          choices: [
            { letter: "A", text: "Older workers rarely trust younger ones with real tasks." },
            { letter: "B", text: "Repairs should always be done as quickly as possible." },
            { letter: "C", text: "Teaching a skill is worth more than doing the job for someone." },
            { letter: "D", text: "Children are usually too young to learn mechanical skills." }
          ],
          correct: "C"
        },
        {
          id: "straining",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In the stage direction in line 11, the word straining most nearly means that Ben is —",
          choices: [
            { letter: "A", text: "complaining about the dirty work" },
            { letter: "B", text: "pulling hard with real effort" },
            { letter: "C", text: "watching Farah very closely" },
            { letter: "D", text: "injuring his hand on the lever" }
          ],
          correct: "B"
        },
        {
          id: "sign",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The co-op's sign, quoted in line 4, functions in the scene as —",
          choices: [
            { letter: "A", text: "a price list that tells Ben what the tube will cost" },
            { letter: "B", text: "a joke that Gus uses to tease Farah about her work" },
            { letter: "C", text: "a warning that the shop is about to close for the day" },
            { letter: "D", text: "a statement of the shop's values that guides Farah" }
          ],
          correct: "D"
        },
        {
          id: "smiling",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction in line 13, showing Gus \"smiling to himself,\" mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that Gus is laughing at Ben's mistake" },
            { letter: "B", text: "show that Gus is pleased Farah is teaching Ben" },
            { letter: "C", text: "reveal that Gus has stopped paying attention" },
            { letter: "D", text: "hint that Gus plans to fix the bike himself" }
          ],
          correct: "B"
        },
        {
          id: "final",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does Gus's final line resolve the scene at the co-op?",
          choices: [
            { letter: "A", text: "It shows that the extra time spent teaching is worth it." },
            { letter: "B", text: "It reveals that Gus is frustrated with Farah's speed." },
            { letter: "C", text: "It warns Ben that the repair will cost him more money." },
            { letter: "D", text: "It announces that the co-op is closing for the day." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g11-ri-c97-derailleur",
      family: "G11",
      title: "Derailing on Purpose",
      kind: "Informational · 11.RI",
      blurb: "How a bicycle's derailleur shifts gears, and the ten-minute fix that solves half the problems.",
      level: 1,
      passage:
        "<p>" + N(1) + "Most bicycles with more than one gear rely on a small, odd-looking device called a derailleur, from a French word meaning \"to derail.\" " +
        N(2) + "The name is surprisingly accurate. " +
        N(3) + "When a rider moves the shift lever, a cable pulls or releases the derailleur, which pushes the chain sideways until it falls off one sprocket and lands on the next. " +
        N(4) + "In other words, the bike shifts gears by derailing the chain on purpose, many times a ride. " +
        N(5) + "The rear derailleur also holds a spring-loaded arm with two small wheels, called jockey wheels, that keep the chain tight as it moves between sprockets of different sizes. " +
        N(6) + "A larger sprocket in the back makes pedaling easier, which helps on hills, while a smaller one makes each pedal stroke move the bike farther, which helps on flat roads. " +
        N(7) + "Because the system depends on a cable and a spring working against each other, small changes matter. " +
        N(8) + "A cable that has stretched by only a millimeter or two can leave the chain hesitating between gears, producing a clicking that many riders mistake for a serious problem. " +
        N(9) + "Usually the fix is a few turns of a barrel adjuster, a tiny knob where the cable enters the derailleur. " +
        N(10) + "Mechanics at the Riverside Bike Kitchen, a volunteer repair shop, say that this single adjustment solves roughly half the shifting complaints they hear. " +
        N(11) + "Learning it, they argue, is the best ten minutes a new cyclist can spend." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of \"Derailing on Purpose\"?",
          choices: [
            { letter: "A", text: "Bicycles with many gears are too complex for new riders." },
            { letter: "B", text: "A derailleur shifts gears by moving the chain, and small adjustments keep it working." },
            { letter: "C", text: "Volunteer repair shops are the best place to buy a bicycle." },
            { letter: "D", text: "Larger sprockets make pedaling easier on steep hills." }
          ],
          correct: "B"
        },
        {
          id: "accurate",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the passage about derailleurs, sentence 2 serves mainly to —",
          choices: [
            { letter: "A", text: "point out that the device's name matches what it does" },
            { letter: "B", text: "suggest that the French invented the modern bicycle" },
            { letter: "C", text: "warn riders that derailleurs often break during rides" },
            { letter: "D", text: "introduce a disagreement among bicycle mechanics" }
          ],
          correct: "A"
        },
        {
          id: "hesitate",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, what usually causes a chain to hesitate between gears?",
          choices: [
            { letter: "A", text: "jockey wheels that have worn down" },
            { letter: "B", text: "a rear sprocket that is too large" },
            { letter: "C", text: "a rider who shifts too often on hills" },
            { letter: "D", text: "a shift cable that has stretched slightly" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 3–6 of the derailleur passage mainly by —",
          choices: [
            { letter: "A", text: "comparing older bicycles with newer models" },
            { letter: "B", text: "telling the story of one rider's first repair" },
            { letter: "C", text: "explaining the parts and steps involved in shifting" },
            { letter: "D", text: "listing complaints that mechanics often hear" }
          ],
          correct: "C"
        },
        {
          id: "half",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence gives evidence of how often the barrel adjuster solves shifting trouble?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The intended audience for \"Derailing on Purpose\" is most likely —",
          choices: [
            { letter: "A", text: "new cyclists who want to understand their bikes" },
            { letter: "B", text: "engineers who design bicycle parts for factories" },
            { letter: "C", text: "shop owners deciding which bicycles to sell" },
            { letter: "D", text: "racers preparing for a professional competition" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c97-skyglow",
      family: "G11",
      title: "The Vanishing Stars",
      kind: "Informational · 11.RI",
      blurb: "Where the stars go over bright suburbs, who else is affected, and how quickly it can be undone.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a clear night far from any town, a person with ordinary eyesight can see a few thousand stars at once. " +
        N(2) + "In the middle of a brightly lit suburb, that number can fall to a few dozen. " +
        N(3) + "The stars have not gone anywhere; they have been drowned out by skyglow, the haze of artificial light scattered back toward the ground by dust and moisture in the air. " +
        N(4) + "Skyglow is not caused by light that people need. " +
        N(5) + "Much of it comes from fixtures that send light sideways or upward, where it brightens no sidewalk and no doorway, only the bottoms of clouds. " +
        N(6) + "Researchers have estimated that a significant share of outdoor lighting in many regions is wasted this way, which also means wasted electricity. " +
        N(7) + "The effects reach beyond astronomy. " +
        N(8) + "Migrating birds that navigate partly by the stars can become disoriented over bright cities, and newly hatched sea turtles may crawl toward lit roads instead of the moonlit ocean. " +
        N(9) + "Fortunately, skyglow is among the easiest forms of pollution to reverse. " +
        N(10) + "Unlike a chemical spill, it disappears the moment the light is redirected or switched off. " +
        N(11) + "Shielded fixtures, which aim light only downward, and warmer, dimmer bulbs can cut skyglow sharply without leaving streets dark. " +
        N(12) + "Several small towns have earned recognition as dark-sky communities by making exactly these changes, and residents report that the sky above their main streets has become, once again, something worth stopping to look at." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The author's primary purpose in \"The Vanishing Stars\" is to —",
          choices: [
            { letter: "A", text: "persuade readers to move away from bright suburbs" },
            { letter: "B", text: "describe how migrating birds use the stars to navigate" },
            { letter: "C", text: "compare light pollution with chemical pollution in detail" },
            { letter: "D", text: "explain what causes skyglow and show that it can be reduced" }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why does skyglow make stars harder to see?",
          choices: [
            { letter: "A", text: "Dust in the air blocks starlight from reaching the ground." },
            { letter: "B", text: "Scattered artificial light brightens the sky around the stars." },
            { letter: "C", text: "Clouds form more often over cities than over farmland." },
            { letter: "D", text: "Streetlights cause people's eyes to become weaker over time." }
          ],
          correct: "B"
        },
        {
          id: "spill",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 10, the author contrasts skyglow with a chemical spill mainly to —",
          choices: [
            { letter: "A", text: "stress how quickly this pollution ends once lights change" },
            { letter: "B", text: "suggest that skyglow is more harmful than most spills" },
            { letter: "C", text: "explain how dust and moisture scatter outdoor light" },
            { letter: "D", text: "show that towns must clean up both kinds of pollution" }
          ],
          correct: "A"
        },
        {
          id: "turtles",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about sea turtles in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "prove that skyglow is worst along ocean beaches" },
            { letter: "B", text: "explain why turtles prefer moonlight to sunlight" },
            { letter: "C", text: "show that skyglow affects wildlife as well as stargazers" },
            { letter: "D", text: "suggest that dark-sky towns are usually near the sea" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of \"The Vanishing Stars\"?",
          choices: [
            { letter: "A", text: "a timeline of how streetlights were invented and improved" },
            { letter: "B", text: "a comparison of two towns with different lighting rules" },
            { letter: "C", text: "a list of stars that can no longer be seen from suburbs" },
            { letter: "D", text: "a problem is defined, its effects described, and solutions offered" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward the possibility of reducing skyglow is best described as —",
          choices: [
            { letter: "A", text: "hopeful" },
            { letter: "B", text: "indifferent" },
            { letter: "C", text: "doubtful" },
            { letter: "D", text: "alarmed" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c97-lowlight",
      family: "G11",
      title: "Why the Gallery Is Dim",
      kind: "Informational · 11.RI",
      blurb: "Visitors call the textile room too dark; conservators explain who the darkness is for.",
      level: 3,
      passage:
        "<p>" + N(1) + "Visitors to the textile gallery at a small regional museum sometimes complain to the front desk that the room is too dark to enjoy. " +
        N(2) + "The curators are sympathetic, but they are not going to turn up the lights. " +
        N(3) + "Light, which seems like the most harmless thing in a museum, is in fact one of the most destructive. " +
        N(4) + "Its energy breaks the chemical bonds in dyes, paper fibers and silk, and unlike a spill or a scratch, the damage is cumulative and permanent: a watercolor does not recover overnight from an afternoon in the sun. " +
        N(5) + "For this reason conservators think of light exposure the way a careful household thinks of a budget. " +
        N(6) + "A fragile quilt might be allotted a certain total of light per year, and the museum can \"spend\" that total in different ways, displaying the quilt dimly for many months or brightly for only a few weeks. " +
        N(7) + "Ultraviolet rays, which human eyes cannot see and which contribute nothing to how an object looks, are filtered out almost entirely. " +
        N(8) + "Some institutions go further, rotating their most sensitive pieces into dark storage so that each one rests for years between appearances. " +
        N(9) + "None of this makes a dim room more pleasant to stand in. " +
        N(10) + "But conservators point out that the gallery's audience includes people who have not yet been born, and that every bright afternoon granted to today's visitors is subtracted from theirs. " +
        N(11) + "Seen that way, the gloom in the textile room is less a failure of hospitality than a form of it, extended to guests who will arrive a century from now." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"Why the Gallery Is Dim\"?",
          choices: [
            { letter: "A", text: "Visitors' complaints have forced museums to brighten their galleries." },
            { letter: "B", text: "Ultraviolet light is the only kind of light that harms textiles." },
            { letter: "C", text: "Museums limit light because its damage builds up and cannot be undone." },
            { letter: "D", text: "Quilts are the most fragile objects that most museums own." }
          ],
          correct: "C"
        },
        {
          id: "budget",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentences 5 and 6, comparing light exposure to a household budget helps the reader understand that —",
          choices: [
            { letter: "A", text: "each object can tolerate only a limited total of light" },
            { letter: "B", text: "museums cannot afford the electricity for bright rooms" },
            { letter: "C", text: "conservators must ask visitors to pay for special lighting" },
            { letter: "D", text: "quilts are cheaper to display than paintings are" }
          ],
          correct: "A"
        },
        {
          id: "ultraviolet",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why do museums filter out ultraviolet rays?",
          choices: [
            { letter: "A", text: "The rays make colors look faded to visitors." },
            { letter: "B", text: "The rays harm objects without improving how they look." },
            { letter: "C", text: "The rays are required by law to be removed." },
            { letter: "D", text: "The rays make rooms feel warmer than visitors like." }
          ],
          correct: "B"
        },
        {
          id: "pleasant",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The author includes sentence 9 of \"Why the Gallery Is Dim\" mainly to —",
          choices: [
            { letter: "A", text: "prove that the curators do not care about visitors" },
            { letter: "B", text: "suggest that the gallery should be closed to the public" },
            { letter: "C", text: "introduce a new fact about how dyes break down" },
            { letter: "D", text: "acknowledge the visitors' complaint before answering it" }
          ],
          correct: "D"
        },
        {
          id: "hospitality",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The final sentence suggests that the author views the dim textile gallery as —",
          choices: [
            { letter: "A", text: "a courtesy to visitors who have not yet arrived" },
            { letter: "B", text: "an unfortunate mistake that should be corrected" },
            { letter: "C", text: "a temporary problem caused by a lack of money" },
            { letter: "D", text: "an insult to the guests who complain about it" }
          ],
          correct: "A"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the discussion of museum lighting?",
          choices: [
            { letter: "A", text: "by tracing the history of museum lighting century by century" },
            { letter: "B", text: "by comparing three museums that use different lighting rules" },
            { letter: "C", text: "by opening with a complaint, explaining the science, then reframing it" },
            { letter: "D", text: "by listing objects in the gallery from least to most fragile" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c97-concertmaster",
      family: "G11",
      title: "More Than First Violin",
      kind: "Informational · 11.RI",
      blurb: "What a concertmaster actually does, and why one school director rotates the job.",
      level: 1,
      passage:
        "<p>" + N(1) + "In most orchestras, the violinist seated closest to the audience on the conductor's left holds a title that surprises many concertgoers: concertmaster. " +
        N(2) + "The concertmaster is still a violinist and plays in nearly every piece, but the job carries duties that reach far beyond the first violin part. " +
        N(3) + "Before a concert begins, the concertmaster stands and signals the oboe to sound a tuning note, then leads the orchestra through tuning. " +
        N(4) + "During rehearsals, the concertmaster decides on bowings, the up-and-down patterns of the bow, so that a whole section of violins moves together and sounds unified. " +
        N(5) + "Other string leaders usually copy those markings into their own parts. " +
        N(6) + "When the music calls for a violin solo, the concertmaster normally plays it. " +
        N(7) + "The role also has a quieter side. " +
        N(8) + "Because the concertmaster sits beside the conductor, he or she often acts as a go-between, passing on questions from the players and helping translate the conductor's gestures into practical instructions. " +
        N(9) + "In student orchestras, directors sometimes rotate the position so that more players learn these responsibilities. " +
        N(10) + "At Fairmont High School, for example, director Lucinda Baptiste names a new concertmaster each semester, explaining that \"leading the section teaches you to listen to everyone, not just yourself.\" " +
        N(11) + "For many young musicians, that lesson lasts longer than any solo." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of \"More Than First Violin\"?",
          choices: [
            { letter: "A", text: "The concertmaster is a violinist who also leads and connects the orchestra." },
            { letter: "B", text: "The concertmaster plays every solo written for any instrument." },
            { letter: "C", text: "Student orchestras do not need a concertmaster at all." },
            { letter: "D", text: "Oboe players are the true leaders of most orchestras." }
          ],
          correct: "A"
        },
        {
          id: "bowings",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the passage, why does the concertmaster decide on bowings?",
          choices: [
            { letter: "A", text: "so that the conductor does not have to rehearse" },
            { letter: "B", text: "so that soloists can choose their own patterns" },
            { letter: "C", text: "so that the oboe can sound the tuning note" },
            { letter: "D", text: "so that the violins move together and sound unified" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes most of \"More Than First Violin\" by —",
          choices: [
            { letter: "A", text: "telling the life story of a famous violinist" },
            { letter: "B", text: "describing the duties that make up the role" },
            { letter: "C", text: "arguing for and against rotating the position" },
            { letter: "D", text: "comparing orchestras in different countries" }
          ],
          correct: "B"
        },
        {
          id: "quieter",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the passage about the concertmaster, sentence 7 serves mainly to —",
          choices: [
            { letter: "A", text: "explain why the concertmaster plays softly" },
            { letter: "B", text: "suggest that the job is less important than it seems" },
            { letter: "C", text: "introduce a less visible part of the job" },
            { letter: "D", text: "contrast the concertmaster with the conductor" }
          ],
          correct: "C"
        },
        {
          id: "quote",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the quotation from Lucinda Baptiste in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "prove that Fairmont High has the best orchestra" },
            { letter: "B", text: "explain how bowings are marked in the music" },
            { letter: "C", text: "suggest that directors dislike choosing leaders" },
            { letter: "D", text: "show what students gain from taking on the role" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward rotating the concertmaster position is best described as —",
          choices: [
            { letter: "A", text: "skeptical" },
            { letter: "B", text: "approving" },
            { letter: "C", text: "critical" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c97-variable",
      family: "G11",
      title: "Small and Steady",
      kind: "Informational · 11.RI",
      blurb: "Why professional astronomers depend on amateurs, including one high school club, to watch changing stars.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most stars shine so steadily that people use them as symbols of permanence, but thousands of them change in brightness, some over hours and some over years. " +
        N(2) + "Astronomers call these variable stars, and for more than a century much of what is known about them has come from amateurs. " +
        N(3) + "The reason is practical rather than sentimental. " +
        N(4) + "Large professional telescopes are expensive to operate and are booked for many projects, so they cannot watch a single star night after night for decades. " +
        N(5) + "Amateur observers can. " +
        N(6) + "Using small telescopes, binoculars, or even the naked eye, they compare a variable star with nearby stars of known brightness and record an estimate, along with the date and time. " +
        N(7) + "One observation means little, since a single estimate can be off by a noticeable amount. " +
        N(8) + "Thousands of observations from many people, however, average out individual errors and reveal patterns no one person could see. " +
        N(9) + "These long records have helped researchers notice when a star's regular rhythm suddenly changes, a clue that something inside the star has shifted. " +
        N(10) + "Student clubs take part as well. " +
        N(11) + "At one high school in New Mexico, the astronomy club has submitted estimates of the same pulsing star every clear night for six years, and members describe opening the shared database to find their own initials among those of observers in dozens of countries. " +
        N(12) + "Their contribution is small, but in this kind of science, small and steady is exactly what is needed." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes \"Small and Steady\"?",
          choices: [
            { letter: "A", text: "Professional telescopes are too costly to be useful." },
            { letter: "B", text: "Most stars change brightness every few hours." },
            { letter: "C", text: "Amateurs play a key role in tracking stars that change." },
            { letter: "D", text: "Student clubs have discovered new kinds of stars." }
          ],
          correct: "C"
        },
        {
          id: "permanence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 1, the author mentions stars as \"symbols of permanence\" mainly to —",
          choices: [
            { letter: "A", text: "set up a contrast with stars that actually change" },
            { letter: "B", text: "explain why ancient people worshipped the stars" },
            { letter: "C", text: "suggest that variable stars are very rare" },
            { letter: "D", text: "argue that poets misunderstand astronomy" }
          ],
          correct: "A"
        },
        {
          id: "amateurs",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why can amateurs do work that large telescopes cannot?",
          choices: [
            { letter: "A", text: "Amateurs have more accurate instruments than professionals." },
            { letter: "B", text: "Amateurs are trained to see stars invisible to telescopes." },
            { letter: "C", text: "Amateurs are paid to report their results every night." },
            { letter: "D", text: "Amateurs can watch one star repeatedly for many years." }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 7 and 8 of \"Small and Steady\"?",
          choices: [
            { letter: "A", text: "by listing the tools observers use in order of cost" },
            { letter: "B", text: "by contrasting one weak estimate with many strong ones" },
            { letter: "C", text: "by describing a cause and then a series of effects" },
            { letter: "D", text: "by telling events in the order they happened" }
          ],
          correct: "B"
        },
        {
          id: "newmexico",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about the New Mexico club in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "give a concrete example of students contributing data" },
            { letter: "B", text: "prove that New Mexico has the darkest skies in the country" },
            { letter: "C", text: "suggest that students make more errors than adults" },
            { letter: "D", text: "explain how a pulsing star changes its brightness" }
          ],
          correct: "A"
        },
        {
          id: "steady",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The final sentence of \"Small and Steady\" suggests that the author views the club's work as —",
          choices: [
            { letter: "A", text: "impressive but scientifically useless" },
            { letter: "B", text: "too slow to matter to researchers" },
            { letter: "C", text: "a hobby that distracts from schoolwork" },
            { letter: "D", text: "modest but genuinely valuable" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL AND ARGUMENT ───────────────────────── */
    {
      id: "g11-ri-c97-docentguide",
      family: "G11",
      title: "Teen Docent Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "The rules for teen volunteers who lead tours at a heritage museum, from shifts to service hours.",
      level: 1,
      passage:
        "<p><strong>Millbrook Heritage Museum: Teen Docent Program</strong></p>" +
        "<p>" + N(1) + "Thank you for volunteering to lead tours this spring. " +
        "<strong>Shifts.</strong> " + N(2) + "Docent shifts run on Saturdays from 10:00 a.m. to 1:00 p.m. and from 1:00 to 4:00 p.m. " +
        N(3) + "Sign up for at least two shifts per month on the volunteer board in the staff room. " +
        N(4) + "If you cannot attend a shift, notify the volunteer coordinator, Mr. Eamon Gallagher, at least 48 hours in advance; repeated no-shows may end your participation in the program. " +
        "<strong>Before your first tour.</strong> " + N(5) + "Complete the two-hour orientation and shadow an experienced docent on one full tour. " +
        N(6) + "Review the gallery binder, which contains approved facts for every exhibit. " +
        "<strong>On the floor.</strong> " + N(7) + "Wear your name badge at all times. " +
        N(8) + "Keep groups to fifteen visitors or fewer. " +
        N(9) + "Never allow visitors to touch objects unless they are on the marked hands-on table. " +
        N(10) + "If a visitor asks a question you cannot answer, do not guess; write it on a question card and leave it in the coordinator's tray, and a staff member will follow up by email. " +
        "<strong>Service hours.</strong> " + N(11) + "Each completed shift counts as three community service hours. " +
        N(12) + "Hours are recorded only after you sign out at the front desk, so be sure to sign out before you leave." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of the Millbrook guidelines is to —",
          choices: [
            { letter: "A", text: "advertise the museum's spring exhibits to visitors" },
            { letter: "B", text: "explain the expectations for teens who lead tours" },
            { letter: "C", text: "describe the history of the Millbrook museum" },
            { letter: "D", text: "persuade students to earn service hours elsewhere" }
          ],
          correct: "B"
        },
        {
          id: "question",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guidelines, what should a docent do when a visitor asks a question the docent cannot answer?",
          choices: [
            { letter: "A", text: "make a reasonable guess based on the exhibit" },
            { letter: "B", text: "send the visitor to the front desk right away" },
            { letter: "C", text: "record it on a card so staff can follow up" },
            { letter: "D", text: "look up the answer in the gallery binder later" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Millbrook guidelines help the reader by —",
          choices: [
            { letter: "A", text: "grouping the rules by when or where they apply" },
            { letter: "B", text: "listing the rules from most to least important" },
            { letter: "C", text: "showing which rules apply only to adult staff" },
            { letter: "D", text: "separating required rules from suggestions" }
          ],
          correct: "A"
        },
        {
          id: "noshow",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that missing shifts can have serious consequences for a docent?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "signout",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 12 explains that hours are recorded only after signing out mainly to —",
          choices: [
            { letter: "A", text: "describe where the front desk is located" },
            { letter: "B", text: "explain how many hours each shift is worth" },
            { letter: "C", text: "remind docents to thank the coordinator" },
            { letter: "D", text: "warn docents that skipping this step costs them credit" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The tone of the Millbrook docent guidelines is best described as —",
          choices: [
            { letter: "A", text: "clear and businesslike" },
            { letter: "B", text: "playful and joking" },
            { letter: "C", text: "angry and threatening" },
            { letter: "D", text: "vague and uncertain" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c97-loaners",
      family: "G11",
      title: "Keep the Loaners Free",
      kind: "Argument · 11.RI",
      blurb: "A student editorial argues against a new fee for school-owned instruments and offers another way to pay for repairs.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Westbrook school board's proposal to charge a forty-dollar yearly fee for school-owned instruments sounds modest, and the board's reasoning is not foolish. " +
        N(2) + "Repairs cost money, and families who rent from music stores already pay far more. " +
        N(3) + "Still, the fee would be a mistake, because it would tax the very students the loaner program exists to reach. " +
        N(4) + "Students whose families can easily afford forty dollars rarely use loaners; most of them rent or buy their own instruments. " +
        N(5) + "According to the orchestra director's records, nearly two-thirds of the district's eighty-one loaner instruments are used by students who also qualify for reduced-price lunch. " +
        N(6) + "For these families, a fee is not a small charge but a reason to say no before the first lesson. " +
        N(7) + "Supporters argue that a fee teaches responsibility, as if a cello were a library book that students might otherwise abandon in a hallway. " +
        N(8) + "Yet the director reports that only three loaners were seriously damaged last year, and in each case the cause was an accident, not neglect. " +
        N(9) + "Responsibility is already taught weekly by section leaders, who check cases, strings and bows every Friday. " +
        N(10) + "There are better ways to cover repair costs. " +
        N(11) + "The orchestra's spring concert raised more than two thousand dollars last year, and the music boosters have offered to dedicate a share of ticket sales to a repair fund. " +
        N(12) + "That approach spreads the cost across a whole community that enjoys the music, rather than placing it on the students with the least room in their budgets. " +
        N(13) + "The board should reject the fee and accept the boosters' offer." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the author's central claim in the editorial about loaner instruments?",
          choices: [
            { letter: "A", text: "Families should buy their own instruments instead of borrowing." },
            { letter: "B", text: "Section leaders should be paid for checking instruments." },
            { letter: "C", text: "The spring concert should raise ticket prices next year." },
            { letter: "D", text: "The fee should be rejected because it burdens the neediest students." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which evidence most directly challenges the claim that a fee is needed to teach responsibility?",
          choices: [
            { letter: "A", text: "Only three loaners were seriously damaged, all by accident." },
            { letter: "B", text: "Families who rent from stores pay more than forty dollars." },
            { letter: "C", text: "The spring concert raised over two thousand dollars." },
            { letter: "D", text: "The district owns eighty-one loaner instruments in all." }
          ],
          correct: "A"
        },
        {
          id: "librarybook",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 7, comparing a cello to a library book mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that the library should lend instruments too" },
            { letter: "B", text: "explain how loaner instruments are checked out" },
            { letter: "C", text: "mock the idea that students would carelessly abandon instruments" },
            { letter: "D", text: "show that instruments cost about as much as books" }
          ],
          correct: "C"
        },
        {
          id: "concede",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentences 1 and 2, the author's acknowledgment of the board's reasoning mainly shows that the author —",
          choices: [
            { letter: "A", text: "agrees with the board but is afraid to say so" },
            { letter: "B", text: "treats the opposing view as reasonable before rejecting it" },
            { letter: "C", text: "has not yet decided whether the fee is a good idea" },
            { letter: "D", text: "believes the board members are poorly informed" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of the editorial about the instrument fee?",
          choices: [
            { letter: "A", text: "a story about one student, followed by a lesson" },
            { letter: "B", text: "a list of instruments in order of repair cost" },
            { letter: "C", text: "a comparison of two schools' music programs" },
            { letter: "D", text: "a claim, evidence, a rebuttal, and an alternative" }
          ],
          correct: "D"
        },
        {
          id: "numbers",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence gives numerical evidence of who relies on the loaner program?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g11-rv-c97-sectional",
      family: "G11",
      title: "The Cello Sectional",
      kind: "Vocabulary · 11.RV",
      blurb: "Eight cellists sound like eight soloists until their section leader teaches them to breathe together.",
      level: 1,
      passage:
        "<p>" + N(1) + "The cello sectional began, as it usually did, in <strong>cacophony</strong>: eight players warming up eight different passages at once, a jumble of clashing notes that made the practice room sound like a traffic jam. " +
        N(2) + "Ms. Adeyemi waited, arms folded, until the noise faded. " +
        N(3) + "\"Measure forty,\" she said. \"Jonah, just you.\" " +
        N(4) + "Jonah Whitfield, a freshman, played the opening phrase in a small, <strong>tentative</strong> voice, his bow barely touching the string, as if he expected to be interrupted. " +
        N(5) + "\"Again, and this time mean it,\" Ms. Adeyemi said. " +
        N(6) + "The second time, the low C <strong>reverberated</strong> off the cinderblock walls and kept humming for a moment after he stopped. " +
        N(7) + "Then she had the whole section play together, and the problem became obvious: they sounded like eight soloists rather than one <strong>cohesive</strong> group. " +
        N(8) + "Some players rushed and some dragged, and their bows changed direction at different moments. " +
        N(9) + "Ms. Adeyemi was <strong>meticulous</strong> about fixing it, marking every up-bow and down-bow in pencil and checking each player's part, line by line, before letting anyone play again. " +
        N(10) + "\"Watch my bow,\" said Priscilla Ortega, the section leader, \"and breathe with me before the entrance. If we breathe together, we'll <strong>synchronize</strong>.\" " +
        N(11) + "It worked better than anyone expected. " +
        N(12) + "By the end of the hour, the eight cellos sounded almost like one enormous instrument, and Jonah's phrase, the one that had started so timidly, now opened the passage with confidence." +
        "</p>",
      claims: [
        {
          id: "cacophony",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word cacophony most nearly means —",
          choices: [
            { letter: "A", text: "harsh, clashing noise" },
            { letter: "B", text: "a quiet warm-up routine" },
            { letter: "C", text: "a well-rehearsed melody" },
            { letter: "D", text: "an argument among players" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail best clarifies the meaning of tentative in sentence 4?",
          choices: [
            { letter: "A", text: "Jonah is a freshman in the section." },
            { letter: "B", text: "Jonah plays the opening phrase of the piece." },
            { letter: "C", text: "Jonah seems to expect an interruption." },
            { letter: "D", text: "Ms. Adeyemi names a measure number first." }
          ],
          correct: "C"
        },
        {
          id: "syn",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word synchronize in sentence 10 begins with the prefix syn-, as do synonym and synthesis. The prefix syn- means —",
          choices: [
            { letter: "A", text: "against or opposite" },
            { letter: "B", text: "before or ahead" },
            { letter: "C", text: "under or below" },
            { letter: "D", text: "together or with" }
          ],
          correct: "D"
        },
        {
          id: "cohesive",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word cohesive most nearly means —",
          choices: [
            { letter: "A", text: "loud and forceful" },
            { letter: "B", text: "unified and working as one" },
            { letter: "C", text: "newly formed and untested" },
            { letter: "D", text: "large and crowded" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 9, the explanation after the word meticulous shows that it means —",
          choices: [
            { letter: "A", text: "impatient with mistakes" },
            { letter: "B", text: "extremely careful about details" },
            { letter: "C", text: "unwilling to help students" },
            { letter: "D", text: "quick to finish a task" }
          ],
          correct: "B"
        },
        {
          id: "re",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word reverberated in sentence 6 contains the prefix re-, as in rebound and return. In reverberated, the prefix re- suggests that the sound —",
          choices: [
            { letter: "A", text: "was too quiet to hear at first" },
            { letter: "B", text: "stopped suddenly when Jonah lifted his bow" },
            { letter: "C", text: "came from another room nearby" },
            { letter: "D", text: "came back again from the walls" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c97-archive",
      family: "G11",
      title: "The Box with Twine",
      kind: "Vocabulary · 11.RV",
      blurb: "An intern sorts a collapsing box of nameless photographs and learns why a guess needs a second source.",
      level: 2,
      passage:
        "<p>" + N(1) + "The basement archive of the Calder Mills Historical Society held fifty years of <strong>ephemera</strong>: ticket stubs, church programs, grocery receipts and other everyday papers that were never meant to survive past the week they were printed. " +
        N(2) + "Yusuf Karimi, a junior doing a summer internship, had been assigned a single <strong>dilapidated</strong> box whose corners had collapsed and whose lid was held on with twine. " +
        N(3) + "Inside were photographs with no names on the back, a ledger with water-stained pages, and a stack of letters signed only \"your friend,\" as <strong>anonymous</strong> as a voice in a crowd. " +
        N(4) + "His supervisor, Dr. Hana Sorensen, told him to begin by putting everything in <strong>chronological</strong> order, earliest to latest, using postmarks and printed dates where he could find them. " +
        N(5) + "Some dates were <strong>illegible</strong>, blurred by old water damage into gray smudges that no magnifying glass could untangle. " +
        N(6) + "For those, Yusuf looked for other clues: a hairstyle, a model of car, a price on a receipt. " +
        N(7) + "One photograph showed a crowd on the mill bridge staring at high brown water, and he guessed it came from the flood of 1934 that the society's books described. " +
        N(8) + "\"A guess is a starting point,\" Dr. Sorensen said, \"but before we label it, we need a second source to <strong>corroborate</strong> it.\" " +
        N(9) + "It took Yusuf three days to find one: a newspaper clipping in another box, with a smaller copy of the same photograph and a caption that confirmed the date. " +
        N(10) + "He felt, he told his family that night, like a detective who had finally gotten a witness to talk." +
        "</p>",
      claims: [
        {
          id: "ephemera",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the explanation after the colon shows that ephemera means —",
          choices: [
            { letter: "A", text: "valuable documents kept in locked cases" },
            { letter: "B", text: "everyday printed items meant to be used briefly" },
            { letter: "C", text: "photographs taken by professional artists" },
            { letter: "D", text: "records that have been damaged by water" }
          ],
          correct: "B"
        },
        {
          id: "dilapidated",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word dilapidated most nearly means —",
          choices: [
            { letter: "A", text: "carefully sealed" },
            { letter: "B", text: "unusually heavy" },
            { letter: "C", text: "recently delivered" },
            { letter: "D", text: "worn out and falling apart" }
          ],
          correct: "D"
        },
        {
          id: "chron",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word chronological in sentence 4 contains the Greek root chron, as in chronic and chronicle. The root chron refers to —",
          choices: [
            { letter: "A", text: "time" },
            { letter: "B", text: "writing" },
            { letter: "C", text: "color" },
            { letter: "D", text: "size" }
          ],
          correct: "A"
        },
        {
          id: "anonymous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The comparison to \"a voice in a crowd\" in sentence 3 helps show that anonymous means —",
          choices: [
            { letter: "A", text: "loud and impossible to ignore" },
            { letter: "B", text: "written in a hurried hand" },
            { letter: "C", text: "without an identified name" },
            { letter: "D", text: "friendly and familiar" }
          ],
          correct: "C"
        },
        {
          id: "il",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word illegible in sentence 5 begins with the prefix il-, as do illogical and illegal. The prefix il- signals —",
          choices: [
            { letter: "A", text: "not" },
            { letter: "B", text: "again" },
            { letter: "C", text: "very" },
            { letter: "D", text: "before" }
          ],
          correct: "A"
        },
        {
          id: "corroborate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Dr. Sorensen's use of corroborate in sentence 8 suggests that a historian must —",
          choices: [
            { letter: "A", text: "trust the first explanation that seems likely" },
            { letter: "B", text: "ask the family who donated the photograph" },
            { letter: "C", text: "label every photograph before sorting it" },
            { letter: "D", text: "confirm a claim with independent evidence" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c97-observatory",
      family: "G11",
      title: "Public Night",
      kind: "Vocabulary · 11.RV",
      blurb: "At a college observatory's public night, a student volunteer explains what really matters in a telescope.",
      level: 3,
      passage:
        "<p>" + N(1) + "The college observatory on Ridgeline Road opened to the public one Friday a month, and Teodora Vasquez, a senior who volunteered there, had learned that first-time visitors always asked the same question: \"How much does it magnify?\" " +
        N(2) + "The honest answer, she explained, was that magnification matters far less than <strong>aperture</strong>, the width of the opening that gathers light; a wider mirror catches more light, the way a wide bucket catches more rain. " +
        N(3) + "Before the doors opened, she helped Professor Ingram <strong>calibrate</strong> the camera, photographing a blank, evenly lit screen so that the software could adjust for dust specks and uneven sensitivity. " +
        N(4) + "The adjustments were nearly <strong>imperceptible</strong> to the eye, yet without them a faint galaxy could vanish into the background noise. " +
        N(5) + "Tonight's target was a <strong>nebulous</strong> patch in the constellation Cygnus, a cloud of gas so faint and shapeless that many visitors, peering into the eyepiece, insisted they saw nothing at all. " +
        N(6) + "Teodora had stopped being offended by this. " +
        N(7) + "She told them to wait, to let their eyes adjust, and to look slightly to one side. " +
        N(8) + "Gradually the gray smudge became <strong>luminous</strong>, glowing softly against the black like breath on cold glass. " +
        N(9) + "Near midnight, the camera caught something no one had planned for: a streak that appeared on one frame and was gone by the next, a <strong>transient</strong> flash from a tumbling satellite catching the sun. " +
        N(10) + "A boy of about nine asked whether it was an alien spaceship. " +
        N(11) + "Teodora said no, but she did not say it quickly, because she remembered being nine and wanting the universe to be exactly that surprising." +
        "</p>",
      claims: [
        {
          id: "aperture",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the comparison to a wide bucket helps show that a larger aperture —",
          choices: [
            { letter: "A", text: "makes the telescope easier to carry" },
            { letter: "B", text: "protects the mirror from bad weather" },
            { letter: "C", text: "collects more light than a smaller one" },
            { letter: "D", text: "magnifies objects to a greater size" }
          ],
          correct: "C"
        },
        {
          id: "calibrate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word calibrate most nearly means —",
          choices: [
            { letter: "A", text: "adjust an instrument so its readings are accurate" },
            { letter: "B", text: "clean the outside of a camera before use" },
            { letter: "C", text: "replace an old instrument with a new one" },
            { letter: "D", text: "aim a camera at a distant target" }
          ],
          correct: "A"
        },
        {
          id: "imperceptible",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word imperceptible in sentence 4 combines the prefix im-, the root percept, and the suffix -ible. Together, these parts suggest that the adjustments are —",
          choices: [
            { letter: "A", text: "able to be repeated" },
            { letter: "B", text: "not able to be noticed" },
            { letter: "C", text: "likely to be mistaken" },
            { letter: "D", text: "made before the event" }
          ],
          correct: "B"
        },
        {
          id: "nebulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word nebulous suggests that the patch in Cygnus is —",
          choices: [
            { letter: "A", text: "bright and sharply outlined" },
            { letter: "B", text: "moving quickly across the sky" },
            { letter: "C", text: "close enough to touch" },
            { letter: "D", text: "hazy and without a clear form" }
          ],
          correct: "D"
        },
        {
          id: "transient",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from sentence 9 best clarifies the meaning of transient?",
          choices: [
            { letter: "A", text: "the event happened near midnight" },
            { letter: "B", text: "no one had planned to see it" },
            { letter: "C", text: "it was gone by the next frame" },
            { letter: "D", text: "it came from a tumbling satellite" }
          ],
          correct: "C"
        },
        {
          id: "lumen",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word luminous in sentence 8 comes from the Latin root lumen, meaning light, as in illuminate. Based on this root, luminous describes something that —",
          choices: [
            { letter: "A", text: "absorbs all the light around it" },
            { letter: "B", text: "gives off or reflects light" },
            { letter: "C", text: "changes shape over time" },
            { letter: "D", text: "is extremely far away" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-dsr-c97-groupride",
      family: "G11",
      title: "The Saturday Ride",
      kind: "Paired texts · 11.DSR",
      blurb: "A cycling club's rules for group rides, and a new rider's account of her first one.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Hollow Creek Cycling Club Newsletter: Riding in a Group</strong></p>" +
        "<p>" + N(1) + "New members often worry about keeping up on our Saturday rides, but speed matters far less than predictability. " +
        N(2) + "Riders in a group follow one another closely, so a sudden swerve or brake can ripple backward through the line and cause a crash. " +
        N(3) + "Hold a steady line, and point out potholes and broken glass to the rider behind you rather than dodging them at the last second. " +
        N(4) + "Call out \"slowing\" or \"stopping\" before you brake. " +
        N(5) + "Never overlap your front wheel with the rear wheel of the rider ahead; a light touch between wheels is the most common cause of group-ride falls. " +
        N(6) + "Finally, our rides follow a no-drop policy: the group regroups at the top of every major climb, so no one is left behind. " +
        N(7) + "Ride predictably, and everyone gets home safely.</p>" +
        "<p><strong>Text 2 — \"My First Group Ride,\" a blog post by Maribel Quiroga</strong></p>" +
        "<p>" + N(8) + "I almost didn't go. " +
        N(9) + "I had read the club's rules twice and pictured myself gasping at the back while twenty strangers vanished over a hill. " +
        N(10) + "Instead, the first thing the ride leader, Mr. Haddad, did was ask who was new, and then he rode beside me for the first five miles. " +
        N(11) + "He showed me how to point at a pothole instead of jerking around it, and he laughed when I shouted \"Slowing!\" so loudly that a dog barked. " +
        N(12) + "On the long climb up Quarry Road I did fall behind. " +
        N(13) + "But when I reached the top, legs burning, the whole group was waiting by the water fountain, and someone clapped. " +
        N(14) + "I was slow. Nobody cared. I'll be back next Saturday." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by both texts about the Hollow Creek club?",
          choices: [
            { letter: "A", text: "The fastest riders always lead the group." },
            { letter: "B", text: "The club makes sure slower riders are not left behind." },
            { letter: "C", text: "New riders must pass a test before joining a ride." },
            { letter: "D", text: "Most crashes happen on long climbs like Quarry Road." }
          ],
          correct: "B"
        },
        {
          id: "habit",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 2 best illustrates the habit described in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "Mr. Haddad shows Maribel how to point at a pothole." },
            { letter: "B", text: "Maribel reads the club's rules twice before the ride." },
            { letter: "C", text: "The group waits by the water fountain at the top." },
            { letter: "D", text: "A dog barks when Maribel shouts a warning." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the newsletter, the tone of Maribel's blog post is more —",
          choices: [
            { letter: "A", text: "formal and instructive" },
            { letter: "B", text: "angry and disappointed" },
            { letter: "C", text: "detached and technical" },
            { letter: "D", text: "personal and relieved" }
          ],
          correct: "D"
        },
        {
          id: "nodrop",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that show the no-drop policy from Text 1 in action.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the purposes of the club newsletter and Maribel's blog post differ?",
          choices: [
            { letter: "A", text: "Text 1 instructs riders, while Text 2 recounts one rider's experience." },
            { letter: "B", text: "Text 1 advertises bicycles, while Text 2 reviews a bike shop." },
            { letter: "C", text: "Text 1 tells a story, while Text 2 lists safety rules." },
            { letter: "D", text: "Text 1 criticizes the club, while Text 2 defends it." }
          ],
          correct: "A"
        },
        {
          id: "pre",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word predictability in sentence 1 begins with the prefix pre-, as do preview and prepare. The prefix pre- means —",
          choices: [
            { letter: "A", text: "against" },
            { letter: "B", text: "before" },
            { letter: "C", text: "after" },
            { letter: "D", text: "without" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c97-whistle",
      family: "G11",
      title: "The Mill Whistle",
      kind: "Paired texts · 11.DSR",
      blurb: "A museum label describes a steam whistle; a woman who grew up beneath it remembers its last blast.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Exhibit label, Ashby Falls History Museum</strong></p>" +
        "<p>" + N(1) + "This steam whistle was mounted on the roof of the Ashby Falls Woolen Mill from 1889 until the mill closed in 1961. " +
        N(2) + "It sounded four times each workday: at 6:45 a.m. to call workers in, at noon and at 12:30 to mark the lunch break, and at 6:00 p.m. to end the shift. " +
        N(3) + "Because few workers owned clocks in the mill's early decades, the whistle served as the town's shared timekeeper, and local schools and shops set their schedules by it. " +
        N(4) + "On a still morning, the whistle could be heard up to four miles away. " +
        N(5) + "After the mill closed, the whistle was removed and stored in a barn until a former employee's family donated it to the museum in 1998. " +
        N(6) + "It has been restored but will not be sounded, in order to protect its aging valves.</p>" +
        "<p><strong>Text 2 — From an oral history recorded with Dolores Kowalczyk, age 88</strong></p>" +
        "<p>" + N(7) + "Everybody's day belonged to that whistle. " +
        N(8) + "My mother heard it in the morning and pushed us out the door, and when it blew at six we'd race down to the gate to walk my father home. " +
        N(9) + "He used to say it had a voice like a tired cow, and I suppose it did. " +
        N(10) + "But on the day they shut the mill, it blew one last time at noon, a long one, much longer than usual, and nobody on our street said a word. " +
        N(11) + "Women came out onto their porches with dish towels still in their hands. " +
        N(12) + "I was twenty-three. " +
        N(13) + "I've lived a lot of years since, and I still sometimes look up at noon, waiting for a sound that isn't coming." +
        "</p>",
      claims: [
        {
          id: "fact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the Ashby Falls whistle appears in both texts?",
          choices: [
            { letter: "A", text: "The whistle marked the end of the workday at six." },
            { letter: "B", text: "The whistle was stored in a barn after the mill closed." },
            { letter: "C", text: "The whistle could be heard four miles away." },
            { letter: "D", text: "The whistle has been restored by the museum." }
          ],
          correct: "A"
        },
        {
          id: "timekeeper",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 calls the whistle the town's \"shared timekeeper\" (sentence 3). How does Text 2 develop this idea?",
          choices: [
            { letter: "A", text: "by explaining how the whistle's valves worked" },
            { letter: "B", text: "by listing the exact times the whistle sounded" },
            { letter: "C", text: "by showing how one family organized its day around it" },
            { letter: "D", text: "by describing how the museum acquired the whistle" }
          ],
          correct: "C"
        },
        {
          id: "leftout",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Dolores Kowalczyk's account does the exhibit label leave out?",
          choices: [
            { letter: "A", text: "The whistle called workers in each morning." },
            { letter: "B", text: "The mill operated until the year 1961." },
            { letter: "C", text: "Schools and shops set schedules by the whistle." },
            { letter: "D", text: "The whistle gave a long final blast when the mill closed." }
          ],
          correct: "D"
        },
        {
          id: "impact",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that show the emotional impact of the mill's closing.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "cow",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 9, the father's description of the whistle's \"voice like a tired cow\" creates a tone that is —",
          choices: [
            { letter: "A", text: "affectionate and humorous" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "frightened and tense" }
          ],
          correct: "A"
        },
        {
          id: "sounded",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word sounded could have several meanings. In the label, it means —",
          choices: [
            { letter: "A", text: "seemed or appeared to be" },
            { letter: "B", text: "made to blow and give off noise" },
            { letter: "C", text: "measured for depth with a line" },
            { letter: "D", text: "judged to be healthy and whole" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c97-reviews",
      family: "G11",
      title: "Two Reviews of One Concert",
      kind: "Paired texts · 11.DSR",
      blurb: "A student critic and a retired band director hear the same ambitious youth orchestra concert very differently.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Review from the <em>Lakeview High Ledger</em>, by Amara Nwachukwu</strong></p>" +
        "<p>" + N(1) + "Few high school orchestras would attempt a full symphony in their winter concert, and fewer would choose one as demanding as the work the Lakeview Youth Orchestra played on Friday. " +
        N(2) + "The gamble paid off. " +
        N(3) + "The brass were occasionally ragged in the opening movement, but the slow movement was a revelation: the violas carried the main melody with a warmth that hushed the auditorium. " +
        N(4) + "Conductor Dmitri Valenti clearly trusts his students, and that trust showed in the finale, which the orchestra took at a daring tempo without losing control. " +
        N(5) + "A few missed entrances seem a fair price for that kind of ambition. " +
        N(6) + "Students who stretch toward music slightly beyond their reach grow faster than those who play it safe, and on Friday the audience could hear that growth happening.</p>" +
        "<p><strong>Text 2 — From a community music blog, by Harold Lindgren, retired band director</strong></p>" +
        "<p>" + N(7) + "The Lakeview Youth Orchestra deserves credit for courage, but courage is not the same as readiness. " +
        N(8) + "The symphony on Friday's program sat at the very edge of what these players can manage, and too often it showed. " +
        N(9) + "The brass struggled through the first movement, intonation wandered in the winds, and the finale, taken far too fast, blurred into hurried excitement rather than music. " +
        N(10) + "There were lovely moments, especially the violas in the slow movement. " +
        N(11) + "Yet I left wondering whether the students would have learned more from a shorter work they could truly polish. " +
        N(12) + "Ambition matters, but so does the experience of getting something exactly right." +
        "</p>",
      claims: [
        {
          id: "praised",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which part of the Lakeview concert is praised in both reviews?",
          choices: [
            { letter: "A", text: "the brass section's opening movement" },
            { letter: "B", text: "the violas' playing in the slow movement" },
            { letter: "C", text: "the winds' careful intonation throughout" },
            { letter: "D", text: "the conductor's choice of a short program" }
          ],
          correct: "B"
        },
        {
          id: "finale",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the two reviewers differ in their view of the finale's tempo?",
          choices: [
            { letter: "A", text: "Text 1 finds it daring but controlled; Text 2 finds it rushed." },
            { letter: "B", text: "Text 1 finds it too slow; Text 2 finds it exactly right." },
            { letter: "C", text: "Text 1 blames the conductor; Text 2 blames the students." },
            { letter: "D", text: "Text 1 ignores the finale; Text 2 praises it as the highlight." }
          ],
          correct: "A"
        },
        {
          id: "disagree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes the main point on which the two reviewers disagree?",
          choices: [
            { letter: "A", text: "whether the brass played well in the first movement" },
            { letter: "B", text: "whether the audience enjoyed the Friday concert" },
            { letter: "C", text: "whether Dmitri Valenti trusts his students" },
            { letter: "D", text: "whether the symphony was a wise choice for these players" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that respond most directly to the claim in sentence 6 of Text 1.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with Amara Nwachukwu's review, the tone of Harold Lindgren's review is more —",
          choices: [
            { letter: "A", text: "measured and skeptical" },
            { letter: "B", text: "bitterly dismissive" },
            { letter: "C", text: "openly enthusiastic" },
            { letter: "D", text: "bored and indifferent" }
          ],
          correct: "A"
        },
        {
          id: "revelation",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word revelation most nearly means —",
          choices: [
            { letter: "A", text: "a secret that was told by accident" },
            { letter: "B", text: "a surprising and impressive display" },
            { letter: "C", text: "a mistake that everyone could hear" },
            { letter: "D", text: "a section that was cut from the program" }
          ],
          correct: "B"
        }
      ]
    }

  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
