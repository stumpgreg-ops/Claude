/* SOL Labyrinth — v77 content: Grade 10 long passages (Virginia G10, long tier, 8 questions each).
 * Thirteen original packs on a cross-country team, animal shelters, public libraries and a school
 * play backstage: three stories, two articles, two vocabulary passages, two paired sets, one poem,
 * one drama scene, one functional text and one argument. Original text only. Loaded after
 * content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LONG · Literary (level 2) ───────────────────────── */
    {
      id: "g10-rl-c77-grater",
      family: "G10",
      title: "The Grater",
      kind: "Literary · 10.RL",
      blurb: "A runner who trusts only her watch meets a hill, a struggling freshman, and a choice.",
      level: 2,
      passage:
        "<p>" + N(1) + "For two seasons, Marisol Vega had run every race the same way: out fast, alone, with her eyes on the runner ahead and her watch on her wrist like a second coach. " +
        N(2) + "Coach Adeyemi called it \"racing the clock instead of the course,\" and he did not mean it as a compliment. " +
        N(3) + "Marisol did not mind. " +
        N(4) + "The clock had never once lied to her.</p>" +
        "<p>" + N(5) + "The regional meet was held at Harlow Park, a course famous for a long gravel climb at the two-mile mark that runners called the Grater. " +
        N(6) + "The team needed its top five finishers to place well enough to qualify for state, and everyone knew the fifth spot was the problem. " +
        N(7) + "That spot belonged, on a good day, to Dalia Huang, a freshman who ran with her shoulders up near her ears and apologized whenever someone passed her.</p>" +
        "<p>" + N(8) + "At the gun, Marisol settled into her usual position near the front, and for a mile everything felt clean and familiar. " +
        N(9) + "Then, on the first switchback, she glanced across the field and saw Dalia far too close to the leaders, running a pace she could not possibly hold. " +
        N(10) + "By the base of the Grater, Dalia had begun to fade, her stride shortening, her arms swinging across her body instead of forward. " +
        N(11) + "Marisol checked her watch. " +
        N(12) + "She was on pace for her best time ever, a number she had written on an index card and taped inside her locker in August.</p>" +
        "<p>" + N(13) + "She slowed down anyway. " +
        N(14) + "Runners poured past her, a stream of colored jerseys, and she let them go until Dalia caught up to her shoulder. " +
        N(15) + "\"Don't talk,\" Marisol said. \"Just stay on my elbow.\" " +
        N(16) + "Up the Grater they went together, Marisol calling out small, ordinary things (shorter steps, drop your shoulders, look at that tree, now the next tree) until the gravel flattened and the finish chute appeared below them like a door left open.</p>" +
        "<p>" + N(17) + "Marisol crossed the line forty seconds slower than the number on the index card. " +
        N(18) + "Dalia crossed one step behind her, eleven places higher than she had ever finished. " +
        N(19) + "Thirty minutes later, when the results went up on the board beside the timing tent, the team had qualified for state by four points.</p>" +
        "<p>" + N(20) + "On the bus home, Coach Adeyemi sat down across the aisle and asked what had happened to her watch. " +
        N(21) + "Marisol looked at her wrist, where the screen was still frozen on the slowest time she had run all year. " +
        N(22) + "\"It was right,\" she said. " +
        N(23) + "\"It just wasn't the only thing worth looking at.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme developed across Marisol's race?",
          choices: [
            { letter: "A", text: "A personal goal can matter less than what one person can do for a group." },
            { letter: "B", text: "Careful planning before a race matters more than effort during it." },
            { letter: "C", text: "Younger athletes learn best when they are left to make mistakes." },
            { letter: "D", text: "Measuring progress with numbers always leads to disappointment." }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point of Marisol's race?",
          choices: [
            { letter: "A", text: "Sentence 9, when she notices Dalia running too close to the leaders" },
            { letter: "B", text: "Sentence 13, when she gives up her pace to wait for Dalia" },
            { letter: "C", text: "Sentence 17, when she crosses the finish line forty seconds slow" },
            { letter: "D", text: "Sentence 19, when the team learns it has qualified for state" }
          ],
          correct: "B"
        },
        {
          id: "dalia",
          sol: "10.RL.1.C",
          stem: "The details in sentence 7 characterize Dalia as —",
          choices: [
            { letter: "A", text: "careless about the team's chances at the meet" },
            { letter: "B", text: "jealous of the runners who finish ahead of her" },
            { letter: "C", text: "confident but poorly trained for a hilly course" },
            { letter: "D", text: "tense and unsure that she belongs on the team" }
          ],
          correct: "D"
        },
        {
          id: "door",
          sol: "10.RL.2.A",
          stem: "In sentence 16, comparing the finish chute to a door left open mainly suggests that the finish —",
          choices: [
            { letter: "A", text: "was harder to reach than the runners expected" },
            { letter: "B", text: "had been set up carelessly by the race officials" },
            { letter: "C", text: "felt welcoming and suddenly within reach" },
            { letter: "D", text: "was hidden from view until the last few steps" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the story is most ironic?",
          choices: [
            { letter: "A", text: "Marisol's slowest time of the year helps the team reach its biggest goal." },
            { letter: "B", text: "Dalia apologizes to runners even though she is trying to pass them." },
            { letter: "C", text: "The course's hardest hill is located near the two-mile mark." },
            { letter: "D", text: "Coach Adeyemi sits across the aisle instead of at the front of the bus." }
          ],
          correct: "A"
        },
        {
          id: "watch",
          sol: "10.RL.3.A",
          stem: "The author returns to Marisol's watch in sentences 21 through 23 after introducing it in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "suggest that her watch was broken during the climb" },
            { letter: "B", text: "show how her idea of what counts as success has changed" },
            { letter: "C", text: "explain why the coach disapproved of her racing style" },
            { letter: "D", text: "hint that she will set a new personal record at state" }
          ],
          correct: "B"
        },
        {
          id: "clock",
          sol: "10.RL.2.B",
          stem: "In sentence 2, the coach's phrase racing the clock instead of the course suggests that Marisol —",
          choices: [
            { letter: "A", text: "runs too slowly at the beginning of most races" },
            { letter: "B", text: "prefers flat courses to courses with steep hills" },
            { letter: "C", text: "trains harder than anyone else on the team" },
            { letter: "D", text: "pays attention to her time more than to the race around her" }
          ],
          correct: "D"
        },
        {
          id: "fade",
          sol: "10.RV.1.B",
          stem: "In sentence 10, the word fade most nearly means —",
          choices: [
            { letter: "A", text: "change color" },
            { letter: "B", text: "move out of sight" },
            { letter: "C", text: "lose strength" },
            { letter: "D", text: "fall silent" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Literary (level 3) ───────────────────────── */
    {
      id: "g10-rl-c77-kennel",
      family: "G10",
      title: "Kennel Twelve",
      kind: "Literary · 10.RL",
      blurb: "A volunteer counting his service hours is assigned the shelter dog nobody can reach.",
      level: 3,
      passage:
        "<p>" + N(1) + "Amaru Quispe arrived at the Ridgeline County Animal Shelter with a clipboard of his own, a printed log on which he intended to record exactly twenty hours of community service and not one minute more. " +
        N(2) + "He had chosen the shelter because it was on the bus line, and because, as he told his older sister, dogs did not expect conversation.</p>" +
        "<p>" + N(3) + "Mrs. Haddad, the volunteer coordinator, read his log, handed it back, and assigned him to Kennel Twelve. " +
        N(4) + "The dog inside was a gray hound mix named Biscuit, nine years old, who had been returned twice and who spent his days pressed against the back wall as though the wall were the only thing in the building he trusted. " +
        N(5) + "\"He doesn't walk well,\" Mrs. Haddad said. " +
        N(6) + "\"He doesn't do anything well yet. That's why he's yours.\"</p>" +
        "<p>" + N(7) + "For the first week, Biscuit would not leave the kennel. " +
        N(8) + "Amaru sat on an overturned bucket outside the gate and did his chemistry homework aloud, mostly because the silence felt like something he was being graded on. " +
        N(9) + "He wrote 1.5 hours on his log each afternoon and left. " +
        N(10) + "In the second week, Biscuit moved to the middle of the kennel. " +
        N(11) + "In the third, he took a strip of cheese from Amaru's fingers so carefully that it seemed less like eating than like signing a contract.</p>" +
        "<p>" + N(12) + "By October they were walking the gravel loop behind the shelter, Biscuit's nails clicking, Amaru reciting the periodic table to him in a low voice. " +
        N(13) + "Somewhere in there, Amaru stopped writing on the log. " +
        N(14) + "He told himself he would fill it in later from memory.</p>" +
        "<p>" + N(15) + "The family came on a Saturday: a retired bus driver named Mr. Osei and his granddaughter, who knelt at the gate and waited without reaching in. " +
        N(16) + "Biscuit walked to the front of the kennel on his own. " +
        N(17) + "Mrs. Haddad looked at Amaru over the girl's head, and he understood that this was the thing he had been working toward, and that he had never once let himself picture it.</p>" +
        "<p>" + N(18) + "He clipped on Biscuit's leash for the last time and handed it to the girl, explaining that Biscuit liked cheese and disliked sudden hats and would listen to almost anything if you said it slowly. " +
        N(19) + "The car pulled out of the lot. " +
        N(20) + "Amaru stood on the curb longer than he needed to, watching the place where it had turned.</p>" +
        "<p>" + N(21) + "Inside, Mrs. Haddad asked for his log so she could sign off on his twenty hours. " +
        N(22) + "He pulled it from his backpack, creased and mostly blank, and stared at it. " +
        N(23) + "He had no idea how many hours it had been; he only knew it had been more. " +
        N(24) + "\"Kennel Nine has a new one,\" Mrs. Haddad said, not looking up. " +
        N(25) + "\"Terrible on a leash.\" " +
        N(26) + "Amaru folded the log in half and put it back in his bag.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed through Amaru's experience with Biscuit?",
          choices: [
            { letter: "A", text: "Animals that have been returned twice are unlikely to trust anyone again." },
            { letter: "B", text: "Volunteers should keep careful records so their work can be counted." },
            { letter: "C", text: "Caring for another can turn a required task into a commitment beyond counting." },
            { letter: "D", text: "Young people choose volunteer work mainly for its convenience." }
          ],
          correct: "C"
        },
        {
          id: "start",
          sol: "10.RL.1.C",
          stem: "Sentences 1 and 2 characterize Amaru at the start of the story as —",
          choices: [
            { letter: "A", text: "determined to keep his involvement limited and impersonal" },
            { letter: "B", text: "eager to impress the shelter's volunteer coordinator" },
            { letter: "C", text: "nervous about working with large and unfamiliar dogs" },
            { letter: "D", text: "resentful of his sister for choosing the shelter for him" }
          ],
          correct: "A"
        },
        {
          id: "contract",
          sol: "10.RL.2.A",
          stem: "In sentence 11, the comparison of taking the cheese to signing a contract suggests that Biscuit's action is —",
          choices: [
            { letter: "A", text: "a sign that he is too hungry to resist the food" },
            { letter: "B", text: "a trick he learned from his earlier owners" },
            { letter: "C", text: "a reluctant gesture he quickly regrets" },
            { letter: "D", text: "a cautious, deliberate agreement to trust" }
          ],
          correct: "D"
        },
        {
          id: "graded",
          sol: "10.RL.2.B",
          stem: "In sentence 8, saying that the silence felt like something he was being graded on suggests that Amaru —",
          choices: [
            { letter: "A", text: "worries that Mrs. Haddad is secretly testing his reading" },
            { letter: "B", text: "feels uneasy and pressured by the quiet with the dog" },
            { letter: "C", text: "enjoys the calm because it helps him study chemistry" },
            { letter: "D", text: "believes that Biscuit is judging his choice of homework" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which outcome in the story is most ironic?",
          choices: [
            { letter: "A", text: "Mr. Osei's granddaughter waits at the gate without reaching in." },
            { letter: "B", text: "Amaru, who planned to track every minute, cannot say how long he served." },
            { letter: "C", text: "Mrs. Haddad assigns the hardest dog to the newest volunteer." },
            { letter: "D", text: "Biscuit, who dislikes sudden hats, goes home with a bus driver." }
          ],
          correct: "B"
        },
        {
          id: "position",
          sol: "10.RL.3.A",
          stem: "The author tracks where Biscuit stands in the kennel in sentences 4, 10 and 16 mainly to —",
          choices: [
            { letter: "A", text: "show that the kennel is too small for a dog his size" },
            { letter: "B", text: "suggest that Biscuit prefers some visitors to others" },
            { letter: "C", text: "contrast the shelter's crowded rooms with the gravel loop" },
            { letter: "D", text: "mark the gradual stages of the dog's growing trust" }
          ],
          correct: "D"
        },
        {
          id: "nine",
          sol: "10.RL.1.B",
          stem: "Mrs. Haddad's remark about Kennel Nine in sentences 24 and 25 functions in the plot mainly as —",
          choices: [
            { letter: "A", text: "an invitation to begin again, which Amaru silently accepts" },
            { letter: "B", text: "a warning that Amaru's next assignment will be unpaid" },
            { letter: "C", text: "a complaint about the shelter's lack of trained staff" },
            { letter: "D", text: "a reminder that his service hours are not yet complete" }
          ],
          correct: "A"
        },
        {
          id: "returned",
          sol: "10.RV.1.C",
          stem: "In sentence 4, the word returned most nearly means —",
          choices: [
            { letter: "A", text: "sent back to its first home" },
            { letter: "B", text: "repaid for an earlier kindness" },
            { letter: "C", text: "brought back to the shelter by adopters" },
            { letter: "D", text: "recovered from a serious illness" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Literary (level 1) ───────────────────────── */
    {
      id: "g10-rl-c77-page",
      family: "G10",
      title: "One Hard Word a Day",
      kind: "Literary · 10.RL",
      blurb: "A teen stuck with a quiet library job starts to notice who comes through the door.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kofi Mensah wanted a summer job at the hardware store, where his cousin earned tips loading lumber into trucks. " +
        N(2) + "Instead, his mother found him a position as a page at the Cedar Hill Branch Library. " +
        N(3) + "A page, he learned on the first day, was a person who pushed a cart and put books back where they belonged. " +
        N(4) + "\"It's quiet work,\" said the branch manager, Ms. Brandt. " +
        N(5) + "Kofi thought that was exactly the problem.</p>" +
        "<p>" + N(6) + "For two weeks, he shelved books, straightened the magazine racks, and watched the clock above the circulation desk. " +
        N(7) + "The same people came in every day. " +
        N(8) + "A man in a paint-spattered cap used the computers every afternoon to look at job listings, scrolling slowly and writing notes on the back of a receipt. " +
        N(9) + "Two little brothers read comic books under the big table by the window while their mother studied for a nursing exam. " +
        N(10) + "An older woman in a green headscarf sat at the newspaper rack each morning and read the same page of the paper for almost an hour.</p>" +
        "<p>" + N(11) + "One Tuesday, the woman waved Kofi over. " +
        N(12) + "She pointed at a word in a headline and said it slowly: \"Re-zon-ing.\" " +
        N(13) + "She explained, in careful English, that her name was Mrs. Abebe and that she was teaching herself to read the paper one article at a time. " +
        N(14) + "Kofi did not know exactly what rezoning meant either. " +
        N(15) + "He looked it up on the library computer, and together they read the whole article about the town's new rules for building near the river.</p>" +
        "<p>" + N(16) + "After that, Mrs. Abebe saved one hard word for him every morning. " +
        N(17) + "Kofi began to notice other things, too. " +
        N(18) + "He noticed that the man in the paint cap had circled three job listings and printed a résumé. " +
        N(19) + "He noticed that the two brothers had moved from comic books to a thick series about a dragon. " +
        N(20) + "The library was still quiet, but it no longer seemed empty.</p>" +
        "<p>" + N(21) + "In August, Ms. Brandt asked Kofi whether he wanted to work there again next summer. " +
        N(22) + "He thought about the hardware store, the lumber trucks, and his cousin's tips. " +
        N(23) + "Then he thought about Mrs. Abebe, who had just finished reading an entire front page without stopping once. " +
        N(24) + "\"Yes,\" he said. \"But I'd like to work at the desk sometimes, not just with the cart.\" " +
        N(25) + "Ms. Brandt smiled, as if she had been waiting all summer for him to ask.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of Kofi's summer at the library?",
          choices: [
            { letter: "A", text: "Jobs that pay tips are usually more rewarding than quiet jobs." },
            { letter: "B", text: "Paying attention to others can make ordinary work meaningful." },
            { letter: "C", text: "Learning a new language is easiest with a newspaper." },
            { letter: "D", text: "Parents usually know which jobs their children will enjoy." }
          ],
          correct: "B"
        },
        {
          id: "start",
          sol: "10.RL.1.C",
          stem: "In sentences 1 through 5, Kofi is best described as —",
          choices: [
            { letter: "A", text: "curious about how the library is run" },
            { letter: "B", text: "nervous about meeting his new manager" },
            { letter: "C", text: "proud of finding a job on his own" },
            { letter: "D", text: "disappointed and unenthusiastic" }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "10.RL.1.B",
          stem: "Which event most directly causes Kofi's attitude toward the job to change?",
          choices: [
            { letter: "A", text: "Mrs. Abebe asks him to help her with a word in the paper." },
            { letter: "B", text: "Ms. Brandt explains what a page is expected to do." },
            { letter: "C", text: "His cousin starts earning more tips at the hardware store." },
            { letter: "D", text: "The two brothers choose a new series about a dragon." }
          ],
          correct: "A"
        },
        {
          id: "patrons",
          sol: "10.RL.3.A",
          stem: "The author includes the details about the other library visitors in sentences 18 and 19 mainly to —",
          choices: [
            { letter: "A", text: "explain why the library needs a second page" },
            { letter: "B", text: "suggest that Kofi is falling behind on shelving" },
            { letter: "C", text: "show that Kofi now notices progress in people's lives" },
            { letter: "D", text: "prove that the library is busier than Ms. Brandt said" }
          ],
          correct: "C"
        },
        {
          id: "problem",
          sol: "10.RL.2.B",
          stem: "Sentence 5, Kofi thought that was exactly the problem, creates a tone that is —",
          choices: [
            { letter: "A", text: "grudging and a little sarcastic" },
            { letter: "B", text: "frightened and confused" },
            { letter: "C", text: "warm and hopeful" },
            { letter: "D", text: "angry and threatening" }
          ],
          correct: "A"
        },
        {
          id: "page",
          sol: "10.RV.1.B",
          stem: "In sentence 2, the word page most nearly means —",
          choices: [
            { letter: "A", text: "one side of a sheet of paper in a book" },
            { letter: "B", text: "a worker who returns books to the shelves" },
            { letter: "C", text: "a message sent to call someone to the desk" },
            { letter: "D", text: "a student who reads aloud to young children" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.2.C",
          stem: "The tone of the final sentence of the story is best described as —",
          choices: [
            { letter: "A", text: "surprised and doubtful" },
            { letter: "B", text: "tired and relieved" },
            { letter: "C", text: "stern and formal" },
            { letter: "D", text: "warm and approving" }
          ],
          correct: "D"
        },
        {
          id: "careful",
          sol: "10.RV.1.D",
          stem: "In sentence 13, Mrs. Abebe speaks in careful English. Compared with slow, the word careful suggests that she —",
          choices: [
            { letter: "A", text: "is unwilling to talk with strangers" },
            { letter: "B", text: "speaks more quietly than other visitors" },
            { letter: "C", text: "pays close attention to getting each word right" },
            { letter: "D", text: "worries that Kofi will laugh at her accent" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Informational (level 1) ───────────────────────── */
    {
      id: "g10-ri-c77-foster",
      family: "G10",
      title: "A Better Week",
      kind: "Informational · 10.RI",
      blurb: "How one shelter turned living rooms into extra kennel space.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every animal shelter has a limit. " +
        N(2) + "At the Brightwater Animal Center, that limit is sixty-two dog kennels and forty cat cages, and in a busy summer the center can receive more than a dozen new animals in a single day. " +
        N(3) + "When every space is full, staff face hard choices about where new arrivals will go, and some animals may have to wait in carriers in a hallway. " +
        N(4) + "For many shelters, one of the best answers to this problem is not inside the building at all.</p>" +
        "<p>" + N(5) + "A foster volunteer is a person who cares for a shelter animal at home for a short time. " +
        N(6) + "The animal still belongs to the shelter, and the shelter pays for food, medicine, and visits to the veterinarian. " +
        N(7) + "The volunteer provides a quiet space, daily care, and attention. " +
        N(8) + "Some fosters keep an animal for a weekend; others keep a litter of kittens for two months until the kittens are old enough to be adopted.</p>" +
        "<p>" + N(9) + "Fostering helps animals that struggle in a loud shelter. " +
        N(10) + "Very young kittens, for example, can catch illnesses easily in a crowded building, and older dogs often become stressed by constant barking. " +
        N(11) + "In a home, these animals tend to eat better, sleep more, and act more relaxed, which makes them easier for adopters to get to know. " +
        N(12) + "Fostering also gives the shelter useful information. " +
        N(13) + "A foster can report whether a dog is calm around children or whether a cat hides from other pets, and those notes help staff match each animal with the right adopter.</p>" +
        "<p>" + N(14) + "Brightwater started its foster program four years ago with eleven volunteers. " +
        N(15) + "Today it has more than ninety. " +
        N(16) + "In the program's first year, the center placed about 150 animals in foster homes; last year it placed more than 600. " +
        N(17) + "Staff also found that fostered animals were adopted faster, spending an average of nine days available for adoption compared with twenty-one days for animals that stayed in kennels.</p>" +
        "<p>" + N(18) + "People who want to foster usually attend a one-hour training session and fill out a short application that asks about their home, schedule, and other pets. " +
        N(19) + "Families with busy schedules can choose short \"sleepover\" fosters, while experienced volunteers may take animals that need medicine or extra care. " +
        N(20) + "As Brightwater's foster coordinator, Lena Sorensen, explains, \"You don't have to give an animal forever to give it a better week.\" " +
        N(21) + "For a shelter with only so many kennels, that better week can make all the difference.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about Brightwater?",
          choices: [
            { letter: "A", text: "Foster homes ease crowding while improving animals' care and adoption chances." },
            { letter: "B", text: "Shelters should build more kennels so that fewer animals are turned away." },
            { letter: "C", text: "Kittens are the animals most likely to become sick inside a shelter." },
            { letter: "D", text: "Most foster volunteers end up adopting the animals they care for." }
          ],
          correct: "A"
        },
        {
          id: "numbers",
          sol: "10.RI.1.B",
          stem: "Which sentence provides the strongest evidence that fostered animals find permanent homes more quickly?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          stem: "The article opens with sentences 1 through 4 mainly to —",
          choices: [
            { letter: "A", text: "describe the layout of the Brightwater building" },
            { letter: "B", text: "introduce a problem that the rest of the article helps solve" },
            { letter: "C", text: "compare Brightwater with other shelters in the region" },
            { letter: "D", text: "argue that shelters receive too many animals each summer" }
          ],
          correct: "B"
        },
        {
          id: "quote",
          sol: "10.RI.1.C",
          stem: "The author includes Lena Sorensen's words in sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that fostering requires a long commitment" },
            { letter: "B", text: "explain how the shelter pays for veterinary visits" },
            { letter: "C", text: "reassure readers that even short-term help is valuable" },
            { letter: "D", text: "show that the program has more volunteers than it needs" }
          ],
          correct: "C"
        },
        {
          id: "building",
          sol: "10.RI.2.B",
          stem: "In sentence 4, the statement that the best answer is not inside the building at all mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that the shelter's building is unsafe" },
            { letter: "B", text: "create curiosity by hinting that the solution lies in homes" },
            { letter: "C", text: "criticize staff for keeping too many animals indoors" },
            { letter: "D", text: "explain why the shelter plans to move to a new site" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward the Brightwater foster program is best described as —",
          choices: [
            { letter: "A", text: "approving and informative" },
            { letter: "B", text: "doubtful and questioning" },
            { letter: "C", text: "neutral and uninterested" },
            { letter: "D", text: "urgent and alarmed" }
          ],
          correct: "A"
        },
        {
          id: "match",
          sol: "10.RV.1.B",
          stem: "In sentence 13, the word match most nearly means —",
          choices: [
            { letter: "A", text: "compete against" },
            { letter: "B", text: "light with a flame" },
            { letter: "C", text: "make identical to" },
            { letter: "D", text: "pair suitably with" }
          ],
          correct: "D"
        },
        {
          id: "coord",
          sol: "10.RV.1.A",
          stem: "The word coordinator in sentence 20 contains the prefix co-, meaning together, and a root related to order. A coordinator is most likely someone who —",
          choices: [
            { letter: "A", text: "orders supplies for the shelter's animals" },
            { letter: "B", text: "trains dogs to follow commands in order" },
            { letter: "C", text: "organizes people and tasks so they work together" },
            { letter: "D", text: "decides which animals must leave the shelter first" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Informational (level 2) ───────────────────────── */
    {
      id: "g10-ri-c77-things",
      family: "G10",
      title: "The Collection of Things",
      kind: "Informational · 10.RI",
      blurb: "A town library starts lending telescopes, cake pans and ukuleles, and not everyone is sure it should.",
      level: 2,
      passage:
        "<p>" + N(1) + "When the Marlow Falls Public Library announced in 2019 that it would begin lending a sewing machine, a few residents assumed the notice was a joke. " +
        N(2) + "Five years later, the library's \"Collection of Things\" includes more than 400 items, from telescopes and cake pans to soil testers, ukuleles, and a portable projector that has been checked out by nearly every scout troop in the county. " +
        N(3) + "The collection is one example of a broader shift in how many public libraries define their purpose.</p>" +
        "<p>" + N(4) + "For most of their history, public libraries were built around a simple idea: some resources are too expensive or too rarely needed for every household to own, so a community can buy them once and share them. " +
        N(5) + "Books fit that description well. " +
        N(6) + "So, it turns out, do many other things. " +
        N(7) + "\"Nobody needs a stud finder every week,\" said Priya Raman, the branch manager who started the collection. " +
        N(8) + "\"But almost everyone needs one twice in their life, and that's exactly the kind of problem libraries were invented to solve.\"</p>" +
        "<p>" + N(9) + "The numbers suggest that residents agree. " +
        N(10) + "In its first year, the collection recorded about 1,200 checkouts. " +
        N(11) + "Last year, it recorded more than 9,000, and the waiting list for the telescopes regularly stretches past a month. " +
        N(12) + "Library surveys also show that about one in five people who borrowed an item had not used a library card in more than three years, which suggests the collection is drawing back residents the library had lost.</p>" +
        "<p>" + N(13) + "The change has not been free of problems. " +
        N(14) + "Items break more often than books, and a cracked ukulele or a missing projector cable cannot be repaired with tape the way a torn page can. " +
        N(15) + "Some staff members worried at first that the new collection would pull money away from books and reading programs. " +
        N(16) + "To address that concern, the library pays for the collection mostly through donations from a local hardware store and a small state grant, and it holds a volunteer \"fix-it night\" each month where residents repair returned items.</p>" +
        "<p>" + N(17) + "Not everyone is convinced that the change is a good one. " +
        N(18) + "A few longtime patrons argue that a library filled with power tools risks forgetting what makes it a library in the first place. " +
        N(19) + "Raman disagrees. " +
        N(20) + "She points out that many of the most popular items come with a related book (the telescope with a star guide, the cake pans with a baking manual) and that checkouts of those books have risen alongside the items. " +
        N(21) + "\"We didn't stop being a library,\" she said. " +
        N(22) + "\"We just remembered what a library was for.\"</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes the article about Marlow Falls?",
          choices: [
            { letter: "A", text: "A library replaced much of its book budget with tools and instruments." },
            { letter: "B", text: "A library's lending of objects revives its old sharing role and draws users back." },
            { letter: "C", text: "A hardware store convinced a library to lend tools to its customers." },
            { letter: "D", text: "Residents of Marlow Falls rarely used their library before 2019." }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "Which choice best describes how paragraphs 3 through 5 are organized?",
          choices: [
            { letter: "A", text: "A history of libraries, followed by a list of current items" },
            { letter: "B", text: "A problem, several possible causes, and a final recommendation" },
            { letter: "C", text: "A comparison of two libraries, followed by a survey summary" },
            { letter: "D", text: "Signs of success, then problems and fixes, then an objection and a reply" }
          ],
          correct: "D"
        },
        {
          id: "lost",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that the collection is bringing back residents who had stopped using the library?",
          choices: [
            { letter: "A", text: "The projector has been borrowed by nearly every scout troop." },
            { letter: "B", text: "The waiting list for the telescopes stretches past a month." },
            { letter: "C", text: "One in five borrowers had not used a card in over three years." },
            { letter: "D", text: "Residents repair returned items at a monthly fix-it night." }
          ],
          correct: "C"
        },
        {
          id: "patrons",
          sol: "10.RI.1.C",
          stem: "The author includes the longtime patrons' view in sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "present an opposing view before showing Raman's response" },
            { letter: "B", text: "prove that the collection has lowered book checkouts" },
            { letter: "C", text: "suggest that power tools are unsafe to lend to the public" },
            { letter: "D", text: "explain why the library applied for a state grant" }
          ],
          correct: "A"
        },
        {
          id: "remember",
          sol: "10.RI.2.B",
          stem: "Raman's statement in sentence 22 that the library just remembered what a library was for connects most closely to which earlier idea?",
          choices: [
            { letter: "A", text: "Communities can buy rarely needed resources once and share them." },
            { letter: "B", text: "Some residents thought the first announcement was a joke." },
            { letter: "C", text: "Broken items cannot be repaired the way torn pages can." },
            { letter: "D", text: "Staff members worried that book programs would lose money." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone toward the Collection of Things is best described as —",
          choices: [
            { letter: "A", text: "openly mocking" },
            { letter: "B", text: "deeply suspicious" },
            { letter: "C", text: "favorable but balanced" },
            { letter: "D", text: "cheerfully uncritical" }
          ],
          correct: "C"
        },
        {
          id: "stretches",
          sol: "10.RV.1.C",
          stem: "In sentence 11, the word stretches most nearly means —",
          choices: [
            { letter: "A", text: "loosens" },
            { letter: "B", text: "exercises" },
            { letter: "C", text: "exaggerates" },
            { letter: "D", text: "extends" }
          ],
          correct: "D"
        },
        {
          id: "forgetting",
          sol: "10.RV.1.D",
          stem: "In sentence 18, the patrons fear the library risks forgetting what makes it a library. Compared with changing, the word forgetting suggests —",
          choices: [
            { letter: "A", text: "a planned improvement chosen by the staff" },
            { letter: "B", text: "a careless loss rather than a deliberate choice" },
            { letter: "C", text: "a temporary pause that will soon be reversed" },
            { letter: "D", text: "a decision made by voters in the community" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Vocabulary (level 2) ───────────────────────── */
    {
      id: "g10-rv-c77-hold",
      family: "G10",
      title: "Calling a Hold",
      kind: "Vocabulary · 10.RV",
      blurb: "A tech rehearsal, a nine-foot lighthouse, and a stage manager who refuses to panic.",
      level: 2,
      passage:
        "<p>" + N(1) + "Imani Clarke had been stage manager for Westbrook High's fall play for exactly eleven days, and in that time she had learned that the job required one quality above all others: she had to be <strong>unflappable</strong>. " +
        N(2) + "Actors could panic, the lighting crew could argue, and the director could pace the aisle muttering about deadlines, but the stage manager had to stay calm enough to keep everyone else moving.</p>" +
        "<p>" + N(3) + "Thursday's technical rehearsal tested that rule. " +
        N(4) + "The set for the second act included a wooden lighthouse that was nine feet tall and so <strong>cumbersome</strong> that it took four crew members to roll it onstage without scraping the walls. " +
        N(5) + "On its first entrance, one wheel caught on a cable, the lighthouse lurched sideways, and the backstage area erupted into a <strong>cacophony</strong> of shouts, a dropped hammer, and someone's phone alarm going off at the worst possible moment.</p>" +
        "<p>" + N(6) + "Imani did not raise her voice. " +
        N(7) + "She pressed the button on her headset and called a hold, which meant that every person in the theater had to stop exactly where they were. " +
        N(8) + "In the sudden silence, she walked to the lighthouse, found the cable, and freed the wheel. " +
        N(9) + "Then she opened the binder that held the prompt book, a <strong>meticulous</strong> record in which she had written every cue, every entrance, and every prop location in pencil, down to the half inch. " +
        N(10) + "She erased one line and wrote a new one: Tape cable flat before Act 2.</p>" +
        "<p>" + N(11) + "The second problem came twenty minutes later, when the actor playing the harbor master forgot his lines in the middle of a scene. " +
        N(12) + "For a long moment he simply stood under the lights. " +
        N(13) + "Then his scene partner, a sophomore named Rafael, began to <strong>improvise</strong>, inventing a question about the weather that gave the actor time to remember where he was. " +
        N(14) + "The director, Mr. Lindqvist, laughed for the first time all afternoon. " +
        N(15) + "\"Keep that,\" he said. \"That's better than what's written.\"</p>" +
        "<p>" + N(16) + "At six o'clock, Mr. Lindqvist announced that rehearsal would end an hour early, a <strong>reprieve</strong> that drew cheers from the exhausted crew. " +
        N(17) + "Most people grabbed their backpacks and headed for the parking lot. " +
        N(18) + "Imani stayed behind, taped the cable flat, and walked the lighthouse's path twice to be sure. " +
        N(19) + "Being unflappable, she had decided, was not the same as never worrying. " +
        N(20) + "It meant doing your worrying early, alone, with a roll of tape.</p>",
      claims: [
        {
          id: "unflappable",
          sol: "10.RV.1.B",
          stem: "Based on sentences 1 and 2, the word unflappable most nearly means —",
          choices: [
            { letter: "A", text: "strict with other people" },
            { letter: "B", text: "quick to give orders" },
            { letter: "C", text: "calm under pressure" },
            { letter: "D", text: "unwilling to change plans" }
          ],
          correct: "C"
        },
        {
          id: "cacophony",
          sol: "10.RV.1.A",
          stem: "The word cacophony in sentence 5 is built from Greek parts meaning bad and sound, as in telephone. Based on this, a cacophony is —",
          choices: [
            { letter: "A", text: "a harsh mixture of noises" },
            { letter: "B", text: "a warning sent by radio" },
            { letter: "C", text: "a sudden period of quiet" },
            { letter: "D", text: "a loud argument between two people" }
          ],
          correct: "A"
        },
        {
          id: "cumbersome",
          sol: "10.RV.1.C",
          stem: "Which part of sentence 4 best helps the reader understand the meaning of cumbersome?",
          choices: [
            { letter: "A", text: "The set for the second act included" },
            { letter: "B", text: "a wooden lighthouse that was" },
            { letter: "C", text: "nine feet tall and so" },
            { letter: "D", text: "four crew members to roll it" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          stem: "Based on sentence 9, a meticulous record is one that is —",
          choices: [
            { letter: "A", text: "written quickly and in a hurry" },
            { letter: "B", text: "extremely detailed and precise" },
            { letter: "C", text: "kept secret from the director" },
            { letter: "D", text: "easy to change at any moment" }
          ],
          correct: "B"
        },
        {
          id: "improvise",
          sol: "10.RV.1.A",
          stem: "The word improvise comes from Latin parts meaning not and foreseen. Based on this and sentence 13, to improvise is to —",
          choices: [
            { letter: "A", text: "make something up on the spot without preparation" },
            { letter: "B", text: "repeat lines that were rehearsed many times before" },
            { letter: "C", text: "predict what another actor is about to say" },
            { letter: "D", text: "ask the director to stop a scene for a moment" }
          ],
          correct: "A"
        },
        {
          id: "reprieve",
          sol: "10.RV.1.D",
          stem: "The author calls the early ending a reprieve rather than a break in sentence 16. Compared with break, reprieve suggests —",
          choices: [
            { letter: "A", text: "a pause that everyone had planned for weeks" },
            { letter: "B", text: "a punishment for mistakes made during rehearsal" },
            { letter: "C", text: "a short rest between two scenes of the play" },
            { letter: "D", text: "a welcome release from something hard to endure" }
          ],
          correct: "D"
        },
        {
          id: "worry",
          sol: "10.RL.1.C",
          stem: "Sentences 18 through 20 reveal that Imani's calm comes mainly from —",
          choices: [
            { letter: "A", text: "her belief that problems usually fix themselves" },
            { letter: "B", text: "careful preparation that she does on her own" },
            { letter: "C", text: "the director's praise earlier in the afternoon" },
            { letter: "D", text: "years of experience managing other plays" }
          ],
          correct: "B"
        },
        {
          id: "hold",
          sol: "10.RV.1.C",
          stem: "In sentence 7, the word hold most nearly means —",
          choices: [
            { letter: "A", text: "a firm grip on an object" },
            { letter: "B", text: "a space for storing cargo" },
            { letter: "C", text: "a pause in all activity" },
            { letter: "D", text: "a seat saved for a guest" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Vocabulary (level 3) ───────────────────────── */
    {
      id: "g10-rv-c77-course",
      family: "G10",
      title: "Reading the Course",
      kind: "Vocabulary · 10.RV",
      blurb: "Why cross-country runners study the ground as closely as they train their legs.",
      level: 3,
      passage:
        "<p>" + N(1) + "Track runners know exactly what lies ahead of them: four hundred meters of flat, measured lane, repeated as many times as the race requires. " +
        N(2) + "Cross-country runners have no such certainty. " +
        N(3) + "A typical course winds across grass, dirt, gravel, and mud, and its terrain is often <strong>undulating</strong>, rising and falling in long waves that never let a runner settle into a single rhythm. " +
        N(4) + "For that reason, many coaches argue that the most important skill in the sport is not speed but the ability to read a course.</p>" +
        "<p>" + N(5) + "Reading a course begins with recognizing that its difficulty is frequently <strong>deceptive</strong>. " +
        N(6) + "A hill that looks gentle from the starting line may stretch on for half a mile, while a climb that looks steep and frightening may cost a runner only a few seconds. " +
        N(7) + "Experienced runners walk the course before a race, noting where the footing turns soft, where the trail narrows, and where a long straightaway invites a burst of speed. " +
        N(8) + "A narrow section, for example, can trap a runner behind slower competitors, so the smartest move is often to gain position before the trail tightens.</p>" +
        "<p>" + N(9) + "Weather and altitude add further complications. " +
        N(10) + "Teams that travel to meets in the mountains often arrive several days early to <strong>acclimate</strong>, giving their bodies time to adjust to the thinner air. " +
        N(11) + "Coaches note that the effect of altitude on a short sprint is <strong>negligible</strong>, barely worth measuring, but over five kilometers it can add a minute or more to a runner's time.</p>" +
        "<p>" + N(12) + "The greatest challenge of cross-country, however, may be its slow <strong>attrition</strong>. " +
        N(13) + "Over the course of a race, small costs accumulate: a stumble on a root, a surge to pass a rival, a climb taken too fast. " +
        N(14) + "None of these alone decides the outcome, but together they wear runners down, and by the final mile the field has usually thinned into a long, scattered line. " +
        N(15) + "The runners who remain near the front are not always the fastest; they are often the ones who spent their energy most carefully.</p>" +
        "<p>" + N(16) + "This is why cross-country rewards patience as much as power. " +
        N(17) + "The course is <strong>relentless</strong> in the sense that it never offers a full break, but it is also predictable to anyone willing to study it. " +
        N(18) + "A runner who knows where the hills fall and where the footing fails can plan for both. " +
        N(19) + "In a sport where the ground itself is the toughest opponent, the best preparation may simply be paying attention.</p>",
      claims: [
        {
          id: "undulating",
          sol: "10.RV.1.B",
          stem: "In sentence 3, the word undulating most nearly means —",
          choices: [
            { letter: "A", text: "slippery and wet" },
            { letter: "B", text: "rolling in waves" },
            { letter: "C", text: "steep and rocky" },
            { letter: "D", text: "covered with grass" }
          ],
          correct: "B"
        },
        {
          id: "deceptive",
          sol: "10.RV.1.C",
          stem: "Which sentence best helps the reader understand why the author calls a course's difficulty deceptive?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "acclimate",
          sol: "10.RV.1.A",
          stem: "The word acclimate in sentence 10 joins the prefix ac- (toward) with a root related to climate. Based on this, to acclimate is to —",
          choices: [
            { letter: "A", text: "become used to new surroundings" },
            { letter: "B", text: "predict changes in the weather" },
            { letter: "C", text: "climb higher than other teams" },
            { letter: "D", text: "train harder before a big race" }
          ],
          correct: "A"
        },
        {
          id: "negligible",
          sol: "10.RV.1.B",
          stem: "The phrase barely worth measuring in sentence 11 shows that negligible means —",
          choices: [
            { letter: "A", text: "hard to explain" },
            { letter: "B", text: "often ignored by coaches" },
            { letter: "C", text: "too small to matter" },
            { letter: "D", text: "impossible to prevent" }
          ],
          correct: "C"
        },
        {
          id: "attrition",
          sol: "10.RV.1.D",
          stem: "The author chose attrition rather than tiredness in sentence 12. Compared with tiredness, attrition suggests —",
          choices: [
            { letter: "A", text: "a sudden collapse at the end of a long race" },
            { letter: "B", text: "a gradual wearing down through many small losses" },
            { letter: "C", text: "a feeling of boredom on a predictable course" },
            { letter: "D", text: "a strategy for passing rivals on a narrow trail" }
          ],
          correct: "B"
        },
        {
          id: "relentless",
          sol: "10.RV.1.A",
          stem: "The word relentless combines relent, meaning to ease up, with the suffix -less. In sentence 17, relentless most nearly means —",
          choices: [
            { letter: "A", text: "unfair to slower runners" },
            { letter: "B", text: "impossible to understand" },
            { letter: "C", text: "growing easier near the end" },
            { letter: "D", text: "never easing up" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of Reading the Course?",
          choices: [
            { letter: "A", text: "Success in cross-country depends heavily on studying and planning for the course." },
            { letter: "B", text: "Cross-country is more dangerous than track because of roots and mud." },
            { letter: "C", text: "Runners who train at high altitude will always win at lower meets." },
            { letter: "D", text: "The fastest runners usually finish at the front of the scattered line." }
          ],
          correct: "A"
        },
        {
          id: "develop",
          sol: "10.RI.2.A",
          stem: "How do sentences 13 and 14 develop the idea introduced in sentence 12?",
          choices: [
            { letter: "A", text: "They describe a single race from start to finish." },
            { letter: "B", text: "They compare cross-country with track running." },
            { letter: "C", text: "They list small costs, then explain their combined effect." },
            { letter: "D", text: "They present a coach's opinion and then a runner's response." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Paired texts (level 2) ───────────────────────── */
    {
      id: "g10-dsr-c77-fines",
      family: "G10",
      title: "No More Late Fines",
      kind: "Paired texts · 10.DSR",
      blurb: "A news story on a library ending overdue fines, and a longtime patron's letter in reply.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Pinecrest Library Ends Late Fines</strong></p>" +
        "<p>" + N(1) + "Starting July 1, the Pinecrest Regional Library will no longer charge fines for overdue books, the library board announced Tuesday. " +
        N(2) + "The change ends a policy that had been in place for more than sixty years. " +
        N(3) + "Under the old system, borrowers paid twenty-five cents a day for each late item, and anyone who owed more than ten dollars could not check out materials until the balance was paid. " +
        N(4) + "According to library director Helen Achterberg, about 3,800 cardholders, nearly one in nine, were blocked from borrowing at the end of last year. " +
        N(5) + "More than half of those blocked accounts belonged to children and teenagers. " +
        N(6) + "\"A fine of a few dollars doesn't stop most adults,\" Achterberg said. \"But for a twelve-year-old, it can mean giving up the library for good.\" " +
        N(7) + "Fines brought in about $41,000 last year, less than one percent of the library's budget. " +
        N(8) + "Achterberg said the cost of collecting them, including staff time spent on payment disputes, was close to that amount. " +
        N(9) + "Borrowers will still be charged the replacement cost for items that are lost or damaged, and an item more than six weeks overdue will be considered lost. " +
        N(10) + "Libraries in two neighboring counties that ended fines in recent years reported that most overdue items were eventually returned and that the number of active cardholders rose by more than ten percent.</p>" +
        "<p><strong>Text 2 — A Letter to the Library Board</strong></p>" +
        "<p>" + N(11) + "I have used the Pinecrest library every week for thirty years, and I understand the board's wish to welcome back young readers. " +
        N(12) + "Still, I worry that the new policy treats a real problem as if it were only a financial one. " +
        N(13) + "A late fine was never mainly about money. " +
        N(14) + "It was a reminder that a library book belongs to everyone, and that the next person on the waiting list is counting on you. " +
        N(15) + "Last spring, I waited eleven weeks for a book on home repair because the only copy was sitting on someone's shelf, nearly two months past its due date. " +
        N(16) + "Without any daily cost, I fear more books will sit even longer. " +
        N(17) + "I would ask the board to consider a middle path. " +
        N(18) + "Fines could be removed for children's cards while remaining for adults, or the library could replace fines with automatic reminders and short borrowing pauses for items that are badly overdue. " +
        N(19) + "Such a system would keep the doors open for young readers without forgetting the neighbor who is still waiting for a turn. " +
        N(20) + "I support the library's goals. " +
        N(21) + "I simply ask that responsibility not be left out of the plan. (Gordon Velasquez, Pinecrest resident)</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Both texts suggest that one goal of the Pinecrest policy change is to —",
          choices: [
            { letter: "A", text: "bring young readers back to the library" },
            { letter: "B", text: "raise money for new library programs" },
            { letter: "C", text: "shorten waiting lists for popular books" },
            { letter: "D", text: "reduce the number of books that are lost" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Text 1 opposes the change, while Text 2 supports it completely." },
            { letter: "B", text: "Text 1 uses personal stories, while Text 2 relies on statistics." },
            { letter: "C", text: "Text 1 stresses access and cost; Text 2 stresses duty to others." },
            { letter: "D", text: "Text 1 focuses on adults, while Text 2 focuses only on children." }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 most directly responds to the worry Velasquez expresses in sentence 16?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences that together best show how the texts judge what late fines accomplished.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "A reader who uses both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the library will soon bring back fines for every cardholder" },
            { letter: "B", text: "ending fines only for children might satisfy both writers" },
            { letter: "C", text: "most Pinecrest residents agree with Velasquez about the change" },
            { letter: "D", text: "the neighboring counties regret their decision to end fines" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which detail from Text 1 best supports Achterberg's claim that fines can drive young people away from the library?",
          choices: [
            { letter: "A", text: "The fine was twenty-five cents a day for each late item." },
            { letter: "B", text: "More than half of the blocked accounts belonged to young people." },
            { letter: "C", text: "Fines made up less than one percent of the budget." },
            { letter: "D", text: "Items more than six weeks overdue will be considered lost." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of Velasquez's letter is best described as —",
          choices: [
            { letter: "A", text: "angry and insulting" },
            { letter: "B", text: "amused and casual" },
            { letter: "C", text: "hopeless and defeated" },
            { letter: "D", text: "respectful but concerned" }
          ],
          correct: "D"
        },
        {
          id: "story",
          sol: "10.RI.1.C",
          stem: "Velasquez includes the experience described in sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "show how overdue books affect the borrowers who wait for them" },
            { letter: "B", text: "prove that the library owns too few books on home repair" },
            { letter: "C", text: "explain why he has used the library for thirty years" },
            { letter: "D", text: "suggest that the library staff lost track of his request" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── LONG · Paired texts (level 3) ───────────────────────── */
    {
      id: "g10-dsr-c77-feefree",
      family: "G10",
      title: "Empty Kennels by Sunday",
      kind: "Paired texts · 10.DSR",
      blurb: "A volunteer praises a fee-free adoption weekend; an adoption counselor asks what speed costs.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Why Free Adoption Weekends Work</strong></p>" +
        "<p>" + N(1) + "Last month, the Fairhaven Animal Shelter held its first fee-free adoption weekend, and by Sunday evening, forty-seven animals had gone home with new families. " +
        N(2) + "On an ordinary weekend, the shelter places about twelve. " +
        N(3) + "As a volunteer who has walked dogs there for three years, I watched the change happen in real time: the lobby was crowded, the kennel hallways were noisy with families, and the staff ran out of collars before noon on Saturday. " +
        N(4) + "Critics sometimes argue that people who do not pay for a pet will not value it. " +
        N(5) + "However, when shelters in our region tracked fee-free adoptions over two years, the share of animals returned within six months was about the same as for regular adoptions. " +
        N(6) + "Fees, which at Fairhaven range from $75 to $150, can be a real obstacle for families who would otherwise give a pet a safe home. " +
        N(7) + "Removing them for a few days also brings in visitors who have never set foot in a shelter, and many of them come back later to volunteer or donate. " +
        N(8) + "Most important, every animal adopted that weekend opened a kennel for an animal that needed one. " +
        N(9) + "A crowded shelter is stressful for animals and staff alike, and an empty kennel is the most practical gift a community can give. " +
        N(10) + "Fairhaven should make fee-free weekends a regular event, not a once-a-year experiment. (Talia Brennan, shelter volunteer)</p>" +
        "<p><strong>Text 2 — The Real Cost of an Adoption</strong></p>" +
        "<p>" + N(11) + "I am glad whenever a shelter animal finds a home, and I do not doubt that fee-free events move animals quickly. " +
        N(12) + "My concern is that speed can crowd out the most important part of an adoption: the conversation. " +
        N(13) + "On a normal day, I spend twenty or thirty minutes with each family, asking about their schedules, their other pets, their landlord's rules, and whether anyone at home has allergies. " +
        N(14) + "During a busy event, that conversation can shrink to five minutes, or disappear entirely in the crowd. " +
        N(15) + "The fee itself was never the barrier that worried me most. " +
        N(16) + "A dog costs far more in food and veterinary care during its first year than any adoption fee, and the families who are surprised by those costs are the ones I most often see again, at the return desk. " +
        N(17) + "A better approach would keep fees low and reduce them for families who need help, while protecting time for counseling. " +
        N(18) + "Shelters could also hold smaller \"meet-and-match\" evenings, where families reserve a time to meet animals suited to their homes and routines. " +
        N(19) + "The goal should not simply be empty kennels by Sunday. " +
        N(20) + "It should be animals that stay home. (Samuel Okonkwo, adoption counselor)</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Both writers would most likely agree that fee-free adoption events —",
          choices: [
            { letter: "A", text: "lead to more animals being returned to shelters" },
            { letter: "B", text: "should replace counseling with written forms" },
            { letter: "C", text: "can place many animals in a short time" },
            { letter: "D", text: "should be held only once a year" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The texts differ mainly in that Text 1 judges an adoption event by —",
          choices: [
            { letter: "A", text: "how many kennels it opens, while Text 2 judges it by whether adoptions last" },
            { letter: "B", text: "how much money it raises, while Text 2 judges it by how many visitors come" },
            { letter: "C", text: "how staff feel afterward, while Text 2 judges it by the cost of collars" },
            { letter: "D", text: "how families are counseled, while Text 2 judges it by how quickly it runs" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 offers the strongest response to the concern about returns raised in sentence 16 of Text 2?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "kennels",
          sol: "10.DSR.E",
          stem: "Read together with sentence 9 of Text 1, sentence 19 of Text 2 mainly —",
          choices: [
            { letter: "A", text: "agrees that empty kennels are a community's best gift" },
            { letter: "B", text: "questions the goal that Text 1 treats as most important" },
            { letter: "C", text: "suggests that Fairhaven needs more kennels than it has" },
            { letter: "D", text: "explains why the staff ran out of collars on Saturday" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences that best show how the writers disagree about the importance of adoption fees.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "critics",
          sol: "10.RI.1.C",
          stem: "Brennan includes sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "introduce an opposing claim that she then challenges" },
            { letter: "B", text: "admit that she shares some of the critics' doubts" },
            { letter: "C", text: "explain why the shelter charges between $75 and $150" },
            { letter: "D", text: "describe what she saw in the lobby that weekend" }
          ],
          correct: "A"
        },
        {
          id: "desk",
          sol: "10.RI.2.B",
          stem: "In sentence 16, the phrase see again, at the return desk mainly suggests that —",
          choices: [
            { letter: "A", text: "families enjoy visiting the shelter after adopting" },
            { letter: "B", text: "the counselor works mostly at the front entrance" },
            { letter: "C", text: "unprepared families often bring their animals back" },
            { letter: "D", text: "returned animals are usually adopted again quickly" }
          ],
          correct: "C"
        },
        {
          id: "shrink",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 2 best supports the claim that busy events can weaken the adoption process?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Poetry (level 2) ───────────────────────── */
    {
      id: "g10-rl-c77-coursemap",
      family: "G10",
      title: "Course Map",
      kind: "Poetry · 10.RL",
      blurb: "A dawn practice, seven runners, and the middle of the pack.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Six a.m., and the field is still deciding<br>" +
        L(2) + "whether to be grass or fog.<br>" +
        L(3) + "Coach sketches the course on a clipboard:<br>" +
        L(4) + "a loop, a hill, the creek, the long return,<br>" +
        L(5) + "a map that fits inside his hand<br>" +
        L(6) + "and takes us thirty minutes to unfold.<br>" +
        L(7) + "We start in a knot, seven of us,<br>" +
        L(8) + "breath rising like questions nobody answers.<br>" +
        L(9) + "By the first hill the knot unties.<br>" +
        L(10) + "Someone's always faster. Someone's always last.<br>" +
        L(11) + "I am the middle, the hinge,<br>" +
        L(12) + "the runner who hears the footsteps<br>" +
        L(13) + "ahead and behind, and belongs to neither.<br>" +
        L(14) + "At the creek the mud takes one shoe halfway<br>" +
        L(15) + "and gives it back, a small loan.<br>" +
        L(16) + "Nobody watches practice.<br>" +
        L(17) + "There are no banners on the fence,<br>" +
        L(18) + "no one with a stopwatch but the sun,<br>" +
        L(19) + "climbing slow, the way I climb:<br>" +
        L(20) + "one more step, then the next one, then<br>" +
        L(21) + "the top, where the whole field opens<br>" +
        L(22) + "and I can see the others strung out like beads<br>" +
        L(23) + "on a string I cannot see but feel<br>" +
        L(24) + "pulling every one of us toward home.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which idea is developed across the whole of Course Map?",
          choices: [
            { letter: "A", text: "Runners spread apart on a course can still be bound together as a team." },
            { letter: "B", text: "Practice matters less than races because nobody is watching." },
            { letter: "C", text: "The fastest runner on a team is usually its natural leader." },
            { letter: "D", text: "Bad weather makes early morning practice nearly impossible." }
          ],
          correct: "A"
        },
        {
          id: "map",
          sol: "10.RL.2.A",
          stem: "In lines 5 and 6, describing a map that fits inside his hand / and takes us thirty minutes to unfold mainly suggests that —",
          choices: [
            { letter: "A", text: "the coach has drawn the course incorrectly" },
            { letter: "B", text: "the runners have trouble reading maps" },
            { letter: "C", text: "a simple plan stands for a long, demanding effort" },
            { letter: "D", text: "the course is shorter than the runners expected" }
          ],
          correct: "C"
        },
        {
          id: "breath",
          sol: "10.RL.2.B",
          stem: "The simile in line 8, breath rising like questions nobody answers, helps create a mood that is —",
          choices: [
            { letter: "A", text: "loud and celebratory" },
            { letter: "B", text: "quiet and uncertain" },
            { letter: "C", text: "angry and tense" },
            { letter: "D", text: "silly and playful" }
          ],
          correct: "B"
        },
        {
          id: "middle",
          sol: "10.RL.1.C",
          stem: "Lines 11 through 13 characterize the speaker as someone who —",
          choices: [
            { letter: "A", text: "wishes to be the fastest runner on the team" },
            { letter: "B", text: "is frustrated with the slower runners behind" },
            { letter: "C", text: "prefers to run alone rather than with others" },
            { letter: "D", text: "feels caught between groups, part of neither" }
          ],
          correct: "D"
        },
        {
          id: "nobody",
          sol: "10.RL.2.C",
          stem: "The tone of lines 16 through 18 is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "quietly matter-of-fact" },
            { letter: "C", text: "nervous and hurried" },
            { letter: "D", text: "proud and boastful" }
          ],
          correct: "B"
        },
        {
          id: "beads",
          sol: "10.RL.3.A",
          stem: "How does the image of beads on a string in lines 22 through 24 relate to lines 11 through 13?",
          choices: [
            { letter: "A", text: "It answers the speaker's sense of belonging nowhere with a link to everyone." },
            { letter: "B", text: "It repeats the speaker's earlier complaint that the team has split apart." },
            { letter: "C", text: "It shows that the speaker has finally passed the leaders on the hill." },
            { letter: "D", text: "It suggests that the runners are lost without the coach's map." }
          ],
          correct: "A"
        },
        {
          id: "hinge",
          sol: "10.RV.1.C",
          stem: "In line 11, the word hinge most nearly suggests —",
          choices: [
            { letter: "A", text: "a part that squeaks when it moves" },
            { letter: "B", text: "a lock that keeps something closed" },
            { letter: "C", text: "a crack where something may break" },
            { letter: "D", text: "a point that joins two parts" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "10.RL.1.B",
          stem: "Which line marks the shift from the speaker's effort to a moment of understanding?",
          choices: [
            { letter: "A", text: "Line 9" },
            { letter: "B", text: "Line 16" },
            { letter: "C", text: "Line 21" },
            { letter: "D", text: "Line 14" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Drama (level 1) ───────────────────────── */
    {
      id: "g10-rl-c77-letter",
      family: "G10",
      title: "The Missing Letter",
      kind: "Drama · 10.RL",
      blurb: "Opening night, twelve minutes to Act 2, and the one prop that matters is gone.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "Backstage at Crestview High School, twelve minutes before the second act of opening night. " +
        N(2) + "A long props table, marked with strips of labeled tape, stands against the wall. " +
        N(3) + "LUCA, a freshman on the props crew, is digging through a cardboard box. " +
        N(4) + "DESTINY, the senior who runs the crew, enters with a clipboard.</em></p>" +
        "<p><strong>DESTINY:</strong> " + N(5) + "Why are you inside the box? " +
        N(6) + "Things go on the table, not in it.</p>" +
        "<p><strong>LUCA:</strong> " + N(7) + "The letter's gone. " +
        N(8) + "The one Mariela reads in the garden scene. " +
        N(9) + "It was right here on its tape square at intermission, and now it isn't.</p>" +
        "<p><strong>DESTINY:</strong> " + N(10) + "Okay. " +
        N(11) + "Did you check the costume rack? " +
        N(12) + "Sometimes things ride off in a pocket.</p>" +
        "<p><strong>LUCA:</strong> " + N(13) + "I checked the rack, the trash can, and the whole hallway. " +
        "<em>(He sits down hard on a stool.)</em> " +
        N(14) + "This is my first show, and I lost the one prop that actually matters.</p>" +
        "<p><strong>DESTINY:</strong> <em>(calmly checking her watch)</em> " + N(15) + "Every prop matters, which is why we have more than one way to fix this. " +
        N(16) + "What does the letter say?</p>" +
        "<p><strong>LUCA:</strong> " + N(17) + "Mariela reads it out loud, so the words are in the script. " +
        N(18) + "But the real one was on old yellow paper, with a wax seal and everything. " +
        N(19) + "It took me two whole weekends to make.</p>" +
        "<p><strong>DESTINY:</strong> " + N(20) + "The audience is sitting forty feet away under dim blue lights. " +
        N(21) + "They will see paper and a red circle. " +
        "<em>(She tears a page from the back of her clipboard and hands him a marker.)</em> " +
        N(22) + "Copy the lines. " +
        N(23) + "Neat handwriting, big letters, in case Mariela needs to glance at them.</p>" +
        "<p><em>" + N(24) + "LUCA writes quickly, his tongue between his teeth. " +
        N(25) + "DESTINY digs a red bottle cap out of the junk drawer and tapes it to the folded page.</em></p>" +
        "<p><strong>LUCA:</strong> " + N(26) + "It looks like a grocery list with a bottle cap on it.</p>" +
        "<p><strong>DESTINY:</strong> " + N(27) + "From the stage, it will look like a letter. " +
        "<em>(She sets it on its tape square.)</em> " +
        N(28) + "Theater is mostly people agreeing to believe things.</p>" +
        "<p><em>" + N(29) + "The stage lights shift, and MARIELA rushes past, grabs the letter, and steps into the light. " +
        N(30) + "A moment later, her voice carries backstage, clear and steady, reading every word without a single pause. " +
        N(31) + "LUCA presses his ear to the curtain.</em></p>" +
        "<p><strong>LUCA:</strong> <em>(whispering)</em> " + N(32) + "She's not even looking at it.</p>" +
        "<p><strong>DESTINY:</strong> " + N(33) + "She memorized it weeks ago. " +
        N(34) + "The letter was never really for her; it was for the people in the seats. " +
        "<em>(She hands him the clipboard.)</em> " +
        N(35) + "Now go find the real one, and next time, check the pockets first.</p>" +
        "<p><em>" + N(36) + "LUCA grins and heads straight for the costume rack.</em></p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "What is the main conflict in this scene?",
          choices: [
            { letter: "A", text: "Luca and Destiny argue over who should lead the props crew." },
            { letter: "B", text: "The crew must replace a missing prop before it is needed onstage." },
            { letter: "C", text: "Mariela refuses to go onstage without the original letter." },
            { letter: "D", text: "The stage lights fail just before the second act begins." }
          ],
          correct: "B"
        },
        {
          id: "destiny",
          sol: "10.RL.1.C",
          stem: "Destiny's words and actions in sentences 15 through 23 characterize her as —",
          choices: [
            { letter: "A", text: "calm and practical" },
            { letter: "B", text: "strict and impatient" },
            { letter: "C", text: "careless and rushed" },
            { letter: "D", text: "shy and uncertain" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the scene backstage at Crestview?",
          choices: [
            { letter: "A", text: "Hard work on a prop is wasted if the audience never notices it." },
            { letter: "B", text: "Seniors should never trust freshmen with important jobs." },
            { letter: "C", text: "Actors depend completely on the props they are given." },
            { letter: "D", text: "A problem that feels huge can often be solved by staying calm." }
          ],
          correct: "D"
        },
        {
          id: "directions",
          sol: "10.RL.3.A",
          stem: "The stage directions in sentences 29 through 31 mainly help the scene by —",
          choices: [
            { letter: "A", text: "introducing a new problem with the stage lights" },
            { letter: "B", text: "showing that Luca has stopped caring about the play" },
            { letter: "C", text: "showing that the replacement letter works onstage" },
            { letter: "D", text: "explaining where the original letter was hidden" }
          ],
          correct: "C"
        },
        {
          id: "believe",
          sol: "10.RL.2.B",
          stem: "In sentence 28, Destiny's remark that theater is mostly people agreeing to believe things suggests that —",
          choices: [
            { letter: "A", text: "audiences accept simple props if the performance convinces them" },
            { letter: "B", text: "most people in the audience have never seen a real letter" },
            { letter: "C", text: "actors must agree on their lines before every performance" },
            { letter: "D", text: "the crew should tell the audience when a prop is fake" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the scene is most ironic?",
          choices: [
            { letter: "A", text: "Destiny finds a bottle cap in a drawer full of junk." },
            { letter: "B", text: "Luca searches the hallway before the costume rack." },
            { letter: "C", text: "The audience sits forty feet away under blue lights." },
            { letter: "D", text: "Luca frets over the letter, but Mariela never looks at it." }
          ],
          correct: "D"
        },
        {
          id: "glance",
          sol: "10.RV.1.B",
          stem: "In sentence 23, the word glance most nearly means —",
          choices: [
            { letter: "A", text: "copy carefully" },
            { letter: "B", text: "point toward" },
            { letter: "C", text: "look quickly" },
            { letter: "D", text: "shine brightly" }
          ],
          correct: "C"
        },
        {
          id: "grocery",
          sol: "10.RL.2.A",
          stem: "Luca's comparison in sentence 26, a grocery list with a bottle cap on it, mainly shows that he —",
          choices: [
            { letter: "A", text: "is hungry after working through intermission" },
            { letter: "B", text: "doubts that the replacement will fool anyone" },
            { letter: "C", text: "thinks Destiny's handwriting is hard to read" },
            { letter: "D", text: "wants to add more details to the new letter" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · Functional text (level 1) ───────────────────────── */
    {
      id: "g10-ri-c77-invitational",
      family: "G10",
      title: "Riverbend Invitational Guide",
      kind: "Functional text · 10.RI",
      blurb: "Schedule, bib rules, spectator limits and the lightning plan for a big cross-country meet.",
      level: 1,
      passage:
        "<p><strong>Riverbend Invitational Cross-Country Meet: Runner and Spectator Guide</strong></p>" +
        "<p><strong>Welcome.</strong> " + N(1) + "The Riverbend Invitational hosts twenty-two high school teams on a 5,000-meter course that loops through the meadow, woods, and lakeshore trail of Riverbend County Park. " +
        N(2) + "This guide explains the schedule, the rules for runners and spectators, and what to do if the weather changes the plan. " +
        N(3) + "Coaches should share it with every athlete and family before the meet.</p>" +
        "<p><strong>Schedule.</strong> " + N(4) + "The course opens for team walk-throughs at 7:30 a.m. " +
        N(5) + "The JV girls' race begins at 8:45, followed by the JV boys at 9:30, the varsity girls at 10:15, and the varsity boys at 11:00. " +
        N(6) + "Awards for each race will be presented at the pavilion about thirty minutes after its last runner finishes. " +
        N(7) + "Team scores will be posted on the board beside the timing tent and on the meet website.</p>" +
        "<p><strong>Check-In and Bibs.</strong> " + N(8) + "Each coach must check in at the timing tent by 8:00 a.m. to collect the team's bib numbers and timing chips. " +
        N(9) + "Runners must wear their bibs on the front of their jerseys, fully visible, with all four corners pinned. " +
        N(10) + "A bib that is folded, covered, or worn on the back may cause the timing system to miss a runner's finish, and results cannot be corrected after they are posted.</p>" +
        "<p><strong>Spectator Rules.</strong> " + N(11) + "Families are welcome along most of the course, but the wooded section between the 1.5- and 2.5-kilometer marks is closed to spectators because the trail is too narrow for crowds. " +
        N(12) + "Spectators must stay behind the orange flags at all times and may not run alongside athletes, even for a few steps. " +
        N(13) + "An official who sees a spectator pacing a runner may disqualify that runner. " +
        N(14) + "Pets must be leashed and are not allowed within fifty meters of the start or finish lines.</p>" +
        "<p><strong>Weather.</strong> " + N(15) + "The meet will be held in rain or cold. " +
        N(16) + "If lightning is detected within eight miles of the park, all races will pause, and runners and spectators must move to vehicles or the pavilion until thirty minutes pass without a new strike. " +
        N(17) + "Updates will be sent by text message to coaches and posted on the meet website.</p>" +
        "<p><strong>Parking.</strong> " + N(18) + "Team buses should use the gravel lot on Mill Road. " +
        N(19) + "Spectator parking costs $5 per car in the main lot; the fee supports the Riverbend High School cross-country program. " +
        N(20) + "Arriving at least forty-five minutes before your race is strongly recommended, since the main lot usually fills by 10:00 a.m.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Riverbend guide is written mainly for —",
          choices: [
            { letter: "A", text: "park rangers who maintain the trails" },
            { letter: "B", text: "officials who time and score the races" },
            { letter: "C", text: "coaches, runners and families attending the meet" },
            { letter: "D", text: "students deciding whether to join a team" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings in the Riverbend guide mainly help readers —",
          choices: [
            { letter: "A", text: "find the information they need quickly" },
            { letter: "B", text: "learn the history of the invitational" },
            { letter: "C", text: "compare this meet with other meets" },
            { letter: "D", text: "understand which teams are favored to win" }
          ],
          correct: "A"
        },
        {
          id: "bibs",
          sol: "10.RI.1.B",
          stem: "Which sentence best explains why runners must pin all four corners of their bibs?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "official",
          sol: "10.RI.2.B",
          stem: "The guide includes sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "describe the duties of the timing officials" },
            { letter: "B", text: "state the penalty that makes the spectator rule serious" },
            { letter: "C", text: "warn runners not to pace one another during races" },
            { letter: "D", text: "explain why the wooded section is closed to families" }
          ],
          correct: "B"
        },
        {
          id: "parking",
          sol: "10.RI.2.C",
          stem: "Which conclusion is best supported by sentences 5 and 20 together?",
          choices: [
            { letter: "A", text: "Late arrivals for the varsity boys' race may find the main lot already full." },
            { letter: "B", text: "The JV girls' race will probably be delayed by heavy traffic on Mill Road." },
            { letter: "C", text: "Team buses are not allowed to park anywhere inside the county park." },
            { letter: "D", text: "Every awards ceremony will take place before the first varsity race." }
          ],
          correct: "A"
        },
        {
          id: "spectators",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the Spectator Rules section?",
          choices: [
            { letter: "A", text: "Families may watch only the start and finish of each race." },
            { letter: "B", text: "Spectators must buy a parking pass before entering the park." },
            { letter: "C", text: "Pets may run beside athletes if they are kept on a leash." },
            { letter: "D", text: "Families may watch most of the course but must keep clear of runners." }
          ],
          correct: "D"
        },
        {
          id: "pacing",
          sol: "10.RV.1.C",
          stem: "In sentence 13, the word pacing most nearly means —",
          choices: [
            { letter: "A", text: "walking back and forth nervously" },
            { letter: "B", text: "running alongside to set a speed" },
            { letter: "C", text: "measuring a distance by footsteps" },
            { letter: "D", text: "cheering loudly from the sidelines" }
          ],
          correct: "B"
        },
        {
          id: "disqualify",
          sol: "10.RV.1.A",
          stem: "The word disqualify in sentence 13 begins with the prefix dis-, as in disagree and disconnect. To disqualify a runner is to —",
          choices: [
            { letter: "A", text: "move the runner to a slower race" },
            { letter: "B", text: "give the runner a warning" },
            { letter: "C", text: "declare the runner no longer eligible" },
            { letter: "D", text: "add time to the runner's result" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · Argument (level 3) ───────────────────────── */
    {
      id: "g10-ri-c77-curtaincall",
      family: "G10",
      title: "A Curtain Call for the Crew",
      kind: "Argument · 10.RI",
      blurb: "A student editorial argues that the stage crew has earned varsity letters.",
      level: 3,
      passage:
        "<p>" + N(1) + "When the curtain fell on Lakeview High's spring musical last year, thirty-one actors walked to the front of the stage to take their bows. " +
        N(2) + "Behind them, in the dark, nineteen students were already resetting furniture, coiling cables, and hanging costumes, and most of the audience never knew they existed. " +
        N(3) + "That invisibility is part of the job; a good stage crew is supposed to go unnoticed during a show. " +
        N(4) + "But it should not extend to the way our school recognizes student effort, and that is why Lakeview should award varsity letters to students who complete a full season on the technical crew.</p>" +
        "<p>" + N(5) + "The first reason is simple fairness in measuring commitment. " +
        N(6) + "Athletes earn letters by attending practices and competing for a full season, and the requirement is meaningful because the commitment is real. " +
        N(7) + "Crew members match it. " +
        N(8) + "According to the theater director's attendance records, the average crew member logged 142 hours during last year's musical, including eleven rehearsals that ran past nine o'clock at night. " +
        N(9) + "That total is higher than the 120 hours the athletic office uses as a guideline for a fall sport.</p>" +
        "<p>" + N(10) + "The second reason is that crew work builds skills our school claims to value. " +
        N(11) + "Crew members read technical diagrams, operate lighting boards that cost more than a used car, solve problems under deadline, and coordinate with dozens of people through a headset in real time. " +
        N(12) + "If Lakeview's mission statement is serious about \"preparing students for careers and teamwork,\" then it should reward a program that teaches both.</p>" +
        "<p>" + N(13) + "Some will argue that letters are an athletic tradition and that expanding them will make them less special. " +
        N(14) + "This concern deserves a fair answer. " +
        N(15) + "Letters are meaningful not because they are rare, but because they mark a demanding season completed. " +
        N(16) + "Several schools in our district have already added letters for band and debate, and their athletic directors report no drop in student-athletes' pride in earning one. " +
        N(17) + "Others may worry about cost, but a letter and certificate cost the school about fourteen dollars per student, and the theater boosters have offered to pay for the first year.</p>" +
        "<p>" + N(18) + "Recognition shapes what students choose to do. " +
        N(19) + "When a school hands out letters only on a field, it quietly tells students that effort counts only when a crowd is watching. " +
        N(20) + "The crew at Lakeview does its best work precisely when no one is looking. " +
        N(21) + "It is time we looked anyway. (Noor Al-Sayed, junior, for the Lakeview Ledger)</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's central claim in the editorial?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "hours",
          sol: "10.RI.1.B",
          stem: "Which evidence does the author use to show that crew members' commitment equals that of athletes?",
          choices: [
            { letter: "A", text: "Thirty-one actors took their bows at the end of the musical." },
            { letter: "B", text: "Other schools have added letters for band and debate." },
            { letter: "C", text: "The theater boosters offered to pay for the first year of letters." },
            { letter: "D", text: "Crew members averaged 142 hours, more than a fall sport's 120." }
          ],
          correct: "D"
        },
        {
          id: "rare",
          sol: "10.RI.2.C",
          stem: "In paragraph 4, the author answers the worry that letters will become less special mainly by —",
          choices: [
            { letter: "A", text: "redefining what makes a letter meaningful and citing other schools" },
            { letter: "B", text: "admitting that letters should remain a purely athletic tradition" },
            { letter: "C", text: "arguing that athletes care less about letters than they claim" },
            { letter: "D", text: "pointing out that the cost of each letter is very small" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "Which choice best describes the overall structure of the editorial?",
          choices: [
            { letter: "A", text: "A list of problems with the theater program, then a call for a new director" },
            { letter: "B", text: "A comparison of two schools, then a summary of their differences" },
            { letter: "C", text: "A scene and a claim, two reasons, answers to objections, a closing point" },
            { letter: "D", text: "A timeline of the musical, then an account of its reviews" }
          ],
          correct: "C"
        },
        {
          id: "car",
          sol: "10.RI.2.B",
          stem: "In sentence 11, the author describes lighting boards that cost more than a used car mainly to —",
          choices: [
            { letter: "A", text: "complain that the theater program spends too much" },
            { letter: "B", text: "stress how much responsibility crew members are trusted with" },
            { letter: "C", text: "suggest that the school should sell some of its equipment" },
            { letter: "D", text: "explain why the crew needs more adult supervision" }
          ],
          correct: "B"
        },
        {
          id: "looked",
          sol: "10.RI.1.C",
          stem: "The author returns to the idea of being unseen in sentences 20 and 21 after raising it in sentences 2 and 3 mainly to —",
          choices: [
            { letter: "A", text: "turn the crew's invisibility into a reason to honor it" },
            { letter: "B", text: "suggest that the crew should take bows with the actors" },
            { letter: "C", text: "admit that the crew prefers to remain in the background" },
            { letter: "D", text: "criticize audiences for leaving before the curtain falls" }
          ],
          correct: "A"
        },
        {
          id: "quietly",
          sol: "10.RV.1.D",
          stem: "In sentence 19, the author says the school quietly tells students something. Compared with says, quietly tells suggests a message that is —",
          choices: [
            { letter: "A", text: "spoken softly at an awards ceremony" },
            { letter: "B", text: "deliberately hidden from parents" },
            { letter: "C", text: "polite but easily ignored" },
            { letter: "D", text: "unspoken but still powerful" }
          ],
          correct: "D"
        },
        {
          id: "mark",
          sol: "10.RV.1.C",
          stem: "In sentence 15, the word mark most nearly means —",
          choices: [
            { letter: "A", text: "grade" },
            { letter: "B", text: "stain" },
            { letter: "C", text: "signal" },
            { letter: "D", text: "target" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
