/* SOL Labyrinth — v5.15 expansion: Grade 10, medium tier (21 packs, 6 questions each).
 * Topics: a debate team; clock and watch repair; sea turtles; a city bus route.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 ───────────── Literary · level 1 ───────────── */
    {
      id: "g10-rl-c67-indexcard",
      family: "G10",
      title: "The Card in the Left Pocket",
      kind: "Literary · 10.RL",
      blurb: "A sophomore debater reaches for his rebuttal card and finds nothing there.",
      level: 1,
      passage:
        "<p>" + N(1) + "Tomasz Wierzbicki had written his rebuttal on a single index card, and for three days he had carried it in the left pocket of his blazer like a lucky coin. " +
        N(2) + "At the regional tournament, the team from Eastbrook argued that the city should replace its school buses with free passes for public transit. " +
        N(3) + "Tomasz listened, nodding, and reached for the card when his turn came. " +
        N(4) + "The pocket was empty. " +
        N(5) + "For a moment the classroom seemed to tilt, and the judge's pen hovered over her notepad like a bird deciding where to land. " +
        N(6) + "Then Tomasz remembered something his coach, Ms. Adeyemi, said at every practice: \"The card is only a copy of what you already know.\" " +
        N(7) + "He took a breath and glanced at his partner, Rosa, whose own notes were covered in arrows. " +
        N(8) + "\"Eastbrook says passes would save money,\" he began, more slowly than he had planned. " +
        N(9) + "\"But they never told us who rides the early buses, before the public routes have even started.\" " +
        N(10) + "He spoke about his little sister, who caught her bus at 6:40, and about the shift workers who filled the first city bus at 7:15. " +
        N(11) + "When he sat down, Rosa slid a sheet of paper toward him. " +
        N(12) + "She had written, \"Better than the card.\" " +
        N(13) + "After the round, Tomasz found the index card on the hallway floor, slightly bent. " +
        N(14) + "He read it once, smiled, and put it back in his pocket anyway." +
        "</p>",
      claims: [
        {
          id: "character",
          sol: "10.RL.1.C",
          stem: "Sentence 1 characterizes Tomasz as someone who —",
          choices: [
            { letter: "A", text: "prefers to speak without any written notes" },
            { letter: "B", text: "relies on careful preparation to feel secure" },
            { letter: "C", text: "doubts that his partner has done the research" },
            { letter: "D", text: "treats the tournament as a casual game" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Tomasz's round?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Tomasz's experience at the tournament best support?",
          choices: [
            { letter: "A", text: "Real understanding matters more than the notes that record it." },
            { letter: "B", text: "A good partner will always cover for a teammate's mistakes." },
            { letter: "C", text: "Lucky objects give people the confidence they need to win." },
            { letter: "D", text: "Arguments about money are stronger than personal stories." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "10.RL.2.A",
          stem: "In sentence 5, comparing the judge's pen to a bird deciding where to land mainly suggests that the judge is —",
          choices: [
            { letter: "A", text: "bored by the round and ready to leave" },
            { letter: "B", text: "writing down every word Tomasz says" },
            { letter: "C", text: "annoyed that Tomasz is wasting time" },
            { letter: "D", text: "waiting to see what Tomasz will do" }
          ],
          correct: "D"
        },
        {
          id: "hovered",
          sol: "10.RV.1.B",
          stem: "In sentence 5, the word hovered most nearly means —",
          choices: [
            { letter: "A", text: "stayed in the air without moving on" },
            { letter: "B", text: "dropped suddenly toward the paper" },
            { letter: "C", text: "scratched loudly across a page" },
            { letter: "D", text: "shook from nervous excitement" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The story ends with Tomasz putting the bent card back in his pocket (sentence 14) mainly to —",
          choices: [
            { letter: "A", text: "suggest that he plans to read from it in the next round" },
            { letter: "B", text: "reveal that he regrets not using Rosa's notes instead" },
            { letter: "C", text: "hint that he has already forgotten his coach's advice" },
            { letter: "D", text: "show that he still values the card but no longer needs it" }
          ],
          correct: "D"
        }
      ]
    },

    /* 2 ───────────── Informational · level 2 ───────────── */
    {
      id: "g10-ri-c67-warmsand",
      family: "G10",
      title: "Warm Sand, Cool Sand",
      kind: "Informational · 10.RI",
      blurb: "Why the temperature of a beach helps decide whether sea turtle hatchlings are male or female.",
      level: 2,
      passage:
        "<p>" + N(1) + "For most animals, whether a baby is male or female is settled the moment its life begins. " +
        N(2) + "For sea turtles, the answer is written partly in the sand. " +
        N(3) + "A loggerhead mother crawls ashore at night, digs a flask-shaped hole with her back flippers, and lays about a hundred eggs before covering them and returning to the sea. " +
        N(4) + "She never comes back to check on them. " +
        N(5) + "For the next two months, the temperature of the sand around the nest helps decide what the hatchlings will become. " +
        N(6) + "Eggs kept cooler than about 29 degrees Celsius tend to produce males, while warmer nests tend to produce females. " +
        N(7) + "Within a narrow middle range, a single nest may hold both. " +
        N(8) + "This system has worked for millions of years, but it leaves turtles sensitive to heat. " +
        N(9) + "On some warm beaches, researchers sampling hatchlings have found that nearly all of them are female. " +
        N(10) + "Scientists at the Palmetto Reef Field Lab are testing simple ways to cool nests, such as shading them with palm fronds or sprinkling them with water during heat waves. " +
        N(11) + "Early results are encouraging: shaded nests ran about one degree cooler and still hatched well. " +
        N(12) + "Still, the lab's director cautions that shading every nest on a long coastline is not realistic. " +
        N(13) + "\"We're buying time,\" she says, \"while we learn which beaches will stay cool enough on their own.\" " +
        N(14) + "For now, each nest remains a small experiment in how a changing climate reaches even creatures that spend nearly their whole lives at sea." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Warm Sand, Cool Sand\"?",
          choices: [
            { letter: "A", text: "Loggerhead mothers abandon their nests soon after laying their eggs." },
            { letter: "B", text: "Palm fronds are the most effective tool for protecting turtle nests." },
            { letter: "C", text: "Sand temperature helps set hatchlings' sex, so rising heat is a concern." },
            { letter: "D", text: "Sea turtles spend nearly all of their lives far out in the open ocean." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence provides evidence that warm beaches may already be affecting turtle populations?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How are sentences 5 through 7 organized?",
          choices: [
            { letter: "A", text: "They explain how different temperatures lead to different results." },
            { letter: "B", text: "They compare loggerheads with other kinds of sea turtles." },
            { letter: "C", text: "They list the steps a mother turtle follows to build a nest." },
            { letter: "D", text: "They present a problem and then argue for one solution." }
          ],
          correct: "A"
        },
        {
          id: "quote",
          sol: "10.RI.2.B",
          stem: "The director's remark in sentence 13 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the lab has already solved the problem of overheated nests" },
            { letter: "B", text: "shading is a short-term measure while research continues" },
            { letter: "C", text: "volunteers should shade every nest along the whole coast" },
            { letter: "D", text: "cool beaches will soon disappear from the turtles' range" }
          ],
          correct: "B"
        },
        {
          id: "encouraging",
          sol: "10.RV.1.C",
          stem: "In sentence 11, the word encouraging most nearly means —",
          choices: [
            { letter: "A", text: "demanding more effort" },
            { letter: "B", text: "difficult to measure" },
            { letter: "C", text: "surprising to experts" },
            { letter: "D", text: "giving reason for hope" }
          ],
          correct: "D"
        },
        {
          id: "result",
          sol: "10.RI.1.C",
          stem: "Which statement from the passage is a reported result rather than a caution or a hope?",
          choices: [
            { letter: "A", text: "Shaded nests ran about one degree cooler and still hatched well." },
            { letter: "B", text: "Shading every nest on a long coastline is not realistic." },
            { letter: "C", text: "We're buying time while we learn which beaches will stay cool." },
            { letter: "D", text: "Each nest remains a small experiment in how the climate changes." }
          ],
          correct: "A"
        }
      ]
    },

    /* 3 ───────────── Vocabulary · level 2 ───────────── */
    {
      id: "g10-rv-c67-mercerstreet",
      family: "G10",
      title: "Hands on Mercer Street",
      kind: "Vocabulary · 10.RV",
      blurb: "A quiet clock repairer brings a great-aunt's mantel clock back to life.",
      level: 2,
      passage:
        "<p>" + N(1) + "The repair shop on Mercer Street is barely wider than a hallway, and every surface ticks. " +
        N(2) + "Mr. Halvorsen, who has fixed clocks there for thirty-one years, is a <strong>reticent</strong> man; customers often finish explaining their problem before he has said a single word. " +
        N(3) + "His silence is not unfriendly, though, because his attention is fully on the object in front of him. " +
        N(4) + "When Lena Moreau brought in her great-aunt's mantel clock, which had stopped in 1998, Mr. Halvorsen began to <strong>dismantle</strong> it at once, laying each screw and wheel on a white cloth in the exact order it came out. " +
        N(5) + "He was <strong>meticulous</strong> about this; he labeled even the tiniest pins, because one lost piece could mean weeks of searching for a replacement. " +
        N(6) + "Inside the case, the movement was more <strong>intricate</strong> than Lena expected, a crowded city of brass gears no larger than buttons, each one turning the next. " +
        N(7) + "The company that built the clock had closed its factory decades ago, so no new parts existed. " +
        N(8) + "Mr. Halvorsen did not seem worried. " +
        N(9) + "He opened a drawer full of broken clocks bought at estate sales and began to <strong>salvage</strong> a spring that would fit, rescuing it from a clock that would never run again. " +
        N(10) + "On the wall above his bench hung a ship's <strong>chronometer</strong>, an instrument once used to keep exact time at sea. " +
        N(11) + "\"Sailors trusted their lives to that,\" he said, the longest sentence Lena heard from him all afternoon. " +
        N(12) + "Two weeks later, the mantel clock struck four as she carried it through her front door." +
        "</p>",
      claims: [
        {
          id: "reticent",
          sol: "10.RV.1.D",
          stem: "Sentences 2 and 3 describe Mr. Halvorsen as reticent. Compared with a word like cold, reticent suggests that he —",
          choices: [
            { letter: "A", text: "holds back his words but is not unkind" },
            { letter: "B", text: "dislikes the customers who visit his shop" },
            { letter: "C", text: "is too tired to answer people's questions" },
            { letter: "D", text: "wants customers to feel unwelcome" }
          ],
          correct: "A"
        },
        {
          id: "dismantle",
          sol: "10.RV.1.A",
          stem: "The word dismantle in sentence 4 begins with the prefix dis-, as in disconnect and disassemble. Based on this, dismantle most nearly means —",
          choices: [
            { letter: "A", text: "clean every part thoroughly" },
            { letter: "B", text: "wind the spring up tightly" },
            { letter: "C", text: "inspect it very quickly" },
            { letter: "D", text: "take apart piece by piece" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          stem: "In sentence 5, meticulous most nearly means —",
          choices: [
            { letter: "A", text: "anxious about failing" },
            { letter: "B", text: "extremely careful about details" },
            { letter: "C", text: "slow because of old age" },
            { letter: "D", text: "proud of a skill" }
          ],
          correct: "B"
        },
        {
          id: "intricate",
          sol: "10.RV.1.C",
          stem: "Which phrase from the passage best helps the reader understand the meaning of intricate?",
          choices: [
            { letter: "A", text: "barely wider than a hallway" },
            { letter: "B", text: "in the exact order it came out" },
            { letter: "C", text: "a crowded city of brass gears" },
            { letter: "D", text: "bought at estate sales" }
          ],
          correct: "C"
        },
        {
          id: "salvage",
          sol: "10.RV.1.B",
          stem: "In sentence 9, to salvage a spring is to —",
          choices: [
            { letter: "A", text: "buy it new from a supplier" },
            { letter: "B", text: "bend it into a new shape" },
            { letter: "C", text: "polish it until it shines" },
            { letter: "D", text: "save it from something ruined" }
          ],
          correct: "D"
        },
        {
          id: "chronometer",
          sol: "10.RV.1.A",
          stem: "The word chronometer in sentence 10 contains the root chron-, as in chronological and chronicle. The root chron- most nearly refers to —",
          choices: [
            { letter: "A", text: "distance" },
            { letter: "B", text: "time" },
            { letter: "C", text: "water" },
            { letter: "D", text: "metal" }
          ],
          correct: "B"
        }
      ]
    },

    /* 4 ───────────── Paired texts · level 3 ───────────── */
    {
      id: "g10-dsr-c67-route14",
      family: "G10",
      title: "Faster Buses, Farther Stops",
      kind: "Paired texts · 10.DSR",
      blurb: "A transit notice announces fewer stops on Route 14, and a longtime rider writes back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Lakeline Transit: Route 14 Service Update</strong></p>" +
        "<p>" + N(1) + "Beginning March 3, Route 14 buses will run every 12 minutes on weekdays instead of every 20. " +
        N(2) + "To make this possible without adding buses, we are consolidating stops along Harmon Avenue. " +
        N(3) + "Seven stops that sit close to a neighboring stop will be removed, including Orchard Lane and Delmar Street. " +
        N(4) + "Each stop a bus skips saves roughly 20 to 30 seconds, and our trial runs in January cut the full trip from 52 minutes to 44. " +
        N(5) + "Riders at removed stops will find the nearest remaining stop no more than a quarter mile away. " +
        N(6) + "Faster trips mean more frequent service for everyone on the line. " +
        N(7) + "Questions may be sent to our rider services office, and all comments received by February 15 will be reviewed before the change takes effect.</p>" +
        "<p><strong>Text 2 — A Rider's Letter to Lakeline Transit</strong></p>" +
        "<p>" + N(8) + "I have ridden Route 14 from Orchard Lane for nine years, and I welcome buses every 12 minutes. " +
        N(9) + "But your notice describes the nearest remaining stop as a quarter mile away without mentioning that the walk is uphill and has no sidewalk for half of it. " +
        N(10) + "The Orchard Lane stop sits directly in front of the Willow Court senior center, where many riders use canes or walkers. " +
        N(11) + "For them, a quarter mile on that slope is not a short walk; it is the reason they would stop riding. " +
        N(12) + "I am not asking you to cancel the plan. " +
        N(13) + "I am asking you to keep the Orchard Lane stop, or to build a sidewalk before removing it. " +
        N(14) + "A faster bus helps only the people who can still reach it.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the Lakeline notice and the rider's letter agree?",
          choices: [
            { letter: "A", text: "The Orchard Lane stop should be removed in March." },
            { letter: "B", text: "More frequent buses on Route 14 would be welcome." },
            { letter: "C", text: "A quarter-mile walk is easy for nearly all riders." },
            { letter: "D", text: "The trial runs in January were poorly planned." }
          ],
          correct: "B"
        },
        {
          id: "address",
          sol: "10.DSR.E",
          stem: "How does Text 2 respond to the statement in sentence 5 of Text 1?",
          choices: [
            { letter: "A", text: "It argues that the distance has been measured wrong." },
            { letter: "B", text: "It agrees that the walk will not trouble any riders." },
            { letter: "C", text: "It claims the remaining stop is being closed as well." },
            { letter: "D", text: "It adds facts about the walk that the notice leaves out." }
          ],
          correct: "D"
        },
        {
          id: "twoevidence",
          sol: "10.DSR.D",
          stem: "Select the TWO sentences that together best show the conflict between the authority's plan and the needs of some riders.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "A reader who uses both texts about Route 14 could best conclude that —",
          choices: [
            { letter: "A", text: "the authority has already rejected the rider's request" },
            { letter: "B", text: "most riders on Harmon Avenue oppose faster service" },
            { letter: "C", text: "the comment period gives the rider's request a real chance" },
            { letter: "D", text: "the senior center plans to move closer to Delmar Street" }
          ],
          correct: "C"
        },
        {
          id: "concede",
          sol: "10.RI.2.C",
          stem: "The rider writes I am not asking you to cancel the plan (sentence 12) mainly to —",
          choices: [
            { letter: "A", text: "show that her request is limited and reasonable" },
            { letter: "B", text: "admit that her complaint is not very important" },
            { letter: "C", text: "warn that she will stop riding Route 14 entirely" },
            { letter: "D", text: "praise the authority for its careful trial runs" }
          ],
          correct: "A"
        },
        {
          id: "support",
          sol: "10.RI.1.B",
          stem: "Which detail from Text 1 best supports the authority's claim that removing stops will speed up trips?",
          choices: [
            { letter: "A", text: "Service begins on March 3 on weekdays." },
            { letter: "B", text: "Trial runs cut the trip from 52 minutes to 44." },
            { letter: "C", text: "Comments are due by February 15." },
            { letter: "D", text: "The nearest stop is a quarter mile away." }
          ],
          correct: "B"
        }
      ]
    },

    /* 5 ───────────── Poetry · level 2 ───────────── */
    {
      id: "g10-rl-c67-watchbench",
      family: "G10",
      title: "The Watchmaker's Bench",
      kind: "Poetry · 10.RL",
      blurb: "A daughter watches her father repair an old watch beneath a single lamp.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My father works beneath a single lamp,<br>" +
        L(2) + "a jeweler's loupe pressed tight against one eye,<br>" +
        L(3) + "the whole shop dark around his ring of light<br>" +
        L(4) + "the way the night stays dark around the moon.<br>" +
        L(5) + "He coaxes out a wheel as thin as a fingernail,<br>" +
        L(6) + "holds his breath as if the wheel could hear him,<br>" +
        L(7) + "and sets it down where it belongs. I wait.<br>" +
        L(8) + "Outside, the buses sigh, the traffic hurries,<br>" +
        L(9) + "and everyone checks a phone to learn the hour;<br>" +
        L(10) + "nobody asks how time is made, or mended.<br>" +
        L(11) + "In here it is made slowly, tooth by tooth,<br>" +
        L(12) + "one patient hour spent to save a minute.<br>" +
        L(13) + "When the old watch stirs at last and ticks, he smiles<br>" +
        L(14) + "and hands the sound to me, as if it were mine." +
        "</p>",
      claims: [
        {
          id: "moon",
          sol: "10.RL.2.A",
          stem: "In lines 3–4, comparing the father's ring of light to the moon in a dark sky mainly suggests that —",
          choices: [
            { letter: "A", text: "the shop is a frightening place at night" },
            { letter: "B", text: "the father prefers to work late at night" },
            { letter: "C", text: "his small work area is a bright center of focus" },
            { letter: "D", text: "the lamp is too weak for such delicate work" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The overall mood of \"The Watchmaker's Bench\" is best described as —",
          choices: [
            { letter: "A", text: "tense and fearful" },
            { letter: "B", text: "calm and reverent" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "bitter and resentful" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which idea about time do lines 8–12 best support?",
          choices: [
            { letter: "A", text: "Careful work gives time a value that hurried people overlook." },
            { letter: "B", text: "Modern phones have made old watches completely useless." },
            { letter: "C", text: "City life moves too slowly for people who want to succeed." },
            { letter: "D", text: "Repairing watches is a job best learned from a parent." }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "10.RL.3.A",
          stem: "How do lines 8–10 function in the poem?",
          choices: [
            { letter: "A", text: "They explain why the father's shop has so few customers." },
            { letter: "B", text: "They describe the trip the speaker takes to reach the shop." },
            { letter: "C", text: "They show that the speaker would rather be outside." },
            { letter: "D", text: "They contrast the rushed world outside with the care inside." }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Line 12, one patient hour spent to save a minute, is ironic because —",
          choices: [
            { letter: "A", text: "the father dislikes the slow pace of his own work" },
            { letter: "B", text: "the watch was never broken in the first place" },
            { letter: "C", text: "much time is spent fixing a thing that measures time" },
            { letter: "D", text: "the speaker grows impatient and leaves the shop" }
          ],
          correct: "C"
        },
        {
          id: "coaxes",
          sol: "10.RV.1.D",
          stem: "In line 5, the poet says the father coaxes out a wheel rather than pulls it out. Compared with pulls, coaxes suggests that he —",
          choices: [
            { letter: "A", text: "works gently, as if persuading the wheel" },
            { letter: "B", text: "struggles because the wheel is stuck fast" },
            { letter: "C", text: "hurries to finish before the shop closes" },
            { letter: "D", text: "uses a special tool made of heavy metal" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 ───────────── Literary · level 3 ───────────── */
    {
      id: "g10-rl-c67-route9",
      family: "G10",
      title: "The Tuesday Passenger",
      kind: "Literary · 10.RL",
      blurb: "A bus driver decides the old man who rides her whole loop must be lonely.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every Tuesday at 2:10, the same old man boarded Ruth Oyelaran's bus at the Fifth Street depot, tapped his card, and sat in the front seat on the right. " +
        N(2) + "He never got off. " +
        N(3) + "He rode the whole forty-minute loop of Route 9, past the hospital, the community college, and the shuttered shoe factory, and stepped down only when the bus returned to the depot. " +
        N(4) + "Ruth had driven the route for two years, and she had built a quiet story around him: a widower, she decided, with nowhere to go and no one to talk to. " +
        N(5) + "She began saying good afternoon a little more warmly than she said it to anyone else. " +
        N(6) + "One gray Tuesday, she resolved to ask him about himself, the way her mother had always invited lonely neighbors in for tea. " +
        N(7) + "As they waited at the light on Kessler Avenue, she glanced at him in the mirror and saw that he was holding a small notebook and a stopwatch. " +
        N(8) + "\"Are you all right, sir?\" she asked. " +
        N(9) + "\"Very,\" he said, and clicked the watch. " +
        N(10) + "\"You're ninety seconds faster than last week through the college. " +
        N(11) + "I drove this route for twenty-six years, and I drew half of it myself.\" " +
        N(12) + "He showed her the notebook: columns of times in tiny, careful numbers, going back for months. " +
        N(13) + "Ruth laughed so hard she nearly missed the green light. " +
        N(14) + "For two years, she realized, she had been feeling sorry for her own inspector. " +
        N(15) + "The next Tuesday, she said good afternoon exactly as warmly as before, and then she asked him how she had done." +
        "</p>",
      claims: [
        {
          id: "character",
          sol: "10.RL.1.C",
          stem: "In sentences 4–6, Ruth is best described as —",
          choices: [
            { letter: "A", text: "suspicious of passengers who ride for free" },
            { letter: "B", text: "kind but quick to assume she understands others" },
            { letter: "C", text: "annoyed by a rider who wastes her time" },
            { letter: "D", text: "too shy to speak with anyone on her bus" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in \"The Tuesday Passenger\" is most ironic?",
          choices: [
            { letter: "A", text: "Ruth waits at a red light on Kessler Avenue." },
            { letter: "B", text: "The man always sits in the same front seat." },
            { letter: "C", text: "Ruth's mother invited neighbors in for tea." },
            { letter: "D", text: "Ruth pities a man who is studying her driving." }
          ],
          correct: "D"
        },
        {
          id: "clue",
          sol: "10.RL.1.B",
          stem: "Which sentence first signals that Ruth's story about the man may be wrong?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The final sentence of \"The Tuesday Passenger\" mainly serves to —",
          choices: [
            { letter: "A", text: "show Ruth keeping her warmth while accepting his real role" },
            { letter: "B", text: "suggest that Ruth is angry about being watched so closely" },
            { letter: "C", text: "reveal that the man has stopped riding the bus at all" },
            { letter: "D", text: "explain why Ruth plans to request a different route" }
          ],
          correct: "A"
        },
        {
          id: "quietstory",
          sol: "10.RL.2.B",
          stem: "In sentence 4, the phrase she had built a quiet story around him suggests that Ruth —",
          choices: [
            { letter: "A", text: "had read about the man in a local newspaper" },
            { letter: "B", text: "had told other drivers rumors about the man" },
            { letter: "C", text: "had asked the man questions he would not answer" },
            { letter: "D", text: "had invented a history for him from little evidence" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Ruth and her passenger?",
          choices: [
            { letter: "A", text: "Bus drivers should avoid talking with their passengers." },
            { letter: "B", text: "The stories we imagine about strangers can miss the truth." },
            { letter: "C", text: "Older workers are always better at a job than newer ones." },
            { letter: "D", text: "People who live alone usually want to be left in peace." }
          ],
          correct: "B"
        }
      ]
    },

    /* 7 ───────────── Informational · level 1 ───────────── */
    {
      id: "g10-ri-c67-escapement",
      family: "G10",
      title: "Inside a Ticking Watch",
      kind: "Informational · 10.RI",
      blurb: "How a mechanical watch turns a wound spring into steady, even ticks.",
      level: 1,
      passage:
        "<p>" + N(1) + "A mechanical watch has no battery, yet it can run for days. " +
        N(2) + "Its power comes from a coiled strip of metal called the mainspring. " +
        N(3) + "When the owner winds the crown, the mainspring tightens and stores energy, much like a stretched rubber band. " +
        N(4) + "If that energy were released all at once, the hands would spin wildly and the watch would stop within seconds. " +
        N(5) + "The job of letting the energy out slowly belongs to a part called the escapement. " +
        N(6) + "The escapement works with a small balance wheel that swings back and forth several times each second. " +
        N(7) + "With each swing, the escapement lets a toothed wheel advance by exactly one tooth, then locks it again. " +
        N(8) + "That locking and releasing makes the familiar ticking sound. " +
        N(9) + "A series of gears, called the gear train, passes these tiny, even steps along to the hands, so that the minute hand travels once around the dial each hour. " +
        N(10) + "Because the parts are so small, dust or old oil can slow the balance wheel and make a watch lose time. " +
        N(11) + "For this reason, repairers recommend a full cleaning every five to seven years. " +
        N(12) + "Asha Raman, who teaches a watch repair course at a community college, tells her students that a watch is less like a machine than a heartbeat. " +
        N(13) + "\"Every tick is the spring trying to escape,\" she says, \"and the escapement politely saying, not yet.\"" +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes \"Inside a Ticking Watch\"?",
          choices: [
            { letter: "A", text: "Dust and old oil are the main reasons watches stop working." },
            { letter: "B", text: "Community colleges now offer courses in watch repair." },
            { letter: "C", text: "Battery watches are more accurate than mechanical ones." },
            { letter: "D", text: "A watch keeps time by releasing a spring's energy in even steps." }
          ],
          correct: "D"
        },
        {
          id: "allatonce",
          sol: "10.RI.1.B",
          stem: "According to the passage, what would happen if the mainspring released its energy all at once?",
          choices: [
            { letter: "A", text: "The hands would spin wildly and the watch would soon stop." },
            { letter: "B", text: "The balance wheel would swing more slowly than usual." },
            { letter: "C", text: "The crown would need to be wound several times a day." },
            { letter: "D", text: "The ticking sound would grow quieter and then return." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          stem: "Sentences 2 through 9 are organized mainly to —",
          choices: [
            { letter: "A", text: "compare old watches with newer watch designs" },
            { letter: "B", text: "list the tools a repairer uses on each part" },
            { letter: "C", text: "trace the path of energy from spring to hands" },
            { letter: "D", text: "describe problems in the order they usually occur" }
          ],
          correct: "C"
        },
        {
          id: "escapement",
          sol: "10.RV.1.A",
          stem: "The word escapement in sentence 5 is built from escape plus the suffix -ment. Based on the passage, this name fits the part because it —",
          choices: [
            { letter: "A", text: "lets dust escape from inside the case" },
            { letter: "B", text: "controls energy that is trying to get away" },
            { letter: "C", text: "helps the owner remove the watch quickly" },
            { letter: "D", text: "breaks free of the gear train when worn" }
          ],
          correct: "B"
        },
        {
          id: "quote",
          sol: "10.RI.1.C",
          stem: "The author includes Asha Raman's quotation in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "restate how the escapement works in a vivid way" },
            { letter: "B", text: "argue that watches should be cleaned more often" },
            { letter: "C", text: "show that experts disagree about how watches work" },
            { letter: "D", text: "explain why mechanical watches cost so much" }
          ],
          correct: "A"
        },
        {
          id: "rubberband",
          sol: "10.RI.2.B",
          stem: "In sentence 3, the author compares the mainspring to a stretched rubber band mainly to —",
          choices: [
            { letter: "A", text: "warn readers that the spring can snap easily" },
            { letter: "B", text: "suggest that the spring is made of rubber" },
            { letter: "C", text: "help readers picture how the spring holds energy" },
            { letter: "D", text: "show that winding a watch takes great strength" }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 ───────────── Argument · level 3 ───────────── */
    {
      id: "g10-ri-c67-redlane",
      family: "G10",
      title: "Paint the Lane Red",
      kind: "Argument · 10.RI",
      blurb: "A student columnist argues that the Number 22 bus deserves a lane of its own.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every weekday morning, the Number 22 bus carries about 1,400 riders down Calloway Boulevard, and every weekday morning it crawls behind the same line of cars. " +
        N(2) + "The city should give that bus a lane of its own. " +
        N(3) + "A dedicated bus lane, painted red and closed to private cars during rush hours, would cost far less than any new road. " +
        N(4) + "When the nearby city of Ridgeport added a similar lane on its main avenue, its buses became about a quarter faster, and ridership rose by 18 percent within a year. " +
        N(5) + "Critics on Calloway argue that taking a lane from cars will make traffic worse for everyone. " +
        N(6) + "That worry is understandable, but it overlooks a simple fact about space. " +
        N(7) + "A single crowded bus holds as many people as forty cars, so moving the bus faster moves more people, not fewer. " +
        N(8) + "Others fear that shops will lose customers who can no longer park out front. " +
        N(9) + "Yet the city's own survey found that most shoppers on the boulevard already arrive on foot or by bus. " +
        N(10) + "Perhaps some drivers will be annoyed for a few weeks; perhaps, as in Ridgeport, many will try the bus once it beats their car. " +
        N(11) + "What is certain is that the current arrangement wastes the time of the very riders who have the fewest other choices. " +
        N(12) + "Students heading to Calloway High, nurses on early shifts, and workers without cars all sit in the same traffic jam while their bus idles beside empty sidewalks. " +
        N(13) + "A can of red paint will not fix every problem on the boulevard. " +
        N(14) + "It would, however, tell 1,400 riders each morning that their time counts too." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the central claim of \"Paint the Lane Red\"?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "10.RI.2.C",
          stem: "In sentences 5–7, the author responds to the critics mainly to —",
          choices: [
            { letter: "A", text: "admit that the bus lane would slow traffic for most people" },
            { letter: "B", text: "suggest that critics should move to the city of Ridgeport" },
            { letter: "C", text: "accept a concern and then show why it misses a key fact" },
            { letter: "D", text: "prove that cars carry more people than buses each day" }
          ],
          correct: "C"
        },
        {
          id: "outside",
          sol: "10.RI.1.B",
          stem: "Which detail offers evidence from a city other than the author's own?",
          choices: [
            { letter: "A", text: "The Number 22 carries about 1,400 riders each morning." },
            { letter: "B", text: "Buses on a similar lane became about a quarter faster." },
            { letter: "C", text: "Most shoppers on the boulevard arrive on foot or by bus." },
            { letter: "D", text: "Nurses and students wait in the same traffic jam." }
          ],
          correct: "B"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          stem: "Which idea from the column is presented as speculation rather than as a reported result?",
          choices: [
            { letter: "A", text: "Ridgeport's ridership rose by 18 percent within a year." },
            { letter: "B", text: "The city's survey counted how shoppers arrive." },
            { letter: "C", text: "A crowded bus holds as many people as forty cars." },
            { letter: "D", text: "Many drivers may try the bus once it beats their car." }
          ],
          correct: "D"
        },
        {
          id: "paint",
          sol: "10.RI.2.B",
          stem: "The author ends with the image of a can of red paint (sentences 13–14) mainly to —",
          choices: [
            { letter: "A", text: "admit that the plan would probably fail in the end" },
            { letter: "B", text: "suggest a small, cheap change could matter greatly" },
            { letter: "C", text: "ask readers to volunteer to paint the lane themselves" },
            { letter: "D", text: "compare the cost of paint with the cost of new buses" }
          ],
          correct: "B"
        },
        {
          id: "crawls",
          sol: "10.RV.1.D",
          stem: "In sentence 1, the author says the bus crawls rather than moves slowly. Compared with moves slowly, crawls suggests a pace that is —",
          choices: [
            { letter: "A", text: "safe and sensible" },
            { letter: "B", text: "steady and relaxing" },
            { letter: "C", text: "quick but uneven" },
            { letter: "D", text: "frustrating and helpless" }
          ],
          correct: "D"
        }
      ]
    },

    /* 9 ───────────── Functional text · level 1 ───────────── */
    {
      id: "g10-ri-c67-nestwatch",
      family: "G10",
      title: "Turtle Patrol Guidelines",
      kind: "Functional text · 10.RI",
      blurb: "Rules for volunteers who walk the beach each morning looking for sea turtle nests.",
      level: 1,
      passage:
        "<p><strong>Coquina Beach Turtle Patrol — Volunteer Guidelines</strong></p>" +
        "<p>" + N(1) + "Thank you for joining the morning nest watch, which runs from May 1 through October 31.</p>" +
        "<p><strong>Before Your Shift</strong> " + N(2) + "Check in at the lifeguard station by 6:00 a.m. and pick up a clipboard, a measuring tape, and a set of marker flags. " +
        N(3) + "Wear closed-toe shoes and bring water; there is no shade on the north end of the beach.</p>" +
        "<p><strong>On the Beach</strong> " + N(4) + "Walk your assigned section slowly along the high-tide line, looking for crawls, the tractor-like tracks a female turtle leaves when she comes ashore to nest. " +
        N(5) + "If you find a crawl, follow it up the beach without stepping on it, and note where it ends. " +
        N(6) + "Never dig into the sand to confirm a nest; only staff members with a state permit may handle eggs. " +
        N(7) + "Instead, mark the spot with flags and radio the coordinator, Ms. Thanh Nguyen, on channel 4.</p>" +
        "<p><strong>If You See a Turtle</strong> " + N(8) + "Stay at least thirty feet away, keep low, and keep all lights and phones switched off. " +
        N(9) + "A nesting turtle that is disturbed may return to the sea without laying her eggs.</p>" +
        "<p><strong>After Your Shift</strong> " + N(10) + "Return all equipment and turn in your completed data sheet, even if you found nothing. " +
        N(11) + "A morning with no crawls is still useful information for the season's records.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Turtle Patrol guidelines are written mainly for —",
          choices: [
            { letter: "A", text: "tourists who want to find a quiet beach" },
            { letter: "B", text: "people who signed up to help monitor nests" },
            { letter: "C", text: "scientists who hold permits to move eggs" },
            { letter: "D", text: "lifeguards who patrol the north end" }
          ],
          correct: "B"
        },
        {
          id: "distance",
          sol: "10.RI.1.B",
          stem: "According to the guidelines, why should volunteers stay far from a nesting turtle?",
          choices: [
            { letter: "A", text: "A disturbed turtle may leave without laying eggs." },
            { letter: "B", text: "Nesting turtles can bite people who come too close." },
            { letter: "C", text: "The coordinator needs a clear view of the beach." },
            { letter: "D", text: "Volunteers might step on the turtle's crawl marks." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings in the Turtle Patrol guidelines help a volunteer mainly by —",
          choices: [
            { letter: "A", text: "listing the rules from most to least important" },
            { letter: "B", text: "separating the rules for staff from those for visitors" },
            { letter: "C", text: "arranging the instructions in the order of a shift" },
            { letter: "D", text: "explaining the science behind each of the rules" }
          ],
          correct: "C"
        },
        {
          id: "crawls",
          sol: "10.RV.1.C",
          stem: "As it is used in sentence 4, the word crawls refers to —",
          choices: [
            { letter: "A", text: "tracks a turtle leaves in the sand" },
            { letter: "B", text: "slow walks along the high-tide line" },
            { letter: "C", text: "baby turtles moving toward the sea" },
            { letter: "D", text: "insects that live under the dunes" }
          ],
          correct: "A"
        },
        {
          id: "role",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the volunteers' role as the guidelines describe it?",
          choices: [
            { letter: "A", text: "Dig up nests and move the eggs to safer ground." },
            { letter: "B", text: "Guide tourists to see turtles nesting at night." },
            { letter: "C", text: "Clean litter from the beach before it opens." },
            { letter: "D", text: "Find and report nests without disturbing them." }
          ],
          correct: "D"
        },
        {
          id: "datasheet",
          sol: "10.RI.2.C",
          stem: "Which sentence gives the strongest reason for turning in a data sheet even after a shift with no crawls?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        }
      ]
    },

    /* 10 ───────────── Drama · level 2 ───────────── */
    {
      id: "g10-rl-c67-preproom",
      family: "G10",
      title: "Prep Room B",
      kind: "Drama · 10.RL",
      blurb: "A debate captain learns she must argue against the petition she started.",
      level: 2,
      passage:
        "<p><em>A classroom after school. Desks are pushed into two rows. FARAH, a senior, stares at a sheet of paper. KOFI, a freshman, stacks folders of evidence.</em></p>" +
        "<p><strong>FARAH:</strong> " + N(1) + "They gave us the negative side. " + N(2) + "We have to argue against keeping the public library open until midnight.</p>" +
        "<p><strong>KOFI:</strong> " + N(3) + "But you started the petition to keep it open until midnight.</p>" +
        "<p><strong>FARAH:</strong> " + N(4) + "Exactly. " + N(5) + "On Saturday I get to stand up in front of three judges and argue against my own petition.</p>" +
        "<p><em>MR. DELACROIX enters, carrying a box of index cards.</em></p>" +
        "<p><strong>MR. DELACROIX:</strong> " + N(6) + "I heard. " + N(7) + "Congratulations.</p>" +
        "<p><strong>FARAH:</strong> " + N(8) + "Congratulations? " + N(9) + "This is a disaster.</p>" +
        "<p><strong>MR. DELACROIX:</strong> " + N(10) + "It's a gift. " + N(11) + "Nobody in that room knows the case for late hours better than you, which means nobody knows its weak spots better, either.</p>" +
        "<p><strong>KOFI:</strong> <em>(slowly)</em> " + N(12) + "Like the cost of paying staff after nine o'clock.</p>" +
        "<p><strong>FARAH:</strong> " + N(13) + "Kofi!</p>" +
        "<p><strong>KOFI:</strong> " + N(14) + "What? " + N(15) + "You told me that yourself last week.</p>" +
        "<p><strong>MR. DELACROIX:</strong> " + N(16) + "He's right, Farah. " + N(17) + "If you can find the cracks in your own argument, you can fill them before the city council ever sees them.</p>" +
        "<p><em>FARAH sets down her paper. A long pause.</em></p>" +
        "<p><strong>FARAH:</strong> " + N(18) + "So I argue against it on Saturday, and then...</p>" +
        "<p><strong>MR. DELACROIX:</strong> " + N(19) + "And on Monday you rewrite the petition so that nobody can argue against it again.</p>" +
        "<p><strong>FARAH:</strong> <em>(pulling a folder toward her)</em> " + N(20) + "Kofi, hand me the budget numbers. " + N(21) + "All of them.</p>",
      claims: [
        {
          id: "farah",
          sol: "10.RL.1.C",
          stem: "In sentences 1–5, Farah is best described as —",
          choices: [
            { letter: "A", text: "eager to prove she can win any assigned side" },
            { letter: "B", text: "confused about the rules of the tournament" },
            { letter: "C", text: "frustrated at having to argue against her beliefs" },
            { letter: "D", text: "relieved that Kofi will speak in her place" }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of \"Prep Room B\" is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Farah's convictions and her debate assignment" },
            { letter: "B", text: "Kofi's loyalty and his wish to join another team" },
            { letter: "C", text: "Mr. Delacroix and the members of the city council" },
            { letter: "D", text: "the debate team and the library's night staff" }
          ],
          correct: "A"
        },
        {
          id: "pause",
          sol: "10.RL.3.A",
          stem: "The stage direction A long pause (just before sentence 18) mainly serves to —",
          choices: [
            { letter: "A", text: "show that Farah has stopped listening to her coach" },
            { letter: "B", text: "signal that the scene is about to change locations" },
            { letter: "C", text: "suggest that Kofi is afraid he has upset Farah" },
            { letter: "D", text: "mark the moment Farah begins to change her mind" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The tone of Farah's final lines (sentences 20–21) is best described as —",
          choices: [
            { letter: "A", text: "bitter and defeated" },
            { letter: "B", text: "determined and energized" },
            { letter: "C", text: "polite and uncertain" },
            { letter: "D", text: "bored and distracted" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Mr. Delacroix's word Congratulations in sentence 7 is ironic because —",
          choices: [
            { letter: "A", text: "Farah sees the assignment as bad news, not good" },
            { letter: "B", text: "the team has already lost its first round" },
            { letter: "C", text: "Mr. Delacroix secretly agrees with the petition" },
            { letter: "D", text: "Kofi was the one who chose the negative side" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the scene in Prep Room B best support?",
          choices: [
            { letter: "A", text: "Leaders should never admit doubts to younger teammates." },
            { letter: "B", text: "Studying the other side can strengthen what you believe." },
            { letter: "C", text: "Winning a debate matters more than holding real beliefs." },
            { letter: "D", text: "Petitions rarely change the decisions of a city council." }
          ],
          correct: "B"
        }
      ]
    },

    /* 11 ───────────── Literary · level 2 ───────────── */
    {
      id: "g10-rl-c67-falselight",
      family: "G10",
      title: "The Wrong Way Home",
      kind: "Literary · 10.RL",
      blurb: "On a moonlit beach, a girl wants to rescue a lost hatchling, and her grandfather stops her.",
      level: 2,
      passage:
        "<p>" + N(1) + "The sand began to move a little after midnight, as if the beach were breathing. " +
        N(2) + "Nurul knelt beside her grandfather at the edge of the roped-off nest and held her own breath. " +
        N(3) + "First one small head pushed through, then a flipper, then dozens of hatchlings bubbling up out of the sand like water from a spring. " +
        N(4) + "They paused only a moment before scrambling toward the pale line where the moon touched the sea. " +
        N(5) + "All except one. " +
        N(6) + "The last hatchling turned the wrong way, toward the yellow glow of the cafe lights behind the dunes. " +
        N(7) + "Nurul reached for it at once. " +
        N(8) + "\"No,\" her grandfather said quietly, catching her wrist. " +
        N(9) + "\"If you carry it, it will never learn the way. " +
        N(10) + "The walk across the sand teaches it something it will need years from now.\" " +
        N(11) + "Nurul's fingers ached to scoop the tiny turtle up, but she sat back. " +
        N(12) + "Instead, her grandfather took off his dark jacket and held it up between the hatchling and the cafe, a curtain against the false light. " +
        N(13) + "The turtle stopped, swung its head back and forth, and then, slowly, began to turn. " +
        N(14) + "Nurul crawled beside it the whole way, never touching it, until a small wave lifted it and pulled it out into the dark. " +
        N(15) + "On the walk home, she asked her grandfather how far it would swim. " +
        N(16) + "\"Farther than either of us,\" he said, \"and someday it may come back to this same beach.\"" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the grandfather's choices on the beach?",
          choices: [
            { letter: "A", text: "Wild animals should be kept far away from people." },
            { letter: "B", text: "The best help guides others without doing their work." },
            { letter: "C", text: "Children learn most by ignoring their elders' advice." },
            { letter: "D", text: "Nature is too dangerous for anyone to interfere with." }
          ],
          correct: "B"
        },
        {
          id: "spring",
          sol: "10.RL.2.A",
          stem: "In sentence 3, comparing the hatchlings to water from a spring suggests that they —",
          choices: [
            { letter: "A", text: "are weak and need help to climb out" },
            { letter: "B", text: "smell of salt water from the nearby sea" },
            { letter: "C", text: "move slowly, one at a time, toward the dunes" },
            { letter: "D", text: "pour out quickly and in great numbers" }
          ],
          correct: "D"
        },
        {
          id: "nurul",
          sol: "10.RL.1.C",
          stem: "Sentences 7 and 11 together show that Nurul —",
          choices: [
            { letter: "A", text: "wants to help at once but learns to hold back" },
            { letter: "B", text: "is afraid to touch the turtles on the beach" },
            { letter: "C", text: "does not trust her grandfather's knowledge" },
            { letter: "D", text: "loses interest once the other turtles leave" }
          ],
          correct: "A"
        },
        {
          id: "falselight",
          sol: "10.RL.2.B",
          stem: "In sentence 12, calling the cafe's glow false light suggests that —",
          choices: [
            { letter: "A", text: "the cafe has turned its lights off for the night" },
            { letter: "B", text: "the grandfather dislikes the owners of the cafe" },
            { letter: "C", text: "the light misleads the turtle away from the sea" },
            { letter: "D", text: "the moon is dimmer than the lights behind the dunes" }
          ],
          correct: "C"
        },
        {
          id: "ached",
          sol: "10.RV.1.B",
          stem: "In sentence 11, the phrase ached to most nearly means —",
          choices: [
            { letter: "A", text: "strongly wanted to" },
            { letter: "B", text: "felt sore after trying to" },
            { letter: "C", text: "refused to" },
            { letter: "D", text: "pretended to" }
          ],
          correct: "A"
        },
        {
          id: "turning",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in the lost hatchling's journey?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        }
      ]
    },

    /* 12 ───────────── Vocabulary · level 3 ───────────── */
    {
      id: "g10-rv-c67-semifinal",
      family: "G10",
      title: "The Quiet Finalist",
      kind: "Vocabulary · 10.RV",
      blurb: "A soft-spoken debater surprises a crowded auditorium in the state semifinal.",
      level: 3,
      passage:
        "<p>" + N(1) + "Before the state semifinal, most people in the auditorium expected Marcus Lindqvist to win easily. " +
        N(2) + "He was <strong>vehement</strong> when he spoke, pounding the podium and raising his voice until the back row could feel each point. " +
        N(3) + "His opponent, Dalia Haddad, was the opposite: she spoke softly and kept her arguments <strong>succinct</strong>, never using ten words when four would do. " +
        N(4) + "In her first speech, she did something that left the audience <strong>incredulous</strong>: she openly admitted that one of Marcus's statistics was correct. " +
        N(5) + "Several people whispered, unable to believe a debater would give anything away. " +
        N(6) + "But the <strong>concession</strong> was a strategy, not a surrender. " +
        N(7) + "\"Yes, the program costs more,\" Dalia said, \"and that is exactly why its results matter.\" " +
        N(8) + "She then walked the judges through three studies, linking each one to the next until her case felt as solid as a staircase. " +
        N(9) + "Her reasoning was so <strong>cogent</strong> that even Marcus's teammates nodded along. " +
        N(10) + "Marcus's answer, which had sounded certain an hour earlier, now seemed <strong>tentative</strong>; he paused often, as if testing each sentence before trusting it with his weight. " +
        N(11) + "When the results were posted, Dalia had won on all three ballots. " +
        N(12) + "Afterward, Marcus shook her hand and asked, a little sheepishly, how she stayed so calm. " +
        N(13) + "\"I don't have to be loud,\" she said, \"if I've already done the shouting in my notes.\"" +
        "</p>",
      claims: [
        {
          id: "vehement",
          sol: "10.RV.1.D",
          stem: "The author calls Marcus vehement rather than simply loud. Compared with loud, vehement suggests that he speaks with —",
          choices: [
            { letter: "A", text: "careless, rambling energy" },
            { letter: "B", text: "nervous, shaky hesitation" },
            { letter: "C", text: "intense, forceful feeling" },
            { letter: "D", text: "cheerful, joking warmth" }
          ],
          correct: "C"
        },
        {
          id: "incredulous",
          sol: "10.RV.1.A",
          stem: "The word incredulous in sentence 4 joins the prefix in-, meaning not, with the root cred-, as in credible and credit. Based on these parts, incredulous most nearly means —",
          choices: [
            { letter: "A", text: "unable to believe" },
            { letter: "B", text: "unwilling to listen" },
            { letter: "C", text: "too tired to care" },
            { letter: "D", text: "quick to applaud" }
          ],
          correct: "A"
        },
        {
          id: "succinct",
          sol: "10.RV.1.B",
          stem: "In sentence 3, succinct most nearly means —",
          choices: [
            { letter: "A", text: "gentle and kind" },
            { letter: "B", text: "careful and slow" },
            { letter: "C", text: "humorous and light" },
            { letter: "D", text: "brief and clear" }
          ],
          correct: "D"
        },
        {
          id: "concession",
          sol: "10.RV.1.C",
          stem: "Which part of the passage best shows what Dalia's concession was?",
          choices: [
            { letter: "A", text: "pounding the podium and raising his voice" },
            { letter: "B", text: "openly admitted that one of Marcus's statistics was correct" },
            { letter: "C", text: "walked the judges through three studies" },
            { letter: "D", text: "shook her hand and asked how she stayed so calm" }
          ],
          correct: "B"
        },
        {
          id: "tentative",
          sol: "10.RV.1.D",
          stem: "In sentence 10, Marcus seems to test each sentence before trusting it with his weight. This image gives the word tentative a connotation of —",
          choices: [
            { letter: "A", text: "uneasy caution" },
            { letter: "B", text: "quiet confidence" },
            { letter: "C", text: "playful teasing" },
            { letter: "D", text: "angry impatience" }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "10.RV.1.A",
          stem: "The word concession in sentence 6 is related to the verb concede. Both words carry the idea of —",
          choices: [
            { letter: "A", text: "hiding a weakness from others" },
            { letter: "B", text: "repeating a point for emphasis" },
            { letter: "C", text: "yielding or giving way on a point" },
            { letter: "D", text: "asking a question of an opponent" }
          ],
          correct: "C"
        }
      ]
    },

    /* 13 ───────────── Informational · level 3 ───────────── */
    {
      id: "g10-ri-c67-bunching",
      family: "G10",
      title: "Why Buses Travel in Pairs",
      kind: "Informational · 10.RI",
      blurb: "How one small delay can leave riders waiting twenty minutes and then send two buses at once.",
      level: 3,
      passage:
        "<p>" + N(1) + "Anyone who has waited twenty minutes for a bus, only to watch two arrive together, has witnessed a problem that transit planners call bunching. " +
        N(2) + "It begins with a small delay. " +
        N(3) + "Suppose one bus on a busy route is held up for two minutes by a stalled delivery truck. " +
        N(4) + "By the time it reaches the next stop, more riders than usual have gathered there, and boarding them all takes extra time. " +
        N(5) + "That bus falls further behind, and at each stop the crowd waiting for it grows larger still. " +
        N(6) + "Meanwhile, the bus behind it finds fewer riders at every stop, because the late bus has just picked them up, so it moves faster and faster. " +
        N(7) + "Eventually the second bus catches the first, and the two travel together, leaving a long, empty gap behind them. " +
        N(8) + "Bunching is not caused by careless drivers; it is built into the math of a crowded route. " +
        N(9) + "Cities fight it in several ways. " +
        N(10) + "Some ask drivers to wait briefly at certain \"timepoint\" stops so that buses stay evenly spaced. " +
        N(11) + "Others let riders pay before boarding, which shortens the time a bus sits at each curb. " +
        N(12) + "A transit agency in one mid-sized city reported that holding buses at timepoints cut the longest waits on its busiest route by about a third. " +
        N(13) + "The fix has a cost, though: a rider on a held bus may sit for a minute that feels pointless. " +
        N(14) + "Planners argue that a minute of waiting on board is a fair trade for a shorter wait for everyone standing at the next stop. " +
        N(15) + "Whether riders agree may depend on which seat they happen to be in." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Why Buses Travel in Pairs\"?",
          choices: [
            { letter: "A", text: "Small delays grow into bunching, which cities try to limit by spacing buses." },
            { letter: "B", text: "Most bus delays are caused by delivery trucks that stall in traffic lanes." },
            { letter: "C", text: "Riders who pay before boarding should receive a discount on their fare." },
            { letter: "D", text: "Planners and riders rarely agree about how a bus route should be run." }
          ],
          correct: "A"
        },
        {
          id: "chain",
          sol: "10.RI.2.A",
          stem: "Sentences 3 through 7 are organized as —",
          choices: [
            { letter: "A", text: "a comparison of two different cities" },
            { letter: "B", text: "a chain of causes and effects" },
            { letter: "C", text: "a list of possible solutions" },
            { letter: "D", text: "a history of public transit" }
          ],
          correct: "B"
        },
        {
          id: "math",
          sol: "10.RI.2.B",
          stem: "In sentence 8, the author says bunching is built into the math of a crowded route mainly to emphasize that —",
          choices: [
            { letter: "A", text: "drivers need more training in arithmetic" },
            { letter: "B", text: "crowded routes should be shut down entirely" },
            { letter: "C", text: "planners can predict every delay in advance" },
            { letter: "D", text: "the problem comes from how routes work, not drivers" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone toward holding buses at timepoints (sentences 13–15) is best described as —",
          choices: [
            { letter: "A", text: "openly mocking" },
            { letter: "B", text: "strongly opposed" },
            { letter: "C", text: "balanced and fair-minded" },
            { letter: "D", text: "wildly enthusiastic" }
          ],
          correct: "C"
        },
        {
          id: "example",
          sol: "10.RI.1.C",
          stem: "The author includes the stalled delivery truck in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "blame delivery companies for crowded routes" },
            { letter: "B", text: "show that bunching only happens downtown" },
            { letter: "C", text: "make an abstract problem concrete with a case" },
            { letter: "D", text: "argue that trucks should be banned from bus routes" }
          ],
          correct: "C"
        },
        {
          id: "fair",
          sol: "10.RV.1.C",
          stem: "In sentence 14, the word fair most nearly means —",
          choices: [
            { letter: "A", text: "light in color" },
            { letter: "B", text: "reasonable and even" },
            { letter: "C", text: "clear and sunny" },
            { letter: "D", text: "an outdoor festival" }
          ],
          correct: "B"
        }
      ]
    },

    /* 14 ───────────── Paired texts · level 1 ───────────── */
    {
      id: "g10-dsr-c67-lightsout",
      family: "G10",
      title: "Lights Out for Hatchlings",
      kind: "Paired texts · 10.DSR",
      blurb: "A town's beach lighting rule, and the homeowner who changed his mind about it.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Sandpiper Key's Summer Lighting Rule</strong></p>" +
        "<p>" + N(1) + "Every summer, the town of Sandpiper Key asks its beachfront residents to do something unusual: turn down the lights. " +
        N(2) + "From May through October, any light visible from the beach must be shielded, switched to a low amber bulb, or turned off after 9:00 p.m. " +
        N(3) + "The rule exists because newly hatched sea turtles find the ocean by heading toward the brightest horizon. " +
        N(4) + "On a natural beach, that horizon is the moonlit sea. " +
        N(5) + "On a developed beach, it may be a porch, a parking lot, or a hotel pool. " +
        N(6) + "Hatchlings that crawl toward those lights can become exhausted, dry out, or wander onto roads. " +
        N(7) + "Since the town began enforcing the rule six years ago, volunteers have recorded far fewer nests with hatchlings found heading inland. " +
        N(8) + "Residents who break the rule receive a warning first and a fine only if the problem continues.</p>" +
        "<p><strong>Text 2 — From a Beach-House Owner's Notebook</strong></p>" +
        "<p>" + N(9) + "When the lighting letter arrived from the town, I tossed it on the counter and grumbled about rules for people who have lived here thirty years. " +
        N(10) + "My porch light had been on every night since my children were small. " +
        N(11) + "Then, last August, I stepped outside after dinner and nearly stepped on a hatchling. " +
        N(12) + "There were eleven of them on my deck, circling beneath the bulb as if it were the moon. " +
        N(13) + "My granddaughter and I spent an hour, with a volunteer's help, carrying them in a bucket down to the water. " +
        N(14) + "The next morning I bought amber bulbs for every outside fixture. " +
        N(15) + "The porch looks a little dimmer now. " +
        N(16) + "I have decided I can live with that.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the lighting rule article and the homeowner's notebook agree?",
          choices: [
            { letter: "A", text: "Fines are the best way to make residents obey rules." },
            { letter: "B", text: "Bright lights near the beach can mislead hatchlings." },
            { letter: "C", text: "Porch lights are safe if they are turned off by midnight." },
            { letter: "D", text: "Volunteers should stop carrying hatchlings to the sea." }
          ],
          correct: "B"
        },
        {
          id: "example",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 2 gives a real example of the problem described in sentence 5 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the two texts about Sandpiper Key?",
          choices: [
            { letter: "A", text: "Text 1 explains the rule and its reasons; Text 2 tells how one man accepted it." },
            { letter: "B", text: "Text 1 argues against the rule; Text 2 shows that the rule has no effect at all." },
            { letter: "C", text: "Text 1 describes one family's porch; Text 2 reports on the whole town's beach." },
            { letter: "D", text: "Text 1 is written by a volunteer; Text 2 is written by a town official." }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "Using both texts, a reader can best conclude that the lighting rule —",
          choices: [
            { letter: "A", text: "is ignored by most people who own beach houses" },
            { letter: "B", text: "will be dropped once the turtles stop nesting" },
            { letter: "C", text: "matters only to people who live near hotels" },
            { letter: "D", text: "can change habits once people see its purpose" }
          ],
          correct: "D"
        },
        {
          id: "amber",
          sol: "10.DSR.D",
          stem: "Select the TWO sentences, one from each text, that together best show that amber bulbs are an accepted solution.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How is Text 2 organized?",
          choices: [
            { letter: "A", text: "as a list of the town's lighting rules in order" },
            { letter: "B", text: "as a comparison of amber bulbs and white bulbs" },
            { letter: "C", text: "as a story that moves from resistance to acceptance" },
            { letter: "D", text: "as a problem followed by several rejected solutions" }
          ],
          correct: "C"
        }
      ]
    },

    /* 15 ───────────── Poetry · level 3 ───────────── */
    {
      id: "g10-rl-c67-nightroute",
      family: "G10",
      title: "Night Route 31",
      kind: "Poetry · 10.RL",
      blurb: "Tired strangers share the last bus of the night, and one small kindness.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At 11:52 the last bus comes<br>" +
        L(2) + "like a lit room sliding loose from its house,<br>" +
        L(3) + "and we climb in: the baker with flour on her sleeves,<br>" +
        L(4) + "the boy with a cello case taller than his sister,<br>" +
        L(5) + "a nurse who closes her eyes before she sits.<br>" +
        L(6) + "Nobody speaks. We are strangers, after all,<br>" +
        L(7) + "and the city has used up our words for the day.<br>" +
        L(8) + "The driver hums something without a melody.<br>" +
        L(9) + "Outside, the shut stores slide past like closed books,<br>" +
        L(10) + "their titles too dark to read.<br>" +
        L(11) + "At Pine Street the cello boy wakes the nurse<br>" +
        L(12) + "so she will not miss her stop, just a tap on the shoulder,<br>" +
        L(13) + "just \"This one's yours,\" and she smiles at him<br>" +
        L(14) + "as if he had handed her the whole night, folded.<br>" +
        L(15) + "We are strangers, after all. And yet the bus<br>" +
        L(16) + "keeps every one of us, and lets us go." +
        "</p>",
      claims: [
        {
          id: "litroom",
          sol: "10.RL.2.A",
          stem: "In line 2, comparing the bus to a lit room sliding loose from its house suggests that the bus —",
          choices: [
            { letter: "A", text: "is badly damaged and unsafe to ride" },
            { letter: "B", text: "has been taken off its usual route" },
            { letter: "C", text: "is crowded with noisy, cheerful riders" },
            { letter: "D", text: "feels like a warm shelter moving through the dark" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in lines 3–8 mainly create a mood of —",
          choices: [
            { letter: "A", text: "tense suspicion" },
            { letter: "B", text: "weary, quiet togetherness" },
            { letter: "C", text: "festive celebration" },
            { letter: "D", text: "bitter resentment" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which idea is best supported by lines 11–16 of \"Night Route 31\"?",
          choices: [
            { letter: "A", text: "Small kindnesses can connect people who stay strangers." },
            { letter: "B", text: "City buses are too crowded for riders to get any rest." },
            { letter: "C", text: "Young people rarely notice the adults around them." },
            { letter: "D", text: "Night workers should be given their own bus routes." }
          ],
          correct: "A"
        },
        {
          id: "repeat",
          sol: "10.RL.3.A",
          stem: "The poet repeats We are strangers, after all (lines 6 and 15) mainly to —",
          choices: [
            { letter: "A", text: "stress that the riders refuse to help one another" },
            { letter: "B", text: "remind readers that the speaker is new to the city" },
            { letter: "C", text: "show the phrase taking on new meaning after the kindness" },
            { letter: "D", text: "mark the beginning and end of the driver's shift" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of lines 13–16 is best described as —",
          choices: [
            { letter: "A", text: "anxious and fearful" },
            { letter: "B", text: "gently hopeful" },
            { letter: "C", text: "sharply critical" },
            { letter: "D", text: "coldly distant" }
          ],
          correct: "B"
        },
        {
          id: "cello",
          sol: "10.RL.1.C",
          stem: "Lines 11–13 characterize the boy with the cello case as —",
          choices: [
            { letter: "A", text: "eager to start a long conversation" },
            { letter: "B", text: "annoyed by the sleeping passengers" },
            { letter: "C", text: "too shy to look at anyone on the bus" },
            { letter: "D", text: "quietly considerate toward others" }
          ],
          correct: "D"
        }
      ]
    },

    /* 16 ───────────── Literary · level 1 ───────────── */
    {
      id: "g10-rl-c67-marketstall",
      family: "G10",
      title: "The Fastest Apprentice",
      kind: "Literary · 10.RL",
      blurb: "On her first day at her aunt's watch stall, Amara learns what speed really costs.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first day at Auntie Ngozi's watch stall, Amara decided she would be the fastest apprentice the market had ever seen. " +
        N(2) + "By noon she had replaced four batteries, polished six crystals, and stacked the receipts in neat piles. " +
        N(3) + "Auntie Ngozi only watched over her reading glasses and said nothing. " +
        N(4) + "In the afternoon, a man brought in a gold wristwatch that had been his father's, and Amara reached for it before her aunt could. " +
        N(5) + "She pried the back open too quickly. " +
        N(6) + "A screw no bigger than a grain of rice leapt from the case, bounced once on the counter, and vanished. " +
        N(7) + "The stall went silent, as if every clock on the shelf had stopped to stare. " +
        N(8) + "Amara dropped to her knees and searched until her eyes burned. " +
        N(9) + "Finally Auntie Ngozi handed her a magnet on a string and showed her how to drag it slowly, in rows, across the concrete floor. " +
        N(10) + "It took forty minutes to find the screw, wedged in a crack beside a table leg. " +
        N(11) + "\"Fast,\" her aunt said, holding it up to the light, \"is what happens after careful, not instead of it.\" " +
        N(12) + "Amara finished the gold watch at closing time, the last repair of the day and the only one she was truly proud of. " +
        N(13) + "The next morning, she was the slowest apprentice the market had ever seen, and she did not mind at all." +
        "</p>",
      claims: [
        {
          id: "amara",
          sol: "10.RL.1.C",
          stem: "Sentences 1 and 2 characterize Amara as —",
          choices: [
            { letter: "A", text: "unsure whether she wants the job" },
            { letter: "B", text: "eager to prove herself through speed" },
            { letter: "C", text: "jealous of her aunt's many customers" },
            { letter: "D", text: "careful to follow every instruction" }
          ],
          correct: "B"
        },
        {
          id: "problem",
          sol: "10.RL.1.B",
          stem: "Which event creates the main problem in \"The Fastest Apprentice\"?",
          choices: [
            { letter: "A", text: "Amara opens the gold watch too fast and loses a screw." },
            { letter: "B", text: "Auntie Ngozi refuses to let Amara touch any watches." },
            { letter: "C", text: "A customer complains that his battery was not replaced." },
            { letter: "D", text: "The market closes before Amara can finish her work." }
          ],
          correct: "A"
        },
        {
          id: "stare",
          sol: "10.RL.2.A",
          stem: "In sentence 7, describing the clocks as if they had stopped to stare mainly emphasizes —",
          choices: [
            { letter: "A", text: "how loudly the clocks usually tick in the stall" },
            { letter: "B", text: "that several clocks were broken during the accident" },
            { letter: "C", text: "that customers have gathered to watch Amara work" },
            { letter: "D", text: "how large and embarrassing the mistake feels" }
          ],
          correct: "D"
        },
        {
          id: "mirror",
          sol: "10.RL.3.A",
          stem: "The final sentence echoes the wording of sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "suggest that Amara plans to quit the stall soon" },
            { letter: "B", text: "show that Auntie Ngozi has become impatient" },
            { letter: "C", text: "show how much Amara's idea of good work has changed" },
            { letter: "D", text: "remind readers that the market is very crowded" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation from Amara's first day at the stall is most ironic?",
          choices: [
            { letter: "A", text: "Rushing to save time costs her forty minutes of searching." },
            { letter: "B", text: "Her aunt wears reading glasses while watching her work." },
            { letter: "C", text: "The gold watch once belonged to the customer's father." },
            { letter: "D", text: "She polishes six crystals before the lunch hour arrives." }
          ],
          correct: "A"
        },
        {
          id: "auntie",
          sol: "10.RL.2.B",
          stem: "The tone of Auntie Ngozi's words in sentence 11 is best described as —",
          choices: [
            { letter: "A", text: "harsh and scolding" },
            { letter: "B", text: "nervous and doubtful" },
            { letter: "C", text: "silly and joking" },
            { letter: "D", text: "calm and instructive" }
          ],
          correct: "D"
        }
      ]
    },

    /* 17 ───────────── Informational · level 2 ───────────── */
    {
      id: "g10-ri-c67-magneticmap",
      family: "G10",
      title: "An Invisible Address",
      kind: "Informational · 10.RI",
      blurb: "How young loggerhead turtles may use Earth's magnetic field to cross an ocean.",
      level: 2,
      passage:
        "<p>" + N(1) + "A loggerhead hatchling that leaves a beach in the southeastern United States may not return to land for decades. " +
        N(2) + "In that time it may swim thousands of miles, circling the North Atlantic on a great loop of ocean currents. " +
        N(3) + "Straying too far north could carry it into water cold enough to kill it. " +
        N(4) + "Yet young turtles rarely make that mistake, and for years scientists wondered how a creature with no map could hold its course. " +
        N(5) + "The answer appears to lie in Earth's magnetic field. " +
        N(6) + "The field differs slightly from place to place, both in its strength and in the angle at which its lines meet the planet's surface. " +
        N(7) + "In laboratory experiments, researchers placed hatchlings in tanks surrounded by wire coils that could recreate the magnetic conditions of different locations along the ocean route. " +
        N(8) + "When the coils matched a spot near the northern edge of the loop, the hatchlings swam in the direction that would steer them back toward safer waters. " +
        N(9) + "In other words, the turtles seemed to read the field like a set of coordinates. " +
        N(10) + "The same ability may explain one of the most remarkable feats in the animal world. " +
        N(11) + "Decades later, adult females often return to nest on the same stretch of coast where they hatched. " +
        N(12) + "Some researchers suggest that each hatchling \"imprints\" on the magnetic signature of its home beach. " +
        N(13) + "This idea is still being tested, and other senses, such as smell, may also play a role. " +
        N(14) + "Even so, the evidence suggests that a turtle carries a kind of invisible address in its memory for most of its life." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "What is the main idea of the passage about loggerhead navigation?",
          choices: [
            { letter: "A", text: "Ocean currents carry young turtles wherever they need to go." },
            { letter: "B", text: "Sea turtles appear to use the magnetic field to find their way." },
            { letter: "C", text: "Adult turtles rely mostly on smell to locate their home beach." },
            { letter: "D", text: "Laboratory tanks are the safest place to raise young turtles." }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How are sentences 4 through 9 organized?",
          choices: [
            { letter: "A", text: "as a list of dangers in order of importance" },
            { letter: "B", text: "as a comparison of two kinds of sea turtles" },
            { letter: "C", text: "as a story told from a hatchling's point of view" },
            { letter: "D", text: "as a question followed by evidence that answers it" }
          ],
          correct: "D"
        },
        {
          id: "coordinates",
          sol: "10.RI.2.B",
          stem: "In sentence 9, the author compares the magnetic field to a set of coordinates mainly to —",
          choices: [
            { letter: "A", text: "show that the field gives turtles location information" },
            { letter: "B", text: "suggest that turtles can read maps drawn by scientists" },
            { letter: "C", text: "explain why the field is strongest near the equator" },
            { letter: "D", text: "argue that the experiments were poorly designed" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 12 and 13 together?",
          choices: [
            { letter: "A", text: "Scientists have proven exactly how females find home." },
            { letter: "B", text: "Smell has been ruled out as part of turtle navigation." },
            { letter: "C", text: "The imprinting idea is promising but not yet proven." },
            { letter: "D", text: "Most researchers reject the idea of magnetic imprinting." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that hatchlings can sense their location from the magnetic field?",
          choices: [
            { letter: "A", text: "Hatchlings may not return to land for decades." },
            { letter: "B", text: "Water far to the north is cold enough to kill them." },
            { letter: "C", text: "Females often nest on the coast where they hatched." },
            { letter: "D", text: "Hatchlings turned toward safety when coils matched the north." }
          ],
          correct: "D"
        },
        {
          id: "recreate",
          sol: "10.RV.1.A",
          stem: "The word recreate in sentence 7 begins with the prefix re-, as in rebuild and replay. Based on this, recreate most nearly means —",
          choices: [
            { letter: "A", text: "measure from far away" },
            { letter: "B", text: "produce again" },
            { letter: "C", text: "relax and play" },
            { letter: "D", text: "remove completely" }
          ],
          correct: "B"
        }
      ]
    },

    /* 18 ───────────── Vocabulary · level 1 ───────────── */
    {
      id: "g10-rv-c67-route6",
      family: "G10",
      title: "Learning Route 6",
      kind: "Vocabulary · 10.RV",
      blurb: "A new bus driver rides along with a veteran trainer and fills his notebook.",
      level: 1,
      passage:
        "<p>" + N(1) + "During his first week on Route 6, Teo Ramirez rode beside his trainer, Ms. Kowalczyk, who had driven city buses for twenty-two years. " +
        N(2) + "\"Riders forgive a lot,\" she told him, \"but they want you to be <strong>punctual</strong>.\" " +
        N(3) + "Arriving on time, she explained, mattered most at the train station, where riders hurried to make connections. " +
        N(4) + "At that stop, many passengers would <strong>transfer</strong> from the bus to a train, carrying their trip across from one line to another. " +
        N(5) + "By midmorning, Market Street was <strong>congested</strong>; cars, delivery vans, and bicycles packed every lane, and the bus moved only a few feet at a time. " +
        N(6) + "Ms. Kowalczyk pointed to a sign announcing road work ahead. " +
        N(7) + "\"We'll take the <strong>detour</strong>,\" she said, guiding him onto a side street that looped around the construction and rejoined the route two blocks later. " +
        N(8) + "Teo noticed that she greeted almost every rider by name. " +
        N(9) + "She was not merely polite; she was <strong>gracious</strong>, holding the bus for a man with a cane and thanking a girl who picked up a stranger's dropped glove. " +
        N(10) + "Near the end of the shift, a rider complained loudly that the bus was late. " +
        N(11) + "Ms. Kowalczyk's answer was <strong>brisk</strong> but not rude: \"Road work on Market, sir. We'll have you there in six minutes.\" " +
        N(12) + "The man nodded and sat down. " +
        N(13) + "Teo wrote her words in his notebook, along with a note to himself: be quick, be kind, be clear." +
        "</p>",
      claims: [
        {
          id: "punctual",
          sol: "10.RV.1.C",
          stem: "Which sentence best helps the reader understand the meaning of punctual in sentence 2?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "transfer",
          sol: "10.RV.1.A",
          stem: "The word transfer in sentence 4 begins with the prefix trans-, as in transport and transatlantic. The prefix trans- most nearly means —",
          choices: [
            { letter: "A", text: "across" },
            { letter: "B", text: "below" },
            { letter: "C", text: "again" },
            { letter: "D", text: "against" }
          ],
          correct: "A"
        },
        {
          id: "congested",
          sol: "10.RV.1.B",
          stem: "In sentence 5, congested most nearly means —",
          choices: [
            { letter: "A", text: "quiet and empty" },
            { letter: "B", text: "freshly paved" },
            { letter: "C", text: "overcrowded and blocked" },
            { letter: "D", text: "closed for repairs" }
          ],
          correct: "C"
        },
        {
          id: "detour",
          sol: "10.RV.1.B",
          stem: "In sentence 7, a detour is —",
          choices: [
            { letter: "A", text: "a faster lane saved for buses" },
            { letter: "B", text: "a stop where riders change lines" },
            { letter: "C", text: "a sign that warns of road work" },
            { letter: "D", text: "a different way around a problem" }
          ],
          correct: "D"
        },
        {
          id: "gracious",
          sol: "10.RV.1.D",
          stem: "The author says Ms. Kowalczyk was gracious, not merely polite. Compared with polite, gracious suggests behavior that is —",
          choices: [
            { letter: "A", text: "warm and generous beyond what is required" },
            { letter: "B", text: "formal and stiff, like following a script" },
            { letter: "C", text: "friendly only toward riders she already knows" },
            { letter: "D", text: "quick and efficient but a little cold" }
          ],
          correct: "A"
        },
        {
          id: "brisk",
          sol: "10.RV.1.D",
          stem: "In sentence 11, Ms. Kowalczyk's answer is brisk but not rude. Here, brisk suggests an answer that is —",
          choices: [
            { letter: "A", text: "long and apologetic" },
            { letter: "B", text: "angry and sharp" },
            { letter: "C", text: "quick and businesslike" },
            { letter: "D", text: "vague and confusing" }
          ],
          correct: "C"
        }
      ]
    },

    /* 19 ───────────── Paired texts · level 2 ───────────── */
    {
      id: "g10-dsr-c67-judgingday",
      family: "G10",
      title: "Judging Day",
      kind: "Paired texts · 10.DSR",
      blurb: "A debate coach makes judging a middle school tournament mandatory, and a team member replies.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Email from Coach Ferreira to the Debate Team</strong></p>" +
        "<p>" + N(1) + "Starting this season, every member of the Westfield debate team will judge at least one round at the middle school tournament in February. " +
        N(2) + "I know that sounds like extra work on top of practice, research, and four weekend tournaments. " +
        N(3) + "But judging teaches something practice cannot. " +
        N(4) + "When you sit in the judge's chair, you notice how quickly a speaker loses you with jargon, and how much a clear signpost such as \"my second point\" helps you follow along. " +
        N(5) + "Last year, the three students who volunteered to judge improved their own speaker scores more than anyone else on the team. " +
        N(6) + "The middle school program also needs us; without enough judges, it may have to shrink. " +
        N(7) + "Sign-up sheets will be posted outside Room 118 by Friday.</p>" +
        "<p><strong>Text 2 — Reply from Team Member Haruto Sato</strong></p>" +
        "<p>" + N(8) + "Coach, I like the idea, and I believe what you said about seeing our own habits from the other side. " +
        N(9) + "My problem is the date. " +
        N(10) + "The middle school tournament falls on the same Saturday as the regional jazz band festival, and six of us are in the band. " +
        N(11) + "If judging is required, we would have to choose between letting down the band and breaking a team rule. " +
        N(12) + "Could the middle school schedule judging in two shifts, morning and afternoon? " +
        N(13) + "The festival ends at noon, so the six of us could judge every afternoon round. " +
        N(14) + "That way the program gets its judges, and nobody has to pick a side.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Coach Ferreira and Haruto agree?",
          choices: [
            { letter: "A", text: "The jazz festival should be moved to another day." },
            { letter: "B", text: "The middle school program should cut its rounds." },
            { letter: "C", text: "Judging can help debaters improve their speaking." },
            { letter: "D", text: "Only volunteers should be asked to judge rounds." }
          ],
          correct: "C"
        },
        {
          id: "address",
          sol: "10.DSR.E",
          stem: "How does Text 2 respond to the plan announced in sentence 1 of Text 1?",
          choices: [
            { letter: "A", text: "It supports the goal but proposes a schedule change." },
            { letter: "B", text: "It rejects the plan as unfair to the whole team." },
            { letter: "C", text: "It asks the coach to make judging fully optional." },
            { letter: "D", text: "It argues that judging will not improve any scores." }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.DSR.E",
          stem: "Which idea becomes clear only when the coach's email and Haruto's reply are read together?",
          choices: [
            { letter: "A", text: "The team practices in Room 118 after school." },
            { letter: "B", text: "Speaker scores are the only measure of success." },
            { letter: "C", text: "The band festival will end later than planned." },
            { letter: "D", text: "The new rule creates a conflict the coach did not foresee." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The coach's email and Haruto's reply differ mainly in that the email —",
          choices: [
            { letter: "A", text: "lists the band members who cannot attend" },
            { letter: "B", text: "explains why judging matters, not when it can happen" },
            { letter: "C", text: "suggests splitting the tournament into two shifts" },
            { letter: "D", text: "admits that the rule may be impossible to follow" }
          ],
          correct: "B"
        },
        {
          id: "solution",
          sol: "10.DSR.E",
          stem: "Based on both texts, which change would most likely let the middle school program keep enough judges?",
          choices: [
            { letter: "A", text: "canceling the four weekend tournaments" },
            { letter: "B", text: "asking only last year's volunteers to judge" },
            { letter: "C", text: "moving the sign-up sheets to another room" },
            { letter: "D", text: "adding an afternoon shift for band members" }
          ],
          correct: "D"
        },
        {
          id: "signpost",
          sol: "10.RV.1.C",
          stem: "In sentence 4, the word signpost most nearly means —",
          choices: [
            { letter: "A", text: "a phrase that shows where a speech is going" },
            { letter: "B", text: "a poster announcing the tournament schedule" },
            { letter: "C", text: "a score the judge writes on the ballot" },
            { letter: "D", text: "a hand signal that tells a speaker to stop" }
          ],
          correct: "A"
        }
      ]
    },

    /* 20 ───────────── Literary · level 3 ───────────── */
    {
      id: "g10-rl-c67-sevenminutes",
      family: "G10",
      title: "Seven Minutes Fast",
      kind: "Literary · 10.RL",
      blurb: "Sione has his late grandfather's watch repaired, then wonders what was really broken.",
      level: 3,
      passage:
        "<p>" + N(1) + "The watch Sione's grandfather left him ran exactly seven minutes fast. " +
        N(2) + "It had always run that way; at family dinners, Grandpa would glance at his wrist, announce that it was nearly six, and stand up while everyone else was still passing the rice. " +
        N(3) + "After the funeral, Sione decided the least he could do was have the watch fixed. " +
        N(4) + "The repairer, a precise woman named Mrs. Albescu, opened the case under her lamp and frowned. " +
        N(5) + "\"There is nothing wrong with it,\" she said. " +
        N(6) + "\"The movement is clean, and the spring is strong. " +
        N(7) + "Someone has simply adjusted the regulator to make it gain.\" " +
        N(8) + "She turned a tiny lever with a tool as thin as an eyelash, and the second hand seemed to settle, like a dog lying down after a long walk. " +
        N(9) + "\"Now it will keep perfect time.\" " +
        N(10) + "Sione thanked her and paid, but on the bus home he kept looking at the watch, and something felt wrong. " +
        N(11) + "He remembered a summer when he was nine, running behind Grandpa toward a ferry that was already sounding its horn. " +
        N(12) + "They had made it with a minute to spare, and Grandpa, breathing hard, had tapped the watch and winked. " +
        N(13) + "\"Seven minutes,\" he had said. \"My secret.\" " +
        N(14) + "At the time, Sione had thought it was a joke about the ferry. " +
        N(15) + "Now he understood that the watch had never been broken; it had been a promise Grandpa made to himself every morning. " +
        N(16) + "That evening, Sione took a small screwdriver from the kitchen drawer, then put it back. " +
        N(17) + "Instead, he set the watch forward seven minutes by the crown, the way anyone could, and fastened it on his wrist." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "What makes Sione's visit to Mrs. Albescu ironic?",
          choices: [
            { letter: "A", text: "He takes the bus instead of walking to the shop." },
            { letter: "B", text: "Mrs. Albescu charges him far more than he expected." },
            { letter: "C", text: "The watch stops working again on his way home." },
            { letter: "D", text: "He pays to fix a flaw his grandfather chose on purpose." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed through Sione's choice at the end of the story?",
          choices: [
            { letter: "A", text: "Old possessions should be replaced once they wear out." },
            { letter: "B", text: "Honoring someone can mean keeping habits that seemed odd." },
            { letter: "C", text: "Experts always understand objects better than families do." },
            { letter: "D", text: "Being on time matters less than enjoying family dinners." }
          ],
          correct: "B"
        },
        {
          id: "ferry",
          sol: "10.RL.3.A",
          stem: "The author uses the ferry memory in sentences 11–13 mainly to —",
          choices: [
            { letter: "A", text: "reveal the reason behind the watch's seven fast minutes" },
            { letter: "B", text: "show that Grandpa was often careless about schedules" },
            { letter: "C", text: "explain how Sione first learned to repair watches" },
            { letter: "D", text: "introduce a new conflict between Sione and his family" }
          ],
          correct: "A"
        },
        {
          id: "sione",
          sol: "10.RL.1.C",
          stem: "Sentences 16–17 show that Sione —",
          choices: [
            { letter: "A", text: "regrets ever taking the watch to Mrs. Albescu" },
            { letter: "B", text: "is unsure how to wind his grandfather's watch" },
            { letter: "C", text: "carries on his grandfather's habit in his own way" },
            { letter: "D", text: "plans to return the watch to the repair shop" }
          ],
          correct: "C"
        },
        {
          id: "dog",
          sol: "10.RL.2.A",
          stem: "In sentence 8, comparing the second hand to a dog lying down after a long walk suggests that the watch —",
          choices: [
            { letter: "A", text: "has stopped running altogether" },
            { letter: "B", text: "has become calm and steady" },
            { letter: "C", text: "is tired and needs a new spring" },
            { letter: "D", text: "is restless and hard to control" }
          ],
          correct: "B"
        },
        {
          id: "turning",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Sione's understanding of the watch?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        }
      ]
    },

    /* 21 ───────────── Informational · level 1 ───────────── */
    {
      id: "g10-ri-c67-theflow",
      family: "G10",
      title: "Win the Flow",
      kind: "Informational · 10.RI",
      blurb: "What a debate judge is actually writing down during a round, and why it decides the winner.",
      level: 1,
      passage:
        "<p>" + N(1) + "To an audience member, a high school debate round can look like two teams talking very fast at each other. " +
        N(2) + "To the judge, it is a careful act of bookkeeping. " +
        N(3) + "Most judges keep a \"flow,\" a sheet of paper divided into columns, one for each speech in the round. " +
        N(4) + "As the first speaker presents an argument, the judge writes it in the first column. " +
        N(5) + "When the other team answers that argument, the judge writes the response in the next column, directly beside it, and draws an arrow between the two. " +
        N(6) + "By the end of the round, the flow shows which arguments were answered and which were dropped, meaning that the other side never responded to them. " +
        N(7) + "A dropped argument usually counts as conceded, so a team that forgets to answer a single strong point can lose even if its speakers sounded more confident. " +
        N(8) + "That is why experienced debaters say, \"Win the flow, not the room.\" " +
        N(9) + "Judges also award speaker points, usually on a scale from 25 to 30, for clarity, organization, and courtesy. " +
        N(10) + "A rude speaker may win the round on the flow but still receive low points. " +
        N(11) + "At the end, the judge writes a short ballot explaining the decision. " +
        N(12) + "Many coaches ask students to read every ballot, even from rounds they won. " +
        N(13) + "According to Coach Lorena Vidal of Pine Hollow High, ballots teach more than trophies do, because they show a team exactly what the judge heard." +
        "</p>",
      claims: [
        {
          id: "steps",
          sol: "10.RI.2.A",
          stem: "Sentences 3 through 6 are organized mainly to —",
          choices: [
            { letter: "A", text: "compare judging styles in different states" },
            { letter: "B", text: "describe step by step how a judge records a round" },
            { letter: "C", text: "argue that flows should replace speaker points" },
            { letter: "D", text: "tell the story of one judge's first tournament" }
          ],
          correct: "B"
        },
        {
          id: "bookkeeping",
          sol: "10.RI.2.B",
          stem: "In sentence 2, the author calls judging a careful act of bookkeeping mainly to emphasize that judges —",
          choices: [
            { letter: "A", text: "are paid for each round they watch" },
            { letter: "B", text: "care mostly about how fast teams speak" },
            { letter: "C", text: "often lose track of the arguments" },
            { letter: "D", text: "track every argument like accounts" }
          ],
          correct: "D"
        },
        {
          id: "saying",
          sol: "10.RI.2.B",
          stem: "The saying Win the flow, not the room in sentence 8 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "answering every argument matters more than charm" },
            { letter: "B", text: "debaters should ignore the judge and face the audience" },
            { letter: "C", text: "rounds held in small rooms are easier to win" },
            { letter: "D", text: "speaker points matter more than the final decision" }
          ],
          correct: "A"
        },
        {
          id: "strongest",
          sol: "10.RI.2.C",
          stem: "Which sentence provides the strongest evidence that a team can lose a round even while seeming more impressive?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "dropped",
          sol: "10.RI.1.B",
          stem: "According to the passage, what usually happens to an argument that is dropped?",
          choices: [
            { letter: "A", text: "The judge removes it from the flow." },
            { letter: "B", text: "It earns the speaker extra points." },
            { letter: "C", text: "The team must repeat it in the next round." },
            { letter: "D", text: "It counts as conceded by the other side." }
          ],
          correct: "D"
        },
        {
          id: "vidal",
          sol: "10.RI.1.C",
          stem: "The author includes Coach Vidal's view in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "show that Pine Hollow wins the most trophies" },
            { letter: "B", text: "support the idea that ballots help teams learn" },
            { letter: "C", text: "suggest that judges' ballots are often unfair" },
            { letter: "D", text: "explain how speaker points are calculated" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
