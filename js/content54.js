/* SOL Labyrinth — Grade 9 long packs (content54): a small-town bakery, storm chasing and weather, a high school
 * orchestra, bike repair and cycling. Stories, articles, vocabulary, paired texts, a poem, a scene, a functional
 * guide and an argument (390–520 words). Original text only; no real people or published texts.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · BAKERY ───────────────────────── */
    {
      id: "g9-rl-c54-four-oclock",
      family: "G9",
      title: "The Four O'Clock Shift",
      kind: "Literary · 9.RL",
      blurb: "Her uncle's wrist is sprained, the ovens are cold, and Noor has one note in the margin to go on.",
      level: 2,
      passage:
        "<p>" + N(1) + "The alarm went off at 3:40, but Noor Haddad was already awake, staring at the ceiling and listing ingredients in her head. " +
        N(2) + "Her uncle Sami had slipped on the icy back step the evening before, and his right wrist was now wrapped in a bandage the color of weak tea. " +
        N(3) + "\"You've watched me a hundred times,\" he had told her from the couch, wincing. " +
        N(4) + "\"Watching is not the same as doing,\" she had answered, and he had only laughed, which did not help.</p>" +
        "<p>" + N(5) + "The bakery on Ferris Street was dark and cold when she unlocked it. " +
        N(6) + "She switched on the ovens first, the way Sami always did, and then opened her grandmother's notebook to the page stained with olive oil and flour. " +
        N(7) + "The handwriting slanted like rain blown sideways. " +
        N(8) + "Most of the recipes gave exact amounts, but beside the bread recipe her grandmother had written only three words in the margin: Listen to it. " +
        N(9) + "Noor frowned at the note. " +
        N(10) + "Dough did not talk.</p>" +
        "<p>" + N(11) + "By five o'clock the first batch of loaves had risen under their towels, and she slid them into the big oven with the long wooden peel. " +
        N(12) + "Twenty minutes later the whole kitchen smelled wrong, sharp instead of sweet. " +
        N(13) + "When she pulled the trays, the crusts were nearly black on the bottom. " +
        N(14) + "Noor stood holding the peel like a paddle in a boat that was already sinking. " +
        N(15) + "Sami had mentioned once that the back oven ran hot, but she had not remembered which oven was the back one until now.</p>" +
        "<p>" + N(16) + "She did not cry, though she wanted to. " +
        N(17) + "Instead she lowered the temperature, moved the next batch to the front oven, and stood beside it with the door cracked, tapping the bottom of each loaf as it came out. " +
        N(18) + "A good loaf, Sami always said, sounded hollow, like knocking on a closed door. " +
        N(19) + "The first one thudded. " +
        N(20) + "The second one thudded a little less. " +
        N(21) + "By the fourth tray, every loaf answered her knuckles with a clean, empty knock, and she finally understood the note in the margin.</p>" +
        "<p>" + N(22) + "At seven Mr. Okafor came in for his usual, as he had every morning for eleven years. " +
        N(23) + "Noor apologized for the dark loaves stacked at the end of the counter and offered him one of the good ones. " +
        N(24) + "He picked up a burned one instead and turned it over in his hands. " +
        N(25) + "\"My mother baked her bread like this every Sunday because she never trusted an oven,\" he said. " +
        N(26) + "\"Tastes like home.\" " +
        N(27) + "He paid full price and would not take his change.</p>" +
        "<p>" + N(28) + "Sami arrived at nine with his arm in a sling, ready to apologize for leaving her alone. " +
        N(29) + "He broke the end off a loaf from the last tray, chewed slowly, and raised his eyebrows. " +
        N(30) + "\"So,\" he said, \"it talked to you.\" " +
        N(31) + "Noor wiped her hands on her apron and, for the first time all morning, smiled. " +
        N(32) + "\"Mostly it argued,\" she said.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the story?",
          choices: [
            { letter: "A", text: "Family recipes should be followed exactly as they are written." },
            { letter: "B", text: "Skill often grows from paying close attention after a mistake." },
            { letter: "C", text: "Loyal customers will forgive a business for almost anything." },
            { letter: "D", text: "Young people should not be asked to work early in the morning." }
          ],
          correct: "B"
        },
        {
          id: "response",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Noor responds to the burned loaves in sentences 16 and 17?",
          choices: [
            { letter: "A", text: "She calls her uncle to ask what she did wrong." },
            { letter: "B", text: "She decides to sell only the loaves that turned out well." },
            { letter: "C", text: "She gives up on the bread and bakes something simpler." },
            { letter: "D", text: "She stays calm and changes her method to fix the problem." }
          ],
          correct: "D"
        },
        {
          id: "paddle",
          sol: "9.RL.2.A",
          stem: "In sentence 14, the comparison of Noor holding the peel like a paddle in a sinking boat mainly shows that she —",
          choices: [
            { letter: "A", text: "feels helpless as her morning begins to go wrong" },
            { letter: "B", text: "is too tired to lift the heavy baking trays any longer" },
            { letter: "C", text: "plans to throw the burned loaves into the river" },
            { letter: "D", text: "is used to working in cramped and unsteady places" }
          ],
          correct: "A"
        },
        {
          id: "okafor",
          sol: "9.RL.1.B",
          stem: "Mr. Okafor's actions in sentences 24–27 suggest that he —",
          choices: [
            { letter: "A", text: "is hoping to buy the damaged loaves at a discount" },
            { letter: "B", text: "does not notice that the crusts have been badly burned" },
            { letter: "C", text: "wants Noor to see that her morning is not a failure" },
            { letter: "D", text: "plans to tell Sami that the bread was not as good as usual" }
          ],
          correct: "C"
        },
        {
          id: "margin",
          sol: "9.RL.3.A",
          stem: "The grandmother's note in sentence 8 is important to the story mainly because it —",
          choices: [
            { letter: "A", text: "sets up the lesson that Noor understands by the end" },
            { letter: "B", text: "explains why the back oven at the bakery runs too hot" },
            { letter: "C", text: "shows that the grandmother did not like to write" },
            { letter: "D", text: "gives the exact amounts that Noor needs for the bread" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The details in sentences 5 and 12 (a dark, cold bakery and a kitchen that smells wrong) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "cheerful and busy" },
            { letter: "B", text: "sleepy and dull" },
            { letter: "C", text: "playful and light" },
            { letter: "D", text: "uneasy and tense" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The story is told by a narrator who stays close to Noor's thoughts. This point of view mainly lets the reader —",
          choices: [
            { letter: "A", text: "learn what Mr. Okafor thinks of the bakery" },
            { letter: "B", text: "know her worries even when she hides them" },
            { letter: "C", text: "follow Sami's day while he rests at home" },
            { letter: "D", text: "see the bakery as the customers see it" }
          ],
          correct: "B"
        },
        {
          id: "cracked",
          sol: "9.RL.2.C",
          stem: "In sentence 17, the phrase with the door cracked most nearly means with the oven door —",
          choices: [
            { letter: "A", text: "broken along one side" },
            { letter: "B", text: "locked for safety" },
            { letter: "C", text: "opened slightly" },
            { letter: "D", text: "removed entirely" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LITERARY · ORCHESTRA ───────────────────────── */
    {
      id: "g9-rl-c54-second-chair",
      family: "G9",
      title: "Second Chair",
      kind: "Literary · 9.RL",
      blurb: "Adaeze lost first chair to a freshman with a grocery bag for a music folder. Then he needs her help.",
      level: 3,
      passage:
        "<p>" + N(1) + "The results were posted on the orchestra-room door on a Tuesday, typed in a font so small that Adaeze Nwosu had to lean close enough to fog the glass. " +
        N(2) + "Cello, chair one: Lior Ben-David. " +
        N(3) + "Cello, chair two: Adaeze Nwosu. " +
        N(4) + "She read the list twice, as if a second reading might shuffle the names, and then walked to the practice rooms without taking off her coat.</p>" +
        "<p>" + N(5) + "She knew exactly where it had gone wrong. " +
        N(6) + "The audition excerpt had a run of quick notes in the ninth measure, a passage she had played cleanly at home perhaps two hundred times. " +
        N(7) + "Behind the screen, with three judges listening and no faces to read, her bow arm had tightened and the notes had tumbled out early, like coins from a torn pocket. " +
        N(8) + "Lior, who was a freshman and still carried his music in a grocery bag, had played the run as if he had all afternoon.</p>" +
        "<p>" + N(9) + "For a week she was polite to him in the way that people are polite to the weather. " +
        N(10) + "She tuned when he gave the note, she turned pages when it was her turn, and she said \"good job\" in a voice that meant nothing at all. " +
        N(11) + "At home she practiced the ninth measure until her mother knocked on the wall and asked whether the cello was being punished.</p>" +
        "<p>" + N(12) + "Then, in the second week, Ms. Varga stopped the orchestra halfway through the slow movement. " +
        N(13) + "\"Cellos, the solo at letter D, please—Lior, just you.\" " +
        N(14) + "The solo climbed from the lowest string to a high, thin note near the end of the fingerboard, and every cellist in the room knew the shift in the middle was a trap. " +
        N(15) + "Lior missed it once, then again, his face reddening above the scroll. " +
        N(16) + "The violins went very quiet in the way that is louder than talking. " +
        N(17) + "Ms. Varga only said, \"Tomorrow,\" and moved on.</p>" +
        "<p>" + N(18) + "Adaeze waited until the room emptied. " +
        N(19) + "Lior was packing slowly, as if the case might close on its own if he gave it enough time. " +
        N(20) + "She surprised herself by sitting down beside him. " +
        N(21) + "\"You're shifting with your whole hand,\" she said. " +
        N(22) + "\"My old teacher used to say let the thumb go first, and the fingers will follow it like ducklings.\" " +
        N(23) + "She showed him on her own cello, slowly, and then he tried it, and on the third attempt the high note rang out clear.</p>" +
        "<p>" + N(24) + "Lior laughed, surprised at himself. " +
        N(25) + "\"Why are you helping me?\" he asked. " +
        N(26) + "Adaeze considered the question longer than he probably expected. " +
        N(27) + "Somewhere in the past week, the list on the door had begun to feel smaller, a sheet of paper and not a verdict. " +
        N(28) + "\"Because it's my section too,\" she said, and she realized, saying it, that it was true. " +
        N(29) + "On the walk home she played the ninth measure in her head, and for once she did not rush it.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the story develop most fully?",
          choices: [
            { letter: "A", text: "Talent matters less than the number of hours a person practices." },
            { letter: "B", text: "Competition between friends usually ends a friendship." },
            { letter: "C", text: "A person's worth to a group is not fixed by a ranking." },
            { letter: "D", text: "Adults should not judge students from behind a screen." }
          ],
          correct: "C"
        },
        {
          id: "coins",
          sol: "9.RL.2.A",
          stem: "In sentence 7, the comparison of the notes to coins from a torn pocket suggests that Adaeze's playing was —",
          choices: [
            { letter: "A", text: "hurried and out of her control" },
            { letter: "B", text: "bright and pleasant to hear" },
            { letter: "C", text: "too quiet for the three judges" },
            { letter: "D", text: "slow and carefully counted" }
          ],
          correct: "A"
        },
        {
          id: "weather",
          sol: "9.RL.2.C",
          stem: "Sentence 9 says Adaeze was polite to Lior in the way that people are polite to the weather. This description gives paragraph 3 a tone that is —",
          choices: [
            { letter: "A", text: "openly angry" },
            { letter: "B", text: "warmly amused" },
            { letter: "C", text: "deeply sorrowful" },
            { letter: "D", text: "coolly distant" }
          ],
          correct: "D"
        },
        {
          id: "self",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Adaeze's frustration is aimed at her own performance rather than at Lior?",
          choices: [
            { letter: "A", text: "Sentence 4, in which she reads the posted list twice" },
            { letter: "B", text: "Sentence 5, in which she knows what went wrong" },
            { letter: "C", text: "Sentence 8, in which Lior carries a paper grocery bag" },
            { letter: "D", text: "Sentence 16, in which the violins grow very quiet" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Adaeze decides to help Lior mainly because she —",
          choices: [
            { letter: "A", text: "wants Ms. Varga to notice her and give her the solo instead" },
            { letter: "B", text: "feels sorry that he still carries his music in a grocery bag" },
            { letter: "C", text: "hopes he will help her learn to play the ninth measure" },
            { letter: "D", text: "has begun to care more about the section than her rank" }
          ],
          correct: "D"
        },
        {
          id: "room",
          sol: "9.RL.3.B",
          stem: "How does the empty rehearsal room in sentences 18–20 affect what Adaeze does?",
          choices: [
            { letter: "A", text: "It lets her offer help privately, with no one watching." },
            { letter: "B", text: "It makes her nervous, so she hurries to pack up and leave." },
            { letter: "C", text: "It reminds her of the screen the judges used at the audition." },
            { letter: "D", text: "It gives her a quiet chance to practice the solo by herself." }
          ],
          correct: "A"
        },
        {
          id: "verdict",
          sol: "9.RV.1.F",
          stem: "In sentence 27, the list begins to feel like a sheet of paper and not a verdict. This figurative contrast shows that Adaeze —",
          choices: [
            { letter: "A", text: "plans to ask the judges to post a new set of results" },
            { letter: "B", text: "thinks the font on the posted list was far too small" },
            { letter: "C", text: "no longer sees the ranking as a final judgment" },
            { letter: "D", text: "believes the audition was unfair to the cello section" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "How does the final sentence connect to the beginning of the story?",
          choices: [
            { letter: "A", text: "It shows that Adaeze will try out for first chair again next year." },
            { letter: "B", text: "It shows her calmer about the passage that cost her the audition." },
            { letter: "C", text: "It reveals that Lior taught her how to play the ninth measure." },
            { letter: "D", text: "It explains why the results were posted on the door on a Tuesday." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── LITERARY · CYCLING ───────────────────────── */
    {
      id: "g9-rl-c54-harlow-ride",
      family: "G9",
      title: "The Harlow Lake Ride",
      kind: "Literary · 9.RL",
      blurb: "Forty miles, a borrowed ten-speed, and a leather pouch Kofi thought he didn't need.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kofi Mensah had never ridden farther than the grocery store until the morning of the Harlow Lake Ride. " +
        N(2) + "The ride was forty miles long, and every rider raised money for the county food bank. " +
        N(3) + "Kofi's aunt Efua had signed them both up in March. " +
        N(4) + "She rode a sleek blue road bike. " +
        N(5) + "Kofi rode his grandfather's old green ten-speed, which weighed about as much as a small refrigerator.</p>" +
        "<p>" + N(6) + "Before they left, his grandfather handed him a small leather pouch. " +
        N(7) + "Inside were two tire levers, a patch kit, and a tiny pump. " +
        N(8) + "\"A bike will always break at the worst moment,\" his grandfather said. " +
        N(9) + "\"So carry the fix with you.\" " +
        N(10) + "Kofi nodded, though he privately thought the pouch was one more heavy thing to carry.</p>" +
        "<p>" + N(11) + "The first fifteen miles were easy. " +
        N(12) + "The road ran flat beside cornfields, and the morning air was cool. " +
        N(13) + "Then the hills began. " +
        N(14) + "On the long climb past the old mill, Kofi's legs burned, and Aunt Efua pulled farther and farther ahead. " +
        N(15) + "By the top, she was only a blue dot. " +
        N(16) + "He told himself he would catch her on the way down.</p>" +
        "<p>" + N(17) + "At mile twenty-two, he heard a sharp hiss, and the back of the bike began to wobble. " +
        N(18) + "Kofi coasted to the grassy shoulder and stared at the flat tire. " +
        N(19) + "His phone showed one bar of signal, and his aunt was nowhere in sight. " +
        N(20) + "For a moment he felt very small on the empty road. " +
        N(21) + "Then he remembered the pouch.</p>" +
        "<p>" + N(22) + "He had watched his grandfather fix flats on the porch many times, but he had never done it himself. " +
        N(23) + "He pried the tire off with the levers and pulled out the tube. " +
        N(24) + "He pumped a little air into it and listened until he heard the leak, a thin whistle like a teakettle far away. " +
        N(25) + "He roughed up the spot, pressed on a patch, and counted to sixty slowly. " +
        N(26) + "Putting the tire back on took three tries and one scraped knuckle. " +
        N(27) + "Then he pumped until the tire felt firm under his thumb.</p>" +
        "<p>" + N(28) + "When Kofi rolled into the rest stop at mile twenty-five, Aunt Efua was standing by the water table, looking worried. " +
        N(29) + "\"I was about to ride back for you,\" she said. " +
        N(30) + "He held up his grease-black hands. " +
        N(31) + "\"Flat tire,\" he said. " +
        N(32) + "\"I fixed it.\" " +
        N(33) + "She looked at him for a long second, then laughed and hugged him, grease and all. " +
        N(34) + "They rode the last fifteen miles side by side, and the old green bike did not seem quite as heavy anymore.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by the story?",
          choices: [
            { letter: "A", text: "Fast, modern equipment is the key to finishing a race." },
            { letter: "B", text: "Being prepared can help a person handle trouble alone." },
            { letter: "C", text: "Family members should always ride at the same speed." },
            { letter: "D", text: "Long charity rides are too difficult for beginners." }
          ],
          correct: "B"
        },
        {
          id: "pouch",
          sol: "9.RL.1.B",
          stem: "Which sentence best shows that Kofi did not value the pouch at first?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        },
        {
          id: "trait",
          sol: "9.RL.1.C",
          stem: "Which word best describes Kofi as he repairs the tire in sentences 22–27?",
          choices: [
            { letter: "A", text: "resourceful" },
            { letter: "B", text: "thoughtless" },
            { letter: "C", text: "boastful" },
            { letter: "D", text: "frightened and lost" }
          ],
          correct: "A"
        },
        {
          id: "kettle",
          sol: "9.RL.2.A",
          stem: "In sentence 24, the leak is compared to a teakettle far away to show that its sound is —",
          choices: [
            { letter: "A", text: "loud and very alarming" },
            { letter: "B", text: "low and rumbling" },
            { letter: "C", text: "warm and comforting to him" },
            { letter: "D", text: "faint and high" }
          ],
          correct: "D"
        },
        {
          id: "hills",
          sol: "9.RL.3.A",
          stem: "How does the setting in sentences 13–15 shape what happens next in the story?",
          choices: [
            { letter: "A", text: "The flat cornfields block Kofi's view of the road ahead." },
            { letter: "B", text: "The cool air makes the climb easier than Kofi expected." },
            { letter: "C", text: "The hills split Kofi from his aunt, leaving him to fix the flat." },
            { letter: "D", text: "The old mill gives Kofi a place to stop, rest, and call for help." }
          ],
          correct: "C"
        },
        {
          id: "shoulder",
          sol: "9.RV.1.C",
          stem: "In sentence 18, the word shoulder most nearly means —",
          choices: [
            { letter: "A", text: "a strip of land along the edge of a road" },
            { letter: "B", text: "the top part of a person's arm and back" },
            { letter: "C", text: "a steep hill that is very hard to climb" },
            { letter: "D", text: "a place where tired riders stop for water" }
          ],
          correct: "A"
        },
        {
          id: "fridge",
          sol: "9.RL.2.B",
          stem: "Sentence 5 says the ten-speed weighed about as much as a small refrigerator. This exaggeration mainly helps the reader —",
          choices: [
            { letter: "A", text: "understand why the grandfather no longer rides it" },
            { letter: "B", text: "sense how heavy the old bike is next to his aunt's" },
            { letter: "C", text: "picture the exact color and shape of the ten-speed" },
            { letter: "D", text: "learn how much money the riders hope to raise" }
          ],
          correct: "B"
        },
        {
          id: "lighter",
          sol: "9.RL.2.C",
          stem: "In sentence 34, the statement that the bike did not seem quite as heavy anymore most nearly means that Kofi —",
          choices: [
            { letter: "A", text: "has removed the pouch from the bike to save weight" },
            { letter: "B", text: "is riding downhill for the rest of the trip" },
            { letter: "C", text: "has traded bikes with his aunt at the rest stop" },
            { letter: "D", text: "feels proud and more sure of himself" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · HAIL ───────────────────────── */
    {
      id: "g9-ri-c54-hailstone",
      family: "G9",
      title: "How a Hailstone Grows",
      kind: "Informational · 9.RI",
      blurb: "Ice that falls in summer, an invisible elevator, and rings you can count like a tree's.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a hot afternoon in late spring, the sky over a wheat field can turn a heavy, greenish gray, and within minutes the ground may be white with ice. " +
        N(2) + "It seems odd that ice should fall in warm weather, but hail is mostly a warm-season event. " +
        N(3) + "It needs the powerful thunderstorms that heat and humidity create.</p>" +
        "<p>" + N(4) + "Every hailstone begins high inside a storm cloud, where the air is far below freezing. " +
        N(5) + "Surprisingly, much of the water up there is still liquid. " +
        N(6) + "These droplets are called supercooled: they stay liquid below the freezing point until they touch something solid. " +
        N(7) + "When a tiny bit of ice or dust is lifted into this zone, supercooled droplets freeze onto it on contact, and a small pellet called a hail embryo is born.</p>" +
        "<p>" + N(8) + "What happens next depends on the storm's updraft, the column of rising air at its center. " +
        N(9) + "A strong updraft acts like an invisible elevator, holding the embryo aloft or carrying it upward again and again. " +
        N(10) + "Each trip through the cloud adds another coat of ice. " +
        N(11) + "Where droplets freeze instantly, they trap tiny air bubbles and form a cloudy, white layer. " +
        N(12) + "Where water spreads out before freezing, it forms a clear layer. " +
        N(13) + "The stone keeps growing until it is too heavy for the updraft to support, and then it falls.</p>" +
        "<p>" + N(14) + "Because of this process, the size of hail tells scientists something about the storm that made it. " +
        N(15) + "A pea-sized stone can form in an updraft of about twenty-five miles per hour, but a stone the size of a softball requires rising air moving faster than one hundred miles per hour. " +
        N(16) + "Researchers sometimes slice large hailstones in half and count the alternating clear and cloudy rings, much as a forester counts the rings of a tree. " +
        N(17) + "The rings show how many times the stone traveled through different parts of the cloud.</p>" +
        "<p>" + N(18) + "Collecting hailstones is not easy. " +
        N(19) + "Stones begin melting the moment they land, so field teams drive toward storms with coolers, measuring calipers, and scales. " +
        N(20) + "They must wait until the dangerous part of the storm has passed, then hurry to gather stones before the shapes soften. " +
        N(21) + "Some teams also ask the public to report hail, because a network of observers can cover far more ground than a few vehicles.</p>" +
        "<p>" + N(22) + "The work matters because hail is costly. " +
        N(23) + "A single severe storm can shred a season's crops, crack windshields across a city, and punch holes in roofs. " +
        N(24) + "Better knowledge of how hailstones grow could help forecasters warn people earlier, giving farmers time to protect equipment and drivers time to find shelter. " +
        N(25) + "Each frozen stone, it turns out, carries a record of the storm that built it.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "Hail causes more damage to farms than any other type of weather." },
            { letter: "B", text: "Field teams face great danger every time they chase a thunderstorm." },
            { letter: "C", text: "Hail is rare because supercooled water almost never freezes solid." },
            { letter: "D", text: "Hail grows in layers in updrafts, and studying it explains storms." }
          ],
          correct: "D"
        },
        {
          id: "falls",
          sol: "9.RI.1.B",
          stem: "According to the passage, what finally causes a hailstone to fall?",
          choices: [
            { letter: "A", text: "It grows too heavy for the updraft to hold up." },
            { letter: "B", text: "It melts into rain as it passes through warm air." },
            { letter: "C", text: "It collides with a larger stone and breaks apart." },
            { letter: "D", text: "The storm's updraft reverses and turns into wind." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Paragraphs 2 and 3 (sentences 4–13) are organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of hail with snow and with sleet" },
            { letter: "B", text: "a problem followed by several solutions" },
            { letter: "C", text: "a sequence explaining the steps of a process" },
            { letter: "D", text: "a list of opinions from several different scientists" }
          ],
          correct: "C"
        },
        {
          id: "rings",
          sol: "9.RI.2.B",
          stem: "The comparison to a forester counting tree rings in sentence 16 helps the reader understand that the layers in a hailstone —",
          choices: [
            { letter: "A", text: "make the stone much harder to cut in half" },
            { letter: "B", text: "record the stone's trips through the cloud" },
            { letter: "C", text: "form slowly over many years, as wood does" },
            { letter: "D", text: "are always clear on the outside and cloudy within" }
          ],
          correct: "B"
        },
        {
          id: "super",
          sol: "9.RV.1.B",
          stem: "The prefix super- can mean \"beyond.\" Based on this and on sentence 6, supercooled water has been —",
          choices: [
            { letter: "A", text: "cooled past its usual freezing point" },
            { letter: "B", text: "heated well above its normal boiling point" },
            { letter: "C", text: "mixed with dust until it becomes a solid" },
            { letter: "D", text: "frozen into a clear and very hard layer" }
          ],
          correct: "A"
        },
        {
          id: "spec",
          sol: "9.RI.1.C",
          stem: "Which sentence from the passage expresses a possibility rather than an established fact?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest support for the claim in sentence 14 that hail size reveals something about the storm?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "shred",
          sol: "9.RV.1.C",
          stem: "In sentence 23, the word shred most nearly means —",
          choices: [
            { letter: "A", text: "water heavily" },
            { letter: "B", text: "cover lightly" },
            { letter: "C", text: "tear apart" },
            { letter: "D", text: "dry out" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL · BAKERY ───────────────────────── */
    {
      id: "g9-ri-c54-why-bread-rises",
      family: "G9",
      title: "Why Bread Rises",
      kind: "Informational · 9.RI",
      blurb: "A small-town baker explains the yeast, the stretch, and the oven spring behind every loaf.",
      level: 1,
      passage:
        "<p>" + N(1) + "At Dalgaard's Bakery in the small town of Pine Hollow, the first loaves go into the oven at five each morning. " +
        N(2) + "To customers, the bread simply appears, warm and tall, in baskets near the register. " +
        N(3) + "To baker Ingrid Dalgaard, every loaf is a small science experiment. " +
        N(4) + "\"Bread is alive before it is baked,\" she likes to say. " +
        N(5) + "She means that quite literally.</p>" +
        "<p>" + N(6) + "The key ingredient is yeast, a tiny fungus made of single cells. " +
        N(7) + "When yeast is mixed with flour and water, it feeds on sugars in the flour. " +
        N(8) + "As it feeds, it gives off two things: a gas called carbon dioxide and small amounts of alcohol. " +
        N(9) + "The gas forms bubbles throughout the dough. " +
        N(10) + "Those bubbles are what make bread rise.</p>" +
        "<p>" + N(11) + "Yeast alone is not enough, though. " +
        N(12) + "The bubbles need something to hold them in. " +
        N(13) + "That job belongs to gluten, a network of proteins that forms when flour is mixed with water and kneaded. " +
        N(14) + "Kneading stretches and folds the proteins into long, springy strands. " +
        N(15) + "Ingrid compares well-kneaded dough to a balloon: it stretches as the gas pushes outward, but it does not tear. " +
        N(16) + "Dough that has not been kneaded enough lets the gas escape, and the loaf comes out flat and heavy.</p>" +
        "<p>" + N(17) + "Temperature matters, too. " +
        N(18) + "Yeast works best in warm conditions, around 75 to 80 degrees Fahrenheit. " +
        N(19) + "In cold weather, Ingrid sets her dough in a proofing cabinet, a warm, humid box that keeps the yeast active. " +
        N(20) + "If the dough gets too warm or rises too long, however, the yeast produces more gas than the gluten can hold, and the loaf can collapse in the oven. " +
        N(21) + "Bakers call this overproofing.</p>" +
        "<p>" + N(22) + "The final step happens in the oven. " +
        N(23) + "In the first few minutes of baking, the heat makes the gas bubbles expand quickly, and the loaf puffs up one last time. " +
        N(24) + "Bakers call this burst \"oven spring.\" " +
        N(25) + "As the temperature inside the loaf climbs, the yeast dies, the alcohol evaporates, and the gluten and starch set into a firm, airy structure. " +
        N(26) + "The outside dries and browns into a crust.</p>" +
        "<p>" + N(27) + "Ingrid learned to bake from her grandfather, who ran the bakery before her. " +
        N(28) + "He never used the word gluten, but he could tell by touch when dough was ready. " +
        N(29) + "Today she uses a thermometer and a timer as well as her hands. " +
        N(30) + "\"Science explains what my grandfather already knew,\" she says. " +
        N(31) + "\"Knowing the why just makes it easier to fix things when they go wrong.\"</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of this passage about baking?",
          choices: [
            { letter: "A", text: "Bakers today rely on machines more than on their hands." },
            { letter: "B", text: "Small-town bakeries must open very early to stay in business." },
            { letter: "C", text: "Yeast, gluten, and heat work together to make bread rise." },
            { letter: "D", text: "Kneading is the only step that truly matters in baking bread." }
          ],
          correct: "C"
        },
        {
          id: "gluten",
          sol: "9.RI.1.B",
          stem: "According to the passage, what is the main job of gluten in bread dough?",
          choices: [
            { letter: "A", text: "to hold the gas bubbles inside the dough" },
            { letter: "B", text: "to feed the yeast so that it stays alive" },
            { letter: "C", text: "to give the crust its dark brown color" },
            { letter: "D", text: "to keep the dough warm in cold weather" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the passage mainly organized after the introduction?",
          choices: [
            { letter: "A", text: "as a list of complaints that customers have about bread" },
            { letter: "B", text: "as a comparison of two bakeries in different towns" },
            { letter: "C", text: "as a story told mostly from the grandfather's memory" },
            { letter: "D", text: "as an explanation of each factor that makes bread rise" }
          ],
          correct: "D"
        },
        {
          id: "balloon",
          sol: "9.RI.2.B",
          stem: "The comparison of dough to a balloon in sentence 15 helps the reader understand that well-kneaded dough —",
          choices: [
            { letter: "A", text: "will float if it is left in a warm kitchen" },
            { letter: "B", text: "can stretch to hold gas without tearing" },
            { letter: "C", text: "must be filled with air by the baker" },
            { letter: "D", text: "pops easily when it is touched too soon" }
          ],
          correct: "B"
        },
        {
          id: "collapse",
          sol: "9.RV.1.B",
          stem: "As used in sentence 20, the word collapse most nearly means —",
          choices: [
            { letter: "A", text: "fall in on itself" },
            { letter: "B", text: "turn a dark color" },
            { letter: "C", text: "taste very sour" },
            { letter: "D", text: "stick to the pan" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence expresses a personal view rather than a scientific fact?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 25" },
            { letter: "D", text: "Sentence 31" }
          ],
          correct: "D"
        },
        {
          id: "temp",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that temperature affects how a loaf turns out?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 29" }
          ],
          correct: "C"
        },
        {
          id: "grandpa",
          sol: "9.RI.1.A",
          stem: "The author includes the details about Ingrid's grandfather in sentences 27 and 28 mainly to —",
          choices: [
            { letter: "A", text: "explain why the bakery is named Dalgaard's" },
            { letter: "B", text: "show that bakers understood bread by experience first" },
            { letter: "C", text: "suggest that the old recipes were better than new ones" },
            { letter: "D", text: "prove that thermometers are not needed in baking" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · ORCHESTRA ───────────────────────── */
    {
      id: "g9-rv-c54-tuning-note",
      family: "G9",
      title: "The Tuning Note",
      kind: "Vocabulary · 9.RV",
      blurb: "Forty players, one oboe, and the single A that turns noise into an orchestra.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ten minutes before the spring concert, the stage of Westbrook High's auditorium sounded nothing like music. " +
        N(2) + "Forty students were warming up at once, and the result was pure <strong>cacophony</strong>: a trumpet practicing scales, two violins racing through the same tricky passage, and a bass drum that someone kept bumping by accident. " +
        N(3) + "From the audience it must have sounded like a zoo at feeding time. " +
        N(4) + "Then the oboist, Sana Qureshi, stood up.</p>" +
        "<p>" + N(5) + "Sana's job was to give the tuning note, a single A that every other instrument would match. " +
        N(6) + "The oboe is used for this because its sound is steady and cuts clearly through a crowded room. " +
        N(7) + "She had practiced the note with <strong>meticulous</strong> care, checking it against an electronic tuner every morning for a week until the needle stopped trembling and settled exactly in the center. " +
        N(8) + "Even so, her first breath was <strong>tentative</strong>, and the A came out thin and slightly wobbly. " +
        N(9) + "She steadied her shoulders and played it again.</p>" +
        "<p>" + N(10) + "This time the note was <strong>resonant</strong>, full and warm, and it seemed to fill the room right up to the balcony. " +
        N(11) + "The violins tuned first, then the violas and cellos, each player turning a peg or a fine tuner until the string agreed with the oboe. " +
        N(12) + "The brass followed, and finally the woodwinds. " +
        N(13) + "For a few seconds the whole orchestra held the A together, and the single note <strong>reverberated</strong> off the back wall so that it seemed to come from everywhere at once.</p>" +
        "<p>" + N(14) + "Mr. Delacroix, the conductor, waited at the side of the stage with his baton tucked under his arm. " +
        N(15) + "He had told the students that tuning was not a chore but a promise. " +
        N(16) + "\"When you tune to the same note,\" he had said, \"you are agreeing to listen to one another for the next hour.\" " +
        N(17) + "Sana thought about that as the sound faded. " +
        N(18) + "Forty separate musicians had become, at least for the moment, one instrument.</p>" +
        "<p>" + N(19) + "The house lights dimmed. " +
        N(20) + "Somewhere in the audience a baby fussed and then went quiet. " +
        N(21) + "Mr. Delacroix walked to the podium, lifted his hands, and looked slowly across the orchestra, section by section. " +
        N(22) + "In that pause, the room was so still that Sana could hear the faint hum of the stage lights. " +
        N(23) + "The silence was not empty, she realized; it was full of forty people waiting to begin together. " +
        N(24) + "The baton came down, and the music started on time and in tune.</p>",
      claims: [
        {
          id: "cacophony",
          sol: "9.RV.1.C",
          stem: "Which words from the passage best help the reader understand the meaning of cacophony in sentence 2?",
          choices: [
            { letter: "A", text: "Ten minutes before the spring concert" },
            { letter: "B", text: "Forty students were warming up at once" },
            { letter: "C", text: "the stage of Westbrook High's auditorium" },
            { letter: "D", text: "Then the oboist, Sana Qureshi, stood up" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word meticulous most nearly means —",
          choices: [
            { letter: "A", text: "hurried and nervous" },
            { letter: "B", text: "cheerful and relaxed" },
            { letter: "C", text: "loud and confident" },
            { letter: "D", text: "exact and thorough" }
          ],
          correct: "D"
        },
        {
          id: "tentative",
          sol: "9.RV.1.E",
          stem: "Compared with the word weak, the word tentative in sentence 8 suggests that Sana's first note was —",
          choices: [
            { letter: "A", text: "hesitant because she felt unsure" },
            { letter: "B", text: "poor because she had not practiced" },
            { letter: "C", text: "quiet because the oboe was broken" },
            { letter: "D", text: "soft because the room was so large" }
          ],
          correct: "A"
        },
        {
          id: "reverberated",
          sol: "9.RV.1.B",
          stem: "The word reverberated comes from re-, meaning \"again,\" and a Latin root meaning \"to strike.\" In sentence 13, reverberated most nearly means —",
          choices: [
            { letter: "A", text: "was played louder than it was before" },
            { letter: "B", text: "broke apart into many different notes" },
            { letter: "C", text: "echoed as if striking over and over" },
            { letter: "D", text: "faded until no one could hear it at all" }
          ],
          correct: "C"
        },
        {
          id: "zoo",
          sol: "9.RV.1.F",
          stem: "In sentence 3, comparing the warm-up to a zoo at feeding time mainly suggests that the noise was —",
          choices: [
            { letter: "A", text: "soft and soothing to the audience" },
            { letter: "B", text: "carefully planned by the conductor" },
            { letter: "C", text: "made mostly by the brass players" },
            { letter: "D", text: "loud, wild, and disorganized" }
          ],
          correct: "D"
        },
        {
          id: "resonant",
          sol: "9.RV.1.B",
          stem: "As used in sentence 10, the word resonant most nearly means —",
          choices: [
            { letter: "A", text: "rich and deep in sound" },
            { letter: "B", text: "sharp and unpleasant to hear" },
            { letter: "C", text: "high and extremely thin" },
            { letter: "D", text: "quick and repeated often" }
          ],
          correct: "A"
        },
        {
          id: "promise",
          sol: "9.RL.1.B",
          stem: "Based on sentence 16, Mr. Delacroix calls tuning a promise because he believes it shows that players —",
          choices: [
            { letter: "A", text: "will arrive on time for every concert" },
            { letter: "B", text: "have practiced their parts at home" },
            { letter: "C", text: "commit to listening to each other" },
            { letter: "D", text: "agree to follow the oboe's lead in every song" }
          ],
          correct: "C"
        },
        {
          id: "idea",
          sol: "9.RL.1.A",
          stem: "Which idea does the passage most clearly develop?",
          choices: [
            { letter: "A", text: "The oboe is the most important instrument in an orchestra." },
            { letter: "B", text: "Making music together depends on players listening as one." },
            { letter: "C", text: "Audiences rarely notice what happens before a concert starts." },
            { letter: "D", text: "Nervous performers should practice with an electronic tuner." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY · STORM CHASING ───────────────────────── */
    {
      id: "g9-rv-c54-almost-storm",
      family: "G9",
      title: "The Storm That Almost Did",
      kind: "Vocabulary · 9.RV",
      blurb: "A research intern waits all day for a tornado that never comes, and learns why that matters.",
      level: 3,
      passage:
        "<p>" + N(1) + "By two in the afternoon, the sky west of the little Kansas town had turned an <strong>ominous</strong> shade of green-gray, the kind of color that makes farmers glance up and walk a little faster. " +
        N(2) + "Leilani Kahale, a college sophomore spending her summer as an intern with a university storm research team, pressed her forehead against the van window. " +
        N(3) + "Back home in Hawai'i, storms rolled in off the ocean and left just as quickly; here they seemed to build themselves out of nothing, tower by tower, as if the sky were constructing a city.</p>" +
        "<p>" + N(4) + "The team's leader, Dr. Chidinma Okonkwo, was not interested in color. " +
        N(5) + "She was watching the radar on her laptop, where two lines of storms were beginning to <strong>converge</strong>, moving toward each other across the plains. " +
        N(6) + "\"The atmosphere is <strong>volatile</strong> today,\" she said. " +
        N(7) + "\"Plenty of heat, plenty of moisture, and winds changing direction with height, so any one of these cells could suddenly turn violent.\"</p>" +
        "<p>" + N(8) + "For three hours they followed the strongest storm east and then north, stopping every twenty minutes to launch a small weather balloon or check the instruments on the van's roof. " +
        N(9) + "Leilani's job was to record every reading in a notebook as a backup for the computers. " +
        N(10) + "She had expected the work to feel like an adventure movie. " +
        N(11) + "Instead it was mostly waiting, eating crackers, and writing numbers in neat columns while the clouds did whatever they pleased.</p>" +
        "<p>" + N(12) + "Around five o'clock, the storm developed a slow, rotating base that hung low over a wheat field. " +
        N(13) + "Everyone in the van went quiet. " +
        N(14) + "Dr. Okonkwo kept the team a <strong>prudent</strong> two miles away, parked on a paved road with a clear route south in case the storm turned toward them. " +
        N(15) + "Leilani held her pencil ready. " +
        N(16) + "Then, as quickly as it had organized, the rotation weakened. " +
        N(17) + "The low clouds frayed into ragged strips, and within twenty minutes the storm had begun to <strong>dissipate</strong>, its tall top melting into a soft gray haze.</p>" +
        "<p>" + N(18) + "Leilani felt a sharp pang of disappointment. " +
        N(19) + "\"So that was a bust,\" she said. " +
        N(20) + "Dr. Okonkwo laughed and handed her a bottle of water. " +
        N(21) + "\"For the movies, maybe,\" she said. " +
        N(22) + "\"For science, it's gold. " +
        N(23) + "We know a lot about storms that make tornadoes, but we know much less about the ones that almost do and then stop.\" " +
        N(24) + "She tapped Leilani's notebook. " +
        N(25) + "\"Somewhere in those columns might be the reason this one gave up.\"</p>" +
        "<p>" + N(26) + "That night, in a motel off the interstate, Leilani copied her readings into the team's database. " +
        N(27) + "The numbers no longer looked dull to her. " +
        N(28) + "Each one was a small piece of an answer that nobody had found yet, and she had been there to write it down.</p>",
      claims: [
        {
          id: "converge",
          sol: "9.RV.1.C",
          stem: "In sentence 5, which phrase best helps the reader understand the meaning of converge?",
          choices: [
            { letter: "A", text: "moving toward each other across the plains" },
            { letter: "B", text: "She was watching the radar on her laptop" },
            { letter: "C", text: "two lines of storms were beginning to" },
            { letter: "D", text: "The team's leader was not interested in color" }
          ],
          correct: "A"
        },
        {
          id: "volatile",
          sol: "9.RV.1.C",
          stem: "Based on sentences 6 and 7, the word volatile most nearly means —",
          choices: [
            { letter: "A", text: "calm and easy to predict" },
            { letter: "B", text: "cool and very dry all day" },
            { letter: "C", text: "likely to change suddenly" },
            { letter: "D", text: "heavy with steady, gentle rain" }
          ],
          correct: "C"
        },
        {
          id: "prudent",
          sol: "9.RV.1.E",
          stem: "Compared with the word safe, the word prudent in sentence 14 suggests that Dr. Okonkwo's choice of distance was —",
          choices: [
            { letter: "A", text: "lucky, since she guessed correctly" },
            { letter: "B", text: "wise, since she planned for danger" },
            { letter: "C", text: "timid, since she feared the storm" },
            { letter: "D", text: "lazy, since she avoided driving" }
          ],
          correct: "B"
        },
        {
          id: "dissipate",
          sol: "9.RV.1.B",
          stem: "As used in sentence 17, the word dissipate most nearly means to —",
          choices: [
            { letter: "A", text: "grow stronger and faster" },
            { letter: "B", text: "turn sharply to the south" },
            { letter: "C", text: "drop heavy hail on a field" },
            { letter: "D", text: "break up and fade away" }
          ],
          correct: "D"
        },
        {
          id: "gold",
          sol: "9.RV.1.F",
          stem: "In sentence 22, Dr. Okonkwo says that for science the weakened storm is gold. She means that the storm —",
          choices: [
            { letter: "A", text: "made the sky turn a bright yellow color" },
            { letter: "B", text: "will earn the team a large cash reward" },
            { letter: "C", text: "may provide very valuable information" },
            { letter: "D", text: "was the most beautiful she had ever seen" }
          ],
          correct: "C"
        },
        {
          id: "ominous",
          sol: "9.RV.1.E",
          stem: "Compared with the word dark, the word ominous in sentence 1 suggests that the sky looked —",
          choices: [
            { letter: "A", text: "as if it warned of trouble ahead" },
            { letter: "B", text: "as if night had come early to the town" },
            { letter: "C", text: "as if it might clear up very soon" },
            { letter: "D", text: "as if it were reflecting the wheat fields" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "How does Leilani's view of her notebook readings change over the course of the passage?",
          choices: [
            { letter: "A", text: "She first trusts them, then decides the computers are more accurate." },
            { letter: "B", text: "She first enjoys them, then finds them too hard to understand." },
            { letter: "C", text: "She first ignores them, then copies them only because she must." },
            { letter: "D", text: "She first finds them dull, then sees them as part of a discovery." }
          ],
          correct: "D"
        },
        {
          id: "city",
          sol: "9.RL.2.B",
          stem: "In sentence 3, the image of the sky constructing a city, tower by tower, mainly emphasizes that the Kansas storms —",
          choices: [
            { letter: "A", text: "are smaller and quicker than storms in Hawai'i" },
            { letter: "B", text: "grow upward in huge, rising layers of cloud" },
            { letter: "C", text: "usually form over towns rather than farms" },
            { letter: "D", text: "can damage tall buildings in their path" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── PAIRED · BIKE REPAIR ───────────────────────── */
    {
      id: "g9-dsr-c54-bike-kitchen",
      family: "G9",
      title: "The Bike Kitchen: Two Views",
      kind: "Paired texts · 9.DSR",
      blurb: "A newspaper story about a free repair workshop, and a teen volunteer who keeps her hands in her pockets.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Bike Kitchen Opens in Old Fire Station (Riverbend Weekly)</strong></p>" +
        "<p>" + N(1) + "The old fire station on Juniper Avenue has a new purpose. " +
        N(2) + "Since April, its garage bays have housed the Riverbend Bike Kitchen, a nonprofit workshop where anyone can learn to repair a bicycle for free. " +
        N(3) + "The Kitchen is open Tuesday and Thursday evenings and Saturday mornings. " +
        N(4) + "Visitors work on their own bikes using donated tools, while trained volunteers coach them through each repair. " +
        N(5) + "\"We don't fix your bike for you,\" explained director Hamid Rostami. " +
        N(6) + "\"We fix it with you.\" " +
        N(7) + "The idea, Rostami said, is that a rider who understands a bike can keep it running for years. " +
        N(8) + "In its first three months, the Kitchen has hosted more than 300 visits. " +
        N(9) + "The most common repairs are flat tires, worn brake pads, and chains that slip. " +
        N(10) + "Volunteers have also rebuilt 45 donated bikes, which were given to students at Riverbend High who needed a way to get to school or work. " +
        N(11) + "The program depends on donations of tools, parts, and time. " +
        N(12) + "Rostami said the Kitchen especially needs volunteers who speak Spanish or Vietnamese, since many visitors are more comfortable learning in those languages. " +
        N(13) + "\"Every rider leaves here with a working bike and a little more confidence,\" he said. " +
        N(14) + "The Kitchen hopes to add a Sunday session by the fall.</p>" +
        "<p><strong>Text 2 — Saturday at the Kitchen (a volunteer's blog post by Thuy Pham, age 16)</strong></p>" +
        "<p>" + N(15) + "I started volunteering at the Bike Kitchen because I liked fixing things, but I didn't expect to spend most of my time not touching the bikes. " +
        N(16) + "The rule is that the visitor holds the tools. " +
        N(17) + "My job is to point, explain, and keep my hands in my pockets, which is harder than it sounds. " +
        N(18) + "Last Saturday an older woman named Mrs. Lien came in with a chain that kept falling off. " +
        N(19) + "It took her almost an hour to adjust the gear mechanism, a job I could have done in five minutes. " +
        N(20) + "Twice she wanted to give up. " +
        N(21) + "Because I could explain the steps to her in Vietnamese, she kept going. " +
        N(22) + "When the chain finally shifted smoothly, she rode three laps around the parking lot, ringing her bell the whole time. " +
        N(23) + "Not every visit ends like that. " +
        N(24) + "Some days we run out of the right parts, and people leave with a bike that still isn't fixed, only a list of what to buy. " +
        N(25) + "Some days the line is so long that we have to turn people away at closing. " +
        N(26) + "Still, I think the slow way is the right way. " +
        N(27) + "Mrs. Lien came back the next week to help someone else with the same problem. " +
        N(28) + "She didn't need me at all.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea do both texts support?",
          choices: [
            { letter: "A", text: "The Kitchen should be open on many more days each week." },
            { letter: "B", text: "Most bike problems are too hard for beginners to fix." },
            { letter: "C", text: "Volunteers work faster than the visitors they help." },
            { letter: "D", text: "Learning to do repairs yourself builds lasting skill." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does Thuy's post most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "gives an overview with numbers, while Text 2 tells one person's story" },
            { letter: "B", text: "criticizes the Kitchen's strict rules, while Text 2 defends every one of them" },
            { letter: "C", text: "focuses on just one visitor, while Text 2 reports on the whole program" },
            { letter: "D", text: "asks readers to donate money, while Text 2 asks readers to stay away" }
          ],
          correct: "A"
        },
        {
          id: "language",
          sol: "9.DSR.E",
          stem: "Which inference about the Bike Kitchen is best supported by both texts?",
          choices: [
            { letter: "A", text: "Most visitors to the Kitchen are students from Riverbend High." },
            { letter: "B", text: "The Kitchen will close if it does not add a Sunday session." },
            { letter: "C", text: "Volunteers who speak a visitor's language help repairs succeed." },
            { letter: "D", text: "Older riders need more help than younger riders at the Kitchen." }
          ],
          correct: "C"
        },
        {
          id: "bikes45",
          sol: "9.RI.1.B",
          stem: "According to Text 1, what happened to the 45 bikes that volunteers rebuilt?",
          choices: [
            { letter: "A", text: "They were sold to pay for new tools and parts." },
            { letter: "B", text: "They were given to students who needed transportation." },
            { letter: "C", text: "They were kept at the Kitchen for visitors to practice on." },
            { letter: "D", text: "They were returned to the people who had donated them." }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from Text 2 states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "D"
        },
        {
          id: "withyou",
          sol: "9.DSR.D",
          stem: "Which sentence from Text 2 best shows the approach Rostami describes in sentences 5 and 6 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 25" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "9.DSR.E",
          stem: "A reader combining both texts could best conclude that the Kitchen's approach —",
          choices: [
            { letter: "A", text: "takes more time but can turn visitors into teachers" },
            { letter: "B", text: "works only for riders who already know some repairs" },
            { letter: "C", text: "should be replaced by volunteers doing the repairs" },
            { letter: "D", text: "has failed because the line is often far too long" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── PAIRED · BAKERY ───────────────────────── */
    {
      id: "g9-dsr-c54-tomorrow-shelf",
      family: "G9",
      title: "The Tomorrow Shelf",
      kind: "Paired texts · 9.DSR",
      blurb: "A baker gives away yesterday's bread. The teenager at her register notices why people don't take it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A Note on the Tomorrow Shelf (posted by Rosa Benítez, owner of Benítez Bakery)</strong></p>" +
        "<p>" + N(1) + "For twenty-two years, Benítez Bakery has thrown away whatever bread did not sell by closing time. " +
        N(2) + "My father did it, and so did I, because yesterday's bread is not what we promise our customers. " +
        N(3) + "But last winter I added up the numbers, and I was ashamed: we were discarding close to forty loaves a week. " +
        N(4) + "Starting Monday, those loaves will go on a new rack by the front window, which my staff has named the Tomorrow Shelf. " +
        N(5) + "Day-old bread will be sold for whatever you choose to pay, including nothing. " +
        N(6) + "There is no form to fill out and no question to answer. " +
        N(7) + "Some of my fellow business owners have warned me that people will take advantage. " +
        N(8) + "Perhaps a few will. " +
        N(9) + "I would rather lose a few loaves to someone who did not need them than keep them from someone who did. " +
        N(10) + "Day-old bread, I should add, is still excellent bread. " +
        N(11) + "It makes better toast than fresh bread does, and my grandmother insisted it was the only proper bread for bread pudding. " +
        N(12) + "If the shelf is empty by noon, I will consider that a success, not a loss. " +
        N(13) + "If it is still full at closing, I will ask what we are doing wrong.</p>" +
        "<p><strong>Text 2 — What I Saw from the Register (by Yusuf Demir, a Saturday counter worker, age 17)</strong></p>" +
        "<p>" + N(14) + "I have worked the counter at Benítez Bakery on Saturdays since last summer, so I have watched the Tomorrow Shelf from its first week. " +
        N(15) + "Ms. Benítez was right about one thing: almost no one abuses it. " +
        N(16) + "In six months, I have seen maybe two people sweep the whole rack into a bag. " +
        N(17) + "But the shelf was often still half full at closing, and I do not think it was because people did not need it. " +
        N(18) + "I watched customers stand near the window, look at the rack, and then buy the cheapest roll at full price instead. " +
        N(19) + "One woman told me quietly that she did not want her neighbors to see her \"taking charity.\" " +
        N(20) + "The shelf sat in the brightest spot in the store, right where everyone in line could watch. " +
        N(21) + "No form, no questions—but plenty of eyes. " +
        N(22) + "Last month I suggested moving the rack to the side hallway by the back door, where people could choose in private. " +
        N(23) + "Ms. Benítez agreed to try it. " +
        N(24) + "Since then the shelf has been empty by noon on four Saturdays out of four. " +
        N(25) + "I have learned that sometimes kindness has to be offered quietly before people can accept it.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea about the Tomorrow Shelf do both texts support?",
          choices: [
            { letter: "A", text: "An empty shelf by midday is a sign that the plan is working." },
            { letter: "B", text: "Day-old bread tastes better than bread baked the same morning." },
            { letter: "C", text: "Many customers take far more bread than they actually need." },
            { letter: "D", text: "The bakery should require a form before giving away bread." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does Yusuf most directly challenge in sentence 21?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "answer",
          sol: "9.DSR.E",
          stem: "How does Text 2 respond to the question Ms. Benítez raises in sentence 13 of Text 1?",
          choices: [
            { letter: "A", text: "It shows that the bakery was baking too few loaves to begin with." },
            { letter: "B", text: "It suggests that the shelf's public spot kept people away." },
            { letter: "C", text: "It argues that customers simply did not like the taste of day-old bread." },
            { letter: "D", text: "It explains that most of the bread was taken by a few people." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "reports on the shelf's results, while Text 2 predicts them" },
            { letter: "B", text: "praises the customers, while Text 2 blames the customers" },
            { letter: "C", text: "describes the bakery's history, while Text 2 ignores the bakery" },
            { letter: "D", text: "explains a plan, while Text 2 shows how it worked in practice" }
          ],
          correct: "D"
        },
        {
          id: "toast",
          sol: "9.RI.1.A",
          stem: "Ms. Benítez includes sentences 10 and 11 mainly to —",
          choices: [
            { letter: "A", text: "share her grandmother's favorite recipe for bread pudding" },
            { letter: "B", text: "explain why the bakery has wasted bread for years" },
            { letter: "C", text: "assure readers that day-old bread is worth eating" },
            { letter: "D", text: "argue that fresh bread should cost less than it does" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from Text 1 expresses a personal value rather than a reported fact?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "A"
        },
        {
          id: "avoid",
          sol: "9.DSR.D",
          stem: "Which pair of sentences from Text 2 together best explains why customers at first avoided the shelf?",
          choices: [
            { letter: "A", text: "Sentences 15 and 16" },
            { letter: "B", text: "Sentences 22 and 23" },
            { letter: "C", text: "Sentences 16 and 24" },
            { letter: "D", text: "Sentences 19 and 20" }
          ],
          correct: "D"
        },
        {
          id: "final",
          sol: "9.RI.2.B",
          stem: "Sentence 25 mainly serves to —",
          choices: [
            { letter: "A", text: "introduce a new problem that the bakery must still solve" },
            { letter: "B", text: "state the broader lesson Yusuf drew from what he saw" },
            { letter: "C", text: "repeat the warning made by other business owners" },
            { letter: "D", text: "explain how many loaves the shelf now gives away" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── POETRY · STORM ───────────────────────── */
    {
      id: "g9-rl-c54-porch-late-june",
      family: "G9",
      title: "Porch, Late June",
      kind: "Poetry · 9.RL",
      blurb: "A grandfather who reads the sky, a grandchild who wants to film it, and a storm that walks past the house.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandfather reads the sky the way<br>" +
        L(2) + "some people read a face they've known for years:<br>" +
        L(3) + "the yellow tint, the stillness of the jays,<br>" +
        L(4) + "the wind that suddenly forgets to blow.<br>" +
        L(5) + "The radio says watch. The radio says warning.<br>" +
        L(6) + "He only nods and keeps his coffee warm.<br>" +
        L(7) + "Out past the fence the clouds stack up like plates<br>" +
        L(8) + "a careless hand keeps piling in the sink,<br>" +
        L(9) + "and one gray shelf drops lower than the rest,<br>" +
        L(10) + "turning so slowly I'm not sure it turns.<br>" +
        L(11) + "I want to run. I want to film it all.<br>" +
        L(12) + "I want to call my friends and say Look up.<br>" +
        L(13) + "He touches my wrist, not holding, only there,<br>" +
        L(14) + "the way you steady a ladder for someone.<br>" +
        L(15) + "\"Respect it,\" he says. \"Watch it. Then go in.\"<br>" +
        L(16) + "We watch. The shelf unwinds, a dropped rope coiling,<br>" +
        L(17) + "and rain arrives like gravel on the roof.<br>" +
        L(18) + "We go in. The basement smells of dirt and apples.<br>" +
        L(19) + "Above us, something big walks past the house<br>" +
        L(20) + "and does not stop. Then quiet. Then the frogs.<br>" +
        L(21) + "When we come up, the yard is full of branches,<br>" +
        L(22) + "the porch swing hanging crooked from one chain,<br>" +
        L(23) + "and he is already outside, already sweeping,<br>" +
        L(24) + "already reading the cleaner, emptied sky." +
        "</p>",
      claims: [
        {
          id: "face",
          sol: "9.RL.2.A",
          stem: "In lines 1 and 2, the speaker compares the way the grandfather reads the sky to reading a familiar face mainly to show that he —",
          choices: [
            { letter: "A", text: "knows the weather's signs from long experience" },
            { letter: "B", text: "is worried about the people who live nearby him" },
            { letter: "C", text: "cannot see the sky clearly without his glasses" },
            { letter: "D", text: "would rather look at people than at the clouds" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The images in lines 3 and 4 (the yellow tint, the still jays, the wind that forgets to blow) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "cheerful and bright" },
            { letter: "B", text: "sleepy and peaceful" },
            { letter: "C", text: "tense and expectant" },
            { letter: "D", text: "angry and chaotic" }
          ],
          correct: "C"
        },
        {
          id: "calm",
          sol: "9.RL.1.B",
          stem: "Which line best supports the idea that the grandfather stays calm while danger approaches?",
          choices: [
            { letter: "A", text: "Line 5" },
            { letter: "B", text: "Line 6" },
            { letter: "C", text: "Line 11" },
            { letter: "D", text: "Line 17" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "9.RL.2.C",
          stem: "The poet repeats I want in lines 11 and 12 most likely to emphasize the speaker's —",
          choices: [
            { letter: "A", text: "fear of being left alone outside" },
            { letter: "B", text: "anger at the grandfather's rules" },
            { letter: "C", text: "boredom while waiting on the porch" },
            { letter: "D", text: "excitement and urge to take action" }
          ],
          correct: "D"
        },
        {
          id: "walks",
          sol: "9.RV.1.F",
          stem: "In lines 19 and 20, the phrase something big walks past the house is a figurative way of describing —",
          choices: [
            { letter: "A", text: "the storm passing close by" },
            { letter: "B", text: "a neighbor checking on them" },
            { letter: "C", text: "a large animal in the yard" },
            { letter: "D", text: "thunder far off in the hills" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "The poem is told from the point of view of —",
          choices: [
            { letter: "A", text: "the grandfather, remembering his childhood" },
            { letter: "B", text: "a radio announcer giving storm warnings" },
            { letter: "C", text: "a young person beside a grandparent" },
            { letter: "D", text: "a neighbor looking across the fence at them" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "How does the poem's ending (lines 21–24) differ from its beginning (lines 1–6)?",
          choices: [
            { letter: "A", text: "The speaker now refuses to listen to the radio." },
            { letter: "B", text: "The grandfather admits that he was afraid all along." },
            { letter: "C", text: "The storm is still building, but the family is safe." },
            { letter: "D", text: "The waiting has given way to the storm's aftermath." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the poem?",
          choices: [
            { letter: "A", text: "Young people should record dangerous events to warn others." },
            { letter: "B", text: "Respecting nature's power can mean waiting with patience." },
            { letter: "C", text: "Storms always do less damage than people expect them to." },
            { letter: "D", text: "Older people are rarely interested in any new technology." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── DRAMA · ORCHESTRA ───────────────────────── */
    {
      id: "g9-rl-c54-one-stand",
      family: "G9",
      title: "One Stand, Two Trumpets",
      kind: "Drama · 9.RL",
      blurb: "Five minutes to the concert, a missing page, and a senior who claims she knows the march by heart.",
      level: 2,
      passage:
        "<p><em>Setting: backstage at Lakeview High School, five minutes before the winter concert. Instrument cases lie open on the floor, and the murmur of the audience drifts through the curtain.</em></p>" +
        "<p>" + N(1) + "<em>(DEV, a sophomore, flips frantically through his music folder, dropping pages and snatching them up again.)</em> " +
        N(2) + "<strong>DEV</strong>: It's not here. The last page of the march is just not here. " +
        N(3) + "<strong>AMARA</strong> <em>(a senior, calmly oiling her trumpet valves)</em>: Check behind the program notes. Things hide there. " +
        N(4) + "<strong>DEV</strong>: I checked. I checked three times. The whole ending is gone, and I have the high part at the end, the part everybody will hear. " +
        N(5) + "<strong>AMARA</strong> <em>(aside)</em>: He has that part because I gave it to him in October. He has practiced it every day since, and I have barely looked at it. " +
        N(6) + "<strong>DEV</strong>: Maybe I can fake it. Play softer. Nobody will notice. " +
        N(7) + "<strong>AMARA</strong>: Everybody will notice. That's the whole point of that part. <em>(She holds out her own folder.)</em> Take mine. Both trumpet parts are printed on the same page, and I know the march by heart. " +
        N(8) + "<strong>DEV</strong>: Are you sure? " +
        N(9) + "<strong>AMARA</strong>: I've played it for four years. <em>(Aside.)</em> The first three pages, anyway. " +
        N(10) + "<em>(MS. ODUYA, the director, sweeps in with her baton.)</em> " +
        N(11) + "<strong>MS. ODUYA</strong>: Trumpets, places in two minutes. Dev, you look like you've seen a ghost. " +
        N(12) + "<strong>DEV</strong>: I'm fine. Amara's helping. " +
        N(13) + "<strong>MS. ODUYA</strong> <em>(glancing from one to the other)</em>: Amara usually is. <em>(She exits.)</em> " +
        N(14) + "<em>(DEV opens Amara's folder, turns to the last page, and pauses. He runs a finger along its edge, then looks up at her.)</em> " +
        N(15) + "<strong>DEV</strong>: This page is perfectly flat. No pencil marks, no bent corner. Nobody has turned to it in months. You don't know the ending by heart, do you? " +
        N(16) + "<strong>AMARA</strong> <em>(after a long pause)</em>: I know enough of it. " +
        N(17) + "<strong>DEV</strong>: Then we'll share. <em>(He drags two folding chairs together and sets the folder on a single music stand.)</em> One stand, two trumpets. You read the top line with me, and I'll count us in. " +
        N(18) + "<strong>AMARA</strong> <em>(smiling for the first time)</em>: You've been practicing the leading, not just the notes. " +
        N(19) + "<strong>DEV</strong>: I learned from someone. " +
        N(20) + "<em>(The backstage lights flicker twice, the signal for places. AMARA and DEV pick up their trumpets and walk toward the stage side by side, carrying the single stand between them.)</em>" +
        "</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "The playwright uses Amara's aside in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "show that she is angry Dev was given her part" },
            { letter: "B", text: "reveal to the audience a doubt she hides from Dev" },
            { letter: "C", text: "explain that the march was written for one trumpet" },
            { letter: "D", text: "prove that she has memorized the entire march" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          stem: "Amara's aside in sentence 9 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "Ms. Oduya already knows that Dev lost his page" },
            { letter: "B", text: "Dev is secretly hiding the missing page from her" },
            { letter: "C", text: "the concert has been canceled without warning" },
            { letter: "D", text: "the audience learns her secret, but Dev does not" }
          ],
          correct: "D"
        },
        {
          id: "frantic",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 1, in which Dev drops pages and snatches them up again, mainly shows that he is —",
          choices: [
            { letter: "A", text: "panicked about the missing music" },
            { letter: "B", text: "careless with his school supplies" },
            { letter: "C", text: "angry at the senior trumpet player" },
            { letter: "D", text: "bored while waiting for the concert" }
          ],
          correct: "A"
        },
        {
          id: "usually",
          sol: "9.RL.1.B",
          stem: "Ms. Oduya's reply in sentence 13, Amara usually is, suggests that she —",
          choices: [
            { letter: "A", text: "is annoyed that Amara is late again tonight" },
            { letter: "B", text: "suspects that Dev has lost his music" },
            { letter: "C", text: "sees Amara as a helpful person" },
            { letter: "D", text: "plans to give Amara's solo part to Dev" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Dev changes during the scene?",
          choices: [
            { letter: "A", text: "He moves from panic to taking charge." },
            { letter: "B", text: "He moves from trusting Amara to doubting her skill." },
            { letter: "C", text: "He moves from confidence to fear of the audience." },
            { letter: "D", text: "He moves from helping others to asking for help." }
          ],
          correct: "A"
        },
        {
          id: "leading",
          sol: "9.RV.1.C",
          stem: "In sentence 18, the leading that Dev has been practicing most nearly refers to —",
          choices: [
            { letter: "A", text: "playing louder than everyone else does" },
            { letter: "B", text: "walking at the front of a parade" },
            { letter: "C", text: "guiding others through the music" },
            { letter: "D", text: "memorizing the first three pages only" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the scene best support?",
          choices: [
            { letter: "A", text: "Experienced performers should never share their music." },
            { letter: "B", text: "A missing page is a sign that a player did not prepare." },
            { letter: "C", text: "Directors should check every folder before a concert." },
            { letter: "D", text: "Admitting a weakness can lead to a stronger solution." }
          ],
          correct: "D"
        },
        {
          id: "lastdir",
          sol: "9.RL.1.D",
          stem: "The final stage direction (sentence 20) mainly serves to —",
          choices: [
            { letter: "A", text: "show that the concert will begin much later than planned" },
            { letter: "B", text: "show that the two trumpeters now face the stage as partners" },
            { letter: "C", text: "suggest that Amara is still hiding something important from Dev" },
            { letter: "D", text: "reveal that Dev has finally found the missing page in his case" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL · STORM SPOTTING ───────────────────────── */
    {
      id: "g9-ri-c54-spotter-guide",
      family: "G9",
      title: "Storm Spotter Guide",
      kind: "Functional text · 9.RI",
      blurb: "What a volunteer storm spotter should watch for, what to report, and when to stop and go inside.",
      level: 1,
      passage:
        "<p><strong>Harmon County Volunteer Storm Spotter Program: Reporting Guide</strong></p>" +
        "<p><strong>Who We Are.</strong> " + N(1) + "Trained spotters are volunteers who watch the sky during severe weather and report what they see to the local weather office. " +
        N(2) + "Radar can show rain and rotation high in a storm, but it cannot always see what is happening near the ground. " +
        N(3) + "Spotter reports help forecasters decide when to issue, extend, or cancel warnings for the people in their area.</p>" +
        "<p><strong>Before You Spot.</strong> " + N(4) + "All spotters must complete the free two-hour training class, offered each March at the Harmon County Library. " +
        N(5) + "Volunteers under 18 must also have a parent or guardian sign the program's permission form. " +
        N(6) + "Keep a charged phone, a flashlight, a notepad, and a watch or clock with you whenever storms are possible.</p>" +
        "<p><strong>Safety Rules.</strong> " + N(7) + "Your safety always comes before any report. " +
        N(8) + "Spot from a safe, fixed location, such as your home, your school, or another sturdy building with a clear view of the sky. " +
        N(9) + "Never drive toward a storm to get a better look. " +
        N(10) + "If you can hear thunder, you are close enough to be struck by lightning, so watch from indoors through a window. " +
        N(11) + "If a warning is issued for your location, stop spotting and go to shelter immediately.</p>" +
        "<p><strong>What to Report.</strong> " + N(12) + "Report only the following events: hail the size of a penny or larger; wind strong enough to break tree limbs or damage buildings; flooding that covers roads; a funnel cloud; or a tornado. " +
        N(13) + "Do not report ordinary heavy rain or small hail. " +
        N(14) + "The weather office already sees these on radar, and extra calls can slow down more urgent reports.</p>" +
        "<p><strong>How to Report.</strong> " + N(15) + "Call the spotter line or use the report form on the county app. " +
        N(16) + "Give the following information in this order: your spotter ID number, your exact location, the time of the event, and what you saw. " +
        N(17) + "Be specific. " +
        N(18) + "Instead of saying \"big hail,\" compare it to a common object, such as a quarter, a golf ball, or a baseball. " +
        N(19) + "If you are unsure of what you saw, say so; an honest \"possible funnel cloud\" is more useful than a guess presented as fact. " +
        N(20) + "Photos may be uploaded through the app after the storm has passed, but never stay outside to take photos instead of seeking shelter.</p>" +
        "<p><strong>Questions?</strong> " + N(21) + "Contact the program coordinator at the Harmon County Emergency Management Office, which is open weekdays from eight to four.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The main purpose of this text is to —",
          choices: [
            { letter: "A", text: "persuade readers that radar is no longer truly needed" },
            { letter: "B", text: "describe the worst storms in county history" },
            { letter: "C", text: "explain how volunteers safely watch and report storms" },
            { letter: "D", text: "advertise a new weather app for county residents" }
          ],
          correct: "C"
        },
        {
          id: "notreport",
          sol: "9.RI.1.B",
          stem: "According to the guide, which event should a spotter NOT report?",
          choices: [
            { letter: "A", text: "ordinary heavy rain" },
            { letter: "B", text: "a possible funnel cloud" },
            { letter: "C", text: "water covering a road" },
            { letter: "D", text: "hail the size of a quarter" }
          ],
          correct: "A"
        },
        {
          id: "smallhail",
          sol: "9.RI.1.B",
          stem: "According to sentence 14, why should spotters avoid reporting small hail?",
          choices: [
            { letter: "A", text: "Small hail never causes any damage to homes or cars." },
            { letter: "B", text: "Spotters are not trained to measure small hail." },
            { letter: "C", text: "The app cannot accept reports of small hail." },
            { letter: "D", text: "Radar shows it, and extra calls slow urgent ones." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the guide mainly organized?",
          choices: [
            { letter: "A", text: "as a story about one spotter's first storm" },
            { letter: "B", text: "in headed sections that each cover one topic" },
            { letter: "C", text: "as a comparison of radar and human spotters" },
            { letter: "D", text: "in order from the least to the most dangerous storms" }
          ],
          correct: "B"
        },
        {
          id: "radar",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "warn spotters not to trust what radar shows" },
            { letter: "B", text: "describe how radar equipment is built and repaired" },
            { letter: "C", text: "explain why spotters are needed even with radar" },
            { letter: "D", text: "suggest that rotation only happens near the ground" }
          ],
          correct: "C"
        },
        {
          id: "safety",
          sol: "9.RI.3.A",
          stem: "Which sentence from the How to Report section most directly supports the rule in sentence 7 that safety comes before any report?",
          choices: [
            { letter: "A", text: "Sentence 20" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "A"
        },
        {
          id: "specific",
          sol: "9.RV.1.C",
          stem: "Based on sentences 17 and 18, the word specific most nearly means —",
          choices: [
            { letter: "A", text: "brief and very quick" },
            { letter: "B", text: "loud and clear" },
            { letter: "C", text: "calm and very polite" },
            { letter: "D", text: "exact and clear" }
          ],
          correct: "D"
        },
        {
          id: "except",
          sol: "9.RI.1.A",
          stem: "The guide tells spotters to do all of the following EXCEPT —",
          choices: [
            { letter: "A", text: "complete a training class before spotting" },
            { letter: "B", text: "drive closer to a storm for a clearer view" },
            { letter: "C", text: "give their location and the time of the event" },
            { letter: "D", text: "keep a flashlight and a notepad nearby" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT · BIKE REPAIR ───────────────────────── */
    {
      id: "g9-ri-c54-repair-elective",
      family: "G9",
      title: "Teach Us to Fix It",
      kind: "Argument · 9.RI",
      blurb: "Eleven bikes left on the rack all spring. A student argues her school should offer a repair class.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every morning, about sixty bikes are locked to the rack outside Fairview High School. " +
        N(2) + "By the end of the year, a surprising number of them have stopped moving. " +
        N(3) + "Last spring, I counted eleven bikes left on the rack for more than a week, most with flat tires or broken chains. " +
        N(4) + "Their owners had not quit cycling because they wanted to; they had quit because they did not know how to fix a simple problem. " +
        N(5) + "Fairview should offer a semester-long elective in bicycle repair.</p>" +
        "<p>" + N(6) + "The first reason is practical. " +
        N(7) + "For many students, a bike is the only way to get to school, a job, or practice without asking for a ride. " +
        N(8) + "When a bike breaks, a repair shop may charge twenty dollars or more to replace an inner tube, a fix that costs about five dollars in parts. " +
        N(9) + "A student who knows how to do the work saves money and keeps moving.</p>" +
        "<p>" + N(10) + "The second reason is that bike repair teaches skills that last. " +
        N(11) + "Fixing a bike requires patience, careful observation, and step-by-step problem solving, the same habits our science teachers try to build in the lab. " +
        N(12) + "Our technology teacher, Mr. Abara, told me that students in his small engines unit often understand gears better after seeing them work on a bicycle. " +
        N(13) + "A bike is a machine you can take apart on a table and understand completely, which is more than most of us can say about our phones.</p>" +
        "<p>" + N(14) + "Some people argue that the school cannot afford another class. " +
        N(15) + "It is true that tools cost money. " +
        N(16) + "However, the Millstone Cycle Shop has offered to donate a starter set of tools and two repair stands, and the class could share the room already used for the small engines unit. " +
        N(17) + "Others say students can simply watch repair videos online. " +
        N(18) + "Videos are helpful, but they cannot feel whether a brake cable is too loose or notice that you have threaded a bolt crooked. " +
        N(19) + "A teacher standing beside you can.</p>" +
        "<p>" + N(20) + "Finally, a repair class would make our school community healthier and more independent. " +
        N(21) + "Students who ride instead of being driven get daily exercise, and fewer cars in the drop-off line would mean less traffic around the building each morning. " +
        N(22) + "More importantly, students would learn that when something breaks, they do not have to throw it away or wait for someone else to rescue them.</p>" +
        "<p>" + N(23) + "Eleven abandoned bikes may seem like a small number, but each one stands for a student who stopped riding for a reason that could have been fixed in an afternoon. " +
        N(24) + "Let's give every Fairview student the chance to learn how. " +
        N(25) + "I urge the school board to approve a bicycle repair elective for next fall.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence best states the author's central claim?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "money",
          sol: "9.RI.3.A",
          stem: "Which sentence provides the strongest evidence that knowing how to repair a bike saves money?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "9.RI.2.A",
          stem: "The author organizes paragraph 4 (sentences 14–19) mainly by —",
          choices: [
            { letter: "A", text: "presenting objections and answering each one" },
            { letter: "B", text: "listing the steps for fixing a loose brake cable" },
            { letter: "C", text: "comparing Fairview with schools in other towns" },
            { letter: "D", text: "describing events in the order they took place" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The author begins with sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "complain that students do not lock their bikes well" },
            { letter: "B", text: "explain how many students ride to school daily" },
            { letter: "C", text: "use a local observation to show a real problem" },
            { letter: "D", text: "suggest that the school bike rack should be made larger" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "video",
          sol: "9.RI.1.B",
          stem: "According to the author, what can a teacher do that a repair video cannot?",
          choices: [
            { letter: "A", text: "show the steps of a repair in the correct order" },
            { letter: "B", text: "explain why bikes need regular maintenance" },
            { letter: "C", text: "provide free tools and parts for every student" },
            { letter: "D", text: "notice small mistakes as a student works" }
          ],
          correct: "D"
        },
        {
          id: "abandoned",
          sol: "9.RV.1.E",
          stem: "In sentence 23, the author calls the bikes abandoned rather than unused. Compared with unused, the word abandoned suggests that the bikes were —",
          choices: [
            { letter: "A", text: "given up on and left behind" },
            { letter: "B", text: "brand new and never ridden" },
            { letter: "C", text: "borrowed from other students" },
            { letter: "D", text: "locked up for safekeeping" }
          ],
          correct: "A"
        },
        {
          id: "skills",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 10 that bike repair teaches skills that last?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
