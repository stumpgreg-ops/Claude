/* SOL Labyrinth — Grade 11 medium packs (sign language, a zoo keeper, a wildfire lookout, a quilting circle).
 * Original Virginia EOC Reading-style content for the G11 family. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. Literary · sign language ───────────── */
    {
      id: "g11-rl-c92-paintcounter",
      family: "G11",
      title: "Eggshell",
      kind: "Literary · 11.RL",
      blurb: "At a paint counter, Amara decides not to speak for her Deaf father.",
      level: 1,
      passage:
        "<p>" + N(1) + "The clerk at the paint counter had a pencil behind each ear, and he aimed every question at Amara as if her father were a shelf display. " +
        N(2) + "\"What finish does he want?\" he asked, and Amara felt the old reflex rise in her hands, the quick translation she had been making since she was six. " +
        N(3) + "Her father, Emeka, stood beside her holding a swatch card the color of wet sand, waiting with the patience of a man who had been skipped over in a thousand lines. " +
        N(4) + "He had chosen the color himself, after three weekends of holding cards against the kitchen wall. " +
        N(5) + "Amara signed the clerk's question to him, but this time she did not voice his answer. " +
        N(6) + "Instead, she stepped half a pace back, so that the clerk, still looking for her, had to look past her shoulder. " +
        N(7) + "Emeka tapped the card, held up two fingers, and wrote \"eggshell\" on the notepad he always carried in his shirt pocket. " +
        N(8) + "The clerk read it, hesitated, and then, for the first time, spoke directly to her father: \"Two gallons of eggshell?\" " +
        N(9) + "Emeka nodded and smiled, and the smile was not for the clerk.</p>" +
        "<p>" + N(10) + "On the drive home, the cans knocked gently together in the trunk like two people agreeing. " +
        N(11) + "\"You didn't help me in there,\" her father signed at a red light, his eyebrows raised in mock complaint. " +
        N(12) + "\"You didn't need it,\" Amara signed back. " +
        N(13) + "He laughed, a sound she had always loved because he had never heard it himself, and when the light turned green he drove the rest of the way tapping the wheel to a rhythm only he could feel.</p>",
      claims: [
        {
          id: "stepback",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentence 6, Amara's decision to step half a pace back reveals that she —",
          choices: [
            { letter: "A", text: "is embarrassed to be seen shopping with her father" },
            { letter: "B", text: "wants the clerk to address her father directly" },
            { letter: "C", text: "has forgotten the sign for the finish he wants" },
            { letter: "D", text: "is impatient to leave the store and go home" }
          ],
          correct: "B"
        },
        {
          id: "shelf",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing Emeka to a shelf display emphasizes that the clerk —",
          choices: [
            { letter: "A", text: "assumes Emeka works at the store" },
            { letter: "B", text: "admires the way Emeka is dressed" },
            { letter: "C", text: "cannot find the paint Emeka wants" },
            { letter: "D", text: "treats Emeka as an object, not a customer" }
          ],
          correct: "D"
        },
        {
          id: "weekends",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The detail in sentence 4 about Emeka's three weekends of testing colors mainly serves to —",
          choices: [
            { letter: "A", text: "show that the choice is his own and carefully made" },
            { letter: "B", text: "suggest that Emeka has trouble making decisions" },
            { letter: "C", text: "explain why the family needs to repaint the kitchen" },
            { letter: "D", text: "hint that Amara chose the color without telling him" }
          ],
          correct: "A"
        },
        {
          id: "reflex",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 2, the word reflex suggests that Amara's habit of translating is —",
          choices: [
            { letter: "A", text: "something she does only when asked" },
            { letter: "B", text: "a skill she learned very recently" },
            { letter: "C", text: "automatic after years of practice" },
            { letter: "D", text: "painful for her hands to perform" }
          ],
          correct: "C"
        },
        {
          id: "cans",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 10, comparing the paint cans to two people agreeing creates a tone that is —",
          choices: [
            { letter: "A", text: "content and harmonious" },
            { letter: "B", text: "tense and uncertain" },
            { letter: "C", text: "mournful and quiet" },
            { letter: "D", text: "sarcastic and cold" }
          ],
          correct: "A"
        },
        {
          id: "redlight",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the exchange at the red light in sentences 11 and 12 resolve the story?",
          choices: [
            { letter: "A", text: "It shows that Emeka is upset that Amara refused to help." },
            { letter: "B", text: "It reveals that Amara regrets staying silent at the store." },
            { letter: "C", text: "It confirms that both see Amara's silence as a form of respect." },
            { letter: "D", text: "It suggests that the clerk will treat Emeka differently next time." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 2. Literary · zoo keeper ───────────── */
    {
      id: "g11-rl-c92-tortoise",
      family: "G11",
      title: "Task Number Three",
      kind: "Literary · 11.RL",
      blurb: "A new keeper with a fifteen-item schedule meets a tortoise who has no schedule at all.",
      level: 2,
      passage:
        "<p>" + N(1) + "On her first morning at the reptile house, Lucia Ferreira was handed a scrub brush, a clipboard, and a tortoise older than her grandmother. " +
        N(2) + "Bartholomew weighed more than two hundred kilograms and moved across his sandy yard like a decision that had not quite been made. " +
        N(3) + "\"Your job is to clean the yard while he's in it,\" said Mr. Haddad, the senior keeper, \"and his job is to ignore you.\" " +
        N(4) + "Lucia had a schedule taped inside her clipboard, fifteen tasks in neat blue ink, and the yard was task number three.</p>" +
        "<p>" + N(5) + "She tried to steer Bartholomew toward the shade with a gentle push on his shell, the way she had seen in a training video. " +
        N(6) + "He stopped, drew in his head, and became a boulder. " +
        N(7) + "For twenty minutes Lucia scrubbed around him, glancing at her watch, while tasks four through nine piled up in her mind. " +
        N(8) + "Then she noticed that he had begun to move on his own, slowly, toward the patch of clover she had set out by the gate an hour earlier.</p>" +
        "<p>" + N(9) + "The next morning, she set the clover down first and waited. " +
        N(10) + "Bartholomew walked to it, Lucia cleaned the empty corner behind him, and the whole job took eleven minutes. " +
        N(11) + "Mr. Haddad, passing with a bucket, raised an eyebrow at the clipboard, where task number three now had a small drawing of a clover leaf beside it. " +
        N(12) + "\"He trained you faster than most,\" he said. " +
        N(13) + "Lucia did not argue, because she suspected it was true.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Lucia's experience with Bartholomew most clearly develop?",
          choices: [
            { letter: "A", text: "Careful schedules are the key to success in any new job." },
            { letter: "B", text: "Senior workers should explain their methods more clearly." },
            { letter: "C", text: "Animals in zoos rarely respond to the people who care for them." },
            { letter: "D", text: "Work goes better when we adapt to others instead of forcing them." }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes how Lucia changes from the first morning to the second?",
          choices: [
            { letter: "A", text: "She moves from following her list rigidly to planning around the tortoise." },
            { letter: "B", text: "She moves from enjoying the job to wishing she had a different task." },
            { letter: "C", text: "She moves from trusting Mr. Haddad to doubting all of his advice." },
            { letter: "D", text: "She moves from fearing the tortoise to treating him like a pet." }
          ],
          correct: "A"
        },
        {
          id: "decision",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, saying that Bartholomew moves like a decision that had not quite been made suggests that he —",
          choices: [
            { letter: "A", text: "is confused by the layout of his yard" },
            { letter: "B", text: "moves slowly and without clear direction" },
            { letter: "C", text: "refuses to move whenever a keeper is near" },
            { letter: "D", text: "is too heavy to cross the sand at all" }
          ],
          correct: "B"
        },
        {
          id: "boulder",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The statement in sentence 6 that Bartholomew became a boulder has the effect of —",
          choices: [
            { letter: "A", text: "warning that the tortoise may be ill or injured" },
            { letter: "B", text: "showing that Lucia has pushed far too hard" },
            { letter: "C", text: "stressing, with humor, how completely he shuts down" },
            { letter: "D", text: "describing the rocky ground of the tortoise yard" }
          ],
          correct: "C"
        },
        {
          id: "piledup",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 7, the phrase piled up in her mind suggests that the unfinished tasks —",
          choices: [
            { letter: "A", text: "were being forgotten one by one" },
            { letter: "B", text: "were written in the wrong order" },
            { letter: "C", text: "had been handed to another keeper" },
            { letter: "D", text: "were becoming a growing worry" }
          ],
          correct: "D"
        },
        {
          id: "trained",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Mr. Haddad's comment in sentence 12 resolves the story by —",
          choices: [
            { letter: "A", text: "reversing, with humor, the idea of who trained whom" },
            { letter: "B", text: "criticizing Lucia for taking too long on the yard" },
            { letter: "C", text: "revealing that he had secretly trained the tortoise" },
            { letter: "D", text: "warning Lucia that the clover trick will not last" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 3. Literary · wildfire lookout ───────────── */
    {
      id: "g11-rl-c92-smudge",
      family: "G11",
      title: "The Afternoon Smudge",
      kind: "Literary · 11.RL",
      blurb: "A lookout names the ridges every morning, until one afternoon something on them leans.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every morning at six, Wren Takahashi walked the catwalk of the Pinyon Ridge lookout and named what she saw, out loud, to no one. " +
        N(2) + "Saddle Peak, clear; Miller Creek drainage, clear; the old burn scar, gray and quiet as a page someone had erased. " +
        N(3) + "The ritual was not in the manual, but in her second summer she had learned that saying a place made her actually look at it.</p>" +
        "<p>" + N(4) + "At 2:40 that afternoon, a smudge rose above the ridge east of Miller Creek, so faint it might have been dust kicked up by a logging truck. " +
        N(5) + "Wren lifted her binoculars and held her breath, as if breathing might blur the view. " +
        N(6) + "Dust drifts and thins; smoke gathers itself and leans with the wind. " +
        N(7) + "This one was leaning. " +
        N(8) + "She swung the sighting ring on the fire finder until the crosshair split the smudge, read the bearing twice, and picked up the radio. " +
        N(9) + "\"Pinyon Ridge to dispatch, smoke report,\" she said, and her voice came out steadier than her hands.</p>" +
        "<p>" + N(10) + "By evening a crew had reached it: a lightning-struck tree, smoldering in a quarter acre of needles, caught before it could become anything with a name. " +
        N(11) + "No one would ever write about it, because there would be nothing to write. " +
        N(12) + "At dusk Wren opened the logbook and entered the time, the bearing, and the word \"contained,\" in the same small print she used for the weather. " +
        N(13) + "Then she stepped onto the catwalk and named the ridges again, one by one, the way some people say good night.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of The Afternoon Smudge?",
          choices: [
            { letter: "A", text: "People who work alone eventually lose interest in their surroundings." },
            { letter: "B", text: "Steady, ordinary attention can prevent disasters no one ever hears about." },
            { letter: "C", text: "Following official manuals matters more than developing personal habits." },
            { letter: "D", text: "Natural events are too unpredictable for anyone to guard against." }
          ],
          correct: "B"
        },
        {
          id: "leaning",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Sentence 7 is set apart as a very short sentence mainly to —",
          choices: [
            { letter: "A", text: "show that Wren is unsure what she is seeing" },
            { letter: "B", text: "suggest that the wind has suddenly stopped" },
            { letter: "C", text: "mark the moment Wren recognizes the haze as smoke" },
            { letter: "D", text: "signal that the logging truck has driven away" }
          ],
          correct: "C"
        },
        {
          id: "erased",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, comparing the burn scar to a page someone had erased suggests that the land —",
          choices: [
            { letter: "A", text: "still shows signs of a past fire that left it bare" },
            { letter: "B", text: "is about to be replanted by a forestry crew" },
            { letter: "C", text: "has never appeared on any of Wren's maps" },
            { letter: "D", text: "is the place Wren finds most beautiful to watch" }
          ],
          correct: "A"
        },
        {
          id: "noname",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The phrase caught before it could become anything with a name in sentence 10 creates a tone that is —",
          choices: [
            { letter: "A", text: "boastful and proud" },
            { letter: "B", text: "anxious and fearful" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "quietly relieved" }
          ],
          correct: "D"
        },
        {
          id: "gathers",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 6, the word gathers suggests that smoke, unlike dust, —",
          choices: [
            { letter: "A", text: "settles quickly back onto the ground" },
            { letter: "B", text: "thickens and holds together as it rises" },
            { letter: "C", text: "changes color as the day grows later" },
            { letter: "D", text: "spreads out evenly in every direction" }
          ],
          correct: "B"
        },
        {
          id: "frame",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final sentence connect to the opening of the passage?",
          choices: [
            { letter: "A", text: "It shows that Wren has decided to stop her morning ritual." },
            { letter: "B", text: "It reveals that Wren had been wrong about the smoke all along." },
            { letter: "C", text: "It shifts the story to another lookout's point of view." },
            { letter: "D", text: "It returns to her ritual, showing her vigilance goes on unchanged." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 4. Literary · quilting circle ───────────── */
    {
      id: "g11-rl-c92-thimble",
      family: "G11",
      title: "Small Stitches",
      kind: "Literary · 11.RL",
      blurb: "Marisol only came to give her great-aunt a ride. Then someone handed her a needle.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Thursday quilting circle met in the back room of the Linden Street library, six women and one long frame that took up nearly the whole floor. " +
        N(2) + "Marisol had come only because her great-aunt Paz needed a ride, and she planned to spend the afternoon on her phone in the corner. " +
        N(3) + "Instead, Mrs. Abernathy handed her a threaded needle before she could sit down. " +
        N(4) + "\"Small stitches,\" Mrs. Abernathy said, \"and even if they're crooked, keep them small.\"</p>" +
        "<p>" + N(5) + "The quilt on the frame was for the Delgado family, whose house had flooded in the spring, and each block had been pieced from donated shirts and dresses. " +
        N(6) + "Marisol's first row wandered across a blue gingham square like a line of ants that had lost the scent. " +
        N(7) + "She waited for someone to pull it out. " +
        N(8) + "No one did. " +
        N(9) + "Aunt Paz only leaned over, tapped the row with one knuckle, and said, \"Now that block knows you were here.\"</p>" +
        "<p>" + N(10) + "By four o'clock, Marisol's stitches had straightened, though not entirely, and she had learned the names of every woman around the frame and the story behind half the fabric. " +
        N(11) + "The yellow plaid had been a wedding shirt; the faded red had been a school uniform. " +
        N(12) + "When the circle packed up, she noticed that her phone had been lying face down on a chair the entire afternoon. " +
        N(13) + "Next Thursday, she told Aunt Paz, she would drive her again, and this time she would bring her own thimble.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea about community is most clearly developed in Small Stitches?",
          choices: [
            { letter: "A", text: "Skilled work should be left to people with experience." },
            { letter: "B", text: "Young people rarely value the traditions of older relatives." },
            { letter: "C", text: "Even imperfect contributions become part of a shared work." },
            { letter: "D", text: "Donated items are more meaningful than purchased ones." }
          ],
          correct: "C"
        },
        {
          id: "nooneDid",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Sentences 7 and 8 are kept short mainly to —",
          choices: [
            { letter: "A", text: "build brief suspense and then reveal the women's acceptance" },
            { letter: "B", text: "show that Marisol has stopped paying attention to the quilt" },
            { letter: "C", text: "suggest that the women are too busy to notice her mistakes" },
            { letter: "D", text: "signal that the circle is about to end for the afternoon" }
          ],
          correct: "A"
        },
        {
          id: "ants",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 6, the simile comparing Marisol's stitches to ants that had lost the scent emphasizes that the row —",
          choices: [
            { letter: "A", text: "was sewn too tightly into the cloth" },
            { letter: "B", text: "wandered without a clear direction" },
            { letter: "C", text: "used thread that was the wrong color" },
            { letter: "D", text: "was finished much faster than expected" }
          ],
          correct: "B"
        },
        {
          id: "knows",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Aunt Paz's remark in sentence 9 that the block knows you were here creates a tone that is —",
          choices: [
            { letter: "A", text: "stern and disappointed" },
            { letter: "B", text: "nervous and hurried" },
            { letter: "C", text: "distant and formal" },
            { letter: "D", text: "warm and welcoming" }
          ],
          correct: "D"
        },
        {
          id: "notentirely",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 10, the phrase though not entirely suggests that Marisol's stitches —",
          choices: [
            { letter: "A", text: "had to be removed before the quilt was done" },
            { letter: "B", text: "were straighter than anyone else's in the circle" },
            { letter: "C", text: "improved during the afternoon but stayed imperfect" },
            { letter: "D", text: "were never noticed by the other women" }
          ],
          correct: "C"
        },
        {
          id: "phone",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The detail about the phone in sentence 12, set against Marisol's plan in sentence 2, shows that she —",
          choices: [
            { letter: "A", text: "had misplaced her phone and was worried about it" },
            { letter: "B", text: "had become absorbed in the circle without noticing" },
            { letter: "C", text: "was too tired from sewing to check her messages" },
            { letter: "D", text: "had been told by Aunt Paz to put the phone away" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 5. Literary · sign language class ───────────── */
    {
      id: "g11-rl-c92-namesign",
      family: "G11",
      title: "T on the Chin",
      kind: "Literary · 11.RL",
      blurb: "In ASL class you cannot choose your own name sign. Tobias has to wait for one.",
      level: 3,
      passage:
        "<p>" + N(1) + "For six weeks of American Sign Language II, I was a string of letters. " +
        N(2) + "Every time Ms. Barrios called on me, she fingerspelled my whole name, T-O-B-I-A-S, her hand moving so smoothly that I had to admit she was being patient, not lazy. " +
        N(3) + "Half the class had name signs by October. " +
        N(4) + "Rania's was an R tapped on her cheek, for the dimple that appeared when she was trying not to laugh; Dmitri's was a D brushed across his forehead, for the hair he was always pushing out of his eyes. " +
        N(5) + "I asked once, in careful, clumsy signs, when I would get mine. " +
        N(6) + "Ms. Barrios answered with a single sign that the class later agreed meant \"wait,\" though Rania insisted it meant \"obviously.\"</p>" +
        "<p>" + N(7) + "In the Deaf community, she had explained on the first day, you do not choose your own name sign; people who know you give it to you. " +
        N(8) + "So I kept coming, kept fingerspelling my answers, and kept my hands still when I was nervous, because I had noticed that restless hands in that room were a kind of shouting.</p>" +
        "<p>" + N(9) + "Then, on a gray Tuesday in November, I was signing my way through a story about a lost dog, and I tapped my pencil twice against my chin while I searched for the sign for \"fence.\" " +
        N(10) + "Ms. Barrios stopped me. " +
        N(11) + "She formed a T and tapped it twice on her chin, and the whole room grinned. " +
        N(12) + "I had been doing that all semester without knowing it. " +
        N(13) + "It is a strange thing, to be handed a name made out of a habit you never saw, and to feel more known than you did when you introduced yourself.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of Tobias's story about his name sign?",
          choices: [
            { letter: "A", text: "Learning a new language is mostly a matter of memorizing rules." },
            { letter: "B", text: "Teachers should treat every student in exactly the same way." },
            { letter: "C", text: "Being truly known often comes from the attention of others." },
            { letter: "D", text: "Nervous habits should be hidden from classmates and teachers." }
          ],
          correct: "C"
        },
        {
          id: "examples",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The descriptions of Rania's and Dmitri's name signs in sentence 4 mainly serve to —",
          choices: [
            { letter: "A", text: "show that name signs grow from traits others notice, setting up Tobias's" },
            { letter: "B", text: "suggest that Ms. Barrios prefers Rania and Dmitri to Tobias" },
            { letter: "C", text: "explain why Tobias wants a name sign based on his appearance" },
            { letter: "D", text: "reveal that the class has finished learning the alphabet" }
          ],
          correct: "A"
        },
        {
          id: "keptcoming",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 8 reveals that Tobias —",
          choices: [
            { letter: "A", text: "is losing interest in the class after waiting so long" },
            { letter: "B", text: "plans to invent a name sign for himself instead" },
            { letter: "C", text: "believes that Ms. Barrios has forgotten his request" },
            { letter: "D", text: "respects the class's customs and keeps showing up patiently" }
          ],
          correct: "D"
        },
        {
          id: "obviously",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The detail in sentence 6 that Rania insisted the sign meant obviously adds a tone of —",
          choices: [
            { letter: "A", text: "sharp criticism" },
            { letter: "B", text: "gentle humor" },
            { letter: "C", text: "deep regret" },
            { letter: "D", text: "quiet fear" }
          ],
          correct: "B"
        },
        {
          id: "shouting",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, the phrase a kind of shouting suggests that in a signing classroom, restless hands —",
          choices: [
            { letter: "A", text: "draw attention the way a loud voice would" },
            { letter: "B", text: "are a sign of anger toward the teacher" },
            { letter: "C", text: "help students remember new vocabulary" },
            { letter: "D", text: "are the polite way to ask a question" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Tobias tells his own story in the first person. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "understand how Ms. Barrios chose each student's name sign" },
            { letter: "B", text: "learn what Rania and Dmitri privately think of Tobias" },
            { letter: "C", text: "follow the lost-dog story that Tobias was signing" },
            { letter: "D", text: "share his long wait and his surprise at the habit he never saw" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 6. Poetry · wildfire lookout ───────────── */
    {
      id: "g11-rl-c92-lookoutaugust",
      family: "G11",
      title: "Lookout, August",
      kind: "Poetry · 11.RL",
      blurb: "A fire lookout keeps a log of nothing happening, and is proud of it.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Up here the morning comes in stages:<br>" +
        L(2) + "first the far peaks, struck like matches,<br>" +
        L(3) + "then the long blue valleys, slowly,<br>" +
        L(4) + "then the road, then the river, then me.<br>" +
        L(5) + "I keep a log of nothing happening:<br>" +
        L(6) + "clear, clear, clear, wind from the west,<br>" +
        L(7) + "a hawk that circles the same dead pine<br>" +
        L(8) + "as if it, too, has a shift to work.<br>" +
        L(9) + "My job is to notice the one gray thread<br>" +
        L(10) + "that does not belong in the weave,<br>" +
        L(11) + "to say its bearing into the radio<br>" +
        L(12) + "before it learns to be a fire.<br>" +
        L(13) + "Most days I write only the weather.<br>" +
        L(14) + "Most days are the ones I am proudest of." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses the central idea of Lookout, August?",
          choices: [
            { letter: "A", text: "A quiet day with no fire is a sign that the watcher's work succeeded." },
            { letter: "B", text: "Living alone on a mountain slowly makes a person forget the world." },
            { letter: "C", text: "Hawks are better than people at noticing changes in the forest." },
            { letter: "D", text: "Radios have made the work of a fire lookout far less important." }
          ],
          correct: "A"
        },
        {
          id: "clearclear",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "Line 6, which repeats the word clear, mainly emphasizes —",
          choices: [
            { letter: "A", text: "the speaker's frustration with the weather" },
            { letter: "B", text: "the sudden arrival of smoke in the valley" },
            { letter: "C", text: "the steady sameness of the speaker's observations" },
            { letter: "D", text: "the speaker's difficulty seeing the far peaks" }
          ],
          correct: "C"
        },
        {
          id: "hawk",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In lines 7 and 8, the speaker imagines the hawk working a shift. This suggests that the speaker —",
          choices: [
            { letter: "A", text: "resents the hawk for having an easier job" },
            { letter: "B", text: "feels a kind of companionship with the hawk" },
            { letter: "C", text: "is worried that the dead pine will catch fire" },
            { letter: "D", text: "wants to stop watching and go down the mountain" }
          ],
          correct: "B"
        },
        {
          id: "thread",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "In lines 9 and 10, the gray thread that does not belong in the weave represents —",
          choices: [
            { letter: "A", text: "a road cutting through the forest" },
            { letter: "B", text: "a storm cloud moving over the peaks" },
            { letter: "C", text: "the river seen from far above" },
            { letter: "D", text: "the first faint trace of smoke" }
          ],
          correct: "D"
        },
        {
          id: "matches",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 2, describing the far peaks as struck like matches creates an image that —",
          choices: [
            { letter: "A", text: "shows that the peaks are already burning" },
            { letter: "B", text: "shows sunlight catching the summits first, with a hint of fire" },
            { letter: "C", text: "suggests that the speaker is lighting a stove for breakfast" },
            { letter: "D", text: "suggests that the peaks are smaller than they appear" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the order of details in lines 1 through 4 shape the poem's opening?",
          choices: [
            { letter: "A", text: "It moves from the speaker outward to the distant peaks." },
            { letter: "B", text: "It lists the places most likely to catch fire first." },
            { letter: "C", text: "It moves from far to near, arriving at the speaker last." },
            { letter: "D", text: "It describes the view from noon until sunset." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 7. Poetry · sign language ───────────── */
    {
      id: "g11-rl-c92-sparrow",
      family: "G11",
      title: "What My Grandmother's Hands Said",
      kind: "Poetry · 11.RL",
      blurb: "A grandchild learns to catch the sparrow of a grandmother's signing.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother talked with her hands<br>" +
        L(2) + "long before I learned to listen with my eyes.<br>" +
        L(3) + "At dinner her fingers flew above the rice,<br>" +
        L(4) + "a sparrow that would not settle,<br>" +
        L(5) + "a story half told before I'd found the start.<br>" +
        L(6) + "I answered with a nod, a shrug, a guess,<br>" +
        L(7) + "and watched the questions fold back into her palms.<br><br>" +
        L(8) + "The winter I turned fifteen, I took a class.<br>" +
        L(9) + "I learned that eyebrows carry grammar,<br>" +
        L(10) + "that a question lives in a lifted face,<br>" +
        L(11) + "that empty air can hold a name.<br>" +
        L(12) + "Now at dinner I lean in and catch the sparrow;<br>" +
        L(13) + "she slows for no one, and she does not need to.<br>" +
        L(14) + "The story arrives whole, and I am in it." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of What My Grandmother's Hands Said?",
          choices: [
            { letter: "A", text: "Family stories lose their meaning as they are retold." },
            { letter: "B", text: "Older relatives should adapt to the needs of the young." },
            { letter: "C", text: "Dinner is the most important time for a family to talk." },
            { letter: "D", text: "Learning someone's language can turn distance into closeness." }
          ],
          correct: "D"
        },
        {
          id: "fold",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Line 7, in which the questions fold back into her palms, implies that the grandmother —",
          choices: [
            { letter: "A", text: "was angry that the speaker refused to answer" },
            { letter: "B", text: "let her questions go unanswered when she was not understood" },
            { letter: "C", text: "was hiding something in her hands at the table" },
            { letter: "D", text: "asked her questions again more slowly and clearly" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes how the speaker changes between the two stanzas?",
          choices: [
            { letter: "A", text: "The speaker goes from guessing at the stories to fully understanding them." },
            { letter: "B", text: "The speaker goes from loving dinner to avoiding the family table." },
            { letter: "C", text: "The speaker goes from signing fluently to forgetting the language." },
            { letter: "D", text: "The speaker goes from trusting the grandmother to doubting her." }
          ],
          correct: "A"
        },
        {
          id: "sparrow",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The sparrow mentioned in lines 4 and 12 most clearly represents —",
          choices: [
            { letter: "A", text: "a bird the family feeds at dinner" },
            { letter: "B", text: "the speaker's wish to leave home" },
            { letter: "C", text: "the grandmother's quick, lively signing" },
            { letter: "D", text: "the winter when the speaker turned fifteen" }
          ],
          correct: "C"
        },
        {
          id: "carry",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In line 9, the word carry suggests that eyebrows —",
          choices: [
            { letter: "A", text: "show only how a signer is feeling" },
            { letter: "B", text: "make signing harder for a beginner" },
            { letter: "C", text: "replace the need for any hand signs" },
            { letter: "D", text: "hold and convey part of a sentence's meaning" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the break between line 7 and line 8 organize the poem?",
          choices: [
            { letter: "A", text: "It divides the speaker's life before learning to sign from after." },
            { letter: "B", text: "It moves from the grandmother's point of view to the speaker's." },
            { letter: "C", text: "It separates a happy memory from a sad one about the class." },
            { letter: "D", text: "It shifts from describing dinner to describing a different meal." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 8. Drama · zoo keeper ───────────── */
    {
      id: "g11-rl-c92-otterpool",
      family: "G11",
      title: "The Eleven O'Clock Feeding",
      kind: "Drama · 11.RL",
      blurb: "Two keepers disagree about an aging otter's place in the public show.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "Early morning at the river otter pool, before the zoo opens. ODALYS, a senior keeper, kneels at the edge with a bucket of fish; GRANT, a newer keeper, stands behind her holding a tablet.</em></p>" +
        "<p><strong>GRANT:</strong> " + N(2) + "The vet signed off on it, Odalys. " + N(3) + "Pepper comes off the public schedule on Monday.</p>" +
        "<p><strong>ODALYS:</strong> " + N(4) + "Pepper has done the eleven o'clock feeding for nine years. " + N(5) + "The kids know her by the white patch on her chin.</p>" +
        "<p><strong>GRANT:</strong> " + N(6) + "And she's missed the last three cues, because she can't see the hand signals from the far rock anymore.</p>" +
        "<p><strong>ODALYS:</strong> <em>(tossing a fish, which Pepper catches on the second try)</em> " + N(7) + "She caught that one.</p>" +
        "<p><strong>GRANT:</strong> " + N(8) + "On the second try. " + N(9) + "I'm not trying to take her away from you; I'm trying to take her out of a spotlight she can't read anymore.</p>" +
        "<p><strong>ODALYS:</strong> <em>(quiet for a moment, wiping her hands on her vest)</em> " + N(10) + "When I started here, the keeper before me said the hardest part of this job is the day you choose the animal over the audience.</p>" +
        "<p><strong>GRANT:</strong> " + N(11) + "What did you say to her?</p>" +
        "<p><strong>ODALYS:</strong> " + N(12) + "That I'd never have to. <em>(She stands.)</em> " + N(13) + "I was twenty-three, and I thought the animals would stay the same age I was.</p>" +
        "<p><strong>GRANT:</strong> " + N(14) + "We could move her talk to the back pool with the volunteers: small groups, closer up, so she can see the signals.</p>" +
        "<p><strong>ODALYS:</strong> <em>(a small smile)</em> " + N(15) + "You've been planning this speech for a week.</p>" +
        "<p><strong>GRANT:</strong> " + N(16) + "Two weeks. " + N(17) + "I kept getting the ending wrong.</p>" +
        "<p><strong>ODALYS:</strong> " + N(18) + "Put me on the schedule for the back pool, then, and I'll bring the fish.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed in the scene between Odalys and Grant?",
          choices: [
            { letter: "A", text: "Newer workers usually understand animals better than veterans." },
            { letter: "B", text: "Caring for someone can mean changing a routine you love." },
            { letter: "C", text: "Audiences matter more to a zoo than the animals do." },
            { letter: "D", text: "Old habits are impossible to change once they are set." }
          ],
          correct: "B"
        },
        {
          id: "secondtry",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction that Pepper catches the fish on the second try mainly serves to —",
          choices: [
            { letter: "A", text: "show that Pepper is no longer hungry in the mornings" },
            { letter: "B", text: "prove that Odalys is a more skilled keeper than Grant" },
            { letter: "C", text: "suggest that the fish were thrown into the wrong pool" },
            { letter: "D", text: "support Grant's concern even as Odalys tries to deny it" }
          ],
          correct: "D"
        },
        {
          id: "twentythree",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Odalys's admission in sentence 13 reveals that she —",
          choices: [
            { letter: "A", text: "once failed to imagine that the animals would grow old" },
            { letter: "B", text: "has always planned to retire before Pepper does" },
            { letter: "C", text: "disagreed with the keeper who trained her years ago" },
            { letter: "D", text: "believes the vet made a mistake about Pepper's eyes" }
          ],
          correct: "A"
        },
        {
          id: "spotlight",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, Grant's reference to a spotlight she can't read anymore suggests that —",
          choices: [
            { letter: "A", text: "the lights over the otter pool are too bright" },
            { letter: "B", text: "Pepper has never enjoyed performing for crowds" },
            { letter: "C", text: "the public show depends on signals Pepper can no longer see" },
            { letter: "D", text: "the feeding schedule is posted where keepers cannot find it" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Grant's admission in sentence 17 that he kept getting the ending wrong adds a tone of —",
          choices: [
            { letter: "A", text: "bitter frustration" },
            { letter: "B", text: "cold formality" },
            { letter: "C", text: "humble, light honesty" },
            { letter: "D", text: "nervous suspicion" }
          ],
          correct: "C"
        },
        {
          id: "choose",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 10, the word choose suggests that the keeper's hardest decision —",
          choices: [
            { letter: "A", text: "is made for keepers by the veterinarian" },
            { letter: "B", text: "requires ranking one loyalty above another" },
            { letter: "C", text: "happens only once in a keeper's career" },
            { letter: "D", text: "can be avoided by careful daily training" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 9. Informational · wildfire lookout ───────────── */
    {
      id: "g11-ri-c92-firefinder",
      family: "G11",
      title: "Two Lines on a Map",
      kind: "Informational · 11.RI",
      blurb: "How a lookout's fire finder, and a second tower, can pin a smoke to one spot.",
      level: 1,
      passage:
        "<p>" + N(1) + "A fire lookout's most important tool is not a pair of binoculars but a flat, round instrument called a fire finder. " +
        N(2) + "The fire finder sits on a stand in the center of the lookout cabin, and on its surface is a map of the surrounding country, with the tower itself marked in the middle. " +
        N(3) + "Around the edge of the map runs a ring marked in degrees, from 0 at true north all the way around to 360. " +
        N(4) + "Two sights are mounted on the ring, one with a small peephole and one with a thin vertical wire.</p>" +
        "<p>" + N(5) + "When a lookout spots smoke, she turns the ring until the wire lines up with the smoke, and then she reads the number on the ring, called the bearing. " +
        N(6) + "A single bearing tells a dispatcher which direction the fire lies, but not how far away it is. " +
        N(7) + "For that, a second lookout on a different peak takes a bearing of the same smoke. " +
        N(8) + "Where the two lines cross on the dispatcher's map, the fire must be. " +
        N(9) + "This method, called triangulation, can place a small fire within a few hundred meters, even in country with no roads.</p>" +
        "<p>" + N(10) + "Today, many forests also use cameras and satellites, which can watch huge areas at once. " +
        N(11) + "Still, a camera sees only what it is pointed at, and a trained lookout notices things a lens can miss, such as the faint blue color of early smoke. " +
        N(12) + "In many districts, the two systems now work side by side.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of Two Lines on a Map?",
          choices: [
            { letter: "A", text: "Cameras and satellites have replaced the work of fire lookouts." },
            { letter: "B", text: "Lookout towers are built on the highest peak in every forest." },
            { letter: "C", text: "Lookouts use the fire finder and shared bearings to locate fires." },
            { letter: "D", text: "Dispatchers decide which fires are worth sending crews to fight." }
          ],
          correct: "C"
        },
        {
          id: "second",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why does a dispatcher need a second lookout's bearing?",
          choices: [
            { letter: "A", text: "One bearing shows direction but not distance." },
            { letter: "B", text: "The first lookout may have misread the ring." },
            { letter: "C", text: "Two towers must agree before a crew is sent." },
            { letter: "D", text: "The fire finder works only in clear weather." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's attitude toward camera systems in sentences 10 through 12 is best described as —",
          choices: [
            { letter: "A", text: "dismissive, treating cameras as a waste of money" },
            { letter: "B", text: "enthusiastic, urging forests to remove their towers" },
            { letter: "C", text: "confused, unsure what cameras are able to do" },
            { letter: "D", text: "balanced, seeing value in both cameras and lookouts" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 2 through 9?",
          choices: [
            { letter: "A", text: "by comparing the history of several lookout towers" },
            { letter: "B", text: "by describing a tool and then explaining how it is used" },
            { letter: "C", text: "by listing the causes of fires and then their effects" },
            { letter: "D", text: "by presenting a problem and rejecting several solutions" }
          ],
          correct: "B"
        },
        {
          id: "cross",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In the passage about the fire finder, sentence 8 serves mainly to —",
          choices: [
            { letter: "A", text: "warn that lookouts often disagree about bearings" },
            { letter: "B", text: "describe the dispatcher's office in detail" },
            { letter: "C", text: "state the key idea of triangulation in plain terms" },
            { letter: "D", text: "explain why maps are kept in the lookout cabin" }
          ],
          correct: "C"
        },
        {
          id: "blue",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about the faint blue color of early smoke in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "give an example of what a trained eye might catch that a lens misses" },
            { letter: "B", text: "explain how lookouts tell smoke apart from clouds at night" },
            { letter: "C", text: "suggest that cameras should be painted to match the sky" },
            { letter: "D", text: "show that most forest fires begin in the early morning" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 10. Informational · zoo keeper ───────────── */
    {
      id: "g11-ri-c92-enrichment",
      family: "G11",
      title: "Why the Bear Gets a Box",
      kind: "Informational · 11.RI",
      blurb: "Zoo enrichment, from frozen fruit to spice trails, and the reasons behind it.",
      level: 2,
      passage:
        "<p>" + N(1) + "Visitors who watch a zoo's sun bear rip open a cardboard box may assume the bear is simply playing, but the box is part of a carefully planned program called enrichment. " +
        N(2) + "Enrichment is any change to an animal's surroundings or routine that encourages the animal to use its natural behaviors. " +
        N(3) + "In the wild, a sun bear spends hours each day tearing into logs, digging for insects, and licking honey from narrow spaces with its long tongue. " +
        N(4) + "In a zoo, where meals arrive on schedule, those skills can go unused, and animals with too little to do sometimes develop repetitive habits such as pacing the same path for hours.</p>" +
        "<p>" + N(5) + "Keepers respond by making food harder to get. " +
        N(6) + "They freeze fruit inside blocks of ice for primates, hide meat in burlap bundles for big cats, and smear honey deep inside hollow logs for bears. " +
        N(7) + "Enrichment is not only about food, however. " +
        N(8) + "New scents, such as spices sprinkled on rocks, can send a tiger patrolling its yard, and a pile of fresh leaves can keep a gorilla sorting for an hour. " +
        N(9) + "Keepers record how each animal responds and change the items often, because even a clever puzzle becomes boring once it is solved.</p>" +
        "<p>" + N(10) + "The results can be measured. " +
        N(11) + "At many zoos, keepers have reported that pacing drops when enrichment increases. " +
        N(12) + "For visitors, the program has a side benefit: an animal busy solving a problem is far more interesting to watch than one asleep in a corner. " +
        N(13) + "But keepers are quick to point out that the visitors were never the reason for it.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of Why the Bear Gets a Box?",
          choices: [
            { letter: "A", text: "Sun bears are the most playful animals in most zoos." },
            { letter: "B", text: "Enrichment prompts natural behaviors to keep zoo animals healthy." },
            { letter: "C", text: "Zoo visitors prefer exhibits where the animals are active." },
            { letter: "D", text: "Keepers should feed animals on a strict and steady schedule." }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why do keepers change enrichment items often?",
          choices: [
            { letter: "A", text: "Old items can become unsafe after a few uses." },
            { letter: "B", text: "Visitors complain when they see the same items." },
            { letter: "C", text: "Different keepers prefer different kinds of items." },
            { letter: "D", text: "A puzzle loses its interest once it has been solved." }
          ],
          correct: "D"
        },
        {
          id: "visitors",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The final sentence of the passage about enrichment mainly suggests that keepers —",
          choices: [
            { letter: "A", text: "design enrichment for the animals' welfare, not for crowds" },
            { letter: "B", text: "wish more visitors would come to watch the animals" },
            { letter: "C", text: "are unaware that visitors enjoy the enrichment program" },
            { letter: "D", text: "plan to stop the program if attendance falls" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes the passage about enrichment mainly by —",
          choices: [
            { letter: "A", text: "telling the story of one bear from birth to old age" },
            { letter: "B", text: "comparing zoos in several different countries" },
            { letter: "C", text: "defining a practice, explaining the need, giving examples, and noting results" },
            { letter: "D", text: "listing arguments against enrichment and answering each one" }
          ],
          correct: "C"
        },
        {
          id: "however",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 7, which begins Enrichment is not only about food, serves mainly to —",
          choices: [
            { letter: "A", text: "correct an error in the examples given in sentence 6" },
            { letter: "B", text: "shift from food-based examples to other kinds of enrichment" },
            { letter: "C", text: "argue that food is the least useful form of enrichment" },
            { letter: "D", text: "introduce the measurable results described at the end" }
          ],
          correct: "B"
        },
        {
          id: "pacing",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about pacing in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "describe how sun bears behave in the wild" },
            { letter: "B", text: "suggest that zoo paths are too narrow for large animals" },
            { letter: "C", text: "explain why visitors find some exhibits boring" },
            { letter: "D", text: "identify a problem that enrichment is meant to reduce" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 11. Informational · sign language ───────────── */
    {
      id: "g11-ri-c92-signspace",
      family: "G11",
      title: "Grammar in the Air",
      kind: "Informational · 11.RI",
      blurb: "Signing space, raised eyebrows, and why ASL is not English spelled with the hands.",
      level: 3,
      passage:
        "<p>" + N(1) + "People who have never studied a signed language often assume that it is a code for spoken words, a kind of English written in the air. " +
        N(2) + "The assumption is understandable, and it is wrong. " +
        N(3) + "American Sign Language has a grammar of its own, which differs from English in many basic ways, and much of that grammar is carried by features that have no equivalent in speech.</p>" +
        "<p>" + N(4) + "Consider space. " +
        N(5) + "A signer telling a story about two friends may place one friend to the left and the other to the right; from then on, a sign moving from left to right can show that the first friend gave something to the second, with no names repeated. " +
        N(6) + "The space in front of the signer becomes a kind of stage on which the grammar is performed. " +
        N(7) + "Consider, too, the face. " +
        N(8) + "Raised eyebrows can turn a statement into a yes-or-no question, while lowered brows often mark a question asking who, what, or where. " +
        N(9) + "A facial expression that looks to an outsider like mere emotion is often doing the work that word order or punctuation does in English.</p>" +
        "<p>" + N(10) + "Linguists describe many of these features as simultaneous: a signer can show a verb, who did it, to whom, and the type of sentence all at once. " +
        N(11) + "Spoken languages, by contrast, must line their pieces up one after another, because the mouth can make only one sound at a time. " +
        N(12) + "Seen this way, signed languages are not a substitute for speech but evidence of how many forms human language can take.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of Grammar in the Air?",
          choices: [
            { letter: "A", text: "Signed languages are simplified versions of spoken ones." },
            { letter: "B", text: "Facial expressions in ASL mainly show the signer's mood." },
            { letter: "C", text: "Learning ASL is easiest for people who already speak English." },
            { letter: "D", text: "ASL has a full grammar that uses space and the face in unique ways." }
          ],
          correct: "D"
        },
        {
          id: "simul",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word simultaneous in sentence 10 comes from a Latin root meaning at the same time. This root helps show that a signer can —",
          choices: [
            { letter: "A", text: "express several parts of a sentence in one moment" },
            { letter: "B", text: "sign more slowly than a speaker can talk" },
            { letter: "C", text: "repeat a sign several times for emphasis" },
            { letter: "D", text: "switch between two languages in a conversation" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's main purpose in sentences 1 and 2 is to —",
          choices: [
            { letter: "A", text: "criticize readers who have never learned to sign" },
            { letter: "B", text: "explain how English was used to create ASL" },
            { letter: "C", text: "introduce a common belief that the passage will correct" },
            { letter: "D", text: "describe the history of signed languages in schools" }
          ],
          correct: "C"
        },
        {
          id: "consider",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the discussion in sentences 4 through 9?",
          choices: [
            { letter: "A", text: "by telling a story about two friends who learn to sign" },
            { letter: "B", text: "by presenting two features, each introduced with Consider" },
            { letter: "C", text: "by listing the steps for forming a question in ASL" },
            { letter: "D", text: "by comparing ASL with several other signed languages" }
          ],
          correct: "B"
        },
        {
          id: "stage",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 6, comparing the signing space to a stage helps the reader understand that —",
          choices: [
            { letter: "A", text: "places in that space are used on purpose to show who does what" },
            { letter: "B", text: "signers must stand on a raised platform to be seen clearly" },
            { letter: "C", text: "ASL storytelling is mainly a form of theater entertainment" },
            { letter: "D", text: "signers exaggerate their movements to entertain an audience" }
          ],
          correct: "A"
        },
        {
          id: "mouth",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the contrast with spoken languages in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "argue that spoken languages are less expressive" },
            { letter: "B", text: "explain why most people learn to speak before signing" },
            { letter: "C", text: "show that the two kinds of language share one grammar" },
            { letter: "D", text: "highlight what makes the simultaneous features unusual" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 12. Informational · quilting circle ───────────── */
    {
      id: "g11-ri-c92-quiltrecords",
      family: "G11",
      title: "Quilts as Documents",
      kind: "Informational · 11.RI",
      blurb: "Feed-sack fabric, signature blocks, and the ten-minute label that may outlast everything.",
      level: 2,
      passage:
        "<p>" + N(1) + "A quilt is usually described as a bed covering, but historians who study quilting circles have come to treat quilts as something closer to documents. " +
        N(2) + "For generations, groups of neighbors gathered around a shared frame to stitch the layers of a quilt together, a task that could take one person months but a circle only days. " +
        N(3) + "While their hands worked, the members talked, and the quilts recorded those years in a surprising way: through their materials.</p>" +
        "<p>" + N(4) + "During hard times, for example, many quilters pieced their tops from cotton sacks that had held flour or animal feed. " +
        N(5) + "Some mills, noticing that women were reusing the sacks, began printing them with flowers and checks, so that a family's choice of flour could depend on which pattern would finish a quilt. " +
        N(6) + "Other circles made signature quilts, in which each block carried a stitched or inked name. " +
        N(7) + "These were often given to a family moving away, a teacher retiring, or a couple starting a household. " +
        N(8) + "A single signature quilt can show which families lived in a town, how their names were spelled, and who counted as part of the community in a given year.</p>" +
        "<p>" + N(9) + "Not every quilt is so easy to read. " +
        N(10) + "Many were used until they wore through, and the stories attached to them were never written down. " +
        N(11) + "That is one reason modern quilting circles often sew a fabric label to the back of each finished quilt, listing the makers, the date, and the occasion. " +
        N(12) + "A label takes ten minutes to sew; it may be the only record that survives.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of Quilts as Documents?",
          choices: [
            { letter: "A", text: "Quilts made by circles can serve as records of community history." },
            { letter: "B", text: "Quilting circles were mainly a way to save money during hard times." },
            { letter: "C", text: "Modern quilts are better made than quilts from earlier generations." },
            { letter: "D", text: "Historians prefer written letters to any other kind of record." }
          ],
          correct: "A"
        },
        {
          id: "mills",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why did some mills print patterns on their flour and feed sacks?",
          choices: [
            { letter: "A", text: "Patterned sacks were stronger and less likely to tear." },
            { letter: "B", text: "Quilting circles paid the mills to print the fabric." },
            { letter: "C", text: "The mills saw that women were reusing the sacks for quilts." },
            { letter: "D", text: "Plain sacks had been banned by the town's stores." }
          ],
          correct: "C"
        },
        {
          id: "labels",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's attitude toward the labels described in sentences 11 and 12 is best described as —",
          choices: [
            { letter: "A", text: "doubtful that anyone will ever read them" },
            { letter: "B", text: "appreciative of their lasting value" },
            { letter: "C", text: "annoyed by the time they take to sew" },
            { letter: "D", text: "uncertain about what they should include" }
          ],
          correct: "B"
        },
        {
          id: "examples",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of sentences 4 through 8?",
          choices: [
            { letter: "A", text: "a timeline of one circle's quilts from oldest to newest" },
            { letter: "B", text: "a comparison of quilting in cities and in farm towns" },
            { letter: "C", text: "a problem followed by a single proposed solution" },
            { letter: "D", text: "two kinds of examples of how quilts preserve history" }
          ],
          correct: "D"
        },
        {
          id: "noteasy",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 9, Not every quilt is so easy to read, serves mainly to —",
          choices: [
            { letter: "A", text: "introduce a limit to the idea that quilts are clear records" },
            { letter: "B", text: "suggest that signature quilts are hard to understand" },
            { letter: "C", text: "argue that historians should stop studying quilts" },
            { letter: "D", text: "explain why mills stopped printing patterned sacks" }
          ],
          correct: "A"
        },
        {
          id: "documents",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 1, the author calls quilts something closer to documents mainly to —",
          choices: [
            { letter: "A", text: "suggest that quilts should be stored in libraries" },
            { letter: "B", text: "explain how quilting circles kept written minutes" },
            { letter: "C", text: "introduce the claim that quilts record history" },
            { letter: "D", text: "show that most quilts have writing stitched on them" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 13. Informational · zoo keeper ───────────── */
    {
      id: "g11-ri-c92-giraffechute",
      family: "G11",
      title: "The Giraffe Who Holds Still",
      kind: "Informational · 11.RI",
      blurb: "How keepers use rewards so animals can take part in their own checkups.",
      level: 1,
      passage:
        "<p>" + N(1) + "At many modern zoos, a giraffe will walk into a narrow chute, lower its head, and hold still while a veterinarian draws blood from its neck. " +
        N(2) + "No one forces it; the giraffe has been trained, step by step, using a method called positive reinforcement. " +
        N(3) + "The idea is simple: when an animal does something the keeper asks for, it immediately receives a reward it values, such as a slice of sweet potato or a handful of leafy branches. " +
        N(4) + "Behaviors that earn rewards become more likely to happen again.</p>" +
        "<p>" + N(5) + "Keepers break a difficult task into small pieces. " +
        N(6) + "First the giraffe is rewarded for walking near the chute, then for stepping inside, and then for standing calmly while a keeper touches its neck. " +
        N(7) + "Many keepers use a whistle or a clicker to mark the exact moment the animal gets it right, so the animal knows which action earned the reward.</p>" +
        "<p>" + N(8) + "Training like this matters because medical care is stressful when it comes as a surprise. " +
        N(9) + "In the past, many routine procedures required animals to be sedated, which carries its own risks. " +
        N(10) + "Trained animals can take part in their own checkups: big cats present their paws for nail trims, seals open their mouths for dental exams, and elephants lift their feet for cleaning. " +
        N(11) + "Participation is always voluntary. " +
        N(12) + "If an animal walks away, the session simply ends, and the keeper tries again another day.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of The Giraffe Who Holds Still?",
          choices: [
            { letter: "A", text: "Giraffes are the easiest zoo animals to care for." },
            { letter: "B", text: "Reward-based training lets animals join calmly in their own care." },
            { letter: "C", text: "Veterinarians should sedate animals before every checkup." },
            { letter: "D", text: "Keepers prefer whistles to clickers when training animals." }
          ],
          correct: "B"
        },
        {
          id: "clicker",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "According to the passage, what is the purpose of the whistle or clicker described in sentence 7?",
          choices: [
            { letter: "A", text: "to mark the exact moment the animal does the right thing" },
            { letter: "B", text: "to call the animal in from the far end of its yard" },
            { letter: "C", text: "to warn the veterinarian that the animal is restless" },
            { letter: "D", text: "to signal the end of the training session for the day" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's main purpose in writing about the giraffe and the chute is to —",
          choices: [
            { letter: "A", text: "persuade readers to become zoo veterinarians" },
            { letter: "B", text: "criticize zoos that still rely on sedation" },
            { letter: "C", text: "explain how and why keepers train animals for care" },
            { letter: "D", text: "compare giraffes with other animals in the wild" }
          ],
          correct: "C"
        },
        {
          id: "steps",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 5 and 6?",
          choices: [
            { letter: "A", text: "as a comparison between two different animals" },
            { letter: "B", text: "as a problem followed by its cause" },
            { letter: "C", text: "as an argument followed by a counterclaim" },
            { letter: "D", text: "as a general rule followed by a sequence of steps" }
          ],
          correct: "D"
        },
        {
          id: "voluntary",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 11, the statement that participation is always voluntary mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the animals are never forced to take part" },
            { letter: "B", text: "keepers volunteer their time for training" },
            { letter: "C", text: "visitors may watch the training if they wish" },
            { letter: "D", text: "only some animals are able to be trained" }
          ],
          correct: "A"
        },
        {
          id: "examples",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence gives specific examples of animals taking part in their own checkups?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 14. Functional text · sign language ───────────── */
    {
      id: "g11-ri-c92-aslnights",
      family: "G11",
      title: "ASL Conversation Nights",
      kind: "Functional text · 11.RI",
      blurb: "A community center notice for a voice-off sign language practice series.",
      level: 1,
      passage:
        "<p><strong>Riverside Community Center: Beginning ASL Conversation Nights</strong><br>" +
        N(1) + "Join us on Tuesday evenings this fall to practice American Sign Language in a relaxed, voice-off setting. " +
        N(2) + "Sessions are led by members of the local Deaf community and are open to anyone age 14 or older.</p>" +
        "<p><strong>Schedule</strong><br>" +
        N(3) + "Sessions run from 6:30 to 8:00 p.m. on eight Tuesdays, beginning the second Tuesday in September. " +
        N(4) + "Doors open at 6:15; please arrive early, because the first ten minutes are used to form small groups.</p>" +
        "<p><strong>Before You Come</strong><br>" +
        N(5) + "No experience is required, but beginners should learn the fingerspelling alphabet before the first session. " +
        N(6) + "Free practice sheets are available at the front desk.</p>" +
        "<p><strong>Voice-Off Policy</strong><br>" +
        N(7) + "Once a session begins, participants are asked not to use their voices, even to whisper. " +
        N(8) + "This rule is not strict for its own sake; it helps everyone focus on visual communication and shows respect for the Deaf leaders. " +
        N(9) + "Gestures, notepads, and pointing are always welcome.</p>" +
        "<p><strong>Registration and Fees</strong><br>" +
        N(10) + "The full series costs $40, or $25 for students with a current school ID. " +
        N(11) + "Register online or at the front desk by September 2. " +
        N(12) + "Groups are capped at twelve people, and registration closes early if all spots are filled.</p>" +
        "<p><strong>Questions?</strong><br>" +
        N(13) + "Text the program office at the number listed on our website; staff respond within one business day.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the purpose of the Riverside Community Center notice?",
          choices: [
            { letter: "A", text: "to explain the history of the local Deaf community" },
            { letter: "B", text: "to recruit Deaf volunteers to lead new classes" },
            { letter: "C", text: "to announce new prices for community center events" },
            { letter: "D", text: "to describe an ASL practice series and how to join" }
          ],
          correct: "D"
        },
        {
          id: "before",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the notice, what should a beginner do before the first session?",
          choices: [
            { letter: "A", text: "buy a notepad from the front desk" },
            { letter: "B", text: "learn the fingerspelling alphabet" },
            { letter: "C", text: "text the program office for a group" },
            { letter: "D", text: "take a placement test online" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The Riverside notice is written mainly for an audience of —",
          choices: [
            { letter: "A", text: "teens and adults who may want to practice ASL" },
            { letter: "B", text: "Deaf leaders who already run the sessions" },
            { letter: "C", text: "staff members who manage the front desk" },
            { letter: "D", text: "young children who are learning to read" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Riverside notice mainly help a reader —",
          choices: [
            { letter: "A", text: "learn several basic signs before arriving" },
            { letter: "B", text: "compare this series with other classes" },
            { letter: "C", text: "find specific information quickly" },
            { letter: "D", text: "understand why the series was created" }
          ],
          correct: "C"
        },
        {
          id: "rule",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the Riverside notice, sentence 8 serves mainly to —",
          choices: [
            { letter: "A", text: "warn that participants who speak will be asked to leave" },
            { letter: "B", text: "explain the reasons behind the voice-off policy" },
            { letter: "C", text: "list the tools participants may use instead of voices" },
            { letter: "D", text: "describe how the small groups are formed each night" }
          ],
          correct: "B"
        },
        {
          id: "capped",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that a person might be unable to register even before September 2?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 15. Argument · wildfire lookout ───────────── */
    {
      id: "g11-ri-c92-baldknob",
      family: "G11",
      title: "Keep Eyes on the Ridge",
      kind: "Argument · 11.RI",
      blurb: "An editorial argues against replacing a staffed lookout with cameras alone.",
      level: 3,
      passage:
        "<p>" + N(1) + "This spring, the county forest district proposed closing the Bald Knob lookout tower and replacing its seasonal staff with a pair of remote cameras. " +
        N(2) + "The plan is presented as modernization, but it trades a proven safeguard for a promise.</p>" +
        "<p>" + N(3) + "Supporters point out that cameras never sleep and can be monitored from an office in town. " +
        N(4) + "That is true, and it is also beside the point. " +
        N(5) + "A camera is only as good as the person watching the screen, and the district's own budget shows that one dispatcher would be responsible for nine camera feeds during peak season, in addition to answering radio calls. " +
        N(6) + "The Bald Knob lookout, by contrast, has one job: to watch.</p>" +
        "<p>" + N(7) + "Last August, according to the district's incident summary, the tower's lookout reported a smoke column eleven minutes before the nearest camera system flagged it. " +
        N(8) + "Eleven minutes may sound small, but in dry grass and wind, a fire can grow from the size of a kitchen to the size of a football field in that time. " +
        N(9) + "The cost argument is also weaker than it appears. " +
        N(10) + "Staffing the tower for a season costs about the same as two years of camera maintenance and data fees.</p>" +
        "<p>" + N(11) + "None of this means cameras are useless; they would make excellent partners for the tower, covering valleys the lookout cannot see. " +
        N(12) + "The district should fund both, and the county board should reject any plan that removes human eyes from the ridge before the cameras have proven they can replace them.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the author's central claim about the Bald Knob tower?",
          choices: [
            { letter: "A", text: "Cameras should replace the tower as soon as possible." },
            { letter: "B", text: "The tower is too expensive to keep open every season." },
            { letter: "C", text: "The tower should stay staffed, with cameras added to help." },
            { letter: "D", text: "Dispatchers should be trained to work as lookouts." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which evidence does the author use to challenge the idea that cameras can watch as well as a staffed lookout?",
          choices: [
            { letter: "A", text: "Cameras can be monitored from an office in town." },
            { letter: "B", text: "Cameras can cover valleys the lookout cannot see." },
            { letter: "C", text: "The district proposed the change this spring." },
            { letter: "D", text: "The lookout reported a smoke eleven minutes sooner." }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which statement from the editorial is an opinion presented as though it were settled fact?",
          choices: [
            { letter: "A", text: "the plan trades a proven safeguard for a promise" },
            { letter: "B", text: "the district proposed closing the tower this spring" },
            { letter: "C", text: "one dispatcher would handle nine camera feeds" },
            { letter: "D", text: "the lookout reported the smoke last August" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 3 through 6 of the editorial?",
          choices: [
            { letter: "A", text: "by listing the history of the tower in time order" },
            { letter: "B", text: "by stating an opposing view, conceding it, then rebutting it" },
            { letter: "C", text: "by describing a cause and then several of its effects" },
            { letter: "D", text: "by comparing two towers in different counties" }
          ],
          correct: "B"
        },
        {
          id: "kitchen",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 8, comparing a fire's growth from a kitchen to a football field helps the reader understand that —",
          choices: [
            { letter: "A", text: "most wildfires begin inside people's homes" },
            { letter: "B", text: "cameras are placed too far from the ridge" },
            { letter: "C", text: "fires spread more slowly in dry grass" },
            { letter: "D", text: "a short delay can let a fire grow enormously" }
          ],
          correct: "D"
        },
        {
          id: "concede",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's concession about cameras in sentence 11 is included mainly to —",
          choices: [
            { letter: "A", text: "admit that the editorial's main claim is weak" },
            { letter: "B", text: "suggest that the tower should be closed later" },
            { letter: "C", text: "grant the cameras some value and offer a middle path" },
            { letter: "D", text: "explain how the cameras would be installed" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 16. Vocabulary · zoo keeper ───────────── */
    {
      id: "g11-rv-c92-nightrounds",
      family: "G11",
      title: "Night Rounds",
      kind: "Vocabulary · 11.RV",
      blurb: "A keeper's red flashlight, a restless enclosure, and a small mystery after closing.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most visitors never see the zoo after closing, when the paths empty and the <strong>nocturnal</strong> residents begin their real day. " +
        N(2) + "Keeper Anaya Brightwater walked the night rounds with a red flashlight, because red light lets people see without disturbing animals whose eyes are tuned to darkness. " +
        N(3) + "Her log was <strong>meticulous</strong>: every animal, every water dish, and every latch, recorded to the minute in small, careful print.</p>" +
        "<p>" + N(4) + "The aardvark was digging, and the owls were swiveling their heads toward sounds <strong>inaudible</strong> to her, sounds she could not hear no matter how still she stood. " +
        N(5) + "Only the bush babies seemed <strong>restive</strong> that night, leaping from branch to branch and chattering in short, uneasy bursts instead of settling down to eat. " +
        N(6) + "Anaya checked their enclosure twice and finally found the cause: a moth had gotten in and was beating against the glass. " +
        N(7) + "She removed it, and within minutes the bush babies were calm again, almost <strong>docile</strong>, taking mealworms from the feeding tray without their usual squabbling.</p>" +
        "<p>" + N(8) + "Near midnight she reached the porcupine, who greeted her, as always, by turning around and rattling his quills. " +
        N(9) + "She wrote \"normal\" in the log and smiled. " +
        N(10) + "By two in the morning her rounds were done, but she planned to <strong>revisit</strong> the bush babies before dawn, just to be sure the night's small mystery had truly been solved.</p>",
      claims: [
        {
          id: "inaudible",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word inaudible in sentence 4 begins with the prefix in-, as in invisible and incorrect. In all three words, the prefix in- signals —",
          choices: [
            { letter: "A", text: "inside" },
            { letter: "B", text: "very" },
            { letter: "C", text: "not" },
            { letter: "D", text: "again" }
          ],
          correct: "C"
        },
        {
          id: "revisit",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word revisit in sentence 10 begins with the prefix re-, as do rewrite and rebuild. The prefix re- adds the meaning of —",
          choices: [
            { letter: "A", text: "doing something again" },
            { letter: "B", text: "doing something early" },
            { letter: "C", text: "doing something badly" },
            { letter: "D", text: "doing something alone" }
          ],
          correct: "A"
        },
        {
          id: "nocturnal",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the idea that these animals begin their real day after closing helps show that nocturnal means —",
          choices: [
            { letter: "A", text: "kept indoors" },
            { letter: "B", text: "rarely seen" },
            { letter: "C", text: "easily frightened" },
            { letter: "D", text: "active at night" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the details that follow the colon show that meticulous means —",
          choices: [
            { letter: "A", text: "quickly written" },
            { letter: "B", text: "extremely careful and precise" },
            { letter: "C", text: "kept secret from others" },
            { letter: "D", text: "required by zoo rules" }
          ],
          correct: "B"
        },
        {
          id: "restive",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word restive most nearly means —",
          choices: [
            { letter: "A", text: "restless and uneasy" },
            { letter: "B", text: "sleepy and slow" },
            { letter: "C", text: "hungry and eager" },
            { letter: "D", text: "playful and loud" }
          ],
          correct: "A"
        },
        {
          id: "docile",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 7, the author calls the bush babies docile rather than tired. Compared with tired, docile suggests that the animals were —",
          choices: [
            { letter: "A", text: "sick and in need of care" },
            { letter: "B", text: "too worn out to move" },
            { letter: "C", text: "bored with their food" },
            { letter: "D", text: "calm and easy to handle" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 17. Vocabulary · wildfire lookout ───────────── */
    {
      id: "g11-rv-c92-cedardome",
      family: "G11",
      title: "The Shelf of Logbooks",
      kind: "Vocabulary · 11.RV",
      blurb: "A lookout reads the summers of everyone who watched from his tower before him.",
      level: 3,
      passage:
        "<p>" + N(1) + "When Farrukh Aliyev arrived at the Cedar Dome lookout in June, he found a shelf of logbooks left by every <strong>predecessor</strong> who had staffed the tower before him, the oldest bound in cracked green cloth. " +
        N(2) + "He had expected the job to be <strong>solitary</strong>, and it was: his nearest neighbor was a crew station fourteen miles away by dirt road. " +
        N(3) + "But the logbooks kept him company. " +
        N(4) + "Each one was a <strong>chronicle</strong> of a single summer, recording, day by day, the weather, the visitors, the lightning strikes, and the smokes.</p>" +
        "<p>" + N(5) + "Some entries were as dry as a train schedule; others wandered into description, like one long-ago lookout who wrote that the morning fog was so <strong>translucent</strong> that the valley seemed to show through a sheet of wax paper. " +
        N(6) + "Reading them, Farrukh began to notice a change so gradual that no single writer could have seen it, a change almost <strong>imperceptible</strong> from one year to the next. " +
        N(7) + "The first snow on the far peaks came a little later each decade, and the first smoke report came a little earlier. " +
        N(8) + "The shift seemed <strong>inexorable</strong>, as steady as a tide that would not be argued with.</p>" +
        "<p>" + N(9) + "In September, Farrukh added his own volume to the shelf. " +
        N(10) + "On the last page he wrote a note to whoever came next: read the old ones first, because the tower sees farther backward than it does forward.</p>",
      claims: [
        {
          id: "predecessor",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word predecessor in sentence 1 begins with the prefix pre-, as in preview and prehistoric. The prefix pre- signals —",
          choices: [
            { letter: "A", text: "after" },
            { letter: "B", text: "before" },
            { letter: "C", text: "against" },
            { letter: "D", text: "beside" }
          ],
          correct: "B"
        },
        {
          id: "chronicle",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word chronicle in sentence 4 comes from a Greek root meaning time, as in chronological. This root helps explain why a chronicle is —",
          choices: [
            { letter: "A", text: "a map of a region drawn to scale" },
            { letter: "B", text: "a list of rules for doing a job" },
            { letter: "C", text: "a letter written to a stranger" },
            { letter: "D", text: "a record of events in time order" }
          ],
          correct: "D"
        },
        {
          id: "solitary",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the detail about a neighbor fourteen miles away helps show that solitary means —",
          choices: [
            { letter: "A", text: "alone and far from others" },
            { letter: "B", text: "dangerous and difficult" },
            { letter: "C", text: "quiet and peaceful" },
            { letter: "D", text: "boring and repetitive" }
          ],
          correct: "A"
        },
        {
          id: "translucent",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the comparison to a sheet of wax paper helps show that translucent means —",
          choices: [
            { letter: "A", text: "thick enough to hide everything" },
            { letter: "B", text: "cold and damp to the touch" },
            { letter: "C", text: "letting light through, but not clearly" },
            { letter: "D", text: "moving quickly across the land" }
          ],
          correct: "C"
        },
        {
          id: "imperceptible",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word imperceptible most nearly means —",
          choices: [
            { letter: "A", text: "very sudden" },
            { letter: "B", text: "too slight to notice" },
            { letter: "C", text: "easily explained" },
            { letter: "D", text: "widely reported" }
          ],
          correct: "B"
        },
        {
          id: "inexorable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word inexorable most nearly means —",
          choices: [
            { letter: "A", text: "impossible to stop" },
            { letter: "B", text: "difficult to measure" },
            { letter: "C", text: "likely to reverse" },
            { letter: "D", text: "pleasant to watch" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 18. Vocabulary · quilting circle ───────────── */
    {
      id: "g11-rv-c92-wednesdaycircle",
      family: "G11",
      title: "The Wednesday Circle",
      kind: "Vocabulary · 11.RV",
      blurb: "Eight quilters, four hundred diamonds, and a quilt meant to outlive them all.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every Wednesday, eight quilters <strong>collaborate</strong> on a single quilt at the Harbor Street community hall, each one working on a different corner of the same frame. " +
        N(2) + "The current project is an <strong>intricate</strong> star pattern with more than four hundred small diamonds, each cut and pinned by hand. " +
        N(3) + "Much of the fabric is <strong>salvaged</strong>; the circle rescues good cloth from worn-out clothes, old curtains, and tablecloths that would otherwise be thrown away. " +
        N(4) + "The newest member, a retired bus driver named Tomás, admitted on his first day that he could barely sew on a button. " +
        N(5) + "By spring, the others trusted him with the border.</p>" +
        "<p>" + N(6) + "The group's leader, Mrs. Yoon-hee Park, is <strong>frugal</strong> with thread as well, winding leftover lengths onto a cardboard card so that nothing is wasted. " +
        N(7) + "When a seam begins to come apart, she shows newer members how to catch the loose threads and stitch them down before the hole grows. " +
        N(8) + "The finished quilt will be raffled to raise money for the hall's new roof, but Mrs. Park hopes the winner treats it as an <strong>heirloom</strong>, something to be passed down rather than packed away. " +
        N(9) + "\"A quilt should outlive all of us,\" she says. " +
        N(10) + "\"That's the whole point of making one together.\"</p>",
      claims: [
        {
          id: "collaborate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word collaborate in sentence 1 begins with the prefix co-, as in cooperate and coauthor. The prefix co- signals —",
          choices: [
            { letter: "A", text: "together" },
            { letter: "B", text: "against" },
            { letter: "C", text: "before" },
            { letter: "D", text: "without" }
          ],
          correct: "A"
        },
        {
          id: "outlive",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word outlive in sentence 9 begins with out-, as in outlast and outgrow. In these words, out- signals —",
          choices: [
            { letter: "A", text: "moving outside a building" },
            { letter: "B", text: "leaving something unfinished" },
            { letter: "C", text: "going beyond or lasting longer" },
            { letter: "D", text: "making something smaller" }
          ],
          correct: "C"
        },
        {
          id: "salvaged",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the explanation after the semicolon shows that salvaged means —",
          choices: [
            { letter: "A", text: "bought new at a fabric store" },
            { letter: "B", text: "rescued from things being thrown out" },
            { letter: "C", text: "dyed to match a single color" },
            { letter: "D", text: "borrowed from another circle" }
          ],
          correct: "B"
        },
        {
          id: "heirloom",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the phrase something to be passed down helps show that an heirloom is —",
          choices: [
            { letter: "A", text: "a prize won in a raffle" },
            { letter: "B", text: "an item made to be sold" },
            { letter: "C", text: "a gift for a new home" },
            { letter: "D", text: "a treasure kept through generations" }
          ],
          correct: "D"
        },
        {
          id: "intricate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word intricate most nearly means —",
          choices: [
            { letter: "A", text: "brightly colored" },
            { letter: "B", text: "old and faded" },
            { letter: "C", text: "simple and quick" },
            { letter: "D", text: "detailed and complex" }
          ],
          correct: "D"
        },
        {
          id: "frugal",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author describes Mrs. Park as frugal rather than stingy. Compared with stingy, frugal suggests that she —",
          choices: [
            { letter: "A", text: "refuses to share thread with others" },
            { letter: "B", text: "cannot afford to buy any supplies" },
            { letter: "C", text: "is careful with supplies in a sensible way" },
            { letter: "D", text: "cares more about money than about quilts" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 19. Paired texts · zoo keeper ───────────── */
    {
      id: "g11-dsr-c92-redpanda",
      family: "G11",
      title: "Watching the Box",
      kind: "Paired texts · 11.DSR",
      blurb: "A keeper's notebook and a zoo news release report the same red panda birth.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Keeper's Notebook</strong></p>" +
        "<p>" + N(1) + "For three weeks after the cub was born, I mostly watched a wooden box. " +
        N(2) + "Mei, our red panda, had chosen the nest box at the back of the yard, and our rule was simple: no one goes near it unless something goes wrong. " +
        N(3) + "So I watched the camera feed and kept a tally of every time Mei left the box and every time she went back. " +
        N(4) + "Long absences can mean a mother has lost interest; short, frequent trips mean she is eating quickly and hurrying home. " +
        N(5) + "Mei's trips were short. " +
        N(6) + "On day nineteen, I heard a thin, squeaking whistle through the monitor speaker, and I wrote it in the log with three exclamation points, which is not regulation. " +
        N(7) + "The cub's first checkup is next week. " +
        N(8) + "Until then, I'm still watching the box.</p>" +
        "<p><strong>Text 2 — Hillcrest Zoo Announces Red Panda Birth</strong></p>" +
        "<p>" + N(9) + "Hillcrest Zoo is pleased to announce the birth of a red panda cub to eight-year-old Mei on June 3. " +
        N(10) + "The cub is the first born at Hillcrest in eleven years. " +
        N(11) + "Red pandas are listed as endangered, and the birth is part of a cooperative breeding program among accredited zoos that manages the population to keep it genetically healthy. " +
        N(12) + "The cub will remain in its nest box with Mei for several more weeks, as is typical for the species. " +
        N(13) + "Keepers are monitoring mother and cub by remote camera to avoid disturbing them, and early signs indicate the cub is nursing well. " +
        N(14) + "The red panda yard will remain open, but the nest box is not visible to guests. " +
        N(15) + "The public will be invited to help name the cub later this summer.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about the red panda cub is supported by both texts?",
          choices: [
            { letter: "A", text: "Keepers watch by camera so that mother and cub are not disturbed." },
            { letter: "B", text: "The cub was heard whistling for the first time on day nineteen." },
            { letter: "C", text: "The public will help choose a name for the cub this summer." },
            { letter: "D", text: "The cub is the first red panda born at the zoo in eleven years." }
          ],
          correct: "A"
        },
        {
          id: "beyond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 2 shows why the birth matters beyond Hillcrest, an idea Text 1 never mentions?",
          choices: [
            { letter: "A", text: "The red panda yard will remain open to guests." },
            { letter: "B", text: "The cub will stay in its nest box for several weeks." },
            { letter: "C", text: "Early signs suggest the cub is nursing well." },
            { letter: "D", text: "The birth is part of a breeding program for an endangered species." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the zoo's news release, the keeper's notebook has a tone that is more —",
          choices: [
            { letter: "A", text: "formal and official" },
            { letter: "B", text: "personal and suspenseful" },
            { letter: "C", text: "critical and impatient" },
            { letter: "D", text: "scientific and detached" }
          ],
          correct: "B"
        },
        {
          id: "method",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Text 2 says only that early signs are good. Select TWO sentences from Text 1 that show how the keeper judged whether Mei was caring for her cub.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "shorttrips",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to Text 1, what did Mei's short, frequent trips out of the box suggest?",
          choices: [
            { letter: "A", text: "She was unhappy with the nest box she had chosen." },
            { letter: "B", text: "She was searching the yard for a better place to hide." },
            { letter: "C", text: "She was eating quickly and hurrying back to the cub." },
            { letter: "D", text: "She was ready for the cub's first checkup with the vet." }
          ],
          correct: "C"
        },
        {
          id: "cooperative",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 11, the word cooperative most nearly means —",
          choices: [
            { letter: "A", text: "required by state law" },
            { letter: "B", text: "paid for by zoo visitors" },
            { letter: "C", text: "kept private from the public" },
            { letter: "D", text: "done by groups working together" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 20. Paired texts · sign language ───────────── */
    {
      id: "g11-dsr-c92-lunchtable",
      family: "G11",
      title: "Tap Lightly",
      kind: "Paired texts · 11.DSR",
      blurb: "A hearing student's lunch-table lessons, set beside a short guide to Deaf etiquette.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Lunch Table</strong></p>" +
        "<p>" + N(1) + "The first week Kalani sat at our lunch table, I called his name three times before I remembered that calling was the problem. " +
        N(2) + "He had transferred from a school for the Deaf, and he read lips only when people faced him, which, in a cafeteria, almost nobody did. " +
        N(3) + "I reached over and tapped his shoulder hard, as if warning him about a bee. " +
        N(4) + "He jumped, then laughed, and signed something I didn't understand. " +
        N(5) + "Later our ASL teacher explained the sign: gentle. " +
        N(6) + "So I learned. " +
        N(7) + "I learned to tap lightly, to wave at the edge of his vision, and to flick the study-room lights only when it mattered. " +
        N(8) + "I learned that looking away while he signed was like hanging up a phone mid-sentence. " +
        N(9) + "By spring, Kalani said I had \"good manners for a hearing person,\" which I chose to take as the highest compliment available.</p>" +
        "<p><strong>Text 2 — Getting Attention in Deaf Spaces</strong></p>" +
        "<p>" + N(10) + "In Deaf communities, getting someone's attention depends on sight and touch rather than sound. " +
        N(11) + "A light tap on the shoulder or upper arm is generally acceptable, but tapping the head or face is not. " +
        N(12) + "Waving within a person's line of sight works well across a room, and in larger groups, someone may briefly flash the lights to signal an announcement. " +
        N(13) + "Once a conversation begins, eye contact matters more than it does in many hearing settings. " +
        N(14) + "Looking away while someone is signing can be taken as a sign that you have stopped listening. " +
        N(15) + "These customs are not rigid rules, and they vary among people and places. " +
        N(16) + "Still, newcomers who learn them show respect for a culture in which the eyes do much of the work the ears do elsewhere.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about getting attention is central to both Lunch Table and the guide?",
          choices: [
            { letter: "A", text: "Deaf students prefer to sit with other Deaf students at lunch." },
            { letter: "B", text: "Flashing the lights is the most polite way to start a talk." },
            { letter: "C", text: "Respectful attention in Deaf settings relies on sight and light touch." },
            { letter: "D", text: "Hearing people should not try to learn Deaf customs on their own." }
          ],
          correct: "C"
        },
        {
          id: "phone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 1 best illustrates the point made in sentence 14 of Text 2?",
          choices: [
            { letter: "A", text: "the comparison of looking away to hanging up a phone" },
            { letter: "B", text: "the narrator calling Kalani's name three times" },
            { letter: "C", text: "the teacher explaining the sign for gentle" },
            { letter: "D", text: "Kalani's remark about good manners in the spring" }
          ],
          correct: "A"
        },
        {
          id: "adds",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 2 adds which point that the narrator of Text 1 never mentions?",
          choices: [
            { letter: "A", text: "A hard tap on the shoulder can startle a person." },
            { letter: "B", text: "Lip reading works only when a speaker faces the reader." },
            { letter: "C", text: "Waving at the edge of someone's vision gets attention." },
            { letter: "D", text: "These customs vary among different people and places." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the two texts differ in the way they present Deaf etiquette?",
          choices: [
            { letter: "A", text: "Text 1 lists strict rules, while Text 2 tells a personal story." },
            { letter: "B", text: "Text 1 shows it learned through mistakes, while Text 2 gives general guidance." },
            { letter: "C", text: "Text 1 criticizes the customs, while Text 2 defends them." },
            { letter: "D", text: "Text 1 is written for teachers, while Text 2 is written for students." }
          ],
          correct: "B"
        },
        {
          id: "practices",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that describe the practices the narrator learns in sentence 7 of Text 1.",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "compliment",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "The narrator's reaction to Kalani's remark in sentence 9 reveals that the narrator —",
          choices: [
            { letter: "A", text: "is offended at being called a hearing person" },
            { letter: "B", text: "doubts that Kalani meant the remark sincerely" },
            { letter: "C", text: "takes good-humored pride in the progress made" },
            { letter: "D", text: "wants to stop learning ASL now that spring has come" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 21. Paired texts · quilting circle ───────────── */
    {
      id: "g11-dsr-c92-redthread",
      family: "G11",
      title: "The Red Thread",
      kind: "Paired texts · 11.DSR",
      blurb: "A museum label and a daughter's memory describe the same signature quilt.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Museum Label: The Harrow Crossing Signature Quilt</strong></p>" +
        "<p>" + N(1) + "This cotton quilt was made in 1952 by the members of the Harrow Crossing Quilting Circle, a group of farm women in a small prairie town. " +
        N(2) + "It contains forty-two blocks, each embroidered with the name of a family in the community. " +
        N(3) + "The quilt was presented to the town's departing schoolteacher, Miss Adelaide Fenn, when she retired after thirty-one years. " +
        N(4) + "Its pattern, a simple square-in-a-square, was common at the time and allowed each block to be stitched separately and then joined. " +
        N(5) + "The red thread used for the names has faded unevenly, suggesting that the quilt hung for many years near a sunny window. " +
        N(6) + "The quilt was donated to the museum by Miss Fenn's niece.</p>" +
        "<p><strong>Text 2 — What the Label Doesn't Say</strong></p>" +
        "<p>" + N(7) + "My mother stitched block nineteen, the one with our family name, at our kitchen table, because she could not get to the circle that week. " +
        N(8) + "She told me the story every time we visited the museum. " +
        N(9) + "Miss Fenn had taught three of the women who made that quilt, and every one of them had been a little afraid of her. " +
        N(10) + "They chose red thread because Miss Fenn graded in red ink, and they thought she would find it funny. " +
        N(11) + "She did; my mother said she laughed until she had to sit down. " +
        N(12) + "The museum label calls the pattern simple, and it is. " +
        N(13) + "But simple was the point: it meant that even women with no spare time, like my mother, could finish their square at home and still be part of the gift.</p>",
      claims: [
        {
          id: "fact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the Harrow Crossing quilt appears in both texts?",
          choices: [
            { letter: "A", text: "Miss Fenn's niece donated it to the museum." },
            { letter: "B", text: "The names on it were stitched in red thread." },
            { letter: "C", text: "Miss Fenn graded her students' work in red ink." },
            { letter: "D", text: "Block nineteen was sewn at a kitchen table." }
          ],
          correct: "B"
        },
        {
          id: "together",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Reading both texts together shows that the quilt's simple pattern —",
          choices: [
            { letter: "A", text: "was chosen because the circle lacked skilled quilters" },
            { letter: "B", text: "caused the red thread to fade near the window" },
            { letter: "C", text: "was unusual for quilts made at that time" },
            { letter: "D", text: "let busy members stitch their blocks at home" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the museum label, the daughter's account of the quilt is more —",
          choices: [
            { letter: "A", text: "personal and affectionate" },
            { letter: "B", text: "formal and factual" },
            { letter: "C", text: "critical and angry" },
            { letter: "D", text: "technical and detailed" }
          ],
          correct: "A"
        },
        {
          id: "thread",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The two texts explain the red thread differently. The museum label treats the thread mainly as —",
          choices: [
            { letter: "A", text: "a private joke shared by the quilters" },
            { letter: "B", text: "a sign of the circle's wealth" },
            { letter: "C", text: "physical evidence of where the quilt hung" },
            { letter: "D", text: "a mistake the makers later regretted" }
          ],
          correct: "C"
        },
        {
          id: "story",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that add a human story to a fact stated in Text 1.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "departing",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the phrase when she retired after thirty-one years helps show that departing means —",
          choices: [
            { letter: "A", text: "leaving her position" },
            { letter: "B", text: "arriving for the first time" },
            { letter: "C", text: "traveling for a short visit" },
            { letter: "D", text: "teaching an extra class" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
