/* SOL Labyrinth — Lit and Film: Bad Film vs. Good Film (genre BADGOOD, family LIT)
 * Eighteen packs in three episodes: "plan9" (Plan 9 from Outer Space, Ed Wood, 1957/1959), "ironman" (Iron Man,
 * Jon Favreau, 2008) and "badgood" (the basics: the four lenses of writing, editing, acting and moviemaking,
 * how critics judge a film, cult films, and paired texts that weigh the two films against each other).
 * Original text only. Plan 9 is in the US public domain, so its scenes are retold closely and its narration
 * quoted; Iron Man is copyrighted, so it is only summarized and analyzed, with no dialogue.
 * Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ═════════════════ EPISODE plan9 — Plan 9 from Outer Space ═════════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-plan9-greetings",
      family: "LIT",
      genre: "BADGOOD",
      episode: "plan9",
      title: "Greetings, My Friend",
      kind: "Screen story · 11.RL",
      blurb: "A psychic at a desk opens the worst movie ever made.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Plan 9 from Outer Space opens not with a monster but with a man at a desk. " +
        N(2) + "He is Criswell, a TV psychic who made predictions. " +
        N(3) + "\"Greetings, my friend. We are all interested in the future, for that is where you and I are going to spend the rest of our lives,\" he begins. " +
        N(4) + "Soon he adds that \"future events such as these will affect you in the future.\" " +
        N(5) + "His eyes drift as if he is reading from a teleprompter. " +
        N(6) + "The writing problems are already plain." +
        "</p>",
      claims: [
        {
          id: "redundant", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Which word best describes the line Criswell speaks in sentence 4?",
          choices: [
            { letter: "A", text: "mysterious" },
            { letter: "B", text: "poetic" },
            { letter: "C", text: "redundant" },
            { letter: "D", text: "threatening" }
          ],
          correct: "C"
        },
        {
          id: "acting", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence shows that the film's acting, not only its writing, has a problem?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "psychic", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 2, a *psychic* is someone who —",
          choices: [
            { letter: "A", text: "claims to be able to see the future" },
            { letter: "B", text: "builds the sets for a television show" },
            { letter: "C", text: "directs the camera during a broadcast" },
            { letter: "D", text: "writes scripts for science fiction films" }
          ],
          correct: "A"
        },
        {
          id: "silly", sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "The opening line in sentence 3 sounds silly rather than wise mainly because it —",
          choices: [
            { letter: "A", text: "uses scientific terms the audience cannot follow" },
            { letter: "B", text: "presents an obvious fact as if it were a deep insight" },
            { letter: "C", text: "threatens viewers with a frightening warning" },
            { letter: "D", text: "names the aliens before the story has begun" }
          ],
          correct: "B"
        },
        {
          id: "opening", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "The author includes sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "explain how Criswell became a famous psychic" },
            { letter: "B", text: "describe the monster that appears later on" },
            { letter: "C", text: "contrast what viewers expect with what they get" },
            { letter: "D", text: "show that the film was made on a large budget" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-plan9-cape",
      family: "LIT",
      genre: "BADGOOD",
      episode: "plan9",
      title: "The Man Behind the Cape",
      kind: "Film history · 11.RI",
      blurb: "Bela Lugosi died before Plan 9 was made. Ed Wood used him anyway.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Bela Lugosi, the actor famous for playing Dracula in 1931, died in 1956. " +
        N(2) + "Ed Wood had already filmed a few minutes of silent footage of him for another project. " +
        N(3) + "Wood decided to build Plan 9 from Outer Space around those shots anyway. " +
        N(4) + "To fill the gaps, he hired a stand-in, a chiropractor who was noticeably taller than Lugosi. " +
        N(5) + "In every one of his scenes, the double holds his cape across his face. " +
        N(6) + "Audiences were meant to believe the two men were one person, but the trick fooled almost no one." +
        "</p>",
      claims: [
        {
          id: "summary", sol: "11.DSR.E", sub: "11.DSR.E.1",
          stem: "Which statement best summarizes the passage?",
          choices: [
            { letter: "A", text: "Ed Wood replaced the late Lugosi with a taller double hidden by a cape." },
            { letter: "B", text: "Bela Lugosi finished filming Plan 9 shortly before he died in 1956." },
            { letter: "C", text: "Ed Wood cast a chiropractor because he wanted a fresh new face." },
            { letter: "D", text: "Plan 9 was a remake of Dracula that was filmed with a new cast." }
          ],
          correct: "A"
        },
        {
          id: "standin", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "As used in sentence 4, a *stand-in* is —",
          choices: [
            { letter: "A", text: "a short clip borrowed from another film" },
            { letter: "B", text: "a person who takes an actor's place on camera" },
            { letter: "C", text: "a hidden screen that shows actors their lines" },
            { letter: "D", text: "a writer who rewrites a script during filming" }
          ],
          correct: "B"
        },
        {
          id: "cape", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Based on the passage, why does the double hold his cape across his face?",
          choices: [
            { letter: "A", text: "to look more frightening in the dark scenes" },
            { letter: "B", text: "to protect his eyes from the studio lights" },
            { letter: "C", text: "to copy a famous pose from a Dracula poster" },
            { letter: "D", text: "to hide the fact that he is not Bela Lugosi" }
          ],
          correct: "D"
        },
        {
          id: "view", sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Which statement best describes the author's view of the stand-in trick in sentence 6?",
          choices: [
            { letter: "A", text: "It was clever and fooled most viewers." },
            { letter: "B", text: "It was a fitting tribute to Lugosi." },
            { letter: "C", text: "It was obvious and unconvincing." },
            { letter: "D", text: "It was Lugosi's own last request." }
          ],
          correct: "C"
        },
        {
          id: "organize", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "The passage is mainly organized by —",
          choices: [
            { letter: "A", text: "comparing the careers of two different actors" },
            { letter: "B", text: "explaining a problem and how Wood tried to solve it" },
            { letter: "C", text: "listing events from Lugosi's childhood in order" },
            { letter: "D", text: "giving arguments for and against a casting choice" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── SHORT (levels 1–2) ───────────── */
    {
      id: "lit-plan9-strings",
      family: "LIT",
      genre: "BADGOOD",
      episode: "plan9",
      title: "Saucers on Strings",
      kind: "Film history · 11.RI",
      blurb: "Model kits, a shower curtain and wobbling gravestones: bad moviemaking.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "A science fiction film about an alien invasion needs flying saucers, and Plan 9 from Outer Space has several. " +
        N(2) + "Unfortunately, viewers can often see the thin strings that hold them up. " +
        N(3) + "The saucers wobble as they move across a painted sky. " +
        N(4) + "For years, a popular legend claimed that the director, Ed Wood, used paper plates or car hubcaps. " +
        N(5) + "The truth is only a little better: the saucers were store-bought plastic model kits. " +
        N(6) + "Other sets were just as thin. " +
        N(7) + "The cockpit of an airliner is a sparse room with a shower curtain hanging behind the pilots. " +
        N(8) + "In the cemetery, the gravestones are so light that they wobble or tip when an actor brushes against them. " +
        N(9) + "Each of these is a failure of moviemaking, the craft of building a believable world for the camera. " +
        N(10) + "When the props look fake, the audience stops believing the story." +
        "</p>",
      claims: [
        {
          id: "central", sol: "11.RI.1.A", sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "Plan 9's cheap, obvious props keep viewers from believing its story." },
            { letter: "B", text: "Ed Wood could not afford saucers, so he filmed real car hubcaps." },
            { letter: "C", text: "The airliner scenes are the only weak moments in Plan 9." },
            { letter: "D", text: "Model kits were the best way to film saucers in the 1950s." }
          ],
          correct: "A"
        },
        {
          id: "legend", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "prove that Wood really used car hubcaps" },
            { letter: "B", text: "introduce a popular myth before correcting it" },
            { letter: "C", text: "praise Wood's clever use of household objects" },
            { letter: "D", text: "explain how plastic model kits are assembled" }
          ],
          correct: "B"
        },
        {
          id: "thin-sets", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Select TWO details that support the claim in sentence 6 that the film's other sets were \"just as thin.\"",
          choices: [
            { letter: "A", text: "A shower curtain hangs behind the pilots in the cockpit." },
            { letter: "B", text: "A legend says the saucers were made from paper plates." },
            { letter: "C", text: "Gravestones wobble or tip when an actor brushes them." },
            { letter: "D", text: "Viewers stop believing a story when its props look fake." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "thin", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word *thin* most nearly means —",
          choices: [
            { letter: "A", text: "narrow in shape and width" },
            { letter: "B", text: "flimsy and poorly made" },
            { letter: "C", text: "pale and lightly colored" },
            { letter: "D", text: "few in number overall" }
          ],
          correct: "B"
        },
        {
          id: "apply", sol: "11.RI.2.B", sub: "11.RI.2.B.2",
          stem: "Based on the definition in sentence 9, which of these would also be a failure of moviemaking?",
          choices: [
            { letter: "A", text: "a line of dialogue that repeats itself" },
            { letter: "B", text: "an actor who forgets which way to look" },
            { letter: "C", text: "a scene that is cut off a moment too soon" },
            { letter: "D", text: "a monster costume with a visible zipper" }
          ],
          correct: "D"
        },
        {
          id: "tone", sol: "11.RI.2.C", sub: "11.RI.2.C.2",
          stem: "The phrase \"only a little better\" in sentence 5 mainly creates a tone that is —",
          choices: [
            { letter: "A", text: "angry and bitter" },
            { letter: "B", text: "fearful and tense" },
            { letter: "C", text: "dryly amused" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-plan9-night-day",
      family: "LIT",
      genre: "BADGOOD",
      episode: "plan9",
      title: "Night, Day, Night",
      kind: "Film language · 11.RV",
      blurb: "Continuity, day for night and stock footage: where Plan 9's editing shows.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "<strong>Editing</strong> means choosing shots and joining them in order, and in Plan 9 from Outer Space the joins often show. " +
        N(2) + "Take the graveyard scenes. " +
        N(3) + "One shot shows a pitch-black sky, the next reveals plain daylight, and then it is night again. " +
        N(4) + "Filmmakers sometimes shoot <strong>day for night</strong>, filming in sunlight and darkening the image so that it passes for night. " +
        N(5) + "Done carefully, the trick goes unnoticed. " +
        N(6) + "In Plan 9, clearly daytime shots are cut together with clearly nighttime ones, so the clock seems to jump. " +
        N(7) + "This is a failure of <strong>continuity</strong>, the consistency of details from one shot to the next. " +
        N(8) + "The film also borrows <strong>stock footage</strong>, older clips bought from a film library, of real military rockets and guns. " +
        N(9) + "Their grainy look clashes with the scenes around them. " +
        N(10) + "A careful editor would have caught these <strong>mismatches</strong> or cut around them, but Plan 9 lets them stand." +
        "</p>",
      claims: [
        {
          id: "continuity", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "Based on sentence 7, *continuity* means —",
          choices: [
            { letter: "A", text: "the order in which the scenes were filmed" },
            { letter: "B", text: "details staying consistent from shot to shot" },
            { letter: "C", text: "the speed at which a film's story moves" },
            { letter: "D", text: "the music that links one scene to the next" }
          ],
          correct: "B"
        },
        {
          id: "day-for-night", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "According to sentence 4, filmmakers shoot *day for night* in order to —",
          choices: [
            { letter: "A", text: "make sunlit footage pass for nighttime" },
            { letter: "B", text: "show that many days pass in the story" },
            { letter: "C", text: "light real night scenes with extra lamps" },
            { letter: "D", text: "hide the mistakes made by the actors" }
          ],
          correct: "A"
        },
        {
          id: "stock", sol: "11.RI.2.B", sub: "11.RI.2.B.2",
          stem: "Based on sentences 8–9, why does the stock footage stand out in Plan 9?",
          choices: [
            { letter: "A", text: "It was filmed in color, unlike the rest of the film." },
            { letter: "B", text: "It shows actors who never appear in the film again." },
            { letter: "C", text: "It runs much longer than any of the other scenes." },
            { letter: "D", text: "Its grainy look does not match the shots around it." }
          ],
          correct: "D"
        },
        {
          id: "mis", sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "The prefix *mis-* in *mismatches* (sentence 10) shows that the shots —",
          choices: [
            { letter: "A", text: "fit together wrongly" },
            { letter: "B", text: "were filmed twice" },
            { letter: "C", text: "were matched again later" },
            { letter: "D", text: "were joined before filming" }
          ],
          correct: "A"
        },
        {
          id: "example", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "change the subject to the film's actors" },
            { letter: "B", text: "point to a specific example of the problem" },
            { letter: "C", text: "argue that graveyards are hard to film" },
            { letter: "D", text: "describe the funeral that opens the film" }
          ],
          correct: "B"
        },
        {
          id: "agree", sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "With which statement would the author most likely agree?",
          choices: [
            { letter: "A", text: "Editing problems matter less than acting problems do." },
            { letter: "B", text: "Stock footage should never appear in any feature film." },
            { letter: "C", text: "How shots are joined can hurt a film as much as how they are shot." },
            { letter: "D", text: "Shooting day for night is a trick that always fails on screen." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-plan9-the-plan",
      family: "LIT",
      genre: "BADGOOD",
      episode: "plan9",
      title: "Plan 9, Retold",
      kind: "Science fiction · 11.RL",
      blurb: "Aliens raise the dead to stop humanity's doomsday weapon.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "At a quiet cemetery, an old man mourns beside his wife's grave. " +
        N(2) + "Not long after, he wanders into a road, and the screech of brakes tells viewers that a car has struck him. " +
        N(3) + "Neither husband nor wife will rest for long." +
        "</p><p>" +
        N(4) + "High above Earth, visitors from another world have lost patience with the human race. " +
        N(5) + "Their Ruler approves Plan 9, a scheme to raise the newly buried dead with electrical beams and send them against the living. " +
        N(6) + "The old man, his wife and a burly police inspector named Clay climb out of their graves and stalk through the dark." +
        "</p><p>" +
        N(7) + "Meanwhile, an airline pilot named Jeff Trent tells his wife, Paula, that he saw a flying saucer from his cockpit and that the army has ordered him to keep quiet about it. " +
        N(8) + "Later, Jeff and two officers corner the alien Eros inside his ship, and Eros finally explains his reason. " +
        N(9) + "Humans, he says, are close to building a bomb called solaranite that could explode sunlight itself and destroy the universe. " +
        N(10) + "When the men object, he shouts that their minds are stupid, repeating the word as if volume could make his point stronger." +
        "</p><p>" +
        N(11) + "A fistfight breaks out, the saucer catches fire, and it blazes off into the sky. " +
        N(12) + "Back in the cemetery, the walking dead crumble into skeletons. " +
        N(13) + "Finally, Criswell returns to the screen to ask whether anyone can prove that it did not happen." +
        "</p>",
      claims: [
        {
          id: "foreshadow", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Sentence 3 mainly serves to —",
          choices: [
            { letter: "A", text: "hint that the dead will rise again" },
            { letter: "B", text: "explain why the old man was careless" },
            { letter: "C", text: "show that the town has no hospital" },
            { letter: "D", text: "reveal who was driving the car" }
          ],
          correct: "A"
        },
        {
          id: "eros", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "What does Eros's outburst in sentence 10 reveal about him?",
          choices: [
            { letter: "A", text: "He wants a calm and fair debate." },
            { letter: "B", text: "He admires the skill of human scientists." },
            { letter: "C", text: "He is afraid of the pilot and the officers." },
            { letter: "D", text: "He looks down on humans with scorn." }
          ],
          correct: "D"
        },
        {
          id: "irony", sol: "11.RL.2.D", sub: "11.RL.2.D.2",
          stem: "What is ironic about the aliens' Plan 9?",
          choices: [
            { letter: "A", text: "They come from another world, yet they visit a small town." },
            { letter: "B", text: "They have a Ruler, yet Eros makes all the decisions alone." },
            { letter: "C", text: "They want to save the universe, yet they terrorize the living." },
            { letter: "D", text: "They raise the dead, yet they raise only three of them." }
          ],
          correct: "C"
        },
        {
          id: "stalk", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word *stalk* most nearly means —",
          choices: [
            { letter: "A", text: "hide quietly among the trees" },
            { letter: "B", text: "move in a slow, threatening way" },
            { letter: "C", text: "search the ground for food" },
            { letter: "D", text: "dance with stiff, jerky steps" }
          ],
          correct: "B"
        },
        {
          id: "tone", sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "The phrase \"as if volume could make his point stronger\" in sentence 10 shows that the narrator's attitude toward the film is —",
          choices: [
            { letter: "A", text: "gently mocking" },
            { letter: "B", text: "deeply respectful" },
            { letter: "C", text: "nervous and fearful" },
            { letter: "D", text: "puzzled and unsure" }
          ],
          correct: "A"
        },
        {
          id: "theme", sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which theme is suggested by Eros's warning about solaranite in sentence 9?",
          choices: [
            { letter: "A", text: "Friendship can reach across any distance." },
            { letter: "B", text: "Humans may build weapons they cannot control." },
            { letter: "C", text: "Grief can make people careless and reckless." },
            { letter: "D", text: "The dead deserve to be left in peace." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-plan9-worst-ever",
      family: "LIT",
      genre: "BADGOOD",
      episode: "plan9",
      title: "The Worst Movie Ever Made?",
      kind: "Film history · 11.RI",
      blurb: "Fifty goofs in four categories, and how an insult turned Plan 9 into a cult classic.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Edward D. Wood Jr. did nearly every job on Plan 9 from Outer Space. " +
        N(2) + "He wrote it, produced it and directed it, and he raised money for it wherever he could. " +
        N(3) + "Shot on a tiny budget in 1956 and 1957, the film did not reach theaters until 1959, and before long it had drifted to late-night television. " +
        N(4) + "Wood loved movies and worked with enormous energy, but he worked fast and seldom stopped to fix a mistake." +
        "</p><p>" +
        N(5) + "A class watching Plan 9 today can count more than fifty goofs, and they fall into four groups. " +
        N(6) + "The first is bad writing. " +
        N(7) + "Criswell's narration promises that future events will affect us in the future, and characters explain the plot in speeches that say the same thing twice. " +
        N(8) + "The second is bad acting. " +
        N(9) + "Criswell's eyes follow a teleprompter, and other performers recite their lines stiffly, as if reading them for the first time. " +
        N(10) + "The third is bad editing. " +
        N(11) + "Night turns to day and back within a single scene, and grainy stock footage of military rockets is spliced in beside the new scenes. " +
        N(12) + "The fourth is bad moviemaking: saucers dangle from visible strings, an airliner cockpit has a shower curtain for a back wall, and cardboard gravestones wobble when actors brush against them." +
        "</p><p>" +
        N(13) + "One problem reaches into every category. " +
        N(14) + "Bela Lugosi, the horror star Wood admired, died in 1956, leaving behind only a few minutes of silent footage. " +
        N(15) + "Wood wrote those clips into the story and hired a taller stand-in who hides his face behind a cape. " +
        N(16) + "The writing bends to fit the footage, the editing stretches a few clips as far as they will go, the double's performance consists of a raised arm, and the disguise itself is a piece of moviemaking that fools no one." +
        "</p><p>" +
        N(17) + "Then something strange happened. " +
        N(18) + "In 1980, a humorous book called The Golden Turkey Awards named Plan 9 the worst film of all time, and the label stuck. " +
        N(19) + "Instead of burying the film, the insult revived it. " +
        N(20) + "Fans gathered to watch it together, laughing at the saucers and reciting Criswell's lines. " +
        N(21) + "In 1994, director Tim Burton made Ed Wood, an affectionate movie about Wood's life starring Johnny Depp. " +
        N(22) + "Plan 9 had become a cult film: a movie loved by a devoted group of fans, often for reasons its maker never intended." +
        "</p><p>" +
        N(23) + "Why do people love a film this flawed? " +
        N(24) + "Part of the answer is sincerity. " +
        N(25) + "Wood was not mocking his audience; he believed in his story about aliens trying to stop humans from building a doomsday weapon. " +
        N(26) + "That earnestness, joined to very little skill or money, produced something no careful filmmaker could copy on purpose. " +
        N(27) + "Plan 9 shows exactly what happens when writing, acting, editing and moviemaking all fail at once, which makes it a useful film to study." +
        "</p>",
      claims: [
        {
          id: "central", sol: "11.RI.1.A", sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the article?",
          choices: [
            { letter: "A", text: "Plan 9 failed in nearly every way, and its failures made it a cult film worth studying." },
            { letter: "B", text: "Ed Wood was a skilled director whose best film was ruined by a lack of money." },
            { letter: "C", text: "Bela Lugosi's death was the only reason that Plan 9 turned out so badly." },
            { letter: "D", text: "The Golden Turkey Awards unfairly named Plan 9 the worst film ever made." }
          ],
          correct: "A"
        },
        {
          id: "para2", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "How is the second paragraph organized?",
          choices: [
            { letter: "A", text: "as a timeline of how the film was made" },
            { letter: "B", text: "as four categories, each with examples" },
            { letter: "C", text: "as a comparison of Plan 9 with a better film" },
            { letter: "D", text: "as a problem followed by Wood's solution" }
          ],
          correct: "B"
        },
        {
          id: "para3", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes the third paragraph (sentences 13–16) mainly to —",
          choices: [
            { letter: "A", text: "praise Lugosi's final performance on film" },
            { letter: "B", text: "explain why Lugosi quit the production" },
            { letter: "C", text: "show how one problem touched all four categories" },
            { letter: "D", text: "argue that the stand-in was well chosen" }
          ],
          correct: "C"
        },
        {
          id: "editing-two", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Based on how the passage sorts Plan 9's goofs, which TWO problems in another film would count as bad editing? Select TWO.",
          choices: [
            { letter: "A", text: "a night chase with daylight shots cut into it" },
            { letter: "B", text: "an actor who reads every line in a flat voice" },
            { letter: "C", text: "a line of narration that repeats the same idea" },
            { letter: "D", text: "an old newsreel clip that clashes with new scenes" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "earnestness", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 26, the word *earnestness* most nearly means —",
          choices: [
            { letter: "A", text: "talent" },
            { letter: "B", text: "sincerity" },
            { letter: "C", text: "playfulness" },
            { letter: "D", text: "wealth" }
          ],
          correct: "B"
        },
        {
          id: "irony", sol: "11.RI.2.C", sub: "11.RI.2.C.1",
          stem: "The situation described in sentence 19 is best described as —",
          choices: [
            { letter: "A", text: "fair, because the film had earned its reputation" },
            { letter: "B", text: "predictable, because bad films always find fans" },
            { letter: "C", text: "ironic, because an insult brought the film back to life" },
            { letter: "D", text: "confusing, because the book's authors are not named" }
          ],
          correct: "C"
        },
        {
          id: "cult", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentence 22, which example best fits the definition of a *cult film*?",
          choices: [
            { letter: "A", text: "a blockbuster that wins many awards in its first year" },
            { letter: "B", text: "a forgotten film that no one has watched in decades" },
            { letter: "C", text: "a training film shown only to a company's new workers" },
            { letter: "D", text: "an odd low-budget film that loyal fans rewatch for years" }
          ],
          correct: "D"
        },
        {
          id: "sincere", sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Which sentence best supports the author's claim in sentence 24 that sincerity explains part of the film's appeal?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "D"
        }
      ]
    },

    /* ═════════════════ EPISODE ironman — Iron Man (2008) ═════════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-ironman-weapon",
      family: "LIT",
      genre: "BADGOOD",
      episode: "ironman",
      title: "A Weapon Comes Home",
      kind: "Screen story · 11.RL",
      blurb: "An arms dealer is wounded by a weapon his own company made.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In the film Iron Man (2008), Tony Stark is a genius inventor who runs Stark Industries, a company that builds weapons for the U.S. military. " +
        N(2) + "In Afghanistan, he shows off a powerful new missile and then rides away in an Army convoy, joking with the soldiers. " +
        N(3) + "Minutes later, the convoy is ambushed. " +
        N(4) + "A shell lands at Tony's feet, and he sees his own company's name printed on its side. " +
        N(5) + "The blast drives metal fragments toward his heart. " +
        N(6) + "The weapons he sold so proudly have come back to wound him." +
        "</p>",
      claims: [
        {
          id: "irony", sol: "11.RL.2.D", sub: "11.RL.2.D.1",
          stem: "Which kind of irony appears in sentences 4–6?",
          choices: [
            { letter: "A", text: "dramatic irony, because viewers know a secret Tony does not" },
            { letter: "B", text: "situational irony, because his own product injures him" },
            { letter: "C", text: "verbal irony, because Tony says the opposite of what he means" },
            { letter: "D", text: "no irony, because Tony expected the ambush all along" }
          ],
          correct: "B"
        },
        {
          id: "trait", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Based on sentence 2, Tony at the start of the story seems —",
          choices: [
            { letter: "A", text: "shy and nervous" },
            { letter: "B", text: "cautious and humble" },
            { letter: "C", text: "confident and carefree" },
            { letter: "D", text: "angry and bitter" }
          ],
          correct: "C"
        },
        {
          id: "ambushed", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *ambushed* most nearly means —",
          choices: [
            { letter: "A", text: "attacked by surprise from hiding" },
            { letter: "B", text: "slowed down by a sandstorm" },
            { letter: "C", text: "stopped and inspected by guards" },
            { letter: "D", text: "led onto the wrong road" }
          ],
          correct: "A"
        },
        {
          id: "turn", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Sentence 3 is important to the structure of the passage because it —",
          choices: [
            { letter: "A", text: "describes what Tony's company makes" },
            { letter: "B", text: "explains why Tony went to Afghanistan" },
            { letter: "C", text: "introduces the soldiers by name" },
            { letter: "D", text: "marks the turn from celebration to danger" }
          ],
          correct: "D"
        },
        {
          id: "theme", sol: "11.RL.1.A", sub: "11.RL.1.A.1",
          stem: "Which theme does sentence 6 suggest?",
          choices: [
            { letter: "A", text: "The harm we send out into the world can come back to us." },
            { letter: "B", text: "Soldiers and inventors rarely understand one another." },
            { letter: "C", text: "A sense of humor can protect people from danger." },
            { letter: "D", text: "Success in business depends mostly on luck." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-ironman-cave",
      family: "LIT",
      genre: "BADGOOD",
      episode: "ironman",
      title: "Built in a Cave",
      kind: "Screen story · 11.RL",
      blurb: "A prisoner, a doctor, scrap metal and the first suit of armor.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Tony Stark wakes in a cave, the prisoner of a terrorist group. " +
        N(2) + "A fellow captive, a doctor named Yinsen, has placed a magnet in his chest to keep metal fragments from his heart. " +
        N(3) + "The captors order Tony to build them a missile. " +
        N(4) + "Instead, from parts of his own company's weapons, he secretly builds a small arc reactor to power the magnet and a clunky suit of armor. " +
        N(5) + "This suit, the Mark I, carries him out. " +
        N(6) + "Yinsen does not survive the escape, and his sacrifice changes Tony." +
        "</p>",
      claims: [
        {
          id: "choice", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "What does Tony's choice in sentence 4 reveal about him?",
          choices: [
            { letter: "A", text: "He is resourceful and refuses to obey his captors." },
            { letter: "B", text: "He is frightened and does whatever he is told." },
            { letter: "C", text: "He cares more about money than about his life." },
            { letter: "D", text: "He trusts his captors to let him go home." }
          ],
          correct: "A"
        },
        {
          id: "clunky", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *clunky* suggests that the suit is —",
          choices: [
            { letter: "A", text: "sleek and fast" },
            { letter: "B", text: "heavy and awkward" },
            { letter: "C", text: "shiny and new" },
            { letter: "D", text: "small and hidden" }
          ],
          correct: "B"
        },
        {
          id: "reactor", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Why is the small arc reactor in sentence 4 important to the plot?",
          choices: [
            { letter: "A", text: "It gives the captors the missile they wanted." },
            { letter: "B", text: "It lets Tony send a signal calling for help." },
            { letter: "C", text: "It powers the magnet that keeps Tony alive." },
            { letter: "D", text: "It brings the cave down on the captors." }
          ],
          correct: "C"
        },
        {
          id: "mentor", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Yinsen's role in the passage most closely matches which traditional character type?",
          choices: [
            { letter: "A", text: "the trickster who fools the hero" },
            { letter: "B", text: "the villain who tempts the hero" },
            { letter: "C", text: "the rival who competes with the hero" },
            { letter: "D", text: "the mentor who aids the hero, then dies" }
          ],
          correct: "D"
        },
        {
          id: "cost", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence shows that Tony's escape comes at a cost?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── SHORT (levels 1–2) ───────────── */
    {
      id: "lit-ironman-36-hours",
      family: "LIT",
      genre: "BADGOOD",
      episode: "ironman",
      title: "Thirty-Six Hours Earlier",
      kind: "Film analysis · 11.RL",
      blurb: "How Iron Man tells us who Tony is in about a minute.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Exposition is the background information an audience needs to follow a story. " +
        N(2) + "Weak films often deliver it in long, stiff speeches. " +
        N(3) + "Iron Man handles it quickly. " +
        N(4) + "The film opens in the middle of the action, as Tony's Army convoy rolls through Afghanistan toward an ambush. " +
        N(5) + "Then a title on the screen jumps back thirty-six hours to Las Vegas, where Tony is supposed to accept an award. " +
        N(6) + "A short tribute video plays for the crowd, racing through his life: a famous inventor father, a boy genius, and the head of a giant company by his early twenties. " +
        N(7) + "In about a minute, viewers learn who Tony is. " +
        N(8) + "His absence from his own ceremony, because he is gambling at a casino table, tells us even more. " +
        N(9) + "The film trusts its audience to put these pieces together. " +
        N(10) + "Showing a character's choices instead of explaining them is economical storytelling." +
        "</p>",
      claims: [
        {
          id: "exposition", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "According to sentence 1, *exposition* is —",
          choices: [
            { letter: "A", text: "the background a viewer needs to follow a story" },
            { letter: "B", text: "the most exciting action scene in a film" },
            { letter: "C", text: "the music played under the opening titles" },
            { letter: "D", text: "the final scene that ties up the plot" }
          ],
          correct: "A"
        },
        {
          id: "order", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "How does the film's opening, described in sentences 4–5, arrange events?",
          choices: [
            { letter: "A", text: "It tells every event in strict time order." },
            { letter: "B", text: "It begins in the middle of danger, then jumps back in time." },
            { letter: "C", text: "It starts at the end and never returns to the start." },
            { letter: "D", text: "It switches between two unrelated stories." }
          ],
          correct: "B"
        },
        {
          id: "absence", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "What does Tony's absence from his own ceremony (sentence 8) reveal about him?",
          choices: [
            { letter: "A", text: "He is shy and avoids large crowds." },
            { letter: "B", text: "He is too busy inventing to attend." },
            { letter: "C", text: "He puts his own fun ahead of others." },
            { letter: "D", text: "He is angry at the award's presenter." }
          ],
          correct: "C"
        },
        {
          id: "economical", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 10, the word *economical* most nearly means —",
          choices: [
            { letter: "A", text: "cheap and poorly produced" },
            { letter: "B", text: "related to money and banks" },
            { letter: "C", text: "slow, careful and detailed" },
            { letter: "D", text: "efficient, with nothing wasted" }
          ],
          correct: "D"
        },
        {
          id: "contrast", sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "The author most likely includes sentence 2 in order to —",
          choices: [
            { letter: "A", text: "set up a contrast with how Iron Man handles exposition" },
            { letter: "B", text: "explain why Iron Man is full of long speeches" },
            { letter: "C", text: "criticize the way Iron Man's opening scene is filmed" },
            { letter: "D", text: "define the word speech for the reader" }
          ],
          correct: "A"
        },
        {
          id: "support", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which sentence best supports the claim in sentence 3 that Iron Man \"handles it quickly\"?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-ironman-icing",
      family: "LIT",
      genre: "BADGOOD",
      episode: "ironman",
      title: "The Icing Problem",
      kind: "Film analysis · 11.RL",
      blurb: "Setup and payoff: details planted early that win the final battle.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Screenwriters use a technique called setup and payoff. " +
        N(2) + "Early in a story, a detail is planted; later, it returns at the moment it matters most. " +
        N(3) + "Iron Man is full of them. " +
        N(4) + "On Tony's first high-altitude test flight, his new suit ices over and nearly sends him crashing down. " +
        N(5) + "Back in his workshop, he solves the icing problem by building his next suit from a different metal. " +
        N(6) + "In the final battle, his rival, in a huge suit built from Tony's stolen designs, chases him into the freezing sky, where ice brings the rival down. " +
        N(7) + "Another setup is quieter. " +
        N(8) + "Pepper Potts, Tony's assistant, mounts his first arc reactor in a glass case as a gift. " +
        N(9) + "It looks like a simple keepsake. " +
        N(10) + "Yet when the rival tears the newer reactor from Tony's chest, the old one saves his life. " +
        N(11) + "Because each payoff was planted earlier, the twists feel earned rather than lucky." +
        "</p>",
      claims: [
        {
          id: "define", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentences 1–2, *setup and payoff* means —",
          choices: [
            { letter: "A", text: "planting a detail early that matters later" },
            { letter: "B", text: "paying the actors after filming is done" },
            { letter: "C", text: "setting up the camera before each shot" },
            { letter: "D", text: "ending with a surprise no one could predict" }
          ],
          correct: "A"
        },
        {
          id: "trace", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence sets up the payoff described in sentence 6?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "earned", sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "In sentence 11, the phrase \"earned rather than lucky\" suggests that the twists —",
          choices: [
            { letter: "A", text: "were added to the script at the last minute" },
            { letter: "B", text: "cost the studio a great deal of money" },
            { letter: "C", text: "surprise viewers with no warning at all" },
            { letter: "D", text: "were prepared for by details shown earlier" }
          ],
          correct: "D"
        },
        {
          id: "shift", sol: "11.RL.1.B", sub: "11.RL.1.B.1",
          stem: "Sentence 7 mainly serves to —",
          choices: [
            { letter: "A", text: "conclude the passage" },
            { letter: "B", text: "shift to a second, less dramatic example" },
            { letter: "C", text: "introduce Tony's rival for the first time" },
            { letter: "D", text: "describe the end of the final battle" }
          ],
          correct: "B"
        },
        {
          id: "keepsake", sol: "11.RL.2.D", sub: "11.RL.2.D.2",
          stem: "What makes the payoff in sentence 10 ironic?",
          choices: [
            { letter: "A", text: "Tony's rival is the one who built the old reactor." },
            { letter: "B", text: "An object that seemed only a keepsake saves a life." },
            { letter: "C", text: "The newer reactor was stronger than the old one." },
            { letter: "D", text: "Pepper meant the glass case to be a joke." }
          ],
          correct: "B"
        },
        {
          id: "rival", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "What does the rival's defeat in sentence 6 suggest about him?",
          choices: [
            { letter: "A", text: "He copied Tony's designs without learning Tony's lessons." },
            { letter: "B", text: "He is a more skillful pilot than Tony is." },
            { letter: "C", text: "He never truly wanted to win the battle." },
            { letter: "D", text: "He built his suit entirely from scratch." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-ironman-metal",
      family: "LIT",
      genre: "BADGOOD",
      episode: "ironman",
      title: "Metal You Can Touch",
      kind: "Film history · 11.RI",
      blurb: "Real suits, matching CGI and careful editing make the impossible look real.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "When Jon Favreau set out to direct Iron Man, he wanted audiences to believe that a man could build a flying suit of armor. " +
        N(2) + "His answer was to blend real objects with computer-generated imagery, or CGI, pictures created digitally and added to the film. " +
        N(3) + "Stan Winston Studio, a workshop known for the creatures and robots of earlier hits, built physical suits and suit pieces. " +
        N(4) + "The Mark I armor from the cave was a real, heavy costume that could actually be worn, so its dents and bolts catch the light the way real metal does." +
        "</p><p>" +
        N(5) + "For the sleek red-and-gold armor, the workshop built wearable pieces and full suits for close shots, while the effects company Industrial Light & Magic created digital versions for flying and fighting. " +
        N(6) + "Because the digital artists studied the real suits, their versions match the color, scratches and weight of the originals. " +
        N(7) + "Viewers rarely notice where the actual metal ends and the computer begins." +
        "</p><p>" +
        N(8) + "The editing protects that illusion. " +
        N(9) + "Continuity stays tight: lighting, props and injuries remain consistent from shot to shot, so nothing jolts viewers out of the story. " +
        N(10) + "The blue glow of the arc reactor in Tony's chest, for example, becomes a steady light in dark scenes. " +
        N(11) + "Fight scenes often cut on action, switching angles in the middle of a punch or a blast so that the motion carries the eye across the cut. " +
        N(12) + "The film's effects work was nominated for an Academy Award. " +
        N(13) + "More important, it lets viewers stop thinking about the effects and start caring about the man inside the suit." +
        "</p>",
      claims: [
        {
          id: "central", sol: "11.RI.1.A", sub: "11.RI.1.A.2",
          stem: "Which statement best states the central idea of the passage?",
          choices: [
            { letter: "A", text: "Real suits, matching CGI and careful editing make the armor believable." },
            { letter: "B", text: "Stan Winston Studio created every effect in Iron Man by itself." },
            { letter: "C", text: "Iron Man relied only on computers to create its suits of armor." },
            { letter: "D", text: "Iron Man's editing mattered more to the film than its effects." }
          ],
          correct: "A"
        },
        {
          id: "cgi", sol: "11.RI.2.B", sub: "11.RI.2.B.1",
          stem: "According to sentence 2, CGI is —",
          choices: [
            { letter: "A", text: "a light metal used to build armor" },
            { letter: "B", text: "a camera that can film in the dark" },
            { letter: "C", text: "pictures made by computer for a film" },
            { letter: "D", text: "a workshop that builds robots" }
          ],
          correct: "C"
        },
        {
          id: "cut-on-action", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Based on sentence 11, *cutting on action* means —",
          choices: [
            { letter: "A", text: "removing violent scenes from a film" },
            { letter: "B", text: "changing shots in the middle of a movement" },
            { letter: "C", text: "stopping the camera when an actor slips" },
            { letter: "D", text: "dropping a scene because it runs too long" }
          ],
          correct: "B"
        },
        {
          id: "dents", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "How does the detail about dents and bolts in sentence 4 support the author's point?",
          choices: [
            { letter: "A", text: "It shows that the Mark I was cheap to make." },
            { letter: "B", text: "It explains why the suit was hard to wear." },
            { letter: "C", text: "It proves the cave was filmed outdoors." },
            { letter: "D", text: "It shows that a physical suit looks real." }
          ],
          correct: "D"
        },
        {
          id: "para3", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "How does the third paragraph build on the first two?",
          choices: [
            { letter: "A", text: "It shows that editing also protects the illusion the suits create." },
            { letter: "B", text: "It argues that the physical suits were not needed after all." },
            { letter: "C", text: "It retells the plot of the film from beginning to end." },
            { letter: "D", text: "It describes how the digital armor was programmed." }
          ],
          correct: "A"
        },
        {
          id: "value", sol: "11.RI.1.C", sub: "11.RI.1.C.2",
          stem: "The final sentence suggests that the author most values effects that —",
          choices: [
            { letter: "A", text: "win awards above all else" },
            { letter: "B", text: "show off how much they cost" },
            { letter: "C", text: "serve the story without drawing notice" },
            { letter: "D", text: "make good actors unnecessary" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-ironman-arc",
      family: "LIT",
      genre: "BADGOOD",
      episode: "ironman",
      title: "From Arms Dealer to Hero",
      kind: "Film analysis · 11.RL",
      blurb: "A character arc, a risky casting choice and the film that launched a universe.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Iron Man, directed by Jon Favreau and released in 2008, tells a story as old as storytelling: a proud man is brought low and comes back changed. " +
        N(2) + "At the start, Tony Stark is brilliant, rich and selfish. " +
        N(3) + "His company builds weapons, he sells them by the thousands, and he never asks where they end up. " +
        N(4) + "He is late to everything and serious about nothing." +
        "</p><p>" +
        N(5) + "Captivity in Afghanistan breaks that pattern. " +
        N(6) + "Wounded by one of his own company's weapons and ordered to build a missile for his captors, Tony discovers that his products have fallen into the wrong hands. " +
        N(7) + "His fellow prisoner, Yinsen, urges him not to waste his life, then gives up his own so that Tony can escape. " +
        N(8) + "Back home, Tony's first public act is to announce that Stark Industries will stop making weapons. " +
        N(9) + "The film shows the change through choices rather than speeches: he refuses to go to the hospital, asks for a cheeseburger, and then stuns a room full of reporters." +
        "</p><p>" +
        N(10) + "The writing keeps the change believable by giving Tony a clear motive. " +
        N(11) + "He has seen what his weapons do, and he feels responsible. " +
        N(12) + "Each suit he builds in his workshop is a step in that arc, from the crude Mark I to the sleek red-and-gold armor. " +
        N(13) + "Even his flaws remain: he is still vain, still impatient and still quick with a joke, and he still loves to show off his inventions. " +
        N(14) + "A hero who changes completely overnight would feel false; a hero who changes his purpose but keeps his personality feels human." +
        "</p><p>" +
        N(15) + "Robert Downey Jr. makes that personality work. " +
        N(16) + "At the time, many considered him a risky choice, an actor whose career had stalled after years of personal troubles, and Favreau had to fight to cast him. " +
        N(17) + "Downey speaks quickly, interrupts himself and seems to think aloud. " +
        N(18) + "Favreau also encouraged the cast to improvise lines on the set. " +
        N(19) + "The result sounds like real people talking, the opposite of performers reciting from cue cards. " +
        N(20) + "Audiences noticed a parallel as well: an actor making a comeback was playing a man rebuilding his life." +
        "</p><p>" +
        N(21) + "Pacing holds the arc together. " +
        N(22) + "The story moves from cave to workshop to battle without lingering, yet it slows down for small moments, such as Tony's first joyful test flight over the coast or a quiet dance with his assistant, Pepper Potts. " +
        N(23) + "Those pauses let viewers enjoy the character, not just the explosions." +
        "</p><p>" +
        N(24) + "Iron Man earned strong reviews and made more than half a billion dollars around the world. " +
        N(25) + "In a brief scene after the credits, an agent named Nick Fury visits Tony to talk about a team of heroes. " +
        N(26) + "That scene launched what became the Marvel Cinematic Universe, a long series of connected films. " +
        N(27) + "Iron Man helped convince studios and audiences that a superhero film built on character, not only spectacle, could anchor an entire series." +
        "</p>",
      claims: [
        {
          id: "pattern", sol: "11.RL.3.B", sub: "11.RL.3.B.1",
          stem: "Sentence 1 connects Iron Man to which traditional story pattern?",
          choices: [
            { letter: "A", text: "a proud figure who falls and returns changed" },
            { letter: "B", text: "a long quest to find a lost treasure" },
            { letter: "C", text: "a child raised in the wild who grows up" },
            { letter: "D", text: "a bitter contest between two brothers" }
          ],
          correct: "A"
        },
        {
          id: "traits", sol: "11.RL.1.C", sub: "11.RL.1.C.1",
          stem: "Which words best describe Tony at the start of the film, according to the first paragraph?",
          choices: [
            { letter: "A", text: "humble and careful" },
            { letter: "B", text: "brilliant and selfish" },
            { letter: "C", text: "poor and determined" },
            { letter: "D", text: "shy and kind" }
          ],
          correct: "B"
        },
        {
          id: "choices", sol: "11.RL.1.C", sub: "11.RL.1.C.2",
          stem: "According to sentence 9, how does the film reveal Tony's change?",
          choices: [
            { letter: "A", text: "through a narrator who explains his feelings" },
            { letter: "B", text: "through long speeches to other characters" },
            { letter: "C", text: "through his actions after he returns home" },
            { letter: "D", text: "through flashbacks to his childhood" }
          ],
          correct: "C"
        },
        {
          id: "same-tony", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which TWO details support the author's point that Tony keeps his personality even as his purpose changes? Select TWO.",
          choices: [
            { letter: "A", text: "He is still vain and impatient." },
            { letter: "B", text: "He stops his company from making weapons." },
            { letter: "C", text: "He still loves to show off his inventions." },
            { letter: "D", text: "He feels responsible for what his weapons do." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "para4", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "How does the fourth paragraph (sentences 15–20) contribute to the author's analysis?",
          choices: [
            { letter: "A", text: "It summarizes the plot of the final battle." },
            { letter: "B", text: "It argues that Downey was the wrong choice." },
            { letter: "C", text: "It explains how the suits were designed." },
            { letter: "D", text: "It shows how the acting makes Tony believable." }
          ],
          correct: "D"
        },
        {
          id: "parallel", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word *parallel* most nearly means —",
          choices: [
            { letter: "A", text: "a pair of lines that never meet" },
            { letter: "B", text: "a likeness between two situations" },
            { letter: "C", text: "a contest between two rivals" },
            { letter: "D", text: "a mistake that appears twice" }
          ],
          correct: "B"
        },
        {
          id: "view", sol: "11.RL.2.B", sub: "11.RL.2.B.2",
          stem: "Which statement best expresses the author's viewpoint in sentence 14?",
          choices: [
            { letter: "A", text: "Heroes must change completely to be believable." },
            { letter: "B", text: "Audiences dislike characters who have flaws." },
            { letter: "C", text: "Change rings truer when the personality stays." },
            { letter: "D", text: "Personality matters far less than plot." }
          ],
          correct: "C"
        },
        {
          id: "history", sol: "11.RL.3.A", sub: "11.RL.3.A.1",
          stem: "According to the last paragraph, why does Iron Man matter in film history?",
          choices: [
            { letter: "A", text: "It was the first film to use computer effects." },
            { letter: "B", text: "It was the first movie Downey ever appeared in." },
            { letter: "C", text: "It won the Academy Award for Best Picture." },
            { letter: "D", text: "It launched a long series of connected films." }
          ],
          correct: "D"
        }
      ]
    },

    /* ═════════════════ EPISODE badgood — the basics: four lenses, critics, cult films, paired texts ═════════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-badgood-four-lenses",
      family: "LIT",
      genre: "BADGOOD",
      episode: "badgood",
      title: "Four Lenses",
      kind: "Film language · 11.RV",
      blurb: "Writing, acting, editing and moviemaking: four ways to judge a film.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "When a class judges a film, it can look through four lenses. " +
        N(2) + "<strong>Writing</strong> covers the story, the characters and the lines they speak. " +
        N(3) + "<strong>Acting</strong> covers how believably the performers deliver those lines. " +
        N(4) + "<strong>Editing</strong> covers how the shots are cut together, including continuity and pace. " +
        N(5) + "<strong>Moviemaking</strong> covers everything built or captured for the camera: sets, props, lighting, costumes and special effects. " +
        N(6) + "A cardboard gravestone that wobbles when an actor bumps it is a moviemaking problem. " +
        N(7) + "A line that says the same thing twice is a writing problem." +
        "</p>",
      claims: [
        {
          id: "pace", sol: "11.RV.1.A", sub: "11.RV.1.A.2",
          stem: "Using the passage's terms, a scene that drags on far too long is mainly a problem of —",
          choices: [
            { letter: "A", text: "writing" },
            { letter: "B", text: "acting" },
            { letter: "C", text: "editing" },
            { letter: "D", text: "moviemaking" }
          ],
          correct: "C"
        },
        {
          id: "acting", sol: "11.RI.2.B", sub: "11.RI.2.B.2",
          stem: "Which problem would fall under the acting lens?",
          choices: [
            { letter: "A", text: "a costume with a torn sleeve" },
            { letter: "B", text: "a performer who says every line flatly" },
            { letter: "C", text: "a story with no clear ending" },
            { letter: "D", text: "a cut that makes a car jump ahead" }
          ],
          correct: "B"
        },
        {
          id: "examples", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "The author includes sentences 6 and 7 mainly to —",
          choices: [
            { letter: "A", text: "show how the lenses apply to real flaws" },
            { letter: "B", text: "argue that writing matters most of all" },
            { letter: "C", text: "describe a scene from a horror film" },
            { letter: "D", text: "introduce a fifth lens for judging films" }
          ],
          correct: "A"
        },
        {
          id: "lenses", sol: "11.RV.1.F", sub: "11.RV.1.F.1",
          stem: "In sentence 1, the word *lenses* is used figuratively to mean —",
          choices: [
            { letter: "A", text: "pieces of curved glass" },
            { letter: "B", text: "cameras used on a set" },
            { letter: "C", text: "eyeglasses for viewers" },
            { letter: "D", text: "ways of looking at a film" }
          ],
          correct: "D"
        },
        {
          id: "costume", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence tells under which lens a problem with a costume would be judged?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-badgood-so-bad",
      family: "LIT",
      genre: "BADGOOD",
      episode: "badgood",
      title: "So Bad It's Good",
      kind: "Film history · 11.RI",
      blurb: "Why a few terrible movies become cult favorites.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Most bad movies are simply forgotten. " +
        N(2) + "A few become cult films, movies that draw a small but devoted following long after their release. " +
        N(3) + "Some are cult hits because they are daring or strange. " +
        N(4) + "Others are loved because they are so bad they're good. " +
        N(5) + "Their mistakes are so sincere and so frequent that watching them becomes a party. " +
        N(6) + "Fans call out at the screen, count the goofs and trade favorite lines. " +
        N(7) + "Plan 9 from Outer Space is the classic case: ignored in 1959, it is still screened and celebrated today." +
        "</p>",
      claims: [
        {
          id: "devoted", sol: "11.RV.1.B", sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *devoted* most nearly means —",
          choices: [
            { letter: "A", text: "loyal and enthusiastic" },
            { letter: "B", text: "small and quiet" },
            { letter: "C", text: "angry and critical" },
            { letter: "D", text: "paid and professional" }
          ],
          correct: "A"
        },
        {
          id: "paradox", sol: "11.RI.2.C", sub: "11.RI.2.C.1",
          stem: "The phrase \"so bad they're good\" in sentence 4 is an example of —",
          choices: [
            { letter: "A", text: "a simile" },
            { letter: "B", text: "a paradox" },
            { letter: "C", text: "an allusion" },
            { letter: "D", text: "a metaphor" }
          ],
          correct: "B"
        },
        {
          id: "summary", sol: "11.RI.1.A", sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes this short article?",
          choices: [
            { letter: "A", text: "All bad movies eventually become cult films." },
            { letter: "B", text: "Plan 9 was a hit when it was first released." },
            { letter: "C", text: "Some films are loved because their sincere flaws make watching fun." },
            { letter: "D", text: "Cult films are always daring and strange." }
          ],
          correct: "C"
        },
        {
          id: "difference", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "According to sentence 5, what turns a bad film into a \"so bad it's good\" film?",
          choices: [
            { letter: "A", text: "a very large budget" },
            { letter: "B", text: "a cast of famous actors" },
            { letter: "C", text: "a daring, strange story" },
            { letter: "D", text: "frequent, sincere mistakes" }
          ],
          correct: "D"
        },
        {
          id: "function", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "Sentence 7 functions mainly as —",
          choices: [
            { letter: "A", text: "a counterclaim" },
            { letter: "B", text: "an example of the idea" },
            { letter: "C", text: "a definition of a term" },
            { letter: "D", text: "a summary of a plot" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── SHORT (levels 1–2) ───────────── */
    {
      id: "lit-badgood-critics",
      family: "LIT",
      genre: "BADGOOD",
      episode: "badgood",
      title: "How a Critic Judges",
      kind: "Film review · 11.RI",
      blurb: "Claims, evidence, purpose, context and comparison.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "A film critic does more than announce whether a movie is good. " +
        N(2) + "A strong review makes a claim and backs it up with evidence from the film. " +
        N(3) + "Writing \"the acting is bad\" states an opinion; describing an actor whose eyes keep drifting to a hidden teleprompter offers evidence. " +
        N(4) + "Critics also judge a film by what it is trying to do. " +
        N(5) + "A comedy should be measured by its laughs and a thriller by its suspense. " +
        N(6) + "Fair critics consider context, too. " +
        N(7) + "A low-budget film from 1959 cannot be expected to match the effects of a modern blockbuster, though its writing and acting, which depend less on money, can still be judged. " +
        N(8) + "Finally, critics compare. " +
        N(9) + "Placing a film beside others in its genre shows what it does well and what it does poorly. " +
        N(10) + "Judging a film, in short, means reasoning about it, not just reacting to it." +
        "</p>",
      claims: [
        {
          id: "central", sol: "11.RI.1.A", sub: "11.RI.1.A.2",
          stem: "What is the central idea of the passage?",
          choices: [
            { letter: "A", text: "Good critics reason with evidence, purpose, context and comparison." },
            { letter: "B", text: "Critics should review only comedies and thrillers." },
            { letter: "C", text: "Low-budget films can never be judged fairly." },
            { letter: "D", text: "A critic's main job is to give a film a score." }
          ],
          correct: "A"
        },
        {
          id: "evidence", sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Based on sentence 3, which statement from a review offers evidence rather than only an opinion?",
          choices: [
            { letter: "A", text: "This movie is terrible from start to finish." },
            { letter: "B", text: "The hero's voice stays flat even as his house burns." },
            { letter: "C", text: "I did not enjoy a single minute of this film." },
            { letter: "D", text: "The acting in this film is simply bad." }
          ],
          correct: "B"
        },
        {
          id: "signals", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "Which words in the passage signal that it is organized as a list of criteria?",
          choices: [
            { letter: "A", text: "more than, whether" },
            { letter: "B", text: "should, cannot" },
            { letter: "C", text: "in short, not just" },
            { letter: "D", text: "also, too, finally" }
          ],
          correct: "D"
        },
        {
          id: "why-context", sol: "11.RI.2.B", sub: "11.RI.2.B.2",
          stem: "According to sentence 7, why should critics consider context?",
          choices: [
            { letter: "A", text: "so they can excuse every flaw in an old film" },
            { letter: "B", text: "so they can give blockbusters higher grades" },
            { letter: "C", text: "so they judge each film by fair standards" },
            { letter: "D", text: "so they can avoid writing about acting" }
          ],
          correct: "C"
        },
        {
          id: "context", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "As used in sentence 6, *context* refers to —",
          choices: [
            { letter: "A", text: "the conditions in which a film was made" },
            { letter: "B", text: "the words printed on a film's poster" },
            { letter: "C", text: "the order in which a film's scenes appear" },
            { letter: "D", text: "the music that plays during a film" }
          ],
          correct: "A"
        },
        {
          id: "apply", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "A critic writes that Iron Man's armor looks real \"because the physical suit and the digital one match in color and scratches.\" The critic is mainly —",
          choices: [
            { letter: "A", text: "stating an opinion with no support" },
            { letter: "B", text: "comparing the film to others in its genre" },
            { letter: "C", text: "excusing the film because of its budget" },
            { letter: "D", text: "supporting a claim with evidence" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-badgood-two-takes",
      family: "LIT",
      genre: "BADGOOD",
      episode: "badgood",
      title: "Two Quick Takes",
      kind: "Paired texts · 11.DSR",
      blurb: "Two short reviews: one of Plan 9, one of Iron Man.",
      level: 2,
      passage:
        "<p><strong>Text 1 — A Review of Plan 9 from Outer Space</strong></p>" +
        "<p>" +
        N(1) + "Plan 9 from Outer Space wants to terrify us with aliens and walking corpses, but it rarely gets past giggles. " +
        N(2) + "Its narrator reads his lines as if seeing them for the first time. " +
        N(3) + "Its flying saucers sway on strings, and its nights keep turning into afternoons. " +
        N(4) + "Its dialogue explains the obvious and then explains it again. " +
        N(5) + "Even so, I laughed harder than at most comedies. " +
        N(6) + "My grade: a failure as science fiction, a success as an accidental party." +
        "</p>" +
        "<p><strong>Text 2 — A Review of Iron Man</strong></p>" +
        "<p>" +
        N(7) + "Iron Man succeeds where many effects-heavy films fail: it makes us care about the person inside the machine. " +
        N(8) + "Robert Downey Jr. plays Tony Stark with quick, unforced wit, as if he is thinking up each line on the spot. " +
        N(9) + "The script plants small details early and pays them off in the climax. " +
        N(10) + "The armor, part real and part digital, never looks like a toy. " +
        N(11) + "My grade: a confident science fiction story that earns its spectacle." +
        "</p>",
      claims: [
        {
          id: "shared", sol: "11.DSR.D", sub: "11.DSR.D.2",
          stem: "Which idea do BOTH reviewers seem to share?",
          choices: [
            { letter: "A", text: "A film's effects matter more than its story." },
            { letter: "B", text: "Comedies are better than science fiction." },
            { letter: "C", text: "Only expensive films are worth watching." },
            { letter: "D", text: "Science fiction should make viewers believe." }
          ],
          correct: "D"
        },
        {
          id: "differ", sol: "11.RI.3.A", sub: "11.RI.3.A.1",
          stem: "How do the reviewers' overall judgments differ?",
          choices: [
            { letter: "A", text: "Text 1 is entirely negative, while Text 2 is mixed." },
            { letter: "B", text: "Both reviewers dislike the films they watched." },
            { letter: "C", text: "Text 1 enjoys a film it calls a failure; Text 2 praises a success." },
            { letter: "D", text: "Text 2 likes the acting but criticizes the armor." }
          ],
          correct: "C"
        },
        {
          id: "props", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence in Text 1 gives evidence about Plan 9's moviemaking, such as its props and effects?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "writing-two", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which TWO sentences judge the films' writing? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "party", sol: "11.RI.2.C", sub: "11.RI.2.C.2",
          stem: "The phrase \"an accidental party\" in sentence 6 suggests that the film —",
          choices: [
            { letter: "A", text: "is fun for reasons its makers never intended" },
            { letter: "B", text: "was written from the start as a comedy" },
            { letter: "C", text: "was shown mainly at birthday parties" },
            { letter: "D", text: "includes several scenes set at a party" }
          ],
          correct: "A"
        },
        {
          id: "unforced", sol: "11.RV.1.C", sub: "11.RV.1.C.1",
          stem: "The prefix in *unforced* (sentence 8) helps show that Downey's wit seems —",
          choices: [
            { letter: "A", text: "strained and difficult" },
            { letter: "B", text: "repeated too often" },
            { letter: "C", text: "natural and easy" },
            { letter: "D", text: "hidden from viewers" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-badgood-believable",
      family: "LIT",
      genre: "BADGOOD",
      episode: "badgood",
      title: "Making the Impossible Believable",
      kind: "Paired texts · 11.DSR",
      blurb: "Saucers on strings vs. armor built step by step: two science fiction films.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Strings Showing</strong></p>" +
        "<p>" +
        N(1) + "Science fiction asks audiences to accept something impossible, so it must work twice as hard to seem real. " +
        N(2) + "Plan 9 from Outer Space asks us to believe in aliens who raise the dead with electrical beams. " +
        N(3) + "That premise is no sillier than the plots of many beloved films, but this film gives viewers nothing solid to hold on to. " +
        N(4) + "Its flying saucers are plastic model kits dangling from strings that catch the light. " +
        N(5) + "Its spaceship interior is a plain, sparsely furnished set that looks nothing like a craft from another world. " +
        N(6) + "Its alien explains solaranite, a weapon that could explode sunlight, in a lecture so muddled that the threat never becomes clear. " +
        N(7) + "Even its graveyard keeps switching between night and day. " +
        N(8) + "Each weak detail invites viewers to stop believing, and once they stop believing, they start laughing." +
        "</p>" +
        "<p><strong>Text 2 — Built Step by Step</strong></p>" +
        "<p>" +
        N(9) + "Iron Man asks for just as large a leap: a man builds a flying suit of armor, first in a cave and then in his workshop at home. " +
        N(10) + "The film earns that leap one step at a time. " +
        N(11) + "Tony's first suit is crude, heavy and loud, assembled from scrap, and it barely works. " +
        N(12) + "Back home, he tests each new part, fails, adjusts and tries again, and the audience watches the trial and error. " +
        N(13) + "The finished armor blends wearable pieces built by Stan Winston Studio with computer effects matched to them. " +
        N(14) + "Even the arc reactor glowing in Tony's chest begins as a medical device that keeps metal fragments away from his heart. " +
        N(15) + "Because each impossible thing is grounded in rules we have watched him learn, viewers keep believing, and they keep caring." +
        "</p>",
      claims: [
        {
          id: "shared", sol: "11.DSR.D", sub: "11.DSR.D.2",
          stem: "Which idea is central to BOTH texts?",
          choices: [
            { letter: "A", text: "Science fiction must avoid impossible ideas." },
            { letter: "B", text: "Believable details help viewers accept the impossible." },
            { letter: "C", text: "Expensive films are always better than cheap ones." },
            { letter: "D", text: "Aliens are harder to film than suits of armor." }
          ],
          correct: "B"
        },
        {
          id: "differ", sol: "11.RI.3.A", sub: "11.RI.3.A.1",
          stem: "How does Text 1's approach differ from Text 2's?",
          choices: [
            { letter: "A", text: "Text 1 shows details that break belief; Text 2 shows details that build it." },
            { letter: "B", text: "Text 1 praises the film it discusses; Text 2 criticizes its film." },
            { letter: "C", text: "Text 1 focuses on the acting; Text 2 focuses on the music." },
            { letter: "D", text: "Text 1 compares two films; Text 2 discusses only a single film." }
          ],
          correct: "A"
        },
        {
          id: "step", sol: "11.DSR.C", sub: "11.DSR.C.3",
          stem: "Which sentence from Text 2 best supports the claim that the film earns its leap \"one step at a time\"?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "grounded", sol: "11.RV.1.F", sub: "11.RV.1.F.1",
          stem: "In sentence 15, the word *grounded* is used figuratively to mean —",
          choices: [
            { letter: "A", text: "punished and kept at home" },
            { letter: "B", text: "connected to the earth by a wire" },
            { letter: "C", text: "unable to leave the ground" },
            { letter: "D", text: "firmly based on" }
          ],
          correct: "D"
        },
        {
          id: "agree-two", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which TWO statements would BOTH authors most likely agree with? Select TWO.",
          choices: [
            { letter: "A", text: "A strange premise can work if its details convince." },
            { letter: "B", text: "A large budget guarantees believable effects." },
            { letter: "C", text: "When details look fake, viewers stop believing." },
            { letter: "D", text: "Science fiction should stick to realistic events." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "echo", sol: "11.RI.2.A", sub: "11.RI.2.A.2",
          stem: "How does sentence 9 connect Text 2 to Text 1?",
          choices: [
            { letter: "A", text: "It disagrees with Text 1's claim about saucers." },
            { letter: "B", text: "It summarizes Text 1's view of the aliens." },
            { letter: "C", text: "It introduces a film that is not science fiction." },
            { letter: "D", text: "It echoes Text 1's idea that science fiction asks for a leap." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-badgood-four-questions",
      family: "LIT",
      genre: "BADGOOD",
      episode: "badgood",
      title: "The Same Four Questions",
      kind: "Film review · 11.RI",
      blurb: "Plan 9 and Iron Man judged side by side on writing, acting, editing and moviemaking.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Put Plan 9 from Outer Space beside Iron Man, and the two seem to have little in common. " +
        N(2) + "One was made in the 1950s on a shoestring by a director who did nearly every job himself; the other was a 2008 studio film with a budget of well over a hundred million dollars. " +
        N(3) + "Yet both are science fiction stories about dangerous technology, and both can be judged by the same four questions: How strong is the writing? The acting? The editing? The moviemaking?" +
        "</p><p>" +
        N(4) + "Start with writing. " +
        N(5) + "Plan 9's narrator opens by warning that future events will affect us in the future, and its characters often explain what viewers have just watched. " +
        N(6) + "Iron Man's script, by contrast, plants details early and pays them off later, so that a freezing test flight in the middle of the film decides its final battle. " +
        N(7) + "Its hero also changes for a reason viewers witness: he is wounded by a weapon his own company made." +
        "</p><p>" +
        N(8) + "Next, consider acting. " +
        N(9) + "In Plan 9, the narrator's eyes track a teleprompter, and a stand-in for the late Bela Lugosi hides his face behind a cape. " +
        N(10) + "Robert Downey Jr., given room to improvise, makes Tony Stark sound as though he is inventing each line as he says it." +
        "</p><p>" +
        N(11) + "Editing may show the clearest difference. " +
        N(12) + "Plan 9 cuts from night to day and back within a single scene and drops in grainy stock footage that does not match. " +
        N(13) + "Iron Man keeps lighting and details consistent and often cuts in the middle of a movement, so the eye follows the action instead of noticing the cut." +
        "</p><p>" +
        N(14) + "Finally, look at the moviemaking. " +
        N(15) + "Plan 9's saucers sway on strings, and its gravestones wobble. " +
        N(16) + "Iron Man's armor was partly built for real by Stan Winston Studio and partly created by computer, and the two versions match so closely that viewers rarely see the seam." +
        "</p><p>" +
        N(17) + "Some will object that the comparison is unfair because money explains everything. " +
        N(18) + "Money does explain the saucers. " +
        N(19) + "It does not explain a line that repeats itself, an actor reading from a screen or a scene that cannot decide whether it is day or night. " +
        N(20) + "Clear writing, careful editing and natural acting depend far more on skill and attention than on dollars." +
        "</p><p>" +
        N(21) + "Strangely, Plan 9 is still watched, quoted and loved, while many competent films of its decade are forgotten. " +
        N(22) + "That does not make it good. " +
        N(23) + "It makes it a perfect teacher: by showing nearly every way a film can fail, it helps viewers see what a film like Iron Man gets right." +
        "</p>",
      claims: [
        {
          id: "claim", sol: "11.RI.1.C", sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the author's central claim?",
          choices: [
            { letter: "A", text: "Iron Man is better only because it cost more to make." },
            { letter: "B", text: "Judged by four lenses, Iron Man succeeds where Plan 9 fails." },
            { letter: "C", text: "Plan 9 is secretly a better film than Iron Man." },
            { letter: "D", text: "Films from different eras can never be compared." }
          ],
          correct: "B"
        },
        {
          id: "organize", sol: "11.RI.2.A", sub: "11.RI.2.A.1",
          stem: "How are the second through fifth paragraphs organized?",
          choices: [
            { letter: "A", text: "by lens, comparing both films under each one" },
            { letter: "B", text: "by film, all of Plan 9 and then all of Iron Man" },
            { letter: "C", text: "in time order, from the 1950s to 2008" },
            { letter: "D", text: "as one problem followed by one solution" }
          ],
          correct: "A"
        },
        {
          id: "counter", sol: "11.RI.1.C", sub: "11.RI.1.C.2",
          stem: "How does the author respond to the counterclaim in sentence 17?",
          choices: [
            { letter: "A", text: "by rejecting it completely" },
            { letter: "B", text: "by agreeing that money explains everything" },
            { letter: "C", text: "by granting that money explains some flaws, but not most" },
            { letter: "D", text: "by changing the subject to cult films" }
          ],
          correct: "C"
        },
        {
          id: "not-money", sol: "11.DSR.C", sub: "11.DSR.C.1",
          stem: "Which TWO flaws does the author use as evidence that some problems are NOT caused by a small budget? Select TWO.",
          choices: [
            { letter: "A", text: "saucers swaying on strings" },
            { letter: "B", text: "a line of narration that repeats itself" },
            { letter: "C", text: "an actor reading his lines from a screen" },
            { letter: "D", text: "the cost of a modern studio film" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "shoestring", sol: "11.RV.1.E", sub: "11.RV.1.E.1",
          stem: "In sentence 2, the idiom *on a shoestring* means —",
          choices: [
            { letter: "A", text: "with very little money" },
            { letter: "B", text: "in a great hurry" },
            { letter: "C", text: "with a very large crew" },
            { letter: "D", text: "without any script" }
          ],
          correct: "A"
        },
        {
          id: "seam", sol: "11.RV.1.F", sub: "11.RV.1.F.1",
          stem: "In sentence 16, the word *seam* refers to —",
          choices: [
            { letter: "A", text: "a stitched edge on Tony's costume" },
            { letter: "B", text: "a scratch on the red-and-gold armor" },
            { letter: "C", text: "a cut between two different scenes" },
            { letter: "D", text: "the line where real and digital meet" }
          ],
          correct: "D"
        },
        {
          id: "teacher", sol: "11.RI.2.C", sub: "11.RI.2.C.2",
          stem: "Sentences 22 and 23 mainly serve to —",
          choices: [
            { letter: "A", text: "admit that Plan 9 is a good film after all" },
            { letter: "B", text: "argue that Plan 9 should no longer be shown" },
            { letter: "C", text: "compare Plan 9 with other films of its decade" },
            { letter: "D", text: "explain why a beloved flop is still worth studying" }
          ],
          correct: "D"
        },
        {
          id: "payoff", sol: "11.RV.1.A", sub: "11.RV.1.A.1",
          stem: "Which example from the essay shows the screenwriting technique called setup and payoff?",
          choices: [
            { letter: "A", text: "a test flight that later decides the final battle" },
            { letter: "B", text: "a narrator who says the same thing twice" },
            { letter: "C", text: "a stand-in who hides behind a cape" },
            { letter: "D", text: "an actor who improvises his lines" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
