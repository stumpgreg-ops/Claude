/* SOL Labyrinth — v5.15 expansion: Grade 9 medium-tier packs (learning a new language, a family farm,
 * street murals, a hospital volunteer program). Original text only. Loaded after content.js and pushes
 * into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c40-goldstars",
      family: "G9",
      title: "Forty-One Gold Stars",
      kind: "Literary · 9.RL",
      blurb: "Daniel has practiced one Portuguese sentence for three weeks. It comes out about a chicken.",
      level: 1,
      passage:
        "<p>" + N(1) + "Daniel Osei had practiced the sentence for three weeks, whispering it to the bathroom mirror, to the bus window and once, by accident, to the lunch lady. " +
        N(2) + "<em>Obrigado pelo jantar</em>: thank you for dinner. " +
        N(3) + "The language app on his phone had awarded him a gold star every time he said it correctly, and he had forty-one gold stars. " +
        N(4) + "Now he stood in the Ferreiras' narrow kitchen, which smelled of garlic and toasted bread, and Rafael's grandmother was studying him over the top of her glasses. " +
        N(5) + "Dona Celina had arrived from Brazil in March, and she spoke no English at all. " +
        N(6) + "Rafael was no help; he was busy at the sink, pretending not to watch. " +
        N(7) + "Daniel opened his mouth, and the sentence he had polished for three weeks came out as something about a chicken. " +
        N(8) + "For one long second the kitchen was silent. " +
        N(9) + "Then Dona Celina laughed, a big laugh that shook the spoon in her hand, and she pointed at the stove, where a chicken was in fact simmering in a pot. " +
        N(10) + "She said the correct words slowly, tapping the table on each syllable like a drummer keeping time. " +
        N(11) + "Daniel repeated them, and she nodded and made him say them twice more. " +
        N(12) + "By the time dessert arrived, she had taught him the words for spoon, salt and too much, and he had taught her the word awesome, which she used for everything, including the dishwater. " +
        N(13) + "On the bus home, Daniel opened the app and scrolled through his forty-one gold stars. " +
        N(14) + "Not one of them, he decided, was worth as much as that laugh." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by Daniel's dinner with Dona Celina?",
          choices: [
            { letter: "A", text: "Careful practice guarantees a flawless performance." },
            { letter: "B", text: "A mistake met with good humor can build a real connection." },
            { letter: "C", text: "Learning from an app works better than learning from a person." },
            { letter: "D", text: "Guests should stay quiet until they speak a language well." }
          ],
          correct: "B"
        },
        {
          id: "character",
          sol: "9.RL.1.C",
          stem: "Which detail best shows that Daniel takes learning Portuguese seriously?",
          choices: [
            { letter: "A", text: "He whispers the sentence to the mirror and the bus window for weeks." },
            { letter: "B", text: "He stands in the narrow kitchen while Rafael stays at the sink." },
            { letter: "C", text: "He teaches Dona Celina to say the English word awesome." },
            { letter: "D", text: "He rides the bus home after dessert and opens his phone." }
          ],
          correct: "A"
        },
        {
          id: "drummer",
          sol: "9.RL.2.A",
          stem: "In sentence 10, comparing Dona Celina to a drummer keeping time mainly shows that she —",
          choices: [
            { letter: "A", text: "is impatient with Daniel's mistake" },
            { letter: "B", text: "teaches the words with a steady, careful rhythm" },
            { letter: "C", text: "wants to change the subject to music" },
            { letter: "D", text: "is louder than anyone else at the table" }
          ],
          correct: "B"
        },
        {
          id: "kitchen",
          sol: "9.RL.3.A",
          stem: "The details in sentence 4 about the narrow kitchen and the grandmother studying Daniel over her glasses mainly emphasize that Daniel —",
          choices: [
            { letter: "A", text: "feels watched and under pressure" },
            { letter: "B", text: "has never eaten Brazilian food" },
            { letter: "C", text: "dislikes the smell of garlic" },
            { letter: "D", text: "has arrived late for dinner" }
          ],
          correct: "A"
        },
        {
          id: "rafael",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Rafael pretends not to watch in sentence 6 because he —",
          choices: [
            { letter: "A", text: "is annoyed that Daniel came to dinner" },
            { letter: "B", text: "cannot understand his grandmother's Portuguese" },
            { letter: "C", text: "is curious but does not want to add to Daniel's nerves" },
            { letter: "D", text: "would rather help his grandmother with the cooking" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentences 13 and 14, as Daniel scrolls through his gold stars, is best described as —",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "anxious" },
            { letter: "C", text: "mocking" },
            { letter: "D", text: "reflective" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c40-calving",
      family: "G9",
      title: "Holding Up the Sun",
      kind: "Literary · 9.RL",
      blurb: "Two in the morning, sleet on the tin roof, and a first-time heifer in trouble.",
      level: 2,
      passage:
        "<p>" + N(1) + "The heifer the Herreras called Biscuit started calving at two in the morning, during the worst sleet of the spring. " +
        N(2) + "Lucía heard her father's boots on the stairs before she heard his knock, and by the time he said her name she was already pulling on a second pair of socks. " +
        N(3) + "Outside, the yard light swung on its wire and threw shadows across the mud like spilled ink. " +
        N(4) + "In the barn, Biscuit lay on her side in the straw, breathing hard, and Papá knelt beside her with his sleeves pushed past the elbow. " +
        N(5) + "\"First calf,\" he said. \"She is scared. So we stay calm for her.\" " +
        N(6) + "Lucía had watched cows give birth before, always from the gate, always with her hands in her pockets. " +
        N(7) + "Tonight Papá handed her the towels and a heavy flashlight and told her to keep the beam steady, because his own hands would be busy. " +
        N(8) + "The calf was turned the wrong way, and for twenty minutes the only sounds were the sleet on the tin roof, Biscuit's groans and Papá's low voice saying easy, easy, easy. " +
        N(9) + "Lucía's arm ached from holding the light, but she did not let it drop, not even when the beam began to tremble. " +
        N(10) + "At last the calf slid out in a rush, wet and dark and perfectly still. " +
        N(11) + "Papá rubbed it hard with a towel, and Lucía held her breath until it sneezed. " +
        N(12) + "Biscuit lifted her head and began to lick it clean. " +
        N(13) + "Papá sat back in the straw, and for the first time all night he laughed. " +
        N(14) + "\"You can name this one,\" he said, \"since you were the one holding up the sun.\"" +
        "</p>",
      claims: [
        {
          id: "socks",
          sol: "9.RL.1.B",
          stem: "Sentence 2 suggests that Lucía —",
          choices: [
            { letter: "A", text: "was annoyed at being woken so early" },
            { letter: "B", text: "had been expecting a night like this" },
            { letter: "C", text: "did not know where her father was going" },
            { letter: "D", text: "was afraid to go out into the sleet" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Lucía changes over the course of the night?",
          choices: [
            { letter: "A", text: "She goes from fearing cows to wanting to raise her own herd." },
            { letter: "B", text: "She goes from trusting her father to doubting his judgment." },
            { letter: "C", text: "She goes from bored helper to the one who names every calf." },
            { letter: "D", text: "She goes from watching at the gate to taking a real part in the work." }
          ],
          correct: "D"
        },
        {
          id: "ink",
          sol: "9.RL.2.B",
          stem: "In sentence 3, the image of shadows thrown across the mud like spilled ink helps create a mood that is —",
          choices: [
            { letter: "A", text: "dark and unsettled" },
            { letter: "B", text: "cheerful and lively" },
            { letter: "C", text: "calm and sleepy" },
            { letter: "D", text: "silly and playful" }
          ],
          correct: "A"
        },
        {
          id: "sleet",
          sol: "9.RL.3.A",
          stem: "How does the sleet mentioned in sentences 1 and 8 shape the events of the story?",
          choices: [
            { letter: "A", text: "It forces the family to move the herd to another barn." },
            { letter: "B", text: "It knocks out the yard light, so Lucía must hold a flashlight." },
            { letter: "C", text: "It adds to the tension of a night that is already difficult." },
            { letter: "D", text: "It keeps Papá from reaching the barn in time to help." }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story follows Lucía's thoughts and not Papá's, the reader —",
          choices: [
            { letter: "A", text: "learns how many calves Papá has delivered before" },
            { letter: "B", text: "feels her aching arm and her held breath, but must guess at his worry" },
            { letter: "C", text: "understands exactly why Papá chose Lucía over anyone else" },
            { letter: "D", text: "knows what the heifer is feeling during the delivery" }
          ],
          correct: "B"
        },
        {
          id: "sun",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by Papá's final words in sentence 14?",
          choices: [
            { letter: "A", text: "Farm work is too dangerous for young people." },
            { letter: "B", text: "Animals understand more than people expect." },
            { letter: "C", text: "A steady, simple job can be essential to a hard task." },
            { letter: "D", text: "Parents should let children make their own choices." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c40-primer",
      family: "G9",
      title: "Gray Primer",
      kind: "Literary · 9.RL",
      blurb: "A silver tag across a mural's painted grandmother, and a gallon of primer that stays sealed.",
      level: 3,
      passage:
        "<p>" + N(1) + "The tag appeared on a Tuesday night, a silver scrawl the length of a car, sprayed straight across the face of the grandmother I had spent six weekends painting. " +
        N(2) + "I stood on the sidewalk outside the laundromat with my tea going cold, and the wall stared back at me like a stranger who had borrowed my handwriting. " +
        N(3) + "Mr. Haddad, who owned the laundromat and had lent our crew the wall, came out wiping his hands on a towel. " +
        N(4) + "\"Well,\" he said. \"Somebody noticed it.\" " +
        N(5) + "\"That's not funny,\" I said. " +
        N(6) + "\"I didn't say it was funny. I said they noticed.\" " +
        N(7) + "Ms. Ramírez, the muralist who led our summer crew, arrived at nine with a ladder and a gallon of gray primer. " +
        N(8) + "She did not sigh or complain; she walked the length of the wall, reading the tag the way a doctor reads an X-ray. " +
        N(9) + "\"We can cover it in an hour,\" she said. \"Or we can find out who did it and why they picked this spot.\" " +
        N(10) + "I wanted the hour. " +
        N(11) + "I wanted my grandmother back, her flour-white hands and the steam rising from her bowl, exactly as I had made her. " +
        N(12) + "But by noon two boys from the next block had wandered over, and one of them, without quite looking at me, said that the woman in the painting looked like his grandmother. " +
        N(13) + "He said it the way people say things they have been holding for a long time. " +
        N(14) + "The primer stayed sealed that afternoon. " +
        N(15) + "Instead, Ms. Ramírez handed him a brush and asked what color his grandmother's apron had been." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the ending of \"Gray Primer\" best support?",
          choices: [
            { letter: "A", text: "Damaged work should always be repaired as fast as possible." },
            { letter: "B", text: "Young artists should not share their work with strangers." },
            { letter: "C", text: "Public art can open a conversation instead of only being guarded." },
            { letter: "D", text: "Adults usually understand art better than teenagers do." }
          ],
          correct: "C"
        },
        {
          id: "xray",
          sol: "9.RL.2.A",
          stem: "In sentence 8, comparing Ms. Ramírez to a doctor reading an X-ray mainly shows that she —",
          choices: [
            { letter: "A", text: "studies the damage calmly before deciding what to do" },
            { letter: "B", text: "believes the wall is too damaged to save" },
            { letter: "C", text: "once worked in a hospital before painting murals" },
            { letter: "D", text: "is secretly upset but trying to hide her anger" }
          ],
          correct: "A"
        },
        {
          id: "stranger",
          sol: "9.RL.2.B",
          stem: "In sentence 2, the narrator says the wall stared back like a stranger who had borrowed my handwriting. This image suggests that she feels —",
          choices: [
            { letter: "A", text: "proud that her style is easy to recognize" },
            { letter: "B", text: "confused about which wall she painted" },
            { letter: "C", text: "curious about the person who made the tag" },
            { letter: "D", text: "that her own work has been made unfamiliar to her" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentences 10 and 11, in which the narrator says I wanted the hour, is best described as —",
          choices: [
            { letter: "A", text: "amused and relaxed" },
            { letter: "B", text: "stubborn and longing" },
            { letter: "C", text: "furious and threatening" },
            { letter: "D", text: "bored and distant" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because \"Gray Primer\" is told in the first person by the young painter, the reader —",
          choices: [
            { letter: "A", text: "shares her hurt and her urge to cover the tag right away" },
            { letter: "B", text: "learns exactly who sprayed the tag and why" },
            { letter: "C", text: "knows what Ms. Ramírez is thinking as she walks the wall" },
            { letter: "D", text: "sees the mural through Mr. Haddad's eyes" }
          ],
          correct: "A"
        },
        {
          id: "haddad",
          sol: "9.RL.1.D",
          stem: "Mr. Haddad's dialogue in sentences 4 and 6 mainly serves to —",
          choices: [
            { letter: "A", text: "show that he wants the mural removed from his wall" },
            { letter: "B", text: "make fun of the narrator for caring so much" },
            { letter: "C", text: "hint that the tag might be a kind of message, not only damage" },
            { letter: "D", text: "explain how long it will take to repaint the wall" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c40-bookcart",
      family: "G9",
      title: "Room 412",
      kind: "Literary · 9.RL",
      blurb: "A new hospital volunteer has one rule: knock, smile, offer, leave. Then he meets a crossword.",
      level: 2,
      passage:
        "<p>" + N(1) + "On his first Saturday as a hospital volunteer, Jonah Whitfield was given a squeaky metal cart, a stack of paperbacks and a single instruction: knock, smile, offer, leave. " +
        N(2) + "The volunteer coordinator, a brisk woman named Ms. Okonkwo, explained that the rule protected patients who needed their rest. " +
        N(3) + "By the fourth floor, Jonah had the routine down, and the squeak of the front wheel had become a kind of announcement that he was coming. " +
        N(4) + "The woman in room 412, Mrs. Lindqvist, waved away every book he held up. " +
        N(5) + "\"Mysteries put me to sleep, and romances keep me awake,\" she said. \"What else have you got?\" " +
        N(6) + "\"Just a newspaper,\" Jonah said, \"but somebody already did half the crossword.\" " +
        N(7) + "Her eyes brightened. \"Then we will do the other half. My glasses are at home, and these letters are the size of ants.\" " +
        N(8) + "Jonah glanced at the clock in the hall: knock, smile, offer, leave. " +
        N(9) + "He thought about the ten rooms still waiting down the corridor. " +
        N(10) + "Then he pulled the visitor's chair closer to the bed and read the first clue out loud, a seven-letter word for patient. " +
        N(11) + "\"Stoical,\" Mrs. Lindqvist said at once, and when he counted the boxes, she was right. " +
        N(12) + "They finished eleven clues before a nurse came in to check her blood pressure. " +
        N(13) + "Later, Jonah apologized to Ms. Okonkwo for falling behind schedule and waited for the lecture. " +
        N(14) + "Instead, she wrote something on her clipboard and said, \"Next Saturday, start with 412.\"" +
        "</p>",
      claims: [
        {
          id: "decision",
          sol: "9.RL.1.C",
          stem: "Which choice best describes Jonah's decision in sentence 10?",
          choices: [
            { letter: "A", text: "He tries to finish his rounds early by skipping rooms." },
            { letter: "B", text: "He follows Ms. Okonkwo's rule exactly as she gave it." },
            { letter: "C", text: "He sets aside the routine to meet a patient's real need." },
            { letter: "D", text: "He looks for a nurse to help him with a difficult patient." }
          ],
          correct: "C"
        },
        {
          id: "mysteries",
          sol: "9.RL.1.D",
          stem: "Mrs. Lindqvist's dialogue in sentence 5 mainly reveals that she —",
          choices: [
            { letter: "A", text: "has a dry sense of humor and wants more than the usual offer" },
            { letter: "B", text: "is too tired to talk with a visitor for very long" },
            { letter: "C", text: "wants Jonah to leave so that she can sleep" },
            { letter: "D", text: "has already read every book on the cart" }
          ],
          correct: "A"
        },
        {
          id: "stoical",
          sol: "9.RL.2.C",
          stem: "Based on the crossword clue in sentence 10, the word stoical in sentence 11 most nearly means —",
          choices: [
            { letter: "A", text: "quick to answer questions" },
            { letter: "B", text: "unable to see clearly" },
            { letter: "C", text: "eager to meet new people" },
            { letter: "D", text: "enduring hardship without complaint" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "9.RL.3.A",
          stem: "The phrase knock, smile, offer, leave, repeated in sentences 1 and 8, mainly helps the plot by —",
          choices: [
            { letter: "A", text: "showing how quickly Jonah learns the names of patients" },
            { letter: "B", text: "setting up a conflict between the rule and what Jonah sees" },
            { letter: "C", text: "proving that Ms. Okonkwo does not trust new volunteers" },
            { letter: "D", text: "explaining why the cart's front wheel squeaks so loudly" }
          ],
          correct: "B"
        },
        {
          id: "clipboard",
          sol: "9.RL.1.B",
          stem: "From sentence 14, readers can best infer that Ms. Okonkwo —",
          choices: [
            { letter: "A", text: "plans to give room 412 to a different volunteer" },
            { letter: "B", text: "is writing Jonah up for breaking the rule" },
            { letter: "C", text: "has forgotten what the rule was meant to do" },
            { letter: "D", text: "approves of the way Jonah handled room 412" }
          ],
          correct: "D"
        },
        {
          id: "ants",
          sol: "9.RL.2.A",
          stem: "In sentence 7, Mrs. Lindqvist says the letters are the size of ants mainly to show that —",
          choices: [
            { letter: "A", text: "the print is too small for her to read without glasses" },
            { letter: "B", text: "the newspaper has been left out on the windowsill" },
            { letter: "C", text: "she finds the crossword puzzle too easy to bother with" },
            { letter: "D", text: "she would prefer a book with pictures instead" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c40-dobrze",
      family: "G9",
      title: "Six Words on an Envelope",
      kind: "Literary · 9.RL",
      blurb: "A granddaughter rides the hay wagon behind a grandfather who works in Polish.",
      level: 3,
      passage:
        "<p>" + N(1) + "My grandfather has farmed the same Ohio hillside for fifty years, and he still counts hay bales in Polish. " +
        N(2) + "<em>Jeden, dwa, trzy</em>: I heard the numbers every July of my childhood without once asking what they meant. " +
        N(3) + "This summer my parents were both working double shifts, so I was the only one left to ride the wagon behind his baler. " +
        N(4) + "Dziadek's English is good enough for the feed store and the bank, but in the field he slips back into the language he grew up with, as if the work itself remembers it. " +
        N(5) + "The first morning I understood almost nothing. " +
        N(6) + "He would shout a word over the engine and point at a sagging bale, and I would stare at him until he climbed down and fixed it himself. " +
        N(7) + "By noon my arms were scratched raw, and my pride was worse. " +
        N(8) + "That night I asked my mother for the words, and she wrote six of them on the back of an envelope: left, right, stop, careful, good, again. " +
        N(9) + "I taped the envelope to the wagon rail. " +
        N(10) + "The second morning went a little better, and the third better still. " +
        N(11) + "On the fifth day a thunderhead piled up over the tree line, dark as a bruise, and we raced it down the last rows. " +
        N(12) + "Dziadek shouted, and I had already moved before I realized that I had not translated anything; my body had simply understood. " +
        N(13) + "We got the last bale into the barn as the first drops hit the roof. " +
        N(14) + "He clapped my shoulder and said one word, <em>dobrze</em>, which I did not need the envelope to know. " +
        N(15) + "The envelope is still taped to the rail, gone soft and gray in the sun, but I have not looked at it since." +
        "</p>",
      claims: [
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told by the granddaughter herself, the reader —",
          choices: [
            { letter: "A", text: "learns what each Polish word means as soon as it is spoken" },
            { letter: "B", text: "understands why Dziadek never learned more English" },
            { letter: "C", text: "hears the mother's view of the summer's work" },
            { letter: "D", text: "shares her confusion when the shouted words make no sense" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is developed across \"Six Words on an Envelope\"?",
          choices: [
            { letter: "A", text: "Young people should learn a language before they visit family." },
            { letter: "B", text: "Shared work can build an understanding deeper than translation." },
            { letter: "C", text: "Older relatives are often too proud to accept help." },
            { letter: "D", text: "Farm life is harder now than it was fifty years ago." }
          ],
          correct: "B"
        },
        {
          id: "bruise",
          sol: "9.RL.2.B",
          stem: "In sentence 11, describing the thunderhead as dark as a bruise mainly adds a sense of —",
          choices: [
            { letter: "A", text: "threat and urgency" },
            { letter: "B", text: "calm and relief" },
            { letter: "C", text: "humor and play" },
            { letter: "D", text: "sadness and regret" }
          ],
          correct: "A"
        },
        {
          id: "envelope",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that the narrator has not looked at the envelope since the storm because she —",
          choices: [
            { letter: "A", text: "is embarrassed that she ever needed it" },
            { letter: "B", text: "plans to throw it away at the end of summer" },
            { letter: "C", text: "no longer needs it; the words have become her own" },
            { letter: "D", text: "cannot read her mother's faded handwriting" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentence 15, about the envelope gone soft and gray, is best described as —",
          choices: [
            { letter: "A", text: "quietly satisfied" },
            { letter: "B", text: "deeply worried" },
            { letter: "C", text: "openly boastful" },
            { letter: "D", text: "sharply critical" }
          ],
          correct: "A"
        },
        {
          id: "firstday",
          sol: "9.RL.3.A",
          stem: "The narrator includes sentences 5 through 7, about the first morning, mainly to —",
          choices: [
            { letter: "A", text: "explain why her parents work double shifts" },
            { letter: "B", text: "show that Dziadek is a harsh and impatient teacher" },
            { letter: "C", text: "describe how a hay baler is supposed to work" },
            { letter: "D", text: "set up a contrast with the fifth day in the field" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── POETRY · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c40-poem-fenceline",
      family: "G9",
      title: "Fence Line",
      kind: "Poetry · 9.RL",
      blurb: "Before the school bus, a speaker and her mother walk the wire around the pasture.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the school bus, before the sun,<br>" +
        L(2) + "my mother and I walk the fence line,<br>" +
        L(3) + "her pliers clicking like a cricket<br>" +
        L(4) + "each time she finds a loosened wire.<br>" +
        L(5) + "The cattle watch us, chewing slowly,<br>" +
        L(6) + "polite as neighbors over coffee.<br>" +
        L(7) + "She shows me which posts her father set<br>" +
        L(8) + "and which ones she set herself at twelve,<br>" +
        L(9) + "the year the creek climbed over its banks<br>" +
        L(10) + "and carried half the pasture to the road.<br>" +
        L(11) + "I used to think a fence was only something<br>" +
        L(12) + "that kept the whole world out.<br>" +
        L(13) + "Now I see it is a sentence<br>" +
        L(14) + "my family keeps on writing,<br>" +
        L(15) + "one staple at a time,<br>" +
        L(16) + "so the cattle will know where home ends." +
        "</p>",
      claims: [
        {
          id: "cricket",
          sol: "9.RL.2.A",
          stem: "In line 3, the pliers are compared to a cricket mainly to show —",
          choices: [
            { letter: "A", text: "their small, regular clicking in the quiet morning" },
            { letter: "B", text: "that the mother is afraid of insects in the grass" },
            { letter: "C", text: "how old and rusty the tools have become" },
            { letter: "D", text: "that the fence is about to fall down" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"Fence Line\"?",
          choices: [
            { letter: "A", text: "Cattle are calmer than people expect them to be." },
            { letter: "B", text: "Floods can destroy years of hard work in a day." },
            { letter: "C", text: "Caring for land is work handed down through a family." },
            { letter: "D", text: "Children should not have to work before school." }
          ],
          correct: "C"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "\"Fence Line\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "a neighbor watching from across the road" },
            { letter: "B", text: "a young person walking the fence with a parent" },
            { letter: "C", text: "the grandfather who set the first posts" },
            { letter: "D", text: "the mother remembering the year of the flood" }
          ],
          correct: "B"
        },
        {
          id: "sentence",
          sol: "9.RL.2.B",
          stem: "In lines 13 and 14, the speaker calls the fence a sentence my family keeps on writing mainly to suggest that the fence —",
          choices: [
            { letter: "A", text: "needs a sign to explain whose land it surrounds" },
            { letter: "B", text: "is a lesson the speaker must memorize for school" },
            { letter: "C", text: "was built too quickly and has to be fixed" },
            { letter: "D", text: "is an ongoing record that each generation adds to" }
          ],
          correct: "D"
        },
        {
          id: "mother",
          sol: "9.RL.1.C",
          stem: "Which description of the mother is best supported by lines 3–4 and 7–8?",
          choices: [
            { letter: "A", text: "She is nervous around the cattle." },
            { letter: "B", text: "She dislikes talking about the past." },
            { letter: "C", text: "She is skilled and has done this work since childhood." },
            { letter: "D", text: "She wants the speaker to leave the farm someday." }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.B",
          stem: "Based on lines 11–16, readers can infer that the speaker's view of the fence has changed from —",
          choices: [
            { letter: "A", text: "a place to play to a chore to avoid" },
            { letter: "B", text: "a barrier against the world to a sign of family care" },
            { letter: "C", text: "a sign of safety to a reminder of the flood" },
            { letter: "D", text: "her mother's project to her grandfather's" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c40-poem-underpass",
      family: "G9",
      title: "Underpass",
      kind: "Poetry · 9.RL",
      blurb: "A gray concrete wall speaks about the girl who painted its memories back.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "For thirty years I was only gray,<br>" +
        L(2) + "a concrete page nobody wanted to read,<br>" +
        L(3) + "the place where buses sighed and puddles slept.<br>" +
        L(4) + "Then a girl with paint on her sneakers<br>" +
        L(5) + "measured me with a string and a stub of chalk<br>" +
        L(6) + "and asked me, without words, what I remembered.<br>" +
        L(7) + "I remembered the river before the road,<br>" +
        L(8) + "the herons standing in it like question marks,<br>" +
        L(9) + "the corn that grew where the parking lot is now.<br>" +
        L(10) + "She gave it all back to me in blue and green and gold.<br>" +
        L(11) + "Now people stop. Children point at the herons.<br>" +
        L(12) + "An old man touches the painted river<br>" +
        L(13) + "as if checking whether it is cold.<br>" +
        L(14) + "I am still concrete. But I am also a door." +
        "</p>",
      claims: [
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "\"Underpass\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "the girl who paints the mural" },
            { letter: "B", text: "the concrete wall itself" },
            { letter: "C", text: "an old man who lived by the river" },
            { letter: "D", text: "a child walking under the bridge" }
          ],
          correct: "B"
        },
        {
          id: "herons",
          sol: "9.RL.2.A",
          stem: "In line 8, comparing the herons to question marks mainly emphasizes —",
          choices: [
            { letter: "A", text: "how loudly the birds called over the water" },
            { letter: "B", text: "that the speaker cannot recall the birds clearly" },
            { letter: "C", text: "that the herons were afraid of the new road" },
            { letter: "D", text: "the curved, still shapes the birds made in the river" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The images in line 3, where buses sighed and puddles slept, mainly create a mood that is —",
          choices: [
            { letter: "A", text: "dull and forgotten" },
            { letter: "B", text: "busy and joyful" },
            { letter: "C", text: "tense and dangerous" },
            { letter: "D", text: "proud and grand" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How do lines 11–14 of \"Underpass\" differ from lines 1–3?",
          choices: [
            { letter: "A", text: "The wall moves from feeling hopeful to feeling ignored." },
            { letter: "B", text: "The speaker moves from describing the river to describing corn." },
            { letter: "C", text: "The wall moves from being ignored to drawing people in." },
            { letter: "D", text: "The speaker moves from praising the girl to doubting her." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"Underpass\"?",
          choices: [
            { letter: "A", text: "Art can bring back a place's forgotten history for its people." },
            { letter: "B", text: "Old buildings should be torn down to make room for new ones." },
            { letter: "C", text: "Children notice more about nature than adults do." },
            { letter: "D", text: "Roads and parking lots are a sign of a town's progress." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.2.C",
          stem: "The poet begins line 14 with the short sentence I am still concrete most likely to —",
          choices: [
            { letter: "A", text: "show that the mural has already begun to fade" },
            { letter: "B", text: "suggest that the wall regrets being painted" },
            { letter: "C", text: "remind readers that the river is gone forever" },
            { letter: "D", text: "admit what has not changed before revealing what has" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── DRAMA · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c40-frontdesk",
      family: "G9",
      title: "The 4:45 Visitor",
      kind: "Drama · 9.RL",
      blurb: "Two teen volunteers at a hospital information desk, twenty minutes before the last bus.",
      level: 2,
      passage:
        "<p><em>Setting: the information desk in the lobby of Riverbend Regional Hospital, 4:40 p.m. Two student volunteers in teal vests. A phone, a bowl of mints, a rack of folded maps. FELIX watches the clock. AMAYA straightens the maps.</em></p>" +
        "<p>" + N(1) + "<strong>FELIX</strong>: Twenty minutes left. If nobody else comes, I can make the 5:10 bus. " +
        N(2) + "<strong>AMAYA</strong>: Somebody always comes at 4:45. " +
        N(3) + "<em>(MR. TANAKA enters, his coat buttoned wrong, holding a folded paper in both hands.)</em> " +
        N(4) + "<strong>MR. TANAKA</strong>: Excuse me. My wife. They said surgery, and then a waiting room, and then a number, and I — " +
        N(5) + "<strong>FELIX</strong> <em>(fast, cheerful)</em>: Surgical waiting is on three! East elevators, check in at the desk, and they'll give you a pager! " +
        N(6) + "<em>(MR. TANAKA nods but does not move.)</em> " +
        N(7) + "<strong>AMAYA</strong> <em>(aside, to the audience)</em>: He heard none of that. Nobody hears the first set of directions. I didn't, the night my brother broke his arm. " +
        N(8) + "<strong>AMAYA</strong> <em>(stepping around the desk)</em>: Sir, I'm walking up that way anyway. Would you like some company? " +
        N(9) + "<strong>FELIX</strong> <em>(aside, glancing at the clock)</em>: She is not walking up that way. Nobody is walking up that way. Her shift ends when mine does. " +
        N(10) + "<em>(FELIX looks at MR. TANAKA's coat for a long moment, then quietly hands AMAYA a visitor badge and a mint.)</em> " +
        N(11) + "<strong>FELIX</strong>: Take the elevator by the gift shop. It's slower, but nobody pushes. " +
        N(12) + "<em>(AMAYA and MR. TANAKA exit. FELIX sits, then picks up the phone.)</em> " +
        N(13) + "<strong>FELIX</strong>: Hi, Mom. I'm going to catch the later bus.</p>",
      claims: [
        {
          id: "aside7",
          sol: "9.RL.1.D",
          stem: "Amaya's aside in sentence 7 mainly reveals that she —",
          choices: [
            { letter: "A", text: "understands Mr. Tanaka's confusion from her own experience" },
            { letter: "B", text: "thinks Felix gave Mr. Tanaka the wrong floor" },
            { letter: "C", text: "is hoping to leave work before Felix does" },
            { letter: "D", text: "has never been inside the surgical wing herself" }
          ],
          correct: "A"
        },
        {
          id: "coat",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 3, describing Mr. Tanaka's coat buttoned wrong, mainly suggests that he is —",
          choices: [
            { letter: "A", text: "careless about the way he usually dresses" },
            { letter: "B", text: "cold after waiting outside for the bus" },
            { letter: "C", text: "too upset and distracted to notice small things" },
            { letter: "D", text: "visiting the hospital for the very first time" }
          ],
          correct: "C"
        },
        {
          id: "aside9",
          sol: "9.RL.1.D",
          stem: "Felix's aside in sentence 9 lets the audience know that Amaya's offer in sentence 8 —",
          choices: [
            { letter: "A", text: "is part of the volunteers' official training" },
            { letter: "B", text: "is a kind excuse rather than the literal truth" },
            { letter: "C", text: "will make both volunteers miss the last bus" },
            { letter: "D", text: "annoys Felix because she is showing off" }
          ],
          correct: "B"
        },
        {
          id: "felix",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Felix changes during the scene?",
          choices: [
            { letter: "A", text: "He starts out kind but grows impatient with the visitor." },
            { letter: "B", text: "He starts out nervous but becomes a confident guide." },
            { letter: "C", text: "He starts out bored and stays that way until the end." },
            { letter: "D", text: "He starts out focused on his bus but chooses to help instead." }
          ],
          correct: "D"
        },
        {
          id: "badge",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 10, in which Felix studies the coat and hands over a badge and a mint, mainly shows that Felix —",
          choices: [
            { letter: "A", text: "wants Amaya to finish his paperwork for him" },
            { letter: "B", text: "notices the man's distress and quietly supports Amaya" },
            { letter: "C", text: "is trying to get Mr. Tanaka to leave the lobby" },
            { letter: "D", text: "has decided to report Amaya to a supervisor" }
          ],
          correct: "B"
        },
        {
          id: "elevator",
          sol: "9.RL.1.B",
          stem: "From Felix's advice in sentence 11, readers can best infer that he —",
          choices: [
            { letter: "A", text: "does not know where the east elevators are" },
            { letter: "B", text: "thinks the gift shop sells better mints" },
            { letter: "C", text: "realizes Mr. Tanaka needs a calm, unhurried route" },
            { letter: "D", text: "wants Amaya to take as long as possible" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c40-teenvolunteers",
      family: "G9",
      title: "Small Kindnesses",
      kind: "Informational · 9.RI",
      blurb: "How a hospital's summer program turns sixty teenagers into trained volunteers.",
      level: 1,
      passage:
        "<p>" + N(1) + "Each summer, Lakeview Medical Center welcomes about sixty high school students into its teen volunteer program. " +
        N(2) + "The program is popular, and the path into it follows a clear set of steps. " +
        N(3) + "First, students between the ages of fifteen and eighteen fill out an application and ask a teacher or coach for a letter of reference. " +
        N(4) + "Next, accepted students complete a health screening, including a flu shot and a tuberculosis test, because volunteers work near patients whose immune systems may be weak. " +
        N(5) + "After the screening comes a full day of training. " +
        N(6) + "Volunteers learn how to wash their hands correctly, how to protect patient privacy and what to do if an alarm sounds. " +
        N(7) + "Then each new volunteer shadows an experienced one for two shifts before working alone. " +
        N(8) + "Finally, the volunteer office assigns students to a unit, such as the gift shop, the information desk or the children's playroom. " +
        N(9) + "Volunteers do not give medical care; their job is to make the hospital feel less confusing and more welcoming. " +
        N(10) + "According to the volunteer office, teens logged more than 4,800 hours of service last summer. " +
        N(11) + "Several former volunteers have gone on to study nursing, and the program's director, Ms. Adaeze Nwosu, believes the program is the best introduction to health careers a teenager can get. " +
        N(12) + "\"You learn quickly that a hospital runs on small kindnesses,\" she says." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of \"Small Kindnesses\"?",
          choices: [
            { letter: "A", text: "Teen volunteers at Lakeview mostly hope to become nurses." },
            { letter: "B", text: "Lakeview trains teen volunteers in careful steps to help patients." },
            { letter: "C", text: "Hospitals need more volunteers than they can possibly train." },
            { letter: "D", text: "Lakeview's gift shop depends on teenagers to stay open." }
          ],
          correct: "B"
        },
        {
          id: "screening",
          sol: "9.RI.1.B",
          stem: "According to the passage, why must accepted students complete a health screening?",
          choices: [
            { letter: "A", text: "The screening replaces the letter of reference." },
            { letter: "B", text: "The hospital uses it to decide each student's unit." },
            { letter: "C", text: "Students need it before they can apply to nursing school." },
            { letter: "D", text: "Volunteers work near patients whose immune systems may be weak." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 3 through 8 of \"Small Kindnesses\" are organized mainly as —",
          choices: [
            { letter: "A", text: "a sequence of steps in the order students complete them" },
            { letter: "B", text: "a comparison of two different volunteer programs" },
            { letter: "C", text: "a problem followed by several possible solutions" },
            { letter: "D", text: "a list of reasons that teens should volunteer" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement from the passage expresses an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Each new volunteer shadows an experienced one for two shifts." },
            { letter: "B", text: "Teens logged more than 4,800 hours of service last summer." },
            { letter: "C", text: "The program is the best introduction to health careers a teenager can get." },
            { letter: "D", text: "Students between fifteen and eighteen fill out an application." }
          ],
          correct: "C"
        },
        {
          id: "nocare",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 9, about volunteers not giving medical care, mainly to —",
          choices: [
            { letter: "A", text: "make clear the limits and purpose of the volunteers' work" },
            { letter: "B", text: "warn students that the program is very hard to join" },
            { letter: "C", text: "suggest that volunteers should receive more training" },
            { letter: "D", text: "explain why the program accepts only sixty students" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that volunteers are prepared before they work on their own?",
          choices: [
            { letter: "A", text: "Sentence 1, which says about sixty students join each summer" },
            { letter: "B", text: "Sentence 7, which says new volunteers shadow experienced ones first" },
            { letter: "C", text: "Sentence 8, which lists units such as the gift shop" },
            { letter: "D", text: "Sentence 12, which quotes the director about kindness" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c40-muralwalls",
      family: "G9",
      title: "Paint Against Paint",
      kind: "Informational · 9.RI",
      blurb: "Why one city stopped painting its walls gray and hired muralists instead.",
      level: 2,
      passage:
        "<p>" + N(1) + "For decades, many cities treated graffiti as a problem to scrub away, and the blank walls left behind became targets again within weeks. " +
        N(2) + "In the coastal city of Port Avalon, crews were repainting the same underpass every month at a cost of nearly $40,000 a year. " +
        N(3) + "Eight years ago, the city tried a different approach. " +
        N(4) + "Instead of painting the walls gray, it hired local artists to cover them with large murals designed with input from nearby residents. " +
        N(5) + "The results surprised even the program's supporters. " +
        N(6) + "Over the next three years, reports of graffiti on mural walls fell by about 70 percent, according to the city's public works office. " +
        N(7) + "Some observers think murals discourage tagging because taggers respect the work of other artists, though this idea has not been carefully tested. " +
        N(8) + "Others point out that murals change how people use a space: when residents stop to look at a painted wall, the area feels watched and cared for. " +
        N(9) + "Murals also bring benefits that are harder to count. " +
        N(10) + "Shop owners near the underpass reported more foot traffic, and a neighborhood school began holding outdoor art classes beside the walls. " +
        N(11) + "Still, murals are not a cure-all. " +
        N(12) + "Paint fades in sun and salt air, and a mural that is never repaired can begin to look neglected, inviting the very damage it was meant to prevent. " +
        N(13) + "Port Avalon now sets aside part of its budget each year for touch-ups, treating its murals less like decorations and more like bridges or sidewalks that need upkeep." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Paint Against Paint\"?",
          choices: [
            { letter: "A", text: "Graffiti is impossible for a city to control." },
            { letter: "B", text: "Port Avalon spends too much money on its underpass." },
            { letter: "C", text: "Murals can reduce graffiti and help neighborhoods, but they need upkeep." },
            { letter: "D", text: "Local artists should be paid more than city work crews." }
          ],
          correct: "C"
        },
        {
          id: "seventy",
          sol: "9.RI.1.B",
          stem: "According to the public works office, what happened to graffiti on Port Avalon's mural walls?",
          choices: [
            { letter: "A", text: "Reports fell by about 70 percent over three years." },
            { letter: "B", text: "Reports stayed about the same as before the murals." },
            { letter: "C", text: "Reports rose at first and then fell after a year." },
            { letter: "D", text: "Reports dropped only on walls painted gray." }
          ],
          correct: "A"
        },
        {
          id: "speculation",
          sol: "9.RI.1.C",
          stem: "Which idea in \"Paint Against Paint\" is a speculation rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "Crews repainted the same underpass every month." },
            { letter: "B", text: "Shop owners near the underpass reported more foot traffic." },
            { letter: "C", text: "The city hired local artists to paint large murals." },
            { letter: "D", text: "Taggers avoid murals because they respect other artists." }
          ],
          correct: "D"
        },
        {
          id: "organization",
          sol: "9.RI.2.A",
          stem: "How is \"Paint Against Paint\" mainly organized?",
          choices: [
            { letter: "A", text: "by listing murals from oldest to newest" },
            { letter: "B", text: "by describing a problem, a solution, its results and its limits" },
            { letter: "C", text: "by comparing Port Avalon with several other cities" },
            { letter: "D", text: "by explaining the steps an artist takes to paint a wall" }
          ],
          correct: "B"
        },
        {
          id: "bridges",
          sol: "9.RI.2.B",
          stem: "The comparison to bridges and sidewalks in sentence 13 helps the reader understand that murals —",
          choices: [
            { letter: "A", text: "are usually painted on the sides of bridges" },
            { letter: "B", text: "cost less than repairing a city sidewalk" },
            { letter: "C", text: "should be designed by city engineers" },
            { letter: "D", text: "are public structures that require regular care" }
          ],
          correct: "D"
        },
        {
          id: "benefits",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that murals bring benefits beyond reducing graffiti?",
          choices: [
            { letter: "A", text: "Sentence 2, about the cost of repainting the underpass" },
            { letter: "B", text: "Sentence 6, about the drop in graffiti reports" },
            { letter: "C", text: "Sentence 10, about foot traffic and outdoor art classes" },
            { letter: "D", text: "Sentence 12, about paint fading in sun and salt air" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c40-spacing",
      family: "G9",
      title: "The Usefulness of Forgetting",
      kind: "Informational · 9.RI",
      blurb: "Why a vocabulary word that vanishes by Friday may be a sign that learning is working.",
      level: 3,
      passage:
        "<p>" + N(1) + "Anyone who has studied a new language knows the frustration: a word that seemed firmly learned on Monday has vanished by Friday. " +
        N(2) + "It is tempting to treat this forgetting as failure, but memory researchers suggest it may be part of how learning works. " +
        N(3) + "In one common type of experiment, a group of learners studies a list of vocabulary words several times in a single session, while a second group studies the same words in shorter sessions spread over several days. " +
        N(4) + "On a test given immediately afterward, the first group often does slightly better. " +
        N(5) + "A month later, however, the second group usually remembers far more. " +
        N(6) + "Psychologists call this pattern the spacing effect. " +
        N(7) + "One explanation is that each time a learner returns to a half-forgotten word, the brain has to work to retrieve it, and that effort strengthens the memory, much as lifting a heavier weight builds a stronger muscle. " +
        N(8) + "Cramming, by contrast, feels productive precisely because the words never have a chance to fade; the learner mistakes familiarity for mastery. " +
        N(9) + "Many language apps now schedule reviews to take advantage of this, showing a word again just as the learner is about to lose it. " +
        N(10) + "Teachers can use the same idea without any technology by returning to old vocabulary in short quizzes weeks after a unit ends. " +
        N(11) + "None of this makes forgetting pleasant. " +
        N(12) + "But a learner who understands the spacing effect may feel less discouraged by a blank moment, and may even welcome the struggle to remember as a sign that the memory is growing stronger." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The author's main purpose in \"The Usefulness of Forgetting\" is to —",
          choices: [
            { letter: "A", text: "explain how spaced practice and the effort of recalling build lasting memory" },
            { letter: "B", text: "persuade schools to replace language teachers with apps" },
            { letter: "C", text: "describe the history of language learning research" },
            { letter: "D", text: "warn readers that cramming harms the brain" }
          ],
          correct: "A"
        },
        {
          id: "month",
          sol: "9.RI.1.B",
          stem: "According to the passage, which learners usually remembered more vocabulary a month later?",
          choices: [
            { letter: "A", text: "those who studied the list many times in one session" },
            { letter: "B", text: "those who took a test right after studying" },
            { letter: "C", text: "those who studied in shorter sessions over several days" },
            { letter: "D", text: "those who used an app instead of a teacher" }
          ],
          correct: "C"
        },
        {
          id: "explanation",
          sol: "9.RI.1.C",
          stem: "Which sentence presents an interpretation offered to explain a result rather than the result itself?",
          choices: [
            { letter: "A", text: "Sentence 4, about the first group doing better on an immediate test" },
            { letter: "B", text: "Sentence 7, about effort strengthening the memory" },
            { letter: "C", text: "Sentence 5, about the second group remembering more" },
            { letter: "D", text: "Sentence 3, about how the two groups studied" }
          ],
          correct: "B"
        },
        {
          id: "organization",
          sol: "9.RI.2.A",
          stem: "How does the author mostly organize \"The Usefulness of Forgetting\"?",
          choices: [
            { letter: "A", text: "by telling the life story of one psychologist" },
            { letter: "B", text: "by comparing three different language apps" },
            { letter: "C", text: "by listing study tips in order of importance" },
            { letter: "D", text: "by moving from a common problem to research, an explanation and uses" }
          ],
          correct: "D"
        },
        {
          id: "weight",
          sol: "9.RI.2.B",
          stem: "The comparison to lifting a heavier weight in sentence 7 helps the reader understand that —",
          choices: [
            { letter: "A", text: "language learners should exercise before studying" },
            { letter: "B", text: "struggling to recall a word makes the memory stronger" },
            { letter: "C", text: "the brain grows tired after too much studying" },
            { letter: "D", text: "only difficult words are worth memorizing" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence provides the strongest evidence that cramming is less effective over time?",
          choices: [
            { letter: "A", text: "Sentence 1, about a word vanishing by Friday" },
            { letter: "B", text: "Sentence 4, about the immediate test results" },
            { letter: "C", text: "Sentence 5, about the results a month later" },
            { letter: "D", text: "Sentence 9, about apps that schedule reviews" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c40-farmsuccession",
      family: "G9",
      title: "Who Runs the Orchard Next",
      kind: "Informational · 9.RI",
      blurb: "One farm family's slow, careful plan for handing the land to the next generation.",
      level: 2,
      passage:
        "<p>" + N(1) + "On many family farms, the hardest job is not planting or harvesting but deciding who will run the place next. " +
        N(2) + "In much of the country, the average farmer is now in his or her late fifties, and many have no clear plan for handing over the land. " +
        N(3) + "Without a plan, a farm can be split among heirs who live far away, sold to pay taxes or simply left idle. " +
        N(4) + "The Delgado family, who grow apples in a river valley in central Washington, decided not to leave that question to chance. " +
        N(5) + "Ten years ago, when Rosa Delgado was fifty-two, she and her two adult children sat down with a farm advisor to map out a transition. " +
        N(6) + "Her son Mateo, who had studied soil science, agreed to take over the orchards in stages, beginning with a single block of trees. " +
        N(7) + "Her daughter Elena, a nurse in Seattle, chose not to farm but kept a share in the family business. " +
        N(8) + "Each year Mateo took on more of the decisions while his mother stayed on as an advisor. " +
        N(9) + "The gradual approach had practical advantages. " +
        N(10) + "Mateo made his early mistakes on a few acres instead of on the whole farm, and the local bank came to trust him before he needed his first large loan. " +
        N(11) + "Advisors who work with farm families say the most important step is also the simplest: talking early and openly. " +
        N(12) + "Many families avoid the subject because it raises hard questions about fairness and about the end of a parent's working life. " +
        N(13) + "Rosa Delgado admits that the first meeting was uncomfortable. " +
        N(14) + "\"But it was much easier than the argument we would have had later,\" she says." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the main idea of \"Who Runs the Orchard Next\"?",
          choices: [
            { letter: "A", text: "Most young people today do not want to become farmers." },
            { letter: "B", text: "Apple orchards are harder to manage than other farms." },
            { letter: "C", text: "Banks rarely lend money to first-time farmers." },
            { letter: "D", text: "Early, gradual planning helps a farm pass to the next generation." }
          ],
          correct: "D"
        },
        {
          id: "noplan",
          sol: "9.RI.1.B",
          stem: "According to the passage, what can happen to a farm whose owners have no plan for handing it over?",
          choices: [
            { letter: "A", text: "It must be turned into an apple orchard." },
            { letter: "B", text: "It may be split up, sold for taxes or left idle." },
            { letter: "C", text: "It is automatically given to the oldest child." },
            { letter: "D", text: "It is managed by a farm advisor until it sells." }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement in the passage is a personal judgment rather than a factual report?",
          choices: [
            { letter: "A", text: "The first meeting was much easier than a later argument would have been." },
            { letter: "B", text: "Rosa Delgado was fifty-two when the family met with an advisor." },
            { letter: "C", text: "Elena, a nurse in Seattle, kept a share in the family business." },
            { letter: "D", text: "Mateo began by taking over a single block of trees." }
          ],
          correct: "A"
        },
        {
          id: "organization",
          sol: "9.RI.2.A",
          stem: "The author organizes \"Who Runs the Orchard Next\" mainly by —",
          choices: [
            { letter: "A", text: "comparing apple farming in two different states" },
            { letter: "B", text: "listing the steps for applying for a farm loan" },
            { letter: "C", text: "presenting a widespread problem and then one family's example" },
            { letter: "D", text: "describing a single harvest season from start to finish" }
          ],
          correct: "C"
        },
        {
          id: "avoid",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 12, about hard questions of fairness, mainly to —",
          choices: [
            { letter: "A", text: "criticize Elena for choosing not to farm" },
            { letter: "B", text: "show that advisors are often unhelpful" },
            { letter: "C", text: "explain why many families put off the conversation" },
            { letter: "D", text: "argue that farms should never be divided" }
          ],
          correct: "C"
        },
        {
          id: "gradual",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 9 that the gradual approach had practical advantages?",
          choices: [
            { letter: "A", text: "Sentence 2, about the age of the average farmer" },
            { letter: "B", text: "Sentence 7, about Elena's choice to keep a share" },
            { letter: "C", text: "Sentence 13, about the uncomfortable first meeting" },
            { letter: "D", text: "Sentence 10, about early mistakes and the bank's trust" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c40-shiftrules",
      family: "G9",
      title: "Teen Volunteer Shift Guidelines",
      kind: "Functional text · 9.RI",
      blurb: "The rules every teen volunteer at Mercy Valley Hospital follows, from sign-in to sign-out.",
      level: 1,
      passage:
        "<p><strong>Mercy Valley Hospital — Teen Volunteer Shift Guidelines</strong></p>" +
        "<p><strong>Before Your Shift</strong> " + N(1) + "Sign in at the Volunteer Office on the ground floor no later than ten minutes before your shift begins. " +
        N(2) + "Wear your teal volunteer vest, closed-toe shoes and your photo badge where it can be seen. " +
        N(3) + "If you feel sick, call the office at least two hours ahead; never come in with a fever or a cough.</p>" +
        "<p><strong>During Your Shift</strong> " + N(4) + "Clean your hands with gel every time you enter or leave a patient room, even if you touched nothing. " +
        N(5) + "Do not share any information about patients, including their names, with anyone outside the hospital, and do not post photos taken inside the building. " +
        N(6) + "If a patient asks for water or food, find a nurse; volunteers may not bring food or drinks because some patients are on restricted diets. " +
        N(7) + "Keep your phone in your locker except during breaks.</p>" +
        "<p><strong>If an Alarm Sounds</strong> " + N(8) + "Stay calm, stay where you are and follow the directions of hospital staff. " +
        N(9) + "Do not use the elevators.</p>" +
        "<p><strong>After Your Shift</strong> " + N(10) + "Return your vest to the bin, sign out and record your hours on the clipboard by the door. " +
        N(11) + "Volunteers who complete fifty hours receive a certificate and may apply for a second-year leadership role.</p>",
      claims: [
        {
          id: "diet",
          sol: "9.RI.1.B",
          stem: "According to the guidelines, why may volunteers not bring food or drinks to patients?",
          choices: [
            { letter: "A", text: "Food is not allowed anywhere in the hospital." },
            { letter: "B", text: "Volunteers have not been trained to serve meals." },
            { letter: "C", text: "The cafeteria closes before most shifts end." },
            { letter: "D", text: "Some patients are on restricted diets." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the Mercy Valley guidelines is to —",
          choices: [
            { letter: "A", text: "tell volunteers what to do at each stage of a shift" },
            { letter: "B", text: "persuade teenagers to sign up as volunteers" },
            { letter: "C", text: "explain how the hospital treats its patients" },
            { letter: "D", text: "describe the history of the volunteer program" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          stem: "How are the guidelines organized?",
          choices: [
            { letter: "A", text: "from the most important rule to the least important" },
            { letter: "B", text: "as a set of questions with answers below each one" },
            { letter: "C", text: "in sections that follow the order of a volunteer's shift" },
            { letter: "D", text: "by comparing rules for adult and teen volunteers" }
          ],
          correct: "C"
        },
        {
          id: "germs",
          sol: "9.RI.3.A",
          stem: "Which TWO rules most directly protect patients from germs? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 2, about wearing a vest and photo badge" },
            { letter: "B", text: "Sentence 3, about staying home with a fever or cough" },
            { letter: "C", text: "Sentence 4, about cleaning hands at every patient room" },
            { letter: "D", text: "Sentence 10, about recording hours on the clipboard" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "reason",
          sol: "9.RI.1.C",
          stem: "Which sentence gives a reason for a rule rather than only stating the rule?",
          choices: [
            { letter: "A", text: "Sentence 7, about keeping phones in lockers" },
            { letter: "B", text: "Sentence 9, about not using the elevators" },
            { letter: "C", text: "Sentence 1, about signing in ten minutes early" },
            { letter: "D", text: "Sentence 6, about food, drinks and patients' diets" }
          ],
          correct: "D"
        },
        {
          id: "touched",
          sol: "9.RI.2.B",
          stem: "In sentence 4, the phrase even if you touched nothing is included mainly to —",
          choices: [
            { letter: "A", text: "make clear that the hand-cleaning rule has no exceptions" },
            { letter: "B", text: "remind volunteers not to touch patients' belongings" },
            { letter: "C", text: "suggest that hand gel is only needed now and then" },
            { letter: "D", text: "explain where the gel dispensers are located" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c40-sayitoutloud",
      family: "G9",
      title: "Say It Out Loud",
      kind: "Argument · 9.RI",
      blurb: "A student argues that language classes should spend half of every period on speaking.",
      level: 3,
      passage:
        "<p>" + N(1) + "At Westbrook High, a student can earn an A in Spanish III without ever holding a real conversation in Spanish. " +
        N(2) + "I know, because I did it. " +
        N(3) + "Our language classes are built around vocabulary lists, grammar worksheets and written tests, and those tools have their place. " +
        N(4) + "But a language is not a list; it is something people use to talk to one another, and our classes should spend at least half of every period on speaking. " +
        N(5) + "Research on this point is fairly consistent. " +
        N(6) + "Studies of language learners have found that students who practice speaking regularly gain confidence faster and are more willing to use the language outside class. " +
        N(7) + "Our own school offers a small example: last spring, the twelve students in Ms. Farouk's after-school conversation club scored higher on the oral section of the state exam than any other group at Westbrook. " +
        N(8) + "Some teachers worry that more speaking will leave less time for grammar, and that students will make mistakes no one corrects. " +
        N(9) + "That concern is fair, but it misunderstands how speaking practice works. " +
        N(10) + "Mistakes in conversation are noticed and fixed in the moment, which is exactly when a learner is most likely to remember the correction. " +
        N(11) + "Westbrook could also invite parents and neighbors who speak Spanish, French or Mandarin to serve as volunteer conversation partners, at almost no cost. " +
        N(12) + "Our town is full of people who could teach us more in twenty minutes of talk than a worksheet can teach in a week. " +
        N(13) + "It is time our language classes sounded like languages." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central claim of \"Say It Out Loud\"?",
          choices: [
            { letter: "A", text: "Grammar worksheets should be removed from language classes." },
            { letter: "B", text: "Students should stop taking written language tests." },
            { letter: "C", text: "Language classes should spend at least half of each period on speaking." },
            { letter: "D", text: "Only native speakers should be hired to teach languages." }
          ],
          correct: "C"
        },
        {
          id: "local",
          sol: "9.RI.3.A",
          stem: "Which sentence supplies evidence from the writer's own school rather than general research?",
          choices: [
            { letter: "A", text: "Sentence 7, about the conversation club's oral exam scores" },
            { letter: "B", text: "Sentence 6, about studies of language learners" },
            { letter: "C", text: "Sentence 9, about the teachers' concern being fair" },
            { letter: "D", text: "Sentence 13, about classes that sound like languages" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement from \"Say It Out Loud\" is an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Twelve students were in the after-school conversation club." },
            { letter: "B", text: "The classes use vocabulary lists and written tests." },
            { letter: "C", text: "Some teachers worry that speaking will crowd out grammar." },
            { letter: "D", text: "Twenty minutes of talk teaches more than a week of worksheets." }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "9.RI.2.A",
          stem: "The writer organizes sentences 8 through 10 mainly by —",
          choices: [
            { letter: "A", text: "listing the steps for starting a conversation club" },
            { letter: "B", text: "presenting an opposing concern and then answering it" },
            { letter: "C", text: "comparing Spanish, French and Mandarin classes" },
            { letter: "D", text: "describing a problem that has no clear solution" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The writer begins with sentences 1 and 2, about earning an A without a conversation, mainly to —",
          choices: [
            { letter: "A", text: "use a personal example to show the problem is real" },
            { letter: "B", text: "boast about earning high grades in Spanish" },
            { letter: "C", text: "suggest that Spanish III is too easy a course" },
            { letter: "D", text: "blame her teachers for giving out good grades" }
          ],
          correct: "A"
        },
        {
          id: "mistakes",
          sol: "9.RI.1.B",
          stem: "According to the writer, why are mistakes made in conversation easier to learn from?",
          choices: [
            { letter: "A", text: "Partners are too polite to point them out." },
            { letter: "B", text: "They are recorded and studied after class." },
            { letter: "C", text: "They appear on the oral section of the exam." },
            { letter: "D", text: "They are corrected at the moment they happen." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY · 9.RV ───────────────────────── */
    {
      id: "g9-rv-c40-goatfence",
      family: "G9",
      title: "Smarter Than the Fence",
      kind: "Vocabulary · 9.RV",
      blurb: "A week on an uncle's goat farm, a leaning fence and a doe named Pepper, with five words to work out.",
      level: 1,
      passage:
        "<p>" + N(1) + "Nadia spent the first week of summer on her uncle Farid's goat farm, where the most important lesson was that goats are smarter than fences. " +
        N(2) + "The leader of the herd, a small brown doe named Pepper, was so <strong>nimble</strong> that she could hop from a hay bale to the top of a gate without seeming to try. " +
        N(3) + "The pasture fence was <strong>dilapidated</strong>, its posts leaning and its wire sagging in a dozen places, and Pepper knew every weak spot. " +
        N(4) + "\"That fence is a revolving door,\" Uncle Farid said, watching her stroll into the vegetable garden for the third time in one morning. " +
        N(5) + "He could not afford a new fence, so the family had to be <strong>resourceful</strong>, patching the holes with old pallets, baling twine and the headboard from a broken bed. " +
        N(6) + "Uncle Farid called himself <strong>frugal</strong>; Nadia's aunt joked that he would reuse a nail until it wore down to a staple. " +
        N(7) + "Each evening Nadia's job was to <strong>replenish</strong> the water troughs, which the goats emptied by late afternoon in the July heat. " +
        N(8) + "By Friday she could tell the goats apart by their voices alone. " +
        N(9) + "On her last morning, Pepper escaped one final time and nibbled the top off every carrot in the garden. " +
        N(10) + "Uncle Farid only laughed and said that the goat had graduated before Nadia did." +
        "</p>",
      claims: [
        {
          id: "nimble",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word nimble most nearly means —",
          choices: [
            { letter: "A", text: "stubborn and hard to train" },
            { letter: "B", text: "quick and light in movement" },
            { letter: "C", text: "hungry for garden plants" },
            { letter: "D", text: "older than the other goats" }
          ],
          correct: "B"
        },
        {
          id: "dilapidated",
          sol: "9.RV.1.C",
          stem: "Which phrase from sentence 3 best helps the reader understand the meaning of dilapidated?",
          choices: [
            { letter: "A", text: "The pasture fence" },
            { letter: "B", text: "in a dozen places" },
            { letter: "C", text: "and Pepper knew" },
            { letter: "D", text: "its wire sagging" }
          ],
          correct: "D"
        },
        {
          id: "replenish",
          sol: "9.RV.1.B",
          stem: "The word replenish in sentence 7 begins with the prefix re-, meaning again. To replenish the water troughs is to —",
          choices: [
            { letter: "A", text: "fill them up again" },
            { letter: "B", text: "move them to the shade" },
            { letter: "C", text: "scrub them clean" },
            { letter: "D", text: "check them for leaks" }
          ],
          correct: "A"
        },
        {
          id: "frugal",
          sol: "9.RV.1.E",
          stem: "Uncle Farid calls himself frugal rather than cheap. Compared with cheap, the word frugal suggests that he is —",
          choices: [
            { letter: "A", text: "unwilling to share with others" },
            { letter: "B", text: "poor and unable to buy anything" },
            { letter: "C", text: "sensible and careful about saving" },
            { letter: "D", text: "lazy about making repairs" }
          ],
          correct: "C"
        },
        {
          id: "revolving",
          sol: "9.RV.1.F",
          stem: "In sentence 4, Uncle Farid calls the fence a revolving door mainly to show that —",
          choices: [
            { letter: "A", text: "the fence has a gate that spins in the wind" },
            { letter: "B", text: "the goats pass in and out whenever they like" },
            { letter: "C", text: "the family plans to replace the fence with a door" },
            { letter: "D", text: "visitors to the farm come and go all day" }
          ],
          correct: "B"
        },
        {
          id: "resourceful",
          sol: "9.RV.1.E",
          stem: "Compared with saying the family got by, the word resourceful in sentence 5 presents their patching as —",
          choices: [
            { letter: "A", text: "clever and worth admiring" },
            { letter: "B", text: "careless and likely to fail" },
            { letter: "C", text: "expensive and wasteful" },
            { letter: "D", text: "funny and not serious" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c40-slipperyfish",
      family: "G9",
      title: "Slippery Fish",
      kind: "Vocabulary · 9.RV",
      blurb: "Theo expected to master Japanese by winter. His tutor makes him listen to himself instead.",
      level: 2,
      passage:
        "<p>" + N(1) + "When Theo Papadakis signed up for Japanese, he imagined he would be <strong>proficient</strong> by winter, able to read street signs, order food and joke with the exchange students the way his cousin did in French. " +
        N(2) + "By October he could introduce himself and count to ninety-nine, and that was all. " +
        N(3) + "The words he studied each night were slippery fish; by morning, half of them had wriggled out of his memory. " +
        N(4) + "Worse, he was <strong>timid</strong> about speaking, so his answers in class came out as a whisper that was nearly <strong>inaudible</strong> even to the student beside him. " +
        N(5) + "His tutor, Ms. Mori, had grown up <strong>bilingual</strong>, speaking Japanese at home and English at school, and she remembered feeling the same way at his age. " +
        N(6) + "\"Your mouth has to learn the words, not just your eyes,\" she told him. " +
        N(7) + "She made him read short dialogues aloud, record himself on his phone and listen back, which he found <strong>excruciating</strong> at first, like hearing a stranger imitate him badly. " +
        N(8) + "But the recordings revealed patterns he had never noticed: he rushed his vowels and dropped the ends of his sentences. " +
        N(9) + "By spring his voice had grown steady, and when the exchange students visited in April, he managed a full conversation about baseball, a sport he knew almost nothing about in any language. " +
        N(10) + "He was not proficient yet, but for the first time he felt the language beginning to belong to him." +
        "</p>",
      claims: [
        {
          id: "proficient",
          sol: "9.RV.1.C",
          stem: "The details later in sentence 1 help show that proficient most nearly means —",
          choices: [
            { letter: "A", text: "popular with classmates" },
            { letter: "B", text: "finished with a course" },
            { letter: "C", text: "interested in travel" },
            { letter: "D", text: "skilled and capable" }
          ],
          correct: "D"
        },
        {
          id: "inaudible",
          sol: "9.RV.1.B",
          stem: "The word inaudible in sentence 4 combines the prefix in-, meaning not, with the root aud, meaning hear. Inaudible most nearly means —",
          choices: [
            { letter: "A", text: "spoken in a foreign language" },
            { letter: "B", text: "said too quickly to follow" },
            { letter: "C", text: "impossible or hard to hear" },
            { letter: "D", text: "repeated over and over" }
          ],
          correct: "C"
        },
        {
          id: "timid",
          sol: "9.RV.1.E",
          stem: "The author could have written quiet instead of timid in sentence 4. Compared with quiet, the word timid adds a sense that Theo is —",
          choices: [
            { letter: "A", text: "afraid and lacking confidence" },
            { letter: "B", text: "calm and thoughtful" },
            { letter: "C", text: "bored with the class" },
            { letter: "D", text: "rude to his classmates" }
          ],
          correct: "A"
        },
        {
          id: "fish",
          sol: "9.RV.1.F",
          stem: "In sentence 3, calling the vocabulary words slippery fish mainly suggests that the words —",
          choices: [
            { letter: "A", text: "were about food and cooking" },
            { letter: "B", text: "were hard for Theo to hold on to" },
            { letter: "C", text: "sounded strange when spoken aloud" },
            { letter: "D", text: "were taught in a fun, playful way" }
          ],
          correct: "B"
        },
        {
          id: "excruciating",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the comparison to hearing a stranger imitate him badly shows that excruciating means —",
          choices: [
            { letter: "A", text: "surprisingly helpful" },
            { letter: "B", text: "extremely uncomfortable" },
            { letter: "C", text: "slightly confusing" },
            { letter: "D", text: "very time-consuming" }
          ],
          correct: "B"
        },
        {
          id: "bilingual",
          sol: "9.RV.1.B",
          stem: "In bilingual (sentence 5), the prefix bi- means two. Someone who is bilingual is a person who —",
          choices: [
            { letter: "A", text: "teaches two different subjects" },
            { letter: "B", text: "has lived in two countries" },
            { letter: "C", text: "studies for two hours a night" },
            { letter: "D", text: "speaks two languages" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c40-mayormalachi",
      family: "G9",
      title: "Construction Zone",
      kind: "Vocabulary · 9.RV",
      blurb: "A hospital playroom volunteer, a silent seven-year-old and a tower of blocks.",
      level: 3,
      passage:
        "<p>" + N(1) + "Esperanza had volunteered in the playroom at Willowmere Children's Hospital for six months, long enough to know that a child's first visit was always the hardest. " +
        N(2) + "Seven-year-old Malachi arrived in a wheelchair, <strong>apprehensive</strong> and silent, gripping the armrests as if the room might tip over. " +
        N(3) + "He was <strong>convalescing</strong> after surgery on his leg, and the nurses had said he needed a few weeks of rest and therapy before he could go home. " +
        N(4) + "Esperanza did not rush him. " +
        N(5) + "She knew that a <strong>pushy</strong> volunteer could undo in one minute what a patient one built in an afternoon, so she simply sat on the rug and began stacking blocks into a tower. " +
        N(6) + "Malachi watched with a <strong>scrutiny</strong> that would have impressed a building inspector, frowning each time she set a block slightly off-center. " +
        N(7) + "Finally he pointed and said, \"That one's crooked.\" " +
        N(8) + "She handed him the block, and he fixed it with great <strong>deliberation</strong>, turning it twice before setting it down. " +
        N(9) + "Within an hour the tower had become a city, with a hospital, a fire station and a long bridge built from cereal boxes. " +
        N(10) + "When his mother came to take him back to his room, Malachi announced that the city was not finished and nobody was allowed to touch it. " +
        N(11) + "Esperanza taped a sign to the table: CONSTRUCTION ZONE, BY ORDER OF MAYOR MALACHI. " +
        N(12) + "The shell he had arrived in had cracked open, and she did not need a doctor to tell her that this, too, was a kind of healing." +
        "</p>",
      claims: [
        {
          id: "apprehensive",
          sol: "9.RV.1.C",
          stem: "Clues in sentence 2 suggest that apprehensive most nearly means —",
          choices: [
            { letter: "A", text: "tired and sleepy" },
            { letter: "B", text: "anxious and uneasy" },
            { letter: "C", text: "angry and stubborn" },
            { letter: "D", text: "curious and excited" }
          ],
          correct: "B"
        },
        {
          id: "convalescing",
          sol: "9.RV.1.B",
          stem: "Convalescing in sentence 3 shares the root val, meaning strong, with valor and valiant. Convalescing most nearly means —",
          choices: [
            { letter: "A", text: "regaining strength after an illness or injury" },
            { letter: "B", text: "waiting for an operation to begin" },
            { letter: "C", text: "moving from one hospital to another" },
            { letter: "D", text: "showing courage in front of others" }
          ],
          correct: "A"
        },
        {
          id: "pushy",
          sol: "9.RV.1.E",
          stem: "Compared with eager, the word pushy in sentence 5 has a connotation that is more —",
          choices: [
            { letter: "A", text: "cheerful, suggesting good energy" },
            { letter: "B", text: "neutral, suggesting simple speed" },
            { letter: "C", text: "playful, suggesting a joke" },
            { letter: "D", text: "negative, suggesting pressure that is unwelcome" }
          ],
          correct: "D"
        },
        {
          id: "tipover",
          sol: "9.RV.1.F",
          stem: "In sentence 2, Malachi grips the armrests as if the room might tip over. This comparison mainly suggests that he —",
          choices: [
            { letter: "A", text: "is dizzy from medicine given after surgery" },
            { letter: "B", text: "thinks the wheelchair is broken" },
            { letter: "C", text: "feels unsafe and unsteady in a new place" },
            { letter: "D", text: "wants to leave and play outside" }
          ],
          correct: "C"
        },
        {
          id: "shell",
          sol: "9.RV.1.F",
          stem: "In sentence 12, the statement that the shell he had arrived in had cracked open mainly suggests that Malachi has —",
          choices: [
            { letter: "A", text: "come out of his fearful silence" },
            { letter: "B", text: "broken one of the playroom toys" },
            { letter: "C", text: "healed completely from his surgery" },
            { letter: "D", text: "grown tired of building with blocks" }
          ],
          correct: "A"
        },
        {
          id: "scrutiny",
          sol: "9.RV.1.E",
          stem: "Sentence 6 compares Malachi to a building inspector. Compared with look, the word scrutiny suggests a gaze that is —",
          choices: [
            { letter: "A", text: "brief and uninterested" },
            { letter: "B", text: "friendly and admiring" },
            { letter: "C", text: "sleepy and unfocused" },
            { letter: "D", text: "close and critical" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS · 9.DSR ───────────────────────── */
    {
      id: "g9-dsr-c40-muralrules",
      family: "G9",
      title: "Who Approves the Wall?",
      kind: "Paired texts · 9.DSR",
      blurb: "A city's new mural approval rules, and a muralist's answer about what neighbors really need.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Notice from the Brookhaven Public Art Commission</strong></p>" +
        "<p>" + N(1) + "Beginning March 1, every mural proposed for a publicly visible wall in Brookhaven must be approved by the Public Art Commission before painting begins. " +
        N(2) + "Artists will submit a full-color design, a list of paint materials and a signed letter from the property owner. " +
        N(3) + "Designs will then be posted online for a thirty-day public comment period, followed by a commission vote at its next monthly meeting. " +
        N(4) + "The commission believes this process will give residents a voice and protect neighborhoods from designs they find out of place. " +
        N(5) + "It will also ensure that paints meet the city's durability standards, reducing the cost of future repairs. " +
        N(6) + "Murals painted without approval may be covered at the property owner's expense. " +
        N(7) + "Questions may be directed to the commission office at City Hall.</p>" +
        "<p><strong>Text 2 — From the blog of a Brookhaven muralist</strong></p>" +
        "<p>" + N(8) + "I have painted eleven walls here, and I agree with the commission on one point: neighbors deserve a voice. " +
        N(9) + "But thirty days of online comment, then a wait for a monthly vote, could push a spring project into late summer, when heat makes paint dry too fast. " +
        N(10) + "And a website is not where most neighbors live. " +
        N(11) + "For my last mural, on Alder Street, I set up a folding table on the sidewalk for two Saturdays and asked passersby what the wall should show. " +
        N(12) + "An eighty-year-old man told me about the trolley line that used to run past, and a girl of nine drew me a fox. " +
        N(13) + "Both are in the mural. " +
        N(14) + "If the commission wants real community input, it should count conversations like those, not just clicks. " +
        N(15) + "Otherwise, the new rules may protect the walls from the very neighbors they are meant to serve.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea do the commission notice and the muralist's blog both support?",
          choices: [
            { letter: "A", text: "Murals should be painted only in late summer." },
            { letter: "B", text: "Property owners should pay for every mural." },
            { letter: "C", text: "Residents should have a say in what murals show." },
            { letter: "D", text: "Online comment periods are the fairest method." }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the muralist most directly challenge in Text 2?",
          choices: [
            { letter: "A", text: "Sentence 3, about the online comment period and monthly vote" },
            { letter: "B", text: "Sentence 2, about submitting a full-color design" },
            { letter: "C", text: "Sentence 5, about paint durability standards" },
            { letter: "D", text: "Sentence 7, about the office at City Hall" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The commission notice and the muralist's blog differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether murals make neighborhoods more attractive" },
            { letter: "B", text: "whether property owners should sign a letter" },
            { letter: "C", text: "whether artists should be paid for their work" },
            { letter: "D", text: "the best way to gather input from neighbors" }
          ],
          correct: "D"
        },
        {
          id: "timeline",
          sol: "9.DSR.D",
          stem: "Select the TWO sentences that together best show a conflict between the commission's timeline and an artist's painting season.",
          choices: [
            { letter: "A", text: "Sentence 3, about thirty days of comment and a monthly vote" },
            { letter: "B", text: "Sentence 6, about covering murals painted without approval" },
            { letter: "C", text: "Sentence 9, about heat drying paint too fast in late summer" },
            { letter: "D", text: "Sentence 12, about the trolley line and the fox" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "voice",
          sol: "9.DSR.E",
          stem: "Compared with the commission notice, the muralist's blog sounds more —",
          choices: [
            { letter: "A", text: "official and neutral" },
            { letter: "B", text: "personal and persuasive" },
            { letter: "C", text: "angry and threatening" },
            { letter: "D", text: "uncertain and confused" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.DSR.E",
          stem: "Based on both texts, which change to the approval process would the muralist most likely support?",
          choices: [
            { letter: "A", text: "removing the paint durability standards" },
            { letter: "B", text: "letting property owners skip the signed letter" },
            { letter: "C", text: "holding the commission vote only once a year" },
            { letter: "D", text: "counting in-person sidewalk feedback as public comment" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-dsr-c40-strawberries",
      family: "G9",
      title: "Opening Day",
      kind: "Paired texts · 9.DSR",
      blurb: "A family farm's strawberry-season newsletter, and the journal of the teenager running the scale.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From the Okonjo Family Farm spring newsletter</strong></p>" +
        "<p>" + N(1) + "Strawberry season at Okonjo Family Farm opens Saturday, June 3, and runs for about three weeks, depending on the weather. " +
        N(2) + "Our fields are open for picking from 8 a.m. to noon, while the berries are cool and firm. " +
        N(3) + "Berries are sold by the quart, and we provide the baskets. " +
        N(4) + "Please pick only in the rows marked with orange flags, because the other rows are still ripening. " +
        N(5) + "A ripe berry is red all the way to the stem; white shoulders mean it needs a few more days. " +
        N(6) + "This is our family's fortieth season, and we are grateful to the neighbors who return every June. " +
        N(7) + "Bring sunscreen, wear shoes you do not mind getting muddy and please leave pets at home.</p>" +
        "<p><strong>Text 2 — From the journal of Chidi Okonjo, age 15</strong></p>" +
        "<p>" + N(8) + "Opening day. I was out at the rows by six with my grandmother, moving the orange flags, because Thursday's rain and the birds had ruined half the rows we had planned to open. " +
        N(9) + "By eight there were forty cars in the field lot. " +
        N(10) + "My job was the scale and the cash box, which sounds easy until a toddler hands you a quart of berries that are mostly white and very proud. " +
        N(11) + "I paid for those myself; Grandma says you never make a kid feel bad on a first picking day. " +
        N(12) + "Around eleven, a woman told me she had picked in these same rows with her own grandmother when she was little. " +
        N(13) + "That is the line in our newsletter I never really believed until today: people come back.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea is supported by both the farm newsletter and Chidi's journal?",
          choices: [
            { letter: "A", text: "The strawberry season matters to people who return year after year." },
            { letter: "B", text: "The farm should stay open later than noon on weekends." },
            { letter: "C", text: "Toddlers should not be allowed to pick strawberries." },
            { letter: "D", text: "Rain is the biggest danger to a strawberry crop." }
          ],
          correct: "A"
        },
        {
          id: "except",
          sol: "9.DSR.E",
          stem: "All of the following appear in the newsletter (Text 1) EXCEPT —",
          choices: [
            { letter: "A", text: "the hours the fields are open for picking" },
            { letter: "B", text: "how to tell when a berry is ripe" },
            { letter: "C", text: "a request to leave pets at home" },
            { letter: "D", text: "the number of cars in the field lot" }
          ],
          correct: "D"
        },
        {
          id: "flags",
          sol: "9.DSR.D",
          stem: "Select the TWO sentences that together best show why the orange flags matter on opening day.",
          choices: [
            { letter: "A", text: "Sentence 2, about picking while the berries are cool" },
            { letter: "B", text: "Sentence 4, about picking only in flagged rows" },
            { letter: "C", text: "Sentence 8, about moving the flags after the rain and birds" },
            { letter: "D", text: "Sentence 11, about paying for the toddler's berries" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "9.DSR.E",
          stem: "Compared with the newsletter, Chidi's journal entry sounds more —",
          choices: [
            { letter: "A", text: "formal and businesslike" },
            { letter: "B", text: "worried and gloomy" },
            { letter: "C", text: "personal and humorous" },
            { letter: "D", text: "angry and impatient" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts about opening day differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "gives visitors directions, while Text 2 tells one worker's experience" },
            { letter: "B", text: "describes the weather, while Text 2 lists picking rules" },
            { letter: "C", text: "complains about customers, while Text 2 praises them" },
            { letter: "D", text: "tells a family history, while Text 2 gives prices" }
          ],
          correct: "A"
        },
        {
          id: "confirm",
          sol: "9.DSR.E",
          stem: "Which sentence from the newsletter does Chidi's journal most directly confirm?",
          choices: [
            { letter: "A", text: "Sentence 3, about selling berries by the quart" },
            { letter: "B", text: "Sentence 6, about neighbors who return every June" },
            { letter: "C", text: "Sentence 7, about wearing muddy shoes" },
            { letter: "D", text: "Sentence 1, about the season lasting three weeks" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
