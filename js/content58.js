/* SOL Labyrinth — Grade 9 epic packs (VA 9.RL / 9.RI / 9.RV / 9.DSR), 540-650 words: app design and coding,
 * photography, a school newspaper, solar and wind energy. Original text only; no VDOE / copyrighted material.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · LITERARY · app design ───────────── */
    {
      id: "g9-rl-c58-version-seven",
      family: "G9",
      title: "Version Seven",
      kind: "Literary · 9.RL",
      blurb: "Amara's bus app is beautiful. Her downstairs neighbor cannot make it work.",
      level: 2,
      passage:
        "<p>" + N(1) + "Amara Okafor had rewritten the opening screen of her app six times, and each version was more beautiful than the last. " +
        N(2) + "The app, which she called Stopwatch, told riders in the town of Millbrook exactly when the next bus would reach their corner. " +
        N(3) + "Version six opened with a slow animation of a bus gliding across a sunrise, its windows glowing orange, before the map faded gently into view. " +
        N(4) + "Her coding club partner, Jae-won, had watched it twice and whistled. " +
        N(5) + "\"That looks like something a real company would make,\" he said, and Amara had saved the file with a small, private grin.</p>" +
        "<p>" + N(6) + "The club's adviser, Ms. Ferreira, had one rule for every project: before anyone presented, the app had to be tested by a person who had never seen it. " +
        N(7) + "Amara chose Mr. Haddad, who lived two floors below her and rode the Number 4 bus to the senior center every weekday morning. " +
        N(8) + "He was the reason she had started the project in the first place; back in January she had watched him standing at the stop in freezing rain, checking his watch and squinting down an empty street.</p>" +
        "<p>" + N(9) + "On Saturday she carried her phone downstairs and set it on his kitchen table beside a bowl of clementines. " +
        N(10) + "\"Just find out when your bus comes,\" she said. " +
        N(11) + "Mr. Haddad put on his reading glasses, then took them off, then put them on again. " +
        N(12) + "He watched the sunrise animation with polite interest. " +
        N(13) + "When the map appeared, he pressed the screen with one broad fingertip, and the app zoomed into a parking lot across town. " +
        N(14) + "He tried again and opened the settings menu instead. " +
        N(15) + "On the third try, a tiny gray arrow that Amara had considered elegant slid the whole screen sideways, and the bus times vanished entirely. " +
        N(16) + "\"It is very pretty,\" he said at last, handing the phone back the way a person returns a gift that does not fit. " +
        N(17) + "\"But I think it was made for someone with smaller hands than mine.\"</p>" +
        "<p>" + N(18) + "Amara climbed the stairs slowly. " +
        N(19) + "That night she opened the project and stared at the sunrise until it stopped looking like a sunrise and started looking like eleven seconds of waiting. " +
        N(20) + "She thought about the January rain. " +
        N(21) + "Nobody standing in bad weather wanted a show; they wanted a number. " +
        N(22) + "One by one, she deleted the things she was proudest of: the animation, the sliding arrow, the soft gray text that matched the logo. " +
        N(23) + "In their place she put a single question at the top of the screen, Which stop?, and below it the five nearest stops in letters large enough to read without glasses. " +
        N(24) + "Tap one, and the next arrival time filled half the screen in plain black numbers.</p>" +
        "<p>" + N(25) + "Jae-won frowned when he saw version seven on Monday. " +
        N(26) + "\"It looks like a calculator,\" he said. " +
        N(27) + "\"Where did the bus go?\" " +
        N(28) + "\"It's coming in four minutes,\" Amara said, pointing at the screen, and after a moment he laughed.</p>" +
        "<p>" + N(29) + "The following Saturday she knocked on Mr. Haddad's door again. " +
        N(30) + "This time he found his stop on the first tap, read the number aloud, and looked out the window as if checking whether the app was telling the truth. " +
        N(31) + "Down the street, right on time, the Number 4 turned the corner. " +
        N(32) + "He nodded once, the way he nodded at the end of a good chess game. " +
        N(33) + "\"Now,\" he said, \"it was made for me.\" " +
        N(34) + "Amara wrote the date in her notebook under a heading she had never needed before that week: People Who Taught Me Something.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story about Amara's bus app best develop?",
          choices: [
            { letter: "A", text: "Beautiful designs usually impress experts more than ordinary users." },
            { letter: "B", text: "Good design begins with the needs of the people who will use it." },
            { letter: "C", text: "Young programmers should keep their projects secret until finished." },
            { letter: "D", text: "Older neighbors are rarely interested in learning new technology." }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentence 8, readers can best infer that Amara began the project because she —",
          choices: [
            { letter: "A", text: "wanted to win the coding club's spring contest" },
            { letter: "B", text: "hoped to sell the finished app to the town" },
            { letter: "C", text: "saw a neighbor struggling with uncertain bus times" },
            { letter: "D", text: "was often late for the Number 4 bus herself" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Amara changes over the course of the story?",
          choices: [
            { letter: "A", text: "She moves from prizing how the app looks to prizing how well it works." },
            { letter: "B", text: "She moves from trusting Jae-won to ignoring every suggestion he makes." },
            { letter: "C", text: "She moves from loving coding to doubting she should ever code again." },
            { letter: "D", text: "She moves from patience with Mr. Haddad to frustration with his habits." }
          ],
          correct: "A"
        },
        {
          id: "gift",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 16, Mr. Haddad hands back the phone the way a person returns a gift that does not fit. This comparison suggests that he —",
          choices: [
            { letter: "A", text: "is annoyed that Amara has wasted his Saturday morning" },
            { letter: "B", text: "plans to buy a newer phone with a larger screen" },
            { letter: "C", text: "believes the app will cost him too much money" },
            { letter: "D", text: "wants to be kind while admitting the app fails him" }
          ],
          correct: "D"
        },
        {
          id: "waiting",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 19, the sunrise starts to look like eleven seconds of waiting. This shift mainly shows that Amara —",
          choices: [
            { letter: "A", text: "now sees the animation the way a rider would" },
            { letter: "B", text: "realizes that her phone's battery is failing" },
            { letter: "C", text: "has grown too tired to keep working tonight" },
            { letter: "D", text: "plans to make the animation even longer" }
          ],
          correct: "A"
        },
        {
          id: "rain",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The January rain mentioned in sentence 8 becomes important later in the story because it —",
          choices: [
            { letter: "A", text: "explains why the Number 4 bus runs late on Saturdays" },
            { letter: "B", text: "reminds Amara in sentences 20 and 21 what riders really need" },
            { letter: "C", text: "shows that Millbrook has unusually harsh winters each year" },
            { letter: "D", text: "gives Mr. Haddad a reason to stop riding the bus at all" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The story is told by a third-person narrator who stays close to Amara. This point of view mainly allows the reader to —",
          choices: [
            { letter: "A", text: "know what Mr. Haddad privately thinks of his neighbor" },
            { letter: "B", text: "hear Jae-won's full side of the disagreement" },
            { letter: "C", text: "learn how the bus company feels about the app" },
            { letter: "D", text: "follow Amara's thoughts as she rethinks her design" }
          ],
          correct: "D"
        },
        {
          id: "elegant",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 15, the word elegant most nearly means —",
          choices: [
            { letter: "A", text: "extremely costly" },
            { letter: "B", text: "hard to locate" },
            { letter: "C", text: "gracefully stylish" },
            { letter: "D", text: "quick to load" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 2 · LITERARY · photography ───────────── */
    {
      id: "g9-rl-c58-shoe-shop-light",
      family: "G9",
      title: "The Last Afternoon at Mensah's",
      kind: "Literary · 9.RL",
      blurb: "Kofi has a list of nine perfect photographs. His grandfather's shop has other plans.",
      level: 3,
      passage:
        "<p>" + N(1) + "The light in Mensah Shoe Repair had always been terrible, and on the shop's final afternoon Kofi was determined to defeat it. " +
        N(2) + "He had borrowed his aunt's second camera, two folding lamps, and a white umbrella that opened with a snap like a startled bird. " +
        N(3) + "His plan, written on an index card in his pocket, listed nine photographs: the sign over the door, the rows of polished heels, the old brass cash register, and six careful portraits of his grandfather, Kwabena, posed beside the workbench where he had mended shoes for forty-one years.</p>" +
        "<p>" + N(4) + "His grandfather tolerated the first portrait. " +
        N(5) + "He stood where Kofi pointed, lifted his chin when Kofi asked, and smiled the stiff, borrowed smile of a man at the dentist. " +
        N(6) + "For the second portrait he held a hammer he had not used in years. " +
        N(7) + "By the third, he was glancing past the lamps at the door, where neighbors had begun drifting in with coffee and stories. " +
        N(8) + "\"One more, Grandpa,\" Kofi said, adjusting the umbrella. " +
        N(9) + "\"Please don't look at the door.\" " +
        N(10) + "Kwabena looked at the door.</p>" +
        "<p>" + N(11) + "Mrs. Lindqvist from the bakery came first, carrying a pair of brown boots that he had resoled three times since her son was born. " +
        N(12) + "Then came Mr. Osei, who had walked eleven blocks to return an umbrella he had borrowed long ago, and two girls from the middle school who wanted to know whether the shop's cat was retiring too. " +
        N(13) + "Soon the narrow room was so full that Kofi's lamps had to be folded and leaned against the wall like tired herons. " +
        N(14) + "His index card said portrait number four. " +
        N(15) + "His grandfather was busy laughing.</p>" +
        "<p>" + N(16) + "Kofi retreated to the back corner, irritated, and raised the camera mostly so that he would have something to do with his hands. " +
        N(17) + "Without the lamps, the shop returned to its usual dim brown glow, and the shutter dragged, slow and unforgiving. " +
        N(18) + "He took pictures anyway, one after another, without checking a single setting: Mrs. Lindqvist pressing the boots to her chest; the cat asleep inside a shoebox; his grandfather's hands, cracked and dark with decades of polish, tying a last knot in a stranger's laces while he talked about something else entirely. " +
        N(19) + "In the viewfinder every image looked soft at the edges, smeared by the poor light. " +
        N(20) + "He decided he would delete them later.</p>" +
        "<p>" + N(21) + "That night, at his aunt's computer, Kofi scrolled past the six portraits quickly, barely pausing on any of them. " +
        N(22) + "They were sharp, bright, and correctly exposed, and in every one of them his grandfather looked like a man waiting to be allowed to leave. " +
        N(23) + "Then he reached the corner pictures. " +
        N(24) + "The blur was still there, but it no longer looked like a mistake. " +
        N(25) + "In the picture of the laces, his grandfather's fingers had moved during the long exposure, so that they seemed to hold two positions at once, as though the photograph had caught not a moment but a habit. " +
        N(26) + "Behind them, out of focus, the faces of the neighbors leaned in, warm as lamplight.</p>" +
        "<p>" + N(27) + "His aunt Abena looked over his shoulder for a long time. " +
        N(28) + "\"Which one are you printing for him?\" she asked. " +
        N(29) + "Kofi glanced at the index card lying beside the keyboard, with its nine neat boxes, four of them checked. " +
        N(30) + "Then he dragged the photograph of the hands to the center of the screen. " +
        N(31) + "\"This one,\" he said. " +
        N(32) + "\"It's the only one where he's actually there.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses the central theme of the story about the shoe repair shop?",
          choices: [
            { letter: "A", text: "Careful planning is the surest way to get the best results." },
            { letter: "B", text: "Small family businesses rarely survive in busy neighborhoods." },
            { letter: "C", text: "A truthful image of a person can matter more than a perfect one." },
            { letter: "D", text: "Family members should not try to photograph one another." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 21 and 22, readers can infer that Kofi realizes the posed portraits —",
          choices: [
            { letter: "A", text: "fail to show his grandfather as he really is" },
            { letter: "B", text: "are too dark and grainy to be printed well" },
            { letter: "C", text: "were spoiled by glare from the folding lamps" },
            { letter: "D", text: "include too many neighbors in the background" }
          ],
          correct: "A"
        },
        {
          id: "card",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Kofi at first values his plan more than the moment happening around him?",
          choices: [
            { letter: "A", text: "\"Mrs. Lindqvist from the bakery came first.\" (sentence 11)" },
            { letter: "B", text: "\"His index card said portrait number four.\" (sentence 14)" },
            { letter: "C", text: "\"Then he reached the corner pictures.\" (sentence 23)" },
            { letter: "D", text: "\"His aunt Abena looked over his shoulder.\" (sentence 27)" }
          ],
          correct: "B"
        },
        {
          id: "herons",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 13, the folded lamps are compared to tired herons mainly to suggest that the lamps —",
          choices: [
            { letter: "A", text: "are tall enough to light the whole crowded room" },
            { letter: "B", text: "were borrowed from someone who studies birds" },
            { letter: "C", text: "are about to tip over and break on the floor" },
            { letter: "D", text: "have been set aside as the gathering takes over" }
          ],
          correct: "D"
        },
        {
          id: "lamplight",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The image in sentence 26 of the neighbors' faces, warm as lamplight, mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "affection and closeness" },
            { letter: "B", text: "nervous suspense" },
            { letter: "C", text: "quiet disappointment" },
            { letter: "D", text: "playful confusion" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "Placed right after Kofi's request, sentence 10, Kwabena looked at the door, adds a tone that is best described as —",
          choices: [
            { letter: "A", text: "bitterly angry" },
            { letter: "B", text: "deeply mournful" },
            { letter: "C", text: "gently humorous" },
            { letter: "D", text: "coldly formal" }
          ],
          correct: "C"
        },
        {
          id: "light",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the shop's poor light, introduced in sentence 1, shape the events of the story?",
          choices: [
            { letter: "A", text: "It forces Kofi to use the lamps for every photograph he takes." },
            { letter: "B", text: "It causes the blur that Kofi first dislikes and later values." },
            { letter: "C", text: "It keeps most of the neighbors from coming inside the shop." },
            { letter: "D", text: "It is the main reason Kwabena has decided to close the shop." }
          ],
          correct: "B"
        },
        {
          id: "tolerated",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Sentence 4 says Kwabena tolerated the first portrait. Compared with enjoyed, the word tolerated suggests that he —",
          choices: [
            { letter: "A", text: "refused to take part at all" },
            { letter: "B", text: "was secretly thrilled by it" },
            { letter: "C", text: "did not understand the request" },
            { letter: "D", text: "put up with it without pleasure" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 3 · LITERARY · school newspaper ───────────── */
    {
      id: "g9-rl-c58-the-correction",
      family: "G9",
      title: "The Correction",
      kind: "Literary · 9.RL",
      blurb: "Diego's first newspaper article has his name on it. It also has one extra zero.",
      level: 1,
      passage:
        "<p>" + N(1) + "Diego Ramírez's first article for the Westfield Lantern came out on a Friday, and by second period he had read it eleven times. " +
        N(2) + "It was a short piece about the school cafeteria's new salad bar, which offered fresh vegetables, beans, and three kinds of dressing every day. " +
        N(3) + "It sat on page three, under a photo of shiny steel bowls, with his name printed in small capital letters beneath the headline. " +
        N(4) + "His mother had bought four copies at the front office and mailed one to his grandmother. " +
        N(5) + "His little sister had cut out his name and taped it to the refrigerator.</p>" +
        "<p>" + N(6) + "At lunch, the cafeteria manager, Mrs. Adeyemi, stopped at his table. " +
        N(7) + "She was holding a copy of the paper folded open to page three. " +
        N(8) + "\"Nice article,\" she said kindly. " +
        N(9) + "\"One problem, though.\" " +
        N(10) + "She pointed to the fourth paragraph, where a single line had been underlined in red pen. " +
        N(11) + "The article said the salad bar served four hundred students a day. " +
        N(12) + "\"I told you forty,\" she said. " +
        N(13) + "\"Forty on a good day.\"</p>" +
        "<p>" + N(14) + "Diego felt his face grow hot, as if someone had aimed a desk lamp straight at it. " +
        N(15) + "He pulled out his reporter's notebook and flipped back through the pages until he found the interview. " +
        N(16) + "There it was, in his own hurried handwriting: 40. " +
        N(17) + "Somewhere between the notebook and the keyboard, he had added a zero. " +
        N(18) + "It was one tiny circle, but it had turned a modest success into an impossible one.</p>" +
        "<p>" + N(19) + "After school he found the editor, a senior named Hana Sato, in the newspaper room. " +
        N(20) + "The room smelled like old coffee and printer ink, and its walls were covered with framed front pages from the past thirty years. " +
        N(21) + "Diego explained the mistake quickly, staring at the floor the whole time and twisting the notebook in his hands. " +
        N(22) + "He half expected Hana to take his name off the staff list.</p>" +
        "<p>" + N(23) + "Instead, she pulled a thick binder from the shelf and opened it on the table. " +
        N(24) + "Inside were dozens of small printed boxes, each one labeled Correction. " +
        N(25) + "\"Every reporter here has one,\" she said. " +
        N(26) + "She pointed to a box from two years earlier. " +
        N(27) + "It said that a story had spelled the principal's name wrong. " +
        N(28) + "\"That one's mine,\" Hana said with a shrug. " +
        N(29) + "\"You write the correction, we print it on page two, and you check your numbers twice next time.\"</p>" +
        "<p>" + N(30) + "Diego spent the whole evening writing the four sentences of his correction. " +
        N(31) + "It was harder than writing the entire article had been. " +
        N(32) + "He wanted to explain that he had been rushed, that the zero was an accident, and that the salad bar was still a good idea. " +
        N(33) + "In the end he cut all of that. " +
        N(34) + "The final version simply gave the right number, said the error was his, and thanked Mrs. Adeyemi for pointing it out.</p>" +
        "<p>" + N(35) + "The next issue came out two weeks later. " +
        N(36) + "His correction was printed in a tiny box near the bottom of page two, much smaller than his article had been. " +
        N(37) + "Diego read it only once, slowly, from the first word to the last. " +
        N(38) + "Then he went to the newspaper room and slid the clipping into the back of Hana's binder, right next to hers. " +
        N(39) + "On the first page of his notebook, in large letters, he wrote a new rule for every interview: Read it back.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story about Diego's first article?",
          choices: [
            { letter: "A", text: "School newspapers should avoid printing any numbers." },
            { letter: "B", text: "Praise from family matters more than praise from editors." },
            { letter: "C", text: "A single mistake can end a young reporter's career." },
            { letter: "D", text: "Owning a mistake honestly is part of doing good work." }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Diego cuts the explanations described in sentence 32 because he —",
          choices: [
            { letter: "A", text: "ran out of space on page three of the issue" },
            { letter: "B", text: "decides that excuses would weaken an honest correction" },
            { letter: "C", text: "forgot exactly how the mistake had happened" },
            { letter: "D", text: "wants Mrs. Adeyemi to share the blame for the error" }
          ],
          correct: "B"
        },
        {
          id: "hana",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Hana Sato in this story?",
          choices: [
            { letter: "A", text: "She is experienced and understanding." },
            { letter: "B", text: "She is strict and quick to punish." },
            { letter: "C", text: "She is careless and always rushed." },
            { letter: "D", text: "She is shy and unwilling to talk." }
          ],
          correct: "A"
        },
        {
          id: "lamp",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 14, Diego's face feels as if someone had aimed a desk lamp at it. This simile mainly shows that Diego —",
          choices: [
            { letter: "A", text: "is sitting too close to a window at lunch" },
            { letter: "B", text: "has a fever and should go to the nurse" },
            { letter: "C", text: "feels embarrassed and exposed by the error" },
            { letter: "D", text: "is angry at Mrs. Adeyemi for interrupting" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final paragraph of \"The Correction\" (sentences 35–39) is best described as —",
          choices: [
            { letter: "A", text: "panicked and hurried" },
            { letter: "B", text: "calm and quietly settled" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "silly and playful" }
          ],
          correct: "B"
        },
        {
          id: "room",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 20 about framed front pages from the past thirty years mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the newspaper room needs to be cleaned and repainted" },
            { letter: "B", text: "Hana plans to frame Diego's salad bar article soon" },
            { letter: "C", text: "the school has recently stopped printing the paper" },
            { letter: "D", text: "the paper has a long history that Diego has now joined" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator shares Diego's private thoughts, the reader learns that Diego —",
          choices: [
            { letter: "A", text: "expects Hana to remove him from the staff" },
            { letter: "B", text: "thinks the salad bar was a poor idea" },
            { letter: "C", text: "plans to quit the newspaper after this issue" },
            { letter: "D", text: "believes Mrs. Adeyemi gave him the wrong number" }
          ],
          correct: "A"
        },
        {
          id: "modest",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "The word modest can describe a shy person or a limited amount. As used in sentence 18, modest most nearly means —",
          choices: [
            { letter: "A", text: "shy about one's talents" },
            { letter: "B", text: "hidden from public view" },
            { letter: "C", text: "moderate in size" },
            { letter: "D", text: "simple in style" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 4 · DRAMA · wind energy ───────────── */
    {
      id: "g9-rl-c58-paper-cups",
      family: "G9",
      title: "Coffee Cups for the Wind",
      kind: "Drama · 9.RL",
      blurb: "Nadia has three weeks of wind numbers. Her grandfather has a notebook nobody is allowed to touch.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A windy evening on a ridge-top farm. The porch of an old farmhouse. A homemade wind meter, four paper cups fixed to a spinning stick, whirls on the railing. NADIA PETROV, fifteen, sits with a clipboard. Her younger brother LEV leans in the doorway.</em></p>" +
        "<p><strong>NADIA:</strong> " + N(2) + "Twenty-two miles an hour. Lev, write that down before it changes.</p>" +
        "<p><strong>LEV:</strong> <em>(writing on his palm)</em> " + N(3) + "You've been writing numbers for three weeks. The cups don't care.</p>" +
        "<p><strong>NADIA:</strong> " + N(4) + "The cups are proving something. This ridge gets steady wind almost every afternoon. A small turbine could run the barn lights and the well pump without a single bill.</p>" +
        "<p><strong>LEV:</strong> <em>(aside, to the audience)</em> " + N(5) + "She thinks Grandpa will laugh her right off the porch. She doesn't know I saw him at the computer last night, reading about turbines with his glasses pushed up on his forehead.</p>" +
        "<p><em>" + N(6) + "GRANDPA VIKTOR enters from the yard, wiping his hands on a rag. He stops and stares at the spinning cups.</em></p>" +
        "<p><strong>VIKTOR:</strong> " + N(7) + "What is this? Are we serving coffee to the wind now?</p>" +
        "<p><strong>NADIA:</strong> " + N(8) + "It measures wind speed, Grandpa. I built it for my science class.</p>" +
        "<p><strong>VIKTOR:</strong> " + N(9) + "My father farmed this ridge, and his father before him. The wind blew the whole time. Nobody needed paper cups to tell them so.</p>" +
        "<p><strong>NADIA:</strong> <em>(standing, holding out the clipboard)</em> " + N(10) + "But nobody wrote it down. Look. Twenty-one days, and on eighteen of them the wind was strong enough to turn a turbine.</p>" +
        "<p><strong>VIKTOR:</strong> <em>(not taking the clipboard)</em> " + N(11) + "Turbines are for big companies with big hills and big money. A tower here would scare the chickens and snap in the first ice storm.</p>" +
        "<p><strong>LEV:</strong> <em>(aside)</em> " + N(12) + "Here it comes. He always says the chickens.</p>" +
        "<p><strong>NADIA:</strong> " + N(13) + "A small one wouldn't go near the house. It would go on the high corner past the orchard. I already measured the distance to the barn.</p>" +
        "<p><strong>VIKTOR:</strong> <em>(sitting heavily on the step)</em> " + N(14) + "You measured. You counted. You did all of this without once asking me.</p>" +
        "<p><strong>NADIA:</strong> <em>(quietly)</em> " + N(15) + "I wanted proof first. I thought if I just asked, you'd say no before I finished the sentence.</p>" +
        "<p><em>" + N(16) + "A long pause. The cups spin faster, rattling against the railing. VIKTOR watches them for a while without speaking.</em></p>" +
        "<p><strong>VIKTOR:</strong> " + N(17) + "Lev. Go inside and bring me the green notebook from the top of the bookcase. The one with the broken spine.</p>" +
        "<p><strong>LEV:</strong> <em>(aside, startled)</em> " + N(18) + "The green notebook? Nobody is allowed to touch that.</p>" +
        "<p><em>" + N(19) + "LEV exits and returns with a battered notebook. VIKTOR opens it on his knee and turns it toward NADIA.</em></p>" +
        "<p><strong>VIKTOR:</strong> " + N(20) + "My father kept this. Every morning for thirty years he wrote three things: the rain, the frost, and which way the weathervane pointed.</p>" +
        "<p><strong>NADIA:</strong> <em>(turning pages, amazed)</em> " + N(21) + "Grandpa, there are numbers in here. He was judging the wind by the trees.</p>" +
        "<p><strong>VIKTOR:</strong> " + N(22) + "He called it reading the orchard. Leaves trembling, he wrote one. Branches bending, three. Whole trees leaning, five, and he brought the animals into the barn.</p>" +
        "<p><strong>NADIA:</strong> " + N(23) + "Then he was doing the same thing I'm doing.</p>" +
        "<p><strong>VIKTOR:</strong> <em>(a small smile)</em> " + N(24) + "Slower. And with no cups.</p>" +
        "<p><em>" + N(25) + "He hands the clipboard back to her, then taps the notebook twice.</em></p>" +
        "<p><strong>VIKTOR:</strong> " + N(26) + "Put his numbers next to yours. If thirty years of the orchard agrees with three weeks of coffee cups, then we will call the turbine people together. I will ask the questions about ice storms.</p>" +
        "<p><strong>LEV:</strong> <em>(aside, grinning)</em> " + N(27) + "He already has the list of questions. I saw it on the printer.</p>" +
        "<p><strong>NADIA:</strong> <em>(hugging the notebook to her chest)</em> " + N(28) + "Deal.</p>" +
        "<p><em>" + N(29) + "The wind gusts. The cups spin so fast they blur. All three turn to look at the high corner past the orchard as the lights fade.</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Lev's aside in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "hint that Grandpa may be more open to the idea than Nadia believes" },
            { letter: "B", text: "show that Lev plans to tell Nadia everything he saw last night" },
            { letter: "C", text: "explain how the paper-cup wind meter measures wind speed" },
            { letter: "D", text: "reveal that Lev wants to build a turbine of his own someday" }
          ],
          correct: "A"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Lev's aside in sentence 27 is humorous mainly because the audience knows that —",
          choices: [
            { letter: "A", text: "Nadia has already called the turbine company herself" },
            { letter: "B", text: "the printer in the house has been broken for weeks" },
            { letter: "C", text: "Grandpa has quietly prepared, though he acts reluctant" },
            { letter: "D", text: "the green notebook is missing several important pages" }
          ],
          correct: "C"
        },
        {
          id: "pause",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 16 mainly serves to —",
          choices: [
            { letter: "A", text: "signal that the storm is about to damage the porch" },
            { letter: "B", text: "create a tense silence while Viktor reconsiders" },
            { letter: "C", text: "show that Nadia has given up on her project" },
            { letter: "D", text: "move the action indoors for the final scene" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the play about Nadia's wind meter best develop?",
          choices: [
            { letter: "A", text: "Older generations should leave big decisions to the young." },
            { letter: "B", text: "Science projects are more useful than family traditions." },
            { letter: "C", text: "Farming has changed very little over the past century." },
            { letter: "D", text: "Old knowledge and new methods can support each other." }
          ],
          correct: "D"
        },
        {
          id: "hurt",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 14 and 15, readers can best infer that Viktor feels hurt mainly because —",
          choices: [
            { letter: "A", text: "Nadia gathered her evidence without including him" },
            { letter: "B", text: "Lev wrote the numbers on his palm instead of paper" },
            { letter: "C", text: "the turbine would be placed too close to the barn" },
            { letter: "D", text: "his father's notebook had been moved from its shelf" }
          ],
          correct: "A"
        },
        {
          id: "blur",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In the final stage direction, the cups spin so fast they blur. This closing image mainly suggests —",
          choices: [
            { letter: "A", text: "that the homemade wind meter is about to break apart" },
            { letter: "B", text: "that the family will have to go inside before the storm" },
            { letter: "C", text: "a rising energy and excitement around the shared plan" },
            { letter: "D", text: "that Viktor still believes the idea is too dangerous" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of Viktor's reply in sentence 24, Slower. And with no cups, is best described as —",
          choices: [
            { letter: "A", text: "harsh and dismissive" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "dry and affectionate" }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the windy porch setting affect the conflict between Nadia and Viktor?",
          choices: [
            { letter: "A", text: "The noise of the wind keeps them from hearing each other clearly." },
            { letter: "B", text: "The spinning cups keep Nadia's evidence in front of Viktor the whole time." },
            { letter: "C", text: "The cold weather forces the family to end the argument early." },
            { letter: "D", text: "The ice on the railing proves that Viktor's worries are correct." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 5 · INFORMATIONAL · solar energy ───────────── */
    {
      id: "g9-ri-c58-catching-sunlight",
      family: "G9",
      title: "Catching Sunlight",
      kind: "Informational · 9.RI",
      blurb: "How a thin slice of silicon turns light into electricity, and why the sun is not always enough.",
      level: 2,
      passage:
        "<p>" + N(1) + "Each day, far more sunlight reaches Earth's surface than all of humanity uses in energy, if only people could capture it. " +
        N(2) + "Solar panels are one way of trying. " +
        N(3) + "On rooftops, over parking lots, and across fields that once grew corn, these dark rectangles quietly turn light into electricity without burning fuel or making noise. " +
        N(4) + "Understanding how they work helps explain both their promise and their limits.</p>" +
        "<p><strong>Inside the Cell</strong> " + N(5) + "A solar panel is made of many smaller units called photovoltaic cells. " +
        N(6) + "The name combines photo, from a Greek word for light, with volt, a unit of electrical force. " +
        N(7) + "Most cells are thin wafers of silicon, the same element found in ordinary sand, treated so that one layer has extra electrons and the layer beneath it has too few. " +
        N(8) + "When sunlight strikes the cell, its energy knocks electrons loose. " +
        N(9) + "Because of the difference between the two layers, the freed electrons are pushed in one direction, and thin metal lines printed on the surface collect them. " +
        N(10) + "That steady push of electrons is an electric current.</p>" +
        "<p><strong>From Panel to Plug</strong> " + N(11) + "The current a panel produces is direct current, which flows in only one direction. " +
        N(12) + "Homes and schools, however, run on alternating current, which reverses direction many times each second. " +
        N(13) + "For that reason, every solar system includes a box called an inverter that converts one kind of current into the other. " +
        N(14) + "Many systems are also connected to the regular power grid. " +
        N(15) + "On a bright afternoon, a building may produce more electricity than it uses, and the extra flows out to neighbors; at night, the building draws power back from the grid.</p>" +
        "<p><strong>The Limits of Light</strong> " + N(16) + "Solar power has an obvious weakness: the sun does not always shine. " +
        N(17) + "Thick clouds can cut a panel's output by more than half, and at night the output falls to zero. " +
        N(18) + "Panels also lose efficiency when they get very hot, which surprises many people who assume that the hottest days must be the best ones. " +
        N(19) + "Even the best common panels convert only about one fifth of the sunlight that hits them into electricity; the rest is reflected or turned into heat. " +
        N(20) + "Engineers respond to these limits in several ways. " +
        N(21) + "They tilt panels toward the sun at an angle that depends on how far a site is from the equator, and some large installations use motors that slowly turn the panels to follow the sun across the sky. " +
        N(22) + "Increasingly, they also pair panels with batteries that store daytime energy for use after dark.</p>" +
        "<p><strong>A School That Runs on Sunshine</strong> " + N(23) + "Consider a high school that covered its gym roof and two parking lots with panels. " +
        N(24) + "In its first year, the system supplied about sixty percent of the school's electricity, and the savings paid for new science equipment. " +
        N(25) + "Students in an environmental science class now track the panels' daily output on a screen in the main hall. " +
        N(26) + "During a cloudy week in February, the numbers dip; in May, they climb. " +
        N(27) + "The screen has become a kind of daily lesson in how closely the school's power depends on the sky.</p>" +
        "<p>" + N(28) + "Solar panels will not solve every energy problem on their own. " +
        N(29) + "Still, as panels become cheaper and batteries improve, the dark rectangles on rooftops are likely to become even more common. " +
        N(30) + "In my view, few inventions are as beautiful: a thin slice of sand, a beam of light, and a current where none existed before.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Catching Sunlight\"?",
          choices: [
            { letter: "A", text: "Solar panels will soon replace every other source of electricity." },
            { letter: "B", text: "Silicon is the most useful element found in ordinary sand." },
            { letter: "C", text: "Solar panels turn light into power but face limits engineers work around." },
            { letter: "D", text: "Schools should pay for solar panels with money from science budgets." }
          ],
          correct: "C"
        },
        {
          id: "inverter",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, what is the job of an inverter?",
          choices: [
            { letter: "A", text: "It changes direct current into alternating current." },
            { letter: "B", text: "It turns the panels slowly to follow the sun." },
            { letter: "C", text: "It stores daytime energy for use after dark." },
            { letter: "D", text: "It knocks electrons loose from the silicon layers." }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from \"Catching Sunlight\" states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 11, about the direction direct current flows" },
            { letter: "B", text: "Sentence 17, about how clouds affect a panel's output" },
            { letter: "C", text: "Sentence 24, about the school's first-year results" },
            { letter: "D", text: "Sentence 30, about how beautiful the invention is" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The sections of the article are arranged mainly to —",
          choices: [
            { letter: "A", text: "compare solar power with wind power point by point" },
            { letter: "B", text: "move from how a cell works to how panels are used in real life" },
            { letter: "C", text: "tell the history of solar panels in time order" },
            { letter: "D", text: "list problems with solar power from least to most serious" }
          ],
          correct: "B"
        },
        {
          id: "hot",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 18, about panels on very hot days, mainly to —",
          choices: [
            { letter: "A", text: "correct a common belief about when panels work best" },
            { letter: "B", text: "explain why solar panels are dark in color" },
            { letter: "C", text: "argue that panels should be built only in cold places" },
            { letter: "D", text: "show how batteries store energy for the night" }
          ],
          correct: "A"
        },
        {
          id: "weather",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that solar output depends heavily on weather?",
          choices: [
            { letter: "A", text: "Sentence 6, which explains where the word photovoltaic comes from" },
            { letter: "B", text: "Sentence 13, which describes the inverter in every system" },
            { letter: "C", text: "Sentence 17, which says clouds can cut output by more than half" },
            { letter: "D", text: "Sentence 24, which says savings paid for science equipment" }
          ],
          correct: "C"
        },
        {
          id: "photo",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Sentence 6 explains that photovoltaic joins photo, meaning light, with volt. Based on these word parts, a photovoltaic cell is one that —",
          choices: [
            { letter: "A", text: "takes pictures of the sun" },
            { letter: "B", text: "produces electricity from light" },
            { letter: "C", text: "measures heat in the air" },
            { letter: "D", text: "reflects light back to the sky" }
          ],
          correct: "B"
        },
        {
          id: "wafers",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 7, the word wafers most nearly means —",
          choices: [
            { letter: "A", text: "small sweet crackers" },
            { letter: "B", text: "rough, heavy blocks" },
            { letter: "C", text: "loose grains of powder" },
            { letter: "D", text: "thin, flat slices" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 6 · INFORMATIONAL · photography ───────────── */
    {
      id: "g9-ri-c58-golden-hour",
      family: "G9",
      title: "The Golden Hour",
      kind: "Informational · 9.RI",
      blurb: "Why photographers wake before dawn, and what the atmosphere does to sunlight on its way down.",
      level: 3,
      passage:
        "<p>" + N(1) + "Ask a group of experienced photographers when they like to work, and many will give the same strange answer: just after sunrise and just before sunset. " +
        N(2) + "They call these stretches the golden hour, though the name is not exact; depending on the season and the place, the soft glow may last twenty minutes or well over an hour. " +
        N(3) + "To understand why photographers will wake at four in the morning to catch it, it helps to understand what happens to sunlight on its way to the ground.</p>" +
        "<p>" + N(4) + "Sunlight looks white, but it is actually a mixture of every color in the rainbow. " +
        N(5) + "When it passes through the atmosphere, tiny gas molecules scatter some of those colors more than others. " +
        N(6) + "Blue light, which travels in shorter waves, is scattered the most; that is why the daytime sky looks blue. " +
        N(7) + "When the sun is low near the horizon, however, its light must pass through far more air to reach a viewer. " +
        N(8) + "By the time it arrives, much of the blue has been scattered away, and what remains is rich in reds, oranges, and yellows. " +
        N(9) + "The result is the warm, honey-colored light that gives the golden hour its name.</p>" +
        "<p>" + N(10) + "The low angle matters just as much as the color. " +
        N(11) + "At noon, the sun sits nearly overhead and acts like a single bare bulb hanging from the ceiling. " +
        N(12) + "It throws short, dark shadows straight down, so that people's eyes sink into shadow beneath their brows while the tips of their noses shine. " +
        N(13) + "Many photographers describe noon light as harsh, and some joke that the midday sun is a bully that flattens everything it touches. " +
        N(14) + "In the golden hour, by contrast, light arrives from the side. " +
        N(15) + "Shadows stretch long across the ground, revealing the texture of bark, sand, and brick, and faces are lit evenly and gently. " +
        N(16) + "Because the light is dimmer, the difference between the brightest and darkest parts of a scene is smaller, so cameras can record detail in both.</p>" +
        "<p>" + N(17) + "Photographers also prize a second, shorter window called the blue hour. " +
        N(18) + "It begins after the sun has dropped below the horizon, when no direct sunlight reaches the ground but the sky still glows. " +
        N(19) + "During this time, the light takes on a cool, deep blue tone, and city lights begin to sparkle against it. " +
        N(20) + "Landscape photographers often use the blue hour for quiet, calm scenes, while the golden hour suits images meant to feel warm and inviting.</p>" +
        "<p>" + N(21) + "None of this means that good photographs are impossible at midday. " +
        N(22) + "Photographers working at noon look for open shade beneath trees or buildings, where light bounces in softly from all directions. " +
        N(23) + "Some carry a reflector, a lightweight folding disk of silvery fabric that bounces sunlight back into shadowed faces and softens the dark areas under eyes. " +
        N(24) + "Others simply use the harshness on purpose, letting deep shadows create strong shapes and drama. " +
        N(25) + "A few photographers even predict that as phone cameras grow better at handling difficult light, the golden hour may lose some of its special status.</p>" +
        "<p>" + N(26) + "For now, though, the habit persists among beginners and professionals alike. " +
        N(27) + "On any clear evening, at beaches, overlooks, and city rooftops, people can be seen waiting with cameras raised, watching the sky change color minute by minute. " +
        N(28) + "They know that the light they are waiting for will not last long, and that brief, fading quality is part of its appeal.</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes \"The Golden Hour\"?",
          choices: [
            { letter: "A", text: "Phone cameras have made the time of day unimportant to photographers." },
            { letter: "B", text: "Low, warm light near sunrise and sunset has qualities photographers value." },
            { letter: "C", text: "Midday sunlight makes good photographs impossible for most people." },
            { letter: "D", text: "The blue hour is more popular with photographers than the golden hour." }
          ],
          correct: "B"
        },
        {
          id: "warm",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why does golden-hour light look warmer than light at noon?",
          choices: [
            { letter: "A", text: "The sun gives off more red light in the morning and evening." },
            { letter: "B", text: "City lights add an orange tint to the sky near the horizon." },
            { letter: "C", text: "Clouds gather at sunrise and sunset and block blue light." },
            { letter: "D", text: "Light from a low sun crosses more air, which scatters the blue." }
          ],
          correct: "D"
        },
        {
          id: "predict",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from \"The Golden Hour\" presents a prediction rather than an established fact?",
          choices: [
            { letter: "A", text: "Sentence 25, about phone cameras and the golden hour's status" },
            { letter: "B", text: "Sentence 6, about why the daytime sky looks blue" },
            { letter: "C", text: "Sentence 18, about when the blue hour begins" },
            { letter: "D", text: "Sentence 23, about how a reflector is used" }
          ],
          correct: "A"
        },
        {
          id: "cause",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 4–9 are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of tips for photographing at sunrise" },
            { letter: "B", text: "a comparison of two photographers' opinions" },
            { letter: "C", text: "a cause-and-effect explanation of warm light" },
            { letter: "D", text: "a problem followed by several possible solutions" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The author opens the passage with the strange answer in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "suggest that most photographers dislike daytime work" },
            { letter: "B", text: "show that photographers rarely agree with one another" },
            { letter: "C", text: "argue that people should wake up earlier each day" },
            { letter: "D", text: "spark curiosity about a habit the passage will explain" }
          ],
          correct: "D"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that cameras capture more detail in golden-hour light than at noon?",
          choices: [
            { letter: "A", text: "Sentence 2, about how long the golden hour may last" },
            { letter: "B", text: "Sentence 16, about the smaller gap between bright and dark" },
            { letter: "C", text: "Sentence 11, about the sun acting like a bare bulb" },
            { letter: "D", text: "Sentence 19, about city lights during the blue hour" }
          ],
          correct: "B"
        },
        {
          id: "harsh",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written bright instead of harsh in sentence 13. Compared with bright, the word harsh adds a sense that the light is —",
          choices: [
            { letter: "A", text: "cheerful and lively" },
            { letter: "B", text: "pale and weak" },
            { letter: "C", text: "unpleasantly severe" },
            { letter: "D", text: "constantly changing" }
          ],
          correct: "C"
        },
        {
          id: "bully",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 13, some photographers joke that the midday sun is a bully. This figure of speech suggests that noon light —",
          choices: [
            { letter: "A", text: "overpowers a scene and treats its subjects roughly" },
            { letter: "B", text: "disappears quickly when clouds move across the sky" },
            { letter: "C", text: "is too weak to light a photograph without help" },
            { letter: "D", text: "makes the sky look a deeper shade of blue" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 7 · VOCABULARY · app design and coding ───────────── */
    {
      id: "g9-rv-c58-hour-nineteen",
      family: "G9",
      title: "Hour Nineteen",
      kind: "Vocabulary · 9.RV",
      blurb: "A textbook-swap app, a hackathon gym at midnight, and an error message that explains nothing.",
      level: 3,
      passage:
        "<p>" + N(1) + "At hour nineteen of the Riverside Youth Hackathon, the app that Ibrahim Sesay and Rafaela Costa had been building stopped working entirely. " +
        N(2) + "It was meant to be simple: a tool that let students at their school swap used textbooks by posting a photo of a book and a price in under a minute. " +
        N(3) + "On Friday evening, they had sketched a <strong>rudimentary</strong> version on a paper napkin, just four boxes and a few arrows, nothing anyone would mistake for a finished product. " +
        N(4) + "By Saturday afternoon, that sketch had grown into hundreds of lines of code, and the code had grown into a problem.</p>" +
        "<p>" + N(5) + "Each time Rafaela tapped the upload button, the screen froze and then displayed the same <strong>cryptic</strong> message: Error 0x3F, process terminated. " +
        N(6) + "It explained nothing. " +
        N(7) + "It did not say which part had failed or why, and searching for it online turned up only forum posts from other confused programmers asking the same question. " +
        N(8) + "The message sat on the screen like a riddle that refused to admit it had an answer.</p>" +
        "<p>" + N(9) + "\"We could just remove the photo feature,\" Ibrahim said, rubbing his eyes. " +
        N(10) + "The judges would arrive in five hours. " +
        N(11) + "Around them, the community center gym was a sea of laptops, energy-bar wrappers, and teammates asleep on folded jackets.</p>" +
        "<p>" + N(12) + "Rafaela shook her head. " +
        N(13) + "\"Without photos, nobody will trust the listings,\" she said. " +
        N(14) + "\"That's the whole point.\" " +
        N(15) + "She was not a loud person, but she was <strong>tenacious</strong>; once she decided that a problem could be solved, she held on to it the way a terrier holds a rope. " +
        N(16) + "She opened a fresh notebook page and began to <strong>debug</strong> the program one small piece at a time, switching features off and on until the error appeared or disappeared.</p>" +
        "<p>" + N(17) + "Ibrahim, meanwhile, did something he would later call the smartest move of the weekend: he handed the app to a stranger. " +
        N(18) + "A middle schooler named Tomasz, whose own team had given up hours earlier, agreed to try it. " +
        N(19) + "Ibrahim did not explain a single button. " +
        N(20) + "He simply watched. " +
        N(21) + "Tomasz frowned at the home screen, tapped the wrong icon twice, and finally asked, \"Where do I put the book?\" " +
        N(22) + "The upload button, Ibrahim realized, was hidden behind a menu that made sense only to the two people who had built it. " +
        N(23) + "An app that needed instructions was not <strong>intuitive</strong>, no matter how clever its code.</p>" +
        "<p>" + N(24) + "At hour twenty-one, Rafaela found the bug. " +
        N(25) + "Photos from newer phones were too large, and the program choked on them; a single line meant to shrink each image had been accidentally deleted on Friday night. " +
        N(26) + "That one line, she said, had become the Achilles' heel of the entire project. " +
        N(27) + "She restored it, held her breath, and tapped upload. " +
        N(28) + "A slightly blurry picture of a chemistry textbook appeared on the screen, priced at twelve dollars.</p>" +
        "<p>" + N(29) + "They spent the final hours on a new <strong>iteration</strong> of the design. " +
        N(30) + "The upload button moved to the center of the home screen, grew three times larger, and received a plain label: Sell a Book. " +
        N(31) + "When Tomasz tried the app again, he posted his own math workbook in forty seconds without asking a single question.</p>" +
        "<p>" + N(32) + "The team did not win first place; that honor went to a group that had built a robot to water classroom plants. " +
        N(33) + "But when the judges tried the textbook app, none of them needed help. " +
        N(34) + "On the bus home, Ibrahim wrote two lessons on the back of the napkin, beneath the four original boxes: Test with strangers. Never trust Error 0x3F.</p>",
      claims: [
        {
          id: "rudimentary",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, which words best help the reader understand the meaning of rudimentary?",
          choices: [
            { letter: "A", text: "\"four boxes and a few arrows\"" },
            { letter: "B", text: "\"On Friday evening, they had\"" },
            { letter: "C", text: "\"they had sketched a version\"" },
            { letter: "D", text: "\"on a paper napkin from dinner\"" }
          ],
          correct: "A"
        },
        {
          id: "cryptic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on sentences 5–7, the word cryptic most nearly means —",
          choices: [
            { letter: "A", text: "loud and alarming" },
            { letter: "B", text: "brief and polite" },
            { letter: "C", text: "puzzling and unclear" },
            { letter: "D", text: "old and outdated" }
          ],
          correct: "C"
        },
        {
          id: "debug",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix de- can mean remove, as in defrost. Based on this prefix and on sentence 16, to debug a program is to —",
          choices: [
            { letter: "A", text: "add new features to it" },
            { letter: "B", text: "find and remove its errors" },
            { letter: "C", text: "copy it onto a new device" },
            { letter: "D", text: "explain it to the judges" }
          ],
          correct: "B"
        },
        {
          id: "iteration",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word iteration in sentence 29 is related to reiterate, which means to do or say again. An iteration of a design is best described as —",
          choices: [
            { letter: "A", text: "a written list of the design's flaws" },
            { letter: "B", text: "the first rough sketch of an idea" },
            { letter: "C", text: "a prize given for the best design" },
            { letter: "D", text: "a repeated round of work that yields a new version" }
          ],
          correct: "D"
        },
        {
          id: "tenacious",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Sentence 15 calls Rafaela tenacious. Compared with stubborn, the word tenacious has a connotation that is more —",
          choices: [
            { letter: "A", text: "critical, suggesting she refuses to listen" },
            { letter: "B", text: "neutral, suggesting she works slowly" },
            { letter: "C", text: "admiring, suggesting firm determination" },
            { letter: "D", text: "worried, suggesting she is overwhelmed" }
          ],
          correct: "C"
        },
        {
          id: "intuitive",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written easy instead of intuitive in sentence 23. Compared with easy, intuitive adds the idea that an app —",
          choices: [
            { letter: "A", text: "makes sense to users without being explained" },
            { letter: "B", text: "costs very little money to download" },
            { letter: "C", text: "takes only a short time to program" },
            { letter: "D", text: "runs quickly even on older phones" }
          ],
          correct: "A"
        },
        {
          id: "achilles",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 26, Rafaela calls the missing line the Achilles' heel of the project. This allusion suggests that the line was —",
          choices: [
            { letter: "A", text: "the oldest part of the code they had written" },
            { letter: "B", text: "a feature that the judges would admire most" },
            { letter: "C", text: "a step that Ibrahim had added without asking" },
            { letter: "D", text: "a small weak spot that could sink the whole app" }
          ],
          correct: "D"
        },
        {
          id: "riddle",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 8, the error message is compared to a riddle that refused to admit it had an answer. This comparison mainly emphasizes that the message —",
          choices: [
            { letter: "A", text: "was written in a playful, joking style" },
            { letter: "B", text: "seemed to hold back the information they needed" },
            { letter: "C", text: "appeared only once during the whole weekend" },
            { letter: "D", text: "was easy to solve once they had some rest" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 8 · FUNCTIONAL · school newspaper ───────────── */
    {
      id: "g9-ri-c58-beacon-guide",
      family: "G9",
      title: "Writing for the Beacon",
      kind: "Functional text · 9.RI",
      blurb: "A student newspaper's guide to deadlines, quotes, photos and corrections.",
      level: 1,
      passage:
        "<p><strong>The Bayview Beacon: A Guide for Student Contributors</strong> " + N(1) + "The Bayview Beacon is the student newspaper of Bayview High School, published online every Friday and in print four times a year. " +
        N(2) + "Any student, in any grade, may submit work, whether or not they are enrolled in the newspaper class. " +
        N(3) + "This guide explains what we publish, how to submit, and the standards every piece must meet before it appears.</p>" +
        "<p><strong>What We Publish</strong> " + N(4) + "We accept four kinds of submissions: news articles, feature stories, opinion columns, and photographs. " +
        N(5) + "News articles report recent events at school or in the community and should be between 300 and 600 words. " +
        N(6) + "Feature stories take a closer look at a person, club, or trend and may run up to 900 words. " +
        N(7) + "Opinion columns share a writer's view on an issue and must be clearly labeled as opinion. " +
        N(8) + "Photographs must be taken by the student who submits them, and each one should relate to a school or community event from the past month.</p>" +
        "<p><strong>Deadlines</strong> " + N(9) + "Online submissions are due by 3:00 p.m. on Monday for that Friday's edition. " +
        N(10) + "Print submissions are due three weeks before each print date; the dates are posted on the door of Room 214 and on the Beacon website. " +
        N(11) + "Late work will not be rejected; it will simply be considered for the following edition instead.</p>" +
        "<p><strong>How to Submit</strong> " + N(12) + "Send your work as an attached document to the editors' email address listed on the website, and please do not paste your writing into the body of the email. " +
        N(13) + "In the subject line, write the type of submission and a short title, such as \"News: New Bus Schedule.\" " +
        N(14) + "Include your full name, your grade, and a school email address where an editor can reach you. " +
        N(15) + "Send photographs as separate image files, not pasted into a document, along with a caption that names everyone pictured.</p>" +
        "<p><strong>Our Standards</strong> " + N(16) + "Every news and feature story is fact-checked by an editor before publication. " +
        N(17) + "Writers must keep their interview notes or recordings for at least one month after a story runs, in case a question about the story comes up later. " +
        N(18) + "Before quoting anyone, tell the person that you are writing for the Beacon and that their words may be printed. " +
        N(19) + "Spell every name exactly as the person spells it; when in doubt, ask. " +
        N(20) + "Opinion columns may be strongly worded, but they may not include personal attacks on students or staff. " +
        N(21) + "Editors may shorten any submission for length or clarity, and writers will see the edited version before it is published.</p>" +
        "<p><strong>Corrections</strong> " + N(22) + "If the Beacon prints an error, we correct it in the next edition, on page two in print or at the top of the online story. " +
        N(23) + "Anyone who spots a mistake, including students, teachers, parents, and the people we write about, may report it to the editors by email or in person. " +
        N(24) + "We believe that admitting our errors openly makes readers trust us more, not less.</p>" +
        "<p><strong>Photographs</strong> " + N(25) + "Students who appear clearly in a photograph must have a signed photo release on file with the school office. " +
        N(26) + "Photographs of classroom activities also require the permission of the teacher in charge of that class. " +
        N(27) + "Photo editors may crop or brighten an image but will never add or remove people or objects.</p>" +
        "<p><strong>Questions?</strong> " + N(28) + "Stop by Room 214 during lunch on Tuesdays and Thursdays, when an editor is always available to help new contributors get started.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main purpose of the Bayview Beacon contributor guide?",
          choices: [
            { letter: "A", text: "To persuade students to join the newspaper class" },
            { letter: "B", text: "To explain how to submit work and what standards it must meet" },
            { letter: "C", text: "To report on recent events at Bayview High School" },
            { letter: "D", text: "To announce the print dates for the coming school year" }
          ],
          correct: "B"
        },
        {
          id: "deadline",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the guide, when is work due for a Friday online edition?",
          choices: [
            { letter: "A", text: "Three weeks before that Friday" },
            { letter: "B", text: "At lunch on the Tuesday before" },
            { letter: "C", text: "By the end of the school day Friday" },
            { letter: "D", text: "By 3:00 p.m. on the Monday before" }
          ],
          correct: "D"
        },
        {
          id: "notes",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the guide, why must writers keep their interview notes for a month?",
          choices: [
            { letter: "A", text: "So that any later questions about a story can be checked" },
            { letter: "B", text: "So that editors can grade the notes for the newspaper class" },
            { letter: "C", text: "So that writers can reuse the quotes in future stories" },
            { letter: "D", text: "So that the school office can file them with photo releases" }
          ],
          correct: "A"
        },
        {
          id: "belief",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the guide expresses a belief rather than a rule or procedure?",
          choices: [
            { letter: "A", text: "Sentence 9, about online deadlines" },
            { letter: "B", text: "Sentence 15, about sending photographs" },
            { letter: "C", text: "Sentence 24, about admitting errors" },
            { letter: "D", text: "Sentence 26, about classroom photos" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the Beacon contributor guide mainly organized?",
          choices: [
            { letter: "A", text: "As a story about one student's first published article" },
            { letter: "B", text: "As a comparison of print and online newspapers" },
            { letter: "C", text: "As a list of problems, each followed by a solution" },
            { letter: "D", text: "As labeled sections that each cover one topic for contributors" }
          ],
          correct: "D"
        },
        {
          id: "example",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The guide includes the example in sentence 13, News: New Bus Schedule, mainly to —",
          choices: [
            { letter: "A", text: "announce a change to the school's bus routes" },
            { letter: "B", text: "show exactly how a subject line should look" },
            { letter: "C", text: "suggest that news stories are the most important" },
            { letter: "D", text: "remind writers to keep their titles under ten words" }
          ],
          correct: "B"
        },
        {
          id: "accuracy",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which TWO sentences most directly help protect the accuracy of what the Beacon publishes? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 16, about editors fact-checking stories" },
            { letter: "B", text: "Sentence 11, about what happens to late work" },
            { letter: "C", text: "Sentence 19, about spelling names exactly" },
            { letter: "D", text: "Sentence 28, about when editors are in Room 214" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "crop",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 27, the word crop most nearly means to —",
          choices: [
            { letter: "A", text: "plant and harvest" },
            { letter: "B", text: "print in color" },
            { letter: "C", text: "copy many times" },
            { letter: "D", text: "trim the edges of" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 9 · ARGUMENT · wind energy ───────────── */
    {
      id: "g9-ri-c58-let-the-hill-work",
      family: "G9",
      title: "Let the Hill Work",
      kind: "Argument · 9.RI",
      blurb: "A student columnist makes the case for one wind turbine on one hill behind the softball field.",
      level: 2,
      passage:
        "<p>" + N(1) + "Behind the softball field at Kestrel Ridge High School, there is a grassy hill where nothing happens. " +
        N(2) + "The wind blows across it almost every day, bending the grass and rattling the fence, and every day that energy simply blows away. " +
        N(3) + "Next month, the county school board will vote on a proposal to put a single mid-sized wind turbine on that hill. " +
        N(4) + "The board should approve it, because the turbine would save money, teach students real science, and show our community what a cleaner future can look like.</p>" +
        "<p>" + N(5) + "Begin with the money. " +
        N(6) + "According to the engineering study the district paid for last spring, the turbine would produce roughly a third of the electricity our school uses in a year. " +
        N(7) + "The study estimates that the turbine would pay back its cost in about twelve years and keep producing power for at least eight years after that. " +
        N(8) + "Those savings would not quietly disappear into some line of a budget spreadsheet; the proposal sets aside half of them for classroom supplies and field trips. " +
        N(9) + "In a year when our science department is sharing one set of microscopes among four classes, that matters.</p>" +
        "<p>" + N(10) + "The turbine would also be a teacher. " +
        N(11) + "Under the plan, live data on wind speed and power output would be displayed in the science wing and posted online. " +
        N(12) + "Physics students could calculate how much energy a gust carries; math classes could graph output across the seasons; environmental science classes could compare the turbine's numbers with the school's electric bills. " +
        N(13) + "A textbook diagram of a turbine is useful. " +
        N(14) + "A real one spinning outside the classroom window is unforgettable.</p>" +
        "<p>" + N(15) + "Some neighbors have raised concerns, and they deserve honest answers. " +
        N(16) + "The first is noise. " +
        N(17) + "The study found that, at the nearest house, the turbine would sound about as loud as a quiet conversation, and quieter than the traffic on Route 9. " +
        N(18) + "The second concern is birds. " +
        N(19) + "Turbines do kill some birds, and no one should pretend otherwise. " +
        N(20) + "However, the study found no major migration path over the hill, and the proposal requires a year of bird monitoring, with the blades slowed during any period of unusual risk. " +
        N(21) + "The third concern is appearance. " +
        N(22) + "Some residents simply think a tall white turbine would look out of place above a neighborhood of small brick houses. " +
        N(23) + "That is a fair matter of taste, but the hill already holds a cell tower and two sets of stadium lights, and nobody has called them eyesores.</p>" +
        "<p>" + N(24) + "Others argue that the district should wait until turbines become cheaper. " +
        N(25) + "But waiting has a cost too: every year without the turbine is a year of higher electric bills and a year of students learning about clean energy only from pictures. " +
        N(26) + "Prices have already fallen enough that the payback period is shorter than the life of the machine.</p>" +
        "<p>" + N(27) + "I have stood on that hill with a homemade wind meter, and I have watched its cups spin on days when the school parking lot felt perfectly calm. " +
        N(28) + "The wind there is steady, free, and wasted. " +
        N(29) + "Nobody is asking the board to cover the county's farms and hillsides in turbines. " +
        N(30) + "We are asking for one, on one hill, at one school, as a test. " +
        N(31) + "Board members, please come to the meeting on the fourteenth, look at the evidence, and vote yes. " +
        N(32) + "Let the hill finally do some work.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the central claim of \"Let the Hill Work\"?",
          choices: [
            { letter: "A", text: "Sentence 4, which says the board should approve the turbine" },
            { letter: "B", text: "Sentence 9, which mentions the shared microscopes" },
            { letter: "C", text: "Sentence 16, which names noise as the first concern" },
            { letter: "D", text: "Sentence 29, which says no one wants many turbines" }
          ],
          correct: "A"
        },
        {
          id: "savings",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the column, how would half of the turbine's savings be used?",
          choices: [
            { letter: "A", text: "To repair the softball field fence" },
            { letter: "B", text: "To pay for a year of bird monitoring" },
            { letter: "C", text: "For classroom supplies and field trips" },
            { letter: "D", text: "To build a second turbine on the hill" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the column is a matter of opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "The study found no major migration path over the hill." },
            { letter: "B", text: "A real one spinning outside the classroom window is unforgettable." },
            { letter: "C", text: "The hill already holds a cell tower and two sets of stadium lights." },
            { letter: "D", text: "The county school board will vote on the proposal next month." }
          ],
          correct: "B"
        },
        {
          id: "concerns",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the writer organize sentences 15–23?",
          choices: [
            { letter: "A", text: "By telling the history of the hill in time order" },
            { letter: "B", text: "By comparing wind power with solar power" },
            { letter: "C", text: "By describing the turbine from its base to its blades" },
            { letter: "D", text: "By naming three objections and answering each in turn" }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer begins the column by describing the empty hill in sentences 1 and 2 mainly to —",
          choices: [
            { letter: "A", text: "complain that the softball field is poorly kept" },
            { letter: "B", text: "explain why neighbors enjoy walking on the hill" },
            { letter: "C", text: "set up the idea that a useful resource is being wasted" },
            { letter: "D", text: "show that the hill is too windy for school sports" }
          ],
          correct: "C"
        },
        {
          id: "birds",
          sol: "9.RI.3.B",
          sub: "9.RI.3.B.1",
          stem: "Which statement best evaluates the writer's response to the concern about birds in sentences 18–20?",
          choices: [
            { letter: "A", text: "It is reasonable, because she admits the risk and cites a study and a monitoring plan." },
            { letter: "B", text: "It is weak, because she claims that turbines never harm any birds at all." },
            { letter: "C", text: "It is weak, because she relies only on her own wind meter readings." },
            { letter: "D", text: "It is reasonable, because she shows that birds avoid every school building." }
          ],
          correct: "A"
        },
        {
          id: "eyesores",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 23, the writer says no one has called the tower and lights eyesores. Compared with unusual structures, the word eyesores is more —",
          choices: [
            { letter: "A", text: "scientific and exact" },
            { letter: "B", text: "neutral and polite" },
            { letter: "C", text: "playful and admiring" },
            { letter: "D", text: "strongly negative" }
          ],
          correct: "D"
        },
        {
          id: "unforgettable",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word unforgettable in sentence 14 combines the prefix un-, the root forget, and the suffix -able. Based on these parts, unforgettable means —",
          choices: [
            { letter: "A", text: "easy to forget quickly" },
            { letter: "B", text: "not able to be forgotten" },
            { letter: "C", text: "forgotten long ago" },
            { letter: "D", text: "able to remind others" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 10 · PAIRED TEXTS · photography ───────────── */
    {
      id: "g9-dsr-c58-film-or-phone",
      family: "G9",
      title: "Film or Phone?",
      kind: "Paired texts · 9.DSR",
      blurb: "A club president defends the old film camera; a sophomore makes the case for the phone in her backpack.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Why Our Club Still Shoots Film</strong></p>" +
        "<p>" + N(1) + "Every September, new members of the Lakeview Photography Club are surprised when I hand them a heavy film camera that is older than their parents. " +
        N(2) + "They ask why we bother when every one of them carries a phone that can take a thousand pictures without ever running out of film. " +
        N(3) + "My answer is that the old camera teaches something a phone rarely does: patience. " +
        N(4) + "A roll of film holds only twenty-four pictures, and each roll costs about as much as a movie ticket to buy and develop. " +
        N(5) + "Because every frame counts, members stop and think before they press the shutter. " +
        N(6) + "They walk around a subject, wait for a cloud to pass, and check the edges of the frame for a stray trash can. " +
        N(7) + "Last year, a freshman named Aiko spent forty minutes on a single photograph of a rusty bicycle, and it went on to win the regional student show.</p>" +
        "<p>" + N(8) + "Film also delays the result. " +
        N(9) + "Members do not see their pictures until they develop the roll in our darkroom, sometimes a week later. " +
        N(10) + "At first, that long wait frustrates nearly everyone in the club. " +
        N(11) + "Soon, though, it becomes part of the fun, and members learn to judge light with their own eyes instead of checking a screen after every shot.</p>" +
        "<p>" + N(12) + "Of course, film is not perfect. " +
        N(13) + "It is expensive, the darkroom chemicals require careful handling, and mistakes cannot be undone with a tap. " +
        N(14) + "Still, I believe the limits are the point. " +
        N(15) + "When you can take only a few pictures, you learn to see before you shoot. " +
        N(16) + "That habit stays with you long after you set the old camera down and pick up your phone again.</p>" +
        "<p><strong>Text 2 — The Camera in My Backpack</strong></p>" +
        "<p>" + N(17) + "Last spring I joined my school's photography elective with no camera except the phone in my backpack, and I expected to feel behind the students who owned real cameras with heavy lenses. " +
        N(18) + "Instead, that phone turned out to be the best teacher I could have asked for.</p>" +
        "<p>" + N(19) + "The biggest advantage is instant feedback. " +
        N(20) + "When I photographed my little brother on the porch, I could see right away that the bright window behind him had turned his face into a dark shadow. " +
        N(21) + "I moved him to the side, where soft light from the yard fell across his face, tried again, and fixed the problem in seconds. " +
        N(22) + "With film, I would have discovered that mistake a week later, long after the moment was gone.</p>" +
        "<p>" + N(23) + "Phones also make it affordable to experiment; one afternoon I took two hundred digital shots of raindrops on a car window, and it cost nothing at all. " +
        N(24) + "Some people say that taking so many pictures makes photographers careless. " +
        N(25) + "In my experience, the opposite happened: by comparing dozens of nearly identical shots side by side, I learned exactly how small changes in angle and light affect a picture.</p>" +
        "<p>" + N(26) + "Finally, phones open photography to almost everyone, not just students with expensive equipment. " +
        N(27) + "Not every family can afford a camera, film, and developing costs, but most students already carry a phone. " +
        N(28) + "Of course, a phone will not make anyone a good photographer automatically. " +
        N(29) + "The skill is in the eye and the patience of the person holding it, not in the equipment. " +
        N(30) + "But for a beginner who wants to learn quickly, a camera that shows you your mistakes the moment you make them is hard to beat.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about photography do both texts support?",
          choices: [
            { letter: "A", text: "Beginners should avoid taking more than a few pictures a day." },
            { letter: "B", text: "Darkrooms are the best place to learn about light." },
            { letter: "C", text: "Real skill comes from learning to see, not from the equipment." },
            { letter: "D", text: "Phones will soon replace film cameras in every school club." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The film text and the phone text differ mainly in how they view —",
          choices: [
            { letter: "A", text: "the value of waiting to see results versus seeing them at once" },
            { letter: "B", text: "whether photography should be taught in high schools at all" },
            { letter: "C", text: "how much a roll of film costs compared with a movie ticket" },
            { letter: "D", text: "whether family members make good subjects for photographs" }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentence 25, the writer of Text 2 most directly challenges which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1, about handing new members an old camera" },
            { letter: "B", text: "Sentence 9, about developing the roll in the darkroom" },
            { letter: "C", text: "Sentence 13, about film chemicals needing careful handling" },
            { letter: "D", text: "Sentence 5, about limited frames making members think" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader who uses both the film text and the phone text could best conclude that —",
          choices: [
            { letter: "A", text: "film is the only way to become a serious photographer" },
            { letter: "B", text: "film and phones each teach beginners in a different way" },
            { letter: "C", text: "phones produce sharper pictures than film in every light" },
            { letter: "D", text: "photography clubs should charge fees to cover film costs" }
          ],
          correct: "B"
        },
        {
          id: "central1",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the central idea of Text 1?",
          choices: [
            { letter: "A", text: "The limits of film teach patience and careful seeing." },
            { letter: "B", text: "The Lakeview club needs money to buy more film." },
            { letter: "C", text: "Darkroom chemicals are too risky for new members." },
            { letter: "D", text: "Phones take better pictures than older cameras." }
          ],
          correct: "A"
        },
        {
          id: "brother",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 2, how did the writer fix the photograph of her brother?",
          choices: [
            { letter: "A", text: "She waited a week and developed a new roll." },
            { letter: "B", text: "She added light with a lamp from the house." },
            { letter: "C", text: "She moved him away from the bright window." },
            { letter: "D", text: "She asked a club member to take it instead." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence from Text 1 gives the strongest evidence that film's limits can lead to excellent work?",
          choices: [
            { letter: "A", text: "Sentence 2, about members' phones taking a thousand pictures" },
            { letter: "B", text: "Sentence 7, about Aiko's prize-winning bicycle photograph" },
            { letter: "C", text: "Sentence 10, about the wait frustrating everyone at first" },
            { letter: "D", text: "Sentence 12, about film not being perfect" }
          ],
          correct: "B"
        },
        {
          id: "affordable",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 23, the word affordable most nearly means —",
          choices: [
            { letter: "A", text: "quick to finish and edit" },
            { letter: "B", text: "easy to share with friends" },
            { letter: "C", text: "fun to try for the first time" },
            { letter: "D", text: "cheap enough to pay for" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 11 · PAIRED TEXTS · school newspaper and an app ───────────── */
    {
      id: "g9-dsr-c58-courier-goes-digital",
      family: "G9",
      title: "The Last Paper Edition?",
      kind: "Paired texts · 9.DSR",
      blurb: "The editor explains why the school paper is moving into an app. A senior writes back about the readers it will leave behind.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Editor: The Courier Goes Digital</strong></p>" +
        "<p>" + N(1) + "After forty-two years in print, the Mill Creek Courier will publish its final paper edition in June. " +
        N(2) + "Starting next fall, the Courier will live entirely inside a free app designed by students in the school's coding club. " +
        N(3) + "This was not an easy decision, and I want to explain why our staff made it.</p>" +
        "<p>" + N(4) + "The first reason is cost. " +
        N(5) + "Printing each issue costs the Courier about four hundred dollars, nearly all of the money we raise from bake sales and ads. " +
        N(6) + "The app, by contrast, costs almost nothing to run, which means we can spend our budget on cameras and training instead. " +
        N(7) + "The second reason is speed. " +
        N(8) + "Our print paper comes out once a month, so by the time a story about a Friday game reaches readers, it is already old news. " +
        N(9) + "In the app, a story can go live the moment an editor has checked it. " +
        N(10) + "The coding club has also built features that print simply cannot offer: photo galleries, short videos from games and concerts, and alerts when a big story breaks.</p>" +
        "<p>" + N(11) + "Third, the app lets us see what people actually read. " +
        N(12) + "Last month, a test version showed that a story about the new cafeteria menu was opened more than eight hundred times, while our longest feature was opened just ninety times. " +
        N(13) + "That kind of information will help us serve readers better.</p>" +
        "<p>" + N(14) + "I know some readers will miss holding the paper. " +
        N(15) + "I will miss it too. " +
        N(16) + "But a newspaper is not the paper it is printed on; it is the reporting inside it. " +
        N(17) + "Moving to the app is how we make sure that reporting reaches the most students, as quickly as possible, for years to come.</p>" +
        "<p><strong>Text 2 — A Letter to the Editor</strong></p>" +
        "<p>" + N(18) + "I read the editor's announcement twice, and I truly respect the care and thought behind it. " +
        N(19) + "Still, I believe the Courier is about to trade a small cost for a large loss.</p>" +
        "<p>" + N(20) + "Every month, I help carry two hundred copies of the paper to places the app will never reach. " +
        N(21) + "Forty go to the Mill Creek Senior Center, where residents read about their grandchildren's games and tape the photos to their doors. " +
        N(22) + "Thirty more sit on the front counter of the public library, next to the community calendar. " +
        N(23) + "Most of those readers will not download a student app, and many of them do not own smartphones at all. " +
        N(24) + "Inside the school, the picture is not much better. " +
        N(25) + "Phones must stay in lockers during the school day, while a print copy can be passed across a cafeteria table or left in the waiting area outside the counselor's office. " +
        N(26) + "A paper copy on a table is an invitation; an app icon on a screen is one more door among a hundred.</p>" +
        "<p>" + N(27) + "I am also worried about the eight hundred clicks the editor mentioned. " +
        N(28) + "Counting clicks tells you what people tap, not what matters to them. " +
        N(29) + "If the staff begins choosing stories by their numbers, menu changes will always beat a thoughtful feature about the custodian who has worked here for thirty years.</p>" +
        "<p>" + N(30) + "I am not asking the Courier to ignore the app, whose speed and videos are real advantages. " +
        N(31) + "But could we keep a smaller print edition, even four times a year, paid for with the money the app saves? " +
        N(32) + "A newspaper exists to serve its whole community, including the readers who will never see a notification.</p>",
      claims: [
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes a key difference between the editor's announcement and the letter?",
          choices: [
            { letter: "A", text: "Text 1 stresses reaching readers quickly and cheaply; Text 2 stresses readers the app would miss." },
            { letter: "B", text: "Text 1 argues against the coding club's app; Text 2 argues that the app should launch sooner." },
            { letter: "C", text: "Text 1 describes the senior center readers; Text 2 describes the cafeteria menu story." },
            { letter: "D", text: "Text 1 asks for a smaller print edition; Text 2 asks the paper to stop printing at once." }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point would the editor and the letter writer most likely agree?",
          choices: [
            { letter: "A", text: "Click counts are the best guide for choosing stories." },
            { letter: "B", text: "Print copies should go only to the public library." },
            { letter: "C", text: "The app offers real strengths, such as speed and video." },
            { letter: "D", text: "Phones should be allowed in classrooms all day long." }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 does the letter writer most directly dispute in sentences 27–29?",
          choices: [
            { letter: "A", text: "Sentence 5, about the cost of printing each issue" },
            { letter: "B", text: "Sentence 10, about galleries, videos, and alerts" },
            { letter: "C", text: "Sentence 15, about the editor missing the paper too" },
            { letter: "D", text: "Sentence 13, about the reading data helping serve readers" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Select TWO details from Text 2 that together best show that an app-only Courier would fail to reach some readers.",
          choices: [
            { letter: "A", text: "Sentence 18, about reading the announcement twice" },
            { letter: "B", text: "Sentence 23, about readers without smartphones" },
            { letter: "C", text: "Sentence 30, about the app's real advantages" },
            { letter: "D", text: "Sentence 25, about phones kept in lockers all day" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "miss",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The editor includes sentences 14 and 15, about missing the printed paper, mainly to —",
          choices: [
            { letter: "A", text: "hint that the staff may change its decision later" },
            { letter: "B", text: "explain how much each printed issue costs to make" },
            { letter: "C", text: "admit readers' feelings before restating his main point" },
            { letter: "D", text: "blame the coding club for ending the print edition" }
          ],
          correct: "C"
        },
        {
          id: "interpret",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Text 2 offers an interpretation rather than a factual report?",
          choices: [
            { letter: "A", text: "Sentence 26, comparing a paper copy to an invitation" },
            { letter: "B", text: "Sentence 21, about forty copies at the senior center" },
            { letter: "C", text: "Sentence 22, about thirty copies at the library" },
            { letter: "D", text: "Sentence 20, about carrying two hundred copies" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the editor's announcement in Text 1 mainly organized?",
          choices: [
            { letter: "A", text: "As a story told in time order from the paper's first issue" },
            { letter: "B", text: "As a decision supported by three reasons, then a reply to an objection" },
            { letter: "C", text: "As a side-by-side comparison of two student newspapers" },
            { letter: "D", text: "As a problem followed by several possible solutions to choose from" }
          ],
          correct: "B"
        },
        {
          id: "door",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 26, the letter writer calls an app icon one more door among a hundred. This figurative language suggests that the app —",
          choices: [
            { letter: "A", text: "is easy to overlook among everything else on a phone" },
            { letter: "B", text: "will be locked to students who do not pay a fee" },
            { letter: "C", text: "takes readers too many steps to open each story" },
            { letter: "D", text: "has been designed to look like a school building" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
