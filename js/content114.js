/* SOL Labyrinth — Lit and Film: FILM HISTORY (grades 11-12 Literature and Film elective, family LIT, genre HISTORY)
 * Thirty original packs in five episodes of six (2 tiny, 2 short, 1 medium, 1 long each):
 *   train   — the origins: optical toys, Marey, Edison's Kinetograph and Kinetoscope, the Vitascope, nickelodeons,
 *             the Lumières' Cinematograph and Arrival of a Train at La Ciotat (and its legend)
 *   moon    — Georges Méliès and A Trip to the Moon (1902; public domain, retold scene by scene)
 *   circus  — the silent era through Chaplin's The Circus (1928; copyrighted, summarized only)
 *   jazz    — sound: the phonograph, Vitaphone, Don Juan, The Jazz Singer, the cost of the switch
 *   history — the genre basics: the studio system, the Production Code, and how color came to the movies
 * Original text only: facts from the teacher's slides and readings (tools/lit/SOURCES.md), never their sentences,
 * and no quoted film dialogue. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ═════════════ EPISODE: train — Arrival of a Train (1895) and the origins of cinema ═════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-train-optical-toys",
      family: "LIT",
      genre: "HISTORY",
      episode: "train",
      title: "Toys That Fooled the Eye",
      kind: "Film history · 11.RI",
      blurb: "Before cameras, spinning discs, drums and flip books made pictures move.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Long before films, people played with toys that fooled the eye. " +
        N(2) + "A thaumatrope was a paper disc with a bird drawn on one side and an empty cage on the other. " +
        N(3) + "When the disc spun on its strings, the two pictures blended, and the bird seemed to sit inside the cage. " +
        N(4) + "A zoetrope was a spinning drum with slits; through them, drawings inside seemed to run. " +
        N(5) + "A flip book did the same with pages flicked by a thumb. " +
        N(6) + "Each toy showed still pictures so quickly that the eye saw motion." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about optical toys?",
          choices: [
            { letter: "A", text: "Optical toys were costly machines that only trained scientists could use." },
            { letter: "B", text: "Simple toys created the look of motion by flashing still pictures." },
            { letter: "C", text: "The zoetrope was more popular than any other toy of its time." },
            { letter: "D", text: "Flip books replaced the thaumatrope because they were cheaper." }
          ],
          correct: "B"
        },
        {
          id: "cage",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "According to sentence 3, what does a viewer see when the thaumatrope spins?",
          choices: [
            { letter: "A", text: "The bird flies away from the empty cage." },
            { letter: "B", text: "The disc changes color from side to side." },
            { letter: "C", text: "The cage seems to open and close its door." },
            { letter: "D", text: "The bird appears to be inside the cage." }
          ],
          correct: "D"
        },
        {
          id: "fooled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the phrase *fooled the eye* most nearly means —",
          choices: [
            { letter: "A", text: "hurt the eyes of those who used them" },
            { letter: "B", text: "made people laugh out loud at their own silly mistakes" },
            { letter: "C", text: "tricked viewers into seeing something unreal" },
            { letter: "D", text: "helped weak eyes see small details clearly" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is the passage about optical toys mainly organized?",
          choices: [
            { letter: "A", text: "It describes three examples and then names what they share." },
            { letter: "B", text: "It tells the life story of the inventor of the zoetrope." },
            { letter: "C", text: "It argues that one toy was far better than the other two." },
            { letter: "D", text: "It lists the steps for building a thaumatrope at home." }
          ],
          correct: "A"
        },
        {
          id: "motion",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 6, the movement a viewer saw in these toys was —",
          choices: [
            { letter: "A", text: "caused by tiny motors hidden inside each toy" },
            { letter: "B", text: "made by the eye from a quick series of pictures" },
            { letter: "C", text: "real, because the drawings were cut out and moved" },
            { letter: "D", text: "visible only when the toy was held very still" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "lit-train-arrival-scene",
      family: "LIT",
      genre: "HISTORY",
      episode: "train",
      title: "Fifty Seconds on the Platform",
      kind: "Screen story · 11.RL",
      blurb: "The Lumières' camera waits on a platform as a steam train rolls in.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "A camera stands still on a railway platform in La Ciotat, a seaside town in France. " +
        N(2) + "Far down the track, a small dark shape appears and grows as it comes nearer. " +
        N(3) + "It is a steam train, sliding toward the camera on a long diagonal line. " +
        N(4) + "The engine looms larger and larger, then rushes past the edge of the picture. " +
        N(5) + "The cars roll to a stop, doors open, and passengers step down while others crowd forward to climb aboard. " +
        N(6) + "In less than a minute, the film is over." +
        "</p>",
      claims: [
        {
          id: "order",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which choice best describes the order of events in the scene?",
          choices: [
            { letter: "A", text: "A train appears far away, arrives, and people get on and off." },
            { letter: "B", text: "Passengers wait, a train breaks down, and everyone walks home." },
            { letter: "C", text: "A train leaves the station and shrinks into the distance." },
            { letter: "D", text: "Crowds gather to watch a camera being set up on the track." }
          ],
          correct: "A"
        },
        {
          id: "looms",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *looms* most nearly means —",
          choices: [
            { letter: "A", text: "slows down gently as it nears the station" },
            { letter: "B", text: "fades from sight" },
            { letter: "C", text: "appears huge and threatening" },
            { letter: "D", text: "makes a loud whistle" }
          ],
          correct: "C"
        },
        {
          id: "imagery",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Which detail creates the strongest sense of something moving toward the viewer?",
          choices: [
            { letter: "A", text: "\"a seaside town in France\"" },
            { letter: "B", text: "\"a small dark shape appears and grows\"" },
            { letter: "C", text: "\"doors open, and passengers step down\"" },
            { letter: "D", text: "\"In less than a minute, the film is over\"" }
          ],
          correct: "B"
        },
        {
          id: "fixed",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Because the camera \"stands still\" (sentence 1) and the film is never cut, the whole film is best described as —",
          choices: [
            { letter: "A", text: "a series of quick shots from many angles" },
            { letter: "B", text: "a moving shot taken from inside the train" },
            { letter: "C", text: "a set of still photographs shown in order" },
            { letter: "D", text: "one unbroken shot from a single position" }
          ],
          correct: "D"
        },
        {
          id: "everyday",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 5 suggests that the film mainly shows —",
          choices: [
            { letter: "A", text: "a dangerous accident at a crowded station" },
            { letter: "B", text: "actors performing a carefully planned story" },
            { letter: "C", text: "an ordinary moment from everyday life" },
            { letter: "D", text: "a famous person arriving for a celebration" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-train-edison-peephole",
      family: "LIT",
      genre: "HISTORY",
      episode: "train",
      title: "A Gun, a Camera and a Sneeze",
      kind: "Film history · 11.RI",
      blurb: "From Marey's camera gun to Edison's peephole machine and a famous sneeze.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The first moving images were made not for entertainment but for science. " +
        N(2) + "In 1882 the French scientist Étienne-Jules Marey built a camera shaped like a rifle, his chronophotographic gun, which shot a rapid series of pictures so he could study how birds fly. " +
        N(3) + "A few years later, Thomas Edison's laboratory in New Jersey, with much of the work done by his assistant William Kennedy Laurie Dickson, built the Kinetograph, a camera that took photographs one after another on a long strip of film. " +
        N(4) + "To watch the results, a customer bent over a wooden cabinet called the Kinetoscope and peered through a peephole, one viewer at a time. " +
        N(5) + "One early Edison film shows an employee named Fred Ott taking a pinch of snuff and sneezing. " +
        N(6) + "Copyrighted in January 1894, <em>Fred Ott's Sneeze</em> lasts only a few seconds, yet it is one of the earliest films ever copyrighted." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the passage about the first motion pictures?",
          choices: [
            { letter: "A", text: "Edison invented moving pictures alone, without any help." },
            { letter: "B", text: "Early films were long, carefully planned stories shown to large crowds." },
            { letter: "C", text: "Marey's camera gun was used mainly to hunt birds." },
            { letter: "D", text: "Moving pictures grew from science into Edison's camera and viewer." }
          ],
          correct: "D"
        },
        {
          id: "two-machines",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentences 3 and 4, how did the Kinetograph differ from the Kinetoscope?",
          choices: [
            { letter: "A", text: "The Kinetograph recorded pictures; the Kinetoscope let one person watch them." },
            { letter: "B", text: "The Kinetograph was French; the Kinetoscope was built in New Jersey." },
            { letter: "C", text: "The Kinetograph projected films; the Kinetoscope printed copies of them." },
            { letter: "D", text: "The Kinetograph showed color films; the Kinetoscope showed only black and white." }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author begins the passage about Marey and Edison with sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "argue that science is more important than entertainment" },
            { letter: "B", text: "explain why Edison disliked working with scientists" },
            { letter: "C", text: "show that the first moving pictures had a serious purpose" },
            { letter: "D", text: "suggest that early films were far too dull for paying audiences" }
          ],
          correct: "C"
        },
        {
          id: "peered",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *peered* most nearly means —",
          choices: [
            { letter: "A", text: "spoke quietly" },
            { letter: "B", text: "looked closely" },
            { letter: "C", text: "paid money" },
            { letter: "D", text: "waited patiently" }
          ],
          correct: "B"
        },
        {
          id: "different",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO details that show how early films differed from movies today.",
          choices: [
            { letter: "A", text: "Only one person at a time could watch a Kinetoscope film." },
            { letter: "B", text: "The Kinetograph recorded its pictures with a camera." },
            { letter: "C", text: "Fred Ott's film was protected by a copyright." },
            { letter: "D", text: "Fred Ott's film lasts only a few seconds." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "gun",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Based on sentence 2, Marey's camera was most likely called a \"gun\" because it —",
          choices: [
            { letter: "A", text: "was used by soldiers to photograph battles" },
            { letter: "B", text: "made a loud bang each time it took a picture" },
            { letter: "C", text: "was shaped like a rifle and fired off rapid pictures" },
            { letter: "D", text: "frightened away the very birds it was meant to photograph" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-train-vocab-nickel",
      family: "LIT",
      genre: "HISTORY",
      episode: "train",
      title: "A Nickel a Show",
      kind: "Vocabulary · 11.RV",
      blurb: "Six words for the jump from the peephole to the big screen.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The Kinetoscope was a <strong>novelty</strong>, a new marvel that people paid a few cents to try once. " +
        N(2) + "Its weakness was that only one person could watch at a time, so the experience was never <strong>communal</strong>. " +
        N(3) + "A projector designed by the inventor Thomas Armat helped solve that problem, and Edison's company built it and sold it as the Vitascope under the <strong>prestigious</strong> Edison name. " +
        N(4) + "At its first public showing, in New York City in April 1896, the films were <strong>projected</strong>, or thrown onto a screen by a beam of light, so a whole hall could watch together. " +
        N(5) + "By the end of the next decade, small storefront theaters called nickelodeons, named for their five-cent tickets, were <strong>proliferating</strong> across the country. " +
        N(6) + "Their programs held a few short films of everyday scenes, sports or comic sketches, and a piano player often supplied <strong>accompaniment</strong>, music that matched the action." +
        "</p>",
      claims: [
        {
          id: "novelty",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word *novelty* most nearly means —",
          choices: [
            { letter: "A", text: "a long book about inventions" },
            { letter: "B", text: "a machine that often broke down in use" },
            { letter: "C", text: "something new that draws curiosity" },
            { letter: "D", text: "an expensive tool for experts" }
          ],
          correct: "C"
        },
        {
          id: "communal",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word *communal* shares a root with *community*. In sentence 2, an experience that is *communal* is one that is —",
          choices: [
            { letter: "A", text: "shared by a group" },
            { letter: "B", text: "kept secret" },
            { letter: "C", text: "paid for by a town" },
            { letter: "D", text: "repeated often" }
          ],
          correct: "A"
        },
        {
          id: "prestigious",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "Sentence 3 calls the Edison name *prestigious* rather than simply *familiar*. The word *prestigious* suggests that the name —",
          choices: [
            { letter: "A", text: "was hard for customers to pronounce" },
            { letter: "B", text: "belonged to the projector's real designer" },
            { letter: "C", text: "was known only to a few scientists" },
            { letter: "D", text: "carried respect that helped sell it" }
          ],
          correct: "D"
        },
        {
          id: "projected",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 4, a film that is *projected* is one that is —",
          choices: [
            { letter: "A", text: "watched through a small peephole" },
            { letter: "B", text: "cast on a screen by light for many" },
            { letter: "C", text: "planned out carefully before it is filmed" },
            { letter: "D", text: "copied onto paper for a library to keep" }
          ],
          correct: "B"
        },
        {
          id: "proliferating",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *proliferating* most nearly means —",
          choices: [
            { letter: "A", text: "multiplying quickly" },
            { letter: "B", text: "closing their doors" },
            { letter: "C", text: "raising their prices" },
            { letter: "D", text: "competing unfairly" }
          ],
          correct: "A"
        },
        {
          id: "vitascope",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO statements about the Vitascope that the passage supports.",
          choices: [
            { letter: "A", text: "It was invented after the first nickelodeons opened." },
            { letter: "B", text: "It let a whole hall of people watch a film at once." },
            { letter: "C", text: "It showed films through a peephole, one viewer at a time." },
            { letter: "D", text: "It was designed by Armat but sold under Edison's name." }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-train-cinematograph",
      family: "LIT",
      genre: "HISTORY",
      episode: "train",
      title: "Three Jobs in One Box",
      kind: "Film history · 11.RI",
      blurb: "The Lumière brothers' Cinematograph filmed, printed and projected, and an audience was born.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "In Lyon, France, the brothers Auguste and Louis Lumière worked in their family's business, which made photographic plates. " +
        N(2) + "In 1895 they patented a machine they called the Cinematograph. " +
        N(3) + "Edison's Kinetograph was a heavy camera that stayed in a studio, and his films were watched one viewer at a time. " +
        N(4) + "The Cinematograph was light enough to carry, ran on a hand crank instead of electricity, and did three jobs in one box: it filmed, it printed copies, and with a lamp behind it, it projected the pictures onto a screen. " +
        N(5) + "That last job changed everything. " +
        N(6) + "On December 28, 1895, the brothers held a paid screening in the basement of a Paris café, and a roomful of strangers watched the same moving pictures at the same moment. " +
        N(7) + "Their films, each under a minute long, showed ordinary life: workers leaving the Lumière factory, a baby being fed, a train pulling into a station. " +
        N(8) + "Because the camera was portable, the Lumières soon sent camera operators around the world to film distant cities and bring the pictures home. " +
        N(9) + "The films told no stories in the modern sense, yet audiences were amazed simply to see the world move. " +
        N(10) + "Many historians mark that December evening as the birth of cinema as a shared experience: strangers in the dark, watching together." +
        "</p>",
      claims: [
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author develops the passage about the Cinematograph mainly by —",
          choices: [
            { letter: "A", text: "listing the Lumières' films in the order they were made" },
            { letter: "B", text: "contrasting the Lumières' machine with Edison's" },
            { letter: "C", text: "telling the story of the brothers' childhood in Lyon" },
            { letter: "D", text: "explaining step by step how a camera operator works a hand crank" }
          ],
          correct: "B"
        },
        {
          id: "lastjob",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 5 functions mainly to —",
          choices: [
            { letter: "A", text: "admit that the machine did not work very well" },
            { letter: "B", text: "introduce the brothers' family business" },
            { letter: "C", text: "change the subject from France to America" },
            { letter: "D", text: "single out projection as the key job" }
          ],
          correct: "D"
        },
        {
          id: "flexible",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO sentences that best support the idea that the Cinematograph was easier to use in many places than Edison's camera.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "portable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word *portable* most nearly means —",
          choices: [
            { letter: "A", text: "costly to build" },
            { letter: "B", text: "able to make copies" },
            { letter: "C", text: "easy to carry" },
            { letter: "D", text: "safe from damage" }
          ],
          correct: "C"
        },
        {
          id: "amazed",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 9, why were early audiences impressed by films of ordinary life?",
          choices: [
            { letter: "A", text: "Seeing real motion on a screen was new and astonishing." },
            { letter: "B", text: "The films had exciting plots full of daring heroes and villains." },
            { letter: "C", text: "Most viewers had never seen a factory, a baby or a train." },
            { letter: "D", text: "The screenings came with famous actors in person." }
          ],
          correct: "A"
        },
        {
          id: "birth",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentence 10, the author supports calling the Paris screening \"the birth of cinema\" mainly by emphasizing that —",
          choices: [
            { letter: "A", text: "the brothers earned a large profit that night" },
            { letter: "B", text: "strangers watched the same pictures together" },
            { letter: "C", text: "the films were longer than Edison's films" },
            { letter: "D", text: "the café was the most famous one in Paris" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-train-la-ciotat-legend",
      family: "LIT",
      genre: "HISTORY",
      episode: "train",
      title: "Did Anyone Really Run?",
      kind: "Film history · 11.RI",
      blurb: "The famous story of a panicked first audience, and what the evidence says.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "<em>Arrival of a Train at La Ciotat</em>, filmed by Auguste and Louis Lumière in 1895, lasts less than a minute and contains a single shot. " +
        N(2) + "The camera sits on a station platform in La Ciotat, a town on the southern coast of France, and it never moves. " +
        N(3) + "A locomotive appears as a speck in the distance and steams toward the camera along a diagonal line, growing until it nearly fills the frame. " +
        N(4) + "Then the cars slow, the doors open, and travelers in hats and long coats move past the lens, some glancing at the strange box that is watching them.</p>" +
        "<p>" + N(5) + "Although the Lumières did not use these words, their single shot behaves like several. " +
        N(6) + "It opens as a long shot, a wide view in which the train looks tiny, and as the engine approaches, the same frame becomes something close to a close-up of iron and steam. " +
        N(7) + "The diagonal path gives the flat screen a feeling of depth, so the train seems to come out of the picture rather than across it.</p>" +
        "<p>" + N(8) + "A famous story grew up around the film. " +
        N(9) + "According to the legend, the first audiences believed a real train was about to burst through the screen, so they screamed, ducked and ran for the back of the room. " +
        N(10) + "The tale has been repeated in textbooks, documentaries and even other movies.</p>" +
        "<p>" + N(11) + "Yet historians who have searched newspapers and letters from the 1890s have found little proof that any such panic happened. " +
        N(12) + "Writers who attended the early shows described their amazement at the lifelike motion, but amazement is not the same as terror. " +
        N(13) + "Many viewers had also seen photographs, magic-lantern slide shows and, in some cities, peephole films, so pictures of the world were not entirely new to them. " +
        N(14) + "Most scholars now treat the stampede as a myth, or at best an exaggeration of a few startled gasps.</p>" +
        "<p>" + N(15) + "Why does the legend survive? " +
        N(16) + "Part of the answer is that it flatters the movies, suggesting that film was powerful enough to fool the human eye completely. " +
        N(17) + "It also flatters us, since modern viewers can laugh at the \"naive\" crowd while feeling sure that they would never be fooled. " +
        N(18) + "The truth may be more interesting: those first audiences knew they were watching a picture, and they were thrilled anyway. " +
        N(19) + "More than a century later, viewers still flinch when something rushes at the camera, which suggests that the Lumières had found something real about how pictures move us." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the article about the La Ciotat legend?",
          choices: [
            { letter: "A", text: "The Lumières staged a panic to advertise their new machine." },
            { letter: "B", text: "Early audiences were too naive to understand what a film was." },
            { letter: "C", text: "The panic is likely a legend, but the film's power is real." },
            { letter: "D", text: "Historians agree that the train film frightened every audience." }
          ],
          correct: "C"
        },
        {
          id: "closeup",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "According to sentence 6, the shot changes from a long shot to something close to a close-up because —",
          choices: [
            { letter: "A", text: "the train moves closer to a camera that stays in place" },
            { letter: "B", text: "the camera operator walks along the platform toward the engine" },
            { letter: "C", text: "an editor cuts from a far view to a near one" },
            { letter: "D", text: "the lens slowly zooms in on the passengers" }
          ],
          correct: "A"
        },
        {
          id: "pattern",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which choice best describes how sentences 8–14 are organized?",
          choices: [
            { letter: "A", text: "A cause is named, and its effects are listed in time order." },
            { letter: "B", text: "Two films are compared point by point." },
            { letter: "C", text: "A problem is described, and a solution is proposed." },
            { letter: "D", text: "A popular claim is stated, and evidence against it follows." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Select TWO pieces of evidence the author uses to challenge the legend.",
          choices: [
            { letter: "A", text: "The train grows until it nearly fills the frame." },
            { letter: "B", text: "Searches of 1890s newspapers and letters found little proof of panic." },
            { letter: "C", text: "The story appears in textbooks, documentaries and movies." },
            { letter: "D", text: "Many viewers had already seen photographs and slide shows." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "amazement",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 12, the author separates *amazement* from *terror* in order to show that —",
          choices: [
            { letter: "A", text: "being thrilled differs from believing the train is real" },
            { letter: "B", text: "the first audiences were more frightened than amazed" },
            { letter: "C", text: "the writers who saw the early shows could not be trusted at all" },
            { letter: "D", text: "the two words mean almost exactly the same thing" }
          ],
          correct: "A"
        },
        {
          id: "naive",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 17, the author puts *naive* in quotation marks mainly to suggest that —",
          choices: [
            { letter: "A", text: "the word was printed on posters for the film" },
            { letter: "B", text: "modern viewers may wrongly think the crowd foolish" },
            { letter: "C", text: "the first audiences described themselves that way" },
            { letter: "D", text: "the author agrees that early viewers were easily fooled" }
          ],
          correct: "B"
        },
        {
          id: "depth",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the article about the La Ciotat film, the author includes sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "prove that the camera was badly placed" },
            { letter: "B", text: "describe the passengers' clothing" },
            { letter: "C", text: "explain how framing creates depth" },
            { letter: "D", text: "show that the train was moving dangerously fast" }
          ],
          correct: "C"
        },
        {
          id: "lasting",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 19 suggests that the author believes —",
          choices: [
            { letter: "A", text: "the Lumières grasped something lasting about images" },
            { letter: "B", text: "modern audiences are just as easily fooled as people in 1895" },
            { letter: "C", text: "films about trains are still the most popular kind" },
            { letter: "D", text: "the legend will soon be forgotten by most of today's viewers" }
          ],
          correct: "A"
        }
      ]
    },

    /* ═════════════ EPISODE: moon — A Trip to the Moon (1902, Georges Méliès) ═════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-moon-magician",
      family: "LIT",
      genre: "HISTORY",
      episode: "moon",
      title: "The Magician in the Audience",
      kind: "Film history · 11.RI",
      blurb: "A Paris stage magician sees the Lumières' films and wants a camera of his own.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Georges Méliès was a stage magician who owned a theater of illusions in Paris, the Théâtre Robert-Houdin. " +
        N(2) + "In December 1895 he sat in the audience at the Lumière brothers' first public screening and saw at once that film could become a new kind of magic. " +
        N(3) + "When the Lumières refused to sell him a Cinematograph, he bought a projector elsewhere and turned it into a camera of his own. " +
        N(4) + "Soon he was making short films full of vanishing ladies, dancing skeletons and devils who appeared in puffs of smoke." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about Méliès?",
          choices: [
            { letter: "A", text: "The Lumière brothers taught Méliès every trick he knew." },
            { letter: "B", text: "Méliès gave up magic forever after seeing his first film." },
            { letter: "C", text: "A magician saw film as new magic and began making his own." },
            { letter: "D", text: "Méliès's theater was the largest and busiest in all of Paris." }
          ],
          correct: "C"
        },
        {
          id: "illusions",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, a theater of *illusions* is a place where audiences see —",
          choices: [
            { letter: "A", text: "tricks that seem real but are not" },
            { letter: "B", text: "serious plays about history and war" },
            { letter: "C", text: "lectures given by famous scientists" },
            { letter: "D", text: "concerts played by a small orchestra" }
          ],
          correct: "A"
        },
        {
          id: "refused",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 3 suggests that Méliès was —",
          choices: [
            { letter: "A", text: "angry enough to quit filmmaking" },
            { letter: "B", text: "too poor to buy any equipment" },
            { letter: "C", text: "content to let others make films" },
            { letter: "D", text: "determined to find another way" }
          ],
          correct: "D"
        },
        {
          id: "background",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence best shows that Méliès's past as a magician shaped the films he made?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which choice best describes the structure of this passage?",
          choices: [
            { letter: "A", text: "It tells events in the order they happened." },
            { letter: "B", text: "It compares two magicians point by point." },
            { letter: "C", text: "It states a problem that is never solved." },
            { letter: "D", text: "It explains the steps for making a camera." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "lit-moon-launch-scene",
      family: "LIT",
      genre: "HISTORY",
      episode: "moon",
      title: "Fired at the Moon",
      kind: "Screen story · 11.RL",
      blurb: "A giant cannon, a bullet-shaped capsule and a Moon with a face.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "On the rooftops of a city, a line of young women in sailor suits pushes a bullet-shaped capsule into the mouth of a giant cannon. " +
        N(2) + "Six astronomers in long robes have already squeezed inside. " +
        N(3) + "An officer raises his sword, the fuse is lit, and the cannon fires in a burst of smoke. " +
        N(4) + "Then the Moon appears in the sky, a pale face with round cheeks, and it swells closer and closer. " +
        N(5) + "With a thud, the capsule lands right in the Moon's eye, and the face grimaces in pain." +
        "</p>",
      claims: [
        {
          id: "sequence",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which event happens just before the Moon appears in sentence 4?",
          choices: [
            { letter: "A", text: "The astronomers climb out of the capsule." },
            { letter: "B", text: "The cannon fires in a burst of smoke." },
            { letter: "C", text: "The women in sailor suits wave goodbye." },
            { letter: "D", text: "The officer lowers his sword to stop the launch." }
          ],
          correct: "B"
        },
        {
          id: "device",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Which literary device is used in sentence 5?",
          choices: [
            { letter: "A", text: "alliteration, because many words begin with the same sound" },
            { letter: "B", text: "flashback, because the scene returns to an earlier time" },
            { letter: "C", text: "understatement, because a disaster is made to seem small" },
            { letter: "D", text: "personification, because the Moon reacts like a person" }
          ],
          correct: "D"
        },
        {
          id: "grimaces",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word *grimaces* most nearly means —",
          choices: [
            { letter: "A", text: "twists its face" },
            { letter: "B", text: "laughs loudly" },
            { letter: "C", text: "falls asleep" },
            { letter: "D", text: "glows brightly" }
          ],
          correct: "A"
        },
        {
          id: "swells",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The detail that the Moon \"swells closer and closer\" (sentence 4) mainly helps viewers feel that —",
          choices: [
            { letter: "A", text: "the Moon is shrinking as the night goes on" },
            { letter: "B", text: "the astronomers are afraid to leave the city" },
            { letter: "C", text: "the capsule is racing toward its target" },
            { letter: "D", text: "the cannon has misfired and fallen to Earth" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Which word best describes the tone of the scene?",
          choices: [
            { letter: "A", text: "mournful" },
            { letter: "B", text: "playful" },
            { letter: "C", text: "bitter" },
            { letter: "D", text: "dull" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-moon-stop-trick",
      family: "LIT",
      genre: "HISTORY",
      episode: "moon",
      title: "The Day the Camera Jammed",
      kind: "Film history · 11.RI",
      blurb: "How a stuck camera may have taught Méliès his favorite trick.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Méliès liked to tell the story of how he discovered his favorite trick. " +
        N(2) + "Early in his career, he was filming traffic on a Paris street when his camera jammed. " +
        N(3) + "It took him about a minute to fix it and start cranking again. " +
        N(4) + "When he projected the film, a horse-drawn bus seemed to turn suddenly into a hearse, a carriage for carrying coffins, because a hearse had rolled into that spot while the camera was stopped. " +
        N(5) + "Whether or not it happened exactly this way, Méliès understood what it meant. " +
        N(6) + "By stopping the camera, changing something in front of it and starting again, he could make people vanish, appear or transform. " +
        N(7) + "This stop trick, later polished by cutting and joining the film, became the basis of his special effects." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which choice best summarizes this account of the stop trick?",
          choices: [
            { letter: "A", text: "Méliès broke his camera and had to stop making any films for several years." },
            { letter: "B", text: "An accident showed Méliès a trick that became the basis of his effects." },
            { letter: "C", text: "Méliès filmed Paris traffic because he wanted to record real life." },
            { letter: "D", text: "A funeral in Paris inspired Méliès to make serious, sad films." }
          ],
          correct: "B"
        },
        {
          id: "hearse",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words in sentence 4 help the reader understand the meaning of *hearse*?",
          choices: [
            { letter: "A", text: "\"When he projected the film\"" },
            { letter: "B", text: "\"seemed to turn suddenly\"" },
            { letter: "C", text: "\"while the camera was stopped\"" },
            { letter: "D", text: "\"a carriage for carrying coffins\"" }
          ],
          correct: "D"
        },
        {
          id: "whether",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentence 5, the phrase \"whether or not it happened exactly this way\" shows that the author —",
          choices: [
            { letter: "A", text: "doubts some details of the story but values its lesson" },
            { letter: "B", text: "believes Méliès invented the whole story to sell tickets" },
            { letter: "C", text: "has found proof that the event happened just as told" },
            { letter: "D", text: "thinks the stop trick was really invented by someone else" }
          ],
          correct: "A"
        },
        {
          id: "how",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentence 6, the stop trick works by —",
          choices: [
            { letter: "A", text: "painting brand-new images onto each frame of film by hand" },
            { letter: "B", text: "running the film backward through the projector" },
            { letter: "C", text: "pausing, changing the scene, then filming again" },
            { letter: "D", text: "placing a mirror in front of the camera at an angle" }
          ],
          correct: "C"
        },
        {
          id: "effects",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO effects that the stop trick could create, according to the passage.",
          choices: [
            { letter: "A", text: "a performer suddenly vanishing" },
            { letter: "B", text: "a scene changing from gray to color" },
            { letter: "C", text: "one object turning into another" },
            { letter: "D", text: "an actor's voice heard by the audience" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "jammed",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail in sentence 3 that the repair took \"about a minute\" mainly to —",
          choices: [
            { letter: "A", text: "show that Méliès was skilled at fixing machines" },
            { letter: "B", text: "suggest that the street was empty for a long time" },
            { letter: "C", text: "prove that Méliès's camera was poorly made" },
            { letter: "D", text: "explain how the street scene had time to change" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-moon-film-language",
      family: "LIT",
      genre: "HISTORY",
      episode: "moon",
      title: "A Magician's Toolbox",
      kind: "Film language · 11.RV",
      blurb: "Special effects, multiple exposures, sets, tableaux and dissolves.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Méliès built a glass-walled studio outside Paris so that sunlight could pour in, and there he created one <strong>special effect</strong> after another, each a trick that shows something impossible on screen. " +
        N(2) + "In a <strong>multiple exposure</strong>, he ran the same strip of film through the camera more than once, so one actor could appear several times in the same frame. " +
        N(3) + "His painted backdrops made each <strong>set</strong>, the built world in front of the camera, look like a theater stage. " +
        N(4) + "Each scene was a <strong>tableau</strong>, a single arranged picture filmed from one fixed spot, like the view from a good theater seat. " +
        N(5) + "Between tableaux he often used a <strong>dissolve</strong>, in which one shot fades out as the next fades in, so the two briefly overlap. " +
        N(6) + "Together these tools let a magician's <strong>illusions</strong> travel to audiences far from his theater." +
        "</p>",
      claims: [
        {
          id: "special",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 1, a *special effect* is —",
          choices: [
            { letter: "A", text: "a studio built with walls of glass" },
            { letter: "B", text: "a scene filmed outdoors in sunlight" },
            { letter: "C", text: "a trick showing the impossible" },
            { letter: "D", text: "a painted backdrop behind the actors" }
          ],
          correct: "C"
        },
        {
          id: "exposure",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "Which scene would most likely require a *multiple exposure*?",
          choices: [
            { letter: "A", text: "one actor playing in a band made of his own copies" },
            { letter: "B", text: "a single actor walking slowly across an empty stage" },
            { letter: "C", text: "a painted castle that stays in the background for the whole scene" },
            { letter: "D", text: "two different actors shaking hands in a doorway" }
          ],
          correct: "A"
        },
        {
          id: "tableau",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase in sentence 4 best helps the reader understand *tableau*?",
          choices: [
            { letter: "A", text: "\"Each scene was\"" },
            { letter: "B", text: "\"a single arranged picture\"" },
            { letter: "C", text: "\"like the view\"" },
            { letter: "D", text: "\"like the view from a good theater seat\"" }
          ],
          correct: "B"
        },
        {
          id: "dissolve",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.2",
          stem: "Based on sentence 5, a filmmaker would most likely use a *dissolve* to —",
          choices: [
            { letter: "A", text: "make one actor appear twice in the frame" },
            { letter: "B", text: "freeze the action on a single picture" },
            { letter: "C", text: "make a person vanish in a single instant" },
            { letter: "D", text: "blend smoothly into the next scene" }
          ],
          correct: "D"
        },
        {
          id: "travel",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 6, the phrase *illusions travel to audiences* means that —",
          choices: [
            { letter: "A", text: "Méliès went on tour with his stage show" },
            { letter: "B", text: "audiences traveled to Paris to see his tricks" },
            { letter: "C", text: "films carried his tricks far away" },
            { letter: "D", text: "his tricks were too hard for others to copy" }
          ],
          correct: "C"
        },
        {
          id: "stagelike",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Select TWO terms from the passage that describe ways Méliès's films resembled stage plays.",
          choices: [
            { letter: "A", text: "dissolve" },
            { letter: "B", text: "set" },
            { letter: "C", text: "multiple exposure" },
            { letter: "D", text: "tableau" }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-moon-review",
      family: "LIT",
      genre: "HISTORY",
      episode: "moon",
      title: "Still Shooting for the Moon",
      kind: "Film review · 11.RI",
      blurb: "A critic weighs the charms and the flaws of the first science fiction film.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "<em>A Trip to the Moon</em> is well over a hundred years old, and it still deserves its place on every list of essential films. " +
        N(2) + "Georges Méliès made it in 1902, loosely borrowing his idea from Jules Verne's novel about a voyage to the Moon, and the result is often called the first science fiction film. " +
        N(3) + "In less than a quarter of an hour, it offers a cannon launch, a moon with a human face, a dream of stars, an umbrella that sprouts into a giant mushroom and a crowd of moon creatures who burst into smoke. " +
        N(4) + "Some prints were even colored by hand, frame by frame, so that the costumes and sets glow. " +
        N(5) + "Critics sometimes complain that the acting is stiff, like a stage play filmed from the best seat in the house, and the complaint is fair. " +
        N(6) + "The camera never moves, and the actors wave their arms broadly so that the back row could follow them. " +
        N(7) + "But that theatrical style is part of the film's charm, not a flaw to excuse. " +
        N(8) + "Méliès was a magician, and he presents each scene as a trick on a stage. " +
        N(9) + "A more serious objection is the way the explorers treat the moon's inhabitants, striking them with umbrellas and putting a captive on display back home, an attitude that echoes the empire-building of the film's era. " +
        N(10) + "Viewers should notice that, too. " +
        N(11) + "Still, no film before it imagined so boldly, and its image of a rocket in the Moon's eye has outlived nearly every movie made since." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "What is the reviewer's main claim?",
          choices: [
            { letter: "A", text: "The film is still essential viewing despite its flaws." },
            { letter: "B", text: "The film is too old and stiff for modern viewers to enjoy." },
            { letter: "C", text: "The film copies Jules Verne's novel scene by scene." },
            { letter: "D", text: "The film's hand coloring is its only lasting strength." }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "How does the reviewer respond to the complaint about stiff acting in sentences 5–8?",
          choices: [
            { letter: "A", text: "by denying that the acting is stiff at all" },
            { letter: "B", text: "by blaming the actors rather than Méliès" },
            { letter: "C", text: "by granting the point but calling the style a charm" },
            { letter: "D", text: "by arguing that the camera should have moved much more often" }
          ],
          correct: "C"
        },
        {
          id: "theatrical",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word *theatrical* describes a style that —",
          choices: [
            { letter: "A", text: "uses many quick cuts and close-ups" },
            { letter: "B", text: "resembles a performance on a stage" },
            { letter: "C", text: "relies on recorded sound and music" },
            { letter: "D", text: "copies the look of real documentary film" }
          ],
          correct: "B"
        },
        {
          id: "imagination",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO details the reviewer uses to show the film's imagination.",
          choices: [
            { letter: "A", text: "The camera never moves during a scene." },
            { letter: "B", text: "An umbrella sprouts into a giant mushroom." },
            { letter: "C", text: "The actors wave their arms broadly." },
            { letter: "D", text: "Moon creatures burst into puffs of smoke." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "era",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Sentence 9 reflects the reviewer's view that the film —",
          choices: [
            { letter: "A", text: "was banned in its own time for its violence" },
            { letter: "B", text: "shows the moon people as far wiser than the explorers" },
            { letter: "C", text: "was a protest against the empires of its era" },
            { letter: "D", text: "carries attitudes of its time worth questioning" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The reviewer ends with sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "return to the main claim after weighing objections" },
            { letter: "B", text: "introduce a new complaint about the film's length" },
            { letter: "C", text: "admit that the objections outweigh the film's strengths" },
            { letter: "D", text: "compare Méliès's film with Verne's novel in detail" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-moon-voyage-retold",
      family: "LIT",
      genre: "HISTORY",
      episode: "moon",
      title: "The Voyage of the Astronomers",
      kind: "Screen story · 11.RL",
      blurb: "The whole of A Trip to the Moon, from the astronomers' hall to the parade.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "In <em>A Trip to the Moon</em> (1902), Georges Méliès, a stage magician turned filmmaker, plays the leader of the expedition himself. " +
        N(2) + "The film opens in a grand hall where the members of an astronomers' club sit in rows, dressed in long robes and tall pointed hats sprinkled with stars, looking more like wizards than scientists. " +
        N(3) + "Their president, Professor Barbenfouillis, explains his plan to fire a capsule at the Moon. " +
        N(4) + "When one member jumps up to object, the professor hurls a bundle of papers at him, and the rest of the club cheers the plan. " +
        N(5) + "Six astronomers volunteer to go.</p>" +
        "<p>" + N(6) + "On the rooftops of the city, a line of young women in sailor suits pushes the bullet-shaped capsule into a giant cannon. " +
        N(7) + "The cannon fires, and the Moon, a pale face with round cheeks, swells closer and closer until the capsule smacks into its eye. " +
        N(8) + "The face grimaces like a man who has been struck by a pie.</p>" +
        "<p>" + N(9) + "The travelers climb out onto a rocky landscape and watch the Earth rise over the horizon. " +
        N(10) + "Exhausted, they lie down to sleep, and the sky fills with a dream: stars with women's faces peer down from a constellation, and a goddess sits on a crescent moon. " +
        N(11) + "Annoyed by the noisy intruders, the stars send a snowstorm, and the shivering explorers wake and climb down into a crater.</p>" +
        "<p>" + N(12) + "Underground, they find a forest of enormous mushrooms. " +
        N(13) + "When the professor plants his open umbrella in the ground, it sprouts into another mushroom. " +
        N(14) + "Then the Selenites, the moon's inhabitants, leap out, crouching and springing like acrobats. " +
        N(15) + "One blow from an umbrella makes a Selenite burst into a puff of smoke and vanish. " +
        N(16) + "More Selenites arrive and drag the explorers before their king, who sits on a throne among his guards. " +
        N(17) + "The professor seizes the king, lifts him high and throws him down, and the king, too, disappears in smoke.</p>" +
        "<p>" + N(18) + "The explorers run for the capsule, swatting Selenites as they go. " +
        N(19) + "It is perched at the edge of a cliff, so the professor ties a rope to it and pulls, and the capsule tips over the edge and falls toward Earth with him clinging to it. " +
        N(20) + "It plunges through the sky, splashes into the ocean, sinks among the fish and bobs back up to the surface. " +
        N(21) + "A ship tows it to port, where the city honors the travelers with medals and a parade. " +
        N(22) + "Marching in the parade is a captured Selenite, shown off to the cheering crowd." +
        "</p>",
      claims: [
        {
          id: "satire",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "The description of the astronomers in sentence 2 most likely pokes fun at —",
          choices: [
            { letter: "A", text: "the young women who load the cannon" },
            { letter: "B", text: "scholars who are too self-important" },
            { letter: "C", text: "the Selenites and their king" },
            { letter: "D", text: "audiences who believe in real magic" }
          ],
          correct: "B"
        },
        {
          id: "professor",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "What do the professor's actions in sentences 4 and 17 reveal about him?",
          choices: [
            { letter: "A", text: "He is a timid leader who avoids every conflict." },
            { letter: "B", text: "He listens patiently to those who disagree with him." },
            { letter: "C", text: "He prefers studying the stars to traveling among them." },
            { letter: "D", text: "He meets opposition with force rather than with words." }
          ],
          correct: "D"
        },
        {
          id: "dream",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do sentences 10 and 11 fit into the structure of the story?",
          choices: [
            { letter: "A", text: "A fantasy pause ends in a storm that drives them underground." },
            { letter: "B", text: "A flashback shows how the six astronomers first met at the club." },
            { letter: "C", text: "A dream reveals that the whole voyage was imaginary." },
            { letter: "D", text: "A quiet scene ends the story before the explorers go home." }
          ],
          correct: "A"
        },
        {
          id: "personify",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Select TWO sentences in which part of nature is given human feelings or features.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "inhabitants",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 14, the word *inhabitants* most nearly means —",
          choices: [
            { letter: "A", text: "visitors from far away" },
            { letter: "B", text: "rulers of a kingdom" },
            { letter: "C", text: "those who live in a place" },
            { letter: "D", text: "guards who protect a throne" }
          ],
          correct: "C"
        },
        {
          id: "smoke",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Selenites vanish in puffs of smoke in sentences 15 and 17. Based on sentence 1, this effect most likely reflects —",
          choices: [
            { letter: "A", text: "Jules Verne's careful scientific research" },
            { letter: "B", text: "Méliès's background as a stage magician" },
            { letter: "C", text: "the real dangers of traveling in space" },
            { letter: "D", text: "the Lumières' interest in everyday life" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "What makes the ending in sentences 21 and 22 ironic?",
          choices: [
            { letter: "A", text: "The capsule sinks, so no one ever learns of the voyage." },
            { letter: "B", text: "The Selenites follow the travelers to take revenge." },
            { letter: "C", text: "The professor refuses every one of the medals the city offers him." },
            { letter: "D", text: "Men who attacked their hosts and fled are hailed as heroes." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story most strongly suggest?",
          choices: [
            { letter: "A", text: "Science always brings peace between strangers who meet." },
            { letter: "B", text: "Curiosity can turn into conquest." },
            { letter: "C", text: "Dreams are more dangerous than real adventures." },
            { letter: "D", text: "Leaders should never listen to those who object." }
          ],
          correct: "B"
        }
      ]
    },

    /* ═════════════ EPISODE: circus — the silent era through Chaplin's The Circus (1928) ═════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-circus-one-reelers",
      family: "LIT",
      genre: "HISTORY",
      episode: "circus",
      title: "One Reel at a Time",
      kind: "Film history · 11.RI",
      blurb: "Short one-reelers give way to the first feature films.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In the early 1900s, most films fit on a single reel and ran about ten to fifteen minutes. " +
        N(2) + "These one-reelers were cheap to make and easy for nickelodeon owners to swap for new ones each week. " +
        N(3) + "Some filmmakers, though, wanted to tell bigger stories. " +
        N(4) + "In 1906, an Australian film about the outlaw Ned Kelly and his gang ran about an hour, and it is often called the first feature-length film. " +
        N(5) + "Over the next decade, longer features slowly pushed one-reelers aside." +
        "</p>",
      claims: [
        {
          id: "onereeler",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentences 1 and 2, a *one-reeler* is —",
          choices: [
            { letter: "A", text: "a short film that fits on one reel" },
            { letter: "B", text: "a theater with only one screen" },
            { letter: "C", text: "a camera that holds a single reel" },
            { letter: "D", text: "a film shown only once a week" }
          ],
          correct: "A"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the passage about one-reelers?",
          choices: [
            { letter: "A", text: "Australia made more films than any other country." },
            { letter: "B", text: "Nickelodeon owners refused to show any film longer than one reel." },
            { letter: "C", text: "Films grew from short one-reelers into longer features." },
            { letter: "D", text: "Ned Kelly was the most famous outlaw of his time." }
          ],
          correct: "C"
        },
        {
          id: "owners",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence explains why one-reelers suited the theaters of the time?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "B"
        },
        {
          id: "kelly",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the example in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "tell the life story of a famous outlaw" },
            { letter: "B", text: "argue that Australian films were the best" },
            { letter: "C", text: "explain why one-reelers cost so little" },
            { letter: "D", text: "give an early case of a much longer film" }
          ],
          correct: "D"
        },
        {
          id: "aside",
          sol: "11.RV.1.E",
          sub: "11.RV.1.E.1",
          stem: "In sentence 5, the phrase *pushed one-reelers aside* means that features —",
          choices: [
            { letter: "A", text: "were stored on shelves next to one-reelers" },
            { letter: "B", text: "were cut into several one-reelers" },
            { letter: "C", text: "gradually took the place of one-reelers" },
            { letter: "D", text: "were shown before the one-reelers began" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-circus-without-words",
      family: "LIT",
      genre: "HISTORY",
      episode: "circus",
      title: "Speaking Without Words",
      kind: "Film language · 11.RV",
      blurb: "Expressive acting, live music and intertitles: how silent films talked.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Silent films were never truly silent, and they found other ways to speak. " +
        N(2) + "Actors used exaggerated gestures and expressive faces, so a raised fist or a trembling lip told the audience what a character felt. " +
        N(3) + "In the theater, a pianist or organist played live music that rose for a chase and softened for a sad goodbye. " +
        N(4) + "Between shots, <strong>intertitles</strong>, printed cards filmed and placed between scenes, gave the setting, explained the plot or showed a line of dialogue. " +
        N(5) + "Viewers read, watched and listened all at once." +
        "</p>",
      claims: [
        {
          id: "intertitles",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 4, *intertitles* are —",
          choices: [
            { letter: "A", text: "words printed along the bottom of the picture" },
            { letter: "B", text: "printed cards shown between the shots" },
            { letter: "C", text: "posters hung outside the theater" },
            { letter: "D", text: "the names of the actors in the film" }
          ],
          correct: "B"
        },
        {
          id: "paradox",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The statement that silent films \"were never truly silent\" (sentence 1) is an example of —",
          choices: [
            { letter: "A", text: "a simile comparing films to music" },
            { letter: "B", text: "an understatement about early actors" },
            { letter: "C", text: "a flashback to the earliest films" },
            { letter: "D", text: "a seeming contradiction, or paradox" }
          ],
          correct: "D"
        },
        {
          id: "music",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 3, live music mainly helped audiences —",
          choices: [
            { letter: "A", text: "feel the mood of each scene" },
            { letter: "B", text: "hear what the actors were saying" },
            { letter: "C", text: "know when to leave the theater" },
            { letter: "D", text: "read the printed cards more quickly" }
          ],
          correct: "A"
        },
        {
          id: "exaggerated",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *exaggerated* most nearly means —",
          choices: [
            { letter: "A", text: "quiet and hidden" },
            { letter: "B", text: "slow and careful" },
            { letter: "C", text: "bigger than in real life" },
            { letter: "D", text: "copied from other famous actors" }
          ],
          correct: "C"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which choice best states the main idea of the passage about silent films?",
          choices: [
            { letter: "A", text: "Silent films told stories through acting, music and printed cards." },
            { letter: "B", text: "Silent films were hard to follow because no one could hear the actors." },
            { letter: "C", text: "Theater organists were more famous than the stars of silent films." },
            { letter: "D", text: "Silent films showed dialogue mainly through the actors' lips." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-circus-hollywood",
      family: "LIT",
      genre: "HISTORY",
      episode: "circus",
      title: "Westward to Hollywood",
      kind: "Film history · 11.RI",
      blurb: "Why American filmmaking moved from New York to Hollywood, and the stars it made.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "At first, American movies were made mostly in and around New York City, where Edison's company and other early studios set up shop. " +
        N(2) + "In the 1910s, many filmmakers moved west to Hollywood, then a quiet district of Los Angeles. " +
        N(3) + "Southern California offered sunshine nearly all year, cheap land and every kind of scenery, from beaches to deserts to mountains. " +
        N(4) + "It was also far from the East Coast, where Edison's company and its partners were suing filmmakers who used patented equipment without paying. " +
        N(5) + "By the 1920s, Hollywood led the world, turning out roughly 800 films a year. " +
        N(6) + "Audiences followed the stars: Charlie Chaplin's Little Tramp, Buster Keaton's stone face, cowboy Tom Mix, the daring Douglas Fairbanks and Clara Bow, the \"It girl.\"" +
        "</p>",
      claims: [
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The passage is organized mainly to explain —",
          choices: [
            { letter: "A", text: "how to build a film studio in a desert" },
            { letter: "B", text: "why filmmaking moved west and what followed" },
            { letter: "C", text: "how silent stars trained for their roles" },
            { letter: "D", text: "why New York audiences stopped going to movies" }
          ],
          correct: "B"
        },
        {
          id: "reasons",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO reasons the passage gives for filmmakers moving to Hollywood.",
          choices: [
            { letter: "A", text: "Sunshine lasted nearly all year." },
            { letter: "B", text: "The biggest stars already lived there." },
            { letter: "C", text: "It was far from patent lawsuits in the East." },
            { letter: "D", text: "New York had banned the making of movies." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "patented",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, *patented* equipment is equipment that —",
          choices: [
            { letter: "A", text: "is too heavy to move across the country" },
            { letter: "B", text: "is rented by the day from a studio" },
            { letter: "C", text: "works only in bright outdoor sunlight" },
            { letter: "D", text: "is owned by law, so others must pay" }
          ],
          correct: "D"
        },
        {
          id: "leader",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 5 suggests that by the 1920s —",
          choices: [
            { letter: "A", text: "most films were still made in New York" },
            { letter: "B", text: "studios were making fewer films each year" },
            { letter: "C", text: "Hollywood was the center of filmmaking" },
            { letter: "D", text: "Edison's company had moved to Hollywood" }
          ],
          correct: "C"
        },
        {
          id: "stars",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author ends the passage about Hollywood with sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show that stars drew audiences to films" },
            { letter: "B", text: "list every actor who worked in Hollywood" },
            { letter: "C", text: "argue that cowboy films were the best genre" },
            { letter: "D", text: "explain how stars earned their nicknames" }
          ],
          correct: "A"
        },
        {
          id: "stoneface",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "The phrase *stone face* in sentence 6 suggests that Buster Keaton —",
          choices: [
            { letter: "A", text: "was a sculptor before he became an actor" },
            { letter: "B", text: "played villains who frightened audiences" },
            { letter: "C", text: "was injured while doing his own stunts" },
            { letter: "D", text: "rarely changed his expression on screen" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-circus-poem-ring",
      family: "LIT",
      genre: "HISTORY",
      episode: "circus",
      title: "The Empty Ring",
      kind: "Film analysis · 11.RL",
      blurb: "A poem about the Tramp, left behind when the circus moves on.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The tents come down; the wagons roll away,<br>" +
        L(2) + "and dust lies where the bright ring used to be.<br>" +
        L(3) + "He sits alone inside that empty circle,<br>" +
        L(4) + "a bowler hat, a cane, a borrowed dream.<br>" +
        L(5) + "No voice is needed. Watch his shoulders fall,<br>" +
        L(6) + "then lift again, as if they've made a choice.<br>" +
        L(7) + "He stands and brushes off his baggy trousers<br>" +
        L(8) + "and shuffles toward the open road alone,<br>" +
        L(9) + "a small dark shape that shrinks against the sky,<br>" +
        L(10) + "still walking, as the Tramp has always walked." +
        "</p>",
      claims: [
        {
          id: "circle",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The \"empty circle\" in line 3 most likely stands for —",
          choices: [
            { letter: "A", text: "the money he earned in the show" },
            { letter: "B", text: "the endless road ahead of him" },
            { letter: "C", text: "the life and love he has lost" },
            { letter: "D", text: "a game he plays to pass the time" }
          ],
          correct: "C"
        },
        {
          id: "body",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Which line best shows that a silent actor can express feeling through his body?",
          choices: [
            { letter: "A", text: "Line 5" },
            { letter: "B", text: "Line 2" },
            { letter: "C", text: "Line 9" },
            { letter: "D", text: "Line 1" }
          ],
          correct: "A"
        },
        {
          id: "choice",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Lines 5–8 reveal that the Tramp —",
          choices: [
            { letter: "A", text: "is angry and wants revenge on the circus" },
            { letter: "B", text: "is too tired to move from the ring" },
            { letter: "C", text: "is relieved to be free of the circus" },
            { letter: "D", text: "feels sorrow but decides to keep going" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Which word best describes the tone of the poem?",
          choices: [
            { letter: "A", text: "resentful" },
            { letter: "B", text: "bittersweet" },
            { letter: "C", text: "lighthearted" },
            { letter: "D", text: "frightened" }
          ],
          correct: "B"
        },
        {
          id: "borrowed",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "In line 4, calling the Tramp's hopes \"a borrowed dream\" suggests that —",
          choices: [
            { letter: "A", text: "he stole his costume from the circus" },
            { letter: "B", text: "he dreams only when he is asleep" },
            { letter: "C", text: "his happiness was never his to keep" },
            { letter: "D", text: "someone else will soon wear his hat" }
          ],
          correct: "C"
        },
        {
          id: "costume",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Select TWO lines that include details of the Tramp's famous costume.",
          choices: [
            { letter: "A", text: "Line 2" },
            { letter: "B", text: "Line 4" },
            { letter: "C", text: "Line 6" },
            { letter: "D", text: "Line 7" }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-circus-birth-of-a-nation",
      family: "LIT",
      genre: "HISTORY",
      episode: "circus",
      title: "A Long Film and a Lasting Harm",
      kind: "Film history · 11.RI",
      blurb: "The Birth of a Nation (1915): a box-office giant built on racism.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "In 1915, D. W. Griffith released <em>The Birth of a Nation</em>, a film about the Civil War and the years after it that ran about three hours. " +
        N(2) + "It became the most popular film of the 1910s, and its huge ticket sales convinced studios that audiences would sit through long feature films, which helped end the era of the one-reeler. " +
        N(3) + "But the film's story is built on racism. " +
        N(4) + "It portrays Black Americans through cruel stereotypes, many played by white actors in blackface, and it presents the Ku Klux Klan, a violent hate group, as heroes. " +
        N(5) + "The harm was not only on the screen. " +
        N(6) + "The NAACP, a young civil rights organization, led protests against the film, and some cities banned it. " +
        N(7) + "In the same year the film came out, the Klan was refounded, and the new Klan used the film to recruit members for years. " +
        N(8) + "Film historians face a hard question: how should they discuss a work that changed the business of movies while spreading hate? " +
        N(9) + "Most agree that it must be studied, not celebrated. " +
        N(10) + "Its story shows that movies are never just entertainment; the images people watch can shape how they treat one another. " +
        N(11) + "Knowing this history helps viewers ask who a film's heroes are and who is left out or harmed." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about *The Birth of a Nation*?",
          choices: [
            { letter: "A", text: "It was the first film ever made that told a story about the Civil War." },
            { letter: "B", text: "It failed at the box office because audiences protested it." },
            { letter: "C", text: "It deserves praise because it made feature films popular." },
            { letter: "D", text: "It was a hit that spread hate and must be studied critically." }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 3 marks a turn in the passage from —",
          choices: [
            { letter: "A", text: "the film's plot to the life of its director" },
            { letter: "B", text: "the film's business impact to the harm it caused" },
            { letter: "C", text: "the protests against the film to its ticket sales" },
            { letter: "D", text: "the history of the Klan to the history of the NAACP" }
          ],
          correct: "B"
        },
        {
          id: "offscreen",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence best supports the statement in sentence 5 that the harm \"was not only on the screen\"?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "stereotypes",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *stereotypes* refers to —",
          choices: [
            { letter: "A", text: "oversimplified, hurtful ideas about a whole group" },
            { letter: "B", text: "costumes that actors wear in historical films" },
            { letter: "C", text: "scenes that are filmed from two or more different angles" },
            { letter: "D", text: "true stories told about famous Americans" }
          ],
          correct: "A"
        },
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which claim does the author make in sentences 9 and 10?",
          choices: [
            { letter: "A", text: "The film should no longer be discussed in any class." },
            { letter: "B", text: "Films can shape behavior, so this one must be studied, not praised." },
            { letter: "C", text: "The film is harmless now because it is more than a century old and silent." },
            { letter: "D", text: "Entertainment matters more than any message a film carries." }
          ],
          correct: "B"
        },
        {
          id: "effects",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO effects of the film that the passage describes.",
          choices: [
            { letter: "A", text: "Studios grew willing to make long feature films." },
            { letter: "B", text: "Griffith apologized and withdrew the film from theaters." },
            { letter: "C", text: "The refounded Klan used the film to recruit members." },
            { letter: "D", text: "Black actors were given more leading roles in Hollywood." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-circus-tramp-analysis",
      family: "LIT",
      genre: "HISTORY",
      episode: "circus",
      title: "The Tramp Joins the Circus",
      kind: "Film analysis · 11.RL",
      blurb: "Chaplin's The Circus (1928): a chase, a tightrope, monkeys and an empty ring.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "By 1928, Charlie Chaplin's Little Tramp was one of the most recognized figures on Earth: a small man in a bowler hat and a tight coat, with baggy trousers, oversized shoes, a cane and a toothbrush mustache. " +
        N(2) + "In <em>The Circus</em>, which Chaplin wrote, directed, produced and starred in, the Tramp stumbles into show business by accident. " +
        N(3) + "Talking pictures had just begun to arrive, but Chaplin told his story the silent way, through movement, faces, music and a few intertitles, the printed cards placed between shots.</p>" +
        "<p>" + N(4) + "The story begins at a fairground, where a pickpocket slips a stolen wallet into the Tramp's pocket. " +
        N(5) + "Chased by a police officer, the Tramp darts through a hall of mirrors, where dozens of reflections confuse his pursuer, and then bursts into the middle of a circus performance. " +
        N(6) + "The bored audience roars with laughter at his frantic escape, and the ringmaster, who owns the circus, hires him. " +
        N(7) + "There is a catch: the Tramp is hilarious only when he is not trying. " +
        N(8) + "Asked to perform a planned routine, he is hopeless, so the owner keeps him on as a property man and lets him blunder into the ring, where his accidents become the hit of the show.</p>" +
        "<p>" + N(9) + "The Tramp falls for the owner's stepdaughter, a bareback rider whom her stepfather mistreats and sometimes refuses to feed. " +
        N(10) + "He shares his food with her and gives her courage, but she falls in love with Rex, a handsome tightrope walker. " +
        N(11) + "Hoping to win her admiration, the Tramp takes Rex's place on the high wire one night, and things go wrong: a group of escaped monkeys climbs all over him, high above the ring. " +
        N(12) + "The scene is both terrifying and absurd, and it captures Chaplin's gift for blending danger with comedy.</p>" +
        "<p>" + N(13) + "In the end, the Tramp helps the young woman and Rex marry, which frees her from her stepfather's cruelty. " +
        N(14) + "When the circus packs up and its wagons roll away, he chooses to stay behind. " +
        N(15) + "He sits alone inside the circle of flattened ground where the ring once stood, then rises and walks off down the road, his back to the camera.</p>" +
        "<p>" + N(16) + "That final image turns the circus ring into a symbol. " +
        N(17) + "The ring had been the one place where the Tramp belonged, and now it is only an empty mark in the dirt. " +
        N(18) + "Yet his walk is not quite a defeat; he goes on alone, as he always does, toward whatever comes next. " +
        N(19) + "At the first Academy Awards ceremony, in 1929, Chaplin received a special award honoring his many talents as the film's writer, actor, director and producer." +
        "</p>",
      claims: [
        {
          id: "chase",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the chase in sentences 4–6 fit into the plot?",
          choices: [
            { letter: "A", text: "It brings the Tramp into the circus by accident and starts the main story." },
            { letter: "B", text: "It shows the Tramp becoming a skilled pickpocket at the fairground." },
            { letter: "C", text: "It is the story's climax, where the Tramp finally wins the young woman's love." },
            { letter: "D", text: "It is a flashback explaining how the Tramp first met the circus owner." }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "What is ironic about the Tramp's success at the circus (sentences 7–8)?",
          choices: [
            { letter: "A", text: "He is paid more than the circus owner himself." },
            { letter: "B", text: "He hates the circus but performs there every night." },
            { letter: "C", text: "He is funny only when he is not trying to be." },
            { letter: "D", text: "He becomes famous for a routine he wrote himself." }
          ],
          correct: "C"
        },
        {
          id: "character",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "What do the Tramp's actions in sentences 10 and 13 reveal about him?",
          choices: [
            { letter: "A", text: "He is jealous and tries hard to keep the couple apart." },
            { letter: "B", text: "He is generous and puts her happiness above his own." },
            { letter: "C", text: "He is ambitious and hopes to take over the circus." },
            { letter: "D", text: "He is careless about the people who depend on him." }
          ],
          correct: "B"
        },
        {
          id: "symbol",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "According to sentences 16–17, the empty ring at the end symbolizes —",
          choices: [
            { letter: "A", text: "the fame that is waiting for the Tramp" },
            { letter: "B", text: "the cruelty of the young stepdaughter's father" },
            { letter: "C", text: "the danger of performing on the high wire" },
            { letter: "D", text: "a place where he belonged that is now lost" }
          ],
          correct: "D"
        },
        {
          id: "absurd",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word *absurd* most nearly means —",
          choices: [
            { letter: "A", text: "carefully rehearsed" },
            { letter: "B", text: "wildly ridiculous" },
            { letter: "C", text: "deeply sad" },
            { letter: "D", text: "barely noticed" }
          ],
          correct: "B"
        },
        {
          id: "silent",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO details that show how the film tells its story without spoken dialogue.",
          choices: [
            { letter: "A", text: "Chaplin relies on movement, faces, music and a few intertitles." },
            { letter: "B", text: "Chaplin wrote, directed, produced and starred in the film." },
            { letter: "C", text: "The Tramp's feelings show in how he sits alone and then walks away." },
            { letter: "D", text: "Chaplin received a special award at the first Academy Awards." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the ending as the passage describes it?",
          choices: [
            { letter: "A", text: "Hard work always earns a person the love that they want most." },
            { letter: "B", text: "Fame matters more than friendship or kindness." },
            { letter: "C", text: "People who are mistreated should never forgive." },
            { letter: "D", text: "Love can mean giving up your hopes for another's joy." }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Based on sentence 3, why is it significant that Chaplin made *The Circus* as a silent film?",
          choices: [
            { letter: "A", text: "Sound equipment had not yet been invented anywhere in the world." },
            { letter: "B", text: "He kept the silent style as talking pictures arrived." },
            { letter: "C", text: "Theaters refused to show any films that had music." },
            { letter: "D", text: "Audiences of 1928 could not read intertitles." }
          ],
          correct: "B"
        }
      ]
    },

    /* ═════════════ EPISODE: jazz — sound: Vitaphone, The Jazz Singer (1927) and what the switch cost ═════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-jazz-phonograph",
      family: "LIT",
      genre: "HISTORY",
      episode: "jazz",
      title: "Sound in a Groove",
      kind: "Film history · 11.RI",
      blurb: "Edison's 1877 phonograph saves a voice for the first time.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "In 1877, Thomas Edison invented the phonograph, a machine that could record sound and play it back. " +
        N(2) + "A person spoke or sang into a horn. " +
        N(3) + "The sound made a needle vibrate, and the needle pressed a wavy groove into a turning cylinder; early machines used thin foil, and later ones used soft wax. " +
        N(4) + "To play the sound back, a needle rode along the groove, and the horn made its tiny shakes loud enough to hear. " +
        N(5) + "For the first time, a voice could be saved and heard again." +
        "</p>",
      claims: [
        {
          id: "groove",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "According to sentence 3, what did the needle do while sound was being recorded?",
          choices: [
            { letter: "A", text: "It pressed a wavy groove into a turning cylinder." },
            { letter: "B", text: "It printed the words on a strip of paper." },
            { letter: "C", text: "It flashed light onto a strip of film." },
            { letter: "D", text: "It sent the sound along a telephone wire to a speaker." }
          ],
          correct: "A"
        },
        {
          id: "horn",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentences 2 and 4, the horn was used to —",
          choices: [
            { letter: "A", text: "keep the cylinder turning at an even speed" },
            { letter: "B", text: "cool the wax so the groove would harden" },
            { letter: "C", text: "gather sound in and send it back out loudly" },
            { letter: "D", text: "connect the phonograph to an early movie camera" }
          ],
          correct: "C"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the passage about the phonograph?",
          choices: [
            { letter: "A", text: "Edison's phonograph was too fragile to be useful." },
            { letter: "B", text: "Edison's phonograph could record sound and play it back." },
            { letter: "C", text: "Wax was a better material than foil for most inventions." },
            { letter: "D", text: "Singers disliked recording their voices into a large horn." }
          ],
          correct: "B"
        },
        {
          id: "vibrate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word *vibrate* most nearly means —",
          choices: [
            { letter: "A", text: "break apart" },
            { letter: "B", text: "grow warm" },
            { letter: "C", text: "stay perfectly still" },
            { letter: "D", text: "shake quickly" }
          ],
          correct: "D"
        },
        {
          id: "firsttime",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author ends with sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "explain how to repair a broken phonograph" },
            { letter: "B", text: "compare the phonograph with later inventions" },
            { letter: "C", text: "describe the sound quality of early records" },
            { letter: "D", text: "stress why the invention was so important" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-jazz-who-needs-sound",
      family: "LIT",
      genre: "HISTORY",
      episode: "jazz",
      title: "Who Needs Sound?",
      kind: "Film history · 11.RI",
      blurb: "Edison could not make pictures talk; telephone engineers could.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Edison dreamed of joining his phonograph to his moving pictures so that films would seem completely alive. " +
        N(2) + "He failed for two reasons: the recordings were too quiet to fill a room, and keeping sound and picture together was nearly impossible. " +
        N(3) + "In the 1920s, engineers from the telephone business solved both problems with electric microphones and amplifiers. " +
        N(4) + "Now recorded sound could be loud, and it was easier to match to the picture. " +
        N(5) + "Yet many Hollywood studio heads shrugged: silent films were making money, so who needed sound?" +
        "</p>",
      claims: [
        {
          id: "failed",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence explains why Edison's plan for sound films failed?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "B"
        },
        {
          id: "amplifier",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentences 3 and 4, an *amplifier* is a device that —",
          choices: [
            { letter: "A", text: "makes sounds louder" },
            { letter: "B", text: "records moving pictures" },
            { letter: "C", text: "connects two telephones" },
            { letter: "D", text: "cuts grooves into wax" }
          ],
          correct: "A"
        },
        {
          id: "pattern",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which organizational pattern does the passage mainly use?",
          choices: [
            { letter: "A", text: "a list of inventors in order of their birth" },
            { letter: "B", text: "a comparison of two film studios" },
            { letter: "C", text: "a problem followed by its solution" },
            { letter: "D", text: "a description of a single scene" }
          ],
          correct: "C"
        },
        {
          id: "shrugged",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 5 suggests that many studio heads —",
          choices: [
            { letter: "A", text: "were eager to spend money on new inventions" },
            { letter: "B", text: "had never heard of Edison's earlier phonograph" },
            { letter: "C", text: "believed sound films were already common" },
            { letter: "D", text: "saw no reason to change a profitable business" }
          ],
          correct: "D"
        },
        {
          id: "alive",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, Edison's wish that films would \"seem completely alive\" means he wanted films that —",
          choices: [
            { letter: "A", text: "lasted longer than an hour" },
            { letter: "B", text: "showed only real events" },
            { letter: "C", text: "joined lifelike sound to motion" },
            { letter: "D", text: "were filmed outdoors in daylight" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-jazz-vitaphone",
      family: "LIT",
      genre: "HISTORY",
      episode: "jazz",
      title: "The Warners Take a Gamble",
      kind: "Film history · 11.RI",
      blurb: "Sam Warner, Vitaphone and Don Juan (1926), the first feature with a recorded score.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "The Warner brothers, Harry, Albert, Sam and Jack, started in show business by running a small movie theater in Pennsylvania in the early 1900s. " +
        N(2) + "By the 1920s they ran a Hollywood studio, and in 1925 Sam, a radio fan who had helped build a radio station, urged his brothers to try sound. " +
        N(3) + "Their first plan was modest. " +
        N(4) + "Films would still be silent, but a recorded orchestra would replace the live musicians in each theater, so every audience would hear the music the studio had chosen. " +
        N(5) + "They called their system Vitaphone, from words meaning \"life\" and \"sound.\" " +
        N(6) + "Its first feature, <em>Don Juan</em> (1926), had a recorded score and sound effects, such as clashing swords and ringing bells, timed to the action. " +
        N(7) + "Rival studios called sound a fad that would soon fade." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which choice best summarizes the passage about Vitaphone?",
          choices: [
            { letter: "A", text: "The Warners sold their theater to start a radio station." },
            { letter: "B", text: "The Warners' first talking film was a failure in theaters." },
            { letter: "C", text: "Led by Sam, the Warners added recorded sound to film." },
            { letter: "D", text: "Rival studios invented Vitaphone before the Warners could." }
          ],
          correct: "C"
        },
        {
          id: "roots",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Sentence 5 explains that *Vitaphone* comes from words meaning \"life\" and \"sound.\" Which other word most likely shares the root meaning \"sound\"?",
          choices: [
            { letter: "A", text: "vitamin" },
            { letter: "B", text: "telephone" },
            { letter: "C", text: "photograph" },
            { letter: "D", text: "vital" }
          ],
          correct: "B"
        },
        {
          id: "modest",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the passage about Vitaphone, the author includes sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "signal that the first plan was limited" },
            { letter: "B", text: "show that the Warners were shy and quiet men" },
            { letter: "C", text: "suggest that Vitaphone cost very little money" },
            { letter: "D", text: "explain why rival studios copied the plan" }
          ],
          correct: "A"
        },
        {
          id: "musicians",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 4, which result of the Warners' plan can the reader infer?",
          choices: [
            { letter: "A", text: "Theaters would need far fewer live musicians." },
            { letter: "B", text: "Each theater would choose its own music." },
            { letter: "C", text: "Actors would begin speaking on screen at once." },
            { letter: "D", text: "Audiences would have to stop reading intertitles." }
          ],
          correct: "A"
        },
        {
          id: "donjuan",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO kinds of sound that the passage says *Don Juan* included.",
          choices: [
            { letter: "A", text: "spoken conversations between the actors" },
            { letter: "B", text: "a recorded musical score" },
            { letter: "C", text: "a narrator explaining the plot" },
            { letter: "D", text: "sound effects timed to the action" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "fad",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word *fad* most nearly means —",
          choices: [
            { letter: "A", text: "a costly mistake" },
            { letter: "B", text: "a secret business plan" },
            { letter: "C", text: "a lasting change" },
            { letter: "D", text: "a short-lived craze" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-jazz-singer-summary",
      family: "LIT",
      genre: "HISTORY",
      episode: "jazz",
      title: "The Singer Who Spoke",
      kind: "Film history · 11.RI",
      blurb: "The Jazz Singer (1927): mostly silent, but its few spoken moments changed everything.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "After <em>Don Juan</em>, Warner Bros. made short sound films of singers and comedians, then released <em>The Jazz Singer</em> (1927), starring Al Jolson. " +
        N(2) + "The film tells of a young man who wants to sing popular music, against the wishes of his father, a cantor in a synagogue. " +
        N(3) + "Most of the movie is silent, with intertitles and a recorded score, but it includes several songs and a few moments of speech. " +
        N(4) + "In one scene, Jolson chats playfully with the actress playing his character's mother, and audiences were thrilled to hear an actor simply talk. " +
        N(5) + "The film also includes a blackface number, part of a racist stage tradition that is painful to watch today. " +
        N(6) + "Sam Warner, who had pushed hardest for sound, died the day before the premiere. " +
        N(7) + "The next year, the studio released <em>Lights of New York</em> (1928), the first feature with dialogue from start to finish, and talkies had arrived." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about *The Jazz Singer*?",
          choices: [
            { letter: "A", text: "Though mostly silent, it showed audiences wanted talk." },
            { letter: "B", text: "It was the first film ever to use a recorded musical score." },
            { letter: "C", text: "It failed because audiences preferred silent films." },
            { letter: "D", text: "It was a film entirely about the history of jazz music." }
          ],
          correct: "A"
        },
        {
          id: "thrilled",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence best explains what excited audiences most about the film?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "talkies",
          sol: "11.RV.1.A",
          sub: "11.RV.1.A.1",
          stem: "Based on sentence 7, *talkies* are —",
          choices: [
            { letter: "A", text: "films with recorded music only" },
            { letter: "B", text: "films with intertitles and no sound" },
            { letter: "C", text: "films where actors speak aloud" },
            { letter: "D", text: "short films of singers and comedians" }
          ],
          correct: "C"
        },
        {
          id: "blackface",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "Why does the author include sentence 5?",
          choices: [
            { letter: "A", text: "to praise the film's most popular song" },
            { letter: "B", text: "to name a racist custom of the era" },
            { letter: "C", text: "to explain how sound was recorded on stage" },
            { letter: "D", text: "to show that the film was banned in 1927" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author mainly organize the passage?",
          choices: [
            { letter: "A", text: "by ranking films from best to worst" },
            { letter: "B", text: "by arguing for and then against sound" },
            { letter: "C", text: "by describing events in time order" },
            { letter: "D", text: "by defining a list of technical terms" }
          ],
          correct: "C"
        },
        {
          id: "notfull",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO details showing that *The Jazz Singer* was not a fully talking picture.",
          choices: [
            { letter: "A", text: "Most of it is silent, with intertitles and a recorded score." },
            { letter: "B", text: "It stars the popular entertainer Al Jolson." },
            { letter: "C", text: "Its story involves a father who is a cantor." },
            { letter: "D", text: "A later film was the first with dialogue throughout." }
          ],
          correct: ["A", "D"]
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "lit-jazz-last-night-orpheum",
      family: "LIT",
      genre: "HISTORY",
      episode: "jazz",
      title: "The Last Night at the Orpheum",
      kind: "Short story · 11.RL",
      blurb: "A theater pianist plays her final silent show, and a deaf boy asks a question she cannot answer.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "For twelve years, Ada Moreno had played the piano at the Orpheum, glancing up at the screen and finding the right music for every scene. " +
        N(2) + "She knew how to make a chase gallop under her fingers and how to let a farewell drift into silence. " +
        N(3) + "Tonight, in the spring of 1929, was her last show. " +
        N(4) + "Workers had already built a booth for the new sound equipment, and next week the Orpheum would show its first talking picture, with music from an orchestra no one in town had ever met. " +
        N(5) + "Before the lights went down, Walter Brandt slid into his usual seat in the front row. " +
        N(6) + "Walter had been deaf since he was small, and he loved silent films because the actors' faces and the printed intertitles told him everything. " +
        N(7) + "He handed Ada a folded note that asked whether the talkies would have cards. " +
        N(8) + "She read it twice and could not find an answer, so she squeezed his shoulder instead. " +
        N(9) + "When the film began, Ada played as if the whole town were listening for the last time. " +
        N(10) + "She played the hero's ride, the storm and the reunion, and when the final card faded, the audience clapped longer than usual, though no one could say whether it was for the film or for her. " +
        N(11) + "After everyone had gone, she stayed at the piano in the dark and played one more tune, slowly, for the empty seats." +
        "</p>",
      claims: [
        {
          id: "ada",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "What do sentences 1 and 2 reveal about Ada?",
          choices: [
            { letter: "A", text: "She is bored with her job and eager to leave it." },
            { letter: "B", text: "She is skilled at matching music to moods." },
            { letter: "C", text: "She is new to the Orpheum and still learning." },
            { letter: "D", text: "She prefers loud, fast music to quiet music." }
          ],
          correct: "B"
        },
        {
          id: "context",
          sol: "11.RL.3.A",
          sub: "11.RL.3.A.1",
          stem: "How does the arrival of sound affect both Ada and Walter?",
          choices: [
            { letter: "A", text: "Both look forward to hearing the actors speak." },
            { letter: "B", text: "Both will be hired to help run the sound booth." },
            { letter: "C", text: "Both may lose something silent films gave them." },
            { letter: "D", text: "Both decide to leave town before the talkies arrive." }
          ],
          correct: "C"
        },
        {
          id: "orchestra",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 4, the phrase \"an orchestra no one in town had ever met\" suggests that recorded music will feel —",
          choices: [
            { letter: "A", text: "distant and impersonal" },
            { letter: "B", text: "louder and more exciting" },
            { letter: "C", text: "cheap and badly played" },
            { letter: "D", text: "familiar and comforting" }
          ],
          correct: "A"
        },
        {
          id: "note",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do sentences 7 and 8 contribute to the story?",
          choices: [
            { letter: "A", text: "They reveal that Walter wants Ada's job at the theater." },
            { letter: "B", text: "They resolve the conflict between Ada and the manager." },
            { letter: "C", text: "They explain how the new sound equipment works." },
            { letter: "D", text: "They raise the question of who talkies will leave out." }
          ],
          correct: "D"
        },
        {
          id: "sadness",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences that best show that Ada feels the end of an era.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story best develop?",
          choices: [
            { letter: "A", text: "New technology always makes life easier for everyone." },
            { letter: "B", text: "Progress can bring real losses for some people." },
            { letter: "C", text: "Music matters less than the story on the screen." },
            { letter: "D", text: "Young people adjust to change faster than adults do." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-jazz-cost-of-sound",
      family: "LIT",
      genre: "HISTORY",
      episode: "jazz",
      title: "What Sound Cost",
      kind: "Film history · 11.RI",
      blurb: "Soundproof stages, camera booths, replaced stars, skipping records and silent musicians.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "The success of <em>The Jazz Singer</em> in 1927 convinced Hollywood that audiences wanted to hear actors talk, and the studios rushed to convert their stages, their theaters and their stars. " +
        N(2) + "The switch was fast, expensive and full of surprises, and it changed the work of nearly everyone who made or showed movies.</p>" +
        "<p>" + N(3) + "Studios had to buy new equipment and build soundproof stages, because a passing truck or a hammer outside could ruin a recording. " +
        N(4) + "The cameras themselves whirred loudly, so camera operators were shut inside heavy booths with glass windows, where they sweltered in the heat. " +
        N(5) + "Because the booths were hard to move, the camera, which had glided freely through many late silent films, suddenly sat still. " +
        N(6) + "Directors, who had once called out instructions during a take, now had to keep quiet.</p>" +
        "<p>" + N(7) + "Actors faced new tests. " +
        N(8) + "They had to memorize long speeches and stay close to hidden microphones, sometimes tucked into a vase of flowers or a lamp. " +
        N(9) + "Some silent stars whose voices sounded thin, harsh or heavily accented to audiences of the time lost their careers, while stage actors trained to project their voices were hired in their place. " +
        N(10) + "As a result, many early talkies were stiff: groups of people standing near a microphone, talking.</p>" +
        "<p>" + N(11) + "Theaters changed, too. " +
        N(12) + "With Vitaphone, the sound came from a large disc that had to start at exactly the right moment, and the projectionist ran the record player and the projector together. " +
        N(13) + "If the needle skipped, the voices fell out of step with the lips, and audiences booed. " +
        N(14) + "Thousands of theater musicians lost their jobs, replaced by a few studio orchestras whose recordings played across the country. " +
        N(15) + "Audiences had to change as well, since the talking and laughing that had been common during silent films now drowned out the dialogue. " +
        N(16) + "Deaf and hard-of-hearing moviegoers, who had followed silent films through acting and intertitles, lost much of their access, because talkies dropped most title cards and actors often turned away from the camera while speaking.</p>" +
        "<p>" + N(17) + "By about 1930, engineers had quieter cameras, better microphones and a new method called sound-on-film, which printed the soundtrack as a strip of light and dark patterns right beside the pictures. " +
        N(18) + "Because sound and image now traveled on the same strip, they stayed together far more easily. " +
        N(19) + "One holdout remained: Charlie Chaplin kept his Little Tramp silent in <em>City Lights</em> (1931), trusting a language of gesture that audiences everywhere understood." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the article about the switch to sound?",
          choices: [
            { letter: "A", text: "Sound was a passing fad that Hollywood soon abandoned." },
            { letter: "B", text: "Sound changed films and moviegoing at a real cost." },
            { letter: "C", text: "Chaplin was the only filmmaker who mastered sound." },
            { letter: "D", text: "Silent films were more expensive to make than talkies." }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which choice best describes how sentences 3–16 are organized?",
          choices: [
            { letter: "A", text: "by the groups the change affected" },
            { letter: "B", text: "by the years in which films were released" },
            { letter: "C", text: "by comparing two rival studios" },
            { letter: "D", text: "by ranking inventions by importance" }
          ],
          correct: "A"
        },
        {
          id: "stillcamera",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "According to sentences 4 and 5, why did the camera stop moving in early talkies?",
          choices: [
            { letter: "A", text: "Directors decided that moving shots confused audiences." },
            { letter: "B", text: "Studios could no longer afford camera tracks." },
            { letter: "C", text: "It was shut inside a heavy booth to muffle its noise." },
            { letter: "D", text: "Actors refused to perform while the camera moved." }
          ],
          correct: "C"
        },
        {
          id: "sweltered",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *sweltered* most nearly means —",
          choices: [
            { letter: "A", text: "shouted loudly for help" },
            { letter: "B", text: "worked quickly" },
            { letter: "C", text: "slept soundly" },
            { letter: "D", text: "suffered from heat" }
          ],
          correct: "D"
        },
        {
          id: "losers",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO groups that the article says lost something because of sound.",
          choices: [
            { letter: "A", text: "theater musicians" },
            { letter: "B", text: "stage actors with trained voices" },
            { letter: "C", text: "engineers who built microphones" },
            { letter: "D", text: "deaf and hard-of-hearing moviegoers" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "soundonfilm",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Based on sentences 17 and 18, sound-on-film made it easier to keep sound and picture together because —",
          choices: [
            { letter: "A", text: "the projectionist no longer had to watch the screen" },
            { letter: "B", text: "the sound and the pictures were on the same strip" },
            { letter: "C", text: "the records were made larger and spun more slowly" },
            { letter: "D", text: "microphones were hidden closer to the actors" }
          ],
          correct: "B"
        },
        {
          id: "stiff",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentence 10, the phrase \"as a result\" links the stiffness of early talkies to —",
          choices: [
            { letter: "A", text: "the loss of jobs for theater musicians" },
            { letter: "B", text: "the noise of trucks passing the studio" },
            { letter: "C", text: "actors staying near fixed microphones" },
            { letter: "D", text: "audiences booing when the needle skipped" }
          ],
          correct: "C"
        },
        {
          id: "holdout",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author ends with sentence 19 mainly to —",
          choices: [
            { letter: "A", text: "show that silent storytelling lived on" },
            { letter: "B", text: "argue that City Lights was a box-office failure" },
            { letter: "C", text: "explain how Chaplin recorded his own voice" },
            { letter: "D", text: "prove that every studio had switched by 1931" }
          ],
          correct: "A"
        }
      ]
    },

    /* ═════════════ EPISODE: history — the genre basics: studios, the Code, sound vs. color, Technicolor ═════════════ */

    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "lit-history-tinting",
      family: "LIT",
      genre: "HISTORY",
      episode: "history",
      title: "Color Before Color Film",
      kind: "Film history · 11.RI",
      blurb: "Tinting and hand-coloring put color on screens almost from the start.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Many people assume that all early movies were black and white, but color appeared on screens almost from the start. " +
        N(2) + "In tinting, a whole scene was dyed one color: blue for night, amber for lamplight, red for fire. " +
        N(3) + "Tinting set a mood but did not show the true colors of things. " +
        N(4) + "Hand-coloring went further: workers painted parts of each tiny frame, one at a time, as in some prints of <em>A Trip to the Moon</em> (1902). " +
        N(5) + "Later, stencils sped up the job, but it stayed slow and costly." +
        "</p>",
      claims: [
        {
          id: "myth",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which common belief does the passage challenge?",
          choices: [
            { letter: "A", text: "that color film is expensive to make" },
            { letter: "B", text: "that A Trip to the Moon was a silent film" },
            { letter: "C", text: "that early films had no color at all" },
            { letter: "D", text: "that night scenes are hard to film" }
          ],
          correct: "C"
        },
        {
          id: "difference",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentences 2–4, how did tinting differ from hand-coloring?",
          choices: [
            { letter: "A", text: "Tinting dyed a whole scene; hand-coloring painted parts of frames." },
            { letter: "B", text: "Tinting was done by hand; hand-coloring was done entirely by machine." },
            { letter: "C", text: "Tinting showed true colors; hand-coloring only suggested a mood." },
            { letter: "D", text: "Tinting came after stencils; hand-coloring came before films existed." }
          ],
          correct: "A"
        },
        {
          id: "blue",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentence 2, a scene tinted blue most likely took place —",
          choices: [
            { letter: "A", text: "inside a burning house" },
            { letter: "B", text: "outdoors at night" },
            { letter: "C", text: "beside a glowing lamp" },
            { letter: "D", text: "on a sunny beach" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the passage move from sentence 2 to sentence 4?",
          choices: [
            { letter: "A", text: "from a cause to its many effects" },
            { letter: "B", text: "from a recent method to an older one" },
            { letter: "C", text: "from an opinion to the facts against it" },
            { letter: "D", text: "from a simple method to a finer one" }
          ],
          correct: "D"
        },
        {
          id: "rare",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence best explains why hand-coloring could not be used for most films?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 3" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "lit-history-oz-myth",
      family: "LIT",
      genre: "HISTORY",
      episode: "history",
      title: "Over the Rainbow, Not the First",
      kind: "Film history · 11.RI",
      blurb: "The Wizard of Oz was not the first color film, but it used color to tell a story.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "A popular myth says that <em>The Wizard of Oz</em> (1939) was the first color film. " +
        N(2) + "In fact, color films existed more than thirty years earlier. " +
        N(3) + "What <em>Oz</em> did was use color as a storytelling tool. " +
        N(4) + "Its Kansas scenes are printed in a brownish tone called sepia, so when Dorothy opens her door onto the bright land of Oz, the burst of Technicolor feels like stepping into a dream. " +
        N(5) + "Even Dorothy's slippers were changed from silver in the novel to ruby red, to show off the new color on screen." +
        "</p>",
      claims: [
        {
          id: "correct-myth",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which claim does the passage correct?",
          choices: [
            { letter: "A", text: "that Oz was based on a novel" },
            { letter: "B", text: "that Dorothy's slippers were red" },
            { letter: "C", text: "that Kansas scenes were in color" },
            { letter: "D", text: "that Oz was the first color film" }
          ],
          correct: "D"
        },
        {
          id: "sepia",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words in sentence 4 help the reader understand *sepia*?",
          choices: [
            { letter: "A", text: "\"a brownish tone\"" },
            { letter: "B", text: "\"the bright land of Oz\"" },
            { letter: "C", text: "\"the burst of Technicolor\"" },
            { letter: "D", text: "\"stepping into a dream\"" }
          ],
          correct: "A"
        },
        {
          id: "dream",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "According to sentence 4, the change from sepia to color helps viewers feel that Dorothy has —",
          choices: [
            { letter: "A", text: "returned home safely to her family" },
            { letter: "B", text: "entered a magical new world" },
            { letter: "C", text: "fallen asleep and lost her way" },
            { letter: "D", text: "grown older during the storm" }
          ],
          correct: "B"
        },
        {
          id: "slippers",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 5 suggests that the filmmakers chose ruby slippers because —",
          choices: [
            { letter: "A", text: "silver was too costly to use on a film set" },
            { letter: "B", text: "the novel's author asked for the change" },
            { letter: "C", text: "red would stand out in the new process" },
            { letter: "D", text: "audiences had never seen silver on screen" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the passage about The Wizard of Oz, sentence 3 mainly serves to —",
          choices: [
            { letter: "A", text: "turn from the myth to what Oz really did" },
            { letter: "B", text: "prove that Oz was filmed entirely in color" },
            { letter: "C", text: "explain how Technicolor cameras worked" },
            { letter: "D", text: "argue that sepia is better than color" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "lit-history-studio-system",
      family: "LIT",
      genre: "HISTORY",
      episode: "history",
      title: "The Dream Factories",
      kind: "Film history · 11.RI",
      blurb: "Hollywood's Golden Age studio system: contracts, stars, theaters and its fall.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "From about the 1930s through the 1940s, a period often called Hollywood's Golden Age, a handful of big studios ran the movie business like factories. " +
        N(2) + "The largest, among them MGM, Paramount and Warner Bros., controlled every step: they made the films, distributed them and owned chains of theaters to show them. " +
        N(3) + "Writers, directors and actors worked under long contracts, often for seven years, and the studio decided which films they would make. " +
        N(4) + "Studios built stars carefully, choosing their names, their roles and even their public images. " +
        N(5) + "Each studio had its specialties, from musicals to gangster pictures to westerns, so audiences knew what to expect. " +
        N(6) + "The system began to break apart in 1948, when the U.S. Supreme Court ruled in the Paramount case that the studios had to give up their theaters. " +
        N(7) + "Without guaranteed screens, the factories began to slow." +
        "</p>",
      claims: [
        {
          id: "factories",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "The comparison of studios to factories in sentence 1 suggests that —",
          choices: [
            { letter: "A", text: "the studios also built cars and other machines" },
            { letter: "B", text: "films were made in a steady, organized way" },
            { letter: "C", text: "studio workers were paid by the hour" },
            { letter: "D", text: "most films were made outdoors in the sun" }
          ],
          correct: "B"
        },
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which choice best summarizes the passage about the studio system?",
          choices: [
            { letter: "A", text: "Golden Age actors were free to choose any films they liked." },
            { letter: "B", text: "The Supreme Court created the studio system in 1948." },
            { letter: "C", text: "Westerns were the only genre the studios produced." },
            { letter: "D", text: "Big studios controlled filmmaking until a 1948 ruling." }
          ],
          correct: "D"
        },
        {
          id: "control",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO ways the passage says the big studios controlled the movie business.",
          choices: [
            { letter: "A", text: "They owned theaters that showed their films." },
            { letter: "B", text: "They let actors choose their own roles." },
            { letter: "C", text: "They kept workers under long contracts." },
            { letter: "D", text: "They shared their stars with rival studios." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "distributed",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word *distributed* most nearly means —",
          choices: [
            { letter: "A", text: "wrote the scripts" },
            { letter: "B", text: "filmed over again" },
            { letter: "C", text: "sent out to theaters" },
            { letter: "D", text: "cut into small pieces" }
          ],
          correct: "C"
        },
        {
          id: "ruling",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Based on sentences 6 and 7, why did the 1948 ruling weaken the studios?",
          choices: [
            { letter: "A", text: "They lost theaters that guaranteed them audiences." },
            { letter: "B", text: "They were forbidden to make musicals and westerns." },
            { letter: "C", text: "They had to release all their actors from long contracts." },
            { letter: "D", text: "They were required to stop creating movie stars." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which choice best describes the structure of the passage about the studio system?",
          choices: [
            { letter: "A", text: "It compares Hollywood with filmmaking across Europe." },
            { letter: "B", text: "It lists the studios in order of their size." },
            { letter: "C", text: "It argues that the studio system should return." },
            { letter: "D", text: "It describes a system, then explains its decline." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "lit-history-production-code",
      family: "LIT",
      genre: "HISTORY",
      episode: "history",
      title: "The Code",
      kind: "Film history · 11.RI",
      blurb: "The Production Code (the Hays Code) and how it shaped what Golden Age movies could show.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "In 1930, Hollywood's studios adopted the Production Code, a set of rules about what movies could show. " +
        N(2) + "It was often called the Hays Code, after Will Hays, the former government official who led the studios' trade group. " +
        N(3) + "The studios wrote rules for themselves partly to keep the government from censoring films instead. " +
        N(4) + "At first the Code was loosely followed, but from 1934 a new office strictly enforced it, and a film needed the office's seal of approval to be released. " +
        N(5) + "The rules said that crime must never seem to pay, that criminals must be punished by the end, and that sex, violence and rough language be kept off the screen or only hinted at. " +
        N(6) + "Filmmakers learned to suggest what they could not show, using shadows, cutaways and clever dialogue. " +
        N(7) + "The Code weakened in the 1960s and was replaced in 1968 by a rating system that is still used today." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about the Production Code?",
          choices: [
            { letter: "A", text: "The government wrote strict rules for movies in 1930." },
            { letter: "B", text: "The Code limited what films could show for decades." },
            { letter: "C", text: "Will Hays directed many of the era's crime films." },
            { letter: "D", text: "Filmmakers ignored the Code until it was replaced." }
          ],
          correct: "B"
        },
        {
          id: "seal",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "Based on sentence 4, a film's *seal of approval* was —",
          choices: [
            { letter: "A", text: "a stamp showing it followed the Code" },
            { letter: "B", text: "an award given to the year's best film" },
            { letter: "C", text: "a ticket that let audiences into theaters" },
            { letter: "D", text: "a contract signed by the film's stars" }
          ],
          correct: "A"
        },
        {
          id: "motive",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Sentence 3 suggests that the studios created the Code mainly to —",
          choices: [
            { letter: "A", text: "make films cheaper to produce" },
            { letter: "B", text: "help their stars win awards" },
            { letter: "C", text: "attract more young viewers" },
            { letter: "D", text: "avoid outside censorship" }
          ],
          correct: "D"
        },
        {
          id: "enforced",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word *enforced* most nearly means —",
          choices: [
            { letter: "A", text: "rewrote" },
            { letter: "B", text: "ignored" },
            { letter: "C", text: "made people obey" },
            { letter: "D", text: "explained to the public" }
          ],
          correct: "C"
        },
        {
          id: "rules",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO rules of the Production Code named in the passage.",
          choices: [
            { letter: "A", text: "Crime must never seem to pay." },
            { letter: "B", text: "Every film must be shot in color." },
            { letter: "C", text: "No film may run longer than two hours." },
            { letter: "D", text: "Criminals must be punished by the end." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "suggest",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 6 mainly to show that the Code —",
          choices: [
            { letter: "A", text: "made filmmakers give up on serious stories" },
            { letter: "B", text: "pushed filmmakers to hint instead of show" },
            { letter: "C", text: "was secretly ignored by most directors" },
            { letter: "D", text: "required every film to include dialogue" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── MEDIUM: PAIRED TEXTS (level 2) ───────────── */
    {
      id: "lit-history-paired-sound-color",
      family: "LIT",
      genre: "HISTORY",
      episode: "history",
      title: "A Flood and a Long Road",
      kind: "Paired texts · 11.DSR",
      blurb: "Two short histories: how fast sound took over, and how slowly color did.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Sound Arrives Overnight</strong></p>" +
        "<p>" + N(1) + "Sound came to Hollywood like a flood. " +
        N(2) + "After <em>The Jazz Singer</em> drew crowds in 1927, studios raced to wire their stages and theaters for sound. " +
        N(3) + "<em>Lights of New York</em>, the first all-talking feature, arrived the next year. " +
        N(4) + "Theaters that could not afford the new equipment struggled to fill their seats. " +
        N(5) + "By about 1930, sound-on-film had made recording easier, and silent features had all but vanished from American studios. " +
        N(6) + "The change was costly: musicians lost their jobs, some stars lost their careers, and cameras were trapped for a while in soundproof booths. " +
        N(7) + "Still, audiences demanded talk, and within about three years the silent era was over. " +
        N(8) + "Few technologies have conquered an industry so quickly.</p>" +
        "<p><strong>Text 2 — Color Takes the Long Road</strong></p>" +
        "<p>" + N(9) + "Color took the long road. " +
        N(10) + "Tinting and hand-coloring appeared in the earliest years, and England's Kinemacolor projected two-color films by 1908. " +
        N(11) + "Technicolor's two-color process reached features in 1917, and its three-strip process debuted in Disney's cartoon <em>Flowers and Trees</em> in 1932. " +
        N(12) + "<em>Becky Sharp</em> (1935) became the first feature filmed entirely in three-strip Technicolor. " +
        N(13) + "Yet color stayed expensive, needing huge rented cameras and extra light, so studios saved it for prestige pictures. " +
        N(14) + "Only in the 1950s, when cheaper Eastmancolor arrived and studios fought television with color and wide screens, did most Hollywood films switch. " +
        N(15) + "By the mid-1960s, black and white had become an artistic choice.</p>",
      claims: [
        {
          id: "difference",
          sol: "11.RI.3.A",
          sub: "11.RI.3.A.1",
          stem: "Which statement best describes a key difference between the texts about sound and color?",
          choices: [
            { letter: "A", text: "Text 1 praises sound, while Text 2 argues against color." },
            { letter: "B", text: "Text 1 covers cartoons, while Text 2 covers feature films." },
            { letter: "C", text: "Sound took over in a few years; color took decades." },
            { letter: "D", text: "Text 1 is about England, while Text 2 is about America." }
          ],
          correct: "C"
        },
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO ideas that BOTH texts about new film technology support.",
          choices: [
            { letter: "A", text: "The new technology was expensive." },
            { letter: "B", text: "The new technology first appeared in a cartoon." },
            { letter: "C", text: "Warner Bros. invented the new technology." },
            { letter: "D", text: "Most Hollywood films eventually used it." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "flood",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.2",
          stem: "In sentence 1, comparing the arrival of sound to \"a flood\" suggests that sound —",
          choices: [
            { letter: "A", text: "damaged many theaters with water" },
            { letter: "B", text: "came fast and swept everything along" },
            { letter: "C", text: "arrived slowly, one studio at a time over years" },
            { letter: "D", text: "was welcomed only by a few viewers" }
          ],
          correct: "B"
        },
        {
          id: "slow",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Which sentence from Text 2 best explains why color spread so slowly?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "D"
        },
        {
          id: "openers",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How do the opening sentences of the two texts (sentences 1 and 9) work together?",
          choices: [
            { letter: "A", text: "They set up a contrast in the speed of each change." },
            { letter: "B", text: "They show that both changes happened in the same year." },
            { letter: "C", text: "They introduce the inventors of sound and color." },
            { letter: "D", text: "They suggest that both changes were mistakes." }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "11.RI.3.A",
          sub: "11.RI.3.A.1",
          stem: "Based on both texts, which conclusion is most reasonable?",
          choices: [
            { letter: "A", text: "Studios always adopt new technology as soon as it exists." },
            { letter: "B", text: "Audience demand and cost shaped how fast each change came." },
            { letter: "C", text: "Silent films and black-and-white films vanished completely." },
            { letter: "D", text: "Television had nothing to do with the spread of color." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "lit-history-painting-with-light",
      family: "LIT",
      genre: "HISTORY",
      episode: "history",
      title: "Painting with Light",
      kind: "Film history · 11.RI",
      blurb: "Kinemacolor, two-color and three-strip Technicolor, Eastmancolor and the choice of black and white.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Color did not arrive in the movies all at once; it crept in over half a century, one invention at a time. " +
        N(2) + "Each new process solved one problem and created another.</p>" +
        "<p>" + N(3) + "The first commercially successful color system for moving pictures was Kinemacolor, patented in England in 1906 by George Albert Smith. " +
        N(4) + "Its camera filmed through red and green filters, and a matching projector flashed the images back through the same colors so that the eye blended them. " +
        N(5) + "Its first film, <em>A Visit to the Seaside</em> (1908), delighted British audiences, but two colors could not reproduce every shade, and many theaters could not afford the special projectors.</p>" +
        "<p>" + N(6) + "In America, the Technicolor company tried a different route. " +
        N(7) + "Its first feature, <em>The Gulf Between</em> (1917), also used two colors, but it needed a special projector, and it was the only film made that way. " +
        N(8) + "By <em>The Toll of the Sea</em> (1922), Technicolor had learned to print the color directly onto the film itself, so any theater's ordinary projector could show it. " +
        N(9) + "The process was still expensive and needed extra light, so studios often used it only for short sequences, such as the masked ball in <em>The Phantom of the Opera</em> (1925).</p>" +
        "<p>" + N(10) + "The breakthrough came in 1932 with three-strip Technicolor. " +
        N(11) + "Inside a bulky camera, a prism split the light onto three strips of film, each recording one part of the color picture, and the three were combined with dyes into a single print. " +
        N(12) + "Walt Disney's cartoon <em>Flowers and Trees</em> (1932) introduced it, and <em>Becky Sharp</em> (1935) became the first feature filmed entirely in the process. " +
        N(13) + "The results were rich and vivid, but studios had to rent the enormous cameras from Technicolor, along with its crews and color advisers, so color was saved for prestige pictures such as <em>Gone with the Wind</em> (1939).</p>" +
        "<p>" + N(14) + "Television finally pushed color into the mainstream. " +
        N(15) + "In the 1950s, families stayed home to watch small black-and-white screens, and Hollywood fought back with what TV could not offer: wide screens and color. " +
        N(16) + "Kodak's Eastmancolor, a cheaper film that recorded all the colors on a single strip and worked in ordinary cameras, including widescreen ones, made the change affordable. " +
        N(17) + "By the late 1950s most Hollywood films were in color, and by the mid-1960s black and white had become a deliberate artistic choice.</p>" +
        "<p>" + N(18) + "Directors still make that choice. " +
        N(19) + "<em>Young Frankenstein</em> (1974), <em>Raging Bull</em> (1980) and <em>Schindler's List</em> (1993) were shot in black and white on purpose, long after color had become normal, and <em>The Artist</em> (2011) used black and white and silence to honor the films of the 1920s. " +
        N(20) + "Color, once a marvel, is now so ordinary that its absence is what makes audiences look twice." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the article about color film?",
          choices: [
            { letter: "A", text: "Color came to film suddenly with The Wizard of Oz." },
            { letter: "B", text: "Color arrived gradually, each process with tradeoffs." },
            { letter: "C", text: "Technicolor was the only company that made color film." },
            { letter: "D", text: "Black and white is better than color for serious films." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is most of the article organized?",
          choices: [
            { letter: "A", text: "in time order, one stage per paragraph" },
            { letter: "B", text: "as a debate between two film historians" },
            { letter: "C", text: "from the most recent films back to the oldest" },
            { letter: "D", text: "as a list of the most popular color films" }
          ],
          correct: "A"
        },
        {
          id: "kinemacolor",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Based on sentences 4 and 5, why could Kinemacolor not show every shade?",
          choices: [
            { letter: "A", text: "Its projectors were too dim for large theaters." },
            { letter: "B", text: "Its film was printed in black and white only." },
            { letter: "C", text: "It built its colors from only red and green." },
            { letter: "D", text: "It had to be painted by hand, frame by frame." }
          ],
          correct: "C"
        },
        {
          id: "toll",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "According to sentences 7 and 8, how did *The Toll of the Sea* improve on *The Gulf Between*?",
          choices: [
            { letter: "A", text: "It used three colors instead of two." },
            { letter: "B", text: "It was the first film with recorded sound." },
            { letter: "C", text: "It needed far less light on the set." },
            { letter: "D", text: "Its color was printed on the film itself." }
          ],
          correct: "D"
        },
        {
          id: "obstacles",
          sol: "11.DSR.C",
          sub: "11.DSR.C.3",
          stem: "Select TWO obstacles that slowed the spread of color before the 1950s.",
          choices: [
            { letter: "A", text: "Many theaters could not afford special projectors." },
            { letter: "B", text: "Audiences said they disliked seeing color films." },
            { letter: "C", text: "Studios had to rent huge cameras and crews." },
            { letter: "D", text: "Television had already switched to color." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "prestige",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 13, *prestige pictures* are most likely —",
          choices: [
            { letter: "A", text: "cartoons made for young children" },
            { letter: "B", text: "films without any recorded sound" },
            { letter: "C", text: "short films shown before a feature" },
            { letter: "D", text: "important, high-status productions" }
          ],
          correct: "D"
        },
        {
          id: "television",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to sentences 14–16, why did Hollywood turn to color in the 1950s?",
          choices: [
            { letter: "A", text: "to offer audiences what television could not" },
            { letter: "B", text: "because the Production Code required it" },
            { letter: "C", text: "because black-and-white film was no longer made" },
            { letter: "D", text: "to make films more cheaply than before" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "What irony does the final sentence (sentence 20) point out?",
          choices: [
            { letter: "A", text: "Color films are now cheaper than black and white." },
            { letter: "B", text: "Color is now so normal that black and white stands out." },
            { letter: "C", text: "Audiences can no longer tell color from black and white." },
            { letter: "D", text: "Directors have stopped choosing black and white entirely." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
