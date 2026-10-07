/* SOL Labyrinth — v5.15 expansion: Grade 10, medium tier (21 packs, 6 questions each).
 * Topics: a theme park job, pottery, a snowstorm, a bookstore. Original text only;
 * all people, places and businesses are invented. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · Literary · level 1 · theme park */
    {
      id: "g10-rl-c68-teacups",
      family: "G10",
      title: "The Spinning Teacups",
      kind: "Literary · 10.RL",
      blurb: "A new ride operator refuses to rush her safety checks, even when the line complains.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first morning as a ride operator at Larkspur Gardens, Rosa Delgado checked every lap bar on the Spinning Teacups three times. " +
        N(2) + "Her trainer, a tall college student named Theo, watched her from the control booth and said nothing. " +
        N(3) + "By noon the line stretched past the lemonade stand, and the families in it were sunburned and restless. " +
        N(4) + "Rosa could feel their eyes on her as she tugged each bar, and her face grew hot. " +
        N(5) + "\"You can go faster,\" a father called from the line. \"They're teacups, not rockets.\" " +
        N(6) + "A few people laughed, and Rosa's hands slowed down instead of speeding up. " +
        N(7) + "Then a small boy in a pink cup raised his hand and told her that his bar felt loose. " +
        N(8) + "Rosa pulled on it, and it slid an inch toward his chest before it caught. " +
        N(9) + "She kept the ride from starting, radioed maintenance, and closed that cup with a strip of yellow tape. " +
        N(10) + "The line groaned, but the father who had shouted was quiet now, because the boy in the pink cup was his son. " +
        N(11) + "At the end of the shift, Theo finally stepped out of the booth. " +
        N(12) + "\"Most new people check once and hope,\" he said, handing her a bottle of cold water. " +
        N(13) + "\"You checked like every bar was attached to someone you love.\" " +
        N(14) + "Rosa laughed, but on the bus home she realized that was exactly how it had felt." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Rosa's first shift on the Teacups best support?",
          choices: [
            { letter: "A", text: "Young workers should do whatever customers in line ask of them." },
            { letter: "B", text: "Care that looks slow to others can prove its worth when it matters." },
            { letter: "C", text: "Theme park rides are far more dangerous than most families believe." },
            { letter: "D", text: "Trainers should give new workers much more advice on the first day." }
          ],
          correct: "B"
        },
        {
          id: "character",
          sol: "10.RL.1.C",
          stem: "Sentences 4 and 6 characterize Rosa as someone who —",
          choices: [
            { letter: "A", text: "feels the crowd's pressure but will not rush her safety checks" },
            { letter: "B", text: "enjoys the attention of the families waiting in the line" },
            { letter: "C", text: "is annoyed that Theo will not come out to help her" },
            { letter: "D", text: "has trouble remembering the steps she learned in training" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in the action at the Teacups?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in \"The Spinning Teacups\" is most ironic?",
          choices: [
            { letter: "A", text: "Theo watches all morning but waits until the end to speak." },
            { letter: "B", text: "Rosa takes the bus home after a long shift at the park." },
            { letter: "C", text: "The families in line become sunburned while they wait." },
            { letter: "D", text: "The man who mocked the slow checks is the father of the boy at risk." }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "10.RL.2.A",
          stem: "In sentence 13, Theo's comparison mainly suggests that Rosa —",
          choices: [
            { letter: "A", text: "was too nervous to finish her checks quickly" },
            { letter: "B", text: "treated each rider's safety as a personal matter" },
            { letter: "C", text: "knew many of the families who rode the Teacups" },
            { letter: "D", text: "cared more about the ride than about the riders" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends with Rosa's realization on the bus (sentence 14) mainly to —",
          choices: [
            { letter: "A", text: "suggest that Rosa plans to quit the job soon" },
            { letter: "B", text: "show that Rosa thinks Theo was teasing her" },
            { letter: "C", text: "show that Rosa accepts Theo's words as true" },
            { letter: "D", text: "explain how Rosa gets to and from the park" }
          ],
          correct: "C"
        }
      ]
    },

    /* 2 · Informational · level 1 · pottery */
    {
      id: "g10-ri-c68-kiln",
      family: "G10",
      title: "Inside the Kiln",
      kind: "Informational · 10.RI",
      blurb: "How two trips through a very hot oven turn soft clay into a mug.",
      level: 1,
      passage:
        "<p>" + N(1) + "A lump of wet clay and a finished coffee mug are made of nearly the same material, but only one of them can hold hot coffee. " +
        N(2) + "The difference comes from the kiln, an insulated oven that can reach temperatures above 2,000 degrees Fahrenheit. " +
        N(3) + "Before clay goes into a kiln, it must dry completely, a process that can take a week for a thick pot. " +
        N(4) + "Any water left inside turns to steam during firing, and steam that cannot escape can crack a pot or even blow it apart. " +
        N(5) + "Most potters fire their work twice. " +
        N(6) + "The first firing, called the bisque firing, drives out the last moisture and hardens the clay enough to handle without crumbling. " +
        N(7) + "After that, the potter coats the piece with glaze, a liquid mixture of minerals that looks chalky and dull when it goes on. " +
        N(8) + "During the second, hotter firing, the glaze melts and fuses into a thin layer of glass on the surface. " +
        N(9) + "Many potters say that opening the kiln afterward feels like unwrapping a gift, because glaze colors can shift in the heat. " +
        N(10) + "A glaze that looked pale gray in the bucket may come out a deep, shining blue. " +
        N(11) + "Experienced potters keep notebooks that record each glaze recipe and kiln temperature so they can repeat their successes. " +
        N(12) + "Even so, most of them admit that the kiln always gets the final word." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Inside the Kiln\"?",
          choices: [
            { letter: "A", text: "Glaze colors are impossible to predict, so notebooks are of little use." },
            { letter: "B", text: "Thick pots take about a week to dry before they can be fired." },
            { letter: "C", text: "Careful, staged firing in a kiln turns soft clay into usable pottery." },
            { letter: "D", text: "A kiln is an oven that reaches more than 2,000 degrees Fahrenheit." }
          ],
          correct: "C"
        },
        {
          id: "dry",
          sol: "10.RI.1.B",
          stem: "According to the passage, why must clay dry completely before it is fired?",
          choices: [
            { letter: "A", text: "Trapped water becomes steam that can crack or burst the pot." },
            { letter: "B", text: "Wet clay will not hold glaze during the second firing." },
            { letter: "C", text: "Damp pots make the kiln heat up much more slowly." },
            { letter: "D", text: "Moist clay changes the color of the finished glaze." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          stem: "How are sentences 5 through 8 organized?",
          choices: [
            { letter: "A", text: "as a comparison of two kinds of clay" },
            { letter: "B", text: "as a problem followed by several solutions" },
            { letter: "C", text: "as a list of potters' opinions about glaze" },
            { letter: "D", text: "as a sequence describing two firings in order" }
          ],
          correct: "D"
        },
        {
          id: "example",
          sol: "10.RI.1.C",
          stem: "The author includes sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that gray glazes often fail" },
            { letter: "B", text: "give an example of a glaze changing in the heat" },
            { letter: "C", text: "explain why potters prefer the color blue" },
            { letter: "D", text: "show how glaze is stored before it is used" }
          ],
          correct: "B"
        },
        {
          id: "fuses",
          sol: "10.RV.1.C",
          stem: "In sentence 8, the word fuses most nearly means —",
          choices: [
            { letter: "A", text: "cools slowly" },
            { letter: "B", text: "flakes away" },
            { letter: "C", text: "joins by melting" },
            { letter: "D", text: "changes color" }
          ],
          correct: "C"
        },
        {
          id: "finalword",
          sol: "10.RI.2.B",
          stem: "The phrase the kiln always gets the final word in sentence 12 suggests that —",
          choices: [
            { letter: "A", text: "potters cannot fully control the results, even with good records" },
            { letter: "B", text: "potters should stop keeping notebooks about their glazes" },
            { letter: "C", text: "the second firing matters less than the first firing" },
            { letter: "D", text: "kilns break down so often that potters lose their work" }
          ],
          correct: "A"
        }
      ]
    },

    /* 3 · Literary · level 2 · snowstorm */
    {
      id: "g10-rl-c68-fourthday",
      family: "G10",
      title: "The Fourth Day of Snow",
      kind: "Literary · 10.RL",
      blurb: "With the power out, a bored brother discovers his grandmother's old deck of cards.",
      level: 2,
      passage:
        "<p>" + N(1) + "By the fourth day of the storm, the power had been out for sixty hours, and Nadia had stopped checking her phone for a signal. " +
        N(2) + "Her younger brother, Ilya, had not stopped complaining. " +
        N(3) + "\"There is nothing to do in this house,\" he announced from under three blankets, \"except be cold in different rooms.\" " +
        N(4) + "Their grandmother did not argue; she simply set a deck of worn cards on the kitchen table beside the woodstove. " +
        N(5) + "Nadia had seen the deck before, but she had never asked why the queen of hearts was drawn in pencil on a blank card. " +
        N(6) + "\"The real one blew out the window during the big storm of 1978,\" Grandma Vera said, shuffling. " +
        N(7) + "\"Your grandfather drew a new one by candlelight, and we played for four nights straight.\" " +
        N(8) + "Ilya peeked out from his blankets. " +
        N(9) + "Within an hour he was keeping score on the back of an envelope and accusing Nadia of cheating, which meant he was having fun. " +
        N(10) + "Outside, the snow kept falling, softening the fence posts into white thumbs. " +
        N(11) + "When the lights flickered back on the next morning, the refrigerator hummed and every screen in the house began to chirp. " +
        N(12) + "Ilya glanced at the blinking television and then back at the cards. " +
        N(13) + "\"One more game,\" he said, \"before the house gets loud again.\"" +
        "</p>",
      claims: [
        {
          id: "ilya",
          sol: "10.RL.1.C",
          stem: "Sentence 3 characterizes Ilya at the start of the story as —",
          choices: [
            { letter: "A", text: "frightened of the storm outside" },
            { letter: "B", text: "bored and dramatic about the outage" },
            { letter: "C", text: "angry at his sister for her silence" },
            { letter: "D", text: "worried about his grandmother's health" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "10.RL.1.B",
          stem: "Which sentence best shows the change in Ilya by the end of the storm?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "D"
        },
        {
          id: "thumbs",
          sol: "10.RL.2.A",
          stem: "In sentence 10, comparing the fence posts to white thumbs mainly suggests that the snow has —",
          choices: [
            { letter: "A", text: "rounded off and buried their sharp shapes" },
            { letter: "B", text: "begun to melt in the morning sunlight" },
            { letter: "C", text: "knocked several of the posts to the ground" },
            { letter: "D", text: "made the yard look dirty and gray" }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "10.RL.2.B",
          stem: "The details in sentence 11, the humming refrigerator and the chirping screens, mainly create a contrast with —",
          choices: [
            { letter: "A", text: "the danger of the storm in 1978" },
            { letter: "B", text: "Nadia's search for a phone signal" },
            { letter: "C", text: "the quiet, shared evenings by the stove" },
            { letter: "D", text: "the snow still falling on the fence" }
          ],
          correct: "C"
        },
        {
          id: "queen",
          sol: "10.RL.3.A",
          stem: "The author includes the story of the pencil-drawn queen in sentences 5–7 mainly to —",
          choices: [
            { letter: "A", text: "explain why the family owns so few games" },
            { letter: "B", text: "link this storm to an earlier family storm" },
            { letter: "C", text: "show that Grandma Vera is a skilled artist" },
            { letter: "D", text: "suggest that the old deck is now worthless" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by Ilya's words in the last sentence?",
          choices: [
            { letter: "A", text: "Card games are better entertainment than television." },
            { letter: "B", text: "Younger siblings eventually learn to obey their elders." },
            { letter: "C", text: "Storms are dangerous and families should prepare for them." },
            { letter: "D", text: "A hardship that removes distractions can bring people closer." }
          ],
          correct: "D"
        }
      ]
    },

    /* 4 · Informational · level 2 · bookstore */
    {
      id: "g10-ri-c68-usedbooks",
      family: "G10",
      title: "What a Used Book Is Worth",
      kind: "Informational · 10.RI",
      blurb: "Rules, timing and a little instinct: how a secondhand bookstore sets its prices.",
      level: 2,
      passage:
        "<p>" + N(1) + "Walk into almost any used bookstore and you will find two kinds of prices: the ones penciled inside the front cover and the ones the owner carries in her head. " +
        N(2) + "The penciled price usually starts with a simple rule. " +
        N(3) + "Many shops pay sellers about a quarter of what they expect to charge, which leaves room for rent, wages, and the books that never sell. " +
        N(4) + "The price in the owner's head is harder to explain. " +
        N(5) + "At Marrow Lane Books, owner Priya Raman sorts every incoming box into three piles: books she can sell this month, books she can sell someday, and books she cannot sell at all. " +
        N(6) + "Condition matters, but so does timing. " +
        N(7) + "A worn copy of a novel can jump in value the week a film version opens, then drop back when the film leaves theaters. " +
        N(8) + "Raman also watches the local schools, since required reading lists send waves of students looking for the same titles each fall. " +
        N(9) + "Rare books follow a different logic. " +
        N(10) + "A first printing with an error on the title page may be worth more than a clean later printing, because collectors prize the version that was quickly corrected. " +
        N(11) + "Still, Raman says that most of her stock earns only a few dollars a book. " +
        N(12) + "\"The money is in the middle shelf,\" she says, \"not the glass case.\" " +
        N(13) + "A bookstore survives, in her view, by selling thousands of ordinary books to people who wanted them, not by waiting for one treasure." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "What is the main idea of \"What a Used Book Is Worth\"?",
          choices: [
            { letter: "A", text: "Rare first printings are the main source of a bookstore's profit." },
            { letter: "B", text: "Film versions of novels make used copies more expensive forever." },
            { letter: "C", text: "Used book prices depend on rules, timing and demand, and ordinary sales matter most." },
            { letter: "D", text: "Most bookstore owners refuse to buy books they cannot sell quickly." }
          ],
          correct: "C"
        },
        {
          id: "demand",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that demand for a book can rise and fall quickly?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "The author organizes the passage mainly by —",
          choices: [
            { letter: "A", text: "moving from a simple pricing rule to the harder judgments behind prices" },
            { letter: "B", text: "telling the history of Marrow Lane Books from its first year to now" },
            { letter: "C", text: "comparing used bookstores with stores that sell only new books" },
            { letter: "D", text: "listing complaints from sellers and then answering each one" }
          ],
          correct: "A"
        },
        {
          id: "quote",
          sol: "10.RI.2.B",
          stem: "Raman's quotation in sentence 12 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "her glass case holds the store's most valuable books" },
            { letter: "B", text: "ordinary books, not rare ones, keep the store running" },
            { letter: "C", text: "customers rarely notice books on the middle shelves" },
            { letter: "D", text: "she plans to stop selling rare books in the future" }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "10.RI.1.C",
          stem: "The author mentions the first printing with an error in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "warn readers to check title pages before they buy" },
            { letter: "B", text: "prove that publishers make frequent mistakes" },
            { letter: "C", text: "explain why Raman sorts books into three piles" },
            { letter: "D", text: "show that rare books are valued by different standards" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          stem: "Sentence 13 suggests that the author views Raman's approach to her business as —",
          choices: [
            { letter: "A", text: "practical and sensible" },
            { letter: "B", text: "careless and risky" },
            { letter: "C", text: "old-fashioned and slow" },
            { letter: "D", text: "greedy and unfair" }
          ],
          correct: "A"
        }
      ]
    },

    /* 5 · Vocabulary · level 1 · theme park */
    {
      id: "g10-rv-c68-nightcrew",
      family: "G10",
      title: "The Night Crew",
      kind: "Vocabulary · 10.RV",
      blurb: "After the gates close, an apprentice mechanic learns why a 400-item checklist matters.",
      level: 1,
      passage:
        "<p>" + N(1) + "When Thunder Ridge Park closes at ten, most of the lights go out, but the work does not stop. " +
        N(2) + "For the next seven hours, the night crew walks the empty tracks of every ride, and Jalen Ortiz, a nineteen-year-old apprentice mechanic, walks with them. " +
        N(3) + "His supervisor, Mrs. Agbaje, is famously <strong>meticulous</strong>; she wipes every bolt clean before checking it so that a hairline crack has nowhere to hide. " +
        N(4) + "At first Jalen found the routine <strong>tedious</strong>, because the same checklist of four hundred items repeats every single night. " +
        N(5) + "The rides, so loud and crowded during the day, sit <strong>dormant</strong> under the work lights, and the only sound is the click of wrenches. " +
        N(6) + "Once a month, the crew removes the wheels from each coaster car, cleans them, and must <strong>reassemble</strong> every part before the gates open at nine. " +
        N(7) + "Mrs. Agbaje reminds the apprentices to stay <strong>vigilant</strong> even on quiet nights, since problems rarely announce themselves. " +
        N(8) + "\"A ride never gets tired,\" she tells them, \"but the people who inspect it do.\" " +
        N(9) + "Last spring, Jalen noticed a faint orange streak near a weld on the Comet, a mark most people would have mistaken for dirt. " +
        N(10) + "It turned out to be early rust, and the crew replaced the part before it could weaken. " +
        N(11) + "Since then, he has stopped thinking of the checklist as boring. " +
        N(12) + "\"It's four hundred chances,\" he says, \"to catch the one thing that matters.\"" +
        "</p>",
      claims: [
        {
          id: "meticulous",
          sol: "10.RV.1.C",
          stem: "Which detail from sentence 3 best helps the reader understand the word meticulous?",
          choices: [
            { letter: "A", text: "His supervisor, Mrs. Agbaje, is famously" },
            { letter: "B", text: "so that a hairline crack" },
            { letter: "C", text: "has nowhere to hide" },
            { letter: "D", text: "wipes every bolt clean before checking it" }
          ],
          correct: "D"
        },
        {
          id: "dormant",
          sol: "10.RV.1.B",
          stem: "In sentence 5, the word dormant most nearly means —",
          choices: [
            { letter: "A", text: "broken" },
            { letter: "B", text: "inactive" },
            { letter: "C", text: "brightly lit" },
            { letter: "D", text: "unsafe" }
          ],
          correct: "B"
        },
        {
          id: "reassemble",
          sol: "10.RV.1.A",
          stem: "The word reassemble in sentence 6 begins with the prefix re-, as in rebuild and reread. Based on this, reassemble most nearly means —",
          choices: [
            { letter: "A", text: "put together again" },
            { letter: "B", text: "take apart slowly" },
            { letter: "C", text: "inspect a second time" },
            { letter: "D", text: "replace with new parts" }
          ],
          correct: "A"
        },
        {
          id: "vigilant",
          sol: "10.RV.1.D",
          stem: "The author could have written careful instead of vigilant in sentence 7. Compared with careful, vigilant adds a connotation of —",
          choices: [
            { letter: "A", text: "slow, patient effort" },
            { letter: "B", text: "nervous fear of failure" },
            { letter: "C", text: "alert watching for danger" },
            { letter: "D", text: "strict obedience to rules" }
          ],
          correct: "C"
        },
        {
          id: "tedious",
          sol: "10.RV.1.B",
          stem: "Sentence 11 suggests that the word tedious, as used in sentence 4, describes work that is —",
          choices: [
            { letter: "A", text: "difficult and dangerous" },
            { letter: "B", text: "quick and simple" },
            { letter: "C", text: "noisy and crowded" },
            { letter: "D", text: "dull and repetitive" }
          ],
          correct: "D"
        },
        {
          id: "rust",
          sol: "10.RI.1.C",
          stem: "The author includes the story of the orange streak in sentences 9 and 10 mainly to —",
          choices: [
            { letter: "A", text: "show why a repetitive checklist is worth doing" },
            { letter: "B", text: "suggest that the Comet is no longer safe to ride" },
            { letter: "C", text: "explain how rust forms on old metal welds" },
            { letter: "D", text: "prove that Jalen is better than his supervisor" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 · Paired texts · level 2 · pottery */
    {
      id: "g10-dsr-c68-studio",
      family: "G10",
      title: "Studio Rules + Muddy Week One",
      kind: "Paired texts · 10.DSR",
      blurb: "A shared clay studio's rules, and a new member's blog about learning why they matter.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Riverside Clay Studio: Notice to New Members</strong></p>" +
        "<p>" + N(1) + "Welcome to Riverside Clay Studio, where members may use the wheels and kilns during open hours on weekday evenings. " +
        N(2) + "Because the studio is shared, every member must follow three rules. " +
        N(3) + "First, wedge your clay on the canvas table before throwing, since air bubbles trapped in clay can burst in the kiln and damage other members' work. " +
        N(4) + "Second, place finished pieces only on the shelf marked with your name, and label the bottom of each piece with your initials. " +
        N(5) + "Third, clean your wheel and wipe the floor around it before you leave; dry clay dust is harmful to breathe. " +
        N(6) + "Pieces left on the drying shelf longer than three weeks will be recycled into new clay. " +
        N(7) + "Studio staff fire the kiln every Friday, and only pieces that are fully dry will be loaded.</p>" +
        "<p><strong>Text 2 — From Mei Lin's blog post \"Muddy Week One\"</strong></p>" +
        "<p>" + N(8) + "I signed up for open studio thinking pottery would be relaxing, and I spent my first night chasing a lopsided lump around the wheel. " +
        N(9) + "The rules sheet said to wedge my clay, but I skipped it because I was eager to start. " +
        N(10) + "An older member, Mr. Haddad, noticed and showed me how to press and fold the clay until it felt smooth all the way through. " +
        N(11) + "He said he once lost a whole shelf of bowls when someone else's bubbly pot exploded beside them in the kiln. " +
        N(12) + "After that, wedging stopped feeling like a chore and started feeling like a courtesy. " +
        N(13) + "My first bowl leans like it is listening for something, but it is fully dry, labeled, and waiting for Friday." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the studio notice and Mei Lin's blog agree?",
          choices: [
            { letter: "A", text: "Pottery is a relaxing hobby for beginners." },
            { letter: "B", text: "Members should fire the kiln themselves." },
            { letter: "C", text: "Wedging clay protects other people's work." },
            { letter: "D", text: "Unlabeled pieces are recycled each Friday." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Text 1 states rules directly; Text 2 shows one person learning why a rule matters." },
            { letter: "B", text: "Text 1 is written by a beginner; Text 2 is written by the studio's staff." },
            { letter: "C", text: "Text 1 argues against wedging; Text 2 argues that wedging is necessary." },
            { letter: "D", text: "Text 1 describes a single evening; Text 2 describes a whole year of classes." }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.DSR.E",
          stem: "Which idea is clearest only when the notice and the blog are read together?",
          choices: [
            { letter: "A", text: "Clay dust can be harmful to members who breathe it." },
            { letter: "B", text: "Mei Lin's first bowl did not turn out perfectly even." },
            { letter: "C", text: "The studio is open only on weekday evenings." },
            { letter: "D", text: "Mr. Haddad's story shows why the wedging rule exists." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.E",
          stem: "Select TWO sentences from Text 2 that show Mei Lin's attitude toward the studio rules changing.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "leans",
          sol: "10.RL.2.A",
          stem: "In sentence 13, Mei Lin's comparison of her bowl to something listening mainly conveys —",
          choices: [
            { letter: "A", text: "good-humored acceptance of her imperfect first piece" },
            { letter: "B", text: "worry that the bowl will break during the firing" },
            { letter: "C", text: "frustration that Mr. Haddad's bowls were better" },
            { letter: "D", text: "pride that her bowl is the best in the studio" }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "Text 1 is written mainly for —",
          choices: [
            { letter: "A", text: "staff who fire the kiln each Friday" },
            { letter: "B", text: "readers who follow Mei Lin's blog" },
            { letter: "C", text: "new members who will share the studio" },
            { letter: "D", text: "experienced potters who sell their work" }
          ],
          correct: "C"
        }
      ]
    },

    /* 7 · Poetry · level 2 · snowstorm */
    {
      id: "g10-rl-c68-nightplow",
      family: "G10",
      title: "Night Plow",
      kind: "Poetry · 10.RL",
      blurb: "At two in the morning, a speaker at the window watches a stranger clear the street.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At two a.m. the plow comes grinding down our street,<br>" +
        L(2) + "its orange light turning the snow to embers<br>" +
        L(3) + "and the embers back to snow.<br>" +
        L(4) + "I watch from the window in my father's old coat,<br>" +
        L(5) + "the house asleep behind me like a held breath.<br>" +
        L(6) + "The driver is only a shape in a lit box,<br>" +
        L(7) + "a stranger who will never know my name,<br>" +
        L(8) + "yet he lifts the whole white weight of the night<br>" +
        L(9) + "and sets it, softly, at the edge of our yard.<br>" +
        L(10) + "By morning the buses will run,<br>" +
        L(11) + "my mother will reach her shift at the hospital,<br>" +
        L(12) + "and no one will think about the man in the box.<br>" +
        L(13) + "So I am thinking of him now, for all of us:<br>" +
        L(14) + "one small light moving through the dark." +
        "</p>",
      claims: [
        {
          id: "embers",
          sol: "10.RL.2.B",
          stem: "The images in lines 2 and 3 mainly make the snowy street seem —",
          choices: [
            { letter: "A", text: "dirty and ruined by the plow" },
            { letter: "B", text: "glowing and almost magical" },
            { letter: "C", text: "dangerous and on fire" },
            { letter: "D", text: "empty and forgotten" }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "10.RL.2.A",
          stem: "In line 5, comparing the sleeping house to a held breath suggests that the house is —",
          choices: [
            { letter: "A", text: "cold because the heat is off" },
            { letter: "B", text: "noisy with people snoring" },
            { letter: "C", text: "about to wake up suddenly" },
            { letter: "D", text: "completely still, as if waiting" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"Night Plow\"?",
          choices: [
            { letter: "A", text: "Unseen workers make ordinary life possible and deserve notice." },
            { letter: "B", text: "Snowstorms are more beautiful at night than during the day." },
            { letter: "C", text: "Children should not stay awake late on school nights." },
            { letter: "D", text: "Strangers can never truly understand one another." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of lines 13 and 14 is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "anxious and fearful" },
            { letter: "C", text: "grateful and tender" },
            { letter: "D", text: "bored and distant" }
          ],
          correct: "C"
        },
        {
          id: "function",
          sol: "10.RL.3.A",
          stem: "How do lines 10–12 function in \"Night Plow\"?",
          choices: [
            { letter: "A", text: "They describe the plow driver's own family." },
            { letter: "B", text: "They show what the plow's work makes possible." },
            { letter: "C", text: "They explain why the speaker cannot sleep." },
            { letter: "D", text: "They predict that the storm will return." }
          ],
          correct: "B"
        },
        {
          id: "speaker",
          sol: "10.RL.1.C",
          stem: "Lines 4 and 13 characterize the speaker as someone who —",
          choices: [
            { letter: "A", text: "wishes to become a plow driver someday" },
            { letter: "B", text: "is upset about being awakened by noise" },
            { letter: "C", text: "feels lonely and wants the driver to stop" },
            { letter: "D", text: "quietly notices what others overlook" }
          ],
          correct: "D"
        }
      ]
    },

    /* 8 · Literary · level 3 · bookstore */
    {
      id: "g10-rl-c68-atlas",
      family: "G10",
      title: "Behind the Cookbooks",
      kind: "Literary · 10.RL",
      blurb: "A bookstore clerk sets out to catch a thief and finds a saver instead.",
      level: 3,
      passage:
        "<p>" + N(1) + "For three Saturdays in a row, Iris found the same atlas hidden behind the cookbooks at Fenwick & Pine, wedged so far back that only its gold spine showed. " +
        N(2) + "It was the most expensive book in the store, forty-eight dollars of glossy maps, and her manager, Mr. Okonkwo, had begun muttering about shoplifters. " +
        N(3) + "Iris decided to watch. " +
        N(4) + "On the fourth Saturday, a boy of about eleven came in with a canvas bag, sat cross-legged in the travel aisle, and turned the atlas's pages as carefully as if they were made of frost. " +
        N(5) + "When his mother called from the register, he slid the atlas behind the cookbooks and stood up quickly. " +
        N(6) + "Iris had prepared a speech about store policy, but it dissolved somewhere between the counter and the boy. " +
        N(7) + "\"Saving it?\" she asked instead. " +
        N(8) + "He went red and nodded; he had nineteen dollars in a jar at home and earned four more each week walking a neighbor's dog. " +
        N(9) + "Iris did the math in her head and frowned, because seven weeks was a long time for a book to stay hidden. " +
        N(10) + "That evening she filled out a yellow hold slip, wrote the boy's first name on it, and taped it to the cover. " +
        N(11) + "Mr. Okonkwo raised an eyebrow when he saw it. " +
        N(12) + "\"We don't hold books for two months,\" he said. " +
        N(13) + "\"We do now,\" Iris replied, and to her surprise he only shrugged and moved the atlas to the shelf behind the counter, where nothing ever needed to hide." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the resolution of \"Behind the Cookbooks\" best support?",
          choices: [
            { letter: "A", text: "Looking closely at a situation can turn suspicion into generosity." },
            { letter: "B", text: "Store rules should be followed even when they seem unfair." },
            { letter: "C", text: "Children should save money instead of spending it on books." },
            { letter: "D", text: "Managers usually know more than the workers they supervise." }
          ],
          correct: "A"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          stem: "The tension in the first half of the story comes mainly from —",
          choices: [
            { letter: "A", text: "Iris's fear that she will lose her job" },
            { letter: "B", text: "the boy's argument with his mother" },
            { letter: "C", text: "the chance that someone plans to steal the atlas" },
            { letter: "D", text: "a disagreement about where cookbooks belong" }
          ],
          correct: "C"
        },
        {
          id: "frost",
          sol: "10.RL.2.A",
          stem: "In sentence 4, comparing the atlas's pages to frost suggests that the boy —",
          choices: [
            { letter: "A", text: "finds the maps cold and uninteresting" },
            { letter: "B", text: "treats the book as fragile and precious" },
            { letter: "C", text: "is worried about damaging store property" },
            { letter: "D", text: "reads quickly so he will not be caught" }
          ],
          correct: "B"
        },
        {
          id: "speech",
          sol: "10.RL.1.C",
          stem: "Sentences 6 and 7 suggest that Iris —",
          choices: [
            { letter: "A", text: "forgets the store's rules when she is nervous" },
            { letter: "B", text: "wants the boy to be punished for hiding books" },
            { letter: "C", text: "is too shy to speak to customers directly" },
            { letter: "D", text: "changes her approach once she sees who it is" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in \"Behind the Cookbooks\" is most ironic?",
          choices: [
            { letter: "A", text: "The atlas is the most expensive book in the whole store." },
            { letter: "B", text: "The boy earns money by walking a neighbor's dog." },
            { letter: "C", text: "Hiding the book to keep it safe is what made it look stolen." },
            { letter: "D", text: "Iris fills out the hold slip in the evening after work." }
          ],
          correct: "C"
        },
        {
          id: "lastphrase",
          sol: "10.RL.3.A",
          stem: "The closing phrase of sentence 13, where nothing ever needed to hide, mainly serves to —",
          choices: [
            { letter: "A", text: "show that the problem is now settled in the open" },
            { letter: "B", text: "hint that Mr. Okonkwo still suspects the boy" },
            { letter: "C", text: "suggest that the store will soon be remodeled" },
            { letter: "D", text: "reveal that other books are also being hidden" }
          ],
          correct: "A"
        }
      ]
    },

    /* 9 · Informational · level 3 · theme park */
    {
      id: "g10-ri-c68-coaster",
      family: "G10",
      title: "Built to Feel Dangerous",
      kind: "Informational · 10.RI",
      blurb: "Why a roller coaster's thrill rests on layer after layer of backup systems.",
      level: 3,
      passage:
        "<p>" + N(1) + "A roller coaster is designed to feel dangerous while being, by the numbers, one of the safest ways to spend an afternoon. " +
        N(2) + "That contradiction is not an accident; it is the product of layers of protection, each one built on the assumption that another might fail. " +
        N(3) + "Engineers call this principle redundancy. " +
        N(4) + "Consider the clicking sound a train makes as it climbs the first hill. " +
        N(5) + "That noise comes from anti-rollback dogs, metal teeth that drop into a notched track so that, if the lift chain ever snapped, the train would slide back only a few inches. " +
        N(6) + "The track itself is divided into sections called blocks, and computer sensors allow only one train in each block at a time. " +
        N(7) + "If a train stalls, the system automatically holds the trains behind it, using brakes that close when power is lost rather than when it is supplied. " +
        N(8) + "That design choice is subtle but important: a blackout, the kind of failure that might disable other systems, actually makes the brakes grip harder. " +
        N(9) + "Human checks add another layer. " +
        N(10) + "Before opening, crews send empty trains through several full cycles, sometimes loaded with water-filled dummies that match the weight of riders. " +
        N(11) + "Inspectors also review sensor logs for small changes in speed that might hint at worn wheels. " +
        N(12) + "None of this removes the thrill, and riders are not supposed to notice it. " +
        N(13) + "The scream at the top of the hill belongs to the rider; the calm belongs to the engineers." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Built to Feel Dangerous\"?",
          choices: [
            { letter: "A", text: "Roller coasters are less thrilling today than they were in the past." },
            { letter: "B", text: "The clicking sound on a lift hill warns riders that the chain may snap." },
            { letter: "C", text: "Computer sensors have replaced the human inspectors at most parks." },
            { letter: "D", text: "Coasters feel risky but are kept safe by overlapping backup systems." }
          ],
          correct: "D"
        },
        {
          id: "blackout",
          sol: "10.RI.1.B",
          stem: "Which sentence best explains why a power failure does not leave a stalled train unprotected?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How is \"Built to Feel Dangerous\" mainly organized?",
          choices: [
            { letter: "A", text: "a general principle followed by mechanical and human examples of it" },
            { letter: "B", text: "a history of coasters told from the earliest ride to the newest" },
            { letter: "C", text: "a problem at one park followed by the steps used to solve it" },
            { letter: "D", text: "a comparison of two coasters with different safety records" }
          ],
          correct: "A"
        },
        {
          id: "contradiction",
          sol: "10.RI.2.B",
          stem: "In sentence 2, the author calls the coaster's design a contradiction mainly to emphasize that —",
          choices: [
            { letter: "A", text: "engineers disagree about how coasters should be built" },
            { letter: "B", text: "the ride's feeling of danger conflicts with its real safety" },
            { letter: "C", text: "safety rules make coasters less enjoyable to ride" },
            { letter: "D", text: "most riders do not believe that coasters are safe" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone toward the engineers in sentence 13 is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "mocking" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "admiring" }
          ],
          correct: "D"
        },
        {
          id: "dummies",
          sol: "10.RI.1.C",
          stem: "The author mentions the water-filled dummies in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "suggest that real riders are no longer needed" },
            { letter: "B", text: "show that test runs imitate the weight of real riders" },
            { letter: "C", text: "explain why the trains need to be washed each day" },
            { letter: "D", text: "add a humorous detail to an otherwise serious text" }
          ],
          correct: "B"
        }
      ]
    },

    /* 10 · Drama · level 2 · pottery */
    {
      id: "g10-rl-c68-fifthpot",
      family: "G10",
      title: "Cup, Probably",
      kind: "Drama · 10.RL",
      blurb: "After five collapsed pots, a perfectionist gets help from a friend and her teacher's first bowl.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A high school ceramics room after the last bell. JUNIPER sits at a pottery wheel, her hands gray with clay. MATEO cleans the wheel beside hers.</em></p>" +
        "<p><strong>JUNIPER:</strong> " + N(2) + "That's the fifth one. " + N(3) + "It keeps folding in on itself like it's tired of me.</p>" +
        "<p><strong>MATEO:</strong> " + N(4) + "Maybe it is. " + N(5) + "You've been at it since lunch.</p>" +
        "<p><strong>JUNIPER:</strong> " + N(6) + "Ms. Varga said the showcase pieces are due Friday. " + N(7) + "Mine has to be perfect, or there's no point putting it out.</p>" +
        "<p><strong>MATEO:</strong> <em>(holding up a squat, lumpy cup)</em> " + N(8) + "Mine's going in the showcase. " + N(9) + "I call it \"Cup, Probably.\"</p>" +
        "<p><strong>JUNIPER:</strong> <em>(laughing despite herself)</em> " + N(10) + "That's not even level.</p>" +
        "<p><strong>MATEO:</strong> " + N(11) + "Neither is the table at my grandmother's house, and we've eaten at it for thirty years.</p>" +
        "<p><em>" + N(12) + "MS. VARGA enters carrying a tray of fired pieces.</em></p>" +
        "<p><strong>MS. VARGA:</strong> " + N(13) + "Juniper, how many have collapsed today?</p>" +
        "<p><strong>JUNIPER:</strong> " + N(14) + "Five.</p>" +
        "<p><strong>MS. VARGA:</strong> " + N(15) + "Good. " + N(16) + "Then you've learned five ways the clay can tell you no. <em>(She sets a lopsided bowl on Juniper's table.)</em> " + N(17) + "This was my first bowl, from when I was your age. " + N(18) + "I keep it on my desk so I remember that every potter starts here.</p>" +
        "<p><strong>JUNIPER:</strong> <em>(studying the bowl, then wetting her hands)</em> " + N(19) + "One more try. " + N(20) + "Slower this time.</p>",
      claims: [
        {
          id: "perfect",
          sol: "10.RL.1.C",
          stem: "Sentence 7 characterizes Juniper as —",
          choices: [
            { letter: "A", text: "lazy and eager to quit early" },
            { letter: "B", text: "a perfectionist afraid to show flaws" },
            { letter: "C", text: "jealous of Mateo's natural talent" },
            { letter: "D", text: "confused about the showcase rules" }
          ],
          correct: "B"
        },
        {
          id: "tired",
          sol: "10.RL.2.A",
          stem: "In sentence 3, Juniper's comparison of the collapsing pot to something tired of her suggests that she —",
          choices: [
            { letter: "A", text: "takes the failures personally, as if the clay resists her" },
            { letter: "B", text: "believes the clay is too old to be used anymore" },
            { letter: "C", text: "thinks Mateo has been using her wheel all afternoon" },
            { letter: "D", text: "is joking because she does not care about the pot" }
          ],
          correct: "A"
        },
        {
          id: "laughing",
          sol: "10.RL.3.A",
          stem: "The stage direction laughing despite herself, just before sentence 10, mainly serves to —",
          choices: [
            { letter: "A", text: "show that Juniper thinks Mateo's cup is the best one" },
            { letter: "B", text: "reveal that Juniper has stopped caring about Friday" },
            { letter: "C", text: "suggest that Juniper is making fun of her friend" },
            { letter: "D", text: "show Mateo's humor starting to ease her tension" }
          ],
          correct: "D"
        },
        {
          id: "firstbowl",
          sol: "10.RL.1.B",
          stem: "Ms. Varga's actions in sentences 16–18 function in the plot as —",
          choices: [
            { letter: "A", text: "a warning that Juniper's piece will not be shown" },
            { letter: "B", text: "a flashback to Ms. Varga's own first class" },
            { letter: "C", text: "the moment that changes how Juniper sees failure" },
            { letter: "D", text: "an argument that ends the friendship in the scene" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the scene in the ceramics room?",
          choices: [
            { letter: "A", text: "Mistakes are a normal and useful part of learning a craft." },
            { letter: "B", text: "Teachers should lower their standards for beginners." },
            { letter: "C", text: "Only the most perfect work deserves to be displayed." },
            { letter: "D", text: "Friends should always tell each other the honest truth." }
          ],
          correct: "A"
        },
        {
          id: "good",
          sol: "10.RL.2.C",
          stem: "Ms. Varga's reply Good in sentence 15 is best described as —",
          choices: [
            { letter: "A", text: "sarcastic and disappointed" },
            { letter: "B", text: "encouraging in a surprising way" },
            { letter: "C", text: "impatient and strict" },
            { letter: "D", text: "worried and doubtful" }
          ],
          correct: "B"
        }
      ]
    },

    /* 11 · Functional text · level 1 · snowstorm */
    {
      id: "g10-ri-c68-snownotice",
      family: "G10",
      title: "Snow Emergency Notice",
      kind: "Functional text · 10.RI",
      blurb: "A county notice explains parking, plowing, sidewalks and trash during a snow emergency.",
      level: 1,
      passage:
        "<p><strong>Ashby Ridge County Snow Emergency: What Residents Need to Know</strong></p>" +
        "<p>" + N(1) + "A Snow Emergency has been declared for Ashby Ridge County beginning Tuesday at 6:00 p.m. and lasting until the county announces that it has ended.</p>" +
        "<p><strong>Parking</strong> " + N(2) + "During a Snow Emergency, no vehicle may be parked on any street marked with a red-and-white Snow Route sign. " +
        N(3) + "Vehicles left on Snow Routes will be towed at the owner's expense so that plows can clear the full width of the road.</p>" +
        "<p><strong>Plowing Order</strong> " + N(4) + "Crews plow Snow Routes and the roads to the hospital first, then bus routes, then neighborhood streets. " +
        N(5) + "Residents of side streets should expect to wait 24 to 48 hours after the snow stops.</p>" +
        "<p><strong>Sidewalks and Hydrants</strong> " + N(6) + "Property owners must clear the sidewalks in front of their homes within 24 hours after snowfall ends. " +
        N(7) + "Please also dig out any fire hydrant near your home, leaving a three-foot circle of clear ground around it.</p>" +
        "<p><strong>Trash and Schools</strong> " + N(8) + "Trash pickup is suspended for the length of the emergency; collection will resume one day later than normal afterward. " +
        N(9) + "School closings are announced separately by the school division by 5:30 a.m.</p>" +
        "<p><strong>Staying Informed</strong> " + N(10) + "Sign up for text alerts on the county website, or call the non-emergency line with questions about plowing or towing. " +
        N(11) + "For emergencies, always call 911.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The snow emergency notice is written mainly for —",
          choices: [
            { letter: "A", text: "plow drivers learning their routes" },
            { letter: "B", text: "teachers deciding whether to hold class" },
            { letter: "C", text: "residents who need to know what to do" },
            { letter: "D", text: "visitors planning a winter vacation" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings in the notice help a reader mainly by —",
          choices: [
            { letter: "A", text: "grouping instructions by topic so they are easy to find" },
            { letter: "B", text: "listing the steps of the emergency in time order" },
            { letter: "C", text: "showing which rules matter more than the others" },
            { letter: "D", text: "separating facts from the county's opinions" }
          ],
          correct: "A"
        },
        {
          id: "towing",
          sol: "10.RI.1.B",
          stem: "According to the notice, why are vehicles on Snow Routes towed?",
          choices: [
            { letter: "A", text: "to raise money for the county's road budget" },
            { letter: "B", text: "to make room for school buses to park" },
            { letter: "C", text: "to keep hydrants clear for fire trucks" },
            { letter: "D", text: "to let plows clear the whole width of the road" }
          ],
          correct: "D"
        },
        {
          id: "expense",
          sol: "10.RI.2.B",
          stem: "The phrase at the owner's expense in sentence 3 is included mainly to —",
          choices: [
            { letter: "A", text: "explain where towed vehicles will be stored" },
            { letter: "B", text: "make clear that drivers will pay for the tow" },
            { letter: "C", text: "suggest that towing rarely actually happens" },
            { letter: "D", text: "remind residents to call the non-emergency line" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "10.RI.1.A",
          stem: "Taken together, sentences 4 and 5 show that the county plows —",
          choices: [
            { letter: "A", text: "every street at the same time once snow stops" },
            { letter: "B", text: "neighborhood streets first because more people live there" },
            { letter: "C", text: "roads in order of importance, leaving side streets for last" },
            { letter: "D", text: "only Snow Routes and never residential streets" }
          ],
          correct: "C"
        },
        {
          id: "suspended",
          sol: "10.RV.1.C",
          stem: "In sentence 8, the word suspended most nearly means —",
          choices: [
            { letter: "A", text: "stopped for a time" },
            { letter: "B", text: "hung from above" },
            { letter: "C", text: "made more frequent" },
            { letter: "D", text: "moved to a new place" }
          ],
          correct: "A"
        }
      ]
    },

    /* 12 · Argument · level 3 · bookstore */
    {
      id: "g10-ri-c68-bookfair",
      family: "G10",
      title: "Move the Book Fair Downtown",
      kind: "Argument · 10.RI",
      blurb: "A student editorial argues that the school book fair belongs in the local bookstore.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every spring, our school gym fills with folding tables of books shipped in from a national catalog company, and every spring the same thing happens: the posters and erasers sell out, and the novels go back in their boxes. " +
        N(2) + "This year, the parent association should try something different and hold the book fair at Wren Street Books, the independent store three blocks from campus. " +
        N(3) + "The first reason is selection. " +
        N(4) + "The catalog fair offers about two hundred titles chosen by a company that has never met our students, while Wren Street stocks more than eight thousand and will order anything a student requests. " +
        N(5) + "The second reason is expertise. " +
        N(6) + "Wren Street's booksellers read constantly, and last fall they helped the robotics team find six books on underwater drones in a single afternoon. " +
        N(7) + "Some parents worry that moving the fair would cost the school its reward, since the catalog company gives our library free books based on sales. " +
        N(8) + "That concern is fair, but Wren Street has offered to donate fifteen percent of fair sales to the library, an amount last year's catalog reward barely matched. " +
        N(9) + "Finally, a fair downtown teaches a habit, not just a purchase. " +
        N(10) + "A student who discovers a bookstore three blocks away has somewhere to go long after the tables are folded. " +
        N(11) + "The gym can host basketball. " +
        N(12) + "Books deserve a place where they never have to be put away." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence states the central claim of the editorial about the book fair?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "selection",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the author's point about selection?",
          choices: [
            { letter: "A", text: "The catalog company gives the library free books." },
            { letter: "B", text: "The posters and erasers always sell out first." },
            { letter: "C", text: "The bookstore is three blocks from campus." },
            { letter: "D", text: "The store stocks 8,000 titles to the fair's 200." }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "10.RI.2.C",
          stem: "In sentences 7 and 8, the author addresses the opposing view mainly to —",
          choices: [
            { letter: "A", text: "admit a real concern and show that it has been answered" },
            { letter: "B", text: "suggest that parents do not care about the library" },
            { letter: "C", text: "argue that the library no longer needs new books" },
            { letter: "D", text: "change the editorial's claim to a smaller request" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "The author organizes sentences 3 through 10 mainly by —",
          choices: [
            { letter: "A", text: "telling the story of last year's fair in time order" },
            { letter: "B", text: "comparing the bookstore with the school library" },
            { letter: "C", text: "presenting a series of reasons, each with support" },
            { letter: "D", text: "describing a problem and then several failed fixes" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "10.RI.2.B",
          stem: "The detail in sentence 1 that the posters sell out while the novels go back in their boxes mainly suggests that —",
          choices: [
            { letter: "A", text: "students at the school do not enjoy reading" },
            { letter: "B", text: "the gym is too small to hold a large fair" },
            { letter: "C", text: "the catalog company charges too much for posters" },
            { letter: "D", text: "the current fair fails at its main purpose" }
          ],
          correct: "D"
        },
        {
          id: "robotics",
          sol: "10.RI.1.C",
          stem: "The author includes the example about the robotics team in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show the booksellers' expertise in action" },
            { letter: "B", text: "suggest that the fair should sell robot kits" },
            { letter: "C", text: "prove that the robotics team won a contest" },
            { letter: "D", text: "explain why the gym is busy in the spring" }
          ],
          correct: "A"
        }
      ]
    },

    /* 13 · Vocabulary · level 2 · pottery */
    {
      id: "g10-rv-c68-porcelain",
      family: "G10",
      title: "The Porcelain Summer",
      kind: "Vocabulary · 10.RV",
      blurb: "A teenager learns the patience porcelain demands in her aunt's studio.",
      level: 2,
      passage:
        "<p>" + N(1) + "Porcelain is the most demanding clay a potter can choose, and Ana Ferreira learned that lesson in her aunt's studio the summer she turned sixteen. " +
        N(2) + "Fresh from the bag, porcelain is smooth and <strong>malleable</strong>, so soft that a careless thumb leaves a permanent dent. " +
        N(3) + "Once it dries, however, it becomes <strong>brittle</strong>; a bowl that bent easily on Monday could snap like a cracker by Thursday. " +
        N(4) + "Aunt Lucia worked with <strong>painstaking</strong> slowness, trimming each cup for nearly an hour and stopping often to hold it up to the window. " +
        N(5) + "She was checking the walls, which had to be thin enough that the finished cup would be <strong>translucent</strong>, letting light glow through it like a paper lantern. " +
        N(6) + "After the final firing, the cups would also be <strong>impervious</strong> to water, so no glaze was needed inside to keep tea from soaking in. " +
        N(7) + "Ana's first attempts cracked in the kiln, leaving only a gritty <strong>residue</strong> of white shards on the shelf. " +
        N(8) + "Her aunt swept the pieces into a bucket without a word of criticism. " +
        N(9) + "\"Porcelain remembers everything,\" Lucia said. " +
        N(10) + "\"Every rush, every bump, every shortcut shows up in the fire.\" " +
        N(11) + "By August, Ana had one cup that survived, slightly crooked but glowing at the window. " +
        N(12) + "She decided it was the best thing she had ever made." +
        "</p>",
      claims: [
        {
          id: "malleable",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentences 1 and 2 best helps the reader understand the word malleable?",
          choices: [
            { letter: "A", text: "the most demanding clay a potter can choose" },
            { letter: "B", text: "fresh from the bag, porcelain is smooth" },
            { letter: "C", text: "a careless thumb leaves a permanent dent" },
            { letter: "D", text: "Ana Ferreira learned that lesson" }
          ],
          correct: "C"
        },
        {
          id: "brittle",
          sol: "10.RV.1.B",
          stem: "Sentence 3 suggests that the word brittle means —",
          choices: [
            { letter: "A", text: "hard but easily broken" },
            { letter: "B", text: "soft and easily shaped" },
            { letter: "C", text: "heavy and difficult to lift" },
            { letter: "D", text: "rough and badly colored" }
          ],
          correct: "A"
        },
        {
          id: "impervious",
          sol: "10.RV.1.A",
          stem: "The word impervious in sentence 6 begins with the prefix im-, meaning not, as in impossible. Based on this and the context, impervious most nearly means —",
          choices: [
            { letter: "A", text: "easily stained by liquids" },
            { letter: "B", text: "partly hollow inside" },
            { letter: "C", text: "slightly damp to the touch" },
            { letter: "D", text: "not able to be passed through" }
          ],
          correct: "D"
        },
        {
          id: "painstaking",
          sol: "10.RV.1.D",
          stem: "The author chose painstaking rather than slow to describe Aunt Lucia's work in sentence 4. Compared with slow, painstaking suggests work that is —",
          choices: [
            { letter: "A", text: "lazy and unfocused" },
            { letter: "B", text: "careful and thorough" },
            { letter: "C", text: "painful and harmful" },
            { letter: "D", text: "rushed and nervous" }
          ],
          correct: "B"
        },
        {
          id: "residue",
          sol: "10.RV.1.B",
          stem: "In sentence 7, the word residue most nearly means —",
          choices: [
            { letter: "A", text: "a finished product" },
            { letter: "B", text: "a fresh batch of clay" },
            { letter: "C", text: "what is left behind" },
            { letter: "D", text: "a protective coating" }
          ],
          correct: "C"
        },
        {
          id: "remembers",
          sol: "10.RL.2.B",
          stem: "Lucia's saying in sentence 9, Porcelain remembers everything, suggests that —",
          choices: [
            { letter: "A", text: "Ana should write down each step in a notebook" },
            { letter: "B", text: "mistakes in the process show up in the finished piece" },
            { letter: "C", text: "porcelain cups can be reshaped after they are fired" },
            { letter: "D", text: "Lucia remembers her own first summer of pottery" }
          ],
          correct: "B"
        }
      ]
    },

    /* 14 · Paired texts · level 3 · snowstorm */
    {
      id: "g10-dsr-c68-blizzard",
      family: "G10",
      title: "The Storm of '56: Newsletter + Diary",
      kind: "Paired texts · 10.DSR",
      blurb: "A historical society article and a fourteen-year-old's diary describe the same blizzard.",
      level: 3,
      passage:
        "<p><strong>Text 1 — \"When Harrow Falls Stood Still,\" from the Harrow Falls Historical Society newsletter</strong></p>" +
        "<p>" + N(1) + "The blizzard that struck Harrow Falls on February 9, 1956, dropped thirty-one inches of snow in two days and closed the town for nearly a week. " +
        N(2) + "Drifts along Route 4 reached the height of a delivery truck, and the town's only plow broke down on the first afternoon. " +
        N(3) + "With the roads sealed, the general store rationed bread and milk, limiting each family to one loaf and one quart per day. " +
        N(4) + "Records from the town clerk show that volunteers on snowshoes delivered medicine to eleven homes. " +
        N(5) + "Historians often describe the storm as the moment the town realized it could not depend on a single plow, and a second one was approved at the next town meeting. " +
        N(6) + "No lives were lost, a fact the newsletter of that spring called \"a small miracle and a large amount of shoveling.\"</p>" +
        "<p><strong>Text 2 — From the diary of Ruth Ellery, age fourteen, February 1956</strong></p>" +
        "<p>" + N(7) + "Day three, and Father says the snow is up to the kitchen windowsill on the north side. " +
        N(8) + "We are allowed one loaf from Mr. Pruitt's store, so Mother cuts the slices thin enough to read through. " +
        N(9) + "This afternoon two men on snowshoes knocked on our door with medicine for Grandpa's cough, and Mother cried, which I have never seen her do. " +
        N(10) + "I don't think they were heroes exactly; they looked cold and tired and asked for coffee. " +
        N(11) + "My brother and I dug a tunnel to the woodshed so Father doesn't have to wade. " +
        N(12) + "I am writing by lamplight because the lines are down. " +
        N(13) + "If the snow keeps on, I will run out of pages before it runs out of sky." +
        "</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference in how the two texts present the blizzard?",
          choices: [
            { letter: "A", text: "Text 1 blames the town for the storm, while Text 2 blames the weather." },
            { letter: "B", text: "Text 1 sums up effects on the town; Text 2 shows one family living through it." },
            { letter: "C", text: "Text 1 is written during the storm, while Text 2 is written decades later." },
            { letter: "D", text: "Text 1 describes only the snowfall, while Text 2 describes only the cold." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "10.DSR.E",
          stem: "Select TWO sentences from Text 2 that give personal examples of events that Text 1 reports in general terms.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "heroes",
          sol: "10.DSR.E",
          stem: "Ruth's comment in sentence 10 adds which idea that Text 1 does not include?",
          choices: [
            { letter: "A", text: "The volunteers delivered medicine to eleven homes." },
            { letter: "B", text: "The town approved a second plow after the storm." },
            { letter: "C", text: "The store limited how much bread families could buy." },
            { letter: "D", text: "The volunteers were ordinary, tired people, not legends." }
          ],
          correct: "D"
        },
        {
          id: "interpret",
          sol: "10.RI.1.C",
          stem: "Which part of Text 1 is presented as an interpretation rather than a recorded fact?",
          choices: [
            { letter: "A", text: "dropped thirty-one inches of snow in two days" },
            { letter: "B", text: "volunteers on snowshoes delivered medicine to eleven homes" },
            { letter: "C", text: "the moment the town realized one plow was not enough" },
            { letter: "D", text: "limiting each family to one loaf and one quart per day" }
          ],
          correct: "C"
        },
        {
          id: "slices",
          sol: "10.RL.2.A",
          stem: "In sentence 8, the phrase slices thin enough to read through mainly emphasizes —",
          choices: [
            { letter: "A", text: "how carefully the family stretched its bread" },
            { letter: "B", text: "how much Ruth enjoys reading in the evening" },
            { letter: "C", text: "how poorly Mr. Pruitt's bread was baked" },
            { letter: "D", text: "how dark the house was without electricity" }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Both texts suggest that during the blizzard the people of Harrow Falls —",
          choices: [
            { letter: "A", text: "blamed the plow driver for the closed roads" },
            { letter: "B", text: "left town until the snow had melted" },
            { letter: "C", text: "ignored the store's limits on food" },
            { letter: "D", text: "shared hardship and helped one another" }
          ],
          correct: "D"
        }
      ]
    },

    /* 15 · Literary · level 3 · pottery */
    {
      id: "g10-rl-c68-mended",
      family: "G10",
      title: "The Gold Seams",
      kind: "Literary · 10.RL",
      blurb: "Soraya breaks her grandfather's first bowl, and he repairs it in a way she does not expect.",
      level: 3,
      passage:
        "<p>" + N(1) + "The bowl had sat on Grandpa Farid's windowsill for as long as Soraya could remember, a squat blue thing he had made in his first pottery class at sixty-two. " +
        N(2) + "She was reaching past it for the watering can when her sleeve caught the rim. " +
        N(3) + "The sound it made on the tile floor was small, almost polite, and the bowl split into three clean pieces. " +
        N(4) + "Soraya knelt and held the pieces together, as if she could convince them to forget what had happened. " +
        N(5) + "When her grandfather came in from the garden, she had already rehearsed an apology and an offer to buy him a new bowl at the craft fair. " +
        N(6) + "He listened to both, then took the pieces from her hands and turned them over in the light. " +
        N(7) + "\"A new bowl from the fair would not be mine,\" he said, \"and it would not be this one.\" " +
        N(8) + "That weekend he mixed a gold-colored resin in a paper cup and spread it along each broken edge with a toothpick, his reading glasses low on his nose. " +
        N(9) + "Soraya expected him to hide the cracks, but he did the opposite, letting the gold bulge slightly along every seam. " +
        N(10) + "When he finished, the bowl looked like a map of rivers. " +
        N(11) + "\"Now it has two stories,\" he said, setting it back on the windowsill, \"the day I made it, and the day you helped me make it again.\" " +
        N(12) + "Soraya had not helped at all, and she started to say so. " +
        N(13) + "Then she saw the way he was looking at the bowl and decided that, in a way, she had." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Grandpa Farid's repair of the bowl best develop?",
          choices: [
            { letter: "A", text: "Careless people should pay to replace what they break." },
            { letter: "B", text: "Handmade objects are always worth more than bought ones." },
            { letter: "C", text: "Damage can add meaning to an object instead of erasing it." },
            { letter: "D", text: "Older people find it hard to let go of their possessions." }
          ],
          correct: "C"
        },
        {
          id: "polite",
          sol: "10.RL.2.B",
          stem: "In sentence 3, describing the sound of the breaking bowl as small, almost polite mainly creates a mood of —",
          choices: [
            { letter: "A", text: "hushed, uneasy stillness" },
            { letter: "B", text: "loud and sudden panic" },
            { letter: "C", text: "playful amusement" },
            { letter: "D", text: "angry frustration" }
          ],
          correct: "A"
        },
        {
          id: "soraya",
          sol: "10.RL.1.C",
          stem: "Sentence 5 shows that, at first, Soraya —",
          choices: [
            { letter: "A", text: "hopes her grandfather will not notice the bowl is gone" },
            { letter: "B", text: "blames the watering can for the accident" },
            { letter: "C", text: "wants to learn how to make pottery herself" },
            { letter: "D", text: "expects to fix the accident by replacing the bowl" }
          ],
          correct: "D"
        },
        {
          id: "rivers",
          sol: "10.RL.2.A",
          stem: "In sentence 10, comparing the repaired bowl to a map of rivers suggests that the seams —",
          choices: [
            { letter: "A", text: "are still leaking water onto the windowsill" },
            { letter: "B", text: "have become a pattern worth looking at" },
            { letter: "C", text: "make the bowl look older than it really is" },
            { letter: "D", text: "show where Soraya should not touch the bowl" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Grandpa Farid's claim in sentence 11 that Soraya helped make the bowl again is ironic mainly because —",
          choices: [
            { letter: "A", text: "she broke the bowl and did none of the repairs" },
            { letter: "B", text: "he made the bowl in his very first pottery class" },
            { letter: "C", text: "the resin he used was not made of real gold" },
            { letter: "D", text: "the bowl goes back to the same windowsill" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with Soraya's decision in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "suggest that she still feels guilty about the bowl" },
            { letter: "B", text: "hint that she plans to take a pottery class" },
            { letter: "C", text: "show that her grandfather has forgotten the accident" },
            { letter: "D", text: "show that she comes to share her grandfather's view" }
          ],
          correct: "D"
        }
      ]
    },

    /* 16 · Poetry · level 3 · bookstore */
    {
      id: "g10-rl-c68-closingtime",
      family: "G10",
      title: "Closing Time at the Secondhand Shop",
      kind: "Poetry · 10.RL",
      blurb: "A clerk reshelves stray books and thinks about the readers who came before.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "After the last customer, the shop exhales.<br>" +
        L(2) + "Dust settles on the poetry as if it has paid rent here for years.<br>" +
        L(3) + "I walk the aisles with a cart of strays,<br>" +
        L(4) + "a cookbook left in Science, a mystery hiding in Maps,<br>" +
        L(5) + "and return each one to the place it was promised.<br>" +
        L(6) + "Someone underlined a sentence in this novel long ago,<br>" +
        L(7) + "pressed so hard the pencil nearly tore the page.<br>" +
        L(8) + "I will never know what that sentence did to them.<br>" +
        L(9) + "I only know it mattered enough to mark.<br>" +
        L(10) + "Every book here has been loved once and then let go,<br>" +
        L(11) + "which sounds like sadness until you remember<br>" +
        L(12) + "that letting go is how the next reader finds it.<br>" +
        L(13) + "I switch off the lamps one row at a time.<br>" +
        L(14) + "The shelves keep all their secrets in the dark<br>" +
        L(15) + "and wait, the way good listeners do, for morning." +
        "</p>",
      claims: [
        {
          id: "exhales",
          sol: "10.RL.2.A",
          stem: "In line 1, the image of the shop exhaling mainly suggests that —",
          choices: [
            { letter: "A", text: "the air in the shop is dusty and stale" },
            { letter: "B", text: "the store relaxes once the busy day is over" },
            { letter: "C", text: "the speaker is tired of working in the shop" },
            { letter: "D", text: "the last customer left the door standing open" }
          ],
          correct: "B"
        },
        {
          id: "speaker",
          sol: "10.RL.1.C",
          stem: "Lines 6–9 characterize the speaker as someone who —",
          choices: [
            { letter: "A", text: "is annoyed when customers write in books" },
            { letter: "B", text: "wants to find the person who marked the page" },
            { letter: "C", text: "prefers new books to secondhand ones" },
            { letter: "D", text: "wonders about past readers and respects their marks" }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "10.RL.3.A",
          stem: "How do lines 11 and 12 function in \"Closing Time at the Secondhand Shop\"?",
          choices: [
            { letter: "A", text: "They turn an idea that seems sad into a hopeful one." },
            { letter: "B", text: "They describe the speaker's routine for closing up." },
            { letter: "C", text: "They explain where the misplaced books belong." },
            { letter: "D", text: "They introduce a new character into the poem." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"Closing Time at the Secondhand Shop\"?",
          choices: [
            { letter: "A", text: "Bookstores should not sell books that are marked." },
            { letter: "B", text: "Working alone at night can be frightening." },
            { letter: "C", text: "Books gain value as they pass from reader to reader." },
            { letter: "D", text: "Most readers forget a book soon after finishing it." }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The images in lines 13–15 mainly create a mood that is —",
          choices: [
            { letter: "A", text: "gloomy and threatening" },
            { letter: "B", text: "calm and expectant" },
            { letter: "C", text: "busy and cheerful" },
            { letter: "D", text: "bitter and lonely" }
          ],
          correct: "B"
        },
        {
          id: "rent",
          sol: "10.RL.2.C",
          stem: "The tone of line 2, in which the dust seems to have paid rent, is best described as —",
          choices: [
            { letter: "A", text: "gently humorous" },
            { letter: "B", text: "sharply critical" },
            { letter: "C", text: "deeply sorrowful" },
            { letter: "D", text: "coldly formal" }
          ],
          correct: "A"
        }
      ]
    },

    /* 17 · Informational · level 1 · snowstorm */
    {
      id: "g10-ri-c68-lakeeffect",
      family: "G10",
      title: "Snow from the Lake",
      kind: "Informational · 10.RI",
      blurb: "How a warm lake and an arctic wind can bury one town and spare the next.",
      level: 1,
      passage:
        "<p>" + N(1) + "Some of the heaviest snowfalls in the country come from storms that barely show up on a weather map until they are already overhead. " +
        N(2) + "These storms are called lake-effect snow, and they form when very cold air passes over a large, warmer body of water. " +
        N(3) + "In late fall and early winter, lakes still hold much of the heat they gathered all summer. " +
        N(4) + "When a blast of arctic air moves across the open water, the lake warms and moistens the lowest layer of that air. " +
        N(5) + "The warm, damp air rises, cools, and forms clouds that can drop snow at a rate of several inches an hour. " +
        N(6) + "Because these clouds often line up in narrow bands, one town may be buried under three feet of snow while another just ten miles away sees only flurries. " +
        N(7) + "The longer the stretch of water the wind crosses, the more moisture the air can collect, so wind direction matters a great deal. " +
        N(8) + "Forecasters call that distance the fetch. " +
        N(9) + "Lake-effect season usually ends once the lake cools or freezes over, since ice cuts off the supply of heat and moisture. " +
        N(10) + "For people who live downwind of large lakes, winter can be hard to predict. " +
        N(11) + "Many of them keep a shovel by the front door from November until the lake turns solid." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Snow from the Lake\"?",
          choices: [
            { letter: "A", text: "Cold air gains moisture over a warm lake and drops heavy, local snow." },
            { letter: "B", text: "Forecasters use the word fetch to describe the width of a lake." },
            { letter: "C", text: "People who live near lakes should keep shovels by their doors." },
            { letter: "D", text: "Lakes freeze over earlier each year because of arctic winds." }
          ],
          correct: "A"
        },
        {
          id: "steps",
          sol: "10.RI.2.A",
          stem: "Sentences 3–5 mainly explain —",
          choices: [
            { letter: "A", text: "why lake-effect storms are rare in the spring" },
            { letter: "B", text: "how forecasters measure snow in narrow bands" },
            { letter: "C", text: "the steps by which lake-effect clouds form" },
            { letter: "D", text: "a comparison of two different large lakes" }
          ],
          correct: "C"
        },
        {
          id: "bands",
          sol: "10.RI.1.B",
          stem: "According to the passage, why can one town get heavy snow while a town ten miles away gets little?",
          choices: [
            { letter: "A", text: "The second town is closer to the frozen lake." },
            { letter: "B", text: "Arctic air stops moving once it reaches land." },
            { letter: "C", text: "The first town is higher above the water." },
            { letter: "D", text: "The snow clouds often form in narrow bands." }
          ],
          correct: "D"
        },
        {
          id: "fetch",
          sol: "10.RV.1.B",
          stem: "Based on sentences 7 and 8, the term fetch refers to —",
          choices: [
            { letter: "A", text: "the speed of the wind over land" },
            { letter: "B", text: "the distance wind travels over water" },
            { letter: "C", text: "the depth of the water in a lake" },
            { letter: "D", text: "the amount of snow in one hour" }
          ],
          correct: "B"
        },
        {
          id: "ends",
          sol: "10.RI.1.B",
          stem: "According to the passage, what usually brings lake-effect season to an end?",
          choices: [
            { letter: "A", text: "Winds begin blowing from a new direction." },
            { letter: "B", text: "The arctic air grows warmer than the lake." },
            { letter: "C", text: "The lake cools or freezes over." },
            { letter: "D", text: "Forecasters issue fewer warnings." }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "10.RI.2.B",
          stem: "In sentence 1, the author says the storms barely show up on a weather map until they are overhead mainly to emphasize that they —",
          choices: [
            { letter: "A", text: "are usually smaller than forecasters claim" },
            { letter: "B", text: "cause less damage than other storms" },
            { letter: "C", text: "are easy to see from a long distance" },
            { letter: "D", text: "develop suddenly and in small areas" }
          ],
          correct: "D"
        }
      ]
    },

    /* 18 · Vocabulary · level 3 · bookstore */
    {
      id: "g10-rv-c68-lanternroom",
      family: "G10",
      title: "The Lantern Room",
      kind: "Vocabulary · 10.RV",
      blurb: "An unusual bookstore, its odd shelving, and a shy clerk who finds her voice.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Lantern Room is not a bookstore for people in a hurry. " +
        N(2) + "Its owner, Bashir Nouri, arranges the stock in an <strong>eclectic</strong> mix that places beekeeping manuals beside sea-captain memoirs and poetry next to car repair. " +
        N(3) + "Customers who arrive looking for one title usually <strong>meander</strong> for an hour, drifting from shelf to shelf with no particular route. " +
        N(4) + "Nouri insists that the disorder is deliberate. " +
        N(5) + "He hopes to <strong>cultivate</strong> curiosity the way a gardener tends seedlings, giving it room and time rather than forcing it. " +
        N(6) + "His shelving system is admittedly <strong>idiosyncratic</strong>: books are grouped by what he calls \"the mood of a rainy afternoon,\" a category no one else would recognize. " +
        N(7) + "Regular visitors have grown <strong>discerning</strong>, able to tell within seconds whether a newcomer wants help or wants to be left alone. " +
        N(8) + "The teenage clerk, Odette, was <strong>reticent</strong> when she first started, answering questions with a single word and avoiding the register when it was busy. " +
        N(9) + "Now she runs the Thursday reading circle and argues cheerfully about endings with retirees three times her age. " +
        N(10) + "Nouri takes no credit for the change. " +
        N(11) + "\"I didn't teach her anything,\" he says. " +
        N(12) + "\"I just gave her a shelf of her own and waited.\"" +
        "</p>",
      claims: [
        {
          id: "eclectic",
          sol: "10.RV.1.C",
          stem: "Which detail from sentences 1 and 2 best helps the reader understand the word eclectic?",
          choices: [
            { letter: "A", text: "Its owner, Bashir Nouri, arranges the stock" },
            { letter: "B", text: "beekeeping manuals beside sea-captain memoirs" },
            { letter: "C", text: "not a bookstore for people in a hurry" },
            { letter: "D", text: "arranges the stock in a mix" }
          ],
          correct: "B"
        },
        {
          id: "meander",
          sol: "10.RV.1.B",
          stem: "In sentence 3, the word meander most nearly means —",
          choices: [
            { letter: "A", text: "search with great urgency" },
            { letter: "B", text: "leave without buying anything" },
            { letter: "C", text: "complain to the owner" },
            { letter: "D", text: "wander without a set path" }
          ],
          correct: "D"
        },
        {
          id: "reticent",
          sol: "10.RV.1.D",
          stem: "The author chose reticent rather than rude to describe Odette in sentence 8. Compared with rude, reticent suggests that she was —",
          choices: [
            { letter: "A", text: "quiet and reserved, not unkind" },
            { letter: "B", text: "lazy and unwilling to work" },
            { letter: "C", text: "angry at the store's customers" },
            { letter: "D", text: "confused by the shelving system" }
          ],
          correct: "A"
        },
        {
          id: "cultivate",
          sol: "10.RV.1.B",
          stem: "Based on the comparison in sentence 5, to cultivate curiosity is to —",
          choices: [
            { letter: "A", text: "measure it carefully" },
            { letter: "B", text: "hide it from others" },
            { letter: "C", text: "help it grow over time" },
            { letter: "D", text: "replace it with facts" }
          ],
          correct: "C"
        },
        {
          id: "idio",
          sol: "10.RV.1.A",
          stem: "The word idiosyncratic begins with idio-, a Greek word part meaning one's own, as in idiom. Based on this and sentence 6, idiosyncratic most nearly means —",
          choices: [
            { letter: "A", text: "carefully alphabetical" },
            { letter: "B", text: "peculiar to one person" },
            { letter: "C", text: "copied from another store" },
            { letter: "D", text: "simple for anyone to learn" }
          ],
          correct: "B"
        },
        {
          id: "odette",
          sol: "10.RL.1.C",
          stem: "Taken together, sentences 8 and 9 show that Odette has —",
          choices: [
            { letter: "A", text: "grown from shy to confident" },
            { letter: "B", text: "become the store's new owner" },
            { letter: "C", text: "stopped enjoying her job" },
            { letter: "D", text: "learned to avoid busy times" }
          ],
          correct: "A"
        }
      ]
    },

    /* 19 · Paired texts · level 1 · theme park */
    {
      id: "g10-dsr-c68-heatrules",
      family: "G10",
      title: "Heat Rules: Memo + Group Chat",
      kind: "Paired texts · 10.DSR",
      blurb: "A park's new heat policy, and a ride operator's report on how day one went.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Memo from Operations, Cascade Point Park</strong></p>" +
        "<p>" + N(1) + "Starting June 1, all outdoor team members will receive a ten-minute shaded break every hour when the temperature is above 90 degrees. " +
        N(2) + "Supervisors will rotate staff so that no ride or food stand has to close during breaks. " +
        N(3) + "Cold water stations have been added behind the Log Flume, behind the Carousel, and at the main gate. " +
        N(4) + "Costumed characters will now appear for no more than twenty minutes at a time, down from forty-five. " +
        N(5) + "Team members who feel dizzy, confused, or unusually tired should tell a supervisor at once and will not be penalized for leaving a post. " +
        N(6) + "Last summer, eight employees were treated for heat illness. " +
        N(7) + "Our goal this summer is zero.</p>" +
        "<p><strong>Text 2 — Message from ride operator Lani Akana to her team's group chat</strong></p>" +
        "<p>" + N(8) + "Day one of the new heat rules, and I have to admit I was skeptical. " +
        N(9) + "I figured the breaks would mean longer lines and angrier guests. " +
        N(10) + "Instead, the rotation worked, and nobody at the Flume even noticed when I stepped away. " +
        N(11) + "The water station behind the Carousel already has a line of its own, mostly of us. " +
        N(12) + "Biggest change: Marisol, who plays the park's otter mascot, came out of the costume smiling instead of gray in the face. " +
        N(13) + "Last July she fainted behind the stage, and I helped carry her to first aid. " +
        N(14) + "Twenty minutes in that suit is plenty." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          stem: "Both texts suggest that the new heat rules —",
          choices: [
            { letter: "A", text: "make guests wait in much longer lines" },
            { letter: "B", text: "apply only to costumed characters" },
            { letter: "C", text: "protect workers without closing rides" },
            { letter: "D", text: "were suggested by the ride operators" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The memo and the group chat message differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "announces the rules, while Text 2 reports how they worked" },
            { letter: "B", text: "criticizes the rules, while Text 2 defends them" },
            { letter: "C", text: "is meant for guests, while Text 2 is meant for managers" },
            { letter: "D", text: "describes last summer, while Text 2 predicts next summer" }
          ],
          correct: "A"
        },
        {
          id: "example",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 2 gives a personal example of the problem described in sentence 6 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "D"
        },
        {
          id: "marisol",
          sol: "10.DSR.E",
          stem: "Based on both texts, why does Marisol look healthier after her turn as the mascot?",
          choices: [
            { letter: "A", text: "The water station is now right beside the stage." },
            { letter: "B", text: "Costume shifts were cut from forty-five minutes to twenty." },
            { letter: "C", text: "The temperature stayed below 90 degrees on day one." },
            { letter: "D", text: "Lani carried her to first aid before she fainted." }
          ],
          correct: "B"
        },
        {
          id: "penalty",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 1 shows that workers will not be punished for protecting their health?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of Lani's message is best described as —",
          choices: [
            { letter: "A", text: "angry and complaining" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "formal and official" },
            { letter: "D", text: "pleasantly surprised" }
          ],
          correct: "D"
        }
      ]
    },

    /* 20 · Literary · level 2 · theme park */
    {
      id: "g10-rl-c68-rascal",
      family: "G10",
      title: "Rascal Never Speaks",
      kind: "Literary · 10.RL",
      blurb: "A mascot who is not allowed to talk finds another way to help a lost child.",
      level: 2,
      passage:
        "<p>" + N(1) + "The first rule of being Rascal the Raccoon was that Rascal never spoke. " +
        N(2) + "Wen Zhao had memorized it in training along with the other rules: no removing the head in public, no running, and never more than twenty minutes in the sun. " +
        N(3) + "On his third day, outside the bumper cars, he spotted a girl of about five standing perfectly still while the crowd flowed around her like water around a stone. " +
        N(4) + "Her face was the kind of red that comes just before tears. " +
        N(5) + "Wen's handler, Bea, was ten yards away signing autographs and had not seen her. " +
        N(6) + "He could not shout, so he knelt down slowly, which in a seven-foot raccoon suit felt like lowering a sofa. " +
        N(7) + "The girl stared at him, and the tears paused. " +
        N(8) + "Wen pointed at her, then pressed his giant paws together and tilted his head, the way the costume trainers had taught him to mime a question. " +
        N(9) + "She nodded. " +
        N(10) + "He held out a paw, walked her to Bea, and stood beside them, waving at passing children as if nothing unusual were happening, while Bea radioed Guest Services. " +
        N(11) + "Twelve minutes later, a frantic father came jogging around the carousel. " +
        N(12) + "The girl ran to him, then turned back and threw her arms around Rascal's furry knee. " +
        N(13) + "Inside the hot, dark head, Wen was grinning so hard his cheeks hurt, and no one in the world could see it." +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of \"Rascal Never Speaks\" is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Wen's wish to help the girl and the rule that Rascal cannot speak" },
            { letter: "B", text: "Wen and his handler, who disagree about the costume rules" },
            { letter: "C", text: "the girl and her father, who wants to leave the park early" },
            { letter: "D", text: "Wen's fear of crowds and his need to keep his new job" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 3 and 4 mainly create a mood of —",
          choices: [
            { letter: "A", text: "carefree fun at the bumper cars" },
            { letter: "B", text: "angry impatience among the crowd" },
            { letter: "C", text: "quiet alarm amid a busy crowd" },
            { letter: "D", text: "sleepy calm late in the day" }
          ],
          correct: "C"
        },
        {
          id: "sofa",
          sol: "10.RL.2.C",
          stem: "The phrase felt like lowering a sofa in sentence 6 gives the moment a tone that is —",
          choices: [
            { letter: "A", text: "bitter and harsh" },
            { letter: "B", text: "solemn and grave" },
            { letter: "C", text: "tense and frightening" },
            { letter: "D", text: "gently comic" }
          ],
          correct: "D"
        },
        {
          id: "wen",
          sol: "10.RL.1.C",
          stem: "Sentences 8 and 10 characterize Wen as —",
          choices: [
            { letter: "A", text: "careless about the park's rules" },
            { letter: "B", text: "resourceful and calm" },
            { letter: "C", text: "eager for praise from Bea" },
            { letter: "D", text: "nervous around small children" }
          ],
          correct: "B"
        },
        {
          id: "grin",
          sol: "10.RL.3.A",
          stem: "The author ends with the detail that no one could see Wen's grin (sentence 13) mainly to —",
          choices: [
            { letter: "A", text: "suggest that Wen is unhappy in the costume" },
            { letter: "B", text: "warn that the suit is dangerously hot inside" },
            { letter: "C", text: "stress that his reward is private and unseen" },
            { letter: "D", text: "hint that Wen will soon break the rules" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by Wen's experience as Rascal?",
          choices: [
            { letter: "A", text: "Rules matter more than people's feelings." },
            { letter: "B", text: "Children should never wander from parents." },
            { letter: "C", text: "Costumes allow people to hide their fears." },
            { letter: "D", text: "Kindness can find a way within strict limits." }
          ],
          correct: "D"
        }
      ]
    },

    /* 21 · Informational · level 1 · pottery */
    {
      id: "g10-ri-c68-woodkiln",
      family: "G10",
      title: "Three Days of Fire",
      kind: "Informational · 10.RI",
      blurb: "A hill town's shared wood-fired kiln takes forty potters, three days and a lot of logs.",
      level: 1,
      passage:
        "<p>" + N(1) + "Once a year, about forty potters in the hill town of Stony Creek load their work into a brick kiln the length of a school bus and light a fire that will burn for three days. " +
        N(2) + "The kiln is wood-fired, which means no switch controls its heat. " +
        N(3) + "Instead, volunteers must feed split logs into its firebox every few minutes, day and night, to push the temperature past 2,300 degrees. " +
        N(4) + "The work is divided into six-hour shifts, and each shift needs at least three people: one to stoke, one to watch the temperature gauges, and one to rest. " +
        N(5) + "Wood firing produces effects that electric kilns cannot. " +
        N(6) + "As the logs burn, ash floats through the kiln and lands on the pots, where it melts into a natural glaze. " +
        N(7) + "Pots near the firebox may come out glossy green and brown, while those in the back may stay pale and rough. " +
        N(8) + "No two pieces look the same, even if the potter made them identical. " +
        N(9) + "The kiln was built in 1998 by a retired art teacher and a group of students, and it has been fired every autumn since. " +
        N(10) + "Loading takes a full day, and so does cooling, which means the potters wait nearly a week to see their work. " +
        N(11) + "Members say the waiting is part of the appeal. " +
        N(12) + "By the time the bricks are cool enough to touch, the potters have shared dozens of meals and hundreds of logs, and the kiln has become as much about the town as about the pots." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes \"Three Days of Fire\"?",
          choices: [
            { letter: "A", text: "Electric kilns are easier to use than wood-fired kilns." },
            { letter: "B", text: "A retired teacher and students built a brick kiln in 1998." },
            { letter: "C", text: "Ash from burning logs gives pots a green and brown glaze." },
            { letter: "D", text: "A shared wood-fired kiln takes teamwork and unites a town." }
          ],
          correct: "D"
        },
        {
          id: "ash",
          sol: "10.RI.1.B",
          stem: "According to the passage, what creates the natural glaze on wood-fired pots?",
          choices: [
            { letter: "A", text: "ash from the burning logs melting onto them" },
            { letter: "B", text: "liquid glaze brushed on before the firing" },
            { letter: "C", text: "smoke trapped in the kiln during cooling" },
            { letter: "D", text: "minerals mixed into the clay ahead of time" }
          ],
          correct: "A"
        },
        {
          id: "causeeffect",
          sol: "10.RI.2.A",
          stem: "Sentences 5–8 are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of rules for the volunteers" },
            { letter: "B", text: "a cause followed by its effects" },
            { letter: "C", text: "a history told in time order" },
            { letter: "D", text: "a problem followed by a solution" }
          ],
          correct: "B"
        },
        {
          id: "stoke",
          sol: "10.RV.1.C",
          stem: "Sentence 3 helps explain that to stoke a fire, as in sentence 4, means to —",
          choices: [
            { letter: "A", text: "put it out safely at night" },
            { letter: "B", text: "measure how hot it is" },
            { letter: "C", text: "add fuel to keep it burning" },
            { letter: "D", text: "move it to a new place" }
          ],
          correct: "C"
        },
        {
          id: "noswitch",
          sol: "10.RI.2.B",
          stem: "The author points out in sentence 2 that no switch controls the kiln's heat mainly to emphasize that —",
          choices: [
            { letter: "A", text: "keeping the fire hot depends on human effort" },
            { letter: "B", text: "the kiln is broken and needs to be repaired" },
            { letter: "C", text: "electric kilns are more dangerous to use" },
            { letter: "D", text: "the town cannot afford modern equipment" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone in sentence 12 is best described as —",
          choices: [
            { letter: "A", text: "doubtful and critical" },
            { letter: "B", text: "warm and appreciative" },
            { letter: "C", text: "hurried and anxious" },
            { letter: "D", text: "flat and technical" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
