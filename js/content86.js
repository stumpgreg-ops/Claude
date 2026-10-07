/* SOL Labyrinth — v5.15 expansion content86: Grade 10 epic passages (Virginia G10).
 * Ten original EPIC packs (540-650 words; paired texts 280-330 each) built around volcanoes,
 * a science fair, a mechanic's garage and a radio station. Original text only; no real people.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── EPIC · Literary (level 2) ───────────────────────── */
    {
      id: "g10-rl-c86-deadair",
      family: "G10",
      title: "Dead Air",
      kind: "Literary · 10.RL",
      blurb: "A storm, a flooded road, and a board operator who has never said a word on the air.",
      level: 2,
      passage:
        "<p>" + N(1) + "For eleven months Tomas Ferreira had worked at WBRK without once saying a word into a microphone. " +
        N(2) + "He ran the soundboard for the Saturday call-in show, filed the music logs, and kept the ancient coffee maker alive, and he liked the job precisely because it let him stay on the quiet side of the glass. " +
        N(3) + "The station lived in two rooms above Kessler's Hardware on Front Street, and on most nights its signal reached about as far as the lighthouse and the county line.</p>" +
        "<p>" + N(4) + "On the night the storm came in off the bay, the power on Front Street failed at 10:15. " +
        N(5) + "The studio went black for three seconds, and then the backup generator in the alley coughed, caught, and brought the transmitter humming back to life. " +
        N(6) + "Tomas stood in the doorway of the control room, listening to the hiss of an empty channel, which in radio is called dead air and is treated like a small emergency. " +
        N(7) + "The overnight host, Mrs. Odile Barnaby, should have been sitting in the chair by then. " +
        N(8) + "Instead the studio phone rang, and her voice came through crackling: the river road had flooded below her house, and she could not get into town.</p>" +
        "<p>" + N(9) + "\"You'll have to do it,\" she said. " +
        N(10) + "\"I run the board,\" Tomas said. \"I don't talk.\" " +
        N(11) + "\"Tonight you talk,\" she said. \"The county is going to send the shelter list and the road closures to the fax machine, and half the people in this town are sitting in the dark with a battery radio and nothing else.\" " +
        N(12) + "She told him which fader to push, how close to sit, and to say the time before and after every announcement so that people who tuned in late would know the news was fresh. " +
        N(13) + "Then she said one more thing, which he would think about for a long time afterward: \"Nobody out there is grading your voice. They're listening for the information.\"</p>" +
        "<p>" + N(14) + "The fax machine groaned and pushed out a curling page. " +
        N(15) + "Tomas sat down, slid the fader up, and heard his own breathing come back to him through the headphones, enormous and ragged. " +
        N(16) + "\"It's 10:31,\" he said, and his voice cracked on the one. " +
        N(17) + "He read the list anyway: the high school gym was open as a shelter, Route 4 was closed at the creek, and anyone on oxygen at home should call the fire hall. " +
        N(18) + "When he finished, he said the time again, the way she had told him, and found that the second time it came out steadier.</p>" +
        "<p>" + N(19) + "By midnight the phone lines were lit. " +
        N(20) + "A woman on Carver Street had a generator and room for two families; a man at the marina had spotted a downed line across Pier Road; a boy who sounded about ten wanted to know if the gym allowed dogs, because he was not leaving without his. " +
        N(21) + "Tomas wrote each call on the back of a music log and read it on the air, adding the time, and somewhere in the second hour he stopped hearing his voice at all and heard only the messages moving through it. " +
        N(22) + "Around two, the county called to say that a washed-out ditch on Route 4 had been reported by three different listeners, and a crew had blocked it off before anyone drove in.</p>" +
        "<p>" + N(23) + "Mrs. Barnaby came up the stairs at six in the morning, her boots caked with mud, and found him still in the chair with a stack of scribbled pages beside him. " +
        N(24) + "She listened to him read the last update of the night, then took the headphones gently from his hands. " +
        N(25) + "\"How was it?\" she asked. " +
        N(26) + "Tomas thought about the cracked word at 10:31, and about the boy and his dog, who had both made it to the gym. " +
        N(27) + "\"Loud,\" he said, and then, after a moment, \"Useful.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the story develop through Tomas's night at the station?",
          choices: [
            { letter: "A", text: "Fear can lose its hold when a person focuses on what others need." },
            { letter: "B", text: "Small community stations cannot survive without paid professionals." },
            { letter: "C", text: "Young people should be trusted with more responsibility at work." },
            { letter: "D", text: "Storms reveal which neighbors are willing to share their supplies." }
          ],
          correct: "A"
        },
        {
          id: "call",
          sol: "10.RL.1.B",
          stem: "Mrs. Barnaby's phone call in sentence 8 functions in the plot as —",
          choices: [
            { letter: "A", text: "the resolution of the station's power problem" },
            { letter: "B", text: "a flashback that explains why Tomas joined WBRK" },
            { letter: "C", text: "the complication that forces Tomas out of his usual role" },
            { letter: "D", text: "the climax of the conflict between Tomas and the county" }
          ],
          correct: "C"
        },
        {
          id: "start",
          sol: "10.RL.1.C",
          stem: "Sentence 2 characterizes Tomas, at the start of the story, as someone who —",
          choices: [
            { letter: "A", text: "resents being given only minor tasks at the station" },
            { letter: "B", text: "is comfortable working out of the spotlight" },
            { letter: "C", text: "hopes to host his own show someday soon" },
            { letter: "D", text: "knows more about radio than the adult hosts" }
          ],
          correct: "B"
        },
        {
          id: "through",
          sol: "10.RL.2.A",
          stem: "In sentence 21, the phrase heard only the messages moving through it suggests that Tomas has come to see his voice as —",
          choices: [
            { letter: "A", text: "a talent he had been hiding from the town" },
            { letter: "B", text: "a weakness that listeners have stopped noticing" },
            { letter: "C", text: "a skill he must keep practicing every night" },
            { letter: "D", text: "a channel for other people's needs" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "Details such as the hiss of an empty channel (sentence 6) and breathing that is enormous and ragged (sentence 15) mainly create a mood of —",
          choices: [
            { letter: "A", text: "nervous suspense" },
            { letter: "B", text: "quiet boredom" },
            { letter: "C", text: "playful excitement" },
            { letter: "D", text: "bitter frustration" }
          ],
          correct: "A"
        },
        {
          id: "ditch",
          sol: "10.RL.1.B",
          stem: "The county's call in sentence 22 is important to the story mainly because it —",
          choices: [
            { letter: "A", text: "proves that Mrs. Barnaby was wrong about the river road" },
            { letter: "B", text: "shows that the broadcast had real consequences for listeners" },
            { letter: "C", text: "explains why the power on Front Street failed earlier" },
            { letter: "D", text: "introduces a new conflict that the ending leaves unsolved" }
          ],
          correct: "B"
        },
        {
          id: "useful",
          sol: "10.RL.2.C",
          stem: "The tone of Tomas's two-word answer in sentence 27 is best described as —",
          choices: [
            { letter: "A", text: "defensive and annoyed" },
            { letter: "B", text: "boastful and dramatic" },
            { letter: "C", text: "understated and quietly satisfied" },
            { letter: "D", text: "sarcastic and dismissive" }
          ],
          correct: "C"
        },
        {
          id: "recall",
          sol: "10.RL.3.A",
          stem: "Sentence 26 contributes to the ending mainly by —",
          choices: [
            { letter: "A", text: "hinting that Tomas plans to quit the station after the storm" },
            { letter: "B", text: "introducing the boy as a new character for a future story" },
            { letter: "C", text: "revealing that Tomas still feels ashamed of his first mistake" },
            { letter: "D", text: "recalling his shaky start and one caller he helped, summing up the night" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── EPIC · Literary (level 3) ───────────────────────── */
    {
      id: "g10-rl-c86-listening-test",
      family: "G10",
      title: "The Listening Test",
      kind: "Literary · 10.RL",
      blurb: "A new diagnostic scanner, a van with a sound it won't repeat, and a grandmother with a crossword.",
      level: 3,
      passage:
        "<p>" + N(1) + "The scanner was the size of a paperback and cost more than Nadia Haddad's first car, and for the three weeks since it had arrived at Haddad Auto she had carried it from bay to bay like a doctor's bag. " +
        N(2) + "Plug it into the port under the dashboard, and the car confessed: misfire on cylinder three, oxygen sensor slow to respond, a tidy list of codes that turned every mystery into a part number. " +
        N(3) + "Her grandmother, who had opened the garage decades earlier with a borrowed lift and a sign she painted herself, watched these confessions with the polite interest of someone being shown photos of a stranger's vacation.</p>" +
        "<p>" + N(4) + "On Thursday a delivery driver named Felipe Arce brought in a white van with a complaint he could not quite describe. " +
        N(5) + "\"It's a sound,\" he said, \"a kind of growl, but only sometimes, and never when I'm trying to show anyone.\" " +
        N(6) + "Nadia plugged in the scanner and waited while the little wheel spun on its screen. " +
        N(7) + "No codes. " +
        N(8) + "She cleared the memory, ran it again, and got the same clean report, as cheerful and useless as a weather app promising sun during a downpour. " +
        N(9) + "\"There's nothing wrong with it,\" she told her grandmother, who was wiping her hands on a red rag by the parts counter. " +
        N(10) + "\"There's nothing wrong with it that the box can see,\" her grandmother said.</p>" +
        "<p>" + N(11) + "Then she did something Nadia had not expected: she handed over the van keys and sat down in her folding chair with the crossword. " +
        N(12) + "\"Take it out on Mill Road,\" she said. \"Windows down. Radio off. Don't think about it, just listen.\" " +
        N(13) + "Nadia almost argued, but Mr. Arce was already looking at his watch, so she drove. " +
        N(14) + "For the first mile she heard only wind and the tick of the turn signal and her own irritation, which seemed louder than both. " +
        N(15) + "Then, on the long sweep where Mill Road bends left around the old textile plant, a low hum rose under the floor, like a refrigerator running in another room, and faded as the road straightened. " +
        N(16) + "She found an empty church lot and drove slow circles, first to the left, then to the right. " +
        N(17) + "Turning left, the hum came back every time; turning right, it vanished. " +
        N(18) + "A worn wheel bearing on the right side, loaded by the weight of the turn, would do exactly that, she realized, and the answer arrived not as a code on a screen but as something closer to recognition, as if her ears had known it a few seconds before she did.</p>" +
        "<p>" + N(19) + "Back at the garage, she put the van on the lift and spun the front right wheel by hand. " +
        N(20) + "It turned with a faint grinding roughness, gravel inside silk. " +
        N(21) + "Her grandmother came over, laid one palm against the tire, and nodded once, the way she nodded at a crossword clue she had already filled in. " +
        N(22) + "\"You knew,\" Nadia said. " +
        N(23) + "\"I guessed when he drove in,\" her grandmother said. \"Guessing isn't knowing. Now you know, and you know how you know.\"</p>" +
        "<p>" + N(24) + "Mr. Arce left with a bearing on order and a loaner car, and the afternoon went quiet. " +
        N(25) + "Nadia was coiling an air hose when her grandmother appeared beside her with the scanner, holding it carefully in both hands, like something that might spill. " +
        N(26) + "\"The new hybrids that come in,\" she said, not quite looking at Nadia, \"they hide everything behind a computer. I can hear a bearing, but I can't hear a battery module.\" " +
        N(27) + "She held the scanner out. " +
        N(28) + "\"Monday after close,\" she said. \"You'll show me.\" " +
        N(29) + "Nadia took hold of one side of it, and for a moment neither of them let go, the two of them standing in the bay under the long fluorescent lights with the tool between them.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed through both the van repair and the final scene?",
          choices: [
            { letter: "A", text: "Modern equipment will soon make older skills unnecessary." },
            { letter: "B", text: "Experience and new tools each catch what the other misses." },
            { letter: "C", text: "Customers trust a mechanic who works quickly and quietly." },
            { letter: "D", text: "Grandparents should let teenagers make their own mistakes." }
          ],
          correct: "B"
        },
        {
          id: "vacation",
          sol: "10.RL.1.C",
          stem: "The comparison at the end of sentence 3 characterizes the grandmother's attitude toward the scanner as —",
          choices: [
            { letter: "A", text: "openly hostile and rude" },
            { letter: "B", text: "secretly envious of it" },
            { letter: "C", text: "deeply confused by it" },
            { letter: "D", text: "courteous but unimpressed" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Given the first paragraph, which development in the story is most ironic?",
          choices: [
            { letter: "A", text: "The grandmother, who seemed indifferent to the scanner, asks to learn it." },
            { letter: "B", text: "Mr. Arce is in a hurry and keeps checking his watch." },
            { letter: "C", text: "The van's noise appears only on a curve of Mill Road." },
            { letter: "D", text: "The grandmother works a crossword while Nadia drives." }
          ],
          correct: "A"
        },
        {
          id: "circles",
          sol: "10.RL.1.B",
          stem: "Nadia drives slow circles in the church lot (sentences 16-17) mainly in order to —",
          choices: [
            { letter: "A", text: "use up time so Mr. Arce will accept a loaner car" },
            { letter: "B", text: "prove to her grandmother that the van has no problem" },
            { letter: "C", text: "test whether the sound depends on the direction of the turn" },
            { letter: "D", text: "calm down after arguing with her grandmother" }
          ],
          correct: "C"
        },
        {
          id: "irritation",
          sol: "10.RL.1.C",
          stem: "Sentence 14 suggests that at the start of the drive Nadia is —",
          choices: [
            { letter: "A", text: "resentful of a task she thinks is pointless" },
            { letter: "B", text: "nervous about driving a customer's van" },
            { letter: "C", text: "distracted by the noise of the turn signal" },
            { letter: "D", text: "excited to try her grandmother's method" }
          ],
          correct: "A"
        },
        {
          id: "knowing",
          sol: "10.RL.2.B",
          stem: "The grandmother's distinction between guessing and knowing in sentence 23 suggests that she most values —",
          choices: [
            { letter: "A", text: "speed in getting customers back on the road" },
            { letter: "B", text: "the respect that comes from being proven right" },
            { letter: "C", text: "a careful record of every repair the garage makes" },
            { letter: "D", text: "understanding a person reaches through her own testing" }
          ],
          correct: "D"
        },
        {
          id: "frame",
          sol: "10.RL.3.A",
          stem: "The story opens with Nadia carrying the scanner like a doctor's bag and closes with the scanner held between the two women. This framing mainly shows that the tool has —",
          choices: [
            { letter: "A", text: "proven less accurate than Nadia first believed" },
            { letter: "B", text: "become too expensive for the garage to keep" },
            { letter: "C", text: "changed from a substitute for experience to a link between them" },
            { letter: "D", text: "remained Nadia's possession despite her grandmother's interest" }
          ],
          correct: "C"
        },
        {
          id: "silk",
          sol: "10.RL.2.A",
          stem: "In sentence 20, the image gravel inside silk mainly suggests —",
          choices: [
            { letter: "A", text: "a wheel that has been painted to hide damage" },
            { letter: "B", text: "a roughness hidden within a motion that looks smooth" },
            { letter: "C", text: "a tire filled with stones from the church lot" },
            { letter: "D", text: "a sound too loud to ignore once it starts" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Informational (level 1) ───────────────────────── */
    {
      id: "g10-ri-c86-mountain-watch",
      family: "G10",
      title: "Listening to a Mountain",
      kind: "Informational · 10.RI",
      blurb: "Earthquake swarms, swelling ground and escaping gas: how scientists forecast an eruption.",
      level: 1,
      passage:
        "<p>" + N(1) + "A volcano rarely erupts without warning. " +
        N(2) + "In the weeks or months before an eruption, magma, the melted rock beneath the surface, pushes upward and changes the ground around it. " +
        N(3) + "Scientists at volcano observatories spend their careers learning to read those changes. " +
        N(4) + "Their work cannot stop an eruption, but it can give nearby communities time to prepare, and often time to leave before the danger arrives.</p>" +
        "<p><strong>Counting Small Earthquakes</strong> " + N(5) + "The most common warning sign is a swarm of small earthquakes. " +
        N(6) + "As magma forces its way through cracks in solid rock, the rock breaks and shifts, sending out vibrations. " +
        N(7) + "Most of these quakes are too weak for people to feel, so observatories place instruments called seismometers around the volcano to record them. " +
        N(8) + "A few quakes a day may be perfectly normal for a restless mountain that has rumbled on and off for centuries. " +
        N(9) + "Hundreds a day, especially if they grow shallower over time, can mean that magma is rising toward the surface.</p>" +
        "<p><strong>Measuring a Swelling Mountain</strong> " + N(10) + "Rising magma also takes up space. " +
        N(11) + "Like a balloon slowly filling with air, a volcano can swell by several centimeters as magma collects underneath it. " +
        N(12) + "That change is far too small to see by eye, but instruments called tiltmeters can detect a slope changing by a tiny fraction of a degree, even when the mountain looks exactly as it did the week before. " +
        N(13) + "Satellites help as well: by bouncing radar signals off the ground on repeated passes, they can create maps that show which areas have risen and which have sunk. " +
        N(14) + "When the ground swells and then suddenly deflates, scientists pay close attention, because the drop may mean that magma has moved somewhere new.</p>" +
        "<p><strong>Sampling the Air</strong> " + N(15) + "Magma contains dissolved gases, including water vapor, carbon dioxide, and sulfur dioxide. " +
        N(16) + "As magma nears the surface and the pressure on it decreases, these gases escape, much the way bubbles appear when a bottle of soda is opened. " +
        N(17) + "Scientists measure the gases with handheld sensors, with instruments mounted on aircraft and drones, and with stations that run day and night near the vents. " +
        N(18) + "A sharp increase in sulfur dioxide often suggests that fresh magma is close to the surface.</p>" +
        "<p><strong>Putting the Clues Together</strong> " + N(19) + "No single sign is enough to forecast an eruption with confidence. " +
        N(20) + "Earthquakes can happen when no magma is moving at all, and some volcanoes swell for years without ever erupting. " +
        N(21) + "For this reason, observatories compare all of their measurements with one another and with the known history of each volcano. " +
        N(22) + "When several signs change at once, scientists raise the alert level, which tells local officials whether to watch, prepare, or evacuate, and whether to close roads or open shelters. " +
        N(23) + "Even then, the timing is uncertain; a volcano may erupt within days or settle back into quiet for another century.</p>" +
        "<p>" + N(24) + "Forecasting has improved greatly in recent decades, and fewer people are caught by surprise than in the past, yet volcano scientists remain careful about what they promise. " +
        N(25) + "They describe their work as forecasting rather than predicting, because they speak in probabilities, not certainties, much as a weather forecaster speaks of a seventy percent chance of rain. " +
        N(26) + "An alert that ends without an eruption is not a failure. " +
        N(27) + "It is evidence that the system is doing its job: watching closely, sharing what it knows, and giving people the chance to decide before the mountain decides for them.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "What is the central idea of the article as a whole?",
          choices: [
            { letter: "A", text: "Scientists combine several kinds of measurements to forecast eruptions and warn people." },
            { letter: "B", text: "Satellites have replaced older instruments as the main way to study volcanoes." },
            { letter: "C", text: "Most volcanoes swell for many years without ever producing an eruption." },
            { letter: "D", text: "Sulfur dioxide is the most dangerous gas released by an active volcano." }
          ],
          correct: "A"
        },
        {
          id: "sections",
          sol: "10.RI.2.A",
          stem: "How is the information in sentences 5 through 18 mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of one volcano's eruption, from first quake to lava flow" },
            { letter: "B", text: "as a comparison of two observatories that use different methods" },
            { letter: "C", text: "by type of warning sign, with each sign in its own section" },
            { letter: "D", text: "as a problem followed by several rejected solutions" }
          ],
          correct: "C"
        },
        {
          id: "misleading",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that one warning sign by itself can be misleading?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "D"
        },
        {
          id: "balloon",
          sol: "10.RI.2.B",
          stem: "The author compares a volcano to a balloon in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that a volcano can burst without any warning" },
            { letter: "B", text: "help readers picture how collecting magma makes the ground rise" },
            { letter: "C", text: "suggest that volcanoes are lighter than they appear" },
            { letter: "D", text: "explain why tiltmeters must be replaced so often" }
          ],
          correct: "B"
        },
        {
          id: "deflates",
          sol: "10.RV.1.C",
          stem: "In sentence 14, the word deflates most nearly means —",
          choices: [
            { letter: "A", text: "heats up" },
            { letter: "B", text: "sinks back down" },
            { letter: "C", text: "cracks open" },
            { letter: "D", text: "shakes violently" }
          ],
          correct: "B"
        },
        {
          id: "failure",
          sol: "10.RI.1.C",
          stem: "The author includes sentences 26 and 27 mainly to —",
          choices: [
            { letter: "A", text: "argue that an alert without an eruption still shows the system working" },
            { letter: "B", text: "admit that observatories often raise alerts for no good reason" },
            { letter: "C", text: "suggest that officials should ignore low alert levels" },
            { letter: "D", text: "describe what residents should pack before an evacuation" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.RI.2.C",
          stem: "Which conclusion is best supported by sentences 21 and 25 together?",
          choices: [
            { letter: "A", text: "Volcano scientists rely more on history than on instruments." },
            { letter: "B", text: "Weather forecasting and volcano forecasting use the same tools." },
            { letter: "C", text: "Observatories rarely share their findings with local officials." },
            { letter: "D", text: "Forecasts are careful judgments drawn from combined evidence." }
          ],
          correct: "D"
        },
        {
          id: "gases",
          sol: "10.RI.1.B",
          stem: "According to the article, gases escape from magma as it nears the surface because —",
          choices: [
            { letter: "A", text: "the magma cools and hardens into rock" },
            { letter: "B", text: "drones and aircraft disturb the vents" },
            { letter: "C", text: "the pressure on the magma decreases" },
            { letter: "D", text: "earthquakes crack open the gas pockets" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Informational (level 2) ───────────────────────── */
    {
      id: "g10-ri-c86-fair-rubric",
      family: "G10",
      title: "The Notebook Counts",
      kind: "Informational · 10.RI",
      blurb: "A regional science fair rewrites its scoring sheet and finds out who it had been rewarding.",
      level: 2,
      passage:
        "<p>" + N(1) + "For most of its forty-year history, the Calloway Valley Regional Science Fair looked a lot like other fairs of its kind. " +
        N(2) + "Rows of tri-fold display boards filled the gym of the community college, each one crowned with a bold title and decorated with photos, graphs, and sometimes a blinking light. " +
        N(3) + "Judges, most of them local engineers and retired teachers, walked the aisles with clipboards and scored each project on a one-page sheet. " +
        N(4) + "The largest category on that sheet, worth thirty of a hundred points, was labeled \"Presentation.\"</p>" +
        "<p>" + N(5) + "Several years ago the fair's new coordinator, Dr. Lucia Benavides, a chemistry professor at the college, began to study the scoring sheets from the previous decade. " +
        N(6) + "She noticed a pattern that troubled her. " +
        N(7) + "Projects from the three largest high schools in the valley had won about seventy percent of the top awards, even though those schools sent fewer than half of the entries. " +
        N(8) + "When she compared the winning sheets with the others, the biggest gap was not in the quality of the experiments but in the presentation scores. " +
        N(9) + "\"We were measuring printer budgets,\" she said later. \"A student with a color printer and a parent who knew how to build a display had a head start that had nothing to do with science.\"</p>" +
        "<p>" + N(10) + "Benavides spent a year working with judges and teachers to redesign the rubric. " +
        N(11) + "The new version cut presentation to ten points and created a category, worth thirty, for the research notebook: the dated, handwritten or typed record of what a student actually did. " +
        N(12) + "Judges were trained to look for evidence of thinking, such as a changed hypothesis, a repeated trial, or a note explaining why a measurement seemed wrong. " +
        N(13) + "The rubric also added a line that surprised some veteran judges: \"Unexpected or negative results, clearly explained, are not a weakness.\" " +
        N(14) + "A few judges resigned in protest, arguing that the change rewarded messy work. " +
        N(15) + "Most stayed, and several later said the new sheet made their conversations with students more interesting, because they spent less time admiring boards and more time asking how and why.</p>" +
        "<p>" + N(16) + "The results showed up within two years. " +
        N(17) + "The share of top awards going to the three largest schools fell to about forty percent, close to their share of entries. " +
        N(18) + "Entries from the valley's smaller rural schools rose by nearly a third, which teachers credited partly to word spreading that a plain board would not sink a project. " +
        N(19) + "Perhaps the most talked-about winner was Hien Tran, a sophomore from Pike Ridge High, whose experiment on whether cinnamon slows mold growth on bread produced no clear effect at all. " +
        N(20) + "Her notebook, however, recorded every change she had made over six weeks, including the day she realized her kitchen's temperature was not constant and moved her samples into a closet. " +
        N(21) + "The judges gave her the fair's top award for scientific method.</p>" +
        "<p>" + N(22) + "Not everyone is convinced the new system is better. " +
        N(23) + "Some teachers argue that clear communication is itself a scientific skill and that the fair now undervalues it. " +
        N(24) + "Benavides does not entirely disagree; she has added a short spoken interview to the scoring so that students can explain their work without needing expensive materials. " +
        N(25) + "But she remains firm about the basic idea. " +
        N(26) + "\"A display board shows what you wanted people to see,\" she said. \"A notebook shows what actually happened. If we only reward the first one, we teach kids that science is a performance.\"</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which choice is the best summary of the article?",
          choices: [
            { letter: "A", text: "A science fair lost many judges after it lowered its standards for display boards." },
            { letter: "B", text: "A sophomore won a top award even though her mold experiment did not work." },
            { letter: "C", text: "A fair shifted its scoring from polish to process, spreading awards more fairly despite objections." },
            { letter: "D", text: "Rural schools in the valley have begun to outperform the three largest high schools." }
          ],
          correct: "C"
        },
        {
          id: "pair",
          sol: "10.RI.1.B",
          stem: "Which pair of sentences best shows that the new rubric reduced the advantage of the largest schools?",
          choices: [
            { letter: "A", text: "Sentences 7 and 17" },
            { letter: "B", text: "Sentences 4 and 11" },
            { letter: "C", text: "Sentences 14 and 15" },
            { letter: "D", text: "Sentences 18 and 21" }
          ],
          correct: "A"
        },
        {
          id: "hien",
          sol: "10.RI.1.C",
          stem: "The author includes the account of Hien Tran in sentences 19-21 mainly to —",
          choices: [
            { letter: "A", text: "show that cinnamon has no effect on how fast bread molds" },
            { letter: "B", text: "suggest that small schools now receive extra points from judges" },
            { letter: "C", text: "explain why some judges resigned after the rubric changed" },
            { letter: "D", text: "illustrate how the rubric rewards a careful process without a positive result" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "Which choice best describes the overall organization of the article?",
          choices: [
            { letter: "A", text: "a list of fair categories, each described in turn" },
            { letter: "B", text: "a problem, a solution, its results, and remaining objections" },
            { letter: "C", text: "a comparison of two fairs held in neighboring valleys" },
            { letter: "D", text: "a series of judges' opinions arranged from least to most positive" }
          ],
          correct: "B"
        },
        {
          id: "printer",
          sol: "10.RI.2.B",
          stem: "Benavides's remark We were measuring printer budgets (sentence 9) mainly emphasizes that the old sheet —",
          choices: [
            { letter: "A", text: "rewarded students' resources rather than their science" },
            { letter: "B", text: "cost the fair too much money to print each year" },
            { letter: "C", text: "required judges to check the quality of every graph" },
            { letter: "D", text: "gave no points at all for a project's display board" }
          ],
          correct: "A"
        },
        {
          id: "critics",
          sol: "10.RI.2.C",
          stem: "Which statement best describes how the article treats people who object to the new rubric?",
          choices: [
            { letter: "A", text: "It mocks them as judges who refuse to accept change." },
            { letter: "B", text: "It ignores them in order to focus on the award winners." },
            { letter: "C", text: "It states their concerns and notes a change made in response." },
            { letter: "D", text: "It agrees with them and calls for the old sheet to return." }
          ],
          correct: "C"
        },
        {
          id: "performance",
          sol: "10.RV.1.B",
          stem: "In sentence 26, Benavides contrasts a board with a notebook. In this context, the word performance most nearly means —",
          choices: [
            { letter: "A", text: "a record of measured results" },
            { letter: "B", text: "a skill improved through practice" },
            { letter: "C", text: "a test that ranks students fairly" },
            { letter: "D", text: "a show put on for an audience" }
          ],
          correct: "D"
        },
        {
          id: "except",
          sol: "10.RI.1.A",
          stem: "All of the following are changes the article says were made to the fair's scoring EXCEPT —",
          choices: [
            { letter: "A", text: "reducing presentation from thirty points to ten" },
            { letter: "B", text: "requiring every judge to be a working scientist" },
            { letter: "C", text: "creating a thirty-point category for the notebook" },
            { letter: "D", text: "adding a short spoken interview with each student" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Vocabulary (level 2) ───────────────────────── */
    {
      id: "g10-rv-c86-cinder-flats",
      family: "G10",
      title: "Cinder Flats",
      kind: "Vocabulary · 10.RV",
      blurb: "A geology class crosses an old lava field and learns how many words it takes to describe a sleeping volcano.",
      level: 2,
      passage:
        "<p>" + N(1) + "The bus left the paved road an hour after sunrise, and by the time it stopped, the twelve students in Westbrook High's earth science elective could see nothing in any direction but black rock and pale sky. " +
        N(2) + "Cinder Flats looked lifeless, a plain of broken lava that crunched underfoot like burnt toast. " +
        N(3) + "Their guide, a park geologist named Ama Mensah, waited beside a weathered sign that warned visitors, in three languages, to stay on the marked trail at all times.</p>" +
        "<p>" + N(4) + "\"Everyone wants to know if it's going to erupt,\" she said, before anyone could ask. " +
        N(5) + "\"The volcano that built this field is <strong>dormant</strong>, not dead. " +
        N(6) + "It hasn't erupted in about eight hundred years, but there's still heat down there, and it could wake up someday.\" " +
        N(7) + "She pointed to a low ridge where thin white plumes drifted into the air. " +
        N(8) + "Those were steam vents, she explained, places where rainwater that had soaked into the ground touched hot rock deep below and escaped as vapor.</p>" +
        "<p>" + N(9) + "As the group walked closer, the air turned <strong>sulfurous</strong>, sharp with the smell of rotten eggs, and Marisol Vega pulled her shirt collar over her nose. " +
        N(10) + "Near the vents, the trail narrowed to a strip of solid rock between two crusty patches stained yellow and orange. " +
        N(11) + "Ama stopped the group there. " +
        N(12) + "\"This ground looks firm, but the crust can be as thin as a cracker over boiling mud,\" she said. " +
        N(13) + "\"Walking off the path here would be truly <strong>precarious</strong>; you could break through without any warning.\" " +
        N(14) + "Nobody stepped off the trail after that, and Desmond, who had been joking at the back of the line, went very quiet and stayed close behind Ama for the rest of the climb.</p>" +
        "<p>" + N(15) + "Farther on, the students noticed something they had not expected: green. " +
        N(16) + "Tiny ferns grew in the cracks of the lava, and gray-green lichen spread across the boulders in patches the size of dinner plates, some of them older, Ama said, than the oldest building in their town. " +
        N(17) + "\"Lichen is about as <strong>tenacious</strong> as life gets,\" Ama said, crouching beside one. " +
        N(18) + "\"It clings to bare rock through heat, cold, and drought, and it slowly breaks the rock down into the first soil. " +
        N(19) + "Everything else here grows because lichen held on first.\"</p>" +
        "<p>" + N(20) + "At the top of the ridge, she showed them a shallow pool of rainwater that had collected in a hollow of the rock. " +
        N(21) + "Small shrimp-like creatures, each no longer than a grain of rice, darted back and forth through it. " +
        N(22) + "\"In a week, this pool will be gone,\" she said. " +
        N(23) + "\"These animals live <strong>ephemeral</strong> lives, hatching after a storm and laying eggs before the water dries. " +
        N(24) + "The eggs can wait in the dust for years until the next rain.\" " +
        N(25) + "Marisol knelt to photograph the pool, suddenly aware that no one would ever see that particular puddle, or those particular creatures, again.</p>" +
        "<p>" + N(26) + "On the walk back, Desmond asked Ama whether her job ever got boring, since the volcano never seemed to do anything at all. " +
        N(27) + "She laughed. " +
        N(28) + "\"My job is to be <strong>vigilant</strong>,\" she said. " +
        N(29) + "\"Every week I check the temperature of these vents and the gases they give off. " +
        N(30) + "If something changes, even a little, I want to be the first person to notice, not the last.\" " +
        N(31) + "By the time the bus pulled away, the field no longer looked lifeless to anyone. " +
        N(32) + "It looked like a place that was waiting, and being watched.</p>",
      claims: [
        {
          id: "dormant",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentences 5-6 best helps the reader understand the meaning of dormant?",
          choices: [
            { letter: "A", text: "The volcano that built this field" },
            { letter: "B", text: "but there's still heat down there" },
            { letter: "C", text: "Everyone wants to know" },
            { letter: "D", text: "about eight hundred" }
          ],
          correct: "B"
        },
        {
          id: "precarious",
          sol: "10.RV.1.B",
          stem: "In sentence 13, the word precarious most nearly means —",
          choices: [
            { letter: "A", text: "against park rules" },
            { letter: "B", text: "slow and tiring" },
            { letter: "C", text: "hot and smelly" },
            { letter: "D", text: "dangerously unstable" }
          ],
          correct: "D"
        },
        {
          id: "tenacious",
          sol: "10.RV.1.D",
          stem: "Ama calls lichen tenacious rather than stubborn. Compared with stubborn, the word tenacious suggests a quality that is —",
          choices: [
            { letter: "A", text: "persistent in an admirable way" },
            { letter: "B", text: "unreasonable and difficult" },
            { letter: "C", text: "weak and easily damaged" },
            { letter: "D", text: "rare and hard to locate" }
          ],
          correct: "A"
        },
        {
          id: "ephemeral",
          sol: "10.RV.1.A",
          stem: "The word ephemeral comes from Greek roots meaning \"lasting only a day.\" Based on this root and sentences 22-24, ephemeral lives are —",
          choices: [
            { letter: "A", text: "lived underground" },
            { letter: "B", text: "spent in large groups" },
            { letter: "C", text: "very short in length" },
            { letter: "D", text: "active only at night" }
          ],
          correct: "C"
        },
        {
          id: "vigilant",
          sol: "10.RV.1.A",
          stem: "The word vigilant shares a root with vigil, a time of staying awake to keep watch. Based on this, being vigilant (sentence 28) means being —",
          choices: [
            { letter: "A", text: "patient and calm" },
            { letter: "B", text: "watchful and alert" },
            { letter: "C", text: "brave and daring" },
            { letter: "D", text: "tired and bored" }
          ],
          correct: "B"
        },
        {
          id: "sulfurous",
          sol: "10.RV.1.C",
          stem: "Which detail from sentence 9 best helps a reader understand the word sulfurous?",
          choices: [
            { letter: "A", text: "sharp with the smell of rotten eggs" },
            { letter: "B", text: "As the group walked closer" },
            { letter: "C", text: "Marisol Vega pulled her shirt collar" },
            { letter: "D", text: "the air turned" }
          ],
          correct: "A"
        },
        {
          id: "toast",
          sol: "10.RV.1.B",
          stem: "In sentence 2, saying the lava crunched underfoot like burnt toast most nearly means that the lava is —",
          choices: [
            { letter: "A", text: "still warm from a recent eruption" },
            { letter: "B", text: "soft enough to leave footprints" },
            { letter: "C", text: "brittle and broken into rough pieces" },
            { letter: "D", text: "covered with a thin layer of ash" }
          ],
          correct: "C"
        },
        {
          id: "waiting",
          sol: "10.RL.3.A",
          stem: "Sentences 31-32 relate to sentence 2 mainly by —",
          choices: [
            { letter: "A", text: "repeating the warning that the volcano will erupt soon" },
            { letter: "B", text: "explaining why the bus had to leave so early" },
            { letter: "C", text: "showing that the students were bored by the end" },
            { letter: "D", text: "reversing the students' first impression of the field" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── EPIC · Paired texts (level 3) ───────────────────────── */
    {
      id: "g10-dsr-c86-overnight",
      family: "G10",
      title: "Who Is Awake at 2 A.M.",
      kind: "Paired texts · 10.DSR",
      blurb: "A station manager's memo on automating the overnight hours, and a volunteer host's reply.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Memo to KVLR Volunteers from Station Manager Corinne Dube</strong></p>" +
        "<p>" + N(1) + "Beginning March 1, KVLR will replace its live overnight block, midnight to 6 a.m., with an automated playlist and recorded station announcements. " +
        N(2) + "I know this decision will disappoint some of our volunteers, so I want to explain the reasons as plainly and completely as I can. " +
        N(3) + "Over the past year, our overnight hours have drawn an average of about forty listeners at any moment, compared with more than nine hundred during the morning show, according to our listener survey and streaming data. " +
        N(4) + "Yet the overnight block costs nearly as much as the morning show to run, because the building must be heated, staffed with a second person for safety, and kept open while almost no one is listening. " +
        N(5) + "Our budget fell by eleven percent this year after a regional grant ended, and the board has asked every department to find real savings before the next fiscal year begins. " +
        N(6) + "Automation will save roughly fourteen thousand dollars a year, enough to keep our youth journalism program, which trains forty students each summer and has sent several graduates on to college radio. " +
        N(7) + "I want to be clear about what this change does not mean. " +
        N(8) + "KVLR will not go silent overnight; the automated system will play music chosen by our volunteers, and it can broadcast emergency alerts from the county the instant they are issued. " +
        N(9) + "Volunteers who currently host overnight shows will be offered slots on weekend afternoons, where their work will reach far more people and where a second staff member is already on site. " +
        N(10) + "Change is never easy at a station that was built by its community, but I believe this one protects the programs that serve the most listeners. " +
        N(11) + "My door is open to anyone who wants to discuss it.</p>" +
        "<p><strong>Text 2 — Letter to the KVLR Board from Overnight Host Augustin Pereira</strong></p>" +
        "<p>" + N(12) + "I have hosted the 2 a.m. hour at KVLR for nine years, and I have read Ms. Dube's memo carefully, twice, before writing this letter. " +
        N(13) + "Her numbers are correct, and I do not doubt that the budget is tight. " +
        N(14) + "But forty listeners at 2 a.m. are not the same as forty people who could be listening to anything at all. " +
        N(15) + "Many of my callers are nurses on break, truck drivers crossing the valley, bakers starting the morning's bread, and people who cannot sleep and do not want to be alone in a quiet house. " +
        N(16) + "They call to request songs, but just as often they call to tell me the fog is thick on the pass or that the power is out on Elm Street, or that a deer is standing in the road near the reservoir. " +
        N(17) + "Last winter, when the ice storm took down the phone lines in Garnet, it was a caller on a cell phone who told me the shelter at the church had lost its heat, and I put that on the air within a minute. " +
        N(18) + "An automated system can play a county alert, but it cannot hear a listener report a problem the county does not know about yet, and it cannot pass that problem on to everyone else who is listening. " +
        N(19) + "I am grateful for the offer of a weekend slot, and I may well accept it. " +
        N(20) + "Still, I ask the board to consider a compromise before March: keep one live overnight host three nights a week during the coldest months, and let volunteers share those shifts without pay. " +
        N(21) + "A station that belongs to its community should be awake when its community is, especially on the nights when its community needs it most.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Dube and Pereira agree?",
          choices: [
            { letter: "A", text: "Overnight listeners deserve more programs than morning listeners." },
            { letter: "B", text: "Volunteers should be paid for working overnight shifts." },
            { letter: "C", text: "The youth journalism program should be ended to save money." },
            { letter: "D", text: "The station's money problem is real and must be addressed." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference in the kinds of evidence the two writers rely on?",
          choices: [
            { letter: "A", text: "Dube relies on audience counts and costs; Pereira relies on specific listener experiences." },
            { letter: "B", text: "Dube relies on listener stories; Pereira relies on the station's yearly budget." },
            { letter: "C", text: "Dube quotes the county; Pereira quotes other volunteers who agree with him." },
            { letter: "D", text: "Dube compares KVLR to other stations; Pereira compares it to his past jobs." }
          ],
          correct: "A"
        },
        {
          id: "alerts",
          sol: "10.DSR.E",
          stem: "How does Text 2 respond to the assurance about emergency alerts in sentence 8 of Text 1?",
          choices: [
            { letter: "A", text: "It argues that county alerts are usually issued too late to help." },
            { letter: "B", text: "It accepts the assurance and drops the subject of emergencies." },
            { letter: "C", text: "It points out that automation cannot take in reports from listeners." },
            { letter: "D", text: "It claims the automated system will fail during power outages." }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "10.DSR.D",
          stem: "Which sentence from Text 2 best supports Pereira's view that overnight listeners supply information, not only an audience?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "10.RI.2.B",
          stem: "In Text 1, Dube closes with My door is open (sentence 11) mainly to —",
          choices: [
            { letter: "A", text: "signal that she is willing to hear objections" },
            { letter: "B", text: "suggest that the decision may still be reversed" },
            { letter: "C", text: "remind volunteers that the building stays unlocked" },
            { letter: "D", text: "hint that she disagrees with the board's request" }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "10.RI.2.C",
          stem: "Pereira states in sentence 13 that Dube's numbers are correct mainly in order to —",
          choices: [
            { letter: "A", text: "show that he has given up on changing the decision" },
            { letter: "B", text: "prove that the board has made an error in its budget" },
            { letter: "C", text: "suggest that Dube hid other numbers from volunteers" },
            { letter: "D", text: "build credibility by granting a point before he disagrees" }
          ],
          correct: "D"
        },
        {
          id: "compromise",
          sol: "10.DSR.E",
          stem: "Using both texts, which plan would most likely address the main concerns of both writers?",
          choices: [
            { letter: "A", text: "Keeping all six live overnight hours and canceling the morning show" },
            { letter: "B", text: "A few unpaid live shifts in winter, with automation at other times" },
            { letter: "C", text: "Moving every volunteer to weekend afternoons and ending alerts" },
            { letter: "D", text: "Raising the youth program's fees so overnight hosts can be paid" }
          ],
          correct: "B"
        },
        {
          id: "claim2",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central claim of Text 2?",
          choices: [
            { letter: "A", text: "Weekend afternoon shows reach more listeners than overnight shows do." },
            { letter: "B", text: "Overnight hosts fill a safety role automation cannot, so some should stay." },
            { letter: "C", text: "The station manager has misread the size of the overnight audience." },
            { letter: "D", text: "Truck drivers and nurses are the station's most loyal listeners." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Paired texts (level 1) ───────────────────────── */
    {
      id: "g10-dsr-c86-lahar",
      family: "G10",
      title: "Walk, Don't Run, Uphill",
      kind: "Paired texts · 10.DSR",
      blurb: "A science article on volcanic mudflows and a sophomore's account of her town's yearly drill.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Rivers of Mud</strong></p>" +
        "<p>" + N(1) + "When people imagine the danger from a volcano, they usually picture glowing rivers of lava. " +
        N(2) + "For many towns near tall, snow-covered volcanoes, however, the greater threat is a lahar, a word that comes from Indonesia, where such flows are common. " +
        N(3) + "A lahar is a fast-moving flow of mud, rock, and water that pours down a volcano's slopes and into the river valleys below. " +
        N(4) + "It can form when an eruption melts snow and ice near the summit, or when heavy rain loosens ash and rock left by earlier eruptions. " +
        N(5) + "Some lahars even start without any eruption at all, when a weakened slope simply collapses. " +
        N(6) + "A lahar can look like wet concrete rolling downhill, and it can carry boulders, trees, and even bridges along with it. " +
        N(7) + "In steep valleys, the largest lahars can travel faster than a car on a highway, far too fast for anyone to outrun on foot. " +
        N(8) + "Because they follow river channels, lahars can reach towns many miles from the volcano itself, places where residents may never see the summit erupt. " +
        N(9) + "Once a lahar slows down and stops, it can harden into a thick layer of material, burying roads, fields, and houses in its path. " +
        N(10) + "Scientists cannot prevent lahars, but they can give warning. " +
        N(11) + "In some valleys, sensors buried along the riverbanks detect the deep rumbling and ground shaking that a lahar creates as it moves. " +
        N(12) + "When the sensors are triggered, sirens sound in the towns downstream, and messages go out to phones and radio stations. " +
        N(13) + "Residents may have less than an hour to move to higher ground, so the most important part of a warning system is not the sensors but the people who know what to do when they hear the alarm.</p>" +
        "<p><strong>Text 2 — Drill Day, by Rosa Quintero, Silver Fork High School</strong></p>" +
        "<p>" + N(14) + "The siren at Silver Fork High sounds different from a fire alarm, lower and longer, like a ship's horn. " +
        N(15) + "We hear it once a year, on the morning of the lahar drill, and every student in town knows what it means: walk, don't run, uphill. " +
        N(16) + "This year I timed our class. " +
        N(17) + "From the moment the siren started to the moment we reached the soccer field at the top of Ridge Road, it took us twenty-two minutes, and that was with nobody falling behind. " +
        N(18) + "Our teacher, Mr. Abernathy, told us that a large lahar from the mountain would take about forty minutes to reach the valley floor. " +
        N(19) + "That sounds like plenty of time, until you remember the kids who stop at their lockers, the traffic on Main Street, and the people who think the siren is only a test. " +
        N(20) + "Last year a few students did not take the drill seriously and wandered up the hill laughing and taking selfies, as if it were a field trip. " +
        N(21) + "This year, the school showed us photographs of a valley where a lahar had buried a town in mud up to the rooftops, and nobody laughed. " +
        N(22) + "My grandmother says that when she was my age there was no siren at all and no drill. " +
        N(23) + "People in the valley simply did not know that the mountain could reach them from so far away. " +
        N(24) + "Now my little brother's elementary school practices the walk too, with the youngest kids holding a rope so nobody gets lost. " +
        N(25) + "I used to think the drill was an excuse to miss first period. " +
        N(26) + "Now I think it is the most practical thing we learn all year, even if it is never on a test.</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          stem: "Which idea is found in both Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Lahars move more slowly than most people expect." },
            { letter: "B", text: "Sirens have made lahars far less common than before." },
            { letter: "C", text: "Lahars can threaten towns that are far from the volcano." },
            { letter: "D", text: "Lava is the greatest danger to towns in river valleys." }
          ],
          correct: "C"
        },
        {
          id: "illustrate",
          sol: "10.DSR.E",
          stem: "How does Text 2 illustrate the claim in sentence 13 of Text 1?",
          choices: [
            { letter: "A", text: "It shows people practicing what to do when the siren sounds." },
            { letter: "B", text: "It explains how sensors along the river detect shaking." },
            { letter: "C", text: "It describes a lahar that buried part of Silver Fork." },
            { letter: "D", text: "It argues that the sirens should be louder and longer." }
          ],
          correct: "A"
        },
        {
          id: "main1",
          sol: "10.RI.1.A",
          stem: "What is the main idea of Text 1?",
          choices: [
            { letter: "A", text: "Lahars form only when an eruption melts snow on a summit." },
            { letter: "B", text: "Lava flows cause more damage than any other volcanic hazard." },
            { letter: "C", text: "Towns should not be built in river valleys near volcanoes." },
            { letter: "D", text: "Lahars are fast, far-reaching mudflows, and warnings help people escape." }
          ],
          correct: "D"
        },
        {
          id: "order1",
          sol: "10.RI.2.A",
          stem: "Which choice best describes how Text 1 is organized?",
          choices: [
            { letter: "A", text: "It tells the story of one lahar from start to finish." },
            { letter: "B", text: "It explains what lahars are and then how warnings work." },
            { letter: "C", text: "It compares lahars with lava flows point by point." },
            { letter: "D", text: "It lists the steps residents take during an evacuation." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "How does Text 2 mainly differ from Text 1 in the way it presents information about lahars?",
          choices: [
            { letter: "A", text: "Text 2 uses one student's experience; Text 1 gives a general explanation." },
            { letter: "B", text: "Text 2 gives scientific data; Text 1 relies on personal memories." },
            { letter: "C", text: "Text 2 describes lahar sensors; Text 1 describes school drills." },
            { letter: "D", text: "Text 2 argues against drills; Text 1 argues in favor of them." }
          ],
          correct: "A"
        },
        {
          id: "minutes",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 2 best explains why twenty-two minutes might not be fast enough in a real emergency?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 24" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "Using both texts, a reader can best conclude that the yearly drill matters mainly because —",
          choices: [
            { letter: "A", text: "the sensors along the river often fail to detect a lahar" },
            { letter: "B", text: "students need a reason to miss first period once a year" },
            { letter: "C", text: "a warning helps only if people respond quickly and correctly" },
            { letter: "D", text: "lahars in Silver Fork happen several times each decade" }
          ],
          correct: "C"
        },
        {
          id: "grandma",
          sol: "10.RI.1.C",
          stem: "Rosa includes her grandmother's memory in sentences 22-23 mainly to —",
          choices: [
            { letter: "A", text: "prove that lahars were more common in the past" },
            { letter: "B", text: "show how people's awareness of the danger has changed" },
            { letter: "C", text: "suggest that older residents ignore the siren today" },
            { letter: "D", text: "explain why her brother's school uses a rope" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Drama (level 3) ───────────────────────── */
    {
      id: "g10-rl-c86-okoro-auto",
      family: "G10",
      title: "Okoro Auto",
      kind: "Drama · 10.RL",
      blurb: "A brother, a sister, a buyout offer, and the faded sign over the bay door.",
      level: 3,
      passage:
        "<p><em>" + N(1) + "A small two-bay garage at closing time, its walls crowded with old calendars and hanging fan belts. " +
        N(2) + "SAM OKORO, seventeen, in grease-stained coveralls, wipes down a row of wrenches. " +
        N(3) + "His sister JUNE, twenty-four, in a blazer, stands by the office door holding a folder.</em></p>" +
        "<p><strong>JUNE:</strong> " + N(4) + "The offer is good, Sam. " + N(5) + "Better than good. " +
        N(6) + "The Pit Row chain wants this lot for a drive-through oil change, and they'll pay enough to cover Dad's surgery bills with some left over for his physical therapy.</p>" +
        "<p><strong>SAM:</strong> <em>(not looking up)</em> " + N(7) + "Dad hasn't signed anything.</p>" +
        "<p><strong>JUNE:</strong> " + N(8) + "Dad can't stand up long enough to sign anything. " + N(9) + "That's the point. " +
        N(10) + "The doctor said six months before he can lift so much as a tire, and you can't run this place alone while you're finishing your senior year and studying for exams.</p>" +
        "<p><strong>SAM:</strong> " + N(11) + "I've been running it alone for three weeks, and nobody's car has come back.</p>" +
        "<p><strong>JUNE:</strong> " + N(12) + "You've been keeping the lights on for three weeks. " + N(13) + "It's not the same. " +
        "<em>(She opens the folder.)</em> " + N(14) + "I went through the books last night. " +
        N(15) + "Parts orders are late, two invoices were never sent, and the insurance renewal is due Friday, and nobody has even opened the envelope.</p>" +
        "<p><strong>SAM:</strong> " + N(16) + "I fix cars, June. " + N(17) + "I don't do paperwork.</p>" +
        "<p><strong>JUNE:</strong> " + N(18) + "Then who does?</p>" +
        "<p><em>" + N(19) + "A car horn sounds outside, and MRS. DELGADO, seventy, enters carrying a covered dish.</em></p>" +
        "<p><strong>MRS. DELGADO:</strong> " + N(20) + "Samuel, she's making that noise again, the one like a spoon caught in a blender.</p>" +
        "<p><strong>SAM:</strong> " + N(21) + "That's your heat shield, Mrs. Delgado. " + N(22) + "I told you last time it was coming loose. " +
        N(23) + "Leave it overnight and I'll have it bolted down by eight, before you finish your coffee.</p>" +
        "<p><strong>MRS. DELGADO:</strong> <em>(handing him the dish)</em> " + N(24) + "Rice and beans for your father. " +
        N(25) + "Tell him the whole street is asking about him. " + "<em>(She notices June.)</em> " + N(26) + "June! " +
        N(27) + "Look at you, all grown up and dressed for court. " + N(28) + "Are you still the one who painted that sign?</p>" +
        "<p><em>" + N(29) + "She points above the bay door, where a faded, hand-lettered sign reads OKORO AUTO, with a child's red handprint in one corner.</em></p>" +
        "<p><strong>JUNE:</strong> <em>(quietly)</em> " + N(30) + "I was eight. " + N(31) + "Dad let me pick the color.</p>" +
        "<p><strong>MRS. DELGADO:</strong> " + N(32) + "Twenty years I've been bringing that car here, and nobody else is allowed to touch it, not even my nephew, who calls himself a mechanic. <em>(She exits.)</em></p>" +
        "<p><em>" + N(33) + "A pause. JUNE looks up at the sign, then down at the folder.</em></p>" +
        "<p><strong>SAM:</strong> " + N(34) + "You see? " + N(35) + "That's why I can't sell it.</p>" +
        "<p><strong>JUNE:</strong> " + N(36) + "That's why I wanted to sell it. " +
        N(37) + "Every time I came home I saw how tired he was, and how the bills kept piling up on that desk, and how he pretended they didn't worry him. " +
        N(38) + "I thought selling would be the kind thing to do for him.</p>" +
        "<p><strong>SAM:</strong> " + N(39) + "Maybe it is. " + N(40) + "I don't know. " +
        N(41) + "But I know the cars, and I know which customers pay late and which ones bring dinner, and Mrs. Delgado knows me, and that's not nothing.</p>" +
        "<p><strong>JUNE:</strong> <em>(after a moment, closing the folder)</em> " + N(42) + "Six months. " +
        N(43) + "I'll do the books on weekends from my apartment, and you send every invoice the same day you finish a job, no excuses. " +
        N(44) + "If we're still losing money in the spring, we take the offer to Dad together.</p>" +
        "<p><strong>SAM:</strong> " + N(45) + "Together. " + "<em>(He holds out a clean rag.)</em> " + N(46) + "Deal?</p>" +
        "<p><strong>JUNE:</strong> <em>(taking the rag and wiping a smudge of grease from her own sleeve)</em> " + N(47) + "You already got me dirty. " + N(48) + "Deal.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of the scene is best described as a disagreement over —",
          choices: [
            { letter: "A", text: "who should care for their father after his surgery" },
            { letter: "B", text: "whether to sell the family garage while their father recovers" },
            { letter: "C", text: "how to repair Mrs. Delgado's car before morning" },
            { letter: "D", text: "whether June should move back home from the city" }
          ],
          correct: "B"
        },
        {
          id: "books",
          sol: "10.RL.1.C",
          stem: "June's lines in sentences 12-15 characterize her as —",
          choices: [
            { letter: "A", text: "jealous of the attention Sam receives" },
            { letter: "B", text: "uninterested in the family business" },
            { letter: "C", text: "eager to embarrass her younger brother" },
            { letter: "D", text: "practical and alert to problems Sam overlooks" }
          ],
          correct: "D"
        },
        {
          id: "delgado",
          sol: "10.RL.3.A",
          stem: "Mrs. Delgado's visit (sentences 19-32) contributes to the scene mainly by —",
          choices: [
            { letter: "A", text: "showing Sam's skill and reminding June of her own tie to the garage" },
            { letter: "B", text: "introducing a new problem that the siblings fail to solve" },
            { letter: "C", text: "proving that the garage has more customers than June believed" },
            { letter: "D", text: "providing comic relief that has no effect on the siblings' choice" }
          ],
          correct: "A"
        },
        {
          id: "same",
          sol: "10.RL.2.C",
          stem: "What makes June's reply in sentence 36 ironic?",
          choices: [
            { letter: "A", text: "She has never actually been inside the garage." },
            { letter: "B", text: "She secretly wants to buy the garage herself." },
            { letter: "C", text: "She draws the opposite conclusion from the same feelings as Sam." },
            { letter: "D", text: "She has already signed the offer without telling him." }
          ],
          correct: "C"
        },
        {
          id: "spoon",
          sol: "10.RL.2.A",
          stem: "Mrs. Delgado's comparison of the noise to a spoon caught in a blender (sentence 20) mainly conveys —",
          choices: [
            { letter: "A", text: "her fear that the car is about to break down for good" },
            { letter: "B", text: "a harsh metal rattle described in everyday terms" },
            { letter: "C", text: "her wish to cook for the Okoro family more often" },
            { letter: "D", text: "her belief that Sam caused the problem on her last visit" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best developed by the way the scene is resolved?",
          choices: [
            { letter: "A", text: "Shared responsibility can turn a family conflict into a partnership." },
            { letter: "B", text: "Older siblings usually know what is best for younger ones." },
            { letter: "C", text: "Loyal customers matter more to a business than its finances." },
            { letter: "D", text: "Childhood memories should guide every important decision." }
          ],
          correct: "A"
        },
        {
          id: "handprint",
          sol: "10.RL.2.B",
          stem: "The stage direction in sentence 29, with its faded sign and child's red handprint, mainly suggests that —",
          choices: [
            { letter: "A", text: "the garage needs repairs that June plans to pay for" },
            { letter: "B", text: "Sam is embarrassed by how old the building looks" },
            { letter: "C", text: "Mrs. Delgado has confused June with someone else" },
            { letter: "D", text: "June's connection to the garage goes back to childhood" }
          ],
          correct: "D"
        },
        {
          id: "rag",
          sol: "10.RL.1.C",
          stem: "June's response to the clean rag in sentences 46-48 mainly shows that she —",
          choices: [
            { letter: "A", text: "is annoyed that Sam ruined her blazer" },
            { letter: "B", text: "still plans to sell the garage in secret" },
            { letter: "C", text: "accepts a share in the garage's work" },
            { letter: "D", text: "wants Sam to admit that she was right" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Functional text (level 1) ───────────────────────── */
    {
      id: "g10-ri-c86-expo-guide",
      family: "G10",
      title: "Science Expo Entry Guide",
      kind: "Functional text · 10.RI",
      blurb: "Deadlines, table rules, the judging rubric and the awards for a county science expo.",
      level: 1,
      passage:
        "<p><strong>Harmon County Student Science Expo: Entry Guide for High School Students</strong></p>" +
        "<p>" + N(1) + "The Harmon County Student Science Expo is open to all students in grades 9 through 12 who attend public, private, or home schools in the county. " +
        N(2) + "This guide explains how to enter, what to bring, and how projects will be judged and recognized. " +
        N(3) + "Please read it completely before you begin your project, because several rules have changed since last year.</p>" +
        "<p><strong>Key Dates</strong> " + N(4) + "Online registration opens January 6 and closes at 5:00 p.m. on February 14. " +
        N(5) + "Students who plan to use live animals, human volunteers, or hazardous chemicals must submit a Safety Approval Form by January 31, two weeks before the general deadline. " +
        N(6) + "Projects that require approval but do not have it will not be allowed on the Expo floor, even if the student has already finished the experiment. " +
        N(7) + "The Expo itself takes place on Saturday, March 8, in the Harmon Community College gymnasium, with setup from 7:00 to 8:30 a.m. and judging from 9:00 a.m. to noon.</p>" +
        "<p><strong>Who May Enter</strong> " + N(8) + "Students may enter alone or in teams of up to three. " +
        N(9) + "Each student may appear on only one project. " +
        N(10) + "Team projects are judged in a separate category so that individual entrants do not compete directly against groups. " +
        N(11) + "Every project must have an adult sponsor, such as a teacher, parent, or mentor, who signs the registration form and agrees to review the project's safety plan before any testing begins.</p>" +
        "<p><strong>What to Bring</strong> " + N(12) + "Each entrant receives a table space six feet wide; displays may not extend beyond the table or stand taller than four feet. " +
        N(13) + "Bring your research notebook, which judges will read, and a one-page abstract summarizing your question, method, and results in plain language that any visitor could understand. " +
        N(14) + "Laptops and tablets are permitted, but the Expo cannot guarantee access to electrical outlets, so charge all devices fully in advance and bring printed copies of any important charts. " +
        N(15) + "Do not bring open flames, glass containers of liquid, or any living organism other than plants. " +
        N(16) + "Photographs of animals or volunteers may be displayed only if the project's Safety Approval Form was accepted.</p>" +
        "<p><strong>How Projects Are Judged</strong> " + N(17) + "Each project is reviewed by at least two judges using a 100-point rubric. " +
        N(18) + "The research notebook counts for 30 points, the experimental design for 25, the analysis of results for 20, the student interview for 15, and the display for 10. " +
        N(19) + "Judges will spend about ten minutes at each table and will ask every team member at least one question, so each member should be ready to explain any part of the project. " +
        N(20) + "Projects with unexpected or inconclusive results are eligible for every award; judges are instructed to reward clear reasoning, not only successful outcomes.</p>" +
        "<p><strong>Awards</strong> " + N(21) + "First, second, and third places are awarded in each of six categories: life science, physical science, earth and space science, engineering, computer science, and team projects. " +
        N(22) + "The top two individual projects overall advance to the state fair in April, and the Expo will pay their registration fees and travel costs. " +
        N(23) + "Teams are not eligible to advance this year because the state fair has paused its team division.</p>" +
        "<p><strong>Questions</strong> " + N(24) + "Contact the Expo coordinator at the county schools office, or ask your sponsor for help with any rule that is unclear. " +
        N(25) + "Late registrations will not be accepted for any reason, including computer problems, so plan ahead and register early.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The guide is intended mainly for —",
          choices: [
            { letter: "A", text: "high school students in the county who plan to enter the Expo" },
            { letter: "B", text: "judges who need training on how to use the rubric" },
            { letter: "C", text: "parents who want to volunteer at the college gym" },
            { letter: "D", text: "state fair officials choosing which projects advance" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "How do the bold headings in the guide help a reader?",
          choices: [
            { letter: "A", text: "They show which rules are new this year." },
            { letter: "B", text: "They list the rules from most to least important." },
            { letter: "C", text: "They let a reader find one topic quickly." },
            { letter: "D", text: "They separate rules for teams from rules for individuals." }
          ],
          correct: "C"
        },
        {
          id: "deadline",
          sol: "10.RI.1.B",
          stem: "According to the guide, a student whose project uses human volunteers must turn in a Safety Approval Form by —",
          choices: [
            { letter: "A", text: "January 6" },
            { letter: "B", text: "January 31" },
            { letter: "C", text: "February 14" },
            { letter: "D", text: "March 8" }
          ],
          correct: "B"
        },
        {
          id: "goldfish",
          sol: "10.RI.2.C",
          stem: "Based on the guide, which display would most likely be turned away on Expo day?",
          choices: [
            { letter: "A", text: "a potted bean plant from a study of light and growth" },
            { letter: "B", text: "a laptop showing a coding project, charged the night before" },
            { letter: "C", text: "a five-foot-wide board with graphs and a printed abstract" },
            { letter: "D", text: "a live goldfish in a glass bowl from a study of feeding times" }
          ],
          correct: "D"
        },
        {
          id: "unexpected",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that a project can win an award even if its hypothesis was not confirmed?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "C"
        },
        {
          id: "inconclusive",
          sol: "10.RV.1.C",
          stem: "In sentence 20, the word inconclusive most nearly means —",
          choices: [
            { letter: "A", text: "not leading to a clear answer" },
            { letter: "B", text: "finished after the deadline" },
            { letter: "C", text: "copied from another project" },
            { letter: "D", text: "too dangerous to display" }
          ],
          correct: "A"
        },
        {
          id: "teams",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the guide's rules about team projects?",
          choices: [
            { letter: "A", text: "Teams may have any number of members if a sponsor approves." },
            { letter: "B", text: "Teams compete directly against individuals for the top awards." },
            { letter: "C", text: "Teams receive extra table space and a longer interview." },
            { letter: "D", text: "Teams of up to three have their own category but cannot advance." }
          ],
          correct: "D"
        },
        {
          id: "changed",
          sol: "10.RI.2.B",
          stem: "The guide mentions in sentence 3 that several rules have changed mainly to —",
          choices: [
            { letter: "A", text: "apologize for the confusion caused by last year's rules" },
            { letter: "B", text: "warn past entrants not to rely on what they remember" },
            { letter: "C", text: "explain why the Expo moved to the college gymnasium" },
            { letter: "D", text: "persuade more students to work in teams this year" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Argument (level 2) ───────────────────────── */
    {
      id: "g10-ri-c86-on-the-air",
      family: "G10",
      title: "Put Us on the Air",
      kind: "Argument · 10.RI",
      blurb: "A junior makes the case for a student-run internet radio station, objections and all.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every morning at 7:52, the voice of our assistant principal crackles through the classroom speakers to read the day's announcements, and every morning roughly half of the students in my homeroom put in their earbuds before she finishes the first sentence. " +
        N(2) + "The announcements are not the problem; the format is. " +
        N(3) + "I believe Fairhaven High should launch a student-run internet radio station, and I believe it would cost less and teach more than most people expect.</p>" +
        "<p>" + N(4) + "Consider first what such a station would teach. " +
        N(5) + "Running a broadcast requires writing on a deadline, speaking clearly, interviewing people, editing audio, and working as a team when something goes wrong live. " +
        N(6) + "These are not hobbies; they are skills that appear in almost every job description I have ever read. " +
        N(7) + "Our school already offers journalism, but the student newspaper publishes only four times a year, which means a story about a Friday game often runs a month after anyone cares. " +
        N(8) + "A radio station could report the score that night, while the crowd is still driving home.</p>" +
        "<p>" + N(9) + "Second, a station would give a voice to students who rarely get one. " +
        N(10) + "The same dozen students tend to win the speech contests and run for student government. " +
        N(11) + "A daily show needs many more hosts, reporters, and producers than that, including students who might never volunteer to stand on a stage but would gladly talk into a microphone in a small booth. " +
        N(12) + "When the middle school across town started a similar program two years ago, its faculty adviser reported that more than sixty students signed up in the first semester, many of whom had never joined any club before.</p>" +
        "<p>" + N(13) + "The most common objection is cost. " +
        N(14) + "It is a fair concern, but it is smaller than it sounds. " +
        N(15) + "An internet station does not need a transmitter or a broadcast license; it needs two decent microphones, a mixing board, a laptop, and a streaming account. " +
        N(16) + "I priced this equipment with help from our technology teacher, Mr. Farrow, and the total came to about nineteen hundred dollars, less than the school spent on new scoreboard graphics last spring. " +
        N(17) + "The parent-teacher association has already said it would consider a grant if students present a plan.</p>" +
        "<p>" + N(18) + "Others worry that students will say something inappropriate on the air. " +
        N(19) + "That risk is real, and it should be handled the way the newspaper handles it: with a faculty adviser, a written code of conduct, and a short broadcast delay that allows a mistake to be cut before it reaches listeners. " +
        N(20) + "Professional stations use this kind of delay every day, and few listeners ever notice it. " +
        N(21) + "Trusting students with responsibility does not mean leaving them without guidance.</p>" +
        "<p>" + N(22) + "Finally, a radio station would make the school feel more connected. " +
        N(23) + "Imagine morning announcements read by students, followed by a five-minute interview with the cafeteria staff, the robotics team, or a teacher who is retiring. " +
        N(24) + "Imagine a Friday night broadcast of the game for grandparents who cannot climb the bleachers. " +
        N(25) + "Those listeners would hear our school the way we hope it sounds: curious, lively, and proud of one another.</p>" +
        "<p>" + N(26) + "I am not asking the administration to build a station tomorrow. " +
        N(27) + "I am asking for one meeting, a chance for interested students to present a plan, a budget, and a set of rules. " +
        N(28) + "Give us that meeting, and we will show you that students who are trusted with a microphone have something worth hearing.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence from the essay most clearly states the writer's central claim?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "newcomers",
          sol: "10.RI.1.B",
          stem: "Which evidence does the writer offer for the claim that a station would draw in students who are not usually involved?",
          choices: [
            { letter: "A", text: "the price list prepared with the technology teacher" },
            { letter: "B", text: "the number of students who wear earbuds in homeroom" },
            { letter: "C", text: "the four issues the newspaper publishes each year" },
            { letter: "D", text: "the sign-ups reported by a middle school's adviser" }
          ],
          correct: "D"
        },
        {
          id: "cost",
          sol: "10.RI.2.C",
          stem: "In sentence 14, the writer responds to the objection about cost mainly by —",
          choices: [
            { letter: "A", text: "granting that it is fair before arguing it is overstated" },
            { letter: "B", text: "dismissing it as a complaint made by a few teachers" },
            { letter: "C", text: "admitting that the station will need a broadcast license" },
            { letter: "D", text: "promising that students will raise all the money alone" }
          ],
          correct: "A"
        },
        {
          id: "scoreboard",
          sol: "10.RI.2.B",
          stem: "The writer compares the equipment cost to the scoreboard graphics in sentence 16 mainly to —",
          choices: [
            { letter: "A", text: "criticize the athletic department for wasting money" },
            { letter: "B", text: "prove that the scoreboard was a poor investment" },
            { letter: "C", text: "suggest the expense is modest next to past spending" },
            { letter: "D", text: "show that Mr. Farrow approves of the plan" }
          ],
          correct: "C"
        },
        {
          id: "imagine",
          sol: "10.RI.1.C",
          stem: "The writer's main purpose in sentences 23-25 is to —",
          choices: [
            { letter: "A", text: "list the shows that have already been scheduled" },
            { letter: "B", text: "argue that the cafeteria staff deserve more praise" },
            { letter: "C", text: "explain how a broadcast delay prevents mistakes" },
            { letter: "D", text: "help readers picture how the station would serve the community" }
          ],
          correct: "D"
        },
        {
          id: "body",
          sol: "10.RI.2.A",
          stem: "How are sentences 4 through 25 mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of the station from idea to first broadcast" },
            { letter: "B", text: "as a comparison of radio with the school newspaper" },
            { letter: "C", text: "as a set of benefits, with two objections answered in between" },
            { letter: "D", text: "as a list of problems at school, followed by one solution" }
          ],
          correct: "C"
        },
        {
          id: "lively",
          sol: "10.RV.1.D",
          stem: "In sentence 25, the writer chooses lively rather than noisy to describe the school. Compared with noisy, lively suggests —",
          choices: [
            { letter: "A", text: "energy that is positive and appealing" },
            { letter: "B", text: "sound that is loud and distracting" },
            { letter: "C", text: "behavior that breaks school rules" },
            { letter: "D", text: "a crowd that is hard to control" }
          ],
          correct: "A"
        },
        {
          id: "frame",
          sol: "10.RI.2.C",
          stem: "Which idea is best supported by sentences 1 and 28 together?",
          choices: [
            { letter: "A", text: "Students dislike their assistant principal's voice." },
            { letter: "B", text: "Students tune out as listeners but engage when given a voice." },
            { letter: "C", text: "The morning announcements should be canceled entirely." },
            { letter: "D", text: "The school already has enough microphones for a station." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
