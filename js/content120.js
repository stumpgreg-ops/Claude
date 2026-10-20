/* SOL Labyrinth — Lit and Film: Horror and Suspense (grades 11-12 elective, family LIT, genre HORROR)
 * Episode "ring": The Ring (2002, Gore Verbinski), the cursed tape, the investigation, the well and the twist,
 * its color symbolism and the adaptation chain from Koji Suzuki's novel through Ringu to the remake.
 * Episode "horror": the genre's basics: horror vs. suspense, Hitchcock's bomb, what horror films teach us,
 * J-horror and the remakes, PG-13 dread and a century of horror history.
 * Original text only; the film is copyrighted, so it is summarized and analyzed, never quoted.
 * Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ═══════════════════════ THE RING (episode "ring") ═══════════════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-ring-seven-days",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "Seven Days",
      kind: "Screen story · 11.RL",
      blurb: "An unlabeled tape, a ringing phone and a deadline.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In The Ring (2002), an unlabeled videotape passes from hand to hand. " +
        N(2) + "It holds a short string of eerie, disconnected images: a ring of white light, a ladder, a chair, a lonely well. " +
        N(3) + "The moment the tape ends, the telephone rings. " +
        N(4) + "According to the rumor, the voice on the line warns the viewer that only seven days remain. " +
        N(5) + "Teenagers repeat the story as a joke, but one week after watching the tape, a girl named Katie is dead. " +
        N(6) + "Now the countdown has begun for anyone else who pressed play." +
        "</p>",
      claims: [
        {
          id: "order",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "According to the passage, what happens the moment the tape ends?",
          choices: [
            { letter: "A", text: "The television turns itself off." },
            { letter: "B", text: "A ring of light appears on the wall." },
            { letter: "C", text: "The telephone begins to ring." },
            { letter: "D", text: "The tape rewinds by itself." }
          ],
          correct: "C"
        },
        {
          id: "eerie",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *eerie* most nearly means —",
          choices: [
            { letter: "A", text: "strange and unsettling" },
            { letter: "B", text: "bright and colorful" },
            { letter: "C", text: "dull and ordinary" },
            { letter: "D", text: "loud and confusing" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.1",
          stem: "Sentence 5 contains irony mainly because —",
          choices: [
            { letter: "A", text: "Katie is too young to own a videotape" },
            { letter: "B", text: "a story told as a joke turns out to be deadly true" },
            { letter: "C", text: "the teenagers have never heard the rumor" },
            { letter: "D", text: "the tape is passed around without a label" }
          ],
          correct: "B"
        },
        {
          id: "deadline",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence first tells the reader that the curse has a time limit?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Which phrase best describes the mood the passage creates?",
          choices: [
            { letter: "A", text: "cheerful excitement" },
            { letter: "B", text: "calm curiosity" },
            { letter: "C", text: "quiet sadness" },
            { letter: "D", text: "growing dread" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-ring-cold-green",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "A Cold Green World",
      kind: "Film analysis · 11.RL",
      blurb: "Color symbolism: why The Ring looks drained of life.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Director Gore Verbinski gave The Ring a cold, washed-out look. " +
        N(2) + "The filmmakers drained much of the warmth from the picture, leaving a palette, or range of colors, of gray, blue and sickly green. " +
        N(3) + "Faces look pale, and even ordinary kitchens and offices seem damp and unwell. " +
        N(4) + "This color choice works like a symbol: the whole world of the film appears to be slowly losing its life. " +
        N(5) + "Because warm colors are so rare, the few that do appear catch the eye at once." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Which statement best gives the main idea of this short analysis?",
          choices: [
            { letter: "A", text: "The film's cold colors suggest a world draining of life." },
            { letter: "B", text: "Verbinski preferred to film in kitchens and offices." },
            { letter: "C", text: "The Ring was filmed entirely in black and white." },
            { letter: "D", text: "Warm colors make horror films less frightening." }
          ],
          correct: "A"
        },
        {
          id: "palette",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "As used in sentence 2, a film's *palette* is —",
          choices: [
            { letter: "A", text: "the paint used on the film's sets" },
            { letter: "B", text: "the range of colors a film uses" },
            { letter: "C", text: "the camera that records the actors" },
            { letter: "D", text: "the order in which scenes appear" }
          ],
          correct: "B"
        },
        {
          id: "symbol",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "According to sentence 4, the film's color choice works as a symbol of —",
          choices: [
            { letter: "A", text: "the joy of family life" },
            { letter: "B", text: "the warmth of an ordinary home" },
            { letter: "C", text: "the rainy weather of the city" },
            { letter: "D", text: "a world slowly losing its life" }
          ],
          correct: "D"
        },
        {
          id: "sickly",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author calls the green *sickly* rather than *bright* mainly to suggest —",
          choices: [
            { letter: "A", text: "freshness and growth" },
            { letter: "B", text: "money and success" },
            { letter: "C", text: "illness and decay" },
            { letter: "D", text: "safety and calm" }
          ],
          correct: "C"
        },
        {
          id: "warm",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 5, why do warm colors stand out in the film?",
          choices: [
            { letter: "A", text: "They are used in every single scene." },
            { letter: "B", text: "They are so rare that they catch the eye." },
            { letter: "C", text: "Viewers expect horror films to be warm." },
            { letter: "D", text: "Warm colors look brighter in the rain." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── SHORT (levels 1-2) ───────────── */
    {
      id: "lit-ring-reporter",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "The Reporter Takes the Case",
      kind: "Screen story · 11.RL",
      blurb: "Rachel Keller looks into her niece's death and finds a tape.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Rachel Keller, played by Naomi Watts, is a newspaper reporter in rainy Seattle who is raising her young son, Aidan, mostly on her own. " +
        N(2) + "When her teenage niece, Katie, dies suddenly, Katie's grieving mother asks Rachel to find out what happened. " +
        N(3) + "Rachel learns that Katie had spent a night at a mountain cabin with three friends a week earlier, and that all four teenagers died on the same evening. " +
        N(4) + "Following the clue, Rachel drives to the cabin, finds an unmarked tape and watches it alone. " +
        N(5) + "When the phone rings, her reporter's curiosity turns to fear. " +
        N(6) + "She shares the tape with Noah, Aidan's father, who knows video equipment, and he watches it too. " +
        N(7) + "Then, one night, Aidan watches it as well. " +
        N(8) + "Now Rachel is no longer just chasing a story; she is racing to save her son." +
        "</p>",
      claims: [
        {
          id: "trait",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which trait does Rachel show in sentence 4?",
          choices: [
            { letter: "A", text: "shyness" },
            { letter: "B", text: "laziness" },
            { letter: "C", text: "boldness" },
            { letter: "D", text: "impatience" }
          ],
          correct: "C"
        },
        {
          id: "grieving",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *grieving* most nearly means —",
          choices: [
            { letter: "A", text: "angry at a stranger" },
            { letter: "B", text: "confused by a puzzle" },
            { letter: "C", text: "proud of a success" },
            { letter: "D", text: "mourning a loss" }
          ],
          correct: "D"
        },
        {
          id: "stakes",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the event in sentence 7 change the story?",
          choices: [
            { letter: "A", text: "It raises the stakes by putting Rachel's child in danger." },
            { letter: "B", text: "It ends Rachel's investigation into Katie's death." },
            { letter: "C", text: "It shows that the tape has lost its power to harm." },
            { letter: "D", text: "It reveals the name of the person who made the tape." }
          ],
          correct: "A"
        },
        {
          id: "motive",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 8 shows that Rachel's motive has changed from —",
          choices: [
            { letter: "A", text: "fear for herself to anger at Noah" },
            { letter: "B", text: "a reporter's curiosity to a parent's desperation" },
            { letter: "C", text: "love for Aidan to interest in the tape" },
            { letter: "D", text: "grief for Katie to boredom with the case" }
          ],
          correct: "B"
        },
        {
          id: "spread",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences that show the tape's danger passing from Rachel to people close to her.",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the passage begin to develop?",
          choices: [
            { letter: "A", text: "Curiosity can carry a dangerous cost." },
            { letter: "B", text: "Hard work always brings success." },
            { letter: "C", text: "Cities are safer than the country." },
            { letter: "D", text: "Family members rarely help one another." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-ring-dread-review",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "Dread Over Gore",
      kind: "Film review · 11.RI",
      blurb: "A critic argues that The Ring scares by making us wait.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The Ring proves that a horror film does not need buckets of blood to be terrifying. " +
        N(2) + "Rated PG-13, it shows almost no gore; instead, it makes us wait. " +
        N(3) + "The film keeps careful count of Rachel's seven days, so the audience feels every hour slipping away. " +
        N(4) + "Director Gore Verbinski lets scenes run long and quiet, with rain tapping at windows and a television glowing in an empty room. " +
        N(5) + "The few jump scares, sudden shocks timed to a burst of loud sound, land harder because the silence before them has stretched our nerves so thin. " +
        N(6) + "Some viewers complain that the middle of the film drags as Rachel digs through old records and drives from place to place. " +
        N(7) + "Yet that slow investigation is the point: it gives dread time to grow. " +
        N(8) + "The film trusts our imaginations to do the worst work, and our imaginations rarely let us down." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence states the reviewer's central claim?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 8" }
          ],
          correct: "A"
        },
        {
          id: "buckets",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The phrase *buckets of blood* in sentence 1 is an example of —",
          choices: [
            { letter: "A", text: "understatement" },
            { letter: "B", text: "overstatement" },
            { letter: "C", text: "paradox" },
            { letter: "D", text: "sarcasm" }
          ],
          correct: "B"
        },
        {
          id: "jumpscare",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 5, a *jump scare* is —",
          choices: [
            { letter: "A", text: "a countdown of days shown on screen" },
            { letter: "B", text: "a long, quiet scene with no music" },
            { letter: "C", text: "a scene that shows a great deal of gore" },
            { letter: "D", text: "a sudden shock paired with a loud sound" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "How does the reviewer respond to the complaint in sentence 6?",
          choices: [
            { letter: "A", text: "by agreeing that the film should have been shorter" },
            { letter: "B", text: "by arguing that the slow middle lets dread build" },
            { letter: "C", text: "by blaming the actors for the film's slow pace" },
            { letter: "D", text: "by suggesting that viewers skip the middle part" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which detail best supports the claim that the film builds fear through quiet moments rather than gore?",
          choices: [
            { letter: "A", text: "Rain taps at windows while a TV glows in an empty room." },
            { letter: "B", text: "Rachel digs through old records about the tape." },
            { letter: "C", text: "Rachel drives from one place to another." },
            { letter: "D", text: "Some viewers say the middle of the film drags." }
          ],
          correct: "A"
        },
        {
          id: "nerves",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "The phrase *stretched our nerves so thin* in sentence 5 helps the reviewer show that —",
          choices: [
            { letter: "A", text: "the audience grows bored during quiet scenes" },
            { letter: "B", text: "the film runs too long for most viewers" },
            { letter: "C", text: "the silence leaves viewers tense and easily startled" },
            { letter: "D", text: "the sound in most theaters is far too loud" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-ring-rain",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "Rain That Never Cleans",
      kind: "Film analysis · 11.RL",
      blurb: "How The Ring turns an old symbol of renewal upside down.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "In many stories, rain is a symbol of renewal: a storm passes, the air clears and the world feels washed clean. " +
        N(2) + "The Ring turns that old symbol upside down. " +
        N(3) + "Its rain seems never to stop, and it never cleans anything. " +
        N(4) + "Streets stay slick and gray, windows stay streaked, and the characters' coats are always damp. " +
        N(5) + "Water in this film is tied to death and secrets: a ferry crossing a dark stretch of sea, an island cut off from the mainland and, above all, a well whose stagnant water has hidden the truth for years. " +
        N(6) + "Even Samara, the girl at the center of the mystery, appears soaked, her long dark hair dripping across her face. " +
        N(7) + "The steady rain makes the whole world feel waterlogged, as though the damp of the well has seeped into everything. " +
        N(8) + "Nothing is renewed; the past simply rises to the surface." +
        "</p>",
      claims: [
        {
          id: "archetype",
          sol: "11.RL.3.B",
          sub: "11.RL.3.B.1",
          stem: "According to sentences 1–2, how does The Ring use a traditional symbol?",
          choices: [
            { letter: "A", text: "It reverses rain's usual meaning of renewal." },
            { letter: "B", text: "It uses rain to signal a happy ending." },
            { letter: "C", text: "It replaces the rain with falling snow." },
            { letter: "D", text: "It keeps rain's meaning of a fresh start." }
          ],
          correct: "A"
        },
        {
          id: "stagnant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *stagnant* most nearly means —",
          choices: [
            { letter: "A", text: "rushing and loud" },
            { letter: "B", text: "still and stale" },
            { letter: "C", text: "clean and clear" },
            { letter: "D", text: "warm and shallow" }
          ],
          correct: "B"
        },
        {
          id: "never-clean",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences that show the rain in the film never washes the world clean.",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "seeped",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The image in sentence 7 suggests that —",
          choices: [
            { letter: "A", text: "the rain will soon wash the curse away" },
            { letter: "B", text: "the characters enjoy the stormy weather" },
            { letter: "C", text: "the city's streets flood every night" },
            { letter: "D", text: "the well's curse has spread into the whole film's world" }
          ],
          correct: "D"
        },
        {
          id: "past",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is best expressed in sentence 8?",
          choices: [
            { letter: "A", text: "Hidden wrongs from the past do not stay buried." },
            { letter: "B", text: "Bad weather always passes in time." },
            { letter: "C", text: "People should not live close to the sea." },
            { letter: "D", text: "Old stories are better than new ones." }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The author begins with the familiar meaning of rain in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "prove that The Ring has a happy ending" },
            { letter: "B", text: "explain how rain forms in the clouds" },
            { letter: "C", text: "set up a contrast with how The Ring uses rain" },
            { letter: "D", text: "describe the usual weather in Seattle" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-ring-well",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "What the Well Remembered",
      kind: "Screen story · 11.RL",
      blurb: "Moesko Island, the Morgans and the secret beneath the cabin.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Rachel and Noah follow the tape's images to Moesko Island, a windswept place reached by ferry. " +
        N(2) + "There they learn about Anna Morgan, a horse breeder who adopted a strange, silent girl named Samara. " +
        N(3) + "After Samara arrived, the family's prized horses grew wild and began to die, and Anna herself became deeply troubled. " +
        N(4) + "Samara's adoptive father, Richard, kept the girl hidden away from the world, and old hospital tapes show doctors questioning her. " +
        N(5) + "Piece by piece, Rachel realizes that the cursed tape is not random: its images are tied to Samara's life and to the pain she carried. " +
        N(6) + "The last clue leads back to where the story began, the mountain cabin, which turns out to have been built over an old well. " +
        N(7) + "Beneath the floorboards, Rachel and Noah find the stone shaft. " +
        N(8) + "Rachel tumbles into its black water, and in a sudden vision she sees the truth: years before, Anna had pushed Samara into the well and covered it with a heavy lid. " +
        N(9) + "The ring of light from the tape, Rachel now understands, is what Samara saw from below, a thin circle of daylight around the edge of that lid. " +
        N(10) + "When Samara's remains are finally lifted out, Rachel believes the girl's spirit can rest at last. " +
        N(11) + "She has solved the mystery. " +
        N(12) + "She thinks she is safe." +
        "</p>",
      claims: [
        {
          id: "windswept",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word *windswept* in sentence 1 is a compound word. Based on its parts, a windswept place is —",
          choices: [
            { letter: "A", text: "sheltered from all weather" },
            { letter: "B", text: "cleaned every morning" },
            { letter: "C", text: "exposed to strong winds" },
            { letter: "D", text: "crowded with visitors" }
          ],
          correct: "C"
        },
        {
          id: "samara",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which words from the passage best describe Samara as the Morgans first knew her?",
          choices: [
            { letter: "A", text: "cheerful and talkative" },
            { letter: "B", text: "brave and loyal" },
            { letter: "C", text: "lazy and careless" },
            { letter: "D", text: "strange and silent" }
          ],
          correct: "D"
        },
        {
          id: "ring-light",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Sentence 9 is important to the story mainly because it —",
          choices: [
            { letter: "A", text: "explains the meaning of the tape's ring of light" },
            { letter: "B", text: "describes how the mountain cabin was built" },
            { letter: "C", text: "shows that Noah has stayed behind on the island" },
            { letter: "D", text: "proves that the Morgans' horses were sick" }
          ],
          correct: "A"
        },
        {
          id: "tied",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO sentences that show the tape's images are connected to Samara's life.",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do sentences 11–12 fit into the structure of the story?",
          choices: [
            { letter: "A", text: "They hint that the danger may not be over." },
            { letter: "B", text: "They describe how the mystery first began." },
            { letter: "C", text: "They flash back to Samara's early childhood." },
            { letter: "D", text: "They reveal exactly who recorded the tape." }
          ],
          correct: "A"
        },
        {
          id: "safe",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "The short final sentence, *She thinks she is safe*, creates suspense mainly by —",
          choices: [
            { letter: "A", text: "promising that Rachel will live a long life" },
            { letter: "B", text: "hinting at a gap between Rachel's belief and the truth" },
            { letter: "C", text: "explaining exactly how the curse first began" },
            { letter: "D", text: "showing that Noah disagrees with Rachel's plan" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-ring-three-rings",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "Three Rings",
      kind: "Paired texts · 11.DSR",
      blurb: "From Koji Suzuki's novel to Ringu to the American remake.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From Page to Screen in Japan</strong></p>" +
        "<p>" +
        N(1) + "The story began as a book. " +
        N(2) + "In 1991 the Japanese writer Koji Suzuki published Ring, a horror novel about a cursed videotape. " +
        N(3) + "Its hero is a male reporter racing a seven-day deadline to save himself and his family. " +
        N(4) + "In 1998 director Hideo Nakata adapted the novel into the film Ringu. " +
        N(5) + "Nakata made the hero a woman, a television reporter and single mother, and he chose quiet, slow-building dread over long explanations. " +
        N(6) + "His ghost, Sadako, a pale girl whose long black hair hides her face, became one of the most imitated images in horror. " +
        N(7) + "Ringu was a major hit in Japan and helped launch a wave of Japanese horror, or J-horror, built on vengeful spirits, everyday technology and long silences." +
        "</p>" +
        "<p><strong>Text 2 — From Japan to Hollywood</strong></p>" +
        "<p>" +
        N(8) + "Four years later, Hollywood remade Ringu for American audiences. " +
        N(9) + "Gore Verbinski's The Ring (2002) kept the core of the story: the tape, the phone call, the seven days and a reporter-mother racing to save her son. " +
        N(10) + "But it moved the action to the rainy Pacific Northwest, renamed the ghost Samara and bathed nearly every scene in cold blue-green light. " +
        N(11) + "It also reshaped Samara's past, placing her with an adoptive family on a horse farm. " +
        N(12) + "The remake earned many times its budget and proved that American audiences would line up for stories first told in Japan. " +
        N(13) + "Studios rushed to follow with remakes such as The Grudge (2004) and Dark Water (2005). " +
        N(14) + "A remake, then, is not simply a copy; like the cursed tape itself, each version passes the story along while changing it." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by BOTH texts?",
          choices: [
            { letter: "A", text: "Each new version of the story kept some parts and changed others." },
            { letter: "B", text: "The novel was more popular than either of the two films." },
            { letter: "C", text: "Hollywood invented the story of the cursed videotape." },
            { letter: "D", text: "The ghost kept the same name in every version of the story." }
          ],
          correct: "A"
        },
        {
          id: "ringu-change",
          sol: "11.RI.3.A",
          sub: "11.RI.3.A.1",
          stem: "According to Text 1, how did Ringu change Suzuki's novel?",
          choices: [
            { letter: "A", text: "It removed the seven-day deadline." },
            { letter: "B", text: "It made the hero a woman and a single mother." },
            { letter: "C", text: "It moved the story to the United States." },
            { letter: "D", text: "It replaced the videotape with a book." }
          ],
          correct: "B"
        },
        {
          id: "remake-changes",
          sol: "11.DSR.C",
          sub: "11.DSR.C.2",
          stem: "Select TWO changes The Ring made to Ringu, according to Text 2.",
          choices: [
            { letter: "A", text: "It gave the ghost the name Samara." },
            { letter: "B", text: "It removed the telephone call." },
            { letter: "C", text: "It set the story in the Pacific Northwest." },
            { letter: "D", text: "It made the hero a man again." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "jhorror",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Based on Text 1, which feature is typical of J-horror?",
          choices: [
            { letter: "A", text: "fast car chases and loud explosions" },
            { letter: "B", text: "long silences and everyday technology" },
            { letter: "C", text: "comic songs between the scary scenes" },
            { letter: "D", text: "masked killers stalking summer camps" }
          ],
          correct: "B"
        },
        {
          id: "copy",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "In sentence 14, the author compares a remake to the cursed tape in order to suggest that —",
          choices: [
            { letter: "A", text: "remakes are just as dangerous as the tape" },
            { letter: "B", text: "every version of a story is exactly the same" },
            { letter: "C", text: "studios should stop making remakes at all" },
            { letter: "D", text: "a story keeps spreading and changing as it is retold" }
          ],
          correct: "D"
        },
        {
          id: "wave",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which sentence from Text 2 best supports the idea that The Ring's success shaped what Hollywood made next?",
          choices: [
            { letter: "A", text: "sentence 9" },
            { letter: "B", text: "sentence 11" },
            { letter: "C", text: "sentence 13" },
            { letter: "D", text: "sentence 14" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-ring-color-curse",
      family: "LIT",
      genre: "HORROR",
      episode: "ring",
      title: "The Color of a Curse",
      kind: "Film analysis · 11.RL",
      blurb: "Color symbolism in The Ring: teal, rain and the rare warm light.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Nearly every modern film passes through a stage called color grading, in which filmmakers adjust the colors of the finished images, warming some scenes and cooling others. " +
        N(2) + "For The Ring, Gore Verbinski and his team made a bold choice. " +
        N(3) + "They pushed nearly the entire film toward a desaturated teal, strengthening cold blues and greens while pulling back warm reds and yellows. " +
        N(4) + "The result looks as though the story were being watched through murky water." +
        "</p>" +
        "<p>" +
        N(5) + "That palette does more than set a gloomy mood; it works as a symbol. " +
        N(6) + "Green is often the color of growing things, but here it is the green of mold, of stale water, of an old bruise. " +
        N(7) + "Faces look pale and slightly ill, as if the characters were already fading. " +
        N(8) + "Rachel's apartment, her newspaper office, the hospital, the ferry, the island and the mountain cabin all share the same chilly tint, as if one sickly light fell on all of them. " +
        N(9) + "Because the ordinary city and the haunted places look alike, the film quietly erases the line between them. " +
        N(10) + "There is no warm, safe room to retreat to; the curse seems to have leaked into everything." +
        "</p>" +
        "<p>" +
        N(11) + "The weather supports the color. " +
        N(12) + "Rain falls through much of the film, streaking windows and soaking coats, yet it never seems to wash anything clean. " +
        N(13) + "Instead, it deepens the sense of damp and decay, linking every street and window to the well where the mystery began." +
        "</p>" +
        "<p>" +
        N(14) + "Against this cold background, warm color becomes a signal. " +
        N(15) + "Because viewers see so little red, orange or gold, any warm touch, even the glow of a single lamp, draws the eye immediately. " +
        N(16) + "In a world drained of life, warmth feels both precious and suspicious, and an attentive viewer learns to read color as a clue." +
        "</p>" +
        "<p>" +
        N(17) + "The cursed tape takes this draining even further. " +
        N(18) + "Its images are grainy and nearly colorless, as if all life had already been washed out of them. " +
        N(19) + "In a sense, the whole film sits halfway between ordinary life and the tape's dead gray world, and the countdown asks which way Rachel's life will tip." +
        "</p>" +
        "<p>" +
        N(20) + "By the end, Rachel has learned the curse's cruel rule: the only way to survive is to copy the tape and pass it on to someone else. " +
        N(21) + "The palette never warms into comfort. " +
        N(22) + "Even as Rachel saves her son, the cold tones hold to the last scene, a reminder that the curse has not been destroyed, only handed along." +
        "</p>",
      claims: [
        {
          id: "grading",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "According to sentence 1, *color grading* is —",
          choices: [
            { letter: "A", text: "the process of adjusting a film's colors after shooting" },
            { letter: "B", text: "the score that critics give a film's use of color" },
            { letter: "C", text: "the paint that is used to color a film's sets" },
            { letter: "D", text: "the order in which colors appear on the screen" }
          ],
          correct: "A"
        },
        {
          id: "desaturated",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The prefix *de-* in *desaturated* (sentence 3) helps show that the film's colors have been —",
          choices: [
            { letter: "A", text: "made brighter and richer" },
            { letter: "B", text: "reduced or drained" },
            { letter: "C", text: "painted on by hand" },
            { letter: "D", text: "copied from another film" }
          ],
          correct: "B"
        },
        {
          id: "central",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Which statement best expresses the central idea of this analysis?",
          choices: [
            { letter: "A", text: "The Ring would frighten more if it used bright, warm colors." },
            { letter: "B", text: "Color grading is the costliest step in making any film." },
            { letter: "C", text: "The film's cold colors symbolize decay and a curse that spreads." },
            { letter: "D", text: "The rain scenes were hard to shoot in the Pacific Northwest." }
          ],
          correct: "C"
        },
        {
          id: "sickness",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences that support the idea that the film's colors suggest sickness or decay.",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 6" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 11" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "refuge",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.2",
          stem: "Why does the author point out in sentences 8–10 that the city and the haunted places share the same tint?",
          choices: [
            { letter: "A", text: "to show that the film offers no true refuge from the curse" },
            { letter: "B", text: "to complain that all of the film's sets look the same" },
            { letter: "C", text: "to explain where in Seattle each scene was filmed" },
            { letter: "D", text: "to prove that Rachel's office was secretly haunted" }
          ],
          correct: "A"
        },
        {
          id: "murky",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "Sentence 4 compares watching the film to looking through murky water. This simile suggests that the images look —",
          choices: [
            { letter: "A", text: "sharp and sparkling" },
            { letter: "B", text: "warm and inviting" },
            { letter: "C", text: "bright and cheerful" },
            { letter: "D", text: "dim, cloudy and cold" }
          ],
          correct: "D"
        },
        {
          id: "para4",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How does the fourth paragraph (sentences 14–16) develop the author's analysis?",
          choices: [
            { letter: "A", text: "It describes how the cursed tape was recorded." },
            { letter: "B", text: "It lists the actors who appear in warm light." },
            { letter: "C", text: "It explains why it rains so often in Seattle." },
            { letter: "D", text: "It argues that rare warm colors work as clues." }
          ],
          correct: "D"
        },
        {
          id: "handed",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "According to the final paragraph, the cold colors that last to the film's end suggest that —",
          choices: [
            { letter: "A", text: "Rachel has destroyed the curse forever" },
            { letter: "B", text: "the curse survives because it was only passed on" },
            { letter: "C", text: "the story will continue in sunnier weather" },
            { letter: "D", text: "Samara has found peace and will not return" }
          ],
          correct: "B"
        }
      ]
    },

    /* ═══════════════════════ HORROR BASICS (episode "horror") ═══════════════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-horror-shock-or-wait",
      family: "LIT",
      genre: "HORROR",
      episode: "horror",
      title: "Shock or Wait?",
      kind: "Film language · 11.RV",
      blurb: "Horror jolts you; suspense makes you wait.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Horror and suspense are close cousins, but they frighten us in different ways. " +
        N(2) + "Horror aims to shock: it shows us the monster, the sudden attack, the sight that makes us gasp and recoil. " +
        N(3) + "Suspense aims to make us wait. " +
        N(4) + "It lets us know that danger is coming and then delays it, so our fear grows with every passing second. " +
        N(5) + "Horror is a jolt; suspense is a slow squeeze. " +
        N(6) + "Many of the best scary films use both." +
        "</p>",
      claims: [
        {
          id: "suspense",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on the passage, *suspense* is best defined as —",
          choices: [
            { letter: "A", text: "a sudden sight that shocks the audience" },
            { letter: "B", text: "fear that builds while viewers wait for danger" },
            { letter: "C", text: "a scene that shows a monster very clearly" },
            { letter: "D", text: "a story that is sure to end happily" }
          ],
          correct: "B"
        },
        {
          id: "recoil",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *recoil* most nearly means —",
          choices: [
            { letter: "A", text: "pull back in fear" },
            { letter: "B", text: "laugh out loud" },
            { letter: "C", text: "lean in closer" },
            { letter: "D", text: "drift off to sleep" }
          ],
          correct: "A"
        },
        {
          id: "cousins",
          sol: "11.RV.1.E",
          sub: "11.RV.1.E.1",
          stem: "In sentence 1, calling horror and suspense *close cousins* means that they are —",
          choices: [
            { letter: "A", text: "both invented by a single family" },
            { letter: "B", text: "exactly alike in every way" },
            { letter: "C", text: "rivals that dislike each other" },
            { letter: "D", text: "closely related but not the same" }
          ],
          correct: "D"
        },
        {
          id: "jolt",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "Sentence 5 uses two metaphors mainly to —",
          choices: [
            { letter: "A", text: "prove that suspense is better than horror" },
            { letter: "B", text: "describe one scene from a famous film" },
            { letter: "C", text: "sum up the difference between the two kinds of fear" },
            { letter: "D", text: "explain how movie monsters are built" }
          ],
          correct: "C"
        },
        {
          id: "organized",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which best describes how the passage is organized?",
          choices: [
            { letter: "A", text: "in time order, from the oldest film to the newest" },
            { letter: "B", text: "as a comparison of two related ideas" },
            { letter: "C", text: "as a problem followed by its solution" },
            { letter: "D", text: "as a list of steps for making a film" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-horror-bomb",
      family: "LIT",
      genre: "HORROR",
      episode: "horror",
      title: "The Bomb Under the Table",
      kind: "Film history · 11.RI",
      blurb: "Hitchcock's famous example of surprise versus suspense.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Alfred Hitchcock, the director known as the Master of Suspense, liked to explain his craft with a simple example. " +
        N(2) + "Picture two people chatting at a table when a hidden bomb suddenly explodes. " +
        N(3) + "The audience gets a few seconds of surprise, and that is all. " +
        N(4) + "Now picture the same chat, but this time the audience has already seen the bomb under the table and the clock ticking beside it. " +
        N(5) + "Every dull word becomes agonizing, and viewers long to shout a warning. " +
        N(6) + "Surprise lasts seconds; suspense can last for minutes." +
        "</p>",
      claims: [
        {
          id: "point",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "What is the main point of Hitchcock's example?",
          choices: [
            { letter: "A", text: "Suspense grows when viewers know of a danger the characters do not." },
            { letter: "B", text: "Bombs and other explosions should never be shown in films." },
            { letter: "C", text: "Surprise is the most powerful tool that any director has." },
            { letter: "D", text: "Conversations in films should always be kept very short." }
          ],
          correct: "A"
        },
        {
          id: "difference",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "What is the key difference between the scene in sentence 2 and the scene in sentence 4?",
          choices: [
            { letter: "A", text: "The second scene has a much louder explosion." },
            { letter: "B", text: "The second scene uses two different actors." },
            { letter: "C", text: "In the second scene, the audience has seen the bomb." },
            { letter: "D", text: "In the second scene, the characters find the bomb." }
          ],
          correct: "C"
        },
        {
          id: "agonizing",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *agonizing* most nearly means —",
          choices: [
            { letter: "A", text: "pleasantly calm" },
            { letter: "B", text: "mildly funny" },
            { letter: "C", text: "completely silent" },
            { letter: "D", text: "painfully tense" }
          ],
          correct: "D"
        },
        {
          id: "reaction",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence shows how the audience reacts once it knows about the bomb?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 2" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "conclusion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence states the conclusion Hitchcock draws from his example?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── SHORT (levels 1-2) ───────────── */
    {
      id: "lit-horror-what-it-teaches",
      family: "LIT",
      genre: "HORROR",
      episode: "horror",
      title: "What Horror Films Teach Us",
      kind: "Horror · 11.RL",
      blurb: "Fear faced safely, cautionary tales and a mirror for society.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Why would anyone pay money to be frightened? " +
        N(2) + "One answer is that horror lets us face fear safely. " +
        N(3) + "In a dark theater our hearts pound and our palms sweat, yet we know we can walk out into the bright lobby at any moment. " +
        N(4) + "The ancient Greek thinker Aristotle used the word catharsis for the release of strong feeling that an audience experiences at a tragedy, and horror offers a similar release. " +
        N(5) + "Scary films also work as cautionary tales, stories that warn us not to open the forbidden door, ignore the warning or poke at a mystery that should be left alone. " +
        N(6) + "Finally, horror holds up a mirror to its times. " +
        N(7) + "Its monsters often stand for what a society fears most, from atomic radiation in the 1950s to the strange new technologies of today. " +
        N(8) + "In The Ring, terror spreads through an ordinary videotape that anyone could copy and share." +
        "</p>",
      claims: [
        {
          id: "question",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author begins with a question in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "introduce the puzzle the passage will answer" },
            { letter: "B", text: "show that horror films cost too much to see" },
            { letter: "C", text: "suggest that no one enjoys being frightened" },
            { letter: "D", text: "criticize people who watch horror films" }
          ],
          correct: "A"
        },
        {
          id: "catharsis",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "As used in sentence 4, *catharsis* means —",
          choices: [
            { letter: "A", text: "a fear of dark theaters" },
            { letter: "B", text: "a release of strong emotion" },
            { letter: "C", text: "a kind of Greek monster" },
            { letter: "D", text: "a warning about danger" }
          ],
          correct: "B"
        },
        {
          id: "mirror",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 6, the phrase *holds up a mirror to its times* means that horror —",
          choices: [
            { letter: "A", text: "uses many mirrors in its scenes" },
            { letter: "B", text: "shows events from the distant past" },
            { letter: "C", text: "reflects the worries of its own era" },
            { letter: "D", text: "makes its viewers feel calm" }
          ],
          correct: "C"
        },
        {
          id: "reasons",
          sol: "11.DSR.C",
          sub: "11.DSR.C.2",
          stem: "Select TWO reasons the passage gives for why people watch horror films.",
          choices: [
            { letter: "A", text: "Horror lets viewers feel fear safely and then release it." },
            { letter: "B", text: "Horror films are cheaper to see than other films." },
            { letter: "C", text: "Horror warns viewers through cautionary tales." },
            { letter: "D", text: "Horror teaches viewers how to build monsters." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "society",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "According to sentences 7–8, The Ring connects to a society's fears about —",
          choices: [
            { letter: "A", text: "radiation from atomic weapons" },
            { letter: "B", text: "dark and crowded movie theaters" },
            { letter: "C", text: "the tragedies of ancient Greece" },
            { letter: "D", text: "technology that spreads quickly" }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which lesson would a cautionary tale like those in sentence 5 most likely teach?",
          choices: [
            { letter: "A", text: "Curiosity is always rewarded." },
            { letter: "B", text: "Some warnings deserve to be heeded." },
            { letter: "C", text: "Strangers can always be trusted." },
            { letter: "D", text: "Every locked door hides a treasure." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-horror-jhorror",
      family: "LIT",
      genre: "HORROR",
      episode: "horror",
      title: "J-Horror Crosses the Pacific",
      kind: "Film history · 11.RI",
      blurb: "Quiet Japanese ghost stories and the wave of American remakes.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "In the late 1990s, Japanese filmmakers created a style of horror that felt nothing like the American slasher movies of the time. " +
        N(2) + "Critics called it J-horror. " +
        N(3) + "Instead of masked killers and frantic chases, these films offered long silences, empty hallways and ordinary objects turned sinister: a videotape, a cell phone, a computer screen. " +
        N(4) + "Many drew on old Japanese ghost stories about the onryō, a vengeful spirit often pictured as a pale woman in white with long black hair. " +
        N(5) + "Hideo Nakata's Ringu (1998) was the breakout hit. " +
        N(6) + "Hollywood took notice, and Gore Verbinski's remake, The Ring (2002), became a box-office success. " +
        N(7) + "A wave of American remakes followed, including The Grudge (2004), directed by Takashi Shimizu, the same filmmaker who had made the Japanese originals. " +
        N(8) + "For a few years, some of the scariest American films were stories first told in Japan." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "A quiet Japanese style of horror spread to American films." },
            { letter: "B", text: "American slasher films were the scariest of the 1990s." },
            { letter: "C", text: "Takashi Shimizu directed every J-horror film ever made." },
            { letter: "D", text: "Ghost stories have rarely been told in Japan." }
          ],
          correct: "A"
        },
        {
          id: "sinister",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *sinister* most nearly means —",
          choices: [
            { letter: "A", text: "old-fashioned" },
            { letter: "B", text: "threatening" },
            { letter: "C", text: "expensive" },
            { letter: "D", text: "broken" }
          ],
          correct: "B"
        },
        {
          id: "onryo",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentence 4, an *onryō* is —",
          choices: [
            { letter: "A", text: "a studio that made Japanese films" },
            { letter: "B", text: "a kind of old-fashioned videotape" },
            { letter: "C", text: "a vengeful ghost from Japanese tradition" },
            { letter: "D", text: "a masked killer in a slasher film" }
          ],
          correct: "C"
        },
        {
          id: "roots",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Sentence 4 suggests that J-horror films were shaped by —",
          choices: [
            { letter: "A", text: "American slasher movies" },
            { letter: "B", text: "older Japanese ghost stories" },
            { letter: "C", text: "Hollywood box-office records" },
            { letter: "D", text: "German silent films" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "as a list of reasons from most to least important" },
            { letter: "B", text: "as a debate between two film critics" },
            { letter: "C", text: "as a set of steps for making a horror film" },
            { letter: "D", text: "in time order, tracing J-horror from Japan to Hollywood" }
          ],
          correct: "D"
        },
        {
          id: "shimizu",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which sentence best supports the idea that Hollywood valued Japanese filmmakers' skill, not only their stories?",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 6" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 8" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-horror-pg13",
      family: "LIT",
      genre: "HORROR",
      episode: "horror",
      title: "In Praise of PG-13 Fear",
      kind: "Film review · 11.RI",
      blurb: "A critic's top five: horror that scares without gore.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Some horror fans sneer at PG-13 scary movies, as if a film can be frightening only when it is soaked in blood. " +
        N(2) + "I disagree. " +
        N(3) + "The PG-13 rating, created in 1984 to sit between PG and R, limits how much graphic violence a film may show, and that limit forces filmmakers to be clever. " +
        N(4) + "Unable to rely on gore, they build dread instead: the creak of a floorboard, a shape at the edge of the frame, a door left open a few inches, a sound no one can place. " +
        N(5) + "What the camera hides, our imaginations fill in, and imagination is crueler than any special effect." +
        "</p>" +
        "<p>" +
        N(6) + "Consider five films that prove the point. " +
        N(7) + "The Sixth Sense (1999) keeps its ghosts in quiet corners and saves its greatest shock for a final twist. " +
        N(8) + "The Others (2001) traps a mother and her children in a dim, fog-wrapped house where the curtains must stay closed. " +
        N(9) + "Signs (2002) shows its invaders only in glimpses, letting a family's boarded-up farmhouse and strange noises do the work. " +
        N(10) + "The Ring (2002) turns a videotape and a week-long countdown into pure dread. " +
        N(11) + "A Quiet Place (2018) makes the smallest noise a matter of life and death. " +
        N(12) + "Not one of these films needs an R rating to keep audiences awake at night. " +
        N(13) + "Each proves that the most frightening thing on screen is often the thing we never quite see." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "What is the author's main claim?",
          choices: [
            { letter: "A", text: "Only R-rated horror films are truly worth watching." },
            { letter: "B", text: "PG-13 limits push horror films to scare through dread." },
            { letter: "C", text: "The PG-13 rating was a mistake and should be dropped." },
            { letter: "D", text: "The Ring is the scariest film Hollywood ever made." }
          ],
          correct: "B"
        },
        {
          id: "sneer",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author writes *sneer at* in sentence 1 rather than *disagree with* mainly to show that some fans —",
          choices: [
            { letter: "A", text: "treat PG-13 films with scorn" },
            { letter: "B", text: "have never seen a PG-13 film" },
            { letter: "C", text: "politely question the ratings" },
            { letter: "D", text: "work for the rating board" }
          ],
          correct: "A"
        },
        {
          id: "premise",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The author's argument depends most on which premise?",
          choices: [
            { letter: "A", text: "Teenagers prefer comedies to horror films." },
            { letter: "B", text: "Special effects have become far too costly." },
            { letter: "C", text: "Older horror films were never frightening." },
            { letter: "D", text: "Limits on what is shown push filmmakers to invent." }
          ],
          correct: "D"
        },
        {
          id: "function",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How do sentences 7–11 function in the argument?",
          choices: [
            { letter: "A", text: "They present the view of the author's opponents." },
            { letter: "B", text: "They tell the history of the film rating board." },
            { letter: "C", text: "They give examples that support the author's claim." },
            { letter: "D", text: "They summarize the plot of one film in detail." }
          ],
          correct: "C"
        },
        {
          id: "hidden",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO films that, according to the passage, build fear by hiding or limiting what viewers can see.",
          choices: [
            { letter: "A", text: "The Others" },
            { letter: "B", text: "The Ring" },
            { letter: "C", text: "Signs" },
            { letter: "D", text: "A Quiet Place" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "evaluate",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which statement best evaluates the evidence in sentences 7–11?",
          choices: [
            { letter: "A", text: "It is irrelevant, since none of the films is a scary film." },
            { letter: "B", text: "It is relevant, but each film gets only one sentence of support." },
            { letter: "C", text: "It weakens the claim, since all five films are rated R." },
            { letter: "D", text: "It is strong, since it reports data from a scientific study." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-horror-century",
      family: "LIT",
      genre: "HORROR",
      episode: "horror",
      title: "A Century of Screams",
      kind: "Film history · 11.RI",
      blurb: "From Caligari and Nosferatu to Universal's monsters, Psycho and PG-13.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Horror is nearly as old as the movies themselves, and each era has found new ways to frighten its audiences. " +
        N(2) + "In Germany after World War I, a movement called German Expressionism shaped the look of fear. " +
        N(3) + "Expressionist filmmakers did not try to show the world as it really looked; they bent it to express feelings such as dread and madness. " +
        N(4) + "In The Cabinet of Dr. Caligari (1920), directed by Robert Wiene, the buildings lean at crazy angles, the streets twist, and even the shadows are painted directly onto the sets. " +
        N(5) + "Two years later, F. W. Murnau's Nosferatu (1922) brought an unauthorized version of Bram Stoker's Dracula to the screen. " +
        N(6) + "Its vampire, Count Orlok, is a bald, rat-like figure whose long shadow creeps up a staircase in one of the most famous images in film. " +
        N(7) + "Stoker's widow sued, and a court ordered the copies destroyed, but some survived, and the film still haunts viewers today." +
        "</p>" +
        "<p>" +
        N(8) + "In the 1930s, Hollywood's Universal Pictures built a family of monsters. " +
        N(9) + "Bela Lugosi played the count in Dracula (1931), and Boris Karloff played the creature in Frankenstein (1931). " +
        N(10) + "These films borrowed Expressionism's deep shadows and twisted sets, but they added something new: monsters who could earn our sympathy. " +
        N(11) + "Karloff's creature, lonely and misunderstood, is as much a victim as a villain." +
        "</p>" +
        "<p>" +
        N(12) + "After World War II, horror turned to new fears. " +
        N(13) + "In the 1950s, giant creatures awakened or created by atomic radiation stomped across movie screens, among them Japan's Godzilla (1954), made less than a decade after atomic bombs fell on Hiroshima and Nagasaki." +
        "</p>" +
        "<p>" +
        N(14) + "Then, in 1960, Alfred Hitchcock's Psycho moved horror out of castles and laboratories and into an ordinary roadside motel. " +
        N(15) + "Hitchcock shocked audiences by killing off his star early in the film, and he asked theaters not to let anyone in after the movie began. " +
        N(16) + "Its most famous scene uses dozens of quick cuts and shrieking violins, suggesting far more violence than it actually shows. " +
        N(17) + "The monster, Psycho suggested, might be the polite young man behind the front desk." +
        "</p>" +
        "<p>" +
        N(18) + "In 1984 the movie industry created the PG-13 rating, and mainstream horror found a new path: films that frighten teenagers with shadows, sound and suspense rather than graphic violence. " +
        N(19) + "By the early 2000s, American studios were remaking Japanese ghost stories such as Ringu, which became The Ring (2002)." +
        "</p>" +
        "<p>" +
        N(20) + "The monsters keep changing, from vampires and atomic beasts to cursed videotapes, because each generation's monsters reflect its own fears. " +
        N(21) + "What does not change is the goal: to make an audience feel, for a little while, that the dark is full of something." +
        "</p>",
      claims: [
        {
          id: "sumup",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Which statement best sums up the history the passage traces?",
          choices: [
            { letter: "A", text: "German films of the 1920s were the scariest ever made." },
            { letter: "B", text: "The PG-13 rating brought the history of horror to an end." },
            { letter: "C", text: "Universal Pictures invented the horror film in the 1930s." },
            { letter: "D", text: "Horror's monsters change with each era, but its goal stays." }
          ],
          correct: "D"
        },
        {
          id: "expressionism",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentences 3–4, German Expressionism is a style that —",
          choices: [
            { letter: "A", text: "films real streets exactly as they look" },
            { letter: "B", text: "uses only bright, natural sunlight" },
            { letter: "C", text: "avoids shadows on the set" },
            { letter: "D", text: "bends the look of the world to express feelings" }
          ],
          correct: "D"
        },
        {
          id: "unauthorized",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The prefix *un-* in *unauthorized* (sentence 5) shows that Nosferatu was made —",
          choices: [
            { letter: "A", text: "with the full permission of Stoker's family" },
            { letter: "B", text: "before the novel Dracula was written" },
            { letter: "C", text: "without permission from the novel's owners" },
            { letter: "D", text: "by Bram Stoker's own film company" }
          ],
          correct: "C"
        },
        {
          id: "borrowed",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which detail from paragraph 2 connects the Universal films to the German films in paragraph 1?",
          choices: [
            { letter: "A", text: "They borrowed deep shadows and twisted sets." },
            { letter: "B", text: "They starred the actor Bela Lugosi." },
            { letter: "C", text: "They were made during the 1930s." },
            { letter: "D", text: "They gave their monsters sympathy." }
          ],
          correct: "A"
        },
        {
          id: "godzilla",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Why does the author mention when Godzilla (1954) was made?",
          choices: [
            { letter: "A", text: "to show that the film reflected fears left by the atomic bombings" },
            { letter: "B", text: "to prove that Japan made the very first horror film" },
            { letter: "C", text: "to compare Godzilla's look with Count Orlok's" },
            { letter: "D", text: "to explain how the giant creature was built" }
          ],
          correct: "A"
        },
        {
          id: "psycho",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO details that show how Psycho brought horror into everyday life.",
          choices: [
            { letter: "A", text: "Its scariest scene shows a giant atomic creature." },
            { letter: "B", text: "It moved horror into an ordinary roadside motel." },
            { letter: "C", text: "It was an unauthorized version of a famous novel." },
            { letter: "D", text: "Its monster might be a polite young desk clerk." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which best describes the overall structure of the passage?",
          choices: [
            { letter: "A", text: "cause and effect, beginning with Psycho" },
            { letter: "B", text: "chronological order, moving era by era" },
            { letter: "C", text: "a comparison of exactly two films" },
            { letter: "D", text: "a problem followed by a solution" }
          ],
          correct: "B"
        },
        {
          id: "final",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The final paragraph (sentences 20–21) mainly serves to —",
          choices: [
            { letter: "A", text: "introduce a film the passage has not yet mentioned" },
            { letter: "B", text: "argue that modern horror is weaker than old horror" },
            { letter: "C", text: "draw the passage's examples into one conclusion" },
            { letter: "D", text: "retell the plot of The Ring in close detail" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
