/* SOL Labyrinth — Grade 11 long packs (v5.15 expansion, content109): a woodworking shop, the history of maps,
 * a debate team and clock and watch repair. 12 packs x 8 questions, 390-520 words (paired texts 200-260 each,
 * poem 22-28 lines). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── 1 · LITERARY · woodworking ───────────────────────── */
    {
      id: "g11-rl-c109-practice-joint",
      family: "G11",
      title: "The Practice Joint",
      kind: "Literary · 11.RL",
      blurb: "A Saturday job, a birthday deadline, and a drawer full of someone else's early mistakes.",
      level: 2,
      passage:
        "<p>" + N(1) + "The first thing Anjali Rao noticed about Mr. Lindqvist's shop was that nothing in it was new. " +
        N(2) + "The workbench was scarred with a thousand shallow cuts, the chisels had handles darkened by decades of palms, and even the sawdust on the floor seemed to have settled there long before she arrived. " +
        N(3) + "She had taken the Saturday job sweeping up because she wanted to build a jewelry box for her mother's fiftieth birthday, and she had told him so on her first morning. " +
        N(4) + "\"With dovetails,\" she added, pointing to a photograph on the wall of a chest whose corners locked together like clasped fingers.</p>" +
        "<p>" + N(5) + "Mr. Lindqvist looked at the photograph, then at her, and handed her a broom. " +
        N(6) + "\"Dovetails,\" he said, \"are a conversation between two boards. " +
        N(7) + "First you learn to listen.\"</p>" +
        "<p>" + N(8) + "For three weeks she listened, or tried to. " +
        N(9) + "He gave her scraps of cheap pine and had her saw a single straight line, again and again, until the cut ran true to a pencil mark. " +
        N(10) + "Then he had her chop small notches with a chisel, paring away curls of wood no thicker than paper. " +
        N(11) + "Her first practice joint slid together with gaps wide enough to hold a coin. " +
        N(12) + "Her second wobbled. " +
        N(13) + "By the fourth, she had begun to suspect that the job was a polite way of keeping her away from the good walnut stacked in the corner.</p>" +
        "<p>" + N(14) + "\"My mother's birthday is in five weeks,\" she reminded him one afternoon, more sharply than she intended. " +
        N(15) + "\"I don't have time to build a hundred joints nobody will ever see.\" " +
        N(16) + "Mr. Lindqvist did not argue. " +
        N(17) + "He only nodded toward a low drawer beneath the bench and went back to sharpening a plane iron.</p>" +
        "<p>" + N(18) + "Inside the drawer were dozens of pine joints, gray with age, each labeled in faded pencil with a year. " +
        N(19) + "The oldest ones were worse than hers: crooked, split, glued shut in desperation. " +
        N(20) + "Year by year, the gaps narrowed, until the joints at the very back fit so tightly that she could barely see where one board ended and the other began. " +
        N(21) + "She held the worst one for a long time. " +
        N(22) + "It was labeled 1971, the year he had been her age.</p>" +
        "<p>" + N(23) + "She did not complain again. " +
        N(24) + "She cut nine more practice joints, and after the tenth Mr. Lindqvist finally brought down a board of walnut and laid it on her bench without a word.</p>" +
        "<p>" + N(25) + "The finished box was not perfect. " +
        N(26) + "At one back corner, a hairline gap showed where her chisel had slipped. " +
        N(27) + "She asked whether she should fill it with putty and sawdust so no one would notice. " +
        N(28) + "Mr. Lindqvist ran his thumb across the corner and shook his head. " +
        N(29) + "\"Leave it,\" he said. " +
        N(30) + "\"That one's yours.\"</p>" +
        "<p>" + N(31) + "On her mother's birthday, Anjali watched her open the lid, lift out the tissue paper, and turn the box slowly in the lamplight. " +
        N(32) + "Her mother's thumb found the gap almost at once, and stayed there. " +
        N(33) + "Anjali did not explain it. " +
        N(34) + "That evening, she wrapped her ten pine joints in a dish towel and carried them home, and on the smallest one she wrote the year in pencil.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Anjali's experience in Mr. Lindqvist's shop most clearly develop?",
          choices: [
            { letter: "A", text: "Skill in a craft depends mostly on owning expensive tools." },
            { letter: "B", text: "Real skill grows through patient practice that leaves visible flaws." },
            { letter: "C", text: "Older workers seldom share what they know with beginners." },
            { letter: "D", text: "Gifts made by hand matter less than gifts chosen with care." }
          ],
          correct: "B"
        },
        {
          id: "complaint",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Anjali's complaint in sentences 14 and 15 reveals that at this point in the story she —",
          choices: [
            { letter: "A", text: "distrusts Mr. Lindqvist's skill as a woodworker" },
            { letter: "B", text: "wishes she had chosen a simpler gift for her mother" },
            { letter: "C", text: "believes the walnut in the corner costs too much" },
            { letter: "D", text: "values the finished gift more than the learning behind it" }
          ],
          correct: "D"
        },
        {
          id: "conversation",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 6, Mr. Lindqvist's description of dovetails as a conversation between two boards suggests that a good joint —",
          choices: [
            { letter: "A", text: "depends on each part being shaped to fit the other" },
            { letter: "B", text: "requires two woodworkers to cut it together" },
            { letter: "C", text: "must be explained carefully to every customer" },
            { letter: "D", text: "makes a sound when the boards are pushed together" }
          ],
          correct: "A"
        },
        {
          id: "drawer",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The drawer of old pine joints described in sentences 18–22 mainly serves to —",
          choices: [
            { letter: "A", text: "show that Mr. Lindqvist has stopped practicing his craft" },
            { letter: "B", text: "prove that pine is a poor wood for fine furniture" },
            { letter: "C", text: "let Anjali see her struggle as part of a longer path" },
            { letter: "D", text: "explain why the shop has no new tools or benches" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final paragraph (sentences 31–34) resolve the story of Anjali's jewelry box?",
          choices: [
            { letter: "A", text: "Anjali decides to quit the shop now that the box is done." },
            { letter: "B", text: "Anjali hides the flaw from her mother out of embarrassment." },
            { letter: "C", text: "Anjali begins her own record of growth, as her teacher did." },
            { letter: "D", text: "Anjali's mother asks her to repair the gap in the corner." }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The narrator's description of the shop in sentences 1 and 2 creates a mood of —",
          choices: [
            { letter: "A", text: "long, steady use and quiet history" },
            { letter: "B", text: "neglect and disorder that worry Anjali" },
            { letter: "C", text: "noisy, crowded activity on a Saturday" },
            { letter: "D", text: "danger from sharp tools left lying about" }
          ],
          correct: "A"
        },
        {
          id: "paring",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 10, the word paring most nearly means —",
          choices: [
            { letter: "A", text: "matching pieces in sets of two" },
            { letter: "B", text: "pounding hard with a mallet" },
            { letter: "C", text: "sanding until the surface shines" },
            { letter: "D", text: "trimming off thin layers" }
          ],
          correct: "D"
        },
        {
          id: "desperation",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 19, the phrase glued shut in desperation suggests that the young Mr. Lindqvist —",
          choices: [
            { letter: "A", text: "preferred glue to nails in all of his work" },
            { letter: "B", text: "forced together joints he could not make fit" },
            { letter: "C", text: "saved his worst joints to teach future students" },
            { letter: "D", text: "lost patience with his own teacher's strict rules" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 2 · LITERARY · watch repair ───────────────────────── */
    {
      id: "g11-rl-c109-timing-rack",
      family: "G11",
      title: "Every Position",
      kind: "Literary · 11.RL",
      blurb: "A repaired watch comes back running fast, and an apprentice remembers why.",
      level: 3,
      passage:
        "<p>" + N(1) + "The watch came back on a Thursday, nine days after it had left, and Nnamdi Eze knew what was wrong with it before Mr. Castellano even set it on the counter. " +
        N(2) + "He could hear it. " +
        N(3) + "Under the shop's chorus of wall clocks, each ticking in its own slightly different rhythm, the little gold wristwatch was hurrying, its beat crowded and anxious, like a student talking too fast in front of a class.</p>" +
        "<p>" + N(4) + "\"It gains,\" Mr. Castellano said. " +
        N(5) + "\"Four, five minutes every day. " +
        N(6) + "I set it each morning by the radio, and by supper it's already living in tomorrow.\" " +
        N(7) + "He said it kindly, which was worse.</p>" +
        "<p>" + N(8) + "Nnamdi remembered the afternoon he had handed it back. " +
        N(9) + "He had cleaned the movement himself, under Señora Ruiz's eye, lifting each tiny gear from its jewel with tweezers, washing away forty years of hardened oil, setting the new mainspring in its barrel like a coiled ribbon. " +
        N(10) + "When he wound the crown and the balance wheel began to swing, he had felt the same small jolt of pride he felt every time a dead thing in his hands began to breathe. " +
        N(11) + "Señora Ruiz had said the watch must stay on the timing rack for a week, lying face up, face down, crown left, crown right, so they could measure how its rate changed in every position and adjust the hairspring. " +
        N(12) + "\"A watch lives in many positions,\" she said. " +
        N(13) + "\"On a wrist, in a drawer, on a nightstand. " +
        N(14) + "It has to keep time in all of them.\"</p>" +
        "<p>" + N(15) + "But Mr. Castellano had come in on the second day. " +
        N(16) + "It had been his late wife's watch, he explained, and their granddaughter was graduating on Saturday, and he wanted to give it to her then. " +
        N(17) + "Señora Ruiz was at the bank. " +
        N(18) + "The watch was running; Nnamdi could see the second hand sweeping steadily around the dial. " +
        N(19) + "It seemed cruel, almost, to make an old man wait for a few seconds of accuracy. " +
        N(20) + "So he had written up the ticket, taken the payment, and slid the watch across the counter in its little velvet bag.</p>" +
        "<p>" + N(21) + "Now Señora Ruiz came out from the back, wiping her hands on a cloth. " +
        N(22) + "She looked at the watch, then at Nnamdi, and he waited for the lecture. " +
        N(23) + "It did not come. " +
        N(24) + "Instead she said to Mr. Castellano, \"We will have it right in a week. " +
        N(25) + "No charge.\" " +
        N(26) + "Then, to Nnamdi: \"You'll do the timing. " +
        N(27) + "Every position. " +
        N(28) + "Every day.\"</p>" +
        "<p>" + N(29) + "He did. " +
        N(30) + "Each afternoon he laid the watch on the rack and wrote its rate in a notebook, and each evening he made adjustments so slight he could hardly tell he had touched anything. " +
        N(31) + "By the sixth day the gain was under ten seconds a day in every position. " +
        N(32) + "On the seventh day he did not check the numbers at all; he only listened. " +
        N(33) + "Among the crowd of clocks, the little watch had found its own pace, unhurried and even.</p>" +
        "<p>" + N(34) + "When Mr. Castellano came back, Nnamdi did not slide the bag across the counter. " +
        N(35) + "He walked around it and placed the watch in the old man's palm.</p>",
      claims: [
        {
          id: "frame",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The story opens with the watch being returned and then moves back to the day Nnamdi handed it over. This structure mainly allows the reader to —",
          choices: [
            { letter: "A", text: "follow Mr. Castellano's thoughts throughout the week" },
            { letter: "B", text: "learn the parts of a watch before any problem begins" },
            { letter: "C", text: "feel Nnamdi's guilt before learning what caused it" },
            { letter: "D", text: "see Señora Ruiz's reaction before the mistake occurs" }
          ],
          correct: "C"
        },
        {
          id: "student",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, comparing the watch's beat to a student talking too fast in front of a class mainly conveys that the watch is —",
          choices: [
            { letter: "A", text: "running nervously ahead of where it should be" },
            { letter: "B", text: "too quiet to be heard under the wall clocks" },
            { letter: "C", text: "broken beyond any repair Nnamdi could make" },
            { letter: "D", text: "louder than any other timepiece in the shop" }
          ],
          correct: "A"
        },
        {
          id: "cruel",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 19 suggests that Nnamdi returned the watch early mainly because he —",
          choices: [
            { letter: "A", text: "doubted that Señora Ruiz's timing rack was useful" },
            { letter: "B", text: "wanted to finish the job before his boss returned" },
            { letter: "C", text: "feared that Mr. Castellano would refuse to pay later" },
            { letter: "D", text: "let sympathy for the customer outweigh the process" }
          ],
          correct: "D"
        },
        {
          id: "tomorrow",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Mr. Castellano's remark in sentence 6 that by supper the watch is already living in tomorrow creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "gently humorous" },
            { letter: "C", text: "formal and businesslike" },
            { letter: "D", text: "anxious and fearful" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed across the two times Nnamdi returns Mr. Castellano's watch?",
          choices: [
            { letter: "A", text: "Caring for someone sometimes means asking that person to wait." },
            { letter: "B", text: "Skilled workers should never let customers see their mistakes." },
            { letter: "C", text: "Old objects are rarely worth the cost of repairing them." },
            { letter: "D", text: "Employers are usually harsher than their workers' mistakes deserve." }
          ],
          correct: "A"
        },
        {
          id: "positions",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Señora Ruiz's explanation in sentences 12–14 that a watch lives in many positions mainly helps the reader understand —",
          choices: [
            { letter: "A", text: "why Nnamdi enjoys cleaning gears with tweezers" },
            { letter: "B", text: "why the shop keeps so many wall clocks running" },
            { letter: "C", text: "why Mr. Castellano sets the watch by the radio" },
            { letter: "D", text: "why a watch that was running was not yet finished" }
          ],
          correct: "D"
        },
        {
          id: "rate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentences 30 and 31, the rate that Nnamdi records in his notebook refers to —",
          choices: [
            { letter: "A", text: "the price charged for timing a watch" },
            { letter: "B", text: "how many seconds the watch gains or loses daily" },
            { letter: "C", text: "the speed at which the mainspring unwinds fully" },
            { letter: "D", text: "how often Nnamdi checks the watch each afternoon" }
          ],
          correct: "B"
        },
        {
          id: "kindly",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentence 7, the narrator says Mr. Castellano spoke kindly, which was worse. This wording suggests that Nnamdi —",
          choices: [
            { letter: "A", text: "thinks Mr. Castellano is hiding his real anger" },
            { letter: "B", text: "expects Señora Ruiz to scold the customer instead" },
            { letter: "C", text: "finds that the man's gentleness deepens his own shame" },
            { letter: "D", text: "believes the watch cannot be fixed a second time" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 3 · LITERARY · debate team ───────────────────────── */
    {
      id: "g11-rl-c109-wrong-side",
      family: "G11",
      title: "The Negative",
      kind: "Literary · 11.RL",
      blurb: "A debater is assigned the side she disagrees with, and finds out what the other side sounds like up close.",
      level: 1,
      passage:
        "<p>" + N(1) + "The topic was posted on Monday: Resolved, that high schools should require forty hours of community service to graduate. " +
        N(2) + "I liked it immediately. " +
        N(3) + "I had spent two summers volunteering at the Eastbrook food pantry, and I could already picture myself at the podium, telling the judges how stacking cans had changed the way I saw my own town.</p>" +
        "<p>" + N(4) + "Then Coach Abernathy read the assignments. " +
        N(5) + "My partner, Desmond Park, and I would argue the negative. " +
        N(6) + "We would have to say the requirement was a bad idea.</p>" +
        "<p>" + N(7) + "\"That's not fair,\" I said, louder than I meant to. " +
        N(8) + "\"I don't believe that side.\"</p>" +
        "<p>" + N(9) + "Coach Abernathy didn't look up from her clipboard. " +
        N(10) + "\"Good, Farah,\" she said. " +
        N(11) + "\"Then you'll have to listen to it.\"</p>" +
        "<p>" + N(12) + "For the first two days, I barely tried. " +
        N(13) + "I wrote weak arguments on purpose, as if I could prove the negative side was hopeless by making it look hopeless. " +
        N(14) + "Desmond read my notes and frowned. " +
        N(15) + "\"If you argue like this, we'll lose in the first round,\" he said. " +
        N(16) + "\"And honestly, you'll deserve it.\"</p>" +
        "<p>" + N(17) + "That stung, mostly because he was right. " +
        N(18) + "So on Wednesday I did something I had never done before a tournament: I went looking for people who disagreed with me. " +
        N(19) + "I talked to Mrs. Okoro, who drove the late bus and said that half the students on her route worked after-school jobs to help pay rent. " +
        N(20) + "I talked to my cousin Bilal, who cared for his little sisters every afternoon while his mother worked. " +
        N(21) + "Neither of them was against helping others. " +
        N(22) + "They just did not have forty spare hours, and a rule that ignored that would fall hardest on the students with the least free time.</p>" +
        "<p>" + N(23) + "By Friday, my notes looked different. " +
        N(24) + "I still believed in volunteering. " +
        N(25) + "But I no longer believed that everyone who disagreed with me was simply lazy or selfish.</p>" +
        "<p>" + N(26) + "At the tournament, we won two rounds and lost the third to a pair of seniors from Kingsford High. " +
        N(27) + "In the final speech of that round, the Kingsford speaker said the negative side had no heart. " +
        N(28) + "I stood up for my rebuttal and heard myself describe Bilal's afternoons, the diapers and homework and macaroni, in enough detail that one of the judges stopped writing and looked up.</p>" +
        "<p>" + N(29) + "We still lost, by one point. " +
        N(30) + "On the bus home, Desmond fell asleep against the window, and I took out my notebook. " +
        N(31) + "On the first page, I wrote the topic again, and under it, in small letters, I wrote both sides.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Farah's assigned side?",
          choices: [
            { letter: "A", text: "Winning a debate matters less than having a strong partner." },
            { letter: "B", text: "Volunteering is the best way to learn about a community." },
            { letter: "C", text: "Coaches should let students choose the side they argue." },
            { letter: "D", text: "Taking opposing views seriously can deepen one's thinking." }
          ],
          correct: "D"
        },
        {
          id: "unfair",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Farah's response to the assignment in sentences 7 and 8 shows that, at first, she —",
          choices: [
            { letter: "A", text: "expects Desmond to argue the side alone" },
            { letter: "B", text: "assumes only her own view deserves a defense" },
            { letter: "C", text: "wants Coach Abernathy to choose a new topic" },
            { letter: "D", text: "fears speaking in front of tournament judges" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "What event leads Farah to change the way she prepares for the tournament?",
          choices: [
            { letter: "A", text: "Desmond warns her that her weak notes will lose the round." },
            { letter: "B", text: "Coach Abernathy threatens to remove her from the team." },
            { letter: "C", text: "Mrs. Okoro offers to explain the topic on the late bus." },
            { letter: "D", text: "A senior from Kingsford High shares his notes with her." }
          ],
          correct: "A"
        },
        {
          id: "notebook",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "The notebook page in sentence 31, with both sides written under the topic, most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the tournament's final score" },
            { letter: "B", text: "Desmond's advice about rebuttals" },
            { letter: "C", text: "Farah's new habit of weighing two views" },
            { letter: "D", text: "the forty hours of service the rule requires" }
          ],
          correct: "C"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do sentences 29–31, on the bus home, resolve Farah's story?",
          choices: [
            { letter: "A", text: "They show Farah planning to quit the debate team." },
            { letter: "B", text: "They show that losing did not undo what Farah learned." },
            { letter: "C", text: "They reveal that Desmond was angry about the score." },
            { letter: "D", text: "They explain why the judges chose the Kingsford pair." }
          ],
          correct: "B"
        },
        {
          id: "macaroni",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The list in sentence 28 (the diapers and homework and macaroni) mainly makes Farah's rebuttal —",
          choices: [
            { letter: "A", text: "humorous enough to make the judges laugh" },
            { letter: "B", text: "shorter than the speeches of her opponents" },
            { letter: "C", text: "formal in the way that judges usually expect" },
            { letter: "D", text: "vivid and concrete rather than abstract" }
          ],
          correct: "D"
        },
        {
          id: "rebuttal",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 28, the word rebuttal most nearly means —",
          choices: [
            { letter: "A", text: "a speech that opens the debate" },
            { letter: "B", text: "a vote cast by a judge at the end" },
            { letter: "C", text: "a reply that answers the other side" },
            { letter: "D", text: "a summary written in a notebook" }
          ],
          correct: "C"
        },
        {
          id: "stung",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 17, Farah says Desmond's comment stung. The word stung suggests that his words —",
          choices: [
            { letter: "A", text: "hurt her because she knew they were true" },
            { letter: "B", text: "made her want to find a new partner" },
            { letter: "C", text: "were spoken in front of the whole team" },
            { letter: "D", text: "confused her about the rules of debate" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 4 · INFORMATIONAL · history of maps ───────────────────────── */
    {
      id: "g11-ri-c109-blank-spaces",
      family: "G11",
      title: "What Mapmakers Did With the Blank Spaces",
      kind: "Informational · 11.RI",
      blurb: "Sea creatures, phantom islands, honest emptiness and the ocean floor: how maps handle the unknown.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every map is an argument about what is known. " +
        N(2) + "A modern street map seems to show the world exactly as it is, but each line on it reflects a choice about what to include, what to leave out, and how certain the mapmaker is. " +
        N(3) + "Nowhere is that choice clearer than in the history of how mapmakers treated the places they had never seen.</p>" +
        "<p>" + N(4) + "For much of history, empty space on a map was considered a failure. " +
        N(5) + "Mapmakers working for wealthy patrons filled unknown regions with whatever they could: rumored kingdoms, mountain ranges borrowed from older maps, sea creatures coiling in the margins. " +
        N(6) + "A blank area suggested ignorance, and ignorance did not sell. " +
        N(7) + "Some of these guesses lasted for centuries. " +
        N(8) + "Islands that no sailor had ever confirmed were copied from one chart to the next, each copy lending the island more authority, until some appeared on official maps long after they should have been questioned. " +
        N(9) + "A mistake, once printed, could become a fact simply by being repeated.</p>" +
        "<p>" + N(10) + "Over time, however, a different attitude took hold. " +
        N(11) + "As surveying instruments improved and navigators began recording their positions more carefully, some mapmakers started to treat honesty as a selling point. " +
        N(12) + "Instead of inventing rivers for the interior of a continent, they drew only the coastlines that had actually been measured and left the rest open. " +
        N(13) + "A map with blank spaces could now be read as a sign of care rather than laziness. " +
        N(14) + "It told the traveler where the reliable information ended.</p>" +
        "<p>" + N(15) + "This shift had practical consequences. " +
        N(16) + "A sailor trusting an imaginary island might steer toward it in search of fresh water and find only open ocean. " +
        N(17) + "An expedition planning its route around an invented mountain range could waste months. " +
        N(18) + "Blank space, by contrast, warned readers to proceed cautiously and to gather their own information.</p>" +
        "<p>" + N(19) + "Today, satellites photograph nearly every square meter of land, and it is tempting to think the age of blank spaces is over. " +
        N(20) + "It is not. " +
        N(21) + "The deep ocean floor, which covers most of the planet's surface, has been mapped in fine detail only in patches; by recent estimates, roughly three quarters of it is known only in rough outline. " +
        N(22) + "Scientists who study the seafloor face a version of the old mapmakers' choice. " +
        N(23) + "They can fill gaps by estimating depths from satellite measurements of the sea surface, which produces a smooth, complete-looking map, or they can mark clearly which areas have been directly surveyed by ships.</p>" +
        "<p>" + N(24) + "Many now do both, using color or shading to show the difference between measured and estimated ground. " +
        N(25) + "It is a small design decision, but it carries the lesson of centuries. " +
        N(26) + "A good map does not only show the world; it shows how much of the world we can honestly claim to know.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the article on how mapmakers handled unknown places?",
          choices: [
            { letter: "A", text: "Honest maps show the limits of what their makers truly know." },
            { letter: "B", text: "Satellites have finally completed the work of early mapmakers." },
            { letter: "C", text: "Sea creatures in map margins were meant mainly as decoration." },
            { letter: "D", text: "Wealthy patrons cared more about beauty than about accuracy." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author mainly organize sentences 4–24 of the article about blank spaces?",
          choices: [
            { letter: "A", text: "by comparing land maps with sea charts point by point" },
            { letter: "B", text: "by listing problems with modern maps and their solutions" },
            { letter: "C", text: "by tracing how views of unknown areas changed over time" },
            { letter: "D", text: "by describing one mapmaker's career from start to finish" }
          ],
          correct: "C"
        },
        {
          id: "repeated",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 9, the author says a mistake could become a fact simply by being repeated mainly to —",
          choices: [
            { letter: "A", text: "praise the speed of early printing methods" },
            { letter: "B", text: "explain how invented islands gained false authority" },
            { letter: "C", text: "argue that all old maps should be thrown away" },
            { letter: "D", text: "show that sailors rarely read the maps they carried" }
          ],
          correct: "B"
        },
        {
          id: "danger",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence best supports the idea that invented map features could put travelers at real risk?",
          choices: [
            { letter: "A", text: "Sentence 5, about rumored kingdoms and borrowed mountains" },
            { letter: "B", text: "Sentence 11, about improved surveying instruments" },
            { letter: "C", text: "Sentence 14, about where reliable information ended" },
            { letter: "D", text: "Sentence 16, about steering toward an imaginary island" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward the mapmakers who began leaving blank spaces is best described as —",
          choices: [
            { letter: "A", text: "puzzled by their lack of ambition" },
            { letter: "B", text: "critical of their slow methods" },
            { letter: "C", text: "indifferent to their final results" },
            { letter: "D", text: "approving of their honesty" }
          ],
          correct: "D"
        },
        {
          id: "seafloor",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentences 19–24 about the deep ocean floor mainly to —",
          choices: [
            { letter: "A", text: "argue that ships are more useful than satellites" },
            { letter: "B", text: "show that the old mapmakers' choice still matters" },
            { letter: "C", text: "describe the creatures found on the seafloor" },
            { letter: "D", text: "explain how satellites photograph the land" }
          ],
          correct: "B"
        },
        {
          id: "patrons",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word patrons most nearly refers to —",
          choices: [
            { letter: "A", text: "artists who drew the margins" },
            { letter: "B", text: "sailors who tested the maps" },
            { letter: "C", text: "people who paid for the work" },
            { letter: "D", text: "rulers of the rumored kingdoms" }
          ],
          correct: "C"
        },
        {
          id: "shading",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.2",
          stem: "Based on sentences 23 and 24, a seafloor map that uses shading to separate measured and estimated areas would most help a reader —",
          choices: [
            { letter: "A", text: "judge which parts of the map are most reliable" },
            { letter: "B", text: "see the sea creatures living at great depths" },
            { letter: "C", text: "find the fastest shipping route across an ocean" },
            { letter: "D", text: "learn when each area was first photographed" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 5 · INFORMATIONAL · watch repair ───────────────────────── */
    {
      id: "g11-ri-c109-escapement",
      family: "G11",
      title: "The Heartbeat Inside a Watch",
      kind: "Informational · 11.RI",
      blurb: "Mainspring, escapement, balance wheel: how a watch with no battery keeps time, and why it needs a doctor.",
      level: 3,
      passage:
        "<p>" + N(1) + "Hold a mechanical watch to your ear and you will hear it: a quick, steady ticking, five to eight beats every second. " +
        N(2) + "That sound is not decoration. " +
        N(3) + "It is the noise of a tiny machine repeatedly stopping and starting itself, thousands of times an hour, and it is the reason a watch with no battery can keep time at all.</p>" +
        "<p>" + N(4) + "The energy comes from the mainspring, a long ribbon of hardened metal coiled inside a small drum called the barrel. " +
        N(5) + "Winding the crown tightens the spring, and as it slowly relaxes, it turns a chain of gears. " +
        N(6) + "Left alone, however, a spring would unwind in a single rush, spinning the hands wildly for a few seconds and then stopping. " +
        N(7) + "The challenge of watchmaking has always been to release that energy in small, exactly equal portions.</p>" +
        "<p>" + N(8) + "That is the job of the escapement. " +
        N(9) + "At its center is a toothed wheel that wants to spin, held back by a small lever with two jeweled tips called pallets. " +
        N(10) + "The lever rocks back and forth, letting the wheel advance by one tooth at a time; each release is a tick. " +
        N(11) + "But the lever cannot keep its own rhythm. " +
        N(12) + "It is guided by the balance wheel, a ring that swings back and forth on a hair-thin coiled spring, the hairspring. " +
        N(13) + "Like a child on a playground swing, the balance takes nearly the same time to complete each swing, and with each swing it unlocks the escapement and receives a tiny push in return. " +
        N(14) + "The balance sets the rhythm; the escapement keeps the balance moving; the mainspring supplies the power.</p>" +
        "<p>" + N(15) + "Because the system depends on such small forces, small problems matter. " +
        N(16) + "Over several years, the oils that ease the moving parts thicken and dry. " +
        N(17) + "Friction rises, and the amplitude, meaning how far the balance swings in each direction, shrinks. " +
        N(18) + "A weakened swing makes the timing less consistent, so a watch that once lost a few seconds a day may begin to lose minutes. " +
        N(19) + "This is why watchmakers recommend a full service every five to seven years. " +
        N(20) + "During a service, the watchmaker must disassemble the movement completely, clean every part, replace worn components, reapply oil in amounts measured in fractions of a drop, and then test the watch in several positions, because gravity pulls on the balance differently when the watch lies flat than when it stands on its edge.</p>" +
        "<p>" + N(21) + "For a time in the late twentieth century, cheap and accurate quartz watches made this kind of care seem obsolete, and many repair shops closed. " +
        N(22) + "Yet mechanical watches never disappeared, and the people who own them still need someone who can read a ticking sound the way a doctor reads a heartbeat. " +
        N(23) + "Several trade schools now report waiting lists for their watchmaking programs. " +
        N(24) + "The skill that once looked like a relic has become, for a new generation, a career.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which choice best summarizes the central idea of the article about mechanical watches?",
          choices: [
            { letter: "A", text: "Quartz watches have replaced mechanical ones in nearly every home." },
            { letter: "B", text: "A watch keeps time through a delicate system that needs regular care." },
            { letter: "C", text: "The mainspring is the most important part of any watch movement." },
            { letter: "D", text: "Trade schools are the best place for students to learn engineering." }
          ],
          correct: "B"
        },
        {
          id: "sequence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 4–14 of the watch article?",
          choices: [
            { letter: "A", text: "by comparing quartz watches with mechanical ones" },
            { letter: "B", text: "by listing the steps of a full watch service" },
            { letter: "C", text: "by telling the history of the first watchmakers" },
            { letter: "D", text: "by following the energy from spring to steady tick" }
          ],
          correct: "D"
        },
        {
          id: "swing",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The comparison to a child on a playground swing in sentence 13 helps the reader understand that the balance wheel —",
          choices: [
            { letter: "A", text: "repeats each swing in nearly equal time" },
            { letter: "B", text: "moves only when someone pushes it by hand" },
            { letter: "C", text: "stops whenever the watch is held flat" },
            { letter: "D", text: "is the largest part of the movement" }
          ],
          correct: "A"
        },
        {
          id: "amplitude",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 17, the explanation set off by commas shows that amplitude means —",
          choices: [
            { letter: "A", text: "the speed of the escape wheel's teeth" },
            { letter: "B", text: "the amount of oil inside the movement" },
            { letter: "C", text: "the distance the balance swings each way" },
            { letter: "D", text: "the number of ticks the watch makes per second" }
          ],
          correct: "C"
        },
        {
          id: "gravity",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the article, why must a watchmaker test a serviced watch in several positions?",
          choices: [
            { letter: "A", text: "Gravity affects the balance differently as the watch's position changes." },
            { letter: "B", text: "The mainspring unwinds faster when the watch stands on its edge." },
            { letter: "C", text: "Oil drains to one side of the movement after a few hours." },
            { letter: "D", text: "Customers usually wear their watches upside down on the wrist." }
          ],
          correct: "A"
        },
        {
          id: "rush",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 6, about a spring unwinding in a single rush, mainly to —",
          choices: [
            { letter: "A", text: "warn readers not to overwind their watches" },
            { letter: "B", text: "explain why the mainspring must be replaced often" },
            { letter: "C", text: "show the problem the escapement exists to solve" },
            { letter: "D", text: "describe what happens when a watch is dropped" }
          ],
          correct: "C"
        },
        {
          id: "dis",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word disassemble in sentence 20 begins with the prefix dis-, as do disconnect and disappear. In all three words, the prefix dis- signals —",
          choices: [
            { letter: "A", text: "doing something again" },
            { letter: "B", text: "doing something carefully" },
            { letter: "C", text: "doing something too much" },
            { letter: "D", text: "undoing or reversing an action" }
          ],
          correct: "D"
        },
        {
          id: "future",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "Sentences 21–24 suggest that the author views the future of watch repair as —",
          choices: [
            { letter: "A", text: "doomed by cheaper technology" },
            { letter: "B", text: "hopeful, with renewed interest" },
            { letter: "C", text: "uncertain and impossible to predict" },
            { letter: "D", text: "important only to wealthy collectors" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 6 · VOCABULARY · woodworking ───────────────────────── */
    {
      id: "g11-rv-c109-barn-oak",
      family: "G11",
      title: "Cutting Boards From a Barn",
      kind: "Vocabulary · 11.RV",
      blurb: "A shop class turns gray barn boards into oak cutting boards, and six words come along for the ride.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the first day of Introduction to Woodworking, Ms. Takahashi did not hand us any tools. " +
        N(2) + "Instead she led our class to a pile of old boards behind the school, gray and splintered, stacked against the fence. " +
        N(3) + "\"These are your cutting boards,\" she said. " +
        N(4) + "Most of us laughed, because the pile looked like something waiting for the trash truck.</p>" +
        "<p>" + N(5) + "The wood had been <strong>salvaged</strong> from a barn that a local farmer was tearing down; rather than let it be hauled to the landfill, he had donated it to the school. " +
        N(6) + "Under the gray surface, Ms. Takahashi promised, was oak that had been drying for nearly a hundred years. " +
        N(7) + "When we ran the first board through the planer, a pale, honey-colored stripe appeared beneath the weathered layer, and nobody laughed after that.</p>" +
        "<p>" + N(8) + "The real work came next. " +
        N(9) + "A cutting board is made of several narrow strips glued side by side, and every strip has to be perfectly flat and square, or the finished board will rock on the counter. " +
        N(10) + "Ms. Takahashi was <strong>meticulous</strong> about measuring. " +
        N(11) + "She checked each strip with a steel square, held it up to the light to look for gaps, and sent back any piece that was off by even the thickness of a sheet of paper. " +
        N(12) + "My lab partner, Priya Natarajan, said she measured like someone defusing a bomb.</p>" +
        "<p>" + N(13) + "We also learned that wood is never truly still. " +
        N(14) + "It takes in moisture from the air in humid weather and gives it back when the air is dry. " +
        N(15) + "If one side of a board dries faster than the other, the board can <strong>warp</strong>, bending into a shallow curve like a potato chip. " +
        N(16) + "To prevent this, we arranged our strips so that the curved growth rings pointed in alternating directions, letting each strip's movement cancel out its neighbor's.</p>" +
        "<p>" + N(17) + "For the glue-up, we used a waterproof <strong>adhesive</strong> made for kitchen use, spread in a thin, even layer along each edge. " +
        N(18) + "Then we squeezed the strips together with clamps and left them overnight. " +
        N(19) + "Too little glue would leave weak joints; too much would squeeze out and harden into lumps we would have to scrape away.</p>" +
        "<p>" + N(20) + "Last came sanding, which took longer than everything else combined. " +
        N(21) + "We started with coarse, <strong>abrasive</strong> paper that tore through the saw marks quickly, then moved to finer and finer grits until the surface felt as smooth as a countertop. " +
        N(22) + "Finally, we rubbed in food-safe mineral oil, and the oak turned a deep amber.</p>" +
        "<p>" + N(23) + "Ms. Takahashi told us that a well-made oak board is <strong>durable</strong> enough to outlast the person who made it. " +
        N(24) + "I believe her. " +
        N(25) + "Mine sits on my grandmother's counter now, scarred from a semester of onions and tomatoes, and it has not cracked or bent at all. " +
        N(26) + "Not bad for a board that once held up a barn wall.</p>",
      claims: [
        {
          id: "salvaged",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the information after the semicolon shows that salvaged means —",
          choices: [
            { letter: "A", text: "sold at a high price to a buyer" },
            { letter: "B", text: "painted to hide signs of damage" },
            { letter: "C", text: "rescued from being thrown away" },
            { letter: "D", text: "cut into strips of equal width" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from the passage best shows what the narrator means by calling Ms. Takahashi meticulous?",
          choices: [
            { letter: "A", text: "She sends back strips that are off by a paper's thickness." },
            { letter: "B", text: "She leads the class to a pile of boards behind the school." },
            { letter: "C", text: "She promises that the gray wood hides old, dry oak inside." },
            { letter: "D", text: "She has the students leave the glued strips clamped overnight." }
          ],
          correct: "A"
        },
        {
          id: "warp",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 15, the word warp most nearly means —",
          choices: [
            { letter: "A", text: "crack apart along the grain" },
            { letter: "B", text: "shrink to a smaller size" },
            { letter: "C", text: "turn darker with age" },
            { letter: "D", text: "twist out of a flat shape" }
          ],
          correct: "D"
        },
        {
          id: "adhesive",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word adhesive in sentence 17 comes from a Latin root meaning to stick to. Based on this root and the context, an adhesive is —",
          choices: [
            { letter: "A", text: "a tool for squeezing boards" },
            { letter: "B", text: "a substance that bonds surfaces" },
            { letter: "C", text: "a finish that keeps out water" },
            { letter: "D", text: "a layer that is scraped away" }
          ],
          correct: "B"
        },
        {
          id: "abrasive",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 21, describing the first sandpaper as coarse and abrasive suggests that it —",
          choices: [
            { letter: "A", text: "was too weak to remove the saw marks" },
            { letter: "B", text: "wore away the wood roughly and fast" },
            { letter: "C", text: "left the surface as smooth as a counter" },
            { letter: "D", text: "was the last paper the students used" }
          ],
          correct: "B"
        },
        {
          id: "durable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word durable in sentence 23 shares a Latin root with duration and endure. These related words all have to do with —",
          choices: [
            { letter: "A", text: "strength of color" },
            { letter: "B", text: "weight or heaviness" },
            { letter: "C", text: "speed of growth" },
            { letter: "D", text: "lasting over time" }
          ],
          correct: "D"
        },
        {
          id: "clue",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from sentences 23–25 best helps the reader understand the meaning of durable?",
          choices: [
            { letter: "A", text: "has not cracked or bent at all" },
            { letter: "B", text: "sits on my grandmother's counter" },
            { letter: "C", text: "a semester of onions and tomatoes" },
            { letter: "D", text: "told us that a well-made oak board" }
          ],
          correct: "A"
        },
        {
          id: "bomb",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 12, Priya's comparison of Ms. Takahashi to someone defusing a bomb mainly emphasizes the teacher's —",
          choices: [
            { letter: "A", text: "fear of the shop's power tools" },
            { letter: "B", text: "speed in grading class projects" },
            { letter: "C", text: "extreme care and close focus" },
            { letter: "D", text: "dislike of noisy, crowded classes" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 7 · PAIRED · history of maps / transit diagram ───────────────────────── */
    {
      id: "g11-dsr-c109-transit-diagram",
      family: "G11",
      title: "The Map and the Walk",
      kind: "Paired texts · 11.DSR",
      blurb: "A transit agency trades its street map for a tidy diagram; a rider points out what the tidy lines hide.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Calloway Regional Transit: A Clearer Map for Every Rider</strong></p>" +
        "<p>" + N(1) + "Starting next month, every station and bus shelter in the Calloway system will display a redesigned map of our four rail lines. " +
        N(2) + "The old map traced each line's exact path through the streets, including every curve and bend, with stations placed at their true geographic positions. " +
        N(3) + "In surveys, riders told us it was hard to read: downtown stations were crowded into a tangle of lines, while suburban stops were spread so far apart that the map needed two panels. " +
        N(4) + "The new map is a diagram rather than a street map. " +
        N(5) + "Lines run only horizontally, vertically, or at forty-five-degree angles, and stations are spaced evenly, whether they are three blocks apart or three miles. " +
        N(6) + "Transfer points are marked with large white circles. " +
        N(7) + "In testing, riders using the new map planned trips with one transfer in an average of 22 seconds, compared with 41 seconds on the old map. " +
        N(8) + "The diagram is designed to answer the questions riders ask most often: Which line do I take? " +
        N(9) + "Where do I change trains? " +
        N(10) + "How many stops until I arrive? " +
        N(11) + "It is not designed to show distances on the ground, and riders who need walking directions should use the street maps posted at each station exit or the trip planner on our website. " +
        N(12) + "We believe a map should do one job well rather than many jobs poorly.</p>" +
        "<p><strong>Text 2 — Letter to the Calloway Ledger, from Tomás Ferreira, Westfield High School</strong></p>" +
        "<p>" + N(13) + "I ride the Green Line to school every day, and I agree that the old map was crowded. " +
        N(14) + "The new diagram is cleaner, and I can find my transfer faster. " +
        N(15) + "But a map does not only answer the questions its designers expect. " +
        N(16) + "It also shapes decisions they never planned for. " +
        N(17) + "On the new map, Harbor Street and Lindale Avenue stations appear side by side on different lines, separated by about an inch. " +
        N(18) + "Last week, a visitor on my train asked whether she could walk between them instead of riding downtown to transfer. " +
        N(19) + "Looking at the diagram, I would have said yes. " +
        N(20) + "In reality the walk is almost two miles and crosses a highway with no sidewalk. " +
        N(21) + "Meanwhile, two downtown stations that look far apart on the diagram sit less than four hundred feet from each other, and riders ride three stops out of their way to travel between them. " +
        N(22) + "The transit authority says the diagram is not meant to show distance, but most riders will never read that disclaimer; they will simply trust the picture. " +
        N(23) + "A small fix would help: a dotted line or a short note marking which nearby stations are truly within walking distance. " +
        N(24) + "A map that is easy to read should not make it easy to be wrong.</p>",
      claims: [
        {
          id: "agree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea do the Calloway transit notice and Tomás's letter both accept?",
          choices: [
            { letter: "A", text: "The diagram should show true walking distances." },
            { letter: "B", text: "The old map was crowded and hard to read." },
            { letter: "C", text: "Riders rarely transfer between rail lines." },
            { letter: "D", text: "The trip planner website is hard to use." }
          ],
          correct: "B"
        },
        {
          id: "disclaimer",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "In sentence 22, Tomás responds to the statement in sentence 11 by arguing that —",
          choices: [
            { letter: "A", text: "the street maps at station exits are out of date" },
            { letter: "B", text: "riders should ask other passengers for directions" },
            { letter: "C", text: "the transit authority never tested the new diagram" },
            { letter: "D", text: "a written warning matters less than the picture itself" }
          ],
          correct: "D"
        },
        {
          id: "mislead",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Select TWO sentences from Text 2 that give evidence the diagram's even spacing can mislead riders about distance.",
          choices: [
            { letter: "A", text: "Sentence 20, about a two-mile walk across a highway" },
            { letter: "B", text: "Sentence 14, about finding a transfer faster" },
            { letter: "C", text: "Sentence 21, about stations four hundred feet apart" },
            { letter: "D", text: "Sentence 23, about adding a dotted line for walking" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "purposes",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the purposes of the transit notice and the letter differ?",
          choices: [
            { letter: "A", text: "Text 1 asks riders to vote on a design; Text 2 reports the result." },
            { letter: "B", text: "Text 1 warns of service delays; Text 2 complains about late trains." },
            { letter: "C", text: "Text 1 announces and defends a design; Text 2 accepts it but seeks a fix." },
            { letter: "D", text: "Text 1 describes a street map; Text 2 asks for the old map's return." }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader of both texts about the Calloway map could best conclude that the new diagram —",
          choices: [
            { letter: "A", text: "speeds trip planning but can mislead riders about distance" },
            { letter: "B", text: "is slower to read than the old map but more accurate" },
            { letter: "C", text: "was designed mainly for visitors rather than daily riders" },
            { letter: "D", text: "will be removed from stations after a few months" }
          ],
          correct: "A"
        },
        {
          id: "seconds",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In Text 1, the times given in sentence 7 are included mainly to —",
          choices: [
            { letter: "A", text: "show how long a typical train ride takes" },
            { letter: "B", text: "give measurable support for the new design" },
            { letter: "C", text: "compare the speeds of the four rail lines" },
            { letter: "D", text: "explain why riders transfer at large stations" }
          ],
          correct: "B"
        },
        {
          id: "closing",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Tomás's closing sentence (sentence 24) most directly answers which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 6, about transfer points marked with white circles" },
            { letter: "B", text: "Sentence 3, about the old map needing two panels" },
            { letter: "C", text: "Sentence 2, about the old map tracing exact paths" },
            { letter: "D", text: "Sentence 12, about a map doing one job well" }
          ],
          correct: "D"
        },
        {
          id: "only2",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail appears in Tomás's letter but not in the transit notice?",
          choices: [
            { letter: "A", text: "that stations are spaced evenly on the diagram" },
            { letter: "B", text: "a pair of stations that look close but are far apart" },
            { letter: "C", text: "that riders found the old map hard to read" },
            { letter: "D", text: "that transfer points are shown with large circles" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 8 · PAIRED · debate team ───────────────────────── */
    {
      id: "g11-dsr-c109-online-rounds",
      family: "G11",
      title: "Bus or Screen",
      kind: "Paired texts · 11.DSR",
      blurb: "A principal moves the debate team's season online to save money; the captain answers with a compromise.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Memo from Principal Adaeze Nwosu to the Debate Team and Families: Next Season's Tournament Schedule</strong></p>" +
        "<p>" + N(1) + "After reviewing this year's budget, the school has decided that the debate team will compete in online tournaments for most of next season. " +
        N(2) + "This year the team traveled to nine weekend tournaments, at an average cost of $1,850 per trip for buses, hotel rooms, and meals. " +
        N(3) + "Online tournaments, which most state leagues now offer, charge only an entry fee of about $60 per student. " +
        N(4) + "The savings will allow us to keep the team's coaching position fully funded and to buy the new research databases that debaters have requested for two years. " +
        N(5) + "Online competition also reduces missed class time. " +
        N(6) + "Several of this year's tournaments required the team to leave on Friday mornings, and some students missed as many as eleven class days over the season. " +
        N(7) + "Online rounds begin on Saturday mornings, and students can compete from the school library with a coach present. " +
        N(8) + "We recognize that travel has long been part of the team's tradition, and we do not make this change lightly. " +
        N(9) + "The team will still attend the state championship in person, and we will review the arrangement at the end of next season based on student results and feedback. " +
        N(10) + "Families with questions may contact the main office or attend the team meeting on May 14 in the library.</p>" +
        "<p><strong>Text 2 — \"The Room Matters,\" by Seo-yeon Kang, Debate Team Captain, in the Rivermont Herald</strong></p>" +
        "<p>" + N(11) + "I understand the budget, and I won't pretend that nine bus trips are cheap. " +
        N(12) + "But the memo treats a tournament as if it were only a series of speeches, and a debate round is more than that. " +
        N(13) + "In person, you learn to read a judge who is frowning, to slow down when the back row stops writing, to hold your voice steady in a room full of strangers. " +
        N(14) + "On a screen, the judge is a small box that may have its camera off. " +
        N(15) + "Last spring, during the one online tournament we tried, two of our novices lost rounds because their connections froze in the middle of their rebuttals, and there was no rule allowing them to start over. " +
        N(16) + "Travel also matters for reasons that never show up on a score sheet. " +
        N(17) + "For many of our members, a tournament weekend is the first time they have stayed in another city or talked with students from schools unlike ours. " +
        N(18) + "Saving money is worthwhile, but so is what the money buys. " +
        N(19) + "I propose a compromise: compete online for most of the fall, when tournaments are smaller, and travel to four major spring tournaments, paid for partly by a team fundraiser that we are willing to organize ourselves. " +
        N(20) + "We are asking not for everything, but for enough.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Both Principal Nwosu's memo and Seo-yeon's article acknowledge that —",
          choices: [
            { letter: "A", text: "online rounds give novices an unfair disadvantage" },
            { letter: "B", text: "students should help raise money for travel" },
            { letter: "C", text: "traveling to tournaments costs a significant amount" },
            { letter: "D", text: "the state championship should move online" }
          ],
          correct: "C"
        },
        {
          id: "memo",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Principal Nwosu's main purpose in writing the memo is to —",
          choices: [
            { letter: "A", text: "ask families to vote on next season's schedule" },
            { letter: "B", text: "announce and justify a change in competition format" },
            { letter: "C", text: "persuade students to try out for the debate team" },
            { letter: "D", text: "report the results of this year's state championship" }
          ],
          correct: "B"
        },
        {
          id: "frowning",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 13, Seo-yeon lists actions such as reading a frowning judge mainly to —",
          choices: [
            { letter: "A", text: "criticize the judges at last year's tournaments" },
            { letter: "B", text: "explain the rules of a standard debate round" },
            { letter: "C", text: "prove that novices perform better than captains" },
            { letter: "D", text: "show skills that only in-person rounds build" }
          ],
          correct: "D"
        },
        {
          id: "compromise",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Seo-yeon's proposal in sentence 19 differs from the plan in the memo mainly because it —",
          choices: [
            { letter: "A", text: "adds in-person spring tournaments and offers student fundraising" },
            { letter: "B", text: "cancels online competition for the entire season" },
            { letter: "C", text: "drops the state championship to save more money" },
            { letter: "D", text: "asks the school to pay for every trip as before" }
          ],
          correct: "A"
        },
        {
          id: "relies",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the principal's memo, Seo-yeon's article relies more on —",
          choices: [
            { letter: "A", text: "budget figures and dollar amounts" },
            { letter: "B", text: "schedules and official deadlines" },
            { letter: "C", text: "personal experience and specific examples" },
            { letter: "D", text: "quotations from league officials" }
          ],
          correct: "C"
        },
        {
          id: "advantages",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences that a reader could use to support the claim that online tournaments have real advantages.",
          choices: [
            { letter: "A", text: "Sentence 3, about a $60 entry fee per student" },
            { letter: "B", text: "Sentence 14, about a judge as a small box" },
            { letter: "C", text: "Sentence 17, about staying in another city" },
            { letter: "D", text: "Sentence 7, about competing from the library" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "travel",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two writers view the value of travel?",
          choices: [
            { letter: "A", text: "Both writers see travel mainly as a way to save class days." },
            { letter: "B", text: "The principal calls it a tradition; Seo-yeon links it to growth beyond scores." },
            { letter: "C", text: "The principal calls travel wasteful; Seo-yeon calls it a prize for winning." },
            { letter: "D", text: "Both writers believe travel matters most for the state championship." }
          ],
          correct: "B"
        },
        {
          id: "enough",
          sol: "11.DSR.B",
          sub: "11.DSR.B.1",
          stem: "Seo-yeon's final sentence, We are asking not for everything, but for enough, presents the team as —",
          choices: [
            { letter: "A", text: "reasonable and willing to compromise" },
            { letter: "B", text: "angry about the school's spending" },
            { letter: "C", text: "uncertain about what it really wants" },
            { letter: "D", text: "sure that the memo will be withdrawn" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── 9 · POETRY · clock repair ───────────────────────── */
    {
      id: "g11-rl-c109-repair-bench",
      family: "G11",
      title: "Repair Bench",
      kind: "Poetry · 11.RL",
      blurb: "Forty clocks disagree about the hour while a grandfather listens to just one.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandfather works beneath a lamp,<br>" +
        L(2) + "bent low as a heron over water,<br>" +
        L(3) + "a loupe screwed tight against one eye<br>" +
        L(4) + "so the world shrinks down to a single wheel.<br><br>" +
        L(5) + "He tells me watches do not break all at once.<br>" +
        L(6) + "They slow. A grain of dust, a thickened drop of oil,<br>" +
        L(7) + "a spring that has been tired for years<br>" +
        L(8) + "before anyone thinks to listen.<br><br>" +
        L(9) + "Around us, forty clocks disagree about the hour,<br>" +
        L(10) + "each one certain, each a little wrong,<br>" +
        L(11) + "like relatives arguing at a holiday table.<br>" +
        L(12) + "He does not hear them anymore. He hears<br>" +
        L(13) + "only the one in his tweezers,<br>" +
        L(14) + "its heartbeat small as a cricket's.<br><br>" +
        L(15) + "I used to think his work was keeping time.<br>" +
        L(16) + "Now I think it is the opposite:<br>" +
        L(17) + "he gives time back to things that lost it,<br>" +
        L(18) + "the pocket watch that stopped the day a farm was sold,<br>" +
        L(19) + "the wristwatch someone's mother wore to every job,<br>" +
        L(20) + "the mantel clock that rode a ship across an ocean<br>" +
        L(21) + "and then sat silent in a closet for fifty years.<br><br>" +
        L(22) + "When he finishes, he holds each one to his ear<br>" +
        L(23) + "the way you hold a shell, expecting the sea,<br>" +
        L(24) + "and smiles at the sound, ordinary and enormous,<br>" +
        L(25) + "of something going on.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the grandfather's repair bench?",
          choices: [
            { letter: "A", text: "Careful repair restores not just a machine but a tie to the past." },
            { letter: "B", text: "Old machines should be replaced once they begin to slow down." },
            { letter: "C", text: "Clocks are much less reliable than most people tend to believe." },
            { letter: "D", text: "A craft can only be learned by quietly watching someone else." }
          ],
          correct: "A"
        },
        {
          id: "heron",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "In line 2, comparing the grandfather to a heron over water mainly emphasizes his —",
          choices: [
            { letter: "A", text: "fear of the lamp's bright heat" },
            { letter: "B", text: "great height beside the speaker" },
            { letter: "C", text: "stillness and patient focus" },
            { letter: "D", text: "habit of working near a window" }
          ],
          correct: "C"
        },
        {
          id: "relatives",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "The simile in line 11, comparing the clocks to relatives arguing at a holiday table, creates a tone that is —",
          choices: [
            { letter: "A", text: "tense and frightening" },
            { letter: "B", text: "solemn and grieving" },
            { letter: "C", text: "cold and distant" },
            { letter: "D", text: "fond and lightly humorous" }
          ],
          correct: "D"
        },
        {
          id: "slow",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Lines 5–8 suggest that, according to the grandfather, watches usually fail because —",
          choices: [
            { letter: "A", text: "their owners drop them on hard floors" },
            { letter: "B", text: "small problems build up unnoticed" },
            { letter: "C", text: "their parts are made from cheap metal" },
            { letter: "D", text: "repairers do not clean them properly" }
          ],
          correct: "B"
        },
        {
          id: "stanza4",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the fourth stanza (lines 15–21) develop the poem?",
          choices: [
            { letter: "A", text: "It describes the tools the grandfather keeps at his bench." },
            { letter: "B", text: "It returns to the noise of the forty arguing clocks." },
            { letter: "C", text: "It explains why the grandfather stopped hearing the clocks." },
            { letter: "D", text: "It shifts from the speaker's old idea to a new understanding." }
          ],
          correct: "D"
        },
        {
          id: "enormous",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In line 24, the sound of a repaired watch is called ordinary and enormous. This pairing suggests that the sound is —",
          choices: [
            { letter: "A", text: "common, yet deeply meaningful to the listener" },
            { letter: "B", text: "too loud to be heard comfortably near the ear" },
            { letter: "C", text: "confusing because it changes from day to day" },
            { letter: "D", text: "something only the grandfather is able to hear" }
          ],
          correct: "A"
        },
        {
          id: "tweezers",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 12–14, about the one watch in the tweezers, reveal that the grandfather —",
          choices: [
            { letter: "A", text: "has lost much of his hearing with age" },
            { letter: "B", text: "can shut out distractions to focus on one task" },
            { letter: "C", text: "prefers the sound of crickets to clocks" },
            { letter: "D", text: "finds the forty clocks impossible to fix" }
          ],
          correct: "B"
        },
        {
          id: "loupe",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In line 3, the word loupe most likely refers to —",
          choices: [
            { letter: "A", text: "a band that holds the watch in place" },
            { letter: "B", text: "a light that hangs over the bench" },
            { letter: "C", text: "a small magnifying lens for close work" },
            { letter: "D", text: "a tool for winding the mainspring" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 10 · DRAMA · debate team ───────────────────────── */
    {
      id: "g11-rl-c109-the-card",
      family: "G11",
      title: "The Card",
      kind: "Drama · 11.RL",
      blurb: "The night before the state final, one statistic could win the round, if only anyone knew where it came from.",
      level: 3,
      passage:
        "<p><em>Setting: An empty classroom at Fairhaven High School, 9:40 p.m., the night before the state debate final. Desks are pushed together and covered with index cards, highlighters, and a laptop. MARISOL ORTEGA and IKENNA OBI, both seniors, are debate partners. A custodian's vacuum hums somewhere down the hall.</em></p>" +
        "<p>" + N(1) + "<strong>IKENNA</strong> <em>(waving a card)</em>: This is it. This is the card that wins tomorrow. Sixty-two percent of students who join a debate team raise their grades within a year. " +
        N(2) + "<strong>MARISOL</strong>: Where's it from? " +
        N(3) + "<strong>IKENNA</strong>: A blog post. A good one. It has charts. " +
        N(4) + "<strong>MARISOL</strong> <em>(holding out her hand for the card)</em>: Who wrote the blog? " +
        N(5) + "<strong>IKENNA</strong>: Someone who runs a debate camp. " +
        N(6) + "<strong>MARISOL</strong>: Someone who sells debate camp. " +
        N(7) + "<strong>IKENNA</strong>: That doesn't make the number wrong. " +
        N(8) + "<strong>MARISOL</strong>: It doesn't make it right, either. Did they say how many students? What school? Compared to who? " +
        N(9) + "<em>(IKENNA opens the laptop, scrolls, scrolls further. His shoulders drop slightly.)</em> " +
        N(10) + "<strong>IKENNA</strong>: It says \"based on our records.\" " +
        N(11) + "<strong>MARISOL</strong>: Their records of their own campers. Kids whose parents already paid for summer camp. " +
        N(12) + "<strong>IKENNA</strong> <em>(closing the laptop harder than necessary)</em>: Fine. But the other team won't check. Nobody checks a source in a three-minute cross-examination. They'll hear sixty-two percent and they'll write it down. " +
        N(13) + "<strong>MARISOL</strong>: Mr. Delacroix checks. He's judging the final. " +
        N(14) + "<strong>IKENNA</strong>: He might not. " +
        N(15) + "<strong>MARISOL</strong> <em>(quietly)</em>: Ikenna. Our whole case is that students deserve honest information before they choose. We can't win that argument with a number we wouldn't trust ourselves. " +
        N(16) + "<em>(A pause. The vacuum down the hall stops. In the silence, IKENNA turns the card over and over in his fingers.)</em> " +
        N(17) + "<strong>IKENNA</strong>: Three years. Three years we've been trying to get to this final. " +
        N(18) + "<strong>MARISOL</strong>: I know. " +
        N(19) + "<strong>IKENNA</strong>: And you want to walk in there with less. " +
        N(20) + "<strong>MARISOL</strong>: I want to walk in there with what's true. If it's less, then we argue it better. " +
        N(21) + "<em>(IKENNA looks at her for a long moment. Then he picks up a black marker, draws a single line through the card, and drops it into the recycling bin by the door.)</em> " +
        N(22) + "<strong>IKENNA</strong>: If we lose, I'm telling everyone it was your fault. " +
        N(23) + "<strong>MARISOL</strong> <em>(smiling, already reaching for a blank card)</em>: If we win, you can tell them it was yours. " +
        N(24) + "<em>(The vacuum starts again down the hall. They bend over the desks together. Lights fade.)</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed through Marisol and Ikenna's argument over the card?",
          choices: [
            { letter: "A", text: "Winning is worth any risk after years of hard work." },
            { letter: "B", text: "Partners should always follow the more experienced one." },
            { letter: "C", text: "Statistics are too confusing to use in a debate round." },
            { letter: "D", text: "Integrity means keeping standards when a shortcut tempts." }
          ],
          correct: "D"
        },
        {
          id: "sells",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Marisol's line in sentence 6, Someone who sells debate camp, shows that she —",
          choices: [
            { letter: "A", text: "is jealous of students who attend summer camps" },
            { letter: "B", text: "suspects the source has a reason to be biased" },
            { letter: "C", text: "believes Ikenna wrote the blog post himself" },
            { letter: "D", text: "wants to attend the debate camp after graduation" }
          ],
          correct: "B"
        },
        {
          id: "shoulders",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "What do the stage directions in sentence 9 reveal about the moment Ikenna checks the blog?",
          choices: [
            { letter: "A", text: "He is pleased to find the exact study he needs." },
            { letter: "B", text: "He decides to leave the classroom for the night." },
            { letter: "C", text: "He begins to realize that the source is weak." },
            { letter: "D", text: "He is too tired to read the screen clearly." }
          ],
          correct: "C"
        },
        {
          id: "laptop",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "Ikenna closes the laptop harder than necessary (sentence 12) and later turns the card over and over (sentence 16). Together, these details create a sense of —",
          choices: [
            { letter: "A", text: "frustration giving way to uncertain reflection" },
            { letter: "B", text: "calm confidence that never once wavers" },
            { letter: "C", text: "playful teasing between two old friends" },
            { letter: "D", text: "boredom with a long night of practice" }
          ],
          correct: "A"
        },
        {
          id: "vacuum",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The vacuum stops in sentence 16 and starts again in sentence 24. The playwright uses this sound mainly to —",
          choices: [
            { letter: "A", text: "frame the quiet moment in which Ikenna decides" },
            { letter: "B", text: "show that the school is about to close for the night" },
            { letter: "C", text: "suggest that the custodian is listening to the pair" },
            { letter: "D", text: "signal that the debate final has already begun" }
          ],
          correct: "A"
        },
        {
          id: "line",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "Ikenna's act of drawing a line through the card and dropping it in the bin (sentence 21) is best understood as a symbol of —",
          choices: [
            { letter: "A", text: "his anger at Mr. Delacroix's judging" },
            { letter: "B", text: "his plan to recycle the team's old notes" },
            { letter: "C", text: "his choice to give up an easy advantage" },
            { letter: "D", text: "his fear of speaking in cross-examination" }
          ],
          correct: "C"
        },
        {
          id: "less",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, Marisol says If it's less, then we argue it better. In this context, the word less refers to —",
          choices: [
            { letter: "A", text: "fewer hours of sleep before the final" },
            { letter: "B", text: "weaker-sounding but trustworthy evidence" },
            { letter: "C", text: "a shorter speech than the other team's" },
            { letter: "D", text: "less time to prepare for questioning" }
          ],
          correct: "B"
        },
        {
          id: "fault",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "In sentence 22, Ikenna's line If we lose, I'm telling everyone it was your fault is best read as —",
          choices: [
            { letter: "A", text: "a serious threat to end the partnership" },
            { letter: "B", text: "a request for Marisol to argue alone" },
            { letter: "C", text: "a complaint that Marisol ignored the coach" },
            { letter: "D", text: "a joking sign that he accepts her choice" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 11 · FUNCTIONAL · woodworking shop ───────────────────────── */
    {
      id: "g11-ri-c109-maple-woodshop",
      family: "G11",
      title: "Maple Street Woodshop Guide",
      kind: "Functional text · 11.RI",
      blurb: "Who may use the community woodshop, which machines need a class, and why reclaimed boards meet a metal detector.",
      level: 1,
      passage:
        "<p><strong>Maple Street Community Woodshop: New Member Orientation Guide</strong></p>" +
        "<p><strong>Who May Use the Shop.</strong> " + N(1) + "The woodshop is open to all residents age sixteen and older who have completed the free two-hour orientation class. " +
        N(2) + "Members ages sixteen and seventeen must have a signed permission form from a parent or guardian on file before their first visit. " +
        N(3) + "Orientation classes are held on the first and third Saturday of each month at 10:00 a.m.; sign up at the front desk or on the community center website.</p>" +
        "<p><strong>Shop Hours.</strong> " + N(4) + "The shop is open Tuesday through Friday from 4:00 to 9:00 p.m. and Saturday from 9:00 a.m. to 5:00 p.m. " +
        N(5) + "A trained shop monitor in a green apron is on duty during all open hours. " +
        N(6) + "No one may operate any machine when a monitor is not present.</p>" +
        "<p><strong>Safety Rules.</strong> " + N(7) + "Safety glasses must be worn at all times inside the shop, even when you are only sanding or sweeping. " +
        N(8) + "Hearing protection is required when using the table saw, planer, or router. " +
        N(9) + "Tie back long hair, remove dangling jewelry, and roll up loose sleeves before using any machine with a spinning blade or bit. " +
        N(10) + "Never reach over or behind a moving blade; use a push stick to guide small pieces. " +
        N(11) + "If a machine makes an unusual sound, turn it off immediately and tell the monitor.</p>" +
        "<p><strong>Machine Access Levels.</strong> " + N(12) + "Hand tools, the drill press, and the sanders are available to all members after orientation. " +
        N(13) + "The band saw and scroll saw require a fifteen-minute checkout session with a monitor. " +
        N(14) + "The table saw, jointer, and planer require a separate ninety-minute certification class, which is offered monthly and costs $25. " +
        N(15) + "Members who are not certified may not use these machines, even under supervision.</p>" +
        "<p><strong>Materials and Storage.</strong> " + N(16) + "Members supply their own lumber. " +
        N(17) + "Reclaimed wood is welcome, but it must be inspected for nails, screws, and staples with the shop's metal detector before it is cut, because hidden metal can shatter a blade. " +
        N(18) + "Each member may rent one storage shelf for $10 per month; projects left in common areas for more than seven days will be moved to the lost-and-found rack.</p>" +
        "<p><strong>Cleanup.</strong> " + N(19) + "Reserve the last fifteen minutes of every visit for cleanup. " +
        N(20) + "Sweep your area, empty the dust collector bag if it is more than half full, and return every tool to its outlined spot on the pegboard. " +
        N(21) + "Members who repeatedly leave messes may have their shop privileges suspended for thirty days.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main purpose of the Maple Street orientation guide?",
          choices: [
            { letter: "A", text: "to advertise woodworking classes to young children" },
            { letter: "B", text: "to explain the rules and procedures for using the shop" },
            { letter: "C", text: "to describe the history of the community center" },
            { letter: "D", text: "to compare the costs of several power tools" }
          ],
          correct: "B"
        },
        {
          id: "permission",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, what must a seventeen-year-old have before a first visit, in addition to completing orientation?",
          choices: [
            { letter: "A", text: "a signed permission form from a parent on file" },
            { letter: "B", text: "a $25 certificate for the table saw class" },
            { letter: "C", text: "a storage shelf rented for at least a month" },
            { letter: "D", text: "lumber that has already been checked for nails" }
          ],
          correct: "A"
        },
        {
          id: "reason",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence in the woodshop guide explains the reason behind a rule rather than only stating the rule?",
          choices: [
            { letter: "A", text: "Sentence 4, about the shop's weekly hours" },
            { letter: "B", text: "Sentence 12, about tools open to all members" },
            { letter: "C", text: "Sentence 16, about members supplying lumber" },
            { letter: "D", text: "Sentence 17, about checking wood for metal" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How do the bold headings help a reader use the Maple Street guide?",
          choices: [
            { letter: "A", text: "They show the order in which machines must be used." },
            { letter: "B", text: "They list the names of the monitors on duty." },
            { letter: "C", text: "They group related rules so readers can find them." },
            { letter: "D", text: "They mark which rules apply only to certified members." }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The woodshop guide is written mainly for an audience of —",
          choices: [
            { letter: "A", text: "professional carpenters selling furniture" },
            { letter: "B", text: "city officials deciding the shop's budget" },
            { letter: "C", text: "new members learning to use the shop safely" },
            { letter: "D", text: "parents choosing summer camps for children" }
          ],
          correct: "C"
        },
        {
          id: "supervision",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The guide ends sentence 15 with the words even under supervision mainly to —",
          choices: [
            { letter: "A", text: "make clear that a monitor cannot replace certification" },
            { letter: "B", text: "explain why the certification class costs $25" },
            { letter: "C", text: "list which machines are open after orientation" },
            { letter: "D", text: "remind members to wear hearing protection" }
          ],
          correct: "A"
        },
        {
          id: "reclaimed",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word reclaimed in sentence 17 begins with the prefix re-, as do rebuild and reuse. In reclaimed wood, the prefix re- suggests that the wood —",
          choices: [
            { letter: "A", text: "has never been cut before" },
            { letter: "B", text: "was bought at a low price" },
            { letter: "C", text: "is too damaged to be used" },
            { letter: "D", text: "is being used a second time" }
          ],
          correct: "D"
        },
        {
          id: "suspended",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 21, the word suspended most nearly means —",
          choices: [
            { letter: "A", text: "hung from above" },
            { letter: "B", text: "stopped for a set period" },
            { letter: "C", text: "changed to a new level" },
            { letter: "D", text: "shared with another member" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 12 · ARGUMENT · history of maps / map reading ───────────────────────── */
    {
      id: "g11-ri-c109-paper-map",
      family: "G11",
      title: "Fold It Back Up",
      kind: "Argument · 11.RI",
      blurb: "A hiking club loses its signal in a valley, and a geography teacher argues every student should learn the paper map.",
      level: 1,
      passage:
        "<p><strong>Why Every Student Should Learn to Read a Paper Map</strong><br>by Joaquín Herrera, geography teacher, Lakemont High School</p>" +
        "<p>" + N(1) + "Last October, our school's hiking club got lost. " +
        N(2) + "Not badly lost, and not for long, but lost enough to be frightening. " +
        N(3) + "Twelve students and two adults were following a trail app through the state forest when the phones lost their signal in a steep valley. " +
        N(4) + "The blue dot froze. " +
        N(5) + "The map on the screen went gray. " +
        N(6) + "And not one student in the group knew how to use the paper trail map folded in the leader's backpack.</p>" +
        "<p>" + N(7) + "I believe every high school student should be taught to read a paper map, and I believe it should happen in a required class, not an optional club. " +
        N(8) + "Here is why.</p>" +
        "<p>" + N(9) + "First, technology fails. " +
        N(10) + "Phones run out of battery, signals vanish in valleys and buildings, and apps sometimes send drivers down roads that have been closed for years. " +
        N(11) + "A paper map needs no charger and no signal. " +
        N(12) + "It is a backup that works exactly when backups are needed most.</p>" +
        "<p>" + N(13) + "Second, reading a map builds a kind of thinking that turn-by-turn directions do not. " +
        N(14) + "A navigation app tells you to turn left in two hundred feet; it never asks you to understand where you are. " +
        N(15) + "A paper map does. " +
        N(16) + "To use one, you must connect symbols to the land in front of you, judge distance using a scale, and figure out direction from the shape of a river or the angle of a road. " +
        N(17) + "Researchers who study navigation have found that people who rely entirely on step-by-step directions tend to remember less about the places they travel through. " +
        N(18) + "A map, in other words, does not just get you somewhere; it teaches you where you have been.</p>" +
        "<p>" + N(19) + "Some will argue that map reading is outdated, like learning to use a typewriter. " +
        N(20) + "I understand the comparison, but it does not hold. " +
        N(21) + "No one's safety depends on a typewriter. " +
        N(22) + "In an emergency, the ability to read contour lines or find north without a phone can be the difference between a long walk and a rescue call.</p>" +
        "<p>" + N(23) + "Finally, map reading is not difficult to teach. " +
        N(24) + "Three or four class periods, a set of local trail maps, and a walk around the school grounds with a compass would give every student the basics. " +
        N(25) + "Our science and social studies departments could share the lessons, and the cost would be almost nothing.</p>" +
        "<p>" + N(26) + "That October afternoon ended well. " +
        N(27) + "One of our adult chaperones, a retired surveyor, unfolded the paper map, found the creek we had crossed, and walked us back to the trailhead in forty minutes. " +
        N(28) + "The students were grateful. " +
        N(29) + "But I kept thinking about what would have happened if he had stayed home that day.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best states Mr. Herrera's central claim about paper maps?",
          choices: [
            { letter: "A", text: "Sentence 3, about the club following a trail app" },
            { letter: "B", text: "Sentence 11, about a map needing no charger" },
            { letter: "C", text: "Sentence 7, about requiring map lessons for all" },
            { letter: "D", text: "Sentence 27, about the chaperone finding the creek" }
          ],
          correct: "C"
        },
        {
          id: "body",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does Mr. Herrera organize the body of his argument in sentences 9–25?",
          choices: [
            { letter: "A", text: "as a series of reasons, with an objection answered along the way" },
            { letter: "B", text: "as a comparison of three different trail apps" },
            { letter: "C", text: "as a timeline of the hiking club's trip" },
            { letter: "D", text: "as a list of steps for reading contour lines" }
          ],
          correct: "A"
        },
        {
          id: "frame",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Mr. Herrera begins and ends the essay with the story of the hiking club mainly to —",
          choices: [
            { letter: "A", text: "show that the hiking club should be canceled" },
            { letter: "B", text: "frame his argument with a real case that shows the stakes" },
            { letter: "C", text: "prove that adults navigate better than students do" },
            { letter: "D", text: "describe the forest's trails in greater detail" }
          ],
          correct: "B"
        },
        {
          id: "memory",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence gives evidence that relying only on step-by-step directions may weaken a person's memory of places?",
          choices: [
            { letter: "A", text: "Sentence 10, about apps using closed roads" },
            { letter: "B", text: "Sentence 14, about turning left in two hundred feet" },
            { letter: "C", text: "Sentence 24, about class periods and compasses" },
            { letter: "D", text: "Sentence 17, about findings from navigation research" }
          ],
          correct: "D"
        },
        {
          id: "typewriter",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentence 21, the statement No one's safety depends on a typewriter mainly serves to —",
          choices: [
            { letter: "A", text: "point out the key way the typewriter comparison fails" },
            { letter: "B", text: "suggest that typewriters should return to classrooms" },
            { letter: "C", text: "admit that map reading really is out of date" },
            { letter: "D", text: "explain how typewriters and maps were invented" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from Mr. Herrera's essay is an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 3, that the phones lost signal in a valley" },
            { letter: "B", text: "Sentence 14, that an app gives directions in feet" },
            { letter: "C", text: "Sentence 27, that the walk back took forty minutes" },
            { letter: "D", text: "Sentence 23, that map reading is not hard to teach" }
          ],
          correct: "D"
        },
        {
          id: "aim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Mr. Herrera's primary purpose in the essay about paper maps is to —",
          choices: [
            { letter: "A", text: "tell the full story of a frightening hike" },
            { letter: "B", text: "compare several kinds of navigation apps" },
            { letter: "C", text: "convince schools to require map lessons" },
            { letter: "D", text: "explain how surveyors make trail maps" }
          ],
          correct: "C"
        },
        {
          id: "navigation",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word navigation in sentence 17 comes from the Latin root nav-, meaning ship, as in naval. Over time, navigation has come to mean —",
          choices: [
            { letter: "A", text: "the study of ships and their history" },
            { letter: "B", text: "finding and following a route to a place" },
            { letter: "C", text: "the act of drawing a map entirely by hand" },
            { letter: "D", text: "sailing only on very large bodies of water" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
