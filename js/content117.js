/* SOL Labyrinth — Lit and Film (grades 11-12 elective, family LIT): FILM NOIR (genre NOIR).
 * Thirty original packs in five episodes of six: Detour (1945), Scarlet Street (1945), Double Indemnity (1944),
 * Casablanca (1942, "Noir or No?") and the genre's basics (noir). Each episode: 2 tiny, 2 short, 1 medium, 1 long.
 * Detour and Scarlet Street are in the US public domain, so their scenes are retold; Double Indemnity and
 * Casablanca are copyrighted, so they are only summarized and analyzed, with no film dialogue quoted.
 * Original text only. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ═════════════════════════════ DETOUR (1945) ═════════════════════════════ */
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-detour-jukebox",
      family: "LIT",
      genre: "NOIR",
      episode: "detour",
      title: "The Song on the Jukebox",
      kind: "Screen story · 11.RL",
      blurb: "A tired man in a Reno diner hears a love song and the past comes flooding back.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In a roadside diner in Reno, Nevada, a tired man named Al Roberts sits hunched over a cup of coffee. " +
        N(2) + "Another customer drops a coin in the jukebox, and a slow love song begins to play. " +
        N(3) + "Al reacts with sudden, sharp anger. " +
        N(4) + "The tune carries him back to New York, where he played piano in a nightclub while his girlfriend, Sue, sang that very song. " +
        N(5) + "The film slips into a flashback, and Al's voice, speaking over the pictures, begins to explain how he ended up in this diner." +
        "</p>",
      claims: [
        {
          id: "flashback-signal",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 5 mainly signals that the film will —",
          choices: [
            { letter: "A", text: "end with Al leaving the diner for Los Angeles" },
            { letter: "B", text: "show events that happened before the diner scene" },
            { letter: "C", text: "switch to Sue telling the story in her own words" },
            { letter: "D", text: "jump ahead to Al's future life in New York" }
          ],
          correct: "B"
        },
        {
          id: "anger",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Al's reaction in sentence 3 suggests that —",
          choices: [
            { letter: "A", text: "he wants to play the piano in the diner himself" },
            { letter: "B", text: "he dislikes the customer who chose the song" },
            { letter: "C", text: "the song stirs up painful memories for him" },
            { letter: "D", text: "he is too tired to enjoy any kind of music" }
          ],
          correct: "C"
        },
        {
          id: "flashback-term",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 5, a flashback in a film is —",
          choices: [
            { letter: "A", text: "a scene that shows events from an earlier time" },
            { letter: "B", text: "a quick cut to something happening elsewhere" },
            { letter: "C", text: "a shot taken from very high above the action" },
            { letter: "D", text: "a song that plays during the opening credits" }
          ],
          correct: "A"
        },
        {
          id: "past-job",
          sol: "11.DSR.B",
          sub: "11.DSR.B.1",
          stem: "According to sentence 4, what did Al once do in New York?",
          choices: [
            { letter: "A", text: "He drove trucks along western highways." },
            { letter: "B", text: "He cooked in a busy all-night diner." },
            { letter: "C", text: "He sang love songs in a crowded club." },
            { letter: "D", text: "He played piano in a nightclub." }
          ],
          correct: "D"
        },
        {
          id: "voiceover",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The detail that Al's voice speaks \"over the pictures\" describes which film technique?",
          choices: [
            { letter: "A", text: "a smash cut" },
            { letter: "B", text: "a split screen" },
            { letter: "C", text: "voiceover narration" },
            { letter: "D", text: "a tracking shot" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-detour-poverty-row",
      family: "LIT",
      genre: "NOIR",
      episode: "detour",
      title: "Made on Poverty Row",
      kind: "Film history · 11.RI",
      blurb: "A tiny studio, a tiny budget and a few days to shoot: how Detour got made.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Detour was made in 1945 by Producers Releasing Corporation, or PRC, one of the small, cheap studios that Hollywood called Poverty Row. " +
        N(2) + "Director Edgar G. Ulmer had a tiny budget, a handful of sets and only days to shoot. " +
        N(3) + "He turned those limits into a style. " +
        N(4) + "Deep shadows, dim rooms and tight close-ups hid how little money was on the screen. " +
        N(5) + "Today this low-budget B-movie is counted among the most famous noirs ever made." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "PRC was the largest studio in Hollywood in 1945." },
            { letter: "B", text: "Ulmer made a lasting film with very few resources." },
            { letter: "C", text: "Detour cost more to make than most B-movies did." },
            { letter: "D", text: "Close-ups were invented to hide cheap movie sets." }
          ],
          correct: "B"
        },
        {
          id: "poverty-row",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "As used in sentence 1, *Poverty Row* refers to —",
          choices: [
            { letter: "A", text: "small studios that made inexpensive films" },
            { letter: "B", text: "a street of theaters that showed old movies" },
            { letter: "C", text: "actors who agreed to work without being paid" },
            { letter: "D", text: "the cheapest seats in a large movie theater" }
          ],
          correct: "A"
        },
        {
          id: "limits",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the phrase *turned those limits into a style* means that Ulmer —",
          choices: [
            { letter: "A", text: "complained that his small budget hurt his art" },
            { letter: "B", text: "asked the studio for more sets and more actors" },
            { letter: "C", text: "used his shortages to create a distinctive look" },
            { letter: "D", text: "copied the style of bigger, costlier pictures" }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which sentence best supports the idea stated in sentence 3?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "purpose5",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author most likely includes sentence 5 to —",
          choices: [
            { letter: "A", text: "explain how PRC chose the directors it hired" },
            { letter: "B", text: "describe how B-movies were advertised in 1945" },
            { letter: "C", text: "argue that Detour should have cost much more" },
            { letter: "D", text: "show that the film's fame outlasted its budget" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-detour-haskell",
      family: "LIT",
      genre: "NOIR",
      episode: "detour",
      title: "The Driver Who Didn't Wake",
      kind: "Screen story · 11.RL",
      blurb: "A ride to California, a rainy night and a death that Al is sure no one will believe.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Hitchhiking west to marry Sue, Al gets a ride in Arizona from Charles Haskell, who is driving a convertible to Los Angeles. " +
        N(2) + "Haskell shows Al deep scratches on his hand, left by a woman hitchhiker he had picked up earlier. " +
        N(3) + "That night Haskell swallows some pills and falls asleep while Al takes the wheel. " +
        N(4) + "Rain begins to pour, so Al pulls over to raise the car's top. " +
        N(5) + "He tries to wake Haskell, but the man does not stir. " +
        N(6) + "When Al opens the passenger door, Haskell's body tumbles out, and his head strikes a rock. " +
        N(7) + "He is dead, though Al cannot tell whether the fall killed him. " +
        N(8) + "Al panics: who would believe a broke hitchhiker had not killed a man carrying so much cash? " +
        N(9) + "So he hides the body, takes Haskell's clothes, money and car, and drives on as someone else. " +
        N(10) + "Looking back, Al's narration blames fate." +
        "</p>",
      claims: [
        {
          id: "scratches",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The detail in sentence 2 most likely matters to the plot because it —",
          choices: [
            { letter: "A", text: "introduces a woman who may appear again later" },
            { letter: "B", text: "explains why Haskell needs Al to drive the car" },
            { letter: "C", text: "shows that Haskell is a careful, gentle driver" },
            { letter: "D", text: "proves that Al caused the scratches on Haskell" }
          ],
          correct: "A"
        },
        {
          id: "why-hide",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Based on sentence 8, Al hides the body mainly because he —",
          choices: [
            { letter: "A", text: "wants to steal the car before anyone sees him" },
            { letter: "B", text: "believes Haskell would have wanted him to drive on" },
            { letter: "C", text: "fears that no one will believe he is innocent" },
            { letter: "D", text: "plans to find the woman who scratched Haskell" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "Which statement best describes the irony of Al's situation?",
          choices: [
            { letter: "A", text: "He hitchhikes toward Los Angeles but never leaves Arizona." },
            { letter: "B", text: "He did not kill Haskell, yet his own choices make him look guilty." },
            { letter: "C", text: "He wants to marry Sue, but Haskell offers him a job instead." },
            { letter: "D", text: "He hates the rain, yet he chooses to drive through a storm." }
          ],
          correct: "B"
        },
        {
          id: "stir",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *stir* most nearly means —",
          choices: [
            { letter: "A", text: "speak clearly" },
            { letter: "B", text: "look around" },
            { letter: "C", text: "grow angry" },
            { letter: "D", text: "move at all" }
          ],
          correct: "D"
        },
        {
          id: "choices-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO actions show how Al's own choices deepen his trouble after Haskell dies? Select TWO.",
          choices: [
            { letter: "A", text: "He takes the wheel while Haskell sleeps." },
            { letter: "B", text: "He hides Haskell's body." },
            { letter: "C", text: "He pulls over to raise the car's top." },
            { letter: "D", text: "He takes Haskell's clothes and car." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "fate",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Sentence 10 points to which theme common in film noir?",
          choices: [
            { letter: "A", text: "Forces beyond a person's control can wreck a life." },
            { letter: "B", text: "Hard work is always rewarded in the end." },
            { letter: "C", text: "Strangers met on the road are usually kind." },
            { letter: "D", text: "Love is stronger than any run of bad luck." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-detour-vera",
      family: "LIT",
      genre: "NOIR",
      episode: "detour",
      title: "The Passenger",
      kind: "Screen story · 11.RL",
      blurb: "Al picks up a hitchhiker named Vera, and she already knows his secret.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Soon after, Al stops at a gas station and offers a ride to a young woman named Vera. " +
        N(2) + "At first she sits slumped against the door, and Al thinks she is only worn out from the road. " +
        N(3) + "Then, without warning, she turns and demands to know where he left the body of the car's owner. " +
        N(4) + "Vera knows the car belongs to Haskell, because she is the hitchhiker who scratched his hand. " +
        N(5) + "She does not believe Al's story for a second. " +
        N(6) + "Instead, she takes charge, threatening to turn him in to the police unless he does what she says. " +
        N(7) + "Ann Savage plays Vera with a voice like a slap, and many critics call her one of the harshest femmes fatales in film noir. " +
        N(8) + "Al is still the one driving the car, but he no longer controls where it goes." +
        "</p>",
      claims: [
        {
          id: "vera-trait",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which word best describes Vera as she is presented in sentences 3–6?",
          choices: [
            { letter: "A", text: "frightened" },
            { letter: "B", text: "gentle" },
            { letter: "C", text: "controlling" },
            { letter: "D", text: "confused" }
          ],
          correct: "C"
        },
        {
          id: "shock",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do sentences 2 and 3 work together?",
          choices: [
            { letter: "A", text: "A quiet moment sets up a sudden shock." },
            { letter: "B", text: "A flashback interrupts a scene in the diner." },
            { letter: "C", text: "A description of Vera explains her past." },
            { letter: "D", text: "A conflict is solved before it can begin." }
          ],
          correct: "A"
        },
        {
          id: "car-symbol",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Sentence 8 suggests that the car has come to stand for —",
          choices: [
            { letter: "A", text: "the wealth Al hopes to earn in Los Angeles" },
            { letter: "B", text: "Vera's wish to return home to her family" },
            { letter: "C", text: "the friendship growing between Al and Vera" },
            { letter: "D", text: "Al's loss of control over his own life" }
          ],
          correct: "D"
        },
        {
          id: "slap",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 7, the phrase *a voice like a slap* suggests that Vera speaks in a way that is —",
          choices: [
            { letter: "A", text: "soft and hesitant" },
            { letter: "B", text: "harsh and stinging" },
            { letter: "C", text: "cheerful and friendly" },
            { letter: "D", text: "slow and dreamy" }
          ],
          correct: "B"
        },
        {
          id: "femme-fatale",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on the passage, a *femme fatale* in film noir is best described as —",
          choices: [
            { letter: "A", text: "a dangerous woman who traps the hero" },
            { letter: "B", text: "a loyal friend who rescues the hero" },
            { letter: "C", text: "a singer who performs in nightclubs" },
            { letter: "D", text: "a detective who solves the crime" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-detour-narrator",
      family: "LIT",
      genre: "NOIR",
      episode: "detour",
      title: "A Narrator You Can't Trust",
      kind: "Film analysis · 11.RL",
      blurb: "Al Roberts swears fate is to blame. Should we believe him?",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Almost everything in Detour reaches us through the voice of Al Roberts. " +
        N(2) + "He tells the story in the past tense from that diner in Reno, and his tone is bitter, weary and soaked in self-pity. " +
        N(3) + "Again and again he insists that he is an ordinary man whom fate has singled out for punishment.</p>" +
        "<p>" + N(4) + "On the surface, the events he describes support his claim. " +
        N(5) + "Haskell dies in a freak accident. " +
        N(6) + "Later, in a Los Angeles apartment, a drunken Vera locks herself in a bedroom with the telephone and threatens to call the police. " +
        N(7) + "Al yanks the cord from the other side of the door, not knowing it has tangled around her neck, and she is strangled. " +
        N(8) + "Two deaths, and in Al's telling, neither one is his fault.</p>" +
        "<p>" + N(9) + "Yet the film quietly invites viewers to doubt him. " +
        N(10) + "We see only what Al chooses to remember, and a man in his position has every reason to shape the story in his own favor. " +
        N(11) + "Perhaps he is a victim of fate; perhaps he has repeated his excuses so often that he believes them. " +
        N(12) + "The film never settles the question. " +
        N(13) + "In the final moments, a police car pulls up beside Al as he walks along a dark road. " +
        N(14) + "Whether fate or justice has caught him, his journey is over." +
        "</p>",
      claims: [
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "According to paragraph 1, which words best describe the tone of Al's narration?",
          choices: [
            { letter: "A", text: "cheerful and hopeful" },
            { letter: "B", text: "bitter and self-pitying" },
            { letter: "C", text: "calm and scientific" },
            { letter: "D", text: "proud and boastful" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does paragraph 3 change the direction of the passage?",
          choices: [
            { letter: "A", text: "It moves from presenting Al's account to questioning it." },
            { letter: "B", text: "It moves from the film's plot to the actors' careers." },
            { letter: "C", text: "It moves from Haskell's death to Sue's life in Hollywood." },
            { letter: "D", text: "It moves from criticizing the film to praising it." }
          ],
          correct: "A"
        },
        {
          id: "unreliable",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The author suggests that Al may be an unreliable narrator mainly because —",
          choices: [
            { letter: "A", text: "he tells the whole story in the past tense" },
            { letter: "B", text: "he forgets the names of the other characters" },
            { letter: "C", text: "he narrates from a diner instead of a car" },
            { letter: "D", text: "he has strong reasons to make himself look innocent" }
          ],
          correct: "D"
        },
        {
          id: "uncertain-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO sentences best support the idea that the film leaves Al's guilt uncertain? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "yanks",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word *yanks* most nearly means —",
          choices: [
            { letter: "A", text: "pulls sharply" },
            { letter: "B", text: "cuts quietly" },
            { letter: "C", text: "ties tightly" },
            { letter: "D", text: "drops slowly" }
          ],
          correct: "A"
        },
        {
          id: "journey",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.2",
          stem: "Sentence 14 develops which idea about Al?",
          choices: [
            { letter: "A", text: "He will soon be reunited with Sue in Hollywood." },
            { letter: "B", text: "Whatever the cause, he cannot escape what he has done." },
            { letter: "C", text: "He has finally proven to everyone that he is innocent." },
            { letter: "D", text: "He is grateful to the police for finding him at last." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-detour-shoestring",
      family: "LIT",
      genre: "NOIR",
      episode: "detour",
      title: "Genius on a Shoestring",
      kind: "Film history · 11.RI",
      blurb: "How a B-movie from the bottom of Hollywood's ladder became one of noir's most famous films.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "In the 1940s, Hollywood had a ladder. " +
        N(2) + "At the top stood the major studios, such as MGM, Paramount and Warner Bros., with huge sound stages, famous stars under contract and budgets in the millions. " +
        N(3) + "At the bottom, on what the industry called Poverty Row, small companies like Producers Releasing Corporation (PRC) and Monogram turned out quick, cheap pictures. " +
        N(4) + "Many theaters then showed double features, two movies for one ticket, and Poverty Row's B-movies usually filled the second, less important slot. " +
        N(5) + "A B-movie was expected to fill an hour, not to win awards.</p>" +
        "<p>" + N(6) + "Edgar G. Ulmer knew both ends of the ladder. " +
        N(7) + "Before coming to America, he had worked in Germany's film industry in the 1920s, when German Expressionist films used twisted sets and harsh shadows to show troubled minds. " +
        N(8) + "In Hollywood, however, he spent much of his career at the bottom, where he earned a reputation as a director who could finish a picture quickly and cheaply.</p>" +
        "<p>" + N(9) + "Detour, released by PRC in 1945, was adapted by Martin Goldsmith from his own novel. " +
        N(10) + "Ulmer had only days to shoot it, a handful of actors and very few sets, and his two leads, Tom Neal as Al and Ann Savage as Vera, were hardly household names. " +
        N(11) + "The finished film runs barely more than an hour. " +
        N(12) + "Many scenes take place inside cars, diners or small rented rooms, and much of the road trip happens at night, when there is little to see beyond the next curve.</p>" +
        "<p>" + N(13) + "Instead of hiding these limits, Ulmer built the film around them. " +
        N(14) + "Darkness covered the missing scenery and made the world feel closed in. " +
        N(15) + "Al's bitter voiceover filled gaps in the story that the budget could not show, carrying viewers across whole states in a sentence or two. " +
        N(16) + "With so few characters, every meeting felt fated, as if the whole country held only Al and the people sent to ruin him. " +
        N(17) + "Even the open highway, a classic American symbol of freedom, became a trap with no exits.</p>" +
        "<p>" + N(18) + "Detour drew little notice from major critics in 1945. " +
        N(19) + "Over the following decades, however, critics and historians who studied film noir rediscovered it and praised its raw, desperate power, calling it proof that a great film does not need a great budget. " +
        N(20) + "In 1992 the Library of Congress added it to the National Film Registry, which preserves American films judged culturally, historically or aesthetically significant. " +
        N(21) + "The film is also in the public domain in the United States, so anyone can watch, copy or share it freely. " +
        N(22) + "The movie that was meant to fill an hour has outlasted many of the expensive pictures it once supported." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of the article?",
          choices: [
            { letter: "A", text: "Poverty Row studios made most of Hollywood's award-winning films." },
            { letter: "B", text: "A cheaply made B-movie used its limits to become a lasting classic." },
            { letter: "C", text: "Edgar G. Ulmer preferred working in Germany to working in Hollywood." },
            { letter: "D", text: "The National Film Registry includes only films from major studios." }
          ],
          correct: "B"
        },
        {
          id: "ladder",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author opens with the image of a ladder in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "describe how studios stored their film reels" },
            { letter: "B", text: "explain how Ulmer rose quickly to great fame" },
            { letter: "C", text: "show that Hollywood studios ranked from rich to poor" },
            { letter: "D", text: "compare film sets to buildings under construction" }
          ],
          correct: "C"
        },
        {
          id: "b-movie",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentences 4 and 5, a B-movie in the 1940s was —",
          choices: [
            { letter: "A", text: "a cheaper film shown as the second half of a double feature" },
            { letter: "B", text: "a big-budget film made by one of the major studios" },
            { letter: "C", text: "a film that won its awards in its second year of release" },
            { letter: "D", text: "a silent film reissued with a new soundtrack added" }
          ],
          correct: "A"
        },
        {
          id: "germany",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "How does paragraph 2 help explain the style of Detour described in paragraph 4?",
          choices: [
            { letter: "A", text: "It shows Ulmer had learned how shadows can express troubled minds." },
            { letter: "B", text: "It shows Ulmer disliked German films and avoided their style." },
            { letter: "C", text: "It shows Ulmer had once worked at MGM with very large budgets." },
            { letter: "D", text: "It shows Ulmer had written the novel the film was based on." }
          ],
          correct: "A"
        },
        {
          id: "highway",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 17, the author suggests that the highway in Detour —",
          choices: [
            { letter: "A", text: "shows off the beauty of the American West" },
            { letter: "B", text: "was filmed on real roads across the country" },
            { letter: "C", text: "gives Al a clear way to escape his past" },
            { letter: "D", text: "turns a symbol of freedom into one of entrapment" }
          ],
          correct: "D"
        },
        {
          id: "built-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO sentences best support the claim in sentence 13 that Ulmer built the film around its limits? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "aesthetically",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word *aesthetically* most nearly means —",
          choices: [
            { letter: "A", text: "in terms of money" },
            { letter: "B", text: "in terms of politics" },
            { letter: "C", text: "in terms of popularity" },
            { letter: "D", text: "in terms of art and beauty" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "Which statement best describes the irony in sentence 22?",
          choices: [
            { letter: "A", text: "Ulmer refused to watch Detour after it was released." },
            { letter: "B", text: "The Film Registry turned Detour down the first time." },
            { letter: "C", text: "A film made as filler outlasted the features it supported." },
            { letter: "D", text: "Public domain films cost more to watch than new ones." }
          ],
          correct: "C"
        }
      ]
    },

    /* ═════════════════════════════ SCARLET STREET (1945) ═════════════════════════════ */
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-scarlet-umbrella",
      family: "LIT",
      genre: "NOIR",
      episode: "scarlet",
      title: "Twenty-Five Years and an Umbrella",
      kind: "Screen story · 11.RL",
      blurb: "A meek cashier walks home in the rain and, for one night, becomes a hero.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Christopher Cross has been a cashier at the same firm for twenty-five years, and tonight his boss honors him with a dinner and a gold watch. " +
        N(2) + "Afterward, the shy, gentle man walks home alone through the rainy streets of Greenwich Village in New York. " +
        N(3) + "Under a streetlamp, he sees a man striking a young woman. " +
        N(4) + "Chris rushes in, swings his umbrella and knocks the attacker to the pavement. " +
        N(5) + "The woman, Kitty March, thanks her rescuer, and for once in his life Chris feels like a hero." +
        "</p>",
      claims: [
        {
          id: "chris-trait",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which words best describe Chris in sentences 1 and 2?",
          choices: [
            { letter: "A", text: "bold and reckless" },
            { letter: "B", text: "loyal and quiet" },
            { letter: "C", text: "greedy and sly" },
            { letter: "D", text: "famous and proud" }
          ],
          correct: "B"
        },
        {
          id: "for-once",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The phrase *for once in his life* in sentence 5 suggests that Chris —",
          choices: [
            { letter: "A", text: "rarely gets to feel brave or important" },
            { letter: "B", text: "often rescues strangers on his way home" },
            { letter: "C", text: "has known Kitty March for many years" },
            { letter: "D", text: "plans to leave his job at the firm soon" }
          ],
          correct: "A"
        },
        {
          id: "striking",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *striking* means —",
          choices: [
            { letter: "A", text: "beautiful to look at" },
            { letter: "B", text: "refusing to work" },
            { letter: "C", text: "hitting" },
            { letter: "D", text: "lighting a match" }
          ],
          correct: "C"
        },
        {
          id: "sentence1",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 1 mainly helps the story by —",
          choices: [
            { letter: "A", text: "explaining why Kitty needs to be rescued" },
            { letter: "B", text: "describing the weather in Greenwich Village" },
            { letter: "C", text: "revealing where Chris keeps his paintings" },
            { letter: "D", text: "showing how ordinary and routine Chris's life is" }
          ],
          correct: "D"
        },
        {
          id: "umbrella",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Which object in the passage could best serve as a symbol of Chris's role as Kitty's protector?",
          choices: [
            { letter: "A", text: "the gold watch" },
            { letter: "B", text: "the umbrella" },
            { letter: "C", text: "the streetlamp" },
            { letter: "D", text: "the pavement" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-scarlet-title",
      family: "LIT",
      genre: "NOIR",
      episode: "scarlet",
      title: "The Color in the Title",
      kind: "Film analysis · 11.RL",
      blurb: "A black-and-white film named for a burning red: what does the title mean?",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Scarlet Street was filmed in black and white, so the audience never actually sees the color its title names. " +
        N(2) + "Scarlet is a bright, burning red. " +
        N(3) + "For centuries it has been tied to sin and shame, as in Nathaniel Hawthorne's novel The Scarlet Letter. " +
        N(4) + "The title hints at a street of temptation, where desire leads straight to guilt. " +
        N(5) + "The color exists only in the viewer's imagination, which is exactly where Chris's guilt will end up living, too." +
        "</p>",
      claims: [
        {
          id: "allusion",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "The reference to The Scarlet Letter in sentence 3 helps readers understand that —",
          choices: [
            { letter: "A", text: "scarlet has long been linked to sin and shame" },
            { letter: "B", text: "the film is based on Hawthorne's famous novel" },
            { letter: "C", text: "the director wanted to film the story in color" },
            { letter: "D", text: "the story takes place in colonial New England" }
          ],
          correct: "A"
        },
        {
          id: "symbol",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "According to the passage, the color in the title most likely symbolizes —",
          choices: [
            { letter: "A", text: "wealth and success" },
            { letter: "B", text: "temptation and guilt" },
            { letter: "C", text: "peace and rest" },
            { letter: "D", text: "youth and hope" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 5, the author connects the unseen color of the title to —",
          choices: [
            { letter: "A", text: "the paintings that Chris later sells" },
            { letter: "B", text: "the dark streets of the city at night" },
            { letter: "C", text: "the guilt that will haunt Chris's mind" },
            { letter: "D", text: "the bright lights of a movie theater" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Why does the author begin by pointing out that the film is in black and white?",
          choices: [
            { letter: "A", text: "to complain that the film looks old-fashioned" },
            { letter: "B", text: "to explain why the film cost so little to make" },
            { letter: "C", text: "to compare it with color musicals of the time" },
            { letter: "D", text: "to set up the idea that its red exists only in the mind" }
          ],
          correct: "D"
        },
        {
          id: "temptation",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *temptation* most nearly means —",
          choices: [
            { letter: "A", text: "a strong pull toward doing something wrong" },
            { letter: "B", text: "a quiet place to rest after a long day" },
            { letter: "C", text: "a warning that keeps people out of danger" },
            { letter: "D", text: "a crowd gathered to watch a performance" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-scarlet-sunday-painter",
      family: "LIT",
      genre: "NOIR",
      episode: "scarlet",
      title: "Sunday Painter",
      kind: "Screen story · 11.RL",
      blurb: "At home Chris washes the dishes; on Sundays, in a cramped bathroom, he paints.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "At home, Chris lives with his wife, Adele, who nags him constantly and treats him more like a servant than a husband. " +
        N(2) + "He wears an apron to wash her dishes. " +
        N(3) + "On the wall hangs a large portrait of her first husband, a police detective believed drowned, and Adele never lets Chris forget how much braver that man was. " +
        N(4) + "Chris's only escape is painting. " +
        N(5) + "On Sundays he squeezes into the cramped bathroom with his easel and paints flowers and city scenes in a simple, childlike style that ignores the rules of perspective. " +
        N(6) + "He has never taken a lesson, and no one has ever bought a picture. " +
        N(7) + "Adele calls his work junk and threatens to get rid of it. " +
        N(8) + "Still, Chris keeps painting, because on the canvas he can be the man he never gets to be in his life." +
        "</p>",
      claims: [
        {
          id: "apron",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "How does sentence 2 develop the description in sentence 1?",
          choices: [
            { letter: "A", text: "It gives a concrete image of Chris acting as a servant." },
            { letter: "B", text: "It shows that Chris enjoys cooking for his wife." },
            { letter: "C", text: "It explains why Adele married a police detective." },
            { letter: "D", text: "It reveals that Chris works as a cook in a diner." }
          ],
          correct: "A"
        },
        {
          id: "portrait",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The portrait described in sentence 3 most likely symbolizes —",
          choices: [
            { letter: "A", text: "Adele's lifelong love of fine art" },
            { letter: "B", text: "a standard of manhood Chris is always measured against" },
            { letter: "C", text: "Chris's secret hope of becoming a detective" },
            { letter: "D", text: "the danger of swimming in deep water" }
          ],
          correct: "B"
        },
        {
          id: "bathroom",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The cramped bathroom in sentence 5 suggests that Chris's art —",
          choices: [
            { letter: "A", text: "is admired by everyone in his building" },
            { letter: "B", text: "needs water and steam to look its best" },
            { letter: "C", text: "has very little room in his daily life" },
            { letter: "D", text: "is something he plans to sell soon" }
          ],
          correct: "C"
        },
        {
          id: "perspective",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, *perspective* refers to —",
          choices: [
            { letter: "A", text: "a personal opinion about a painting" },
            { letter: "B", text: "the price an art dealer pays for a work" },
            { letter: "C", text: "the frame placed around a finished picture" },
            { letter: "D", text: "a way of showing depth on a flat surface" }
          ],
          correct: "D"
        },
        {
          id: "freedom-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO sentences best show that painting gives Chris a freedom he lacks elsewhere? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the passage introduce?",
          choices: [
            { letter: "A", text: "Money is the surest path to happiness." },
            { letter: "B", text: "Talent always wins recognition in the end." },
            { letter: "C", text: "A truer self can hide beneath a dull life." },
            { letter: "D", text: "Marriage makes people braver over time." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-scarlet-signature",
      family: "LIT",
      genre: "NOIR",
      episode: "scarlet",
      title: "Her Name, His Paintings",
      kind: "Screen story · 11.RL",
      blurb: "A con man sells Chris's paintings, and Kitty signs them as her own.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Chris, too embarrassed to admit he is only a cashier, lets Kitty believe he is a wealthy artist. " +
        N(2) + "Kitty's boyfriend, a smooth-talking con man named Johnny, sees a chance for easy money. " +
        N(3) + "He has Kitty coax cash out of Chris, and Chris, desperate to keep her, begins stealing from his wife and his employer. " +
        N(4) + "Then Johnny takes some of Chris's paintings to sell on the street, where an art critic notices them. " +
        N(5) + "Soon an art dealer wants to meet the painter, and Kitty claims the work as her own. " +
        N(6) + "When Chris discovers his pictures on display under her name, Kitty expects him to be furious. " +
        N(7) + "Instead, he is delighted. " +
        N(8) + "To him it feels almost like a marriage: his art, her name. " +
        N(9) + "He gladly keeps painting, and Kitty keeps signing." +
        "</p>",
      claims: [
        {
          id: "johnny",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which word best describes Johnny as he is presented in sentences 2–4?",
          choices: [
            { letter: "A", text: "loyal" },
            { letter: "B", text: "scheming" },
            { letter: "C", text: "timid" },
            { letter: "D", text: "generous" }
          ],
          correct: "B"
        },
        {
          id: "plot4",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does sentence 4 move the plot forward?",
          choices: [
            { letter: "A", text: "It leads to Kitty being taken for a talented artist." },
            { letter: "B", text: "It shows Chris deciding to quit his job at the firm." },
            { letter: "C", text: "It explains how Johnny first met Kitty March." },
            { letter: "D", text: "It reveals that the art critic suspects a crime." }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "What is most ironic about Chris's reaction in sentences 7 and 8?",
          choices: [
            { letter: "A", text: "He is angry at the critic who praised his work." },
            { letter: "B", text: "He wants to sell his paintings for a lower price." },
            { letter: "C", text: "He decides to stop painting just as he succeeds." },
            { letter: "D", text: "He celebrates the trick that steals his credit." }
          ],
          correct: "D"
        },
        {
          id: "stealing",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 3 reveals that Chris —",
          choices: [
            { letter: "A", text: "suspects that Johnny is lying to Kitty" },
            { letter: "B", text: "has always been dishonest about money" },
            { letter: "C", text: "will break the law to keep Kitty close" },
            { letter: "D", text: "wants his employer to discover the theft" }
          ],
          correct: "C"
        },
        {
          id: "coax",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *coax* most nearly means —",
          choices: [
            { letter: "A", text: "gently persuade" },
            { letter: "B", text: "loudly demand" },
            { letter: "C", text: "secretly steal" },
            { letter: "D", text: "politely refuse" }
          ],
          correct: "A"
        },
        {
          id: "signature",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Kitty's signature on Chris's paintings can best be read as a symbol of —",
          choices: [
            { letter: "A", text: "Chris's growing fame in the art world" },
            { letter: "B", text: "Chris losing his identity to Kitty" },
            { letter: "C", text: "Kitty's real talent as a painter" },
            { letter: "D", text: "Johnny's wish to become an artist" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-scarlet-symbols",
      family: "LIT",
      genre: "NOIR",
      episode: "scarlet",
      title: "How to Spot a Symbol",
      kind: "Film analysis · 11.RL",
      blurb: "Three clues for finding symbols in a film, tested on Fritz Lang's paintings, rain and mirrors.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "A symbol in a film is a person, object, place or image that stands for something beyond itself. " +
        N(2) + "Spotting one takes practice, but a few clues help. " +
        N(3) + "First, watch for repetition: an object that keeps returning is rarely there by accident. " +
        N(4) + "Second, notice emphasis, such as a close-up, a pool of light or a shot that lingers. " +
        N(5) + "Third, ask what the object has to do with the story's central conflict.</p>" +
        "<p>" + N(6) + "Fritz Lang's Scarlet Street rewards this kind of watching. " +
        N(7) + "Chris's paintings appear at nearly every stage of the plot, and they stand for the true self he cannot show at home or at work; when Kitty signs them, she is taking that self away. " +
        N(8) + "Rain falls on the night Chris meets Kitty, blurring the city and, it seems, his judgment along with it. " +
        N(9) + "Lang also fills his frames with mirrors, windows and glass, so characters often appear doubled. " +
        N(10) + "Those reflections suggest that no one here is quite who they seem: the cashier poses as a rich artist, and the con woman poses as a painter.</p>" +
        "<p>" + N(11) + "The richest symbol may be a single painting: a portrait of Kitty that Chris painted, but that is shown and sold as her \"Self-Portrait.\" " +
        N(12) + "Its title is a lie, yet it tells a truth, since the woman in the picture was always partly Chris's own invention." +
        "</p>",
      claims: [
        {
          id: "symbol-def",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 1, a symbol in a film is —",
          choices: [
            { letter: "A", text: "a scene that is repeated in slow motion" },
            { letter: "B", text: "a character who narrates the whole story" },
            { letter: "C", text: "something that stands for an idea beyond itself" },
            { letter: "D", text: "a title that appears on the screen between scenes" }
          ],
          correct: "C"
        },
        {
          id: "para1",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is paragraph 1 organized?",
          choices: [
            { letter: "A", text: "as a list of clues for identifying symbols" },
            { letter: "B", text: "as a story told in the order events happened" },
            { letter: "C", text: "as a comparison of two different directors" },
            { letter: "D", text: "as a problem followed by a single solution" }
          ],
          correct: "A"
        },
        {
          id: "paintings",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "According to sentence 7, what does Kitty take from Chris when she signs his paintings?",
          choices: [
            { letter: "A", text: "his job at the firm" },
            { letter: "B", text: "his savings account" },
            { letter: "C", text: "his marriage to Adele" },
            { letter: "D", text: "his true self" }
          ],
          correct: "D"
        },
        {
          id: "seem-two",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Which TWO symbols does the passage connect to the idea that people are not who they seem? Select TWO.",
          choices: [
            { letter: "A", text: "the rain" },
            { letter: "B", text: "the mirrors and reflections" },
            { letter: "C", text: "the close-up" },
            { letter: "D", text: "the \"Self-Portrait\"" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "blurring",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word *blurring* most nearly means —",
          choices: [
            { letter: "A", text: "brightening" },
            { letter: "B", text: "making unclear" },
            { letter: "C", text: "washing clean" },
            { letter: "D", text: "making louder" }
          ],
          correct: "B"
        },
        {
          id: "paradox",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "Sentence 12 says the painting's title \"is a lie, yet it tells a truth.\" This statement is an example of —",
          choices: [
            { letter: "A", text: "paradox" },
            { letter: "B", text: "understatement" },
            { letter: "C", text: "sarcasm" },
            { letter: "D", text: "overstatement" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-scarlet-ending",
      family: "LIT",
      genre: "NOIR",
      episode: "scarlet",
      title: "The Prison Inside",
      kind: "Film analysis · 11.RL",
      blurb: "The law never catches Chris Cross. Fritz Lang finds another way to punish him.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Hollywood's Production Code, the set of rules studios followed from the early 1930s until 1968, insisted that crime must never pay. " +
        N(2) + "A killer on screen had to be caught, punished or killed by the final scene, so that audiences left the theater reassured that justice had been done. " +
        N(3) + "Fritz Lang's Scarlet Street, released by Universal in 1945 and starring Edward G. Robinson as Chris, Joan Bennett as Kitty and Dan Duryea as Johnny, follows that rule in a way no one expected.</p>" +
        "<p>" + N(4) + "Late in the film, after Adele's first husband turns up alive and Chris believes he is finally free to marry Kitty, he learns the truth: Kitty has never loved him, and she and Johnny have been laughing at him all along. " +
        N(5) + "When he begs her to marry him and she mocks him, Chris snaps. " +
        N(6) + "In a moment of rage he kills her with an ice pick, an act the camera keeps mostly out of sight. " +
        N(7) + "Johnny, who arrives soon after, is arrested for the crime. " +
        N(8) + "Every clue points to him, including his history of fighting with Kitty, and Chris, the meek cashier no one would suspect, says nothing to save him. " +
        N(9) + "Johnny is convicted and executed.</p>" +
        "<p>" + N(10) + "By law, then, Chris has escaped. " +
        N(11) + "But Lang does not let him go free. " +
        N(12) + "Fired from his job for stealing, Chris drifts through cheap rooms where he cannot sleep, tormented by the imagined voices of Kitty and Johnny calling to each other in the dark. " +
        N(13) + "He cannot even claim his own paintings, since the whole world believes Kitty made them. " +
        N(14) + "In the final scene, a shabby, homeless Chris shuffles past the gallery where his portrait of Kitty, labeled \"Self-Portrait,\" has just sold for a fortune. " +
        N(15) + "The man who made it walks on, unrecognized, into the crowd, a nobody in the city he once painted.</p>" +
        "<p>" + N(16) + "Lang argued that this was punishment enough: no court could build a prison as strong as the one Chris now lives in, his own mind. " +
        N(17) + "Not every censor agreed, and officials in New York State and a few cities briefly banned the film. " +
        N(18) + "Lang's story was a remake of a French film, Jean Renoir's La Chienne (1931), whose painter also ends up a tramp. " +
        N(19) + "Renoir, however, working far from Hollywood's censors, treated that fate with dry, almost comic irony. " +
        N(20) + "Lang's version is darker, closer to a nightmare than a joke. " +
        N(21) + "His Chris is a man for whom the worst sentence is the one he keeps passing on himself." +
        "</p>",
      claims: [
        {
          id: "code",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "According to paragraph 1, the Production Code required that —",
          choices: [
            { letter: "A", text: "every film be shot in black and white" },
            { letter: "B", text: "studios remake popular European films" },
            { letter: "C", text: "movies avoid showing artists or painters" },
            { letter: "D", text: "crime never be shown to pay off in the end" }
          ],
          correct: "D"
        },
        {
          id: "para3",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does paragraph 3 relate to paragraph 2?",
          choices: [
            { letter: "A", text: "It explains how the police finally caught the real killer." },
            { letter: "B", text: "It shows that escaping the law does not free Chris from punishment." },
            { letter: "C", text: "It goes back in time to show how Chris first met Kitty." },
            { letter: "D", text: "It describes Johnny's trial in more detail than before." }
          ],
          correct: "B"
        },
        {
          id: "silence",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 8 reveals that Chris —",
          choices: [
            { letter: "A", text: "lets another man die for his crime rather than confess" },
            { letter: "B", text: "tries hard to prove that Johnny is innocent" },
            { letter: "C", text: "is suspected by the police from the very start" },
            { letter: "D", text: "does not know that Kitty has been killed" }
          ],
          correct: "A"
        },
        {
          id: "self-portrait",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The \"Self-Portrait\" in sentence 14 deepens the irony of the ending because —",
          choices: [
            { letter: "A", text: "Chris finally gets credit for the work he painted" },
            { letter: "B", text: "the painting is lost before it can be sold" },
            { letter: "C", text: "its success belongs to everyone but the man who made it" },
            { letter: "D", text: "Kitty paints a new picture of Chris to replace it" }
          ],
          correct: "C"
        },
        {
          id: "sentence-word",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 21, the author uses the word *sentence* to suggest —",
          choices: [
            { letter: "A", text: "that Chris writes a confession and mails it to the police" },
            { letter: "B", text: "that Chris is sent to prison for stealing from the firm" },
            { letter: "C", text: "that Lang wanted the film's script to be shorter" },
            { letter: "D", text: "both a legal punishment and Chris's own self-condemnation" }
          ],
          correct: "D"
        },
        {
          id: "punished-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO sentences best support the claim that Chris is punished even though the law never touches him? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "renoir",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the passage contrast Scarlet Street with La Chienne?",
          choices: [
            { letter: "A", text: "Lang's version treats the painter's fate more darkly." },
            { letter: "B", text: "Renoir's version lets the painter become famous." },
            { letter: "C", text: "Lang's version was made before Renoir's version." },
            { letter: "D", text: "Renoir's version has no murder and no painter." }
          ],
          correct: "A"
        },
        {
          id: "tormented",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word *tormented* most nearly means —",
          choices: [
            { letter: "A", text: "gently amused" },
            { letter: "B", text: "mostly ignored" },
            { letter: "C", text: "made to suffer" },
            { letter: "D", text: "calmly comforted" }
          ],
          correct: "C"
        }
      ]
    },

    /* ═════════════════════════════ DOUBLE INDEMNITY (1944) ═════════════════════════════ */
    /* Copyrighted film: summary and analysis only, no dialogue. */
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-indemnity-dictaphone",
      family: "LIT",
      genre: "NOIR",
      episode: "indemnity",
      title: "A Confession After Midnight",
      kind: "Film analysis · 11.RL",
      blurb: "A wounded man, an empty office and a recording machine: how Double Indemnity begins.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Double Indemnity opens late at night, with a car speeding recklessly through the empty streets of Los Angeles. " +
        N(2) + "The driver, insurance salesman Walter Neff, is wounded. " +
        N(3) + "He staggers into his dark office building and speaks into a dictaphone, a machine that records a voice so that a secretary can type the words later. " +
        N(4) + "His recording is a confession meant for his friend and coworker Barton Keyes. " +
        N(5) + "Everything after that is a flashback, so viewers know from the first minutes that the perfect crime has failed." +
        "</p>",
      claims: [
        {
          id: "dictaphone",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentence 3, a dictaphone is a machine that —",
          choices: [
            { letter: "A", text: "plays music in an office" },
            { letter: "B", text: "records spoken words" },
            { letter: "C", text: "prints insurance policies" },
            { letter: "D", text: "sends telegrams overseas" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "According to sentence 5, the structure of the film —",
          choices: [
            { letter: "A", text: "keeps the outcome of the crime secret until the final scene" },
            { letter: "B", text: "follows Keyes as he solves the case one step at a time" },
            { letter: "C", text: "jumps forward in time to show Walter's trial in court" },
            { letter: "D", text: "reveals that the crime failed before showing how it happened" }
          ],
          correct: "D"
        },
        {
          id: "wounded",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which detail best shows that Walter is in physical trouble?",
          choices: [
            { letter: "A", text: "He is wounded and staggers inside." },
            { letter: "B", text: "He drives through empty streets." },
            { letter: "C", text: "He works as an insurance salesman." },
            { letter: "D", text: "He addresses his words to Keyes." }
          ],
          correct: "A"
        },
        {
          id: "suspense",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Because viewers already know the ending, the suspense in Double Indemnity most likely comes from —",
          choices: [
            { letter: "A", text: "guessing whether Walter survives the opening" },
            { letter: "B", text: "wondering who Barton Keyes really is" },
            { letter: "C", text: "learning how and why the plan fell apart" },
            { letter: "D", text: "waiting to see where the speeding car is going" }
          ],
          correct: "C"
        },
        {
          id: "addressee",
          sol: "11.DSR.B",
          sub: "11.DSR.B.1",
          stem: "According to the passage, to whom is Walter's confession addressed?",
          choices: [
            { letter: "A", text: "his secretary" },
            { letter: "B", text: "Barton Keyes" },
            { letter: "C", text: "the police" },
            { letter: "D", text: "a newspaper" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-indemnity-team",
      family: "LIT",
      genre: "NOIR",
      episode: "indemnity",
      title: "Who Made Double Indemnity",
      kind: "Film history · 11.RI",
      blurb: "An émigré director, a crime novelist, a pulp source and a surprising cast.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Double Indemnity (1944) was directed by Billy Wilder, a filmmaker born in Austria-Hungary who had left Germany when the Nazis came to power. " +
        N(2) + "Wilder wrote the script with Raymond Chandler, a novelist famous for tough, hardboiled detective stories. " +
        N(3) + "Their source was a short novel by James M. Cain. " +
        N(4) + "The casting surprised audiences: Fred MacMurray, best known for light comedies, played the killer, and Barbara Stanwyck played the scheming Phyllis Dietrichson. " +
        N(5) + "Edward G. Robinson played Barton Keyes, the insurance investigator who senses the truth." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the passage mainly about?",
          choices: [
            { letter: "A", text: "the plot twists in the film's final scene" },
            { letter: "B", text: "the reviews the film received in 1944" },
            { letter: "C", text: "the people who made and starred in the film" },
            { letter: "D", text: "the novels Raymond Chandler wrote alone" }
          ],
          correct: "C"
        },
        {
          id: "casting",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 4, why did MacMurray's casting surprise audiences?",
          choices: [
            { letter: "A", text: "He usually played comic roles, not killers." },
            { letter: "B", text: "He had never acted in a film before." },
            { letter: "C", text: "He was also the director of the film." },
            { letter: "D", text: "He refused to act alongside Stanwyck." }
          ],
          correct: "A"
        },
        {
          id: "emigre",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Sentence 1 connects Wilder to which part of film noir's history?",
          choices: [
            { letter: "A", text: "the B-movie studios of Poverty Row" },
            { letter: "B", text: "the silent comedies of the 1920s" },
            { letter: "C", text: "the French critics who named the genre" },
            { letter: "D", text: "the European filmmakers who fled to Hollywood" }
          ],
          correct: "D"
        },
        {
          id: "scheming",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *scheming* most nearly means —",
          choices: [
            { letter: "A", text: "cheerful" },
            { letter: "B", text: "plotting" },
            { letter: "C", text: "forgetful" },
            { letter: "D", text: "frightened" }
          ],
          correct: "B"
        },
        {
          id: "hardboiled",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentence 2, hardboiled stories are —",
          choices: [
            { letter: "A", text: "gentle and romantic" },
            { letter: "B", text: "funny and lighthearted" },
            { letter: "C", text: "tough and unsentimental" },
            { letter: "D", text: "long and scientific" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-indemnity-little-man",
      family: "LIT",
      genre: "NOIR",
      episode: "indemnity",
      title: "The Little Man",
      kind: "Film analysis · 11.RL",
      blurb: "Barton Keyes trusts the feeling in his stomach, and he trusts his friend Walter.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Barton Keyes runs the claims department at Walter's insurance company, and his job is to sniff out fakes. " +
        N(2) + "He is loud, impatient, fast-talking and almost always right. " +
        N(3) + "Keyes says he has a \"little man\" inside him, a nagging feeling in his stomach that will not let him rest when a claim seems wrong. " +
        N(4) + "After Mr. Dietrichson's death, the little man soon starts to complain. " +
        N(5) + "What makes the story painful is that Keyes truly likes Walter, and he even offers him a promotion to work at his side. " +
        N(6) + "All through the film, Keyes hunts through his pockets for a match, and Walter lights his cigar for him. " +
        N(7) + "In the final scene the gesture is reversed: Keyes lights a cigarette for the badly wounded Walter. " +
        N(8) + "In noir's corrupt world, Keyes is the closest thing to an honest investigator, and their friendship is the last thing the crime destroys." +
        "</p>",
      claims: [
        {
          id: "keyes-trait",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which word best describes Keyes as a claims man?",
          choices: [
            { letter: "A", text: "careless" },
            { letter: "B", text: "perceptive" },
            { letter: "C", text: "lazy" },
            { letter: "D", text: "dishonest" }
          ],
          correct: "B"
        },
        {
          id: "little-man",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 3, Keyes's \"little man\" is a figure of speech for —",
          choices: [
            { letter: "A", text: "a short coworker who helps him" },
            { letter: "B", text: "a toy he keeps on his desk" },
            { letter: "C", text: "his gut instinct that something is wrong" },
            { letter: "D", text: "the boss who signs his paychecks" }
          ],
          correct: "C"
        },
        {
          id: "matches",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The gesture with the matches in sentences 6 and 7 mainly works as a symbol of —",
          choices: [
            { letter: "A", text: "the friendship between the men and how their roles have turned" },
            { letter: "B", text: "the danger of smoking inside a crowded office building" },
            { letter: "C", text: "Walter's plan to burn the evidence of his crime" },
            { letter: "D", text: "Keyes's habit of forgetting the most important details" }
          ],
          correct: "A"
        },
        {
          id: "painful",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "According to sentence 5, the story is painful because —",
          choices: [
            { letter: "A", text: "Keyes refuses to give Walter a raise" },
            { letter: "B", text: "Walter wants Keyes's job for himself" },
            { letter: "C", text: "Keyes secretly dislikes his own work" },
            { letter: "D", text: "Keyes's skill will ruin a man he cares about" }
          ],
          correct: "D"
        },
        {
          id: "sniff-out",
          sol: "11.RV.1.E",
          sub: "11.RV.1.E.1",
          stem: "In sentence 1, the idiom *sniff out* means —",
          choices: [
            { letter: "A", text: "ignore" },
            { letter: "B", text: "smell" },
            { letter: "C", text: "detect" },
            { letter: "D", text: "destroy" }
          ],
          correct: "C"
        },
        {
          id: "cares-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO details show that Keyes cares about Walter? Select TWO.",
          choices: [
            { letter: "A", text: "He offers Walter a promotion." },
            { letter: "B", text: "He hunts for fake claims." },
            { letter: "C", text: "He is loud and impatient." },
            { letter: "D", text: "He lights Walter's cigarette." }
          ],
          correct: ["A", "D"]
        }
      ]
    },
    {
      id: "lit-indemnity-blinds",
      family: "LIT",
      genre: "NOIR",
      episode: "indemnity",
      title: "Bars of Shadow",
      kind: "Film language · 11.RV",
      blurb: "Low-key lighting, venetian blinds and chiaroscuro: the look of Double Indemnity.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Cinematographer John F. Seitz gave Double Indemnity its famous look. " +
        N(2) + "He used <strong>low-key lighting</strong>: a strong main light with little or no softer light to fill in the shadows, so much of the frame stays dark. " +
        N(3) + "In the Dietrichson house, sunlight slices through <strong>venetian blinds</strong>, window shades made of slanted slats, and lays stripes of shadow across the characters. " +
        N(4) + "The stripes look like the bars of a prison cell, a visual hint of where the plot is heading. " +
        N(5) + "The air of the house even seems thick with floating dust, which makes the light look <strong>stale</strong>. " +
        N(6) + "This sharp contrast of light and dark is called <strong>chiaroscuro</strong>, from the Italian words for \"light\" and \"dark,\" and it pictures a world where people live half in shadow." +
        "</p>",
      claims: [
        {
          id: "low-key",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "According to sentence 2, low-key lighting —",
          choices: [
            { letter: "A", text: "leaves much of the frame in shadow" },
            { letter: "B", text: "makes every part of the frame bright" },
            { letter: "C", text: "uses colored lights to set a mood" },
            { letter: "D", text: "is used only for scenes outdoors" }
          ],
          correct: "A"
        },
        {
          id: "blinds-clue",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase in sentence 3 helps define *venetian blinds*?",
          choices: [
            { letter: "A", text: "\"sunlight slices through\"" },
            { letter: "B", text: "\"in the Dietrichson house\"" },
            { letter: "C", text: "\"window shades made of slanted slats\"" },
            { letter: "D", text: "\"across the characters\"" }
          ],
          correct: "C"
        },
        {
          id: "bars",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Sentence 4 suggests that the striped shadows —",
          choices: [
            { letter: "A", text: "show that the house is old and poorly built" },
            { letter: "B", text: "make the characters look younger and happier" },
            { letter: "C", text: "were added to hide mistakes in the set" },
            { letter: "D", text: "hint that the characters face punishment" }
          ],
          correct: "D"
        },
        {
          id: "chiaroscuro",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Based on its origin, the word *chiaroscuro* refers to —",
          choices: [
            { letter: "A", text: "the use of bright color in film" },
            { letter: "B", text: "a contrast between light and dark" },
            { letter: "C", text: "a style of Italian opera music" },
            { letter: "D", text: "a lens that makes faces look soft" }
          ],
          correct: "B"
        },
        {
          id: "stale",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *stale* most nearly means —",
          choices: [
            { letter: "A", text: "old and lifeless" },
            { letter: "B", text: "bright and fresh" },
            { letter: "C", text: "warm and cozy" },
            { letter: "D", text: "wet and cold" }
          ],
          correct: "A"
        },
        {
          id: "half-shadow",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "The last sentence suggests that the lighting reflects characters who —",
          choices: [
            { letter: "A", text: "are honest and open with one another" },
            { letter: "B", text: "spend most of their time outdoors" },
            { letter: "C", text: "lead partly hidden, morally mixed lives" },
            { letter: "D", text: "were afraid of the dark as children" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-indemnity-plan",
      family: "LIT",
      genre: "NOIR",
      episode: "indemnity",
      title: "The Perfect Plan",
      kind: "Film analysis · 11.RL",
      blurb: "An accident policy, a clause that pays double and a train: how Walter plans the crime.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Walter Neff first visits the Dietrichson home to renew a car insurance policy. " +
        N(2) + "Instead of the husband, he meets the wife, Phyllis, who soon asks how a person might buy accident insurance on a husband without his knowing. " +
        N(3) + "Walter sees through her at once and leaves, but he cannot stop thinking about her. " +
        N(4) + "Before long, he is planning the crime himself.</p>" +
        "<p>" + N(5) + "Walter knows his business. " +
        N(6) + "He tricks Mr. Dietrichson into signing an accident policy that the man thinks is a routine car form. " +
        N(7) + "The policy has a \"double indemnity\" clause: it pays twice the usual amount if the death comes from a rare kind of accident, such as a fall from a train. " +
        N(8) + "So the train becomes part of the plan. " +
        N(9) + "Walter kills Dietrichson in the car on the way to the station, out of the camera's view. " +
        N(10) + "Then, disguised as the husband, who has a broken leg, Walter boards the train on crutches and slips off the back platform. " +
        N(11) + "The body is left by the tracks to look like an accidental fall.</p>" +
        "<p>" + N(12) + "The plan is clever, but it depends on two people trusting each other completely. " +
        N(13) + "In film noir, that is the weakest part of any plan. " +
        N(14) + "Even at the scene, Phyllis's car will not start when they try to drive away, a moment of panic that hints the \"perfect\" crime is already coming apart." +
        "</p>",
      claims: [
        {
          id: "clause",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 7, a double indemnity clause —",
          choices: [
            { letter: "A", text: "cancels a policy if the owner lies about it" },
            { letter: "B", text: "pays twice the usual amount for certain rare accidents" },
            { letter: "C", text: "covers two different people on a single policy" },
            { letter: "D", text: "doubles the price the owner pays every month" }
          ],
          correct: "B"
        },
        {
          id: "train",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Why does the train \"become part of the plan\" in sentence 8?",
          choices: [
            { letter: "A", text: "Dietrichson works as a railroad conductor." },
            { letter: "B", text: "Walter needs to leave Los Angeles quickly." },
            { letter: "C", text: "Phyllis is afraid to drive alone at night." },
            { letter: "D", text: "A death linked to a train would pay double." }
          ],
          correct: "D"
        },
        {
          id: "drawn-in",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentences 3 and 4 reveal that Walter —",
          choices: [
            { letter: "A", text: "reports Phyllis to the police right away" },
            { letter: "B", text: "never suspects what Phyllis intends" },
            { letter: "C", text: "resists at first but is quickly drawn in" },
            { letter: "D", text: "planned the crime before he met Phyllis" }
          ],
          correct: "C"
        },
        {
          id: "trust",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Sentences 12 and 13 express which idea common in film noir?",
          choices: [
            { letter: "A", text: "Partners in crime are undone by distrust." },
            { letter: "B", text: "Clever plans usually succeed in the end." },
            { letter: "C", text: "Insurance companies are always honest." },
            { letter: "D", text: "Trains are the safest way to travel." }
          ],
          correct: "A"
        },
        {
          id: "stall",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The stalled car in sentence 14 mainly serves to —",
          choices: [
            { letter: "A", text: "explain why Walter misses the train" },
            { letter: "B", text: "foreshadow the failure of the plan" },
            { letter: "C", text: "show that Phyllis cannot drive well" },
            { letter: "D", text: "introduce a new witness to the crime" }
          ],
          correct: "B"
        },
        {
          id: "insurance-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO details show Walter using his knowledge of insurance to commit the crime? Select TWO.",
          choices: [
            { letter: "A", text: "He tricks Dietrichson into signing the accident policy." },
            { letter: "B", text: "He leaves the house after hearing Phyllis's question." },
            { letter: "C", text: "He makes the death look like a fall from a train." },
            { letter: "D", text: "He walks on crutches to fool the other passengers." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-indemnity-noirest",
      family: "LIT",
      genre: "NOIR",
      episode: "indemnity",
      title: "The Noirest Noir",
      kind: "Film analysis · 11.RL",
      blurb: "One checklist, dozens of films and only one perfect score: why Double Indemnity is the noirest noir.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Is there such a thing as the most noir film noir? " +
        N(2) + "An infographic made for the British Film Institute (BFI), called \"Darkness Visible,\" tried to find out. " +
        N(3) + "It boiled the genre down to a checklist of common ingredients, then tested famous films against it. " +
        N(4) + "Only one film had every item on the list: Double Indemnity, made by Billy Wilder in 1944.</p>" +
        "<p>" + N(5) + "Start with the people. " +
        N(6) + "The checklist calls for a criminal, usually a murderer, and Walter Neff, the salesman who kills a client for money and love, fits exactly. " +
        N(7) + "It calls for a femme fatale, a woman as bad as she is beautiful, and Phyllis Dietrichson, with her blonde wig and her ankle bracelet, may be the genre's model. " +
        N(8) + "It calls for a second woman who is good but bland, a role filled by Lola, Phyllis's innocent stepdaughter. " +
        N(9) + "And it calls for an investigator of relative integrity, someone more honest than the world around him, which describes Barton Keyes. " +
        N(10) + "Even the checklist's stolen money appears, in the form of an insurance payout.</p>" +
        "<p>" + N(11) + "The style matches as well. " +
        N(12) + "The film was drawn from a short novel by James M. Cain, one of the masters of tough American crime fiction. " +
        N(13) + "Its lighting is dark and oppressive, with shadows of venetian blinds striping the characters. " +
        N(14) + "People smoke constantly. " +
        N(15) + "The whole story is a flashback, told by a doomed man speaking into a dictaphone, and its setting is Los Angeles, a sunny city made sinister. " +
        N(16) + "The dialogue, sharpened by Wilder and the crime novelist Raymond Chandler, is quick, witty and full of double meanings.</p>" +
        "<p>" + N(17) + "Most important, the film takes a bleak view of people. " +
        N(18) + "No one in it is purely good, and the lovers turn on each other in the end: in their last meeting, Phyllis shoots Walter, and he kills her. " +
        N(19) + "Wilder even filmed a final scene in which Walter is executed in the gas chamber while Keyes watches, but he cut it before the film's release. " +
        N(20) + "He felt that the quiet moment between the two friends in the office made any punishment shown on screen unnecessary.</p>" +
        "<p>" + N(21) + "Of course, a checklist cannot prove that a film is great. " +
        N(22) + "Some beloved noirs miss several boxes, and a film could tick every box and still be dull. " +
        N(23) + "But the BFI's result matches the opinion of many critics, who regularly place Double Indemnity near the top of their lists of the best films noirs ever made." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the main idea of the passage?",
          choices: [
            { letter: "A", text: "The BFI checklist proves that Double Indemnity is the greatest film ever made." },
            { letter: "B", text: "Billy Wilder disliked the endings of most of the crime films of his day." },
            { letter: "C", text: "Double Indemnity fits every part of a well-known checklist of noir elements." },
            { letter: "D", text: "Most films noirs include an insurance investigator and a dictaphone." }
          ],
          correct: "C"
        },
        {
          id: "organization",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How are paragraphs 2 through 4 organized?",
          choices: [
            { letter: "A", text: "by groups of checklist items: people, style, then outlook" },
            { letter: "B", text: "in time order, from the film's release to the present" },
            { letter: "C", text: "as a debate between two critics who disagree" },
            { letter: "D", text: "as a problem followed by Wilder's solution to it" }
          ],
          correct: "A"
        },
        {
          id: "integrity",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "As the passage explains it in sentence 9, an investigator of *relative integrity* is someone who is —",
          choices: [
            { letter: "A", text: "related by marriage to the criminal" },
            { letter: "B", text: "perfectly honest in every situation" },
            { letter: "C", text: "dishonest but unusually clever" },
            { letter: "D", text: "more honest than the people around him" }
          ],
          correct: "D"
        },
        {
          id: "good-woman",
          sol: "11.DSR.B",
          sub: "11.DSR.B.1",
          stem: "According to paragraph 2, which character fills the role of the good but bland woman?",
          choices: [
            { letter: "A", text: "Phyllis" },
            { letter: "B", text: "Lola" },
            { letter: "C", text: "Keyes's secretary" },
            { letter: "D", text: "Walter's landlady" }
          ],
          correct: "B"
        },
        {
          id: "style-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO details from paragraph 3 show that the film matches the checklist's style elements? Select TWO.",
          choices: [
            { letter: "A", text: "Shadows of venetian blinds stripe the characters." },
            { letter: "B", text: "Phyllis wears a blonde wig and an ankle bracelet." },
            { letter: "C", text: "The story is told as one long flashback." },
            { letter: "D", text: "Lola is Phyllis's innocent stepdaughter." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "concession",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In paragraph 5, the author admits that —",
          choices: [
            { letter: "A", text: "the BFI changed its list after scoring the films" },
            { letter: "B", text: "Double Indemnity actually misses one element" },
            { letter: "C", text: "critics have never cared for Double Indemnity" },
            { letter: "D", text: "a checklist alone cannot prove a film is great" }
          ],
          correct: "D"
        },
        {
          id: "gas-chamber",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author most likely includes sentences 19 and 20 to show that Wilder —",
          choices: [
            { letter: "A", text: "nearly lost the film's place on the BFI checklist" },
            { letter: "B", text: "valued the friends' last scene over showing punishment" },
            { letter: "C", text: "ignored the Production Code when he made the film" },
            { letter: "D", text: "wanted Keyes and Walter to end the film as enemies" }
          ],
          correct: "B"
        },
        {
          id: "sinister",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 15, the word *sinister* most nearly means —",
          choices: [
            { letter: "A", text: "cheerful" },
            { letter: "B", text: "crowded" },
            { letter: "C", text: "threatening" },
            { letter: "D", text: "ancient" }
          ],
          correct: "C"
        }
      ]
    },

    /* ═════════════════════════════ CASABLANCA (1942): NOIR OR NO? ═════════════════════════════ */
    /* Copyrighted film: summary and analysis only; the only words quoted are the song title. */
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-casablanca-cafe",
      family: "LIT",
      genre: "NOIR",
      episode: "casablanca",
      title: "Waiting in Casablanca",
      kind: "Film analysis · 11.RL",
      blurb: "December 1941: refugees, a city under Vichy rule and an American who runs a nightclub.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Casablanca takes place in December 1941 in Casablanca, a city in French Morocco. " +
        N(2) + "The city is controlled by Vichy France, the French government that cooperated with Nazi Germany. " +
        N(3) + "Refugees fleeing the war crowd its streets, desperate for papers that will let them travel to Lisbon and, from there, to America. " +
        N(4) + "Many of them wind up at Rick's Café Américain, a nightclub run by an American named Rick Blaine. " +
        N(5) + "Rick serves everyone, but he insists that he takes no one's side." +
        "</p>",
      claims: [
        {
          id: "vichy",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "According to sentence 2, Vichy France was —",
          choices: [
            { letter: "A", text: "a group of refugees who opposed the Nazis" },
            { letter: "B", text: "a French government that cooperated with Nazi Germany" },
            { letter: "C", text: "the name of the nightclub that Rick runs" },
            { letter: "D", text: "an American army stationed in Morocco" }
          ],
          correct: "B"
        },
        {
          id: "refugees",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, *refugees* are people who —",
          choices: [
            { letter: "A", text: "run businesses in a foreign city" },
            { letter: "B", text: "travel for pleasure and adventure" },
            { letter: "C", text: "work for the police in Casablanca" },
            { letter: "D", text: "flee their homes to escape danger" }
          ],
          correct: "D"
        },
        {
          id: "no-side",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 5 suggests that at the start of the film, Rick —",
          choices: [
            { letter: "A", text: "refuses to get involved in other people's troubles" },
            { letter: "B", text: "is secretly working for the Nazis in Morocco" },
            { letter: "C", text: "plans to leave Casablanca the very next day" },
            { letter: "D", text: "is a refugee waiting for papers of his own" }
          ],
          correct: "A"
        },
        {
          id: "why-there",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "According to the passage, why are so many people gathered in Casablanca?",
          choices: [
            { letter: "A", text: "They have come to hear the music at Rick's café." },
            { letter: "B", text: "They were born and raised in French Morocco." },
            { letter: "C", text: "They are waiting for papers to escape to America." },
            { letter: "D", text: "They are soldiers waiting to be sent into battle." }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The details in sentence 3 help create a mood of —",
          choices: [
            { letter: "A", text: "anxious waiting" },
            { letter: "B", text: "peaceful celebration" },
            { letter: "C", text: "quiet boredom" },
            { letter: "D", text: "carefree adventure" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-casablanca-song",
      family: "LIT",
      genre: "NOIR",
      episode: "casablanca",
      title: "As Time Goes By",
      kind: "Film history · 11.RI",
      blurb: "An old song, a forbidden request and a piano player who could not play the piano.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The song most closely tied to Casablanca was not written for it. " +
        N(2) + "\"As Time Goes By\" was composed by Herman Hupfeld in 1931, more than ten years before the film. " +
        N(3) + "In the movie it belongs to Rick and Ilsa's love affair in Paris, and Rick has forbidden his piano player, Sam, to perform it. " +
        N(4) + "When Ilsa walks into the café and asks Sam to play it, the past comes rushing back. " +
        N(5) + "Oddly, Dooley Wilson, who played Sam, was not a pianist; he pretended to play while a studio musician played offscreen." +
        "</p>",
      claims: [
        {
          id: "opening",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author most likely begins with sentence 1 to —",
          choices: [
            { letter: "A", text: "argue that the song is weaker than the film" },
            { letter: "B", text: "open with a surprising fact about the song" },
            { letter: "C", text: "explain who Herman Hupfeld was" },
            { letter: "D", text: "describe the inside of Rick's café" }
          ],
          correct: "B"
        },
        {
          id: "song-symbol",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "In the film, the song mainly stands for —",
          choices: [
            { letter: "A", text: "Rick's love of jazz music" },
            { letter: "B", text: "the war raging in Europe" },
            { letter: "C", text: "Rick and Ilsa's shared past" },
            { letter: "D", text: "Sam's wish to become famous" }
          ],
          correct: "C"
        },
        {
          id: "forbidden",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Rick's order in sentence 3 suggests that he —",
          choices: [
            { letter: "A", text: "thinks Sam is a poor pianist" },
            { letter: "B", text: "wants the café to stay quiet" },
            { letter: "C", text: "has never liked the song" },
            { letter: "D", text: "wants to avoid painful memories" }
          ],
          correct: "D"
        },
        {
          id: "composed",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *composed* most nearly means —",
          choices: [
            { letter: "A", text: "written" },
            { letter: "B", text: "calmed" },
            { letter: "C", text: "recorded" },
            { letter: "D", text: "sold" }
          ],
          correct: "A"
        },
        {
          id: "illusion",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 5 best supports which idea about filmmaking?",
          choices: [
            { letter: "A", text: "Movies can create convincing illusions." },
            { letter: "B", text: "Actors must master every skill they show." },
            { letter: "C", text: "Studio musicians were rarely paid well." },
            { letter: "D", text: "Old songs never work well in new films." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-casablanca-letters",
      family: "LIT",
      genre: "NOIR",
      episode: "casablanca",
      title: "Letters of Transit",
      kind: "Film analysis · 11.RL",
      blurb: "Two stolen papers, a resistance leader, his wife and the man she left behind.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The plot of Casablanca turns on two letters of transit, papers that let the holder leave Morocco with no questions asked. " +
        N(2) + "A small-time crook named Ugarte gets them by murdering two German couriers, then hands them to Rick for safekeeping just before the police arrest him. " +
        N(3) + "That same night Victor Laszlo, a famous leader of the resistance against the Nazis, arrives at the café with his wife. " +
        N(4) + "She is Ilsa Lund, the woman who left Rick in Paris without explaining why. " +
        N(5) + "Laszlo needs the letters to escape and continue his fight. " +
        N(6) + "Rick has them, and he is bitter enough to refuse. " +
        N(7) + "The letters are what filmmakers call a MacGuffin: an object that everyone wants, but that matters less for itself than for what it makes the characters do. " +
        N(8) + "The real question is not who gets the papers, but what kind of man Rick will choose to be." +
        "</p>",
      claims: [
        {
          id: "transit",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentence 1, letters of transit are —",
          choices: [
            { letter: "A", text: "papers that let a person leave the country" },
            { letter: "B", text: "love letters that Ilsa once wrote to Rick" },
            { letter: "C", text: "newspaper reports about the war in Europe" },
            { letter: "D", text: "tickets that admit guests to Rick's café" }
          ],
          correct: "A"
        },
        {
          id: "macguffin",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "According to sentence 7, a MacGuffin is —",
          choices: [
            { letter: "A", text: "a character who betrays the hero" },
            { letter: "B", text: "a twist revealed in the last scene" },
            { letter: "C", text: "a sought-after object that drives the action" },
            { letter: "D", text: "a shot showing a character's point of view" }
          ],
          correct: "C"
        },
        {
          id: "ilsa",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does sentence 4 complicate the plot?",
          choices: [
            { letter: "A", text: "It reveals that Laszlo secretly works for the police." },
            { letter: "B", text: "It ties the fight over the letters to Rick's broken heart." },
            { letter: "C", text: "It explains how Ugarte got the letters in the first place." },
            { letter: "D", text: "It shows that Rick has already left Casablanca." }
          ],
          correct: "B"
        },
        {
          id: "bitter",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which word best describes Rick's attitude in sentence 6?",
          choices: [
            { letter: "A", text: "cheerful" },
            { letter: "B", text: "generous" },
            { letter: "C", text: "frightened" },
            { letter: "D", text: "resentful" }
          ],
          correct: "D"
        },
        {
          id: "value-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO sentences best explain why the letters are so valuable? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "real-question",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Sentence 8 suggests that the film's central conflict is mainly about —",
          choices: [
            { letter: "A", text: "a chase across North Africa" },
            { letter: "B", text: "a moral choice inside Rick" },
            { letter: "C", text: "the trial of the crook Ugarte" },
            { letter: "D", text: "the price of the stolen letters" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-casablanca-shadows",
      family: "LIT",
      genre: "NOIR",
      episode: "casablanca",
      title: "Shadows at Rick's",
      kind: "Film language · 11.RV",
      blurb: "Casablanca borrows the look of film noir: night, searchlights, close-ups and fog.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Casablanca's cinematographer, Arthur Edeson, had also shot The Maltese Falcon (1941), the film often named as the first classic film noir. " +
        N(2) + "He brought some of that look to Rick's world. " +
        N(3) + "Much of the story unfolds at night, in rooms where lamps leave deep pools of shadow, a style called <strong>low-key lighting</strong>. " +
        N(4) + "Outside the café, the beam of a <strong>searchlight</strong> sweeps past again and again, a reminder that everyone in the city is being watched. " +
        N(5) + "Ilsa, by contrast, is often shown in <strong>close-ups</strong> bathed in gentle light that makes her face glow almost like a memory. " +
        N(6) + "In the final scene, the airport is wrapped in <strong>fog</strong>, which hides the edges of the world and makes the farewell feel private and uncertain. " +
        N(7) + "Yet all these shadows serve a love story more than a crime story." +
        "</p>",
      claims: [
        {
          id: "falcon",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Why does the author mention The Maltese Falcon in sentence 1?",
          choices: [
            { letter: "A", text: "to compare the plots of two war movies" },
            { letter: "B", text: "to show that Bogart directed both films" },
            { letter: "C", text: "to link Casablanca's look to an early noir" },
            { letter: "D", text: "to explain why Casablanca was in color" }
          ],
          correct: "C"
        },
        {
          id: "searchlight",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The searchlight in sentence 4 most likely symbolizes —",
          choices: [
            { letter: "A", text: "constant watching and danger" },
            { letter: "B", text: "hope for a peaceful future" },
            { letter: "C", text: "the bright life of the nightclub" },
            { letter: "D", text: "Rick's love for Ilsa" }
          ],
          correct: "A"
        },
        {
          id: "pools",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Which phrase in sentence 3 best shows the effect of low-key lighting?",
          choices: [
            { letter: "A", text: "\"much of the story\"" },
            { letter: "B", text: "\"unfolds at night\"" },
            { letter: "C", text: "\"in rooms where lamps\"" },
            { letter: "D", text: "\"deep pools of shadow\"" }
          ],
          correct: "D"
        },
        {
          id: "ilsa-light",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "According to sentence 5, how does the lighting of Ilsa differ from the film's usual look?",
          choices: [
            { letter: "A", text: "It is harsher, making her seem dangerous." },
            { letter: "B", text: "It is softer, linking her to romance and memory." },
            { letter: "C", text: "It is colored, setting her apart from the others." },
            { letter: "D", text: "It is darker, hiding her face from the audience." }
          ],
          correct: "B"
        },
        {
          id: "love-story",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Sentence 7 suggests that, in Casablanca, noir-style lighting is used mainly to —",
          choices: [
            { letter: "A", text: "heighten a romance rather than a crime story" },
            { letter: "B", text: "hide the fact that the film had no real sets" },
            { letter: "C", text: "show the audience that Rick is the villain" },
            { letter: "D", text: "copy the bright look of studio musicals" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-casablanca-great",
      family: "LIT",
      genre: "NOIR",
      episode: "casablanca",
      title: "What's So Great About Casablanca?",
      kind: "Film review · 11.RI",
      blurb: "A studio picture nobody expected to last. Why is it still loved more than eighty years later?",
      level: 2,
      passage:
        "<p>" +
        N(1) + "When Warner Bros. made Casablanca in 1942, no one treated it as a masterpiece in the making. " +
        N(2) + "It was one of dozens of films the studio made that year, adapted from an unproduced play called Everybody Comes to Rick's. " +
        N(3) + "Twins Julius and Philip Epstein wrote the script with Howard Koch, and director Michael Curtiz kept it moving fast. " +
        N(4) + "Then history lent a hand. " +
        N(5) + "In November 1942, just weeks before the film's premiere in New York, Allied troops landed in North Africa and took Casablanca, putting the title in headlines everywhere. " +
        N(6) + "The film went on to win the Academy Award for Best Picture, along with Oscars for Curtiz and for the screenplay.</p>" +
        "<p>" + N(7) + "Timing alone, however, cannot explain why audiences still love it more than eighty years later. " +
        N(8) + "The film blends genres that rarely fit together: romance, war story, comedy and political thriller. " +
        N(9) + "Its supporting cast, many of them real refugees from Nazi Europe, gives the café a crowded, lived-in truth. " +
        N(10) + "Its dialogue is so quotable that several of its lines have slipped into everyday speech. " +
        N(11) + "Above all, it asks a question every viewer understands: what would you give up for something larger than yourself? " +
        N(12) + "Rick's answer, at the airport, turns a cynic into a hero, and that change is the heart of the film's greatness." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "What is the author's main claim in paragraph 2?",
          choices: [
            { letter: "A", text: "Casablanca succeeded only because of lucky timing." },
            { letter: "B", text: "The film's actors were better than its writers." },
            { letter: "C", text: "Most war films are forgotten within a few years." },
            { letter: "D", text: "The film lasts because of qualities beyond timing." }
          ],
          correct: "D"
        },
        {
          id: "lent-a-hand",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 4, the phrase *history lent a hand* means that —",
          choices: [
            { letter: "A", text: "historians helped the writers with the script" },
            { letter: "B", text: "real events happened to help the film" },
            { letter: "C", text: "the studio changed the film's ending" },
            { letter: "D", text: "the war delayed the film's release" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How does sentence 7 function in the passage?",
          choices: [
            { letter: "A", text: "It shifts from the film's lucky timing to its lasting qualities." },
            { letter: "B", text: "It introduces a counterargument that the author accepts." },
            { letter: "C", text: "It sums up the plot of the film in a single sentence." },
            { letter: "D", text: "It lists the awards that the film won in 1943." }
          ],
          correct: "A"
        },
        {
          id: "not-expected",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which detail best supports the claim in sentence 1 that no one expected Casablanca to be a masterpiece?",
          choices: [
            { letter: "A", text: "It won the Academy Award for Best Picture." },
            { letter: "B", text: "Its lines are still quoted in everyday speech." },
            { letter: "C", text: "It was one of dozens of films the studio made." },
            { letter: "D", text: "Its cast included real refugees from Europe." }
          ],
          correct: "C"
        },
        {
          id: "reasons-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO details does the author give as reasons the film has lasted? Select TWO.",
          choices: [
            { letter: "A", text: "its premiere in November 1942" },
            { letter: "B", text: "its blend of several genres" },
            { letter: "C", text: "its source, an unproduced play" },
            { letter: "D", text: "its cast of real refugees" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "lived-in",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 9, the phrase *lived-in truth* suggests that the café feels —",
          choices: [
            { letter: "A", text: "real and full of human experience" },
            { letter: "B", text: "empty and quiet late at night" },
            { letter: "C", text: "brand-new and freshly painted" },
            { letter: "D", text: "small and uncomfortable to sit in" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-casablanca-noir-or-no",
      family: "LIT",
      genre: "NOIR",
      episode: "casablanca",
      title: "Noir or No?",
      kind: "Paired texts · 11.DSR",
      blurb: "Two critics weigh Casablanca against the noir checklist and reach opposite verdicts.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Yes: A Noir in Disguise</strong></p>" +
        "<p>" + N(1) + "Put Casablanca beside a checklist of noir elements, and the matches pile up quickly. " +
        N(2) + "Its hero is a cynic in a white dinner jacket who drinks alone and claims to care about no one but himself. " +
        N(3) + "Rick is played by Humphrey Bogart, who had just become the face of noir as the detective Sam Spade in The Maltese Falcon (1941). " +
        N(4) + "The film's world is corrupt: Captain Renault, the French police chief, hands out exit visas in exchange for bribes and favors, and the story opens with news of two murdered couriers. " +
        N(5) + "Most scenes take place at night, in a smoky club full of shadows, and the plot turns on a flashback to a lost love in Paris. " +
        N(6) + "Ilsa, too, carries a hint of the femme fatale: a beautiful woman from the hero's past who returns to upend his life and who, at one point, even aims a gun at him to get the letters. " +
        N(7) + "Behind the camera stood the same European tradition that shaped noir. " +
        N(8) + "Director Michael Curtiz was born in Hungary, and many of the actors had fled Hitler's Europe. " +
        N(9) + "The cinematographer, Arthur Edeson, had shot The Maltese Falcon. " +
        N(10) + "Casablanca may wear the clothes of a romance, but underneath, it has the bones of a noir.</p>" +
        "<p><strong>Text 2 — No: A Wartime Romance</strong></p>" +
        "<p>" + N(11) + "A checklist, though, can count the ingredients without tasting the dish. " +
        N(12) + "Film noir is defined less by its shadows than by its outlook: a belief that people are trapped, that desire leads to ruin and that the ending will be bleak. " +
        N(13) + "Casablanca believes almost the opposite. " +
        N(14) + "Its cynic turns out to have a buried idealism; we learn that he once ran guns to Ethiopia and fought against fascism in Spain. " +
        N(15) + "Ilsa is no femme fatale: she never schemes to destroy Rick, and when she aims that gun, she cannot bring herself to fire. " +
        N(16) + "The struggle at the center is not a murder for money but a contest over who will escape the Nazis. " +
        N(17) + "And the ending offers sacrifice and hope instead of doom: Rick gives up the woman he loves so that Laszlo can keep fighting, then walks off into the fog toward the war beside Renault, who has finally chosen a side too. " +
        N(18) + "Released in the middle of World War II, the film asks audiences to believe that one person's choices matter. " +
        N(19) + "The classic noirs, most of them made after the war, doubt that anything does. " +
        N(20) + "Casablanca borrows noir's look, but its heart belongs to another genre." +
        "</p>",
      claims: [
        {
          id: "claim1",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "What is the main claim of Text 1?",
          choices: [
            { letter: "A", text: "Beneath its romance, Casablanca is built like a film noir." },
            { letter: "B", text: "Casablanca is a weaker film than The Maltese Falcon." },
            { letter: "C", text: "Casablanca's cast was made up mostly of Americans." },
            { letter: "D", text: "Casablanca should have been filmed in color, not shadow." }
          ],
          correct: "A"
        },
        {
          id: "bogart",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which detail from Text 1 best links Rick's character to the noir tradition?",
          choices: [
            { letter: "A", text: "Michael Curtiz was born in Hungary." },
            { letter: "B", text: "The plot turns on a flashback to Paris." },
            { letter: "C", text: "Bogart had just played the detective Sam Spade." },
            { letter: "D", text: "Renault trades exit visas for favors." }
          ],
          correct: "C"
        },
        {
          id: "dish",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "In sentence 11, the author of Text 2 suggests that a checklist —",
          choices: [
            { letter: "A", text: "is the most reliable tool for judging any film" },
            { letter: "B", text: "can list a film's parts but miss its overall meaning" },
            { letter: "C", text: "should include more details about the film's food" },
            { letter: "D", text: "was written by critics who dislike film noir" }
          ],
          correct: "B"
        },
        {
          id: "gun",
          sol: "11.RI.3.A",
          sub: "11.RI.3.A.1",
          stem: "How do the two texts treat the moment when Ilsa aims a gun at Rick?",
          choices: [
            { letter: "A", text: "Both texts treat it as a minor, unimportant detail." },
            { letter: "B", text: "Text 1 calls it proof of villainy; Text 2 says it never happens." },
            { letter: "C", text: "Both texts use it as proof that Ilsa is a femme fatale." },
            { letter: "D", text: "Text 1 sees a hint of danger in it; Text 2 stresses she cannot fire." }
          ],
          correct: "D"
        },
        {
          id: "agree-two",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which TWO points do BOTH authors accept? Select TWO.",
          choices: [
            { letter: "A", text: "Casablanca uses noir's visual style." },
            { letter: "B", text: "Casablanca ends in doom for its hero." },
            { letter: "C", text: "Ilsa schemes to destroy Rick's life." },
            { letter: "D", text: "Rick begins the film as a cynic." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "idealism",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 14, the word *idealism* most nearly means —",
          choices: [
            { letter: "A", text: "fear of danger" },
            { letter: "B", text: "love of money" },
            { letter: "C", text: "belief in noble causes" },
            { letter: "D", text: "skill at games of chance" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which piece of evidence in Text 2 most directly challenges the idea that Casablanca is a noir?",
          choices: [
            { letter: "A", text: "The film was made by Warner Bros. in 1942." },
            { letter: "B", text: "Its ending rewards sacrifice with hope, not doom." },
            { letter: "C", text: "The airport in the last scene is covered in fog." },
            { letter: "D", text: "Renault walks off into the fog beside Rick." }
          ],
          correct: "B"
        },
        {
          id: "conclusions",
          sol: "11.RI.3.A",
          sub: "11.RI.3.A.1",
          stem: "Which statement best explains why the two authors reach different conclusions?",
          choices: [
            { letter: "A", text: "Text 1 judges by surface features; Text 2 judges by the film's outlook." },
            { letter: "B", text: "Text 1 has seen the film; Text 2 has only read reviews of it." },
            { letter: "C", text: "Text 1 focuses only on the ending; Text 2 ignores the ending." },
            { letter: "D", text: "Text 1 counts awards; Text 2 counts the film's box office." }
          ],
          correct: "A"
        }
      ]
    },

    /* ═════════════════════════════ NOIR BASICS: WHAT MAKES A NOIR ═════════════════════════════ */
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-noir-black-film",
      family: "LIT",
      genre: "NOIR",
      episode: "noir",
      title: "Black Film",
      kind: "Film history · 11.RI",
      blurb: "Where the name film noir came from, and why Hollywood never used it.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The term film noir is French for \"black film\" or \"dark film.\" " +
        N(2) + "During World War II, the Nazi occupation kept new Hollywood movies out of France. " +
        N(3) + "After the war, French critics suddenly saw years of American crime films in a rush. " +
        N(4) + "Struck by how dark and bitter these stories were, a critic named Nino Frank called them films noirs in 1946. " +
        N(5) + "Hollywood studios never used the label at the time; to them, these were simply crime pictures and thrillers." +
        "</p>",
      claims: [
        {
          id: "noir-word",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Based on sentence 1, the French word *noir* means —",
          choices: [
            { letter: "A", text: "crime or mystery" },
            { letter: "B", text: "story or tale" },
            { letter: "C", text: "black or dark" },
            { letter: "D", text: "film or movie" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "According to sentences 2 and 3, why did French critics see so many American crime films at once?",
          choices: [
            { letter: "A", text: "The war had kept Hollywood films out of France." },
            { letter: "B", text: "Hollywood made more films after the war ended." },
            { letter: "C", text: "French theaters showed only crime films in 1946." },
            { letter: "D", text: "The critics had moved to America during the war." }
          ],
          correct: "A"
        },
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which topic does the passage mainly explain?",
          choices: [
            { letter: "A", text: "why Hollywood studios disliked crime films" },
            { letter: "B", text: "how the Nazis censored French newspapers" },
            { letter: "C", text: "the life and career of the critic Nino Frank" },
            { letter: "D", text: "where the term film noir came from" }
          ],
          correct: "D"
        },
        {
          id: "label",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Sentence 5 shows that the term film noir was —",
          choices: [
            { letter: "A", text: "a label Hollywood invented to sell tickets" },
            { letter: "B", text: "a name given by outsiders, not the filmmakers" },
            { letter: "C", text: "a term used only for movies made in France" },
            { letter: "D", text: "a genre that ended the year it was named" }
          ],
          correct: "B"
        },
        {
          id: "struck",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *struck* most nearly means —",
          choices: [
            { letter: "A", text: "hit with a fist" },
            { letter: "B", text: "deeply impressed" },
            { letter: "C", text: "out on strike" },
            { letter: "D", text: "crossed off a list" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-noir-blinds-poem",
      family: "LIT",
      genre: "NOIR",
      episode: "noir",
      title: "Venetian Blinds",
      kind: "Film Noir · 11.RL",
      blurb: "An original poem that turns the look of film noir into eight lines.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The blinds cut the streetlight into bars<br>" +
        L(2) + "and stripe a man who can't sleep yet.<br>" +
        L(3) + "Smoke climbs the lamp like a slow confession;<br>" +
        L(4) + "and every tick adds to his regret.<br>" +
        L(5) + "Below, the rain keeps its own secrets,<br>" +
        L(6) + "and neon blinks a name it won't repeat.<br>" +
        L(7) + "He tells his story to the dark, in past tense:<br>" +
        L(8) + "the ending's waiting for him on the street." +
        "</p>",
      claims: [
        {
          id: "bars",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 1, the image of blinds cutting light into bars suggests that the man —",
          choices: [
            { letter: "A", text: "is trapped, like a prisoner" },
            { letter: "B", text: "is about to fall asleep" },
            { letter: "C", text: "works as a window maker" },
            { letter: "D", text: "is waiting for morning" }
          ],
          correct: "A"
        },
        {
          id: "personify-two",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Which TWO lines give human qualities to things in the setting? Select TWO.",
          choices: [
            { letter: "A", text: "Line 2" },
            { letter: "B", text: "Line 5" },
            { letter: "C", text: "Line 6" },
            { letter: "D", text: "Line 7" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "confession",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In line 3, smoke is compared to a slow confession. This simile suggests that —",
          choices: [
            { letter: "A", text: "the room is about to catch fire" },
            { letter: "B", text: "the man has quit smoking" },
            { letter: "C", text: "the lamp is broken and dim" },
            { letter: "D", text: "a guilty secret is slowly coming out" }
          ],
          correct: "D"
        },
        {
          id: "voiceover",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "Line 7 most closely describes which film noir technique?",
          choices: [
            { letter: "A", text: "a Dutch angle" },
            { letter: "B", text: "voiceover narration" },
            { letter: "C", text: "a choker close-up" },
            { letter: "D", text: "a deep-focus shot" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "The final line suggests that the man's future is —",
          choices: [
            { letter: "A", text: "bright and hopeful" },
            { letter: "B", text: "open and unknown" },
            { letter: "C", text: "fixed and grim" },
            { letter: "D", text: "about to improve" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-noir-roots",
      family: "LIT",
      genre: "NOIR",
      episode: "noir",
      title: "Three Roots",
      kind: "Film history · 11.RI",
      blurb: "German shadows, émigré directors and hardboiled pulp: where film noir came from.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Film noir grew from three roots. " +
        N(2) + "The first was German Expressionism, a 1920s movement whose films, such as The Cabinet of Dr. Caligari (1920), used twisted sets and harsh shadows to show disturbed minds. " +
        N(3) + "The second root was people. " +
        N(4) + "When the Nazis took power in Germany in 1933, many filmmakers, a large number of them Jewish, fled to Hollywood, and directors such as Fritz Lang, Billy Wilder and Robert Siodmak brought a dark European eye to American crime stories. " +
        N(5) + "The third root was hardboiled fiction: the tough, cynical crime writing of Dashiell Hammett, Raymond Chandler and James M. Cain, much of it first printed in cheap \"pulp\" magazines. " +
        N(6) + "From these roots grew the classic noir cycle, usually dated from The Maltese Falcon (1941) to Touch of Evil (1958)." +
        "</p>",
      claims: [
        {
          id: "organized",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize the passage?",
          choices: [
            { letter: "A", text: "as a comparison of two films" },
            { letter: "B", text: "as a list of three sources, one after another" },
            { letter: "C", text: "as a problem followed by its solution" },
            { letter: "D", text: "as one story told in time order" }
          ],
          correct: "B"
        },
        {
          id: "expressionism",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentence 2, German Expressionist films used —",
          choices: [
            { letter: "A", text: "bright colors and musical numbers" },
            { letter: "B", text: "real locations and natural light" },
            { letter: "C", text: "long, silent takes of landscapes" },
            { letter: "D", text: "twisted sets and harsh shadows" }
          ],
          correct: "D"
        },
        {
          id: "fled",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "According to sentence 4, why did many European filmmakers come to Hollywood?",
          choices: [
            { letter: "A", text: "They fled after the Nazis took power." },
            { letter: "B", text: "They were hired to make musicals." },
            { letter: "C", text: "They wanted to learn to make color films." },
            { letter: "D", text: "They were sent by French critics." }
          ],
          correct: "A"
        },
        {
          id: "cynical",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *cynical* most nearly means —",
          choices: [
            { letter: "A", text: "cheerful and trusting" },
            { letter: "B", text: "careful and scientific" },
            { letter: "C", text: "distrustful of people's motives" },
            { letter: "D", text: "gentle and poetic" }
          ],
          correct: "C"
        },
        {
          id: "writers-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which TWO names belong to the passage's third root? Select TWO.",
          choices: [
            { letter: "A", text: "Dashiell Hammett" },
            { letter: "B", text: "Robert Siodmak" },
            { letter: "C", text: "James M. Cain" },
            { letter: "D", text: "Fritz Lang" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "era",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Sentence 6 tells readers that the classic noir era —",
          choices: [
            { letter: "A", text: "began in Germany in 1920" },
            { letter: "B", text: "ran from about 1941 to 1958" },
            { letter: "C", text: "ended when Lang left Hollywood" },
            { letter: "D", text: "began with Touch of Evil" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-noir-rules",
      family: "LIT",
      genre: "NOIR",
      episode: "noir",
      title: "Breaking Hollywood's Rules",
      kind: "Film language · 11.RV",
      blurb: "Asymmetry, no fill light, deep focus, Dutch angles and choker close-ups.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Classic Hollywood had rules for a good-looking picture, and film noir broke nearly all of them. " +
        N(2) + "Studios liked balanced frames; noir preferred <strong>asymmetrical</strong> compositions, with the weight piled on one side so the image feels off balance. " +
        N(3) + "Studios used a soft <strong>fill light</strong> to erase harsh shadows; noir left it out, so faces were half swallowed by darkness. " +
        N(4) + "Noir often used <strong>deep focus</strong>, keeping near and distant objects sharp at once, so danger could lurk in the background. " +
        N(5) + "The camera, normally an invisible observer at eye level, dropped to the floor or climbed to the ceiling, and sometimes tilted into a <strong>Dutch angle</strong> that made the horizon slant. " +
        N(6) + "Finally, noir pushed in for <strong>choker close-ups</strong>, framed so tightly that a face filled the screen from forehead to chin." +
        "</p>",
      claims: [
        {
          id: "asymmetrical",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The prefix *a-* can mean \"not.\" Based on this and sentence 2, an *asymmetrical* composition is one that is —",
          choices: [
            { letter: "A", text: "not balanced" },
            { letter: "B", text: "not in focus" },
            { letter: "C", text: "not lit at all" },
            { letter: "D", text: "not in color" }
          ],
          correct: "A"
        },
        {
          id: "fill",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentence 3, the job of a fill light is to —",
          choices: [
            { letter: "A", text: "light only the background" },
            { letter: "B", text: "add color to actors' faces" },
            { letter: "C", text: "soften the shadows" },
            { letter: "D", text: "make the frame darker" }
          ],
          correct: "C"
        },
        {
          id: "deep-focus",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Which technique keeps both near and distant objects sharp at the same time?",
          choices: [
            { letter: "A", text: "fill light" },
            { letter: "B", text: "deep focus" },
            { letter: "C", text: "a Dutch angle" },
            { letter: "D", text: "a choker close-up" }
          ],
          correct: "B"
        },
        {
          id: "dutch",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "A director wants viewers to feel that a character's world has tipped into madness. Which technique from the passage fits best?",
          choices: [
            { letter: "A", text: "fill light" },
            { letter: "B", text: "deep focus" },
            { letter: "C", text: "a balanced frame" },
            { letter: "D", text: "a Dutch angle" }
          ],
          correct: "D"
        },
        {
          id: "pattern",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which pattern does the author use in sentences 2 and 3?",
          choices: [
            { letter: "A", text: "a problem followed by a solution" },
            { letter: "B", text: "a contrast between Hollywood and noir" },
            { letter: "C", text: "events listed in time order" },
            { letter: "D", text: "a definition followed by a story" }
          ],
          correct: "B"
        },
        {
          id: "support",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The details in the passage mainly support the idea that noir —",
          choices: [
            { letter: "A", text: "was cheaper to film than classic movies" },
            { letter: "B", text: "used older cameras than the big studios" },
            { letter: "C", text: "broke visual rules to unsettle viewers" },
            { letter: "D", text: "avoided close-ups whenever it could" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-noir-code",
      family: "LIT",
      genre: "NOIR",
      episode: "noir",
      title: "The Code and the Shadows",
      kind: "Film history · 11.RI",
      blurb: "How Hollywood's censorship rules and the mood of the 1940s shaped film noir.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "From 1934 until the late 1960s, every Hollywood film had to pass the Production Code, often called the Hays Code after Will Hays, the industry official whose office oversaw it. " +
        N(2) + "The Code limited what movies could show about sex and violence, and it insisted that crime be punished by the end. " +
        N(3) + "At first glance, these rules should have smothered film noir, a genre built on murder, greed and desire.</p>" +
        "<p>" + N(4) + "Instead, the limits pushed noir filmmakers toward suggestion. " +
        N(5) + "A killing could happen just outside the frame, told by a scream or a shadow on a wall. " +
        N(6) + "Desire could live in a glance, a shared cigarette or a woman framed in a doorway. " +
        N(7) + "What could not be said aloud was expressed through lighting and composition: tilted angles, crushing darkness, bars of shadow. " +
        N(8) + "In this way, the Code may have made noir more stylish, not less.</p>" +
        "<p>" + N(9) + "Noir's storytelling grew darker, too. " +
        N(10) + "Many films are narrated in voiceover by a doomed man looking back, so the plot unfolds as one long flashback. " +
        N(11) + "Viewers know from the start that things will end badly, and the suspense comes from watching how. " +
        N(12) + "This fatalism, the sense that fate cannot be escaped, fit the mood of the 1940s. " +
        N(13) + "Americans had lived through the Depression and a world war, and many returning soldiers came home to a country that felt strange to them. " +
        N(14) + "Noir gave that unease a shape." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best captures the main idea of the passage?",
          choices: [
            { letter: "A", text: "The Hays Code destroyed film noir by the early 1950s." },
            { letter: "B", text: "Will Hays wrote many of the best noir screenplays." },
            { letter: "C", text: "Censorship and the era's mood shaped noir's style." },
            { letter: "D", text: "Noir avoided crime stories in order to please censors." }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "Sentences 3 and 8 together point out an irony: rules that should have hurt noir instead —",
          choices: [
            { letter: "A", text: "may have made it more stylish" },
            { letter: "B", text: "made it more popular in France" },
            { letter: "C", text: "ended it within a few years" },
            { letter: "D", text: "forced it to switch to color" }
          ],
          correct: "A"
        },
        {
          id: "smothered",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *smothered* most nearly means —",
          choices: [
            { letter: "A", text: "praised" },
            { letter: "B", text: "funded" },
            { letter: "C", text: "copied" },
            { letter: "D", text: "killed off" }
          ],
          correct: "D"
        },
        {
          id: "fatalism",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 12, *fatalism* is —",
          choices: [
            { letter: "A", text: "a fear of large crowds and cities" },
            { letter: "B", text: "the belief that what will happen cannot be avoided" },
            { letter: "C", text: "a style of lighting with no shadows" },
            { letter: "D", text: "the habit of telling stories in order" }
          ],
          correct: "B"
        },
        {
          id: "suggestion-two",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Which TWO sentences give examples of noir suggesting something instead of showing it? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "mood",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "According to paragraph 3, why did noir's fatalism fit the 1940s?",
          choices: [
            { letter: "A", text: "Movie tickets had become too expensive." },
            { letter: "B", text: "Audiences wanted only happy endings." },
            { letter: "C", text: "Americans had lived through hard, unsettling years." },
            { letter: "D", text: "The Code required every film to end sadly." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-noir-checklist",
      family: "LIT",
      genre: "NOIR",
      episode: "noir",
      title: "Darkness Visible",
      kind: "Film history · 11.RI",
      blurb: "A checklist of noir's ingredients, the one film that has them all and the neo-noirs that came after.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "What makes a film noir? " +
        N(2) + "Critics have argued about this for decades, partly because noir was never an official genre with official rules. " +
        N(3) + "An infographic called \"Darkness Visible,\" made for the British Film Institute (BFI), tried a different approach: it boiled noir down to a checklist and then tested famous films against it.</p>" +
        "<p>" + N(4) + "The checklist begins with people. " +
        N(5) + "There is an investigator of relative integrity, such as the private eyes Sam Spade and Philip Marlowe: not a saint, but more honest than the world around him. " +
        N(6) + "There is a criminal, usually a murderer. " +
        N(7) + "And there are two women: a bad, beautiful femme fatale who leads the hero astray, and a good but bland woman who offers a safer life that he rarely chooses.</p>" +
        "<p>" + N(8) + "Next come the story elements. " +
        N(9) + "The list includes stolen money or valuables, a script drawn from American pulp fiction, heavy smoking and drinking, and an obsession with the past, usually shown through flashbacks. " +
        N(10) + "It adds a complicated, even far-fetched plot, a city setting such as Los Angeles or San Francisco, and a bleak view of humanity that leads to a downbeat ending. " +
        N(11) + "Finally comes style: dark, oppressive lighting, quick-fire poetic dialogue, technically ingenious direction and a poster with a startling tagline.</p>" +
        "<p>" + N(12) + "When the films were scored, only one, Double Indemnity (1944), had every item. " +
        N(13) + "A count of critics' best-of lists, gathered for the same project, also put it at the top, tied with Out of the Past (1947) and Touch of Evil (1958). " +
        N(14) + "The two measures, one counting ingredients and one counting opinions, pointed to the same film.</p>" +
        "<p>" + N(15) + "A checklist has limits. " +
        N(16) + "It can tell us what noir usually contains, but not why a particular film grips us, and some great noirs miss several boxes. " +
        N(17) + "Still, the ingredients have proved remarkably durable. " +
        N(18) + "After the classic era ended, filmmakers kept returning to them in what is called neo-noir, or \"new noir.\" " +
        N(19) + "Chinatown (1974) sent a private eye through a sun-bleached Los Angeles of the 1930s; Blade Runner (1982) followed a weary hunter through a rain-soaked city of the future; and Memento (2000) told much of its story backward, an extreme version of noir's obsession with the past. " +
        N(20) + "Meanwhile, groups such as the Film Noir Foundation, led by the writer Eddie Muller, work to rescue and restore old noir prints so that new audiences can see them on the big screen." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the passage as a whole?",
          choices: [
            { letter: "A", text: "Film noir has no features that viewers can recognize." },
            { letter: "B", text: "A checklist reveals noir's common ingredients, which still shape films." },
            { letter: "C", text: "Double Indemnity is the only film noir still worth watching." },
            { letter: "D", text: "The British Film Institute invented film noir in the 1940s." }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize paragraphs 2 and 3?",
          choices: [
            { letter: "A", text: "by comparing two films scene by scene" },
            { letter: "B", text: "by tracing noir's history decade by decade" },
            { letter: "C", text: "by arguing for and then against the checklist" },
            { letter: "D", text: "by moving through the checklist's groups of elements" }
          ],
          correct: "D"
        },
        {
          id: "astray",
          sol: "11.RV.1.E",
          sub: "11.RV.1.E.1",
          stem: "In sentence 7, the phrase *leads the hero astray* means that the femme fatale —",
          choices: [
            { letter: "A", text: "draws him into wrongdoing" },
            { letter: "B", text: "guides him safely home" },
            { letter: "C", text: "helps him solve the case" },
            { letter: "D", text: "leaves him alone at last" }
          ],
          correct: "A"
        },
        {
          id: "two-measures",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "What conclusion does the author draw in sentence 14?",
          choices: [
            { letter: "A", text: "The checklist and the critics disagree." },
            { letter: "B", text: "Critics' lists are more reliable than checklists." },
            { letter: "C", text: "Two different measures agree on one film." },
            { letter: "D", text: "Touch of Evil is the best film noir of all." }
          ],
          correct: "C"
        },
        {
          id: "limits-two",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which TWO limits of the checklist does the author name in paragraph 5? Select TWO.",
          choices: [
            { letter: "A", text: "It was made in Britain rather than America." },
            { letter: "B", text: "It cannot explain why a film grips us." },
            { letter: "C", text: "It leaves out the femme fatale entirely." },
            { letter: "D", text: "Some great noirs miss several boxes." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "memento",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "According to sentence 19, Memento connects to classic noir through —",
          choices: [
            { letter: "A", text: "its focus on the past, pushed to an extreme" },
            { letter: "B", text: "its setting in Los Angeles in the 1930s" },
            { letter: "C", text: "its private eye of relative integrity" },
            { letter: "D", text: "its poster with a startling tagline" }
          ],
          correct: "A"
        },
        {
          id: "neo-noir",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 18, *neo-noir* refers to —",
          choices: [
            { letter: "A", text: "French crime films of the 1940s" },
            { letter: "B", text: "silent films with dark lighting" },
            { letter: "C", text: "later films that revive noir's elements" },
            { letter: "D", text: "old films restored by a foundation" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author most likely ends with sentence 20 to show that —",
          choices: [
            { letter: "A", text: "old noir prints are too damaged to watch" },
            { letter: "B", text: "Eddie Muller directed most of the neo-noirs" },
            { letter: "C", text: "the BFI disapproves of restoring old films" },
            { letter: "D", text: "classic noir is still kept alive for new viewers" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
