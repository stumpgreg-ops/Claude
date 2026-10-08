/* SOL Labyrinth — v5.15 expansion: Grade 11 long passages (Virginia G11), file c105.
 * Twelve original LONG packs (385–520 words; paired 200–260 each; poem 22–28 lines) on
 * insects, migrating birds, rocks and caves, and a fictional ancient city.
 * No VDOE / copyrighted text, no real people. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · Literary (level 2) · insects ───────────── */
    {
      id: "g11-rl-c105-brood",
      family: "G11",
      title: "Seventeen Summers",
      kind: "Literary · 11.RL",
      blurb: "A teenager annoyed by a cicada emergence hears her grandmother count her life in broods.",
      level: 2,
      passage:
        "<p>" + N(1) + "The first hole appeared beside the porch steps on a Tuesday in May, no wider than a pencil, and by Friday the yard looked as though someone had fired a thousand tiny nails into it. " +
        N(2) + "Lucía Ferreira, who was sixteen and had plans for the summer, considered the holes a personal insult. " +
        N(3) + "\"They come up all at once,\" her grandmother said from the porch swing, not looking up from her sewing. " +
        N(4) + "\"Seventeen years under the ground, and then one warm night they decide together.\"</p>" +
        "<p>" + N(5) + "By the next week the cicadas were everywhere: clinging to the screen door, crunching under bicycle tires, and singing from the oaks in a roar that rose and fell like a machine no one knew how to switch off. " +
        N(6) + "Lucía wore earbuds and turned her music up, but the sound came through anyway, the way heat comes through a window. " +
        N(7) + "She swept empty brown shells off the steps each morning, and each morning there were more, split neatly down the back as if their owners had unzipped them and walked away.</p>" +
        "<p>" + N(8) + "Avó Rosa did not seem to mind any of it. " +
        N(9) + "She sat on the swing in the evenings and watched the new adults climb the porch posts, their wings still pale and crumpled, slowly pumping full and hardening into glass. " +
        N(10) + "\"The last time they came,\" she said one night, \"your mother was in a stroller, and she screamed every time one landed on her blanket.\" " +
        N(11) + "Lucía laughed despite herself. " +
        N(12) + "\"And the time before that,\" her grandmother went on, \"I was a girl not much older than you, and I had just arrived in this country, and I thought the trees were broken.\"</p>" +
        "<p>" + N(13) + "Lucía took out one earbud. " +
        N(14) + "She did the arithmetic without meaning to: seventeen years back, and seventeen more before that, and her grandmother on this same porch, or one like it, listening to the same song. " +
        N(15) + "\"So you've heard them three times,\" she said. " +
        N(16) + "\"Three times,\" Avó Rosa agreed. " +
        N(17) + "\"Each time I was a different person, and each time they were exactly the same.\"</p>" +
        "<p>" + N(18) + "The roar went on for another three weeks. " +
        N(19) + "Then, as suddenly as it had begun, it thinned to a few scattered voices, and then to silence. " +
        N(20) + "Somewhere under the grass, Lucía knew, the eggs had already hatched, and the tiny nymphs had dropped from the branches and burrowed down to begin their long wait.</p>" +
        "<p>" + N(21) + "On the last evening, she found a single shell still gripping the porch post, perfect and empty. " +
        N(22) + "She pried it loose gently and set it on the windowsill of her room. " +
        N(23) + "Then she counted forward on her fingers: when the cicadas came back she would be thirty-three, and Avó Rosa would be very old, or would not be there at all. " +
        N(24) + "Lucía sat with that thought for a while, the way her grandmother sat with her sewing, not hurrying it. " +
        N(25) + "The next night, when the porch was quiet, she went out to the swing anyway and asked her grandmother to tell her about the first summer, the one when the trees seemed broken. " +
        N(26) + "This time she left both earbuds inside.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of Lucía and the cicada emergence most clearly develop?",
          choices: [
            { letter: "A", text: "Events in nature that return can help people measure and value shared time." },
            { letter: "B", text: "Young people should always trust an elder's knowledge over their own." },
            { letter: "C", text: "Insects that seem like pests usually turn out to be harmless to people." },
            { letter: "D", text: "People who move to a new country never stop feeling like strangers there." }
          ],
          correct: "A"
        },
        {
          id: "earbuds",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The earbuds Lucía wears in sentence 6 and leaves inside in sentence 26 mainly serve to —",
          choices: [
            { letter: "A", text: "show that she enjoys music more than the sounds of nature" },
            { letter: "B", text: "suggest that her grandmother disapproves of modern devices" },
            { letter: "C", text: "mark her shift from shutting the world out to choosing to listen" },
            { letter: "D", text: "explain why she did not notice the cicada holes until Friday" }
          ],
          correct: "C"
        },
        {
          id: "insult",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 2 suggests that, at the start of the story, Lucía —",
          choices: [
            { letter: "A", text: "is afraid the insects will harm her grandmother's garden" },
            { letter: "B", text: "sees the cicadas mainly as an interruption of her own plans" },
            { letter: "C", text: "already knows the long history of the cicadas in her family" },
            { letter: "D", text: "wants to help her grandmother repair the damaged yard" }
          ],
          correct: "B"
        },
        {
          id: "machine",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 5, comparing the cicadas' song to a machine no one knew how to switch off mainly conveys that the sound —",
          choices: [
            { letter: "A", text: "was caused by equipment the neighbors were running" },
            { letter: "B", text: "was more interesting to Lucía than she would admit" },
            { letter: "C", text: "was quieter during the day than during the evening" },
            { letter: "D", text: "felt relentless and beyond anyone's power to stop" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.2",
          stem: "Avó Rosa's remark in sentence 17 that she was a different person each time while the cicadas were exactly the same creates a contrast between —",
          choices: [
            { letter: "A", text: "human change over a lifetime and nature's steady repetition" },
            { letter: "B", text: "the grandmother's patience and Lucía's irritation at the noise" },
            { letter: "C", text: "the country Avó Rosa left and the one where she lives now" },
            { letter: "D", text: "the beauty of the adult insects and the ugliness of their shells" }
          ],
          correct: "A"
        },
        {
          id: "satwith",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 24, the phrase sat with that thought most nearly means that Lucía —",
          choices: [
            { letter: "A", text: "tried to push the idea out of her mind quickly" },
            { letter: "B", text: "argued with herself about whether it was true" },
            { letter: "C", text: "wrote the idea down so she would not forget it" },
            { letter: "D", text: "let herself consider the idea slowly and fully" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which statement best explains how sentences 25 and 26 resolve the story of the cicada summer?",
          choices: [
            { letter: "A", text: "Lucía decides she has come to enjoy the sound of the insects." },
            { letter: "B", text: "Lucía chooses to hear her grandmother's memories while she can." },
            { letter: "C", text: "Lucía realizes that the cicadas will never return to the yard." },
            { letter: "D", text: "Lucía agrees to help her grandmother finish her sewing project." }
          ],
          correct: "B"
        },
        {
          id: "nymphs",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word nymphs most nearly refers to —",
          choices: [
            { letter: "A", text: "adult cicadas whose wings have hardened" },
            { letter: "B", text: "birds that feed on insects in the yard" },
            { letter: "C", text: "young insects at an early stage of growth" },
            { letter: "D", text: "empty shells left behind on the porch" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 2 · Informational (level 2) · migrating birds ───────────── */
    {
      id: "g11-ri-c105-compass",
      family: "G11",
      title: "Maps Without Paper",
      kind: "Informational · 11.RI",
      blurb: "Sun, stars, magnetism, and smell: the overlapping tools a songbird carries across a continent.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every autumn, a songbird that weighs less than two quarters can leave a forest in Canada and arrive, weeks later, in a valley in South America it has never seen. " +
        N(2) + "How it finds the way is one of the oldest puzzles in biology, and scientists now believe the answer is not one sense but several working together.</p>" +
        "<p>" + N(3) + "The first tool is the sun. " +
        N(4) + "Birds that migrate by day appear to use the sun's position as a compass, and because the sun moves across the sky, they must also correct for the time of day using an internal clock. " +
        N(5) + "In experiments, researchers who shifted birds' sleep schedules by several hours found that the birds then chose the wrong direction by a predictable angle, as if their compass had been turned.</p>" +
        "<p>" + N(6) + "Night migrants, which include most small songbirds, rely partly on the stars. " +
        N(7) + "Young birds raised under a planetarium sky learn to locate the point around which the stars rotate, and they use that fixed point to find north. " +
        N(8) + "When the planetarium's sky was made to rotate around a different star, the birds adjusted their sense of north to match it.</p>" +
        "<p>" + N(9) + "The most mysterious tool is the earth's magnetic field. " +
        N(10) + "Many birds can sense both the direction of the field and its angle, which changes from the equator to the poles. " +
        N(11) + "This angle gives a bird a rough sense of latitude, a little like a hiker who cannot see a map but can feel the ground growing steeper. " +
        N(12) + "Scientists are still debating how birds detect the field; some evidence points to special proteins in the eye, and some to tiny iron-rich structures near the beak.</p>" +
        "<p>" + N(13) + "Close to the end of the journey, familiar landmarks and even smells take over. " +
        N(14) + "Coastlines, river valleys, and mountain ridges act as guide rails, and older birds that have made the trip before often follow them more directly than first-year birds do. " +
        N(15) + "Some seabirds appear to find their nesting islands partly by scent, homing in on odors carried across miles of open water.</p>" +
        "<p>" + N(16) + "Why would a bird need so many systems? " +
        N(17) + "Each one fails sometimes. " +
        N(18) + "Clouds hide the sun and stars, magnetic storms can scramble the field, and a coastline means nothing in the middle of an ocean. " +
        N(19) + "A bird that can switch from one cue to another, or check one against another, is far more likely to survive a trip of thousands of miles.</p>" +
        "<p>" + N(20) + "Understanding these systems has practical uses. " +
        N(21) + "Bright city lights at night can pull migrating birds off course, and strong electrical noise may interfere with their magnetic sense. " +
        N(22) + "Knowing how birds navigate helps planners decide when to dim building lights and where to place new towers. " +
        N(23) + "The puzzle is not fully solved, but each new piece makes it clearer that a small bird crossing a continent is not simply lucky. " +
        N(24) + "It is carrying a remarkably complete set of instruments, built into a body that fits in a human hand.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about how songbirds find their way?",
          choices: [
            { letter: "A", text: "Migrating birds rely on several navigation tools that back one another up." },
            { letter: "B", text: "Scientists have finally explained exactly how birds sense magnetism." },
            { letter: "C", text: "Birds that fly at night are better navigators than birds that fly by day." },
            { letter: "D", text: "City lights are the single greatest danger facing birds that migrate." }
          ],
          correct: "A"
        },
        {
          id: "sleep",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to sentence 5, what happened when researchers shifted the birds' sleep schedules?",
          choices: [
            { letter: "A", text: "The birds refused to migrate until their schedules returned to normal." },
            { letter: "B", text: "The birds headed the wrong way by an amount that could be predicted." },
            { letter: "C", text: "The birds stopped using the sun and began using the stars instead." },
            { letter: "D", text: "The birds lost their ability to sense the earth's magnetic field." }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "In sentences 23 and 24, the author's attitude toward the songbird's navigation abilities is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "admiring" },
            { letter: "D", text: "worried" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 3 through 15 of the navigation passage?",
          choices: [
            { letter: "A", text: "by tracing one bird's journey from its start to its finish" },
            { letter: "B", text: "by comparing the routes of songbirds with those of seabirds" },
            { letter: "C", text: "by listing errors in older theories and then correcting them" },
            { letter: "D", text: "by describing one navigation cue after another in turn" }
          ],
          correct: "D"
        },
        {
          id: "hiker",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 11, comparing the bird to a hiker who can feel the ground growing steeper mainly helps the reader understand that —",
          choices: [
            { letter: "A", text: "a changing angle can tell a bird roughly where it is" },
            { letter: "B", text: "birds prefer to travel along mountain ridges and steep slopes" },
            { letter: "C", text: "magnetic storms make migration physically harder for birds" },
            { letter: "D", text: "young birds learn their routes by walking beside older birds" }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the question and answer in sentences 16 and 17 mainly to —",
          choices: [
            { letter: "A", text: "admit that scientists still do not know why birds migrate" },
            { letter: "B", text: "introduce an explanation for why birds use multiple cues" },
            { letter: "C", text: "suggest that every navigation system is equally unreliable" },
            { letter: "D", text: "shift the topic from birds to the planning of cities" }
          ],
          correct: "B"
        },
        {
          id: "prefix",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word predictable in sentence 5 begins with the prefix pre-, as do preview and prehistoric. In these words, pre- means —",
          choices: [
            { letter: "A", text: "again" },
            { letter: "B", text: "against" },
            { letter: "C", text: "before" },
            { letter: "D", text: "not" }
          ],
          correct: "C"
        },
        {
          id: "rails",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 14, calling coastlines and ridges guide rails suggests that these landmarks —",
          choices: [
            { letter: "A", text: "slow birds down as they near the end of the trip" },
            { letter: "B", text: "were built by people to help birds find their way" },
            { letter: "C", text: "protect birds from predators along the route" },
            { letter: "D", text: "keep birds on a steady path toward their goal" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 3 · Poetry (level 3) · rocks and caves ───────────── */
    {
      id: "g11-rl-c105-dripstone",
      family: "G11",
      title: "Dripstone",
      kind: "Poetry · 11.RL",
      blurb: "In a cave gone completely dark, a speaker hears one drop and rethinks a hurried life.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The guide switched off her lamp and let us stand<br>" +
        L(2) + "inside a dark so whole it had no edges,<br>" +
        L(3) + "a dark that pressed against my open eyes<br>" +
        L(4) + "the way deep water presses on a diver.<br>" +
        L(5) + "Somewhere ahead, a single drop let go.<br>" +
        L(6) + "I heard it strike, and then the silence healed.<br>" +
        L(7) + "She said that drop had taken half a year<br>" +
        L(8) + "to gather in the stone above our heads.</p>" +
        "<p class=\"poem\">" +
        L(9) + "I thought of everything I do in a hurry:<br>" +
        L(10) + "the bus, the bell, the message sent half-written,<br>" +
        L(11) + "the meals I eat while standing at the counter,<br>" +
        L(12) + "the nights I measure only by their ending.<br>" +
        L(13) + "And here, a column taller than my father<br>" +
        L(14) + "had risen from the floor to meet the ceiling<br>" +
        L(15) + "one mineral whisper at a time, unwatched,<br>" +
        L(16) + "for longer than my language has had words.</p>" +
        "<p class=\"poem\">" +
        L(17) + "When she turned on the lamp, the room came back,<br>" +
        L(18) + "all teeth and curtains, folded, wet, and shining,<br>" +
        L(19) + "and people laughed the way that people laugh<br>" +
        L(20) + "when they have been afraid and are not now.<br>" +
        L(21) + "But I kept listening, underneath the voices,<br>" +
        L(22) + "for that one patient drop, still keeping time<br>" +
        L(23) + "in a clock with no hands and no hurry,<br>" +
        L(24) + "building a thing that none of us will see.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem \"Dripstone\"?",
          choices: [
            { letter: "A", text: "Fear of the dark fades once people learn the facts about caves." },
            { letter: "B", text: "Slow, unseen processes can make a hurried life look different." },
            { letter: "C", text: "Guides understand nature better than the visitors they lead." },
            { letter: "D", text: "Natural wonders are best enjoyed in large, cheerful groups." }
          ],
          correct: "B"
        },
        {
          id: "list",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "In \"Dripstone,\" the list in lines 10–12 mainly serves to —",
          choices: [
            { letter: "A", text: "name rushed habits that contrast with the cave's slow growth" },
            { letter: "B", text: "describe the speaker's morning routine in its exact order" },
            { letter: "C", text: "explain why the speaker arrived late for the cave tour" },
            { letter: "D", text: "show that the speaker misses the comforts of home" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 21–22 suggest that, after the guide's lamp comes back on, the speaker —",
          choices: [
            { letter: "A", text: "is still shaken and wants to leave the cave quickly" },
            { letter: "B", text: "is annoyed that the other visitors are laughing loudly" },
            { letter: "C", text: "stays focused on the slow process the darkness revealed" },
            { letter: "D", text: "has forgotten what the guide said about the drop" }
          ],
          correct: "C"
        },
        {
          id: "diver",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 3–4, comparing the cave's dark to deep water pressing on a diver mainly conveys that the darkness feels —",
          choices: [
            { letter: "A", text: "cold and wet against the speaker's skin" },
            { letter: "B", text: "dangerous because the cave might flood" },
            { letter: "C", text: "calming, like floating in a quiet pool" },
            { letter: "D", text: "heavy and complete, almost physical" }
          ],
          correct: "D"
        },
        {
          id: "healed",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 6 of \"Dripstone,\" the phrase the silence healed suggests that —",
          choices: [
            { letter: "A", text: "the quiet closed back over the sound like a mended cut" },
            { letter: "B", text: "the speaker felt better after hearing the drop strike" },
            { letter: "C", text: "the cave's damp air has a soothing effect on visitors" },
            { letter: "D", text: "the guide's voice ended an uncomfortable moment" }
          ],
          correct: "A"
        },
        {
          id: "unwatched",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In line 15, the word unwatched emphasizes that the column grew —",
          choices: [
            { letter: "A", text: "in a part of the cave that is closed to visitors" },
            { letter: "B", text: "without any witness to notice its slow progress" },
            { letter: "C", text: "even though people tried to break pieces from it" },
            { letter: "D", text: "faster than the guide had expected it to grow" }
          ],
          correct: "B"
        },
        {
          id: "stanzas",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the shift from the first stanza to the third stanza help develop the poem's meaning?",
          choices: [
            { letter: "A", text: "The move from dark to light shows the speaker forgetting the drop." },
            { letter: "B", text: "The move from silence to laughter shows that fear is the real subject." },
            { letter: "C", text: "The light brings relief to others while the speaker keeps listening." },
            { letter: "D", text: "The lamp reveals that the guide had tricked the visitors in the dark." }
          ],
          correct: "C"
        },
        {
          id: "patient",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The meaning of patient in line 22 is clarified by the guide's statement in lines 7–8 that the drop —",
          choices: [
            { letter: "A", text: "falls only when the visitors are silent" },
            { letter: "B", text: "is the first to fall in many years" },
            { letter: "C", text: "keeps the cave from drying out" },
            { letter: "D", text: "takes months to form before it falls" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 4 · Literary (level 3) · a fictional ancient city ───────────── */
    {
      id: "g11-rl-c105-floodstair",
      family: "G11",
      title: "The Flood Stair",
      kind: "Literary · 11.RL",
      blurb: "In the river city of Amarund, an apprentice sees his master cut the flood line in the wrong place.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the city of Amarund, where the river ran brown and wide between two deserts, the height of every spring flood was cut into stone. " +
        N(2) + "The Flood Stair descended from the temple courtyard to the water's edge, ninety steps of pale limestone, and on its eastern wall the marks of three hundred years climbed and fell like the scratches of some patient animal. " +
        N(3) + "Farmers came to read them before they planted. " +
        N(4) + "Merchants came to read them before they bought grain. " +
        N(5) + "Everyone in Amarund trusted the Stair, because everyone trusted the Keeper who cut it.</p>" +
        "<p>" + N(6) + "Daru had been the Keeper's apprentice for four years, long enough to carry the chisels without being told. " +
        N(7) + "This spring he noticed something he wished he had not. " +
        N(8) + "Old Ossiel, who had cut the flood line for forty seasons, now stood very close to the wall when he worked, and he ran his fingers over the old marks before he chose where to place the new one. " +
        N(9) + "He was not reading the water anymore. " +
        N(10) + "He was reading his memory of it.</p>" +
        "<p>" + N(11) + "On the morning of the high flood, Ossiel cut his line at the forty-second step. " +
        N(12) + "Daru, standing below with the measuring rod still wet in his hands, knew the water had reached the forty-fourth. " +
        N(13) + "Two steps did not sound like much. " +
        N(14) + "But the farmers of the lower fields would read those two steps and decide that their land was safe to plant early, and in a wet year two steps could mean a drowned harvest.</p>" +
        "<p>" + N(15) + "That night Daru lay awake listening to the river. " +
        N(16) + "If he told the council, they would thank him, and they would give the chisel to someone younger, and Ossiel would spend his last years as the Keeper who had been wrong. " +
        N(17) + "If he said nothing, the Stair would lie, and the Stair had never lied. " +
        N(18) + "The choice sat on his chest like one of the limestone blocks.</p>" +
        "<p>" + N(19) + "Before sunrise he went down to the wall alone. " +
        N(20) + "Beside Ossiel's mark he cut a second line, thin and exact, at the forty-fourth step, and he did not smooth its edges, so anyone could see it was new. " +
        N(21) + "Then he climbed to the Keeper's house and waited at the door until the old man came out.</p>" +
        "<p>" + N(22) + "Ossiel listened without interrupting. " +
        N(23) + "When Daru finished, the Keeper was quiet so long that the boy began to fear he had broken something that could not be mended. " +
        N(24) + "\"Show me,\" Ossiel said at last.</p>" +
        "<p>" + N(25) + "At the wall, the old man pressed his palm flat against both lines, the old and the new. " +
        N(26) + "\"My hands still know the stone,\" he said. " +
        N(27) + "\"My eyes have stopped knowing the river.\" " +
        N(28) + "He turned, and Daru saw that his face held no anger, only a tired kind of relief, like a man setting down a load he had carried too far.</p>" +
        "<p>" + N(29) + "That afternoon it was Ossiel, not Daru, who stood before the council. " +
        N(30) + "He asked them to leave both marks on the wall, so the city would remember that the Stair could be corrected. " +
        N(31) + "And he asked them to name his apprentice his eyes.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed through Daru's choice at the Flood Stair?",
          choices: [
            { letter: "A", text: "Young people should replace their elders once they make mistakes." },
            { letter: "B", text: "Ancient records are far less reliable than most people believe." },
            { letter: "C", text: "Honesty can be offered in a way that respects another's dignity." },
            { letter: "D", text: "Keeping a secret is sometimes the kindest choice a person can make." }
          ],
          correct: "C"
        },
        {
          id: "farmers",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The author includes sentences 3 through 5, about the farmers and merchants of Amarund, mainly to —",
          choices: [
            { letter: "A", text: "show why an error on the Stair would matter to the whole city" },
            { letter: "B", text: "describe the busy trade of Amarund during the spring season" },
            { letter: "C", text: "suggest that the merchants distrust the farmers' readings" },
            { letter: "D", text: "explain how Daru first learned to read the flood marks" }
          ],
          correct: "A"
        },
        {
          id: "torn",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentences 16 and 17 reveal that Daru —",
          choices: [
            { letter: "A", text: "is mostly afraid that he will be blamed for the error" },
            { letter: "B", text: "feels torn between loyalty to Ossiel and to the truth" },
            { letter: "C", text: "believes the council will ignore an apprentice's report" },
            { letter: "D", text: "has already decided to keep the error a secret" }
          ],
          correct: "B"
        },
        {
          id: "block",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 18, comparing Daru's choice to a limestone block on his chest mainly emphasizes —",
          choices: [
            { letter: "A", text: "how tired he is from carrying chisels all day" },
            { letter: "B", text: "his wish to become a stonecutter like Ossiel" },
            { letter: "C", text: "the cold and damp of his room near the river" },
            { letter: "D", text: "the heavy pressure the decision places on him" }
          ],
          correct: "D"
        },
        {
          id: "animal",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, describing the flood marks as the scratches of some patient animal gives the Stair a sense of being —",
          choices: [
            { letter: "A", text: "wild and threatening to the people of the city" },
            { letter: "B", text: "a living record built slowly over a long time" },
            { letter: "C", text: "carelessly made, since the marks are crooked" },
            { letter: "D", text: "newer than the temple that stands above it" }
          ],
          correct: "B"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which statement best explains how sentences 29 through 31 resolve the conflict at the Flood Stair?",
          choices: [
            { letter: "A", text: "Ossiel takes responsibility and turns the correction into a lesson." },
            { letter: "B", text: "The council punishes Ossiel and names Daru Keeper in his place." },
            { letter: "C", text: "Daru's new mark is removed so that the Stair appears unbroken." },
            { letter: "D", text: "Ossiel retires quietly without telling anyone about his eyes." }
          ],
          correct: "A"
        },
        {
          id: "exact",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the contrast between Daru's line and Ossiel's mistaken mark helps show that exact means —",
          choices: [
            { letter: "A", text: "deeply carved" },
            { letter: "B", text: "freshly cut" },
            { letter: "C", text: "precise" },
            { letter: "D", text: "carefully hidden" }
          ],
          correct: "C"
        },
        {
          id: "descended",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word descended most nearly means —",
          choices: [
            { letter: "A", text: "grew narrower" },
            { letter: "B", text: "wound around" },
            { letter: "C", text: "rose upward" },
            { letter: "D", text: "went downward" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 5 · Vocabulary (level 1) · insects ───────────── */
    {
      id: "g11-rv-c105-anthill",
      family: "G11",
      title: "The City Under the Mound",
      kind: "Vocabulary · 11.RV",
      blurb: "An ant colony has no boss, yet it forages, builds, and rebuilds with remarkable order.",
      level: 1,
      passage:
        "<p>" + N(1) + "Most people step over an ant hill without a second thought. " +
        N(2) + "Yet under that small mound of sand, thousands of insects are running one of the most organized communities in nature.</p>" +
        "<p>" + N(3) + "An ant colony usually begins with a single queen. " +
        N(4) + "After a short mating flight, she sheds her wings, digs a small chamber, and lays her first eggs. " +
        N(5) + "Those eggs become workers, and the workers take over almost every job: building tunnels, caring for the young, guarding entrances, and leaving the nest to <strong>forage</strong> for food. " +
        N(6) + "A foraging ant may travel thousands of times its own body length in search of seeds, dead insects, or sweet liquids, and then carry its find all the way home.</p>" +
        "<p>" + N(7) + "How do so many ants work together without a leader giving orders? " +
        N(8) + "The queen does not direct the colony; she mostly lays eggs. " +
        N(9) + "Instead, ants communicate with chemicals. " +
        N(10) + "An ant that finds food leaves a scent trail on the way back to the nest, and other ants follow it. " +
        N(11) + "If the food is good, they add their own scent, and the trail grows stronger. " +
        N(12) + "If the food runs out, the ants stop marking the trail, and the scent fades. " +
        N(13) + "This <strong>cooperative</strong> system sends more workers where they are needed without anyone planning it.</p>" +
        "<p>" + N(14) + "Below ground, the nest is more <strong>intricate</strong> than the small mound suggests. " +
        N(15) + "Some colonies dig dozens of chambers connected by winding tunnels, with separate rooms for eggs, young ants, and stored food. " +
        N(16) + "Workers move the young from room to room as the soil warms and cools during the day, keeping them at the best temperature.</p>" +
        "<p>" + N(17) + "Ant colonies are also remarkably <strong>resilient</strong>. " +
        N(18) + "When rain floods a nest or a shoe crushes the mound, workers rush to carry the young to safety and begin digging again. " +
        N(19) + "Within days, they can <strong>reconstruct</strong> tunnels that took weeks to build. " +
        N(20) + "In cold climates, colonies survive the winter by moving deep underground, where the ants stay <strong>dormant</strong>, barely moving or eating until spring warms the soil.</p>" +
        "<p>" + N(21) + "Scientists study ants for reasons that go beyond curiosity. " +
        N(22) + "The way ants find the shortest path to food has inspired computer programs that plan delivery routes. " +
        N(23) + "Their tunnels have given engineers ideas about moving fresh air through buildings. " +
        N(24) + "Even the way a colony recovers from damage offers lessons for people who design emergency plans.</p>" +
        "<p>" + N(25) + "The next time you see a line of ants crossing a sidewalk, slow down and watch. " +
        N(26) + "Each one is following a message you cannot smell, toward a home you cannot see, as part of a team that has no boss and still gets the work done.</p>",
      claims: [
        {
          id: "forage",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word forage most nearly means to —",
          choices: [
            { letter: "A", text: "fight off enemies" },
            { letter: "B", text: "search for food" },
            { letter: "C", text: "dig new tunnels" },
            { letter: "D", text: "rest after work" }
          ],
          correct: "B"
        },
        {
          id: "co",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word cooperative in sentence 13 begins with the prefix co-, as do coworker and coauthor. In these words, co- means —",
          choices: [
            { letter: "A", text: "together or with" },
            { letter: "B", text: "against or opposite" },
            { letter: "C", text: "before or ahead" },
            { letter: "D", text: "again or back" }
          ],
          correct: "A"
        },
        {
          id: "intricate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from sentences 14–16 best clarifies the meaning of intricate?",
          choices: [
            { letter: "A", text: "\"Below ground, the nest is more\"" },
            { letter: "B", text: "\"than the small mound suggests\"" },
            { letter: "C", text: "\"chambers connected by winding tunnels\"" },
            { letter: "D", text: "\"as the soil warms and cools during the day\"" }
          ],
          correct: "C"
        },
        {
          id: "resilient",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentences 18 and 19 about flooded and crushed nests help show that resilient in sentence 17 means —",
          choices: [
            { letter: "A", text: "unwilling to leave a damaged home" },
            { letter: "B", text: "easily harmed by bad weather" },
            { letter: "C", text: "quick to attack any intruder" },
            { letter: "D", text: "able to recover from damage" }
          ],
          correct: "D"
        },
        {
          id: "re",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word reconstruct in sentence 19 begins with the prefix re-, as do rebuild and rewrite. The prefix re- signals that an action is —",
          choices: [
            { letter: "A", text: "done badly" },
            { letter: "B", text: "done for the first time" },
            { letter: "C", text: "done again" },
            { letter: "D", text: "done in reverse" }
          ],
          correct: "C"
        },
        {
          id: "dormant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word dormant most nearly means —",
          choices: [
            { letter: "A", text: "hungry" },
            { letter: "B", text: "buried" },
            { letter: "C", text: "frozen" },
            { letter: "D", text: "inactive" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the central idea of the article about the ant colony?",
          choices: [
            { letter: "A", text: "Ant queens control every action that happens in the colony." },
            { letter: "B", text: "Ant colonies are organized, cooperative, and able to recover." },
            { letter: "C", text: "Ants are harmful insects that damage sidewalks and lawns." },
            { letter: "D", text: "Computer programmers learned all they know from ants." }
          ],
          correct: "B"
        },
        {
          id: "uses",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentences 22 through 24 about delivery routes and building air mainly to —",
          choices: [
            { letter: "A", text: "show that studying ants has useful applications for people" },
            { letter: "B", text: "warn readers that ants can damage buildings and roads" },
            { letter: "C", text: "explain how ants find the shortest path back to the nest" },
            { letter: "D", text: "argue that ants are smarter than human engineers" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 6 · Paired texts (level 2) · migrating birds ───────────── */
    {
      id: "g11-dsr-c105-banding",
      family: "G11",
      title: "Small Things for Small Birds",
      kind: "Paired texts · 11.DSR",
      blurb: "A banding-station volunteer's notes and an article on Lights Out programs look at night migrants.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notes from the Banding Station</strong></p>" +
        "<p>" + N(1) + "The nets go up at dawn, long before the sun clears the marsh. " +
        N(2) + "They are made of mesh so fine it nearly disappears against the reeds, and every forty minutes we walk the line to see what the night's migrants have left us. " +
        N(3) + "This morning it was a yellow warbler, a pair of thrushes, and a tiny kinglet that weighed about as much as a nickel.</p>" +
        "<p>" + N(4) + "My job as a volunteer is mostly to hold birds gently and record what the bander tells me. " +
        N(5) + "She fastens a numbered aluminum band around one leg, measures the wing, checks the fat stored under the skin, and weighs the bird in a small cone. " +
        N(6) + "Then she opens her hand, and the bird is gone before I can finish writing.</p>" +
        "<p>" + N(7) + "It can seem like a strange way to spend a Saturday. " +
        N(8) + "But each band is a question sent out into the world. " +
        N(9) + "If someone, somewhere, catches that thrush again, in Georgia or in Colombia, the number will tell us where it went and how long it lived. " +
        N(10) + "Last year one of our warblers was recaptured eleven hundred miles south. " +
        N(11) + "The bander read the report aloud, and everyone in the shed cheered as if a friend had called.</p>" +
        "<p>" + N(12) + "I used to think of migration as something that happened far away, high in the sky. " +
        N(13) + "Now I think of it as a weight on a scale, a number in a notebook, a heartbeat against my fingers, ten grams at a time.</p>" +
        "<p><strong>Text 2 — Turning Off the Lights</strong></p>" +
        "<p>" + N(14) + "Most songbirds migrate at night, and for millions of years the night sky was dark. " +
        N(15) + "Today, brightly lit buildings and the glow above cities can confuse birds that navigate partly by the stars. " +
        N(16) + "Drawn toward the lights, many circle until they are exhausted or strike windows they cannot see. " +
        N(17) + "Researchers estimate that collisions with buildings kill hundreds of millions of birds in North America each year.</p>" +
        "<p>" + N(18) + "In response, a number of cities have started \"Lights Out\" programs. " +
        N(19) + "During the peak weeks of spring and fall migration, owners of tall buildings agree to dim or turn off unneeded lights late at night. " +
        N(20) + "Volunteers walk downtown sidewalks at dawn, counting injured and dead birds so that the programs can be judged by data rather than hope. " +
        N(21) + "In several cities, those counts have dropped noticeably on nights when more buildings took part.</p>" +
        "<p>" + N(22) + "The programs ask little of most people. " +
        N(23) + "Homeowners can draw curtains, switch off porch lights they do not need, and add patterned film to large windows so birds can see the glass. " +
        N(24) + "The changes save energy as well as birds. " +
        N(25) + "Migration may be one of the grandest journeys on earth, but whether a small bird finishes it can depend on something as ordinary as a light switch.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about migrating birds is central to both texts?",
          choices: [
            { letter: "A", text: "Banding is the most reliable way to prevent window collisions." },
            { letter: "B", text: "Ordinary people can help learn about or protect migrating birds." },
            { letter: "C", text: "Most songbirds migrate during the day along coastlines." },
            { letter: "D", text: "Cities should ban all outdoor lighting during migration." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the banding notes and the Lights Out article differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 argues for new city laws, while Text 2 tells a personal story." },
            { letter: "B", text: "Text 1 explains how birds use stars, while Text 2 describes banding." },
            { letter: "C", text: "Text 1 warns about city lights, while Text 2 praises scientists." },
            { letter: "D", text: "Text 1 shares an experience, while Text 2 explains a problem and a fix." }
          ],
          correct: "D"
        },
        {
          id: "data",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences, one from each text, that show volunteers collecting information about birds.",
          choices: [
            { letter: "A", text: "Sentence 4: \"My job as a volunteer is mostly to hold birds gently and record what the bander tells me.\"" },
            { letter: "B", text: "Sentence 12: \"I used to think of migration as something that happened far away, high in the sky.\"" },
            { letter: "C", text: "Sentence 20: \"Volunteers walk downtown sidewalks at dawn, counting injured and dead birds...\"" },
            { letter: "D", text: "Sentence 24: \"The changes save energy as well as birds.\"" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the Lights Out article, the tone of the banding notes is more —",
          choices: [
            { letter: "A", text: "urgent and alarmed" },
            { letter: "B", text: "formal and technical" },
            { letter: "C", text: "personal and wondering" },
            { letter: "D", text: "skeptical and critical" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 calls each band a question sent out into the world (sentence 8), and Text 2 says programs are judged by data rather than hope (sentence 20). Together these details suggest that both writers value —",
          choices: [
            { letter: "A", text: "gathering evidence to learn what really happens to birds" },
            { letter: "B", text: "keeping people away from birds during the migration season" },
            { letter: "C", text: "trusting experts instead of volunteers to study wildlife" },
            { letter: "D", text: "spending money on new technology to track every bird" }
          ],
          correct: "A"
        },
        {
          id: "planner",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A city planner who read both bird texts could best conclude that —",
          choices: [
            { letter: "A", text: "banding stations should be placed on top of tall buildings" },
            { letter: "B", text: "birds no longer need dark skies to migrate successfully" },
            { letter: "C", text: "window collisions happen only in the very largest cities" },
            { letter: "D", text: "low-cost changes and careful records can both help birds" }
          ],
          correct: "D"
        },
        {
          id: "lights",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentences 15 and 16 of Text 2, how do bright lights harm migrating birds?",
          choices: [
            { letter: "A", text: "They heat the air so that birds cannot fly as high." },
            { letter: "B", text: "They draw birds off course until they tire or hit glass." },
            { letter: "C", text: "They scare away the insects that birds need to eat." },
            { letter: "D", text: "They cause birds to begin migrating earlier each year." }
          ],
          correct: "B"
        },
        {
          id: "heartbeat",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 13, the writer of Text 1 describes migration as a heartbeat against my fingers mainly to show that —",
          choices: [
            { letter: "A", text: "the writer worries about hurting the birds she holds" },
            { letter: "B", text: "banding is harder work than most people imagine" },
            { letter: "C", text: "migration now feels close and real to the writer" },
            { letter: "D", text: "birds' hearts beat faster during long flights" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── 7 · Drama (level 1) · migrating birds ───────────── */
    {
      id: "g11-rl-c105-hawkwatch",
      family: "G11",
      title: "The Ridge Count",
      kind: "Drama · 11.RL",
      blurb: "On a mountain overlook, a bored teenager waits for the wind to change and the hawks to come.",
      level: 1,
      passage:
        "<p>" + N(1) + "<em>A rocky overlook on a mountain ridge in late September.</em> " +
        N(2) + "<em>MR. YAZZIE, a volunteer hawk counter, scans the sky with binoculars while ZAINAB, fifteen, holds a clipboard and her cousin RAFI, fourteen, scrolls on his phone.</em></p>" +
        "<p>" + N(3) + "<strong>RAFI:</strong> We've been up here two hours, and I've seen exactly one bird, and I think it was a crow.</p>" +
        "<p>" + N(4) + "<strong>MR. YAZZIE:</strong> <em>(without lowering the binoculars)</em> It was a raven. Ravens don't count.</p>" +
        "<p>" + N(5) + "<strong>ZAINAB:</strong> The board says forty-one hawks so far today. Rafi, you've been looking at your screen.</p>" +
        "<p>" + N(6) + "<strong>RAFI:</strong> The screen has better birds.</p>" +
        "<p>" + N(7) + "<strong>MR. YAZZIE:</strong> Patience. The wind has been from the south all morning. Hawks don't like to fight a headwind any more than you would. When it swings to the northwest, this ridge becomes a highway.</p>" +
        "<p>" + N(8) + "<strong>ZAINAB:</strong> Why the northwest?</p>" +
        "<p>" + N(9) + "<strong>MR. YAZZIE:</strong> The wind hits the side of the mountain and gets pushed upward. The birds ride that rising air without flapping, mile after mile. It's like a free escalator running all the way to Mexico.</p>" +
        "<p>" + N(10) + "<strong>RAFI:</strong> So we're just waiting for the weather to change.</p>" +
        "<p>" + N(11) + "<strong>MR. YAZZIE:</strong> We're always waiting for something. That's most of counting.</p>" +
        "<p>" + N(12) + "<em>(A gust of cooler air crosses the overlook. Mr. Yazzie wets a finger, holds it up, and smiles.)</em></p>" +
        "<p>" + N(13) + "<strong>MR. YAZZIE:</strong> There it is. Zainab, get ready.</p>" +
        "<p>" + N(14) + "<strong>ZAINAB:</strong> <em>(standing, pointing)</em> One over the north knob. Two. No, wait. Five. Mr. Yazzie, there are so many.</p>" +
        "<p>" + N(15) + "<strong>MR. YAZZIE:</strong> Broad-wings. They gather in big spirals we call kettles. Count by fives if you have to, then by tens. Don't try to be perfect. Try to be honest.</p>" +
        "<p>" + N(16) + "<em>(Rafi slowly lowers his phone. Above them, a turning column of hawks rises like steam from a pot.)</em></p>" +
        "<p>" + N(17) + "<strong>RAFI:</strong> <em>(quietly)</em> They're not even flapping.</p>" +
        "<p>" + N(18) + "<strong>MR. YAZZIE:</strong> Told you. Free escalator.</p>" +
        "<p>" + N(19) + "<strong>ZAINAB:</strong> <em>(writing fast)</em> I have two hundred and ten in this kettle alone. Another one is forming behind it.</p>" +
        "<p>" + N(20) + "<strong>MR. YAZZIE:</strong> Some years we count thousands in a single afternoon. Every number goes into a record older than I am. If the counts drop, people want to know why. If they rise, people want to know that too.</p>" +
        "<p>" + N(21) + "<strong>RAFI:</strong> So the two hours of nothing...</p>" +
        "<p>" + N(22) + "<strong>MR. YAZZIE:</strong> Were part of the count. Zero is a number. You write it down the same as a thousand.</p>" +
        "<p>" + N(23) + "<em>(Rafi puts his phone in his pocket and holds out his hand. Zainab hesitates, then gives him the binoculars.)</em></p>" +
        "<p>" + N(24) + "<strong>RAFI:</strong> Where do I look?</p>" +
        "<p>" + N(25) + "<strong>MR. YAZZIE:</strong> <em>(pointing to the far ridge)</em> Start where the sky meets the trees, and let your eyes go soft. Don't hunt for them. Let them show up.</p>" +
        "<p>" + N(26) + "<em>(Rafi lifts the binoculars. The wind rises as the lights fade.)</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the scene at the hawk-watch overlook?",
          choices: [
            { letter: "A", text: "Older people rarely understand the habits of teenagers." },
            { letter: "B", text: "Technology always keeps people from enjoying nature." },
            { letter: "C", text: "Patient attention is rewarded, even after long waits." },
            { letter: "D", text: "Counting wildlife well requires expensive equipment." }
          ],
          correct: "C"
        },
        {
          id: "direction",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction in line 23, in which Rafi pockets his phone and holds out his hand, mainly serves to —",
          choices: [
            { letter: "A", text: "show that Rafi has become genuinely interested in the count" },
            { letter: "B", text: "suggest that Rafi wants to prove Zainab is counting wrong" },
            { letter: "C", text: "reveal that the battery on Rafi's phone has finally died" },
            { letter: "D", text: "explain why Mr. Yazzie decides to stop counting for the day" }
          ],
          correct: "A"
        },
        {
          id: "honest",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Mr. Yazzie's advice in line 15, Don't try to be perfect. Try to be honest, reveals that he —",
          choices: [
            { letter: "A", text: "doubts that Zainab can count large numbers" },
            { letter: "B", text: "believes the hawk count does not really matter" },
            { letter: "C", text: "wants to finish the count before the sun sets" },
            { letter: "D", text: "values truthful records more than flawless ones" }
          ],
          correct: "D"
        },
        {
          id: "escalator",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In line 9, Mr. Yazzie compares the rising air to a free escalator mainly to suggest that —",
          choices: [
            { letter: "A", text: "the ridge is crowded with hikers and visitors" },
            { letter: "B", text: "the hawks can travel far without much effort" },
            { letter: "C", text: "the birds are being carried against their will" },
            { letter: "D", text: "the hawks fly for only part of each day" }
          ],
          correct: "B"
        },
        {
          id: "steam",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In line 16, the comparison of the hawks to steam rising from a pot creates an image that is —",
          choices: [
            { letter: "A", text: "swirling and steadily moving upward" },
            { letter: "B", text: "dark and threatening to the watchers" },
            { letter: "C", text: "still and frozen in a single place" },
            { letter: "D", text: "small and difficult to notice" }
          ],
          correct: "A"
        },
        {
          id: "soft",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In line 25, the phrase let your eyes go soft most nearly means to —",
          choices: [
            { letter: "A", text: "close your eyes to rest them" },
            { letter: "B", text: "focus tightly on a single bird" },
            { letter: "C", text: "look in a relaxed, wide way" },
            { letter: "D", text: "wipe the binocular lenses" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "How does Rafi's attitude change over the course of the ridge scene?",
          choices: [
            { letter: "A", text: "from excited and talkative to quiet and let down" },
            { letter: "B", text: "from confident and expert to confused and unsure" },
            { letter: "C", text: "from friendly toward Zainab to jealous of her" },
            { letter: "D", text: "from bored and distracted to curious and engaged" }
          ],
          correct: "D"
        },
        {
          id: "kettles",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In line 15, the word kettles most nearly refers to —",
          choices: [
            { letter: "A", text: "metal pots used for cooking at a camp" },
            { letter: "B", text: "large groups of hawks circling together" },
            { letter: "C", text: "warm pockets of wind along the ridge" },
            { letter: "D", text: "the tally marks on the counting board" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 8 · Functional text (level 1) · rocks and caves ───────────── */
    {
      id: "g11-ri-c105-caverns",
      family: "G11",
      title: "Hollow Spring Caverns Visitor Guide",
      kind: "Functional text · 11.RI",
      blurb: "Tours, rules, and the reasons behind them at a living limestone cave.",
      level: 1,
      passage:
        "<p><strong>Welcome to Hollow Spring Caverns</strong> " + N(1) + "Hollow Spring Caverns is a living limestone cave, which means its formations are still growing, drop by drop, just as they have for thousands of years. " +
        N(2) + "This guide explains our tours, our rules, and the reasons behind them so that your visit is safe and the cave stays healthy for the visitors who come after you.</p>" +
        "<p><strong>Tour Options</strong> " + N(3) + "The Main Room Tour lasts about forty-five minutes and follows a paved, lighted path with handrails. " +
        N(4) + "It includes the Cathedral Room, where the ceiling rises sixty feet above the floor. " +
        N(5) + "The Wild Passage Tour lasts two hours and requires crawling through narrow sections; participants must be at least twelve years old and must wear the helmet and headlamp we provide. " +
        N(6) + "Main Room Tours leave every half hour from 9:00 a.m. to 4:00 p.m., and the Wild Passage Tour runs only at 10:00 a.m. and 1:00 p.m.</p>" +
        "<p><strong>What to Bring</strong> " + N(7) + "The cave stays at about fifty-four degrees all year, so bring a light jacket even in summer. " +
        N(8) + "Wear closed-toe shoes with good grip, because the path can be damp. " +
        N(9) + "Leave food, chewing gum, and drinks other than water in your vehicle.</p>" +
        "<p><strong>Please Do Not Touch</strong> " + N(10) + "It may be tempting to run a hand along a smooth column, but the natural oils on human skin coat the stone and keep new mineral from attaching. " +
        N(11) + "A single touch can halt growth on that spot for many years, and a formation that took ten thousand years to grow can be stained in a second. " +
        N(12) + "Our guides will point out the dark \"touch marks\" left by visitors in the early 1900s, which are still visible today.</p>" +
        "<p><strong>Protecting Our Bats</strong> " + N(13) + "Several hundred bats spend the winter in a side passage closed to the public. " +
        N(14) + "A fungal disease called white-nose syndrome has killed millions of bats in North America, and its spores can travel on shoes and clothing. " +
        N(15) + "If you have visited any other cave or mine in the past year, please tell staff before your tour. " +
        N(16) + "Those visitors will be asked to decontaminate their shoes in a shallow tray of cleaning solution, which takes less than a minute and is harmless to people.</p>" +
        "<p><strong>Accessibility</strong> " + N(17) + "The Main Room Tour is wheelchair accessible as far as the Cathedral Room overlook. " +
        N(18) + "Service animals are welcome on the Main Room Tour but not on the Wild Passage Tour, where the crawl spaces are unsafe for them.</p>" +
        "<p><strong>Tickets</strong> " + N(19) + "Tickets can be bought at the visitor center or online, and online buyers save two dollars per ticket. " +
        N(20) + "Groups of fifteen or more should reserve at least one week in advance. " +
        N(21) + "Tours sometimes close during heavy rain, when the lower passages can flood without warning, so check our website on the morning of your visit.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main purpose of the Hollow Spring Caverns visitor guide?",
          choices: [
            { letter: "A", text: "to persuade readers to study caves as a future career" },
            { letter: "B", text: "to give visitors practical details and explain the rules" },
            { letter: "C", text: "to tell the history of how the cave was first discovered" },
            { letter: "D", text: "to compare Hollow Spring with other caves in the region" }
          ],
          correct: "B"
        },
        {
          id: "wild",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, a thirteen-year-old who wants to take the Wild Passage Tour at 3:00 p.m. —",
          choices: [
            { letter: "A", text: "may go if a parent comes along on the tour" },
            { letter: "B", text: "must bring a helmet and headlamp from home" },
            { letter: "C", text: "cannot, because that tour is not offered then" },
            { letter: "D", text: "must first walk through the cleaning tray" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Hollow Spring Caverns guide help the reader mainly by —",
          choices: [
            { letter: "A", text: "dividing the information into topics easy to find" },
            { letter: "B", text: "showing the order in which the tour visits each room" },
            { letter: "C", text: "marking the rules that visitors break most often" },
            { letter: "D", text: "separating facts from the opinions of the cave staff" }
          ],
          correct: "A"
        },
        {
          id: "marks",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The guide includes the detail about touch marks from the early 1900s in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "prove that the cave has been open longer than others" },
            { letter: "B", text: "suggest that early visitors were not allowed on tours" },
            { letter: "C", text: "explain why the guides carry flashlights on every tour" },
            { letter: "D", text: "show that damage from touching lasts a very long time" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the Hollow Spring Caverns guide is mainly —",
          choices: [
            { letter: "A", text: "people planning a visit to the cave" },
            { letter: "B", text: "scientists who study bats and fungi" },
            { letter: "C", text: "new guides being trained by the staff" },
            { letter: "D", text: "owners of other caves in the state" }
          ],
          correct: "A"
        },
        {
          id: "decon",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "In sentence 16, decontaminate begins with the prefix de-, as do dehydrate and declutter. Based on this prefix, to decontaminate shoes is to —",
          choices: [
            { letter: "A", text: "spread germs more widely" },
            { letter: "B", text: "remove harmful material" },
            { letter: "C", text: "test them for disease" },
            { letter: "D", text: "cover them for protection" }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 11, which says a formation that took ten thousand years to grow can be stained in a second, mainly serves to —",
          choices: [
            { letter: "A", text: "explain how scientists measure the age of formations" },
            { letter: "B", text: "warn visitors that the cave ceiling may collapse" },
            { letter: "C", text: "contrast slow natural growth with quick human damage" },
            { letter: "D", text: "describe the many colors of the cave formations" }
          ],
          correct: "C"
        },
        {
          id: "halt",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentence 10, about skin oils that keep new mineral from attaching, helps show that the word halt in sentence 11 means —",
          choices: [
            { letter: "A", text: "speed up" },
            { letter: "B", text: "hide" },
            { letter: "C", text: "record" },
            { letter: "D", text: "stop" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 9 · Argument (level 3) · insects ───────────── */
    {
      id: "g11-ri-c105-meadow",
      family: "G11",
      title: "Let the Back Field Grow",
      kind: "Argument · 11.RI",
      blurb: "A student editorial asks the school board to stop mowing an unused lawn and plant it for pollinators.",
      level: 3,
      passage:
        "<p>" + N(1) + "Behind the science wing at Linden Ridge High School lies a rectangle of grass that no one uses. " +
        N(2) + "No team practices there, no class meets there, and the only regular visitor is the riding mower, which crosses it every week from April to October at a cost the district estimates at about nineteen hundred dollars a year. " +
        N(3) + "I propose that we stop mowing it and let it become something useful: a meadow of native wildflowers for bees, butterflies, and the many other insects that pollinate our food.</p>" +
        "<p>" + N(4) + "The case begins with a problem that is easy to overlook because it is small. " +
        N(5) + "Studies in several countries have found sharp declines in insect numbers over recent decades, and pollinators are among those losing ground. " +
        N(6) + "One major reason is lost habitat. " +
        N(7) + "A mowed lawn looks green and alive, but to a bee it is nearly a desert: one plant, no flowers, nothing to eat. " +
        N(8) + "Native wildflowers, by contrast, bloom in sequence from spring to fall and feed insects that have depended on them for thousands of years.</p>" +
        "<p>" + N(9) + "Some will object that a meadow looks messy. " +
        N(10) + "That is a fair concern, and it has a fair answer. " +
        N(11) + "A mowed border around the edges and a simple sign tell passersby that the space is planted on purpose, not abandoned. " +
        N(12) + "Schools in neighboring counties that have tried this report that complaints faded within a single season, once people understood what they were seeing.</p>" +
        "<p>" + N(13) + "Others worry about stings. " +
        N(14) + "But the bees that visit wildflowers are foragers, not guards; they are far from their nests and have little reason to sting anyone who leaves them alone. " +
        N(15) + "The meadow would sit behind the science wing, away from the playing fields and the main entrance, where few students walk.</p>" +
        "<p>" + N(16) + "The benefits reach beyond insects. " +
        N(17) + "Biology classes could count pollinators each spring and compare their data year after year, turning a patch of grass into a living laboratory. " +
        N(18) + "Art students could sketch there. " +
        N(19) + "The money saved on mowing could buy seeds for the first planting and still leave something over. " +
        N(20) + "And every student who walks past would be reminded, in a small and daily way, that the school chose to make room for other living things.</p>" +
        "<p>" + N(21) + "A meadow is not a cure for the decline of insects. " +
        N(22) + "No single field is. " +
        N(23) + "But large problems are made of many small places, and this is one of ours. " +
        N(24) + "For the cost of doing less, we could give back an acre of food and shelter to the creatures that help feed us. " +
        N(25) + "I urge the school board to stop the mower and let the back field grow.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the central claim of the editorial about the back field at Linden Ridge?",
          choices: [
            { letter: "A", text: "The district should spend more money mowing all school grounds." },
            { letter: "B", text: "Bees are dangerous and should be kept away from school fields." },
            { letter: "C", text: "Biology classes need a new building for studying insects." },
            { letter: "D", text: "The school should turn the unused lawn into a native meadow." }
          ],
          correct: "D"
        },
        {
          id: "messy",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which evidence does the author offer to answer the concern in sentence 9 that a meadow looks messy?",
          choices: [
            { letter: "A", text: "Native flowers bloom in sequence from spring to fall." },
            { letter: "B", text: "Nearby schools report that complaints faded in a season." },
            { letter: "C", text: "Foraging bees are far from their nests and rarely sting." },
            { letter: "D", text: "Mowing the field costs about nineteen hundred dollars." }
          ],
          correct: "B"
        },
        {
          id: "objectors",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentences 9 through 15, the author's attitude toward people who object to the meadow is best described as —",
          choices: [
            { letter: "A", text: "respectful but firm" },
            { letter: "B", text: "mocking and impatient" },
            { letter: "C", text: "uncertain and apologetic" },
            { letter: "D", text: "bored and dismissive" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from the pollinator editorial is an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "The district estimates the mowing cost at about nineteen hundred dollars a year." },
            { letter: "B", text: "The meadow would sit behind the science wing, away from the playing fields." },
            { letter: "C", text: "Large problems are made of many small places, and this is one of ours." },
            { letter: "D", text: "Native wildflowers bloom in sequence from spring to fall." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 9 through 15 of the editorial?",
          choices: [
            { letter: "A", text: "by listing the meadow's benefits in order of importance" },
            { letter: "B", text: "by presenting objections and answering each in turn" },
            { letter: "C", text: "by telling the history of the field behind the school" },
            { letter: "D", text: "by comparing two kinds of insects that visit flowers" }
          ],
          correct: "B"
        },
        {
          id: "desert",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 7, the author calls a mowed lawn nearly a desert to a bee mainly to —",
          choices: [
            { letter: "A", text: "stress that a lawn offers bees almost nothing to eat" },
            { letter: "B", text: "suggest that the field is too dry for any plants to grow" },
            { letter: "C", text: "show that bees prefer to live in hot, dry climates" },
            { letter: "D", text: "explain why the grass behind the school needs water" }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author includes the admission in sentences 21 and 22 that no single field is a cure mainly to —",
          choices: [
            { letter: "A", text: "suggest that the plan is probably not worth trying" },
            { letter: "B", text: "introduce a new and much larger proposal for the district" },
            { letter: "C", text: "blame other schools for the decline of insect numbers" },
            { letter: "D", text: "acknowledge limits while keeping the proposal reasonable" }
          ],
          correct: "D"
        },
        {
          id: "suffix",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word foragers in sentence 14 ends with the suffix -er, as do gardener and builder. In these words, the suffix -er signals —",
          choices: [
            { letter: "A", text: "an action that happened in the past" },
            { letter: "B", text: "a place where something is kept" },
            { letter: "C", text: "one who does a certain action" },
            { letter: "D", text: "more of a quality than before" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── 10 · Informational (level 3) · rocks and caves ───────────── */
    {
      id: "g11-ri-c105-karst",
      family: "G11",
      title: "Written in Stone",
      kind: "Informational · 11.RI",
      blurb: "Weak acid, patient water, and the slow chemistry that carves caves and fills them with records.",
      level: 3,
      passage:
        "<p>" + N(1) + "A limestone cave looks like the work of violence: great rooms torn open in solid rock, passages twisting into the dark as if something had bored through the mountain. " +
        N(2) + "In fact, most of the world's large caves were made by one of the gentlest forces in nature, rainwater moving slowly for a very long time.</p>" +
        "<p>" + N(3) + "The story begins at the surface. " +
        N(4) + "As rain falls through the air and soaks through soil, it picks up carbon dioxide, which turns it into a weak acid, milder than the carbonated water in a can of soda. " +
        N(5) + "Limestone, which formed from the shells and skeletons of ancient sea creatures, is made mostly of calcium carbonate, a mineral that this mild acid can dissolve. " +
        N(6) + "When the water seeps into cracks in the rock, it begins carrying tiny amounts of limestone away with it.</p>" +
        "<p>" + N(7) + "No single raindrop does much. " +
        N(8) + "But the cracks widen by fractions of a millimeter each century, and as they widen, more water flows through them, which widens them faster still. " +
        N(9) + "Over hundreds of thousands of years, a hairline fracture can become a passage large enough to walk through. " +
        N(10) + "Landscapes shaped this way, full of sinkholes, disappearing streams, and underground rivers, are called karst, and they cover a significant share of the earth's land.</p>" +
        "<p>" + N(11) + "Once a cave is drained of most of its water, a second process begins, and it runs in the opposite direction. " +
        N(12) + "Water dripping from the ceiling still carries dissolved limestone, but when it reaches the open air of the cave, it releases some of its carbon dioxide, much as a soda goes flat after the can is opened. " +
        N(13) + "The water can no longer hold all of its mineral, so a thin film of calcite is left behind. " +
        N(14) + "Drop after drop, these films build stalactites hanging from the ceiling and stalagmites rising from the floor, and when the two meet, they form a column.</p>" +
        "<p>" + N(15) + "These formations grow slowly, often less than the thickness of a coin in a decade, and their speed depends on how much water arrives. " +
        N(16) + "That dependence makes them valuable to scientists. " +
        N(17) + "Like tree rings, the layers inside a stalagmite record changes in the climate above: wetter periods leave thicker bands, and chemical traces in each layer reveal past temperatures. " +
        N(18) + "By cutting a thin slice and dating its layers, researchers can read a record of rainfall stretching back hundreds of thousands of years.</p>" +
        "<p>" + N(19) + "Caves also teach a lesson about time that is hard to learn anywhere else. " +
        N(20) + "A visitor standing beneath a column taller than a house is looking at a structure that began before human beings had written language. " +
        N(21) + "The same water that built it is still at work, drop by drop, in the dark. " +
        N(22) + "For a cave, the slow way is not a delay; it is the only way anything happens at all.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of the passage about limestone caves?",
          choices: [
            { letter: "A", text: "Caves form mainly when earthquakes split solid rock apart." },
            { letter: "B", text: "Stalactites are more useful to scientists than tree rings." },
            { letter: "C", text: "Slow work by water both carves caves and builds records in them." },
            { letter: "D", text: "Karst landscapes are dangerous because of their many sinkholes." }
          ],
          correct: "C"
        },
        {
          id: "calcite",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentences 12 and 13, why does dripping water leave calcite behind inside a cave?",
          choices: [
            { letter: "A", text: "It loses carbon dioxide and can no longer hold all its mineral." },
            { letter: "B", text: "It freezes in the cold air and leaves its mineral on the ceiling." },
            { letter: "C", text: "It mixes with the shells of sea creatures living in the cave." },
            { letter: "D", text: "It absorbs more acid from the rock as it falls to the floor." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward the slow processes described in sentences 19 through 22 is best described as —",
          choices: [
            { letter: "A", text: "impatient" },
            { letter: "B", text: "appreciative" },
            { letter: "C", text: "doubtful" },
            { letter: "D", text: "detached" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of sentences 3 through 14 of the cave passage?",
          choices: [
            { letter: "A", text: "It compares famous caves found on several different continents." },
            { letter: "B", text: "It presents a problem and then several possible solutions." },
            { letter: "C", text: "It argues against an older theory about how caves form." },
            { letter: "D", text: "It explains two processes in order: dissolving, then building." }
          ],
          correct: "D"
        },
        {
          id: "violence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 1, the author says a cave looks like the work of violence mainly to —",
          choices: [
            { letter: "A", text: "set up a contrast with the gentle process that truly forms caves" },
            { letter: "B", text: "warn readers that caves are dangerous places for people to explore" },
            { letter: "C", text: "suggest that careless people have damaged many caves over time" },
            { letter: "D", text: "describe the loud sound of rivers flowing underground" }
          ],
          correct: "A"
        },
        {
          id: "soda",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the comparison to a soda going flat in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "suggest that water found in caves is unsafe to drink" },
            { letter: "B", text: "show that cave water contains sugar and flavoring" },
            { letter: "C", text: "explain why visitors may not bring drinks into caves" },
            { letter: "D", text: "make an unfamiliar chemical change easier to picture" }
          ],
          correct: "D"
        },
        {
          id: "karst",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 10, the list of sinkholes, disappearing streams, and underground rivers helps show that karst refers to —",
          choices: [
            { letter: "A", text: "a kind of fossil left by ancient sea creatures" },
            { letter: "B", text: "a tool scientists use to date layers of rock" },
            { letter: "C", text: "land shaped by dissolving rock and hidden water" },
            { letter: "D", text: "the dark film that forms on damp cave walls" }
          ],
          correct: "C"
        },
        {
          id: "root",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The words stalactite and stalagmite (sentence 14) come from a Greek root meaning to drip. Based on this root and the passage, both words name formations that —",
          choices: [
            { letter: "A", text: "grow only upward from the floor" },
            { letter: "B", text: "are built by dripping water" },
            { letter: "C", text: "dissolve in a weak acid" },
            { letter: "D", text: "form only under the sea" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 11 · Literary (level 1) · a fictional ancient city ───────────── */
    {
      id: "g11-rl-c105-lamplighter",
      family: "G11",
      title: "The Long Road",
      kind: "Literary · 11.RL",
      blurb: "With her father sick, Tamsin must light the hundred lamps of an ancient city's road alone.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every evening at sunset, someone had to light the lamps of the Long Road. " +
        N(2) + "The road ran from the river gate of Halvara all the way up to the temple of the moon, and along it hung one hundred and twelve clay lamps on iron hooks. " +
        N(3) + "For twenty years, the lamplighter had been Tamsin's father.</p>" +
        "<p>" + N(4) + "But tonight her father lay in bed with a fever, his face gray against the pillow. " +
        N(5) + "\"You know the road,\" he told her. " +
        N(6) + "\"You have walked it beside me a thousand times.\" " +
        N(7) + "Tamsin nodded, though her stomach felt like a knotted rope. " +
        N(8) + "Walking beside someone was not the same as walking alone.</p>" +
        "<p>" + N(9) + "She took his long pole with the hooked end, the jar of oil, and the small pot of coals. " +
        N(10) + "At the river gate, the first lamp was easy. " +
        N(11) + "She filled it, touched the wick with a glowing coal, and watched the flame stand up straight like a small yellow soldier. " +
        N(12) + "The second lamp was easy too. " +
        N(13) + "By the twentieth, her arms ached, and the sky had turned the color of a bruised plum.</p>" +
        "<p>" + N(14) + "Halfway up the road, she came to the Narrow Stair, where the houses leaned close together and the shadows were thick. " +
        N(15) + "Her father always whistled here. " +
        N(16) + "Tamsin tried, but her whistle came out thin and shaky, like a bird that had forgotten its song. " +
        N(17) + "Something moved in a doorway, and she nearly dropped the pot of coals.</p>" +
        "<p>" + N(18) + "It was only old Neyla the weaver, holding a cup of tea. " +
        N(19) + "\"There you are,\" said Neyla. " +
        N(20) + "\"I was starting to worry, because the road is never dark this late.\" " +
        N(21) + "She looked at Tamsin, then at the pole. " +
        N(22) + "\"Your father?\" " +
        N(23) + "\"Sick,\" Tamsin said. " +
        N(24) + "Neyla nodded and said, \"Then I will wait right here until you reach the top.\"</p>" +
        "<p>" + N(25) + "Tamsin kept climbing. " +
        N(26) + "As she went, she began to notice what she had never noticed before. " +
        N(27) + "Faces appeared in windows as each lamp flared to life. " +
        N(28) + "A boy waved from a rooftop. " +
        N(29) + "A baker set out a cooling loaf and called her name. " +
        N(30) + "A grandfather on a bench raised his cup to her as if she had done something important. " +
        N(31) + "She realized that every night, all along the road, people had been waiting for the light, and her father had been bringing it to them one lamp at a time.</p>" +
        "<p>" + N(32) + "When she lit the last lamp at the temple steps, she turned and looked down. " +
        N(33) + "The Long Road glowed below her like a golden thread laid across the dark city. " +
        N(34) + "Far down by the Narrow Stair, a tiny figure lifted a cup. " +
        N(35) + "Tamsin lifted her pole in answer, and this time, when she whistled, the sound came out clear.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by Tamsin's night on the Long Road?",
          choices: [
            { letter: "A", text: "Children should never be asked to do the work of adults." },
            { letter: "B", text: "Small, steady duties can matter deeply to a community." },
            { letter: "C", text: "Cities are far more dangerous at night than people admit." },
            { letter: "D", text: "True courage means refusing any help from other people." }
          ],
          correct: "B"
        },
        {
          id: "whistle",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The detail in sentence 15 that Tamsin's father always whistled at the Narrow Stair mainly serves to —",
          choices: [
            { letter: "A", text: "show that her father was a gifted musician" },
            { letter: "B", text: "explain why the houses lean close together there" },
            { letter: "C", text: "suggest that Neyla the weaver dislikes noise" },
            { letter: "D", text: "prepare for the moment Tamsin whistles clearly" }
          ],
          correct: "D"
        },
        {
          id: "alone",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 8 shows that, as she begins her task, Tamsin —",
          choices: [
            { letter: "A", text: "is nervous about doing the job without her father" },
            { letter: "B", text: "is angry that her father has fallen sick again" },
            { letter: "C", text: "does not remember the route along the road" },
            { letter: "D", text: "plans to ask a neighbor to do the job for her" }
          ],
          correct: "A"
        },
        {
          id: "soldier",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 11, comparing the lamp flame to a small yellow soldier suggests that the flame —",
          choices: [
            { letter: "A", text: "is in danger of going out" },
            { letter: "B", text: "is fighting against the wind" },
            { letter: "C", text: "stands upright and steady" },
            { letter: "D", text: "is ready to spread to the houses" }
          ],
          correct: "C"
        },
        {
          id: "bird",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 16, comparing Tamsin's whistle to a bird that had forgotten its song emphasizes her —",
          choices: [
            { letter: "A", text: "growing excitement" },
            { letter: "B", text: "hidden musical skill" },
            { letter: "C", text: "boredom with the task" },
            { letter: "D", text: "fear and uncertainty" }
          ],
          correct: "D"
        },
        {
          id: "flared",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 27, the phrase flared to life most nearly means that each lamp —",
          choices: [
            { letter: "A", text: "swung on its hook" },
            { letter: "B", text: "burst into light" },
            { letter: "C", text: "cracked from the heat" },
            { letter: "D", text: "slowly burned out" }
          ],
          correct: "B"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 35 resolves the story of the Long Road by showing that Tamsin —",
          choices: [
            { letter: "A", text: "has decided to become a weaver like Neyla" },
            { letter: "B", text: "will never agree to light the lamps again" },
            { letter: "C", text: "has gained confidence in her role for the night" },
            { letter: "D", text: "is still afraid of the shadows on the stair" }
          ],
          correct: "C"
        },
        {
          id: "realized",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 31, the word realized most nearly means —",
          choices: [
            { letter: "A", text: "understood clearly" },
            { letter: "B", text: "pretended to know" },
            { letter: "C", text: "forgot quickly" },
            { letter: "D", text: "hoped secretly" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 12 · Paired texts (level 2) · a fictional ancient city ───────────── */
    {
      id: "g11-dsr-c105-cistern",
      family: "G11",
      title: "The Cistern of Sarnet-Ul",
      kind: "Paired texts · 11.DSR",
      blurb: "A royal chronicle and a stonecutter's daughter's letter tell two stories of the same great cistern.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Chronicle of Sarnet-Ul</strong></p>" +
        "<p>" + N(1) + "In the ninth year of the reign of Queen Ishara, the wells of Sarnet-Ul ran low, and the caravans that fed the city began to pass it by. " +
        N(2) + "The Queen summoned her builders and commanded that a cistern be cut beneath the market square, deep enough to hold the rains of three winters. " +
        N(3) + "In the first year, the builders cut through the red sandstone to the depth of forty men, working by the light of a thousand lamps. " +
        N(4) + "In the second year, they raised two hundred pillars to hold up the roof, each pillar carved with the lotus of the royal house. " +
        N(5) + "In the third year, the Queen herself descended the great stair and poured the first jar of water into the empty basin, and the people wept with joy. " +
        N(6) + "Since that day, no caravan has passed Sarnet-Ul without stopping to drink, and the markets of the city have grown richer than in any age before. " +
        N(7) + "The merchants say that its water is the sweetest between the two seas, and travelers carry its praise to distant lands. " +
        N(8) + "Let all who read this record know that the wisdom of Queen Ishara saved her city, and that her cistern will stand as long as there is rain to fill it.</p>" +
        "<p><strong>Text 2 — A Letter from the Cistern</strong></p>" +
        "<p>" + N(9) + "To my brother Kael in the hill country, from your sister Ruma, greetings. " +
        N(10) + "You asked about the great cistern, so I will tell you what the chroniclers will not. " +
        N(11) + "Father worked in the cut for all three years. " +
        N(12) + "He went down before dawn with the other stonecutters and came up after dark, white with dust from his hair to his sandals, so that the little ones called him the ghost. " +
        N(13) + "The sandstone looks soft, but it eats chisels, and Father sharpened his every night by lamplight until the sound became our lullaby. " +
        N(14) + "In the second year, a section of the wall gave way, and three men were hurt, though by good fortune none were killed. " +
        N(15) + "Father carved eleven of the two hundred pillars. " +
        N(16) + "On one of them, low down where no one looks, he cut a small fig leaf, which was Mother's sign, beside the royal lotus. " +
        N(17) + "When the Queen poured the first water, we stood far back in the crowd and could not see. " +
        N(18) + "But Father did not mind. " +
        N(19) + "He said the water did not know whose name was in the chronicle, and it would taste as sweet to us as to anyone. " +
        N(20) + "Come in the spring, and I will show you the fig leaf.</p>",
      claims: [
        {
          id: "fact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the cistern of Sarnet-Ul appears in both texts?",
          choices: [
            { letter: "A", text: "Three men were hurt when a wall gave way." },
            { letter: "B", text: "The Queen carved the first of the pillars." },
            { letter: "C", text: "The cistern took three years to build." },
            { letter: "D", text: "The merchants call its water the sweetest." }
          ],
          correct: "C"
        },
        {
          id: "focus",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the chronicle and Ruma's letter differ in focus?",
          choices: [
            { letter: "A", text: "Text 1 describes the accidents, while Text 2 describes the ceremony." },
            { letter: "B", text: "Text 1 credits the Queen's wisdom, while Text 2 centers on the workers." },
            { letter: "C", text: "Text 1 criticizes the project, while Text 2 praises the royal family." },
            { letter: "D", text: "Text 1 explains the design, while Text 2 lists the cost of materials." }
          ],
          correct: "B"
        },
        {
          id: "leftout",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO details about the cistern that Ruma's letter includes but the chronicle leaves out.",
          choices: [
            { letter: "A", text: "A section of the wall gave way and injured workers." },
            { letter: "B", text: "The roof is held up by two hundred stone pillars." },
            { letter: "C", text: "The Queen poured the first jar of water herself." },
            { letter: "D", text: "A stonecutter carved a fig leaf on one pillar." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the Chronicle of Sarnet-Ul, the tone of Ruma's letter is more —",
          choices: [
            { letter: "A", text: "formal and ceremonial" },
            { letter: "B", text: "bitter and accusing" },
            { letter: "C", text: "fearful and anxious" },
            { letter: "D", text: "personal and plainspoken" }
          ],
          correct: "D"
        },
        {
          id: "pouring",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The two texts describe the first pouring of water (sentences 5 and 17) differently. Ruma's letter presents the moment as one that —",
          choices: [
            { letter: "A", text: "her father led in front of the whole city" },
            { letter: "B", text: "failed because the cistern was not finished" },
            { letter: "C", text: "her family took part in only from a distance" },
            { letter: "D", text: "was kept secret from the people of the city" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader of both the chronicle and the letter could best conclude that —",
          choices: [
            { letter: "A", text: "an official record may leave out the people who did the work" },
            { letter: "B", text: "the chronicle of the cistern is entirely false and invented" },
            { letter: "C", text: "the stonecutters of Sarnet-Ul disliked Queen Ishara" },
            { letter: "D", text: "Ruma's father regretted his years working on the cistern" }
          ],
          correct: "A"
        },
        {
          id: "eats",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 13, Ruma's statement that the sandstone eats chisels suggests that the stone —",
          choices: [
            { letter: "A", text: "is much softer than it first appears" },
            { letter: "B", text: "quickly wears down the workers' tools" },
            { letter: "C", text: "is full of holes left by earlier diggers" },
            { letter: "D", text: "is too valuable to be cut for a cistern" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer of the chronicle organize sentences 3 through 5?",
          choices: [
            { letter: "A", text: "by comparing the cistern to the city's old wells" },
            { letter: "B", text: "by listing problems and then their solutions" },
            { letter: "C", text: "by moving in time order, one year at a time" },
            { letter: "D", text: "by tracing effects back to their first causes" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
