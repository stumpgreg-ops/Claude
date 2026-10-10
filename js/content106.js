/* SOL Labyrinth — Grade 11 long packs, file 106 (stamina tier for nights 65–94).
 * Thirteen LONG packs (390–520 words; paired texts 200–260 each; poem 22–28 lines) on sports science,
 * dance competitions, a county fair and lighthouses. Original Virginia EOC Reading-style content for the
 * G11 family; no published text, no real people. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · DANCE COMPETITION ───────────────────────── */
    {
      id: "g11-rl-c106-silentrun",
      family: "G11",
      title: "Once More, in Silence",
      kind: "Literary · 11.RL",
      blurb: "When the music cuts out mid-routine at a regional dance competition, Noor learns what her coach's strangest rule was for.",
      level: 2,
      passage:
        "<p>" + N(1) + "For six weeks Ms. Varga had ended every rehearsal the same way: she would walk to the speaker, press the button that killed the music, and say, \"Once more, in silence.\" " +
        N(2) + "Noor Haddad hated that last run more than any other part of the day. " +
        N(3) + "Without the song, the studio sounded like what it was, a converted tire shop with a squeaking floor, and every landing she made seemed to announce itself to the whole block. " +
        N(4) + "Her duet partner, Tavita Faleolo, did not seem to mind; he counted under his breath, a low steady murmur, and moved through the routine as if the music were still playing somewhere only he could hear.</p>" +
        "<p>" + N(5) + "The regional competition was held in a high school auditorium two hours north, and by the time their number was called, Noor had watched fourteen other duets and decided that every one of them was better. " +
        N(6) + "The stage lights were hotter than she expected. " +
        N(7) + "Somewhere behind the third row, a baby was fussing. " +
        N(8) + "The opening chords of their song came through the speakers, bright and familiar, and for ninety seconds Noor forgot to be afraid.</p>" +
        "<p>" + N(9) + "Then the music stopped. " +
        N(10) + "It did not fade; it simply ended, mid-phrase, the way a sentence ends when the speaker is interrupted. " +
        N(11) + "Noor was halfway into a turn, and she finished it out of momentum, and then she stood still at the center of the stage with her arms half raised, like someone who has reached for a railing and found nothing there. " +
        N(12) + "She could hear the baby again. " +
        N(13) + "She could hear a man in the wings whispering into a headset.</p>" +
        "<p>" + N(14) + "Tavita did not stop. " +
        N(15) + "\"Five, six, seven, eight,\" he said, not loudly, but loud enough, and he stepped into the lift exactly where the music would have put it. " +
        N(16) + "Noor's body answered before her mind did. " +
        N(17) + "She took his hand, rose, came down, and found the count waiting for her, the same count she had heard in the tire shop forty times. " +
        N(18) + "Somewhere in the audience a woman began to clap on the beat, and then a few others joined her, until the auditorium itself was keeping time.</p>" +
        "<p>" + N(19) + "They finished in silence except for the clapping, and when they held their last pose, the applause that followed was louder than anything Noor had heard that day. " +
        N(20) + "The technician apologized afterward; a cable had been kicked loose backstage. " +
        N(21) + "The judges offered to let them perform again, but Ms. Varga, after looking at Noor's face, said that once was enough.</p>" +
        "<p>" + N(22) + "They placed fourth. " +
        N(23) + "On the drive home, Noor asked why their coach had never told them what the silent runs were for. " +
        N(24) + "Ms. Varga kept her eyes on the highway. " +
        N(25) + "\"If I had told you, you would have practiced for the cable,\" she said. " +
        N(26) + "\"I wanted you to practice for each other.\" " +
        N(27) + "Noor leaned her head against the window and, without quite meaning to, began counting the mile markers under her breath.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme developed through Noor's experience at the regional competition?",
          choices: [
            { letter: "A", text: "Performers should never compete until they feel confident in their skills." },
            { letter: "B", text: "Audiences care more about a performer's effort than about the final score." },
            { letter: "C", text: "Technical problems usually reveal which competitors have the most talent." },
            { letter: "D", text: "Practice built on trust between partners can carry them through a failure." }
          ],
          correct: "D"
        },
        {
          id: "baby",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The return of the fussing baby in sentence 12, first mentioned in sentence 7, mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that the audience was not paying attention to the duet" },
            { letter: "B", text: "show how completely the stage has fallen silent around Noor" },
            { letter: "C", text: "explain why the technician failed to notice the loose cable" },
            { letter: "D", text: "hint that Noor will be distracted for the rest of the routine" }
          ],
          correct: "B"
        },
        {
          id: "tavita",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Tavita's response in sentences 14 and 15 reveals that he —",
          choices: [
            { letter: "A", text: "falls back on the counting habit he built in the silent rehearsals" },
            { letter: "B", text: "wants the judges to notice that he is the stronger of the two dancers" },
            { letter: "C", text: "has secretly arranged with Ms. Varga to perform without the music" },
            { letter: "D", text: "is too nervous to realize that the song has stopped playing" }
          ],
          correct: "A"
        },
        {
          id: "railing",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 11, comparing Noor to someone who has reached for a railing and found nothing there mainly conveys her —",
          choices: [
            { letter: "A", text: "frustration with a partner who has stopped helping her" },
            { letter: "B", text: "embarrassment at having made an obvious mistake in the turn" },
            { letter: "C", text: "sudden loss of the support she had been depending on" },
            { letter: "D", text: "fear that she has injured herself on the slick stage" }
          ],
          correct: "C"
        },
        {
          id: "interrupted",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 10, comparing the end of the music to an interrupted sentence emphasizes that the silence was —",
          choices: [
            { letter: "A", text: "gradual enough that the dancers could adjust to it" },
            { letter: "B", text: "planned by the competition as a test of the duets" },
            { letter: "C", text: "abrupt and left the phrase unfinished" },
            { letter: "D", text: "welcome after the loud opening chords" }
          ],
          correct: "C"
        },
        {
          id: "announce",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 3, the word announce suggests that during the silent runs Noor feels her landings are —",
          choices: [
            { letter: "A", text: "exposed and impossible to hide" },
            { letter: "B", text: "impressive enough to be admired" },
            { letter: "C", text: "too quiet for anyone to notice" },
            { letter: "D", text: "perfectly matched to Tavita's count" }
          ],
          correct: "A"
        },
        {
          id: "frame",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The story opens with Ms. Varga's silent rehearsals (sentence 1) and closes with her explanation of them (sentences 25–26). This structure mainly allows the reader to —",
          choices: [
            { letter: "A", text: "compare the duet's practice space with the competition stage" },
            { letter: "B", text: "grasp the purpose of the rule only after seeing it tested" },
            { letter: "C", text: "predict from the first paragraph that the music will fail" },
            { letter: "D", text: "learn why the duet placed fourth instead of first" }
          ],
          correct: "B"
        },
        {
          id: "momentum",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 11, the word momentum most nearly refers to —",
          choices: [
            { letter: "A", text: "a sudden burst of courage" },
            { letter: "B", text: "the memory of earlier practice" },
            { letter: "C", text: "a signal from her partner" },
            { letter: "D", text: "motion already underway" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── LITERARY · COUNTY FAIR ───────────────────────── */
    {
      id: "g11-rl-c106-goatring",
      family: "G11",
      title: "Three Rules for the Ring",
      kind: "Literary · 11.RL",
      blurb: "At the county fair goat show, Lucía's goat lunges for spilled popcorn, and a judge is watching what Lucía does next.",
      level: 1,
      passage:
        "<p>" + N(1) + "Lucía Montoya had been awake since four, and Biscuit had been awake since four-fifteen, complaining. " +
        N(2) + "The goat did not like the trailer, did not like the fairgrounds, and especially did not like the bath Lucía gave her behind the dairy barn while the sun was still coming up. " +
        N(3) + "By the time the loudspeaker called the junior dairy goat class, Biscuit's white coat was clean and fluffy, and her mood was terrible.</p>" +
        "<p>" + N(4) + "Lucía's grandfather walked her to the ring gate. " +
        N(5) + "He had shown goats at this same county fair for thirty years, and his advice was always short. " +
        N(6) + "\"Keep your eyes on the judge,\" he said. " +
        N(7) + "\"Keep one hand on the goat. " +
        N(8) + "And whatever happens, keep breathing.\" " +
        N(9) + "Lucía nodded, though she was not sure breathing would help.</p>" +
        "<p>" + N(10) + "There were nine handlers in the ring. " +
        N(11) + "The judge, a tall woman in a straw hat, walked slowly down the line, running her hand along each goat's back and checking its legs. " +
        N(12) + "Lucía held Biscuit's collar and stood up straight. " +
        N(13) + "For a few minutes, everything went exactly the way she had practiced in the backyard.</p>" +
        "<p>" + N(14) + "Then a little boy in the bleachers dropped a bag of popcorn. " +
        N(15) + "Biscuit saw it, lunged, and dragged Lucía three steps sideways into the handler beside her, whose goat began to bleat in alarm. " +
        N(16) + "Someone in the crowd laughed. " +
        N(17) + "Lucía's face went hot. " +
        N(18) + "She wanted to let go of the collar and walk straight out of the ring, past the barns, all the way home.</p>" +
        "<p>" + N(19) + "Instead, she remembered her grandfather's three rules. " +
        N(20) + "She planted her feet, set Biscuit back in place with one firm hand, and quietly apologized to the handler beside her. " +
        N(21) + "Then she looked up and found the judge already watching her. " +
        N(22) + "Lucía did not look away. " +
        N(23) + "She smoothed Biscuit's coat, squared the goat's legs, and waited, breathing slowly, as if nothing had happened at all.</p>" +
        "<p>" + N(24) + "Biscuit placed sixth out of nine, which was about what Lucía expected. " +
        N(25) + "But in the showmanship class an hour later, which the judges scored by watching the handler rather than the animal, Lucía won the purple ribbon. " +
        N(26) + "The judge shook her hand. " +
        N(27) + "\"Anybody can stand still when the goat behaves,\" the woman said. " +
        N(28) + "\"I wanted to see what you'd do when she didn't.\" " +
        N(29) + "That evening, Lucía pinned the ribbon on the wall of the barn stall, right where Biscuit could chew on it if she wanted to, and her grandfather laughed so hard he had to sit down on a hay bale.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Lucía's day at the county fair most clearly develop?",
          choices: [
            { letter: "A", text: "Animals at a fair should be trained to ignore the crowd." },
            { letter: "B", text: "How a person responds to a setback can matter most." },
            { letter: "C", text: "Family traditions are hard to keep up in modern life." },
            { letter: "D", text: "Winning a ribbon is the best reward for a year of work." }
          ],
          correct: "B"
        },
        {
          id: "rules",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The grandfather's three rules in sentences 6–8 are important to the plot mainly because they —",
          choices: [
            { letter: "A", text: "explain why Biscuit is afraid of the crowded fairgrounds" },
            { letter: "B", text: "show that the grandfather expects Lucía to lose the class" },
            { letter: "C", text: "give Lucía a plan that she follows when Biscuit misbehaves" },
            { letter: "D", text: "reveal what the judge will look for in the showmanship class" }
          ],
          correct: "C"
        },
        {
          id: "recover",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lucía's actions in sentence 20 show that she is able to —",
          choices: [
            { letter: "A", text: "regain control and stay courteous under pressure" },
            { letter: "B", text: "blame the boy in the bleachers for the accident" },
            { letter: "C", text: "hide her embarrassment by laughing with the crowd" },
            { letter: "D", text: "convince the judge that the lunge never happened" }
          ],
          correct: "A"
        },
        {
          id: "hot",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 17, the image of Lucía's face going hot mainly conveys her —",
          choices: [
            { letter: "A", text: "anger at the goat" },
            { letter: "B", text: "tiredness from waking early" },
            { letter: "C", text: "discomfort in the summer sun" },
            { letter: "D", text: "sudden embarrassment" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The description of the grandfather on the hay bale in sentence 29 gives the ending a tone that is mainly —",
          choices: [
            { letter: "A", text: "anxious and uncertain" },
            { letter: "B", text: "warm and lightly funny" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "quiet and regretful" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 2, the repeated words did not like mainly emphasize —",
          choices: [
            { letter: "A", text: "how carefully Lucía prepared Biscuit for the show" },
            { letter: "B", text: "that the fairgrounds were poorly kept that year" },
            { letter: "C", text: "how thoroughly unhappy Biscuit is with the day" },
            { letter: "D", text: "that Lucía secretly shares her goat's feelings" }
          ],
          correct: "C"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do the events in sentences 24–28 resolve the story's central problem?",
          choices: [
            { letter: "A", text: "Biscuit's poor placing is reversed once the judge reviews the class." },
            { letter: "B", text: "Lucía decides she will no longer show goats at the county fair." },
            { letter: "C", text: "The grandfather admits that his three rules did not really help." },
            { letter: "D", text: "A loss in one class is balanced by praise for how Lucía coped." }
          ],
          correct: "D"
        },
        {
          id: "showman",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The explanation in sentence 25 helps the reader understand that showmanship refers to —",
          choices: [
            { letter: "A", text: "a handler's skill at presenting" },
            { letter: "B", text: "the size and health of a show animal" },
            { letter: "C", text: "a prize given to the youngest handler" },
            { letter: "D", text: "the crowd's reaction to each animal" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── LITERARY · LIGHTHOUSE ───────────────────────── */
    {
      id: "g11-rl-c106-greenbooks",
      family: "G11",
      title: "The Green Books",
      kind: "Literary · 11.RL",
      blurb: "Thandi thinks her grandmother's nightly logbook at a retired lighthouse is a pointless habit, until she opens the cabinet under the stairs.",
      level: 3,
      passage:
        "<p>" + N(1) + "The lighthouse on Kestrel Point had not guided a ship in eleven years. " +
        N(2) + "A small automatic beacon on a steel pole at the end of the breakwater did that job now, blinking every six seconds without anyone's help, and the tower itself had become a museum that opened four afternoons a week. " +
        N(3) + "Thandi's grandmother was its only regular volunteer. " +
        N(4) + "She sold postcards, answered questions about the brass lens, and at sunset, after the last visitor had gone, she climbed the ninety-one steps to the lamp room with a pencil and a green clothbound book.</p>" +
        "<p>" + N(5) + "The first evening Thandi followed her up, she expected to find some kind of chore. " +
        N(6) + "Instead her grandmother sat on a folding stool by the glass and looked at the water. " +
        N(7) + "When a freighter appeared on the horizon, she wrote down the time, the direction it was heading, and a few words about the weather. " +
        N(8) + "\"Who reads that?\" Thandi asked. " +
        N(9) + "\"No one,\" her grandmother said, and went on writing.</p>" +
        "<p>" + N(10) + "It seemed to Thandi like the saddest kind of habit, a ritual performed for a job that no longer existed. " +
        N(11) + "She said as much, a little too plainly, on the third night. " +
        N(12) + "Her grandmother did not argue. " +
        N(13) + "She simply pointed to a low cabinet beneath the stairs, and the next afternoon, while the museum was empty, Thandi opened it.</p>" +
        "<p>" + N(14) + "Inside were forty-one green books, stacked by year. " +
        N(15) + "The oldest were in handwriting Thandi did not recognize, her great-grandfather's, she realized, from the decades when the light had been tended by hand. " +
        N(16) + "Their entries were brisk and practical: fog at 0300, wick trimmed, schooner passing close. " +
        N(17) + "But somewhere in the middle of the stack the handwriting changed to her grandmother's, and the entries grew longer. " +
        N(18) + "A heron on the breakwater for the fourth day running. " +
        N(19) + "Ice breaking up early; the sound like plates in another room. " +
        N(20) + "A fishing boat that came in late, and the relief of seeing its lights.</p>" +
        "<p>" + N(21) + "Thandi read until the windows went orange. " +
        N(22) + "She had thought the books were a chronicle of ships, a record kept because the rules once demanded it. " +
        N(23) + "Now she saw that they were a record of attention itself, years of someone deciding that the water deserved to be watched whether or not watching was anyone's duty. " +
        N(24) + "The beacon on the breakwater could warn a ship away from the rocks. " +
        N(25) + "It could not notice the heron.</p>" +
        "<p>" + N(26) + "That night she climbed the steps before her grandmother did. " +
        N(27) + "When the older woman reached the lamp room, breathing hard, Thandi was already on the stool with the green book open on her knees. " +
        N(28) + "Her grandmother looked at her for a long moment and then lowered herself onto the top step without a word. " +
        N(29) + "A freighter slid across the horizon, its lights small as sparks. " +
        N(30) + "Thandi checked her watch, wrote the time, and then, after thinking about it, added a second line: Gogo on the stairs, watching me watch.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about the Kestrel Point logbooks?",
          choices: [
            { letter: "A", text: "Old buildings should be preserved so that visitors can learn from them." },
            { letter: "B", text: "Machines will eventually replace every job that people once performed." },
            { letter: "C", text: "Careful attention has value even when no duty requires it anymore." },
            { letter: "D", text: "Young people rarely understand the habits of older relatives." }
          ],
          correct: "C"
        },
        {
          id: "heron",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.2",
          stem: "The contrast in sentences 24 and 25 between the beacon and the heron mainly serves to —",
          choices: [
            { letter: "A", text: "show that the automatic beacon is less reliable than the old lamp" },
            { letter: "B", text: "set a machine's narrow job against the noticing the books preserve" },
            { letter: "C", text: "suggest that wildlife near the breakwater is in danger from passing ships" },
            { letter: "D", text: "explain why the museum is open only four afternoons a week" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Taken together, Thandi's comment on the third night (sentences 10–11) and her action in sentence 26 show that she —",
          choices: [
            { letter: "A", text: "pretends to admire the logbook to avoid hurting her grandmother" },
            { letter: "B", text: "takes over the logbook because her grandmother can no longer climb" },
            { letter: "C", text: "keeps believing the ritual is sad but continues it out of duty" },
            { letter: "D", text: "moves from dismissing the ritual to choosing to carry it on" }
          ],
          correct: "D"
        },
        {
          id: "plates",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 19, comparing breaking ice to the sound of plates in another room mainly conveys —",
          choices: [
            { letter: "A", text: "the grandmother's personal, attentive way of recording the water" },
            { letter: "B", text: "the danger that early ice posed to the fishing boats near the point" },
            { letter: "C", text: "the great-grandfather's habit of writing only practical details" },
            { letter: "D", text: "the noise that kept the family awake during the long winters" }
          ],
          correct: "A"
        },
        {
          id: "noone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 9, the grandmother's two-word reply, followed by her return to writing, creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "quietly certain" },
            { letter: "C", text: "playfully teasing" },
            { letter: "D", text: "nervous and defensive" }
          ],
          correct: "B"
        },
        {
          id: "brisk",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 16, the word brisk suggests that the great-grandfather's entries were —",
          choices: [
            { letter: "A", text: "short and practical" },
            { letter: "B", text: "cold and unfriendly" },
            { letter: "C", text: "hurried and careless" },
            { letter: "D", text: "cheerful and lively" }
          ],
          correct: "A"
        },
        {
          id: "lastline",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The story ends with Thandi recording her grandmother in the logbook (sentence 30). This ending mainly resolves the story by showing that Thandi —",
          choices: [
            { letter: "A", text: "has decided to keep the logbook as a museum exhibit" },
            { letter: "B", text: "wants her grandmother to stop climbing the stairs" },
            { letter: "C", text: "still sees the logbook mainly as a record of ships" },
            { letter: "D", text: "has taken up the book's purpose and widened it" }
          ],
          correct: "D"
        },
        {
          id: "chronicle",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word chronicle in sentence 22 comes from the Greek root chron, as do chronological and synchronize. The root chron refers to —",
          choices: [
            { letter: "A", text: "writing" },
            { letter: "B", text: "ships" },
            { letter: "C", text: "time" },
            { letter: "D", text: "rules" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · SPORTS SCIENCE ───────────────────────── */
    {
      id: "g11-ri-c106-sleeptraining",
      family: "G11",
      title: "The Practice Nobody Sees",
      kind: "Informational · 11.RI",
      blurb: "Sports scientists argue that sleep is part of training, and a basketball team's sleep diaries suggest why.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ask a high school athlete how she trains, and she will probably describe sprints, weight sessions, film study, and long afternoons of drills. " +
        N(2) + "She is less likely to mention the eight or nine hours she spends in bed, yet sports scientists increasingly argue that sleep belongs on the same list. " +
        N(3) + "In their view, rest is not the absence of training; it is the part of training in which the body actually absorbs the work.</p>" +
        "<p>" + N(4) + "The reasoning starts with what exercise does to muscle. " +
        N(5) + "A hard workout creates tiny tears in muscle fibers and drains the stored fuel that muscles rely on. " +
        N(6) + "Repairing that damage, and rebuilding the fibers slightly stronger than before, happens largely during deep sleep, when the body releases more of the hormones that drive tissue growth. " +
        N(7) + "An athlete who trains hard and sleeps poorly, then, is a little like a builder who tears down a wall every day but never gets the bricks delivered to rebuild it.</p>" +
        "<p>" + N(8) + "Sleep also shapes skills that have nothing to do with muscle. " +
        N(9) + "Learning a new movement, such as a volleyball serve or a swimmer's flip turn, depends on the brain replaying and storing patterns from the day's practice. " +
        N(10) + "Researchers who study motor learning have repeatedly found that people tested after a night of sleep perform a newly practiced task more accurately than people tested after the same number of hours awake. " +
        N(11) + "The practice happens on the court, but some of the learning, it seems, happens on the pillow.</p>" +
        "<p>" + N(12) + "A small project at Brennan Valley High School shows how these ideas play out on an ordinary team. " +
        N(13) + "Last fall, the school's athletic trainer, Ms. Adaeze Nwosu, asked members of the girls' basketball team to keep sleep diaries for six weeks while she recorded their free-throw percentages and their reaction times on a simple light-board test. " +
        N(14) + "Players who averaged fewer than seven hours of sleep made about 9 percent fewer free throws than teammates who averaged eight or more. " +
        N(15) + "Their reaction times were slower as well, and they reported more days of feeling sore. " +
        N(16) + "Ms. Nwosu is careful about what the numbers can show. " +
        N(17) + "\"Twelve players is not a scientific study,\" she said. " +
        N(18) + "\"Maybe the players who sleep less also have more homework or longer bus rides. " +
        N(19) + "But the pattern matches what the research keeps telling us.\"</p>" +
        "<p>" + N(20) + "None of this means that sleep can replace practice. " +
        N(21) + "An athlete who rests well but never trains will not improve. " +
        N(22) + "The point is that the two work as a pair. " +
        N(23) + "Coaches who schedule early-morning workouts after late games, or teams that celebrate athletes for \"grinding\" through exhaustion, may be cutting away the very stage when the hard work pays off. " +
        N(24) + "For a student juggling classes, a job, and a sport, protecting sleep can feel like one more demand. " +
        N(25) + "Sports scientists would put it another way: it is the cheapest piece of training equipment an athlete will ever own.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about sleep and athletic training?",
          choices: [
            { letter: "A", text: "Sleep is a working part of training, when the body and brain absorb practice." },
            { letter: "B", text: "Athletes who sleep more than eight hours will always outperform their rivals." },
            { letter: "C", text: "High school coaches should cancel practices that follow late-night games." },
            { letter: "D", text: "Free-throw shooting is the most reliable way to measure an athlete's rest." }
          ],
          correct: "A"
        },
        {
          id: "learning",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence best supports the claim that sleep helps athletes learn new movements, not only repair muscle?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        },
        {
          id: "grinding",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "In sentence 23, the author's attitude toward teams that celebrate athletes for grinding through exhaustion is best described as —",
          choices: [
            { letter: "A", text: "amused tolerance" },
            { letter: "B", text: "concerned disapproval" },
            { letter: "C", text: "reluctant admiration" },
            { letter: "D", text: "complete indifference" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize paragraphs 2 through 4 of the sleep passage?",
          choices: [
            { letter: "A", text: "by listing the sleep habits of several famous professional teams" },
            { letter: "B", text: "by comparing the views of coaches with the views of trainers" },
            { letter: "C", text: "by describing a problem and then rejecting several solutions" },
            { letter: "D", text: "by explaining effects on muscle, then on skills, then a local case" }
          ],
          correct: "D"
        },
        {
          id: "builder",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 7, comparing a poorly rested athlete to a builder who never gets the bricks mainly helps the reader understand that —",
          choices: [
            { letter: "A", text: "construction work is a useful kind of strength training for teens" },
            { letter: "B", text: "most athletic injuries actually happen while an athlete is asleep" },
            { letter: "C", text: "hard workouts are harmful and should be avoided by young athletes" },
            { letter: "D", text: "training breaks muscle down, but without sleep it is not rebuilt" }
          ],
          correct: "D"
        },
        {
          id: "nwosu",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "The author includes Ms. Nwosu's comments in sentences 17–19 mainly to —",
          choices: [
            { letter: "A", text: "prove that sleep caused the drop in the players' free throws" },
            { letter: "B", text: "admit the limits of a small project while linking it to research" },
            { letter: "C", text: "suggest that homework matters more to athletes than sleep does" },
            { letter: "D", text: "criticize the basketball team for not taking the diaries seriously" }
          ],
          correct: "B"
        },
        {
          id: "absorbs",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word absorbs most nearly means —",
          choices: [
            { letter: "A", text: "takes in and makes use of" },
            { letter: "B", text: "soaks up like a sponge" },
            { letter: "C", text: "hides from others" },
            { letter: "D", text: "wears out completely" }
          ],
          correct: "A"
        },
        {
          id: "diaries",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to sentences 14 and 15, the Brennan Valley players who averaged fewer than seven hours of sleep —",
          choices: [
            { letter: "A", text: "were benched more often during the six weeks" },
            { letter: "B", text: "stopped keeping their sleep diaries early" },
            { letter: "C", text: "made fewer free throws and reacted more slowly" },
            { letter: "D", text: "had more homework than their rested teammates" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · LIGHTHOUSES ───────────────────────── */
    {
      id: "g11-ri-c106-lensrings",
      family: "G11",
      title: "Signing a Name in the Dark",
      kind: "Informational · 11.RI",
      blurb: "From bonfires to glass rings to LEDs: how lighthouse lights learned to send their beams farther and tell sailors where they were.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of history, a lighthouse was only as good as its fire. " +
        N(2) + "The earliest coastal lights were open flames of wood or coal burning on towers or hilltops, and they had a basic flaw: a fire sends its light in every direction at once, including straight up into the sky and down into the ground, where no sailor will ever see it. " +
        N(3) + "Most of the energy, in other words, was wasted.</p>" +
        "<p>" + N(4) + "The first improvement was to stop the waste by bouncing it. " +
        N(5) + "By the late 1700s, many lighthouses had replaced bonfires with oil lamps set in front of curved metal mirrors, which caught the stray light and threw it outward in a beam. " +
        N(6) + "These reflectors were a real advance, but they had problems of their own. " +
        N(7) + "The polished metal tarnished in salt air, absorbed a large share of the light it was meant to redirect, and had to be scrubbed so often that keepers wore away the silver coating.</p>" +
        "<p>" + N(8) + "The breakthrough came in the 1820s, when a French engineer proposed bending the light instead of bouncing it. " +
        N(9) + "A single glass lens strong enough to focus a lighthouse beam would have been impossibly thick and heavy, so he broke the curved surface into rings of glass prisms arranged around the lamp like the layers of a beehive. " +
        N(10) + "Each ring bent a slice of the light toward the horizon. " +
        N(11) + "The result was a lens that captured far more of the lamp's glow than any mirror and could be seen, on a clear night, more than twenty miles away. " +
        N(12) + "Lenses of this design were built in several sizes, called orders; the largest, or first-order, lenses stood taller than a person and were reserved for dangerous coastlines, while smaller orders marked harbors and rivers.</p>" +
        "<p>" + N(13) + "A bright light alone, however, was not enough. " +
        N(14) + "A sailor who saw a glow on the horizon also needed to know which lighthouse it was. " +
        N(15) + "So each station was given its own characteristic: a pattern of flashes, a steady beam, or a color that set it apart from its neighbors. " +
        N(16) + "To produce flashes, many lenses were mounted on rotating platforms, turned by clockwork that the keeper wound by hand every few hours throughout the night. " +
        N(17) + "A light that flashed twice every ten seconds was, in effect, signing its name in the dark.</p>" +
        "<p>" + N(18) + "That nightly labor is mostly gone. " +
        N(19) + "In the late twentieth century, lighthouses were automated, and today many beams come from compact electric lamps or LED arrays that switch themselves on at dusk. " +
        N(20) + "Satellite navigation has taken over much of the work the lights once did alone. " +
        N(21) + "Yet the old glass has not entirely disappeared. " +
        N(22) + "Hundreds of the great lenses now sit in museums or in the towers where they were installed, and visitors who stand beside one often describe the same experience: the sense of looking at an object designed, ring by ring, for the sole purpose of being seen.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of the passage about lighthouse lights?",
          choices: [
            { letter: "A", text: "Keepers once worked through the night winding clockwork by hand." },
            { letter: "B", text: "Lighthouse lights evolved to send light more efficiently and identifiably." },
            { letter: "C", text: "Satellite navigation has made lighthouses useless to modern sailors." },
            { letter: "D", text: "Glass lenses are more beautiful than the metal mirrors they replaced." }
          ],
          correct: "B"
        },
        {
          id: "mirrors",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to paragraph 2, what drawback did the curved metal reflectors have?",
          choices: [
            { letter: "A", text: "They could be used only with wood or coal fires." },
            { letter: "B", text: "They sent light up into the sky and down to the ground." },
            { letter: "C", text: "They were too heavy for most towers to support." },
            { letter: "D", text: "They tarnished and soaked up much of the light." }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The description of the old lenses in sentence 22 suggests that the author's attitude toward them is —",
          choices: [
            { letter: "A", text: "admiring" },
            { letter: "B", text: "doubtful" },
            { letter: "C", text: "nostalgic and bitter" },
            { letter: "D", text: "strictly neutral" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the overall structure of the lighthouse passage?",
          choices: [
            { letter: "A", text: "a comparison of two lighthouses on different coasts" },
            { letter: "B", text: "an argument followed by answers to its critics" },
            { letter: "C", text: "a sequence of problems and the solutions to each" },
            { letter: "D", text: "a description of one keeper's ordinary night" }
          ],
          correct: "C"
        },
        {
          id: "signing",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 17, the statement that a flashing light was signing its name in the dark mainly emphasizes that —",
          choices: [
            { letter: "A", text: "a flash pattern told sailors exactly which lighthouse they saw" },
            { letter: "B", text: "keepers wrote their names in a log at the end of each night" },
            { letter: "C", text: "a flashing light was brighter than a steady beam of light" },
            { letter: "D", text: "each lighthouse was named after the engineer who designed it" }
          ],
          correct: "A"
        },
        {
          id: "wasted",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail in sentence 2 about light going into the sky and the ground mainly to —",
          choices: [
            { letter: "A", text: "describe how keepers built fires on the tops of hills" },
            { letter: "B", text: "show that early sailors seldom traveled after dark" },
            { letter: "C", text: "suggest that wood burned more brightly than coal" },
            { letter: "D", text: "explain why so much of a fire's energy was lost" }
          ],
          correct: "D"
        },
        {
          id: "automated",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word automated in sentence 19 begins with the Greek prefix auto-, as do autopilot and autograph. The detail that the lamps switch themselves on helps show that auto- means —",
          choices: [
            { letter: "A", text: "light" },
            { letter: "B", text: "far away" },
            { letter: "C", text: "self" },
            { letter: "D", text: "machine" }
          ],
          correct: "C"
        },
        {
          id: "orders",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the information about lens orders in sentence 12 mainly to show that —",
          choices: [
            { letter: "A", text: "smaller lenses were cheaper because they used less glass" },
            { letter: "B", text: "the size of a lens was matched to how risky a location was" },
            { letter: "C", text: "first-order lenses were too large to install in most towers" },
            { letter: "D", text: "harbors and rivers were more dangerous than open coastlines" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · COUNTY FAIR ───────────────────────── */
    {
      id: "g11-rv-c106-bakingtent",
      family: "G11",
      title: "Listening to the Dough",
      kind: "Vocabulary · 11.RV",
      blurb: "Oskar keeps a careful notebook to beat his neighbor in the county fair bread contest, and the judge's verdict surprises them both.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every August, the baking tent at the Harlan County Fair smelled like butter and nerves. " +
        N(2) + "Oskar Lindqvist had entered the yeast bread division three summers in a row, and three summers in a row he had lost to his next-door neighbor, Mei-Lin Zhou. " +
        N(3) + "Their <strong>rivalry</strong> was famous on Cedar Lane, though it was the friendly kind: they traded recipes, borrowed each other's mixing bowls, and argued for hours about whether rye flour counted as cheating.</p>" +
        "<p>" + N(4) + "This year Oskar was determined. " +
        N(5) + "He kept a <strong>meticulous</strong> notebook, recording the temperature of the kitchen, the exact minutes each dough rose, and the weight of every loaf to the gram. " +
        N(6) + "His sister said that the notebook was more carefully kept than his math homework, and she was right. " +
        N(7) + "He wanted the blue ribbon, the most <strong>coveted</strong> prize in the tent, so badly that he dreamed about it.</p>" +
        "<p>" + N(8) + "On judging morning, the entries sat on a long table under white cloths, each one marked with a number instead of a name. " +
        N(9) + "The judge, a retired baker named Mr. Ferreira, explained that the numbers kept the contest <strong>impartial</strong>; he would not know whose bread he was tasting, so he could not favor a friend or a famous family. " +
        N(10) + "He cut each loaf, studied the crumb, pressed the crust, and tasted slowly, writing notes without a word.</p>" +
        "<p>" + N(11) + "Oskar's braided loaf was beautiful, tall and glossy. " +
        N(12) + "Mei-Lin had entered a plain round loaf that looked almost too simple for a contest, an <strong>unpretentious</strong> brown bread with a dusting of flour on top. " +
        N(13) + "When Mr. Ferreira announced the winners, Oskar's braid took second. " +
        N(14) + "The plain round loaf took first.</p>" +
        "<p>" + N(15) + "For a moment Oskar felt the old sting. " +
        N(16) + "Then he saw Mei-Lin's face, frozen in disbelief, and something in him gave way. " +
        N(17) + "He let out a whoop so loud that people at the pie table turned around, and he lifted her hand into the air like a referee announcing a champion. " +
        N(18) + "His reaction was so <strong>exuberant</strong> that Mr. Ferreira laughed and said he had never seen a second-place finisher celebrate harder than the winner.</p>" +
        "<p>" + N(19) + "Later, the judge stopped by to see the two friends. " +
        N(20) + "\"Your braid was the best-looking bread here,\" he told Oskar. " +
        N(21) + "\"But hers tasted like someone had been listening to the dough instead of the clock.\" " +
        N(22) + "Oskar thought about his notebook, full of numbers and nothing else. " +
        N(23) + "On the walk home, he asked Mei-Lin to teach him how she knew when bread was ready. " +
        N(24) + "She grinned and told him it would cost him one mixing bowl, returned for good this time.</p>",
      claims: [
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word meticulous most nearly means —",
          choices: [
            { letter: "A", text: "extremely careful and precise" },
            { letter: "B", text: "secret and hidden from others" },
            { letter: "C", text: "messy and hard to follow" },
            { letter: "D", text: "new and recently purchased" }
          ],
          correct: "A"
        },
        {
          id: "coveted",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the detail that Oskar dreamed about the blue ribbon helps show that coveted means —",
          choices: [
            { letter: "A", text: "awarded every year" },
            { letter: "B", text: "rarely noticed" },
            { letter: "C", text: "easily earned" },
            { letter: "D", text: "strongly desired" }
          ],
          correct: "D"
        },
        {
          id: "unpretentious",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word unpretentious in sentence 12 adds the prefix un- to pretentious, which describes something trying to seem more impressive than it is. Based on this, an unpretentious loaf is —",
          choices: [
            { letter: "A", text: "carefully decorated" },
            { letter: "B", text: "simple and modest" },
            { letter: "C", text: "poorly baked" },
            { letter: "D", text: "unusually large" }
          ],
          correct: "B"
        },
        {
          id: "impartial",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word impartial in sentence 9 begins with the prefix im-, as do impossible and imperfect. In impartial, the prefix im- signals that the contest is —",
          choices: [
            { letter: "A", text: "open only to experienced bakers" },
            { letter: "B", text: "judged by more than one person" },
            { letter: "C", text: "not tilted toward any one entrant" },
            { letter: "D", text: "held in a place inside the fair" }
          ],
          correct: "C"
        },
        {
          id: "exuberant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on Oskar's whoop in sentence 17, the word exuberant in sentence 18 most nearly means —",
          choices: [
            { letter: "A", text: "jealous and bitter" },
            { letter: "B", text: "polite but forced" },
            { letter: "C", text: "quiet and shy" },
            { letter: "D", text: "joyfully energetic" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the story of the Harlan County Fair bread contest?",
          choices: [
            { letter: "A", text: "Contests are fair only when the judge knows every entrant." },
            { letter: "B", text: "Careful records are the only reliable path to success." },
            { letter: "C", text: "Losing graciously can open the way to learning from a rival." },
            { letter: "D", text: "Old friendships rarely survive years of competition." }
          ],
          correct: "C"
        },
        {
          id: "oskar",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Oskar's request on the walk home in sentence 23 shows that he —",
          choices: [
            { letter: "A", text: "is willing to learn from Mei-Lin instead of resenting her" },
            { letter: "B", text: "plans to copy Mei-Lin's recipe so he can win next year" },
            { letter: "C", text: "believes the judge made a mistake in awarding the ribbon" },
            { letter: "D", text: "has decided to give up baking and focus on his schoolwork" }
          ],
          correct: "A"
        },
        {
          id: "listening",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 21, Mr. Ferreira's remark that Mei-Lin seemed to listen to the dough instead of the clock suggests that she —",
          choices: [
            { letter: "A", text: "forgot to set a timer while her bread was rising" },
            { letter: "B", text: "bakes by close attention rather than strict timing" },
            { letter: "C", text: "prefers to bake late at night when it is quiet" },
            { letter: "D", text: "followed Oskar's notebook more closely than he did" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · SPORTS SCIENCE ───────────────────────── */
    {
      id: "g11-rv-c106-forceplates",
      family: "G11",
      title: "Measuring an Invisible Limp",
      kind: "Vocabulary · 11.RV",
      blurb: "A high school sports medicine class uses force plates to find a hidden imbalance in a cross-country runner's stride.",
      level: 2,
      passage:
        "<p>" + N(1) + "When a runner says her left knee \"just feels off,\" a coach has traditionally had little to go on beyond that description and a hunch. " +
        N(2) + "In the sports medicine lab at Corriveau Regional High School, students are learning to <strong>quantify</strong> what used to be guesswork, turning a vague complaint into numbers that can be measured, compared, and tracked. " +
        N(3) + "Their main tool is a pair of force plates, flat metal platforms set into the floor that record how hard each foot pushes against the ground.</p>" +
        "<p>" + N(4) + "The idea is simple. " +
        N(5) + "A healthy runner usually loads both legs almost equally, so the force recorded under the left foot and the right foot should be close to identical. " +
        N(6) + "A small difference of one or two percent is considered <strong>negligible</strong>, too slight to matter. " +
        N(7) + "A larger gap, however, signals an <strong>asymmetry</strong>, an imbalance in which one side of the body is doing more of the work than the other. " +
        N(8) + "Asymmetries often appear long before an athlete feels real pain, which is what makes them useful as early warnings.</p>" +
        "<p>" + N(9) + "Last spring the class tested the school's cross-country team. " +
        N(10) + "One junior, Rafael Quispe, showed a nine percent gap: his right leg was absorbing far more force than his left. " +
        N(11) + "Rafael had sprained his left ankle the previous winter, and although it had healed, he had unconsciously begun to <strong>compensate</strong> for it, shifting his weight to the right side to protect the injured ankle. " +
        N(12) + "The change was too small to see with the naked eye, and Rafael himself had no idea he was doing it.</p>" +
        "<p>" + N(13) + "Why does a small imbalance matter? " +
        N(14) + "The answer lies in how running stresses the body over time. " +
        N(15) + "A single stride puts a load of two to three times body weight through the leg, and a runner may take more than a thousand strides per mile. " +
        N(16) + "Any one stride does no harm, but the effect is <strong>cumulative</strong>: thousands of slightly uneven strides add up, week after week, until the overworked leg develops shin pain or a stress injury. " +
        N(17) + "Catching the pattern early gives an athlete time to fix it before the damage builds.</p>" +
        "<p>" + N(18) + "With the athletic trainer's help, Rafael began a six-week plan of balance drills and single-leg strength exercises for his left side. " +
        N(19) + "The students retested him every two weeks. " +
        N(20) + "By the end of the season, his gap had fallen to three percent, and he finished the regional meet without the shin soreness that had bothered him the year before. " +
        N(21) + "The students are careful not to claim too much; a force plate cannot predict every injury, and they know one runner's story is not proof. " +
        N(22) + "Still, as their teacher likes to remind them, an athlete cannot fix a problem that nobody has noticed.</p>",
      claims: [
        {
          id: "quantify",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the phrase turning a vague complaint into numbers helps clarify that quantify means to —",
          choices: [
            { letter: "A", text: "ignore a problem" },
            { letter: "B", text: "describe in words" },
            { letter: "C", text: "express in amounts" },
            { letter: "D", text: "treat an injury" }
          ],
          correct: "C"
        },
        {
          id: "asymmetry",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word asymmetry in sentence 7 begins with the prefix a-, as do atypical and apolitical. In these words, the prefix a- signals —",
          choices: [
            { letter: "A", text: "not or without" },
            { letter: "B", text: "toward or near" },
            { letter: "C", text: "again or back" },
            { letter: "D", text: "before or ahead" }
          ],
          correct: "A"
        },
        {
          id: "cumulative",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word cumulative in sentence 16 is related to the word accumulate. Based on this relationship and the context, a cumulative effect is one that —",
          choices: [
            { letter: "A", text: "happens all at once in one stride" },
            { letter: "B", text: "disappears after a night of rest" },
            { letter: "C", text: "affects both legs exactly equally" },
            { letter: "D", text: "builds up gradually over time" }
          ],
          correct: "D"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of the passage about the Corriveau force plates?",
          choices: [
            { letter: "A", text: "Cross-country is more dangerous than most other high school sports." },
            { letter: "B", text: "Measuring force can reveal hidden imbalances before they cause injury." },
            { letter: "C", text: "A sprained ankle always leads to shin pain in the following season." },
            { letter: "D", text: "Students should replace athletic trainers with laboratory equipment." }
          ],
          correct: "B"
        },
        {
          id: "unaware",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence best supports the idea that Rafael did not realize he was favoring one leg?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "A"
        },
        {
          id: "cautious",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "Sentences 21 and 22 show that the author's view of the force-plate testing is best described as —",
          choices: [
            { letter: "A", text: "openly skeptical" },
            { letter: "B", text: "purely technical" },
            { letter: "C", text: "hopeful but careful" },
            { letter: "D", text: "wildly enthusiastic" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the discussion in paragraphs 2 through 5 of the force-plate passage?",
          choices: [
            { letter: "A", text: "by tracing the history of force plates from their invention" },
            { letter: "B", text: "by listing the injuries suffered by each runner on the team" },
            { letter: "C", text: "by debating whether coaches or trainers should run the tests" },
            { letter: "D", text: "by explaining a concept, giving a case, then its result" }
          ],
          correct: "D"
        },
        {
          id: "strides",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "The author includes the figures in sentence 15 about body weight and strides per mile mainly to —",
          choices: [
            { letter: "A", text: "prove that running is unsafe for most teenagers" },
            { letter: "B", text: "show how repetition magnifies a small imbalance" },
            { letter: "C", text: "compare cross-country with sprinting events" },
            { letter: "D", text: "explain how the force plates are calibrated" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS · DANCE COMPETITIONS ───────────────────────── */
    {
      id: "g11-dsr-c106-scoresheet",
      family: "G11",
      title: "Reading the Score Sheet",
      kind: "Paired texts · 11.DSR",
      blurb: "An article explains how dance competition judges score a routine; a dancer's blog explains what her own score sheet finally taught her.",
      level: 2,
      passage:
        "<p><strong>Text 1 — How the Panel Sees a Routine</strong></p>" +
        "<p>" + N(1) + "At most regional dance competitions, a routine lasts less than three minutes, but the score it receives reflects a surprisingly detailed process. " +
        N(2) + "A panel of three judges watches each entry, and each judge scores it independently on a sheet divided into categories. " +
        N(3) + "Technique, which usually counts for the largest share, covers clean turns, controlled landings, pointed feet, and accurate timing. " +
        N(4) + "Performance measures facial expression, energy, and whether the dancers seem to be telling a story rather than merely executing steps. " +
        N(5) + "Choreography rewards creativity and the way movement fits the music, while a smaller category for overall impression lets judges reward a routine that simply works. " +
        N(6) + "The three judges do not confer while they score. " +
        N(7) + "Their totals are averaged, so a single generous or harsh judge cannot decide a result alone. " +
        N(8) + "Many competitions also record brief audio comments from each judge, which studios receive after the event. " +
        N(9) + "Studio directors say these comments are often more valuable than the numbers, because they explain where points were lost and what a dancer might try next. " +
        N(10) + "Judges themselves are usually experienced dancers or teachers, and most competitions forbid them from scoring any routine from a studio where they have taught. " +
        N(11) + "No system eliminates personal taste entirely, and every judge brings a lifetime of preferences to the table. " +
        N(12) + "Still, the use of separate categories, independent scoring, and averaged results is designed to make a subjective art as fair to measure as possible.</p>" +
        "<p><strong>Text 2 — What the Sheet Didn't Say</strong></p>" +
        "<p>" + N(13) + "For my first two years of competing, I read my score sheets the way some people read report cards: top line first, then straight into the trash if the number disappointed me. " +
        N(14) + "I knew technique counted most, so I drilled turns until my knees ached and treated everything else as decoration. " +
        N(15) + "Then, after a regional event last spring, my teacher made me listen to the judges' recorded comments instead of looking at my total. " +
        N(16) + "One judge said my technique was the strongest in the category. " +
        N(17) + "The same judge said she had no idea what my solo was about. " +
        N(18) + "\"You look like you're taking a test,\" she said, and I remember sitting in the car feeling as if someone had read my diary. " +
        N(19) + "She was right. " +
        N(20) + "I had been dancing to collect points, and the points had stopped going up. " +
        N(21) + "This season I spent as much time on the story of my solo as on its steps: who the character was, what she wanted, why she paused before the final leap. " +
        N(22) + "My technique score barely moved. " +
        N(23) + "My performance score jumped by almost a full point, and so did my placement. " +
        N(24) + "I still care about numbers. " +
        N(25) + "But I have learned that a score is a summary, and a summary is only useful if you read what it is summarizing.</p>",
      claims: [
        {
          id: "central1",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of Text 1, the article about the judging panel?",
          choices: [
            { letter: "A", text: "Dance judges are usually former dancers who prefer certain styles." },
            { letter: "B", text: "Technique is the only category that truly decides a dance result." },
            { letter: "C", text: "Judging uses a structured process meant to score dance fairly." },
            { letter: "D", text: "Studios should ignore numerical scores and rely on comments." }
          ],
          correct: "C"
        },
        {
          id: "comments",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about the judges' recorded comments is supported by both texts?",
          choices: [
            { letter: "A", text: "They can tell a dancer more than the total score does." },
            { letter: "B", text: "They are usually harsher than the scores on the sheet." },
            { letter: "C", text: "They are shared only with the dancers who place first." },
            { letter: "D", text: "They reveal which judge gave the lowest total score." }
          ],
          correct: "A"
        },
        {
          id: "technique",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the writer's early approach in sentence 14 of Text 2 relate to the information in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "She ignored the category that Text 1 says counts most." },
            { letter: "B", text: "She learned about technique from the judges in Text 1." },
            { letter: "C", text: "She proved that Text 1 overstates the role of technique." },
            { letter: "D", text: "She focused on the category Text 1 says weighs the most." }
          ],
          correct: "D"
        },
        {
          id: "story",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The change the writer of Text 2 makes in sentence 21 most directly reflects which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the article in Text 1, the blog post in Text 2 has a tone that is more —",
          choices: [
            { letter: "A", text: "neutral and technical" },
            { letter: "B", text: "personal and reflective" },
            { letter: "C", text: "angry and accusing" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "B"
        },
        {
          id: "role",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 presents the judges' audio comments as a helpful resource for studios. Text 2 presents them as —",
          choices: [
            { letter: "A", text: "a source of unfair criticism the writer chose to ignore" },
            { letter: "B", text: "a formality that rarely changes how dancers prepare" },
            { letter: "C", text: "proof that the judges did not watch her solo closely" },
            { letter: "D", text: "a turning point that changed how the writer danced" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A dancer who read both texts about competition scoring could best conclude that —",
          choices: [
            { letter: "A", text: "strong technique matters very little to most judges" },
            { letter: "B", text: "a high score depends mainly on which judges are chosen" },
            { letter: "C", text: "a weak category, once understood, can raise a result" },
            { letter: "D", text: "dancers should stop reading their score sheets entirely" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "In sentence 25, the writer's statement that a score is a summary mainly means that —",
          choices: [
            { letter: "A", text: "a number stands for details a dancer has to look into" },
            { letter: "B", text: "judges should write longer explanations of each score" },
            { letter: "C", text: "a total score is less accurate than a category score" },
            { letter: "D", text: "the writer no longer pays attention to her placement" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS · LIGHTHOUSES ───────────────────────── */
    {
      id: "g11-dsr-c106-gannetrock",
      family: "G11",
      title: "The Future of Gannet Rock",
      kind: "Paired texts · 11.DSR",
      blurb: "A town planning report weighs three options for a retired lighthouse; a retired fisherman answers it in a letter to the editor.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Port Ansel Planning Office: Options for the Gannet Rock Light</strong></p>" +
        "<p>" + N(1) + "The Gannet Rock Light has not been staffed since its beacon was automated, and the agency that owns it has announced that the tower and keeper's house will be transferred or sold within two years. " +
        N(2) + "The town has three realistic options. " +
        N(3) + "First, Port Ansel could take ownership and operate the site as a public museum. " +
        N(4) + "Engineers estimate that repairs to the tower's masonry and the keeper's house would cost about $1.4 million, with upkeep of roughly $60,000 a year after that. " +
        N(5) + "Ticket sales at comparable sites cover only a portion of such costs. " +
        N(6) + "Second, the town could support a lease to the Gannet Rock Preservation Trust, a volunteer nonprofit that would raise repair funds through grants and donations. " +
        N(7) + "The Trust has enthusiasm but no track record of managing a project this size. " +
        N(8) + "Third, the property could be sold at auction to a private buyer, most likely for use as a vacation home. " +
        N(9) + "A sale would bring in revenue and relieve the town of all repair costs, but deed restrictions would be needed to guarantee public access to the grounds, and such restrictions are difficult to enforce. " +
        N(10) + "Staff recommend that the council pursue the second option while setting a deadline: if the Trust has not raised half the repair costs within three years, the town would reconsider a sale. " +
        N(11) + "This approach keeps the site public in the near term without committing town funds to an open-ended obligation.</p>" +
        "<p><strong>Text 2 — Letter to the Editor: Don't Auction Off the Point</strong></p>" +
        "<p>" + N(12) + "I fished out of Port Ansel for thirty-eight years, and on more nights than I can count, the light on Gannet Rock was the first thing I saw that told me I was nearly home. " +
        N(13) + "So I read the planning office's report with interest, and I want to thank its authors for laying out the numbers honestly. " +
        N(14) + "But I think the report treats the lighthouse as a building problem when it is really a question about what kind of town we are. " +
        N(15) + "The report calls public access \"difficult to enforce\" under a private sale. " +
        N(16) + "I would put it more bluntly: once a gate goes up, it stays up. " +
        N(17) + "Families who have picnicked on that point for generations would become trespassers. " +
        N(18) + "As for the Trust, the report is right that it has no track record, but every organization starts without one. " +
        N(19) + "I went to the Trust's first meeting last month, and forty-two people came on a rainy Tuesday. " +
        N(20) + "That is not a budget, but it is a beginning. " +
        N(21) + "I support the staff recommendation, with one change. " +
        N(22) + "Instead of a deadline that ends in an auction, the council should commit now that the point will stay public, and then work with the Trust to find the money. " +
        N(23) + "A lighthouse is supposed to tell people where home is. " +
        N(24) + "We should not sell the one that told me.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about the Gannet Rock Light is supported by both texts?",
          choices: [
            { letter: "A", text: "The town should operate the site as a public museum." },
            { letter: "B", text: "A private sale could put public access to the point at risk." },
            { letter: "C", text: "The Trust has already raised enough money for repairs." },
            { letter: "D", text: "Ticket sales would fully cover the lighthouse's upkeep." }
          ],
          correct: "B"
        },
        {
          id: "disagree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "On which point do the planning report and the letter most clearly disagree?",
          choices: [
            { letter: "A", text: "whether the Trust should be given a role in the site's future" },
            { letter: "B", text: "whether the repair estimates in the report are accurate" },
            { letter: "C", text: "whether the lighthouse beacon should remain automated" },
            { letter: "D", text: "whether a sale should stay possible if fundraising falls short" }
          ],
          correct: "D"
        },
        {
          id: "meeting",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 responds most directly to the concern about the Trust raised in sentence 7 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "A"
        },
        {
          id: "gate",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 calls public access under a sale difficult to enforce (sentence 9). Compared with that wording, the letter's restatement in sentence 16 is —",
          choices: [
            { letter: "A", text: "more cautious and technical" },
            { letter: "B", text: "more hopeful about a buyer" },
            { letter: "C", text: "more blunt and certain" },
            { letter: "D", text: "more favorable to a sale" }
          ],
          correct: "C"
        },
        {
          id: "appeals",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the planning report, the fisherman's letter relies more heavily on —",
          choices: [
            { letter: "A", text: "personal experience and the town's sense of itself" },
            { letter: "B", text: "repair estimates and figures from other sites" },
            { letter: "C", text: "the legal details of deed restrictions" },
            { letter: "D", text: "comparisons with lighthouses in other towns" }
          ],
          correct: "A"
        },
        {
          id: "council",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A council member who read both texts about Gannet Rock could best conclude that the letter writer —",
          choices: [
            { letter: "A", text: "rejects the report's facts and wants a new study done" },
            { letter: "B", text: "wants the town to take full ownership of the site at once" },
            { letter: "C", text: "believes a private buyer would care for the tower best" },
            { letter: "D", text: "accepts the report's facts but weighs the town's values more" }
          ],
          correct: "D"
        },
        {
          id: "town",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 14, the letter writer contrasts a building problem with a question about what kind of town we are mainly to —",
          choices: [
            { letter: "A", text: "argue that the repair estimates are much too high" },
            { letter: "B", text: "suggest that the keeper's house should be torn down" },
            { letter: "C", text: "shift the debate from cost toward community values" },
            { letter: "D", text: "criticize the planning office for hiding information" }
          ],
          correct: "C"
        },
        {
          id: "openended",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 11, the contrast with the deadline described in sentence 10 helps show that an open-ended obligation is one that —",
          choices: [
            { letter: "A", text: "is shared equally with the Trust" },
            { letter: "B", text: "has no set limit or end point" },
            { letter: "C", text: "must be approved by the voters" },
            { letter: "D", text: "can be canceled at any time" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── POETRY · COUNTY FAIR ───────────────────────── */
    {
      id: "g11-rl-c106-lastride",
      family: "G11",
      title: "Last Ride, Closing Night",
      kind: "Poetry · 11.RL",
      blurb: "On the fair's final night, a speaker and her younger brother pause at the top of the Ferris wheel above their whole small county.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The fair is folding up its loud gold edges:<br>" +
        L(2) + "the cotton candy man unplugs his cloud,<br>" +
        L(3) + "the goats are counted back into their trailers,<br>" +
        L(4) + "the barker at the ring toss lowers his voice.<br>" +
        L(5) + "My brother, nine, insists on one more ride,<br>" +
        L(6) + "and the operator, tired as a Sunday,<br>" +
        L(7) + "waves us into a car that smells of rain<br>" +
        L(8) + "and rocks us up into the cooling dark.</p>" +
        "<p class=\"poem\">" +
        L(9) + "At the top the wheel pauses, as wheels do,<br>" +
        L(10) + "to let the next car load, and we hang there<br>" +
        L(11) + "above the whole small county like a question.<br>" +
        L(12) + "There is the feed store. There, the water tower<br>" +
        L(13) + "with our class year painted on it, fading.<br>" +
        L(14) + "There is our street, which from the ground is long<br>" +
        L(15) + "and full of dogs that bark at everyone;<br>" +
        L(16) + "from here it is a thread I could pick up.</p>" +
        "<p class=\"poem\">" +
        L(17) + "My brother names each light he recognizes,<br>" +
        L(18) + "as if the town were his and needed counting.<br>" +
        L(19) + "I let him. I am counting something too:<br>" +
        L(20) + "how few the summers are that he will want<br>" +
        L(21) + "to ride with me, how soon he'll say I'm boring.<br>" +
        L(22) + "Then the gears catch. The wheel remembers us.<br>" +
        L(23) + "We sink back through the music's last few bars<br>" +
        L(24) + "into the trampled grass, the ordinary ground.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Last Ride, Closing Night\"?",
          choices: [
            { letter: "A", text: "Small towns offer young people too little to do in summer." },
            { letter: "B", text: "Fairs are more exciting for children than for teenagers." },
            { letter: "C", text: "Older siblings should protect younger ones from their fears." },
            { letter: "D", text: "A brief pause above daily life can show how fleeting it is." }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The details of the fair shutting down in lines 1–4 mainly serve to —",
          choices: [
            { letter: "A", text: "set a mood of endings that the rest of the poem develops" },
            { letter: "B", text: "show that the speaker is eager for the fair to be over" },
            { letter: "C", text: "explain why the operator is reluctant to run the wheel" },
            { letter: "D", text: "describe the speaker's summer job at the county fair" }
          ],
          correct: "A"
        },
        {
          id: "counting",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In lines 19–21, the speaker's private counting reveals that she —",
          choices: [
            { letter: "A", text: "is annoyed that her brother keeps naming the lights" },
            { letter: "B", text: "wants to leave the fair before the music ends" },
            { letter: "C", text: "senses that this closeness with her brother won't last" },
            { letter: "D", text: "is trying to remember how many rides she has taken" }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 11, the simile comparing the riders hanging above the county to a question suggests that the moment feels —",
          choices: [
            { letter: "A", text: "dangerous and frightening" },
            { letter: "B", text: "suspended and unresolved" },
            { letter: "C", text: "noisy and crowded" },
            { letter: "D", text: "dull and repetitive" }
          ],
          correct: "B"
        },
        {
          id: "remembers",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In line 22, the personification in The wheel remembers us mainly creates the sense that —",
          choices: [
            { letter: "A", text: "the paused moment has ended and time is moving again" },
            { letter: "B", text: "the operator has forgotten the riders at the top" },
            { letter: "C", text: "the speaker has ridden this wheel many times before" },
            { letter: "D", text: "the wheel is old and likely to break down soon" }
          ],
          correct: "A"
        },
        {
          id: "thread",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 16, describing the street as a thread I could pick up suggests that from the top the speaker sees her street as —",
          choices: [
            { letter: "A", text: "tangled and confusing" },
            { letter: "B", text: "far longer than she knew" },
            { letter: "C", text: "loud and unwelcoming" },
            { letter: "D", text: "small and easy to hold" }
          ],
          correct: "D"
        },
        {
          id: "movement",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the poem's movement from the ground, up to the top, and back down to the ground shape its meaning?",
          choices: [
            { letter: "A", text: "It shows the speaker's fear growing as the ride goes on." },
            { letter: "B", text: "It mirrors a short escape that returns her with new eyes." },
            { letter: "C", text: "It compares the speaker's town to the towns nearby." },
            { letter: "D", text: "It traces the history of the fair across many summers." }
          ],
          correct: "B"
        },
        {
          id: "trampled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In line 24, the word trampled most nearly means —",
          choices: [
            { letter: "A", text: "freshly mowed" },
            { letter: "B", text: "wet with dew" },
            { letter: "C", text: "flattened by feet" },
            { letter: "D", text: "newly planted" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── DRAMA · DANCE COMPETITION ───────────────────────── */
    {
      id: "g11-rl-c106-luckyshoes",
      family: "G11",
      title: "On Deck",
      kind: "Drama · 11.RL",
      blurb: "Minutes before her first dance competition, Junie has only one shoe, and her team captain has a spare pair with a history.",
      level: 1,
      passage:
        "<p><em>Backstage at the Tri-County Dance Classic. A narrow hallway lined with garment racks. Music thumps faintly through the wall. JUNIE, thirteen, sits on a costume trunk holding one jazz shoe. DEVI, seventeen, the team captain, enters in full costume, stretching her arms.</em></p>" +
        "<p><strong>DEVI:</strong> " + N(1) + "Junie, we're on in six numbers, so why are you sitting down?</p>" +
        "<p><strong>JUNIE:</strong> <em>(holding up the shoe)</em> " + N(2) + "Because I have one shoe, and the other one is somewhere between the bus and here, and I've looked everywhere twice.</p>" +
        "<p><strong>DEVI:</strong> " + N(3) + "Did you check the bottom of your dance bag, under the hairspray?</p>" +
        "<p><strong>JUNIE:</strong> " + N(4) + "I checked under everything, and I even checked under Mateo, and he was not happy about it.</p>" +
        "<p><strong>DEVI:</strong> <em>(laughing, then serious)</em> " + N(5) + "Okay, breathe. What size are you?</p>" +
        "<p><strong>JUNIE:</strong> " + N(6) + "Six. Why?</p>" +
        "<p><em>DEVI kneels by her own bag and pulls out a worn pair of jazz shoes, scuffed at the toes.</em></p>" +
        "<p><strong>DEVI:</strong> " + N(7) + "These are six and a half, and they were my first competition shoes; I keep them in my bag for luck, which is a little embarrassing to admit.</p>" +
        "<p><strong>JUNIE:</strong> " + N(8) + "I can't wear your lucky shoes. What if I mess up in them?</p>" +
        "<p><strong>DEVI:</strong> " + N(9) + "Then they'll have been on the feet of somebody brave enough to go out there anyway, and that's what they're for.</p>" +
        "<p><em>JUNIE slowly takes the shoes. MR. OYELARAN, the studio director, enters with a clipboard.</em></p>" +
        "<p><strong>MR. OYELARAN:</strong> " + N(10) + "Ladies, four numbers out. Junie, why do you look like you swallowed a lemon?</p>" +
        "<p><strong>JUNIE:</strong> " + N(11) + "I lost a shoe, and Devi is lending me hers, and they're too big, and I'm going to slide right off the stage like a hockey puck.</p>" +
        "<p><strong>MR. OYELARAN:</strong> " + N(12) + "Half a size? Stuff a tissue in the toe; dancers have survived worse. <em>(to DEVI)</em> And you, Captain, you're giving away your spares now?</p>" +
        "<p><strong>DEVI:</strong> " + N(13) + "She needed them more than my bag did.</p>" +
        "<p><strong>MR. OYELARAN:</strong> <em>(pausing, softer)</em> " + N(14) + "When you were thirteen, you cried for twenty minutes because your hair ribbon was the wrong shade of blue.</p>" +
        "<p><strong>DEVI:</strong> " + N(15) + "I remember, and you told me nobody in the audience owned a color chart.</p>" +
        "<p><strong>MR. OYELARAN:</strong> " + N(16) + "I did, and apparently you were listening.</p>" +
        "<p><em>He exits. JUNIE laces the shoes, stands, and tests a small turn. She wobbles, then steadies.</em></p>" +
        "<p><strong>JUNIE:</strong> " + N(17) + "They're a little loose.</p>" +
        "<p><strong>DEVI:</strong> " + N(18) + "So was I, my first time, but you tighten up once the music starts.</p>" +
        "<p><strong>STAGE MANAGER:</strong> <em>(offstage)</em> " + N(19) + "Oyelaran Studio, you're on deck, so line up at the curtain!</p>" +
        "<p><strong>JUNIE:</strong> " + N(20) + "Devi? If I fall, will you pretend it was choreography?</p>" +
        "<p><strong>DEVI:</strong> <em>(holding out her hand)</em> " + N(21) + "If you fall, I'll fall right next to you, and the judges will think we planned it.</p>" +
        "<p><em>They exit together toward the light at the end of the hallway.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the backstage scene at the Tri-County Dance Classic most clearly develop?",
          choices: [
            { letter: "A", text: "Good luck charms matter more than hours of practice." },
            { letter: "B", text: "Encouragement passed down helps newcomers find courage." },
            { letter: "C", text: "Young dancers should not compete until they are older." },
            { letter: "D", text: "Directors should be strict with dancers before a show." }
          ],
          correct: "B"
        },
        {
          id: "lend",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Devi's decision in sentences 7 and 9 to lend Junie her old shoes shows that Devi —",
          choices: [
            { letter: "A", text: "no longer believes in luck now that she is the captain" },
            { letter: "B", text: "wants Mr. Oyelaran to notice her and praise her later" },
            { letter: "C", text: "thinks Junie is not ready to dance in the competition" },
            { letter: "D", text: "values a teammate's courage more than her own charm" }
          ],
          correct: "D"
        },
        {
          id: "ribbon",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Mr. Oyelaran's memory in sentence 14 is important to the scene mainly because it —",
          choices: [
            { letter: "A", text: "shows Devi was once as anxious as Junie is now" },
            { letter: "B", text: "explains why the studio's costumes are all blue" },
            { letter: "C", text: "reveals that Devi has never liked competing" },
            { letter: "D", text: "proves that Mr. Oyelaran is a forgetful director" }
          ],
          correct: "A"
        },
        {
          id: "puck",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 11, Junie's comparison of herself to a hockey puck mainly conveys her —",
          choices: [
            { letter: "A", text: "excitement about trying a new sport" },
            { letter: "B", text: "anger at Devi for offering the shoes" },
            { letter: "C", text: "exaggerated fear of sliding out of control" },
            { letter: "D", text: "belief that the stage floor is unsafe" }
          ],
          correct: "C"
        },
        {
          id: "colorchart",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The exchange between Devi and Mr. Oyelaran in sentences 15 and 16 creates a tone that is —",
          choices: [
            { letter: "A", text: "tense and suspicious" },
            { letter: "B", text: "formal and distant" },
            { letter: "C", text: "gently affectionate" },
            { letter: "D", text: "loud and boastful" }
          ],
          correct: "C"
        },
        {
          id: "loose",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentences 17 and 18, Devi's reply So was I plays on the word loose to suggest that at her first competition she was —",
          choices: [
            { letter: "A", text: "shaky and unsettled" },
            { letter: "B", text: "relaxed and carefree" },
            { letter: "C", text: "wearing the wrong size" },
            { letter: "D", text: "late to the stage" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "How do Devi's last line (sentence 21) and the final stage direction resolve the scene?",
          choices: [
            { letter: "A", text: "Junie finds her missing shoe just before the music starts." },
            { letter: "B", text: "Devi decides to perform the routine alone in Junie's place." },
            { letter: "C", text: "Mr. Oyelaran returns to calm Junie's fear of the judges." },
            { letter: "D", text: "Junie's fear is not erased, but she goes on with support." }
          ],
          correct: "D"
        },
        {
          id: "ondeck",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 19, the stage manager's call to line up at the curtain shows that on deck means —",
          choices: [
            { letter: "A", text: "finished for the day" },
            { letter: "B", text: "next in line to perform" },
            { letter: "C", text: "waiting for the results" },
            { letter: "D", text: "allowed to rest outside" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── FUNCTIONAL TEXT · COUNTY FAIR ───────────────────────── */
    {
      id: "g11-ri-c106-barnrules",
      family: "G11",
      title: "Junior Exhibitor Guide",
      kind: "Functional text · 11.RI",
      blurb: "The Marrow Creek County Fair's rules for young exhibitors in the livestock barns, from check-in to release day.",
      level: 1,
      passage:
        "<p><strong>Marrow Creek County Fair — Junior Exhibitor Guide: Livestock Barns</strong></p>" +
        "<p>" + N(1) + "Welcome, junior exhibitors! " +
        N(2) + "This guide explains the rules that keep animals, exhibitors, and visitors safe during fair week, July 14–20. " +
        N(3) + "Exhibitors ages 9 through 18 must read it with a parent or guardian and return the signed acknowledgment form by June 30.</p>" +
        "<p><strong>Arrival and Check-In</strong> " + N(4) + "Animals may arrive at the livestock barns between 7:00 a.m. and 6:00 p.m. on Sunday, July 14. " +
        N(5) + "Every animal must pass a health check by the fair veterinarian before it is unloaded from the trailer. " +
        N(6) + "Bring the animal's health certificate, dated within 30 days of arrival; animals without a current certificate will not be admitted under any circumstances.</p>" +
        "<p><strong>Stall Care</strong> " + N(7) + "Exhibitors are responsible for cleaning their stalls by 8:00 a.m. each morning and keeping aisles clear at all times. " +
        N(8) + "Fresh bedding is available at the straw shed for $6 a bale. " +
        N(9) + "Water buckets must be checked at least three times a day. " +
        N(10) + "Barn superintendents walk the aisles each morning, and a stall that is not clean will receive a warning; a second warning means the exhibitor loses eligibility for the Herdsmanship Award, which honors the cleanest and best-organized display in each barn.</p>" +
        "<p><strong>Visitor Safety</strong> " + N(11) + "Thousands of visitors, many of them young children, walk through the barns each day. " +
        N(12) + "Keep animals securely tied or penned when you are not working with them. " +
        N(13) + "Post the fair's orange \"Ask Before You Pet\" card on every stall. " +
        N(14) + "If a visitor is bitten, kicked, or knocked down, report it to the barn office immediately, even if no one seems hurt.</p>" +
        "<p><strong>Show Day</strong> " + N(15) + "Show schedules are posted on the board outside each barn by 5:00 p.m. the evening before. " +
        N(16) + "Exhibitors must be at the ring gate, in a white shirt and dark pants, when the class before theirs enters the ring. " +
        N(17) + "Exhibitors who are not present when their class is called will be scratched, which means removed from the class with no chance to show later.</p>" +
        "<p><strong>Release</strong> " + N(18) + "No animal may leave the grounds before 4:00 p.m. on Saturday, July 20, except in a veterinary emergency approved by the fair veterinarian. " +
        N(19) + "Early release disrupts the barns and disappoints visitors who come on the last day hoping to see the animals. " +
        N(20) + "Exhibitors who remove an animal early without approval will lose all premium money earned that week. " +
        N(21) + "Questions? " +
        N(22) + "Stop by the barn office, open daily from 6:00 a.m. to 9:00 p.m., or call the youth livestock coordinator at the number printed on your exhibitor badge.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of the Marrow Creek junior exhibitor guide is to —",
          choices: [
            { letter: "A", text: "persuade families to enter animals in the county fair" },
            { letter: "B", text: "describe the history of the fair's livestock barns" },
            { letter: "C", text: "inform young exhibitors of the rules for fair week" },
            { letter: "D", text: "explain how judges choose winners in each class" }
          ],
          correct: "C"
        },
        {
          id: "unload",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, what must happen before an animal is unloaded from its trailer?",
          choices: [
            { letter: "A", text: "It must pass a health check by the fair veterinarian." },
            { letter: "B", text: "Its stall must be inspected by a barn superintendent." },
            { letter: "C", text: "Its owner must buy fresh bedding at the straw shed." },
            { letter: "D", text: "Its exhibitor must sign up for a show day class." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the livestock barn guide help the reader mainly by —",
          choices: [
            { letter: "A", text: "showing which rules matter more than the others" },
            { letter: "B", text: "grouping the rules by topic so they are easy to find" },
            { letter: "C", text: "listing the names of the fair officials in charge" },
            { letter: "D", text: "separating the rules for adults from those for youth" }
          ],
          correct: "B"
        },
        {
          id: "strict",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence in the guide makes clear that the health certificate rule will be enforced strictly?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Details such as sentence 3 show that the intended audience for the guide is mainly —",
          choices: [
            { letter: "A", text: "young exhibitors and their parents" },
            { letter: "B", text: "visitors bringing small children" },
            { letter: "C", text: "veterinarians working at the fair" },
            { letter: "D", text: "judges hired for the show ring" }
          ],
          correct: "A"
        },
        {
          id: "release",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 19 serves mainly to —",
          choices: [
            { letter: "A", text: "describe what visitors can do on the fair's last day" },
            { letter: "B", text: "warn exhibitors about the penalty for leaving early" },
            { letter: "C", text: "give the reason behind the rule about early release" },
            { letter: "D", text: "list the emergencies that allow an animal to leave" }
          ],
          correct: "C"
        },
        {
          id: "scratched",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 17, the explanation that follows the word which shows that scratched means —",
          choices: [
            { letter: "A", text: "injured by an animal" },
            { letter: "B", text: "removed from a class" },
            { letter: "C", text: "moved to a later time" },
            { letter: "D", text: "given a lower score" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The sections of the guide are arranged mainly —",
          choices: [
            { letter: "A", text: "from the most important rule to the least important" },
            { letter: "B", text: "in alphabetical order by the name of each barn" },
            { letter: "C", text: "by the age group of the exhibitors they apply to" },
            { letter: "D", text: "roughly in the order of fair week, arrival to release" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT · SPORTS SCIENCE ───────────────────────── */
    {
      id: "g11-ri-c106-sensors",
      family: "G11",
      title: "Before We Strap On the Sensors",
      kind: "Argument · 11.RI",
      blurb: "A student athlete supports her school's plan for wearable training sensors, but argues the district must first decide who owns the data.",
      level: 3,
      passage:
        "<p>" + N(1) + "Next fall, our athletic department plans to give every varsity athlete a wearable sensor, a small device worn in a chest strap or vest that records heart rate, distance, sprint speed, and a \"training load\" score after every practice. " +
        N(2) + "The plan has been presented as a gift: professional teams use these tools, and now we can too. " +
        N(3) + "I play soccer, I like data, and I think the sensors could help us. " +
        N(4) + "But before the district signs a three-year contract, it should answer a question the proposal barely mentions: who will own the numbers?</p>" +
        "<p>" + N(5) + "The benefits are real. " +
        N(6) + "A training-load score can warn a coach when an athlete has been pushed too hard for too many days in a row, which is exactly when overuse injuries tend to appear. " +
        N(7) + "Last season, four players on our team missed games with stress-related injuries, and none of us saw them coming. " +
        N(8) + "A sensor would not have prevented every one, but it might have flagged a pattern before it became a problem. " +
        N(9) + "I am not arguing against measurement.</p>" +
        "<p>" + N(10) + "I am arguing against measurement without rules. " +
        N(11) + "Under the current proposal, data from the sensors would be stored by the company that makes them, and coaches would have full access. " +
        N(12) + "Athletes would not. " +
        N(13) + "Nothing in the contract says how long the data will be kept, whether it could be shared with college recruiters, or whether a low score could affect playing time. " +
        N(14) + "A heart-rate chart is not just a number; it can reveal when a student is sick, exhausted, or anxious. " +
        N(15) + "Information that personal deserves the same care we give medical records, not the care we give a stopwatch.</p>" +
        "<p>" + N(16) + "Some will say that athletes already accept being watched. " +
        N(17) + "Coaches time our sprints and track our attendance, and nobody calls that a privacy problem. " +
        N(18) + "The difference is scale. " +
        N(19) + "A stopwatch measures one race; a sensor measures a body every minute it is worn, and a computer can combine those minutes into a profile no coach could build by eye. " +
        N(20) + "A tool that powerful needs limits written down before it arrives, not after something goes wrong.</p>" +
        "<p>" + N(21) + "The fix is not complicated. " +
        N(22) + "The district should adopt a short policy before the contract is signed. " +
        N(23) + "Athletes and parents should be able to see every number collected about them. " +
        N(24) + "Data should be deleted when an athlete graduates or leaves the team. " +
        N(25) + "And no information should be shared outside the school without written permission. " +
        N(26) + "Other districts have written policies like this on a single page.</p>" +
        "<p>" + N(27) + "Sports science can make us faster and keep us healthier. " +
        N(28) + "But a team that wants athletes to trust their bodies should also give them reason to trust what happens to the data their bodies produce.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The central claim of the argument about wearable sensors is that the district should —",
          choices: [
            { letter: "A", text: "cancel the sensor plan because it costs too much" },
            { letter: "B", text: "give sensors only to athletes who have been injured" },
            { letter: "C", text: "let each coach decide how to use the sensor data" },
            { letter: "D", text: "set clear rules for athletes' data before buying" }
          ],
          correct: "D"
        },
        {
          id: "benefit",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which evidence does the soccer player offer to show that the sensors could be useful?",
          choices: [
            { letter: "A", text: "Professional teams have stopped using older tools." },
            { letter: "B", text: "Four teammates missed games with unforeseen injuries." },
            { letter: "C", text: "Coaches already time sprints and track attendance." },
            { letter: "D", text: "Other districts have written one-page data policies." }
          ],
          correct: "B"
        },
        {
          id: "credibility",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The writer's statement in sentence 3 that she plays soccer and likes data mainly helps establish that she —",
          choices: [
            { letter: "A", text: "does not oppose the technology itself" },
            { letter: "B", text: "is the best player on the varsity team" },
            { letter: "C", text: "plans to study sports science in college" },
            { letter: "D", text: "has already tested a sensor at practice" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer organize paragraphs 2 through 5 of the sensor argument?",
          choices: [
            { letter: "A", text: "She tells a story about one practice from the warm-up to the final whistle." },
            { letter: "B", text: "She compares three brands of sensors and then ranks them from best to worst." },
            { letter: "C", text: "She grants benefits, raises a concern, rebuts an objection, then offers a fix." },
            { letter: "D", text: "She lists her own injuries and then the injuries of teammates in order." }
          ],
          correct: "C"
        },
        {
          id: "stopwatch",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 15, contrasting medical records with a stopwatch mainly emphasizes that the sensor data —",
          choices: [
            { letter: "A", text: "is less accurate than timing done by hand" },
            { letter: "B", text: "should be collected only during real games" },
            { letter: "C", text: "is sensitive enough to need real protection" },
            { letter: "D", text: "would be too expensive for the school to store" }
          ],
          correct: "C"
        },
        {
          id: "onepage",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Sentence 26, about other districts' one-page policies, is included mainly to —",
          choices: [
            { letter: "A", text: "show that the proposed policy is practical" },
            { letter: "B", text: "suggest that the district copy another school" },
            { letter: "C", text: "criticize other districts for writing too little" },
            { letter: "D", text: "prove that sensors are popular in other towns" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 18, the word scale most nearly refers to —",
          choices: [
            { letter: "A", text: "a device for weighing athletes" },
            { letter: "B", text: "a ranking of players by skill" },
            { letter: "C", text: "a series of musical notes" },
            { letter: "D", text: "the size and extent of something" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from the sensor argument expresses an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Four players on our team missed games last season." },
            { letter: "B", text: "Information that personal deserves the care we give medical records." },
            { letter: "C", text: "Under the proposal, the company that makes the sensors would store the data." },
            { letter: "D", text: "Coaches time our sprints and track our attendance." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
