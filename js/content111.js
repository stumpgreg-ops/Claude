/* SOL Labyrinth — Grade 11 long packs (file 111): a snowstorm, a bookstore, a neighborhood block party,
 * inventors and patents. Literary, informational, vocabulary, paired, poetry, drama, functional and argument.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g11-rl-c111-hardware",
      family: "G11",
      title: "Open Until Closing",
      kind: "Literary · 11.RL",
      blurb: "A snowstorm, a hardware store, and a long shift Anneli did not want to work.",
      level: 2,
      passage:
        "<p>" + N(1) + "By three o'clock the snow had erased the parking lines outside Virtanen Hardware, and Anneli had already decided the afternoon was ruined. " +
        N(2) + "Her friends kept texting photos from the hill behind the middle school, where the sledding run was turning glassy and fast. " +
        N(3) + "Uncle Pekka, who owned the store and moved through it like a man rereading a favorite book, had asked her to stay until closing. " +
        N(4) + "\"Storm days are our busiest,\" he said, stacking bags of rock salt beside the register. \"People remember who was open.\" " +
        N(5) + "Anneli thought people mostly remembered who had the best sledding photos, but she kept that opinion to herself.</p>" +
        "<p>" + N(6) + "The first customer was Mrs. Okafor from the bakery, who needed two snow shovels and an extension cord. " +
        N(7) + "Then came a contractor with frost in his beard, a boy sent by his grandmother for lamp oil, and a nurse on her way to the hospital who bought tire chains and whose hands were too cold to work the card reader. " +
        N(8) + "Anneli ran the card for her, and the nurse thanked her as if she had done something brave.</p>" +
        "<p>" + N(9) + "Around five, the power flickered, steadied, and flickered again. " +
        N(10) + "Pekka lit the battery lanterns on the counter without comment, as though he had been waiting for this moment all winter. " +
        N(11) + "The store became a small island of yellow light, and the snow pressed against the windows like a crowd hoping to get in. " +
        N(12) + "Customers lingered now, stamping their boots and trading news about which roads the plows had reached. " +
        N(13) + "Someone said the county had closed Route 9. " +
        N(14) + "Someone else said the Lindqvist family up on the ridge had lost power at noon and had a baby at home. " +
        N(15) + "Anneli watched her uncle quietly set aside a space heater, three lanterns, and a box of batteries, then write LINDQVIST across the box in marker.</p>" +
        "<p>" + N(16) + "\"Who's taking that up there?\" she asked. " +
        N(17) + "\"Their neighbor has a snowmobile,\" he said. \"He'll be by at six. If he isn't, I'll walk it.\" " +
        N(18) + "\"The ridge is two miles,\" Anneli said. " +
        N(19) + "Pekka shrugged, which in her family meant the subject was closed.</p>" +
        "<p>" + N(20) + "At ten past six the neighbor had not come, and Anneli found herself lacing her boots without having decided anything. " +
        N(21) + "She told herself it was only because her uncle's knee had been bad since November. " +
        N(22) + "Then the bell above the door rang, and the neighbor stomped in, apologizing, snow up to his knees. " +
        N(23) + "Anneli helped him strap the box to the back of the snowmobile and watched the red taillight shrink up the ridge road until the storm swallowed it.</p>" +
        "<p>" + N(24) + "Back inside, she noticed that her phone had died sometime in the last hour. " +
        N(25) + "She did not plug it in right away. " +
        N(26) + "Instead she straightened the rack of work gloves, refilled the bin of rock salt, and checked that the sign on the door still said OPEN, though she knew it did.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story about Anneli and her uncle most clearly develop?",
          choices: [
            { letter: "A", text: "Young people should give up their free time whenever adults ask." },
            { letter: "B", text: "Being useful to others in a crisis can quietly reshape what matters to a person." },
            { letter: "C", text: "Storms reveal which members of a community are selfish." },
            { letter: "D", text: "Modern technology tends to fail people at the worst possible moment." }
          ],
          correct: "B"
        },
        {
          id: "boots",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "The detail in sentence 20 that Anneli laces her boots \"without having decided anything\" suggests that she —",
          choices: [
            { letter: "A", text: "has begun acting on her concern before admitting it to herself" },
            { letter: "B", text: "plans to leave the store early to join her friends sledding" },
            { letter: "C", text: "is following an order her uncle gave her earlier that day" },
            { letter: "D", text: "wants to prove to Pekka that she can walk farther than he can" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which statement best describes how Anneli changes from the beginning of the story to the end?",
          choices: [
            { letter: "A", text: "She goes from trusting her uncle to doubting his judgment." },
            { letter: "B", text: "She goes from enjoying the job to wishing she had gone sledding." },
            { letter: "C", text: "She goes from fearing the storm to ignoring it completely." },
            { letter: "D", text: "She goes from resenting the shift to caring about the store's work." }
          ],
          correct: "D"
        },
        {
          id: "crowd",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 11, the comparison of the snow to \"a crowd hoping to get in\" mainly emphasizes —",
          choices: [
            { letter: "A", text: "how loudly the wind is blowing against the old building" },
            { letter: "B", text: "that customers are angry the store is about to close" },
            { letter: "C", text: "the store's role as a lit shelter in a dark, pressing storm" },
            { letter: "D", text: "that the windows of the store are likely to break soon" }
          ],
          correct: "C"
        },
        {
          id: "open",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The final sentence, in which Anneli checks a sign she knows already says OPEN, creates a tone that is —",
          choices: [
            { letter: "A", text: "quietly affirming" },
            { letter: "B", text: "bitterly sarcastic" },
            { letter: "C", text: "nervously hurried" },
            { letter: "D", text: "openly mournful" }
          ],
          correct: "A"
        },
        {
          id: "closed",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 19, the phrase \"the subject was closed\" most nearly means that —",
          choices: [
            { letter: "A", text: "the store would close as soon as the neighbor arrived" },
            { letter: "B", text: "Pekka did not understand what Anneli was asking" },
            { letter: "C", text: "the road to the ridge had been shut by the county" },
            { letter: "D", text: "Pekka considered the matter settled and not up for debate" }
          ],
          correct: "D"
        },
        {
          id: "phone",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The author includes sentences 24 and 25 about Anneli's dead phone mainly to —",
          choices: [
            { letter: "A", text: "explain why her friends stopped texting her about the hill" },
            { letter: "B", text: "contrast her focus at the start with what holds her attention now" },
            { letter: "C", text: "show that the power outage has spread to the whole town" },
            { letter: "D", text: "suggest that she plans to call the Lindqvist family later" }
          ],
          correct: "B"
        },
        {
          id: "lingered",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word lingered most nearly means —",
          choices: [
            { letter: "A", text: "complained" },
            { letter: "B", text: "hurried off" },
            { letter: "C", text: "stayed on" },
            { letter: "D", text: "shopped" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c111-margins",
      family: "G11",
      title: "Marginalia",
      kind: "Literary · 11.RL",
      blurb: "Min-seo prices a box of used books and finds a stranger's conversation in the margins.",
      level: 3,
      passage:
        "<p>" + N(1) + "The box arrived on a Tuesday, which at Second Leaf Books meant it would sit beside the counter until someone had the patience for it. " +
        N(2) + "Min-seo had patience for very little that summer, but her grandmother had gone to the bank, and the store was empty, and the box smelled faintly of cedar, so she opened it. " +
        N(3) + "Inside were forty-odd paperbacks, most of them novels, nearly all of them ruined.</p>" +
        "<p>" + N(4) + "Ruined was her grandmother's word, or rather the word Min-seo assumed her grandmother would use. " +
        N(5) + "Every margin was crowded with pencil: underlines, arrows, question marks, whole sentences squeezed sideways up the edge of the page. " +
        N(6) + "Someone had argued with these books for years. " +
        N(7) + "Next to a character's grand speech about duty, the reader had written, \"Easy to say when you own the farm.\" " +
        N(8) + "Beside a description of a sunset that went on for a full page, a single word: \"Enough.\"</p>" +
        "<p>" + N(9) + "Min-seo began sorting them into the donation crate, the place where unsellable things went to become someone else's problem. " +
        N(10) + "Then she reached a thin mystery in which the handwriting changed halfway through. " +
        N(11) + "The new hand was rounder and darker, and it answered the first. " +
        N(12) + "Where the first reader had scrawled \"The butler, obviously,\" the second had written underneath, \"You always say the butler.\" " +
        N(13) + "Three chapters later, in the first hand: \"Fine. Not the butler.\" " +
        N(14) + "She sat down on the step stool and read the margins of the whole book, ignoring the story printed in the middle.</p>" +
        "<p>" + N(15) + "When her grandmother came back, Min-seo did not explain; she simply held the book open. " +
        N(16) + "Halmeoni read for a long moment, her reading glasses pushed up into her gray hair as if they had been forgotten there on purpose. " +
        N(17) + "\"The seller said they belonged to his parents,\" she said at last. \"Married fifty-one years.\" " +
        N(18) + "\"We can't sell them like this,\" Min-seo said, and was surprised to find that she meant something different from what she had meant an hour ago. " +
        N(19) + "Her grandmother took a price gun from the drawer, considered it, and put it back.</p>" +
        "<p>" + N(20) + "They built a shelf that afternoon from a plank and two brackets meant for a different wall. " +
        N(21) + "Min-seo lettered the card herself: READ WITH SOMEONE. NOT FOR SALE. BORROW AND RETURN. " +
        N(22) + "By August the mystery had gone out and come back four times, and the margins had acquired a third hand, then a fourth, small and cramped, which argued that it had been the gardener all along. " +
        N(23) + "Min-seo knew whose handwriting it was, because she had sharpened the pencil herself, and she did not mind at all that nobody else knew.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Marginalia\"?",
          choices: [
            { letter: "A", text: "Objects others consider damaged may hold a value money cannot measure." },
            { letter: "B", text: "Old books should be protected from careless readers." },
            { letter: "C", text: "Small businesses cannot survive without selling everything they own." },
            { letter: "D", text: "Mystery novels are more enjoyable when read alone." }
          ],
          correct: "A"
        },
        {
          id: "pricegun",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentence 19, Halmeoni's choice to take out the price gun and then put it back suggests that she —",
          choices: [
            { letter: "A", text: "has forgotten how much paperbacks usually cost" },
            { letter: "B", text: "is annoyed that Min-seo opened the box without asking" },
            { letter: "C", text: "briefly weighs selling the books before deciding not to" },
            { letter: "D", text: "plans to return the books to the seller the next day" }
          ],
          correct: "C"
        },
        {
          id: "meant",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 18, in which Min-seo means something new by \"We can't sell them like this,\" reveals that she —",
          choices: [
            { letter: "A", text: "still believes the pencil marks make the books worthless" },
            { letter: "B", text: "now sees the books as too personal to treat as stock" },
            { letter: "C", text: "wants her grandmother to erase the notes before pricing them" },
            { letter: "D", text: "is embarrassed that she read a stranger's private writing" }
          ],
          correct: "B"
        },
        {
          id: "argued",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Sentence 6 says that someone \"had argued with these books for years.\" This figurative statement mainly conveys that the first reader —",
          choices: [
            { letter: "A", text: "disliked reading and finished books only out of duty" },
            { letter: "B", text: "wrote angry letters to the authors of the novels" },
            { letter: "C", text: "lent the books to friends in order to debate them" },
            { letter: "D", text: "responded to the books actively and with strong opinions" }
          ],
          correct: "D"
        },
        {
          id: "problem",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 9, describing the donation crate as the place where things \"become someone else's problem\" gives the sentence a tone that is —",
          choices: [
            { letter: "A", text: "wry and slightly cynical" },
            { letter: "B", text: "solemn and respectful" },
            { letter: "C", text: "frightened and urgent" },
            { letter: "D", text: "cheerful and admiring" }
          ],
          correct: "A"
        },
        {
          id: "ruined",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Sentence 4 explains that ruined was the word Min-seo \"assumed her grandmother would use.\" This detail suggests that the word ruined —",
          choices: [
            { letter: "A", text: "is the exact term the store uses on its price tags" },
            { letter: "B", text: "reflects Min-seo's guess about value, not a settled fact" },
            { letter: "C", text: "describes water damage the box suffered in shipping" },
            { letter: "D", text: "was written on the outside of the box by the seller" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final sentence about the pencil Min-seo sharpened resolve the story?",
          choices: [
            { letter: "A", text: "It reveals that Min-seo secretly wrote all of the earlier notes." },
            { letter: "B", text: "It shows that the shelf failed because no one borrowed the books." },
            { letter: "C", text: "It shows Min-seo joining the conversation she once meant to discard." },
            { letter: "D", text: "It reveals that the grandmother plans to sell the books after all." }
          ],
          correct: "C"
        },
        {
          id: "scrawled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the contrast with the second reader's \"rounder\" hand (sentence 11) helps show that scrawled means —",
          choices: [
            { letter: "A", text: "copied neatly from another source" },
            { letter: "B", text: "erased and written over again" },
            { letter: "C", text: "whispered aloud while reading" },
            { letter: "D", text: "written quickly and carelessly" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c111-blockparty",
      family: "G11",
      title: "The Speaker Cord",
      kind: "Literary · 11.RL",
      blurb: "Kobby is in charge of the music at the Delmont Street block party, until the music stops.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kobby Asante had been in charge of the music for the Delmont Street block party for three years, and he took the job seriously. " +
        N(2) + "He built the playlist in March. " +
        N(3) + "He tested the speakers in May. " +
        N(4) + "On the morning of the party in July, he taped every cable to the sidewalk so that no one would trip.</p>" +
        "<p>" + N(5) + "By four o'clock the street was full. " +
        N(6) + "Mrs. Duarte had set up her grill at the corner, and the smell of charred peppers drifted all the way to the fire hydrant. " +
        N(7) + "The twins from number 14 were selling lemonade at a price that went up every hour. " +
        N(8) + "Children chalked a hopscotch court that stretched for half a block. " +
        N(9) + "Kobby stood behind his folding table like a pilot in a cockpit, watching the crowd and choosing each song with care.</p>" +
        "<p>" + N(10) + "At a quarter past six, the music stopped. " +
        N(11) + "Kobby checked the laptop, then the mixer, then the speakers. " +
        N(12) + "Everything looked fine. " +
        N(13) + "Then he found the problem: a delivery truck had backed over the main cord where it crossed the curb, and the plug was crushed flat. " +
        N(14) + "He did not have a spare. " +
        N(15) + "People were already turning to look at him, and the silence felt louder than the music had been.</p>" +
        "<p>" + N(16) + "Before Kobby could say anything, old Mr. Ferreira from number 9 stood up from his lawn chair. " +
        N(17) + "He went into his house and came out carrying a battered accordion in a case held together with rope. " +
        N(18) + "He sat down in the middle of the street, opened the case, and began to play a fast tune Kobby had never heard. " +
        N(19) + "For a moment no one moved. " +
        N(20) + "Then Mrs. Duarte began to clap along, and the twins abandoned their lemonade stand to dance, and soon half the block was in the street.</p>" +
        "<p>" + N(21) + "Kobby sat on the curb next to his useless speakers and listened. " +
        N(22) + "He had spent months making sure nothing would go wrong, and something had gone wrong anyway. " +
        N(23) + "Yet the party was better than it had ever been. " +
        N(24) + "When Mr. Ferreira finally stopped to rest, Kobby walked over and asked him what the song was called. " +
        N(25) + "The old man laughed and said it did not have a name; his father had made it up at a wedding sixty years ago. " +
        N(26) + "Kobby took out his phone and asked if he could record the next one. " +
        N(27) + "Next year, he decided, the playlist would have a different first song.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is most clearly supported by the story of Kobby and Mr. Ferreira as a whole?",
          choices: [
            { letter: "A", text: "Careful planning always prevents problems at public events." },
            { letter: "B", text: "Older neighbors rarely enjoy loud parties." },
            { letter: "C", text: "When plans fail, a community can create something better together." },
            { letter: "D", text: "Recorded music is more reliable than live music." }
          ],
          correct: "C"
        },
        {
          id: "silence",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 15 says that the silence \"felt louder than the music had been.\" This detail mainly suggests that Kobby —",
          choices: [
            { letter: "A", text: "feels embarrassed and responsible for the problem" },
            { letter: "B", text: "thinks the music had been playing too loudly" },
            { letter: "C", text: "is relieved to have a break from his job" },
            { letter: "D", text: "cannot hear what the neighbors are saying" }
          ],
          correct: "A"
        },
        {
          id: "kobby",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Based on sentences 1 through 4, Kobby is best described as —",
          choices: [
            { letter: "A", text: "careless" },
            { letter: "B", text: "thorough" },
            { letter: "C", text: "shy" },
            { letter: "D", text: "bossy" }
          ],
          correct: "B"
        },
        {
          id: "pilot",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, comparing Kobby to \"a pilot in a cockpit\" mainly emphasizes that he —",
          choices: [
            { letter: "A", text: "would rather be traveling than at the party" },
            { letter: "B", text: "is nervous about the size of the crowd" },
            { letter: "C", text: "has never run the music before" },
            { letter: "D", text: "feels in control and focused on his task" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The details in sentences 6 through 8 (the grill, the lemonade, the chalk) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and uneasy" },
            { letter: "B", text: "lonely and quiet" },
            { letter: "C", text: "lively and relaxed" },
            { letter: "D", text: "formal and serious" }
          ],
          correct: "C"
        },
        {
          id: "useless",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 21, the word useless suggests that the speakers —",
          choices: [
            { letter: "A", text: "can no longer do their job without the cord" },
            { letter: "B", text: "were cheap and badly made from the start" },
            { letter: "C", text: "belong to someone else on the block" },
            { letter: "D", text: "were broken by the truck along with the plug" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The last sentence of the story, about next year's first song, shows that Kobby —",
          choices: [
            { letter: "A", text: "plans to stop running the music at future parties" },
            { letter: "B", text: "will buy a spare cord before next summer" },
            { letter: "C", text: "is still upset that his playlist was interrupted" },
            { letter: "D", text: "has been changed by what happened and will include it" }
          ],
          correct: "D"
        },
        {
          id: "abandoned",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word abandoned in sentence 20 ends with the suffix -ed, as do clapped and danced. In all three words, the suffix -ed signals —",
          choices: [
            { letter: "A", text: "an action that will happen later" },
            { letter: "B", text: "an action that already happened" },
            { letter: "C", text: "a person who does the action" },
            { letter: "D", text: "the opposite of the base word" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c111-patents",
      family: "G11",
      title: "What a Patent Really Buys",
      kind: "Informational · 11.RI",
      blurb: "A patent is not a trophy or a fortune. It is a bargain, and the terms matter.",
      level: 2,
      passage:
        "<p>" + N(1) + "Many people imagine a patent as a kind of trophy: proof that an idea is brilliant and a guarantee that its inventor will grow rich. " +
        N(2) + "Neither belief is accurate. " +
        N(3) + "A patent is better understood as a bargain between an inventor and the public, and like any bargain, it has terms that cut both ways.</p>" +
        "<p>" + N(4) + "Here is the deal. " +
        N(5) + "The inventor agrees to explain, in writing and in enough detail for a skilled person to copy it, exactly how the invention works. " +
        N(6) + "That explanation is published for anyone to read. " +
        N(7) + "In exchange, the government grants the inventor the right to stop others from making, using, or selling the invention for a limited time, which in the United States is generally twenty years from the date the application is filed. " +
        N(8) + "When that time runs out, the invention belongs to everyone.</p>" +
        "<p>" + N(9) + "Not every idea qualifies. " +
        N(10) + "An invention must be new, it must be useful, and it must not be obvious to someone who works in that field. " +
        N(11) + "To test these requirements, a patent examiner searches what is called prior art: earlier patents, articles, products, and anything else that shows what was already known. " +
        N(12) + "Consider a high school student who designs a clever hinge that lets a music stand fold flat in one motion. " +
        N(13) + "She may be crushed to learn that nearly the same hinge appears in a forty-year-old patent for a camping table. " +
        N(14) + "Her design may still be new to her, but it is not new to the world, and the world is the standard that counts.</p>" +
        "<p>" + N(15) + "Even a granted patent is less powerful than it sounds. " +
        N(16) + "Preparing an application usually costs thousands of dollars once fees and legal help are added up. " +
        N(17) + "The patent office does not police the market, either; if a company copies a patented product, the owner must discover the copying and go to court, which can cost far more than the patent did. " +
        N(18) + "Many patented inventions never earn their owners a single dollar.</p>" +
        "<p>" + N(19) + "Why, then, does the system exist? " +
        N(20) + "Part of the answer is that a patent can attract investors or allow an inventor to license the idea to a manufacturer for a fee. " +
        N(21) + "The larger answer lies in the published explanations themselves. " +
        N(22) + "Millions of them now sit in public databases, forming an enormous library of solved problems that any curious reader can search. " +
        N(23) + "The student with the hinge, after her disappointment, might find in that library a dozen ideas she had never considered. " +
        N(24) + "The trophy may belong to one inventor for twenty years, but the instructions belong to the next inventor forever.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"What a Patent Really Buys\"?",
          choices: [
            { letter: "A", text: "Patents mainly reward inventors who are wealthy enough to hire lawyers." },
            { letter: "B", text: "Most inventions are too obvious to receive a patent." },
            { letter: "C", text: "A patent trades a temporary right for public knowledge that outlasts it." },
            { letter: "D", text: "The patent office should do more to stop companies from copying." }
          ],
          correct: "C"
        },
        {
          id: "length",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, what happens to an invention when its patent term ends?",
          choices: [
            { letter: "A", text: "It becomes available for anyone to make and use." },
            { letter: "B", text: "The inventor must file a new application to renew it." },
            { letter: "C", text: "The government takes ownership and sells it." },
            { letter: "D", text: "Its published explanation is removed from public databases." }
          ],
          correct: "A"
        },
        {
          id: "weak",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Select TWO sentences that provide evidence that a granted patent offers less protection than many people expect.",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward the patent system is best described as —",
          choices: [
            { letter: "A", text: "openly hostile" },
            { letter: "B", text: "realistic but appreciative" },
            { letter: "C", text: "uncritically enthusiastic" },
            { letter: "D", text: "confused and uncertain" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author mainly organize the article on patents?",
          choices: [
            { letter: "A", text: "By telling the life story of one inventor from childhood onward" },
            { letter: "B", text: "By comparing the patent laws of several different countries" },
            { letter: "C", text: "By listing steps for filing a patent in the order they occur" },
            { letter: "D", text: "By correcting a common belief, then explaining terms, limits, and value" }
          ],
          correct: "D"
        },
        {
          id: "hinge",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the example of the music-stand hinge in sentences 12 through 14 mainly to —",
          choices: [
            { letter: "A", text: "show how the requirement of newness works in practice" },
            { letter: "B", text: "argue that students should not try to invent things" },
            { letter: "C", text: "prove that camping equipment is often patented" },
            { letter: "D", text: "explain why legal fees for patents are so high" }
          ],
          correct: "A"
        },
        {
          id: "trophy",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 24, the author returns to the image of a trophy from sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "admit that the opening comparison was entirely correct" },
            { letter: "B", text: "suggest that inventors should display their patents" },
            { letter: "C", text: "contrast a short-lived personal reward with lasting public gain" },
            { letter: "D", text: "introduce a new topic about prizes for young inventors" }
          ],
          correct: "C"
        },
        {
          id: "prior",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The phrase prior art in sentence 11 uses prior, from a Latin word meaning earlier, as in prioritize and priority. Based on this root, prior art refers to —",
          choices: [
            { letter: "A", text: "artwork that must be attached to an application" },
            { letter: "B", text: "the most important features of a new invention" },
            { letter: "C", text: "evidence of a copy made after the patent was granted" },
            { letter: "D", text: "knowledge that existed before the invention" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c111-lakesnow",
      family: "G11",
      title: "Buried on One Side of the Lake",
      kind: "Informational · 11.RI",
      blurb: "Why one town gets three feet of snow while the town next door sees the sun.",
      level: 1,
      passage:
        "<p>" + N(1) + "On a cold morning in early December, the town of Pell Harbor woke up under nearly three feet of snow. " +
        N(2) + "Twelve miles to the south, the town of Ashby got less than an inch, and its students went to school as usual under a pale, clear sky. " +
        N(3) + "The difference was not luck. " +
        N(4) + "It was a weather pattern called lake-effect snow, and it happens near large lakes in many cold parts of the world.</p>" +
        "<p>" + N(5) + "Lake-effect snow begins with a temperature difference. " +
        N(6) + "In late fall and early winter, a large lake still holds much of the heat it soaked up during the summer. " +
        N(7) + "Water warms and cools much more slowly than land does, so a lake can stay mild for weeks after the fields around it have frozen hard. " +
        N(8) + "When a mass of very cold, dry air blows across the lake, the air sits on top of water that is far warmer than itself.</p>" +
        "<p>" + N(9) + "Next, the air changes. " +
        N(10) + "The warm lake heats the lowest layer of air and adds moisture to it through evaporation. " +
        N(11) + "Warm, moist air is lighter than the cold air above it, so it rises. " +
        N(12) + "As it rises, it cools, and the moisture forms clouds. " +
        N(13) + "By the time the wind pushes these clouds to the far shore, they are heavy with snow, and they drop it on the first land they reach.</p>" +
        "<p>" + N(14) + "Several factors control how much snow falls. " +
        N(15) + "The bigger the difference between the water temperature and the air temperature, the more snow is likely to form. " +
        N(16) + "The distance the wind travels over open water also matters; forecasters call this distance the fetch. " +
        N(17) + "A long fetch gives the air more time to gather moisture, so a wind that blows down the length of a lake usually produces more snow than a wind that crosses it at the narrowest point. " +
        N(18) + "Hills near the shore can push the air even higher and squeeze out still more snow.</p>" +
        "<p>" + N(19) + "Lake-effect snow often falls in narrow bands, sometimes only a few miles wide, and a band can stay parked over the same spot for hours. " +
        N(20) + "That is why Pell Harbor, sitting directly downwind, was buried, while Ashby stayed nearly clear. " +
        N(21) + "The pattern usually fades by midwinter, when much of the lake's surface freezes over and stays frozen until spring. " +
        N(22) + "Ice acts like a lid, cutting off the heat and moisture the storms need. " +
        N(23) + "Until then, people who live along the downwind shore keep their shovels close, and they watch the wind direction as carefully as they watch the thermometer.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the article about lake-effect snow?",
          choices: [
            { letter: "A", text: "Towns near lakes should cancel school more often in winter." },
            { letter: "B", text: "Cold air crossing a warmer lake can drop heavy snow on narrow areas downwind." },
            { letter: "C", text: "Forecasters cannot predict where lake-effect snow will fall." },
            { letter: "D", text: "Lakes freeze faster than land in early December." }
          ],
          correct: "B"
        },
        {
          id: "fetch",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why does a long fetch usually produce more snow?",
          choices: [
            { letter: "A", text: "It gives the air more time over water to gather moisture." },
            { letter: "B", text: "It keeps the lake from freezing until spring." },
            { letter: "C", text: "It makes the air colder before it reaches the lake." },
            { letter: "D", text: "It pushes the clouds over the hills more slowly." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The author wrote the article about Pell Harbor and Ashby mainly to —",
          choices: [
            { letter: "A", text: "persuade readers to move away from large lakes" },
            { letter: "B", text: "describe a single storm that struck one town" },
            { letter: "C", text: "explain how and why a certain kind of snowstorm forms" },
            { letter: "D", text: "compare the schools in two neighboring towns" }
          ],
          correct: "C"
        },
        {
          id: "steps",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Sentences 5 through 13 are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of opinions from different forecasters" },
            { letter: "B", text: "a comparison of two different lakes" },
            { letter: "C", text: "a problem followed by several solutions" },
            { letter: "D", text: "a sequence of steps in a natural process" }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How does the author use the two towns described in sentences 1 and 2 to shape the article?",
          choices: [
            { letter: "A", text: "The towns open with a puzzle that the article later solves in sentence 20." },
            { letter: "B", text: "The towns are compared throughout every paragraph of the article." },
            { letter: "C", text: "The towns show that lake-effect snow happens only in December." },
            { letter: "D", text: "The towns are mentioned once and then never connected to the topic." }
          ],
          correct: "A"
        },
        {
          id: "lid",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 22, the comparison of ice to a lid helps the reader understand that frozen lakes —",
          choices: [
            { letter: "A", text: "trap cold air underneath the surface of the water" },
            { letter: "B", text: "block the heat and moisture that feed the storms" },
            { letter: "C", text: "make the lake water warmer than it was in summer" },
            { letter: "D", text: "are dangerous for people to walk across" }
          ],
          correct: "B"
        },
        {
          id: "luck",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 3, \"The difference was not luck,\" is included mainly to —",
          choices: [
            { letter: "A", text: "suggest that the people of Ashby were careless" },
            { letter: "B", text: "show that the author dislikes snowy weather" },
            { letter: "C", text: "warn readers that more storms are coming" },
            { letter: "D", text: "signal that a scientific explanation will follow" }
          ],
          correct: "D"
        },
        {
          id: "downwind",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word downwind most nearly refers to a place that is —",
          choices: [
            { letter: "A", text: "protected from all wind by hills" },
            { letter: "B", text: "located at the bottom of a valley" },
            { letter: "C", text: "in the direction the wind is blowing toward" },
            { letter: "D", text: "where the wind first begins to blow" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-c111-inventory",
      family: "G11",
      title: "Inventory Night",
      kind: "Vocabulary · 11.RV",
      blurb: "Youssef spends a night counting books for Madame Benali and learns what a bookstore actually keeps.",
      level: 3,
      passage:
        "<p>" + N(1) + "Once a year, Librairie du Phare closed its shutters at six and did not open them again until every book on every shelf had been counted. " +
        N(2) + "Madame Benali, who had owned the shop for thirty years, called the night inventory; Youssef, who had worked there for four months, privately called it a punishment. " +
        N(3) + "He arrived with a clipboard and a thermos of mint tea and found her already at work, her scarf slipping, her sleeves pushed up, her hair escaping its pins in every direction. " +
        N(4) + "She looked <strong>disheveled</strong>, yet the ledger open beside her was <strong>impeccable</strong>, every column straight, not a single number crossed out.</p>" +
        "<p>" + N(5) + "\"You are wondering why I do not use a computer,\" she said, without looking up. " +
        N(6) + "He had been wondering exactly that. " +
        N(7) + "\"I do use one, for orders. But a computer tells me what I sold. It does not tell me what I love that nobody bought.\" " +
        N(8) + "She tapped a shelf of poetry that had not moved since spring. " +
        N(9) + "\"A <strong>bibliophile</strong> could not run a shop without this night. It is how I remember what I am keeping and why.\"</p>" +
        "<p>" + N(10) + "Around midnight they reached the back room, where she stored what she called <strong>ephemera</strong>: old theater programs, postcards, ferry timetables, and other printed things that were made to be thrown away within a week and somehow had not been. " +
        N(11) + "Youssef had assumed she kept them out of sentiment, but she showed him a ledger column that proved otherwise; collectors paid well for a 1960s ferry schedule, and the back room quietly paid the electric bill each winter. " +
        N(12) + "She was <strong>frugal</strong> in the way of people who had once been poor, reusing envelopes, mending the same lamp three times, buying nothing she could borrow. " +
        N(13) + "Yet she paid Youssef for every hour of the night and sent him home with a sack of oranges.</p>" +
        "<p>" + N(14) + "By four in the morning, the count was done, and the gaps were clear: the travel guides were nearly gone, the children's shelf was thin, and a single dusty copy of a cookbook had somehow sold out twice in the records but still sat on the shelf. " +
        N(15) + "\"Tomorrow we <strong>replenish</strong>,\" Madame Benali said, writing a list in her neat hand. " +
        N(16) + "\"And we solve the mystery of the cookbook that sells without leaving.\" " +
        N(17) + "Youssef laughed, surprised to discover that he was not tired, or rather that he was tired in the way that felt like having finished something. " +
        N(18) + "On the walk home, the harbor lighthouse swept the dark water, and he caught himself counting its flashes.</p>",
      claims: [
        {
          id: "disheveled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which details from sentence 3 best help the reader understand the meaning of disheveled?",
          choices: [
            { letter: "A", text: "a thermos of mint tea" },
            { letter: "B", text: "found her already at work" },
            { letter: "C", text: "scarf slipping, hair escaping" },
            { letter: "D", text: "arrived with a clipboard" }
          ],
          correct: "C"
        },
        {
          id: "impeccable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word impeccable in sentence 4 begins with the prefix im-, as in impossible and imperfect. Using this prefix and the details in sentence 4, impeccable most nearly means —",
          choices: [
            { letter: "A", text: "without any flaw" },
            { letter: "B", text: "very old" },
            { letter: "C", text: "easy to read aloud" },
            { letter: "D", text: "partly unfinished" }
          ],
          correct: "A"
        },
        {
          id: "biblio",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Bibliophile (sentence 9) combines the Greek root biblio-, meaning book, with -phile, as in audiophile. Madame Benali calls herself a bibliophile to show that she is —",
          choices: [
            { letter: "A", text: "an expert at selling books for a profit" },
            { letter: "B", text: "someone who keeps careful written records" },
            { letter: "C", text: "a person who dislikes using computers" },
            { letter: "D", text: "a person who loves books for their own sake" }
          ],
          correct: "D"
        },
        {
          id: "ephemera",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 10, the explanation after the colon shows that ephemera are —",
          choices: [
            { letter: "A", text: "rare books that are worth a great deal of money" },
            { letter: "B", text: "printed items meant to be used briefly and then discarded" },
            { letter: "C", text: "records a shop keeps of what it has sold" },
            { letter: "D", text: "letters and gifts given to a store by its customers" }
          ],
          correct: "B"
        },
        {
          id: "frugal",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The examples that follow frugal in sentence 12 (reusing envelopes, mending the lamp, borrowing) help show that frugal means —",
          choices: [
            { letter: "A", text: "careful to avoid spending money unnecessarily" },
            { letter: "B", text: "unwilling to share anything with other people" },
            { letter: "C", text: "skilled at repairing broken machines" },
            { letter: "D", text: "worried about losing the shop to debt" }
          ],
          correct: "A"
        },
        {
          id: "stingy",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author could have called Madame Benali stingy instead of frugal. Sentence 13 shows that frugal is the better choice because it —",
          choices: [
            { letter: "A", text: "suggests she has more money than she admits" },
            { letter: "B", text: "means she refuses to pay her employees on time" },
            { letter: "C", text: "lacks the negative sense of meanness toward others" },
            { letter: "D", text: "describes a habit she learned only recently" }
          ],
          correct: "C"
        },
        {
          id: "replenish",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word replenish in sentence 15 begins with the prefix re-, as in refill and restock. Based on sentence 14, Madame Benali plans to —",
          choices: [
            { letter: "A", text: "return unsold travel guides to the publisher" },
            { letter: "B", text: "count the shelves a second time to check for errors" },
            { letter: "C", text: "reorganize the poetry section by author's name" },
            { letter: "D", text: "fill the shelves again where the stock has run low" }
          ],
          correct: "D"
        },
        {
          id: "punishment",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "Youssef \"privately called\" inventory night a punishment in sentence 2. By sentence 17, his feeling about the word tired suggests the night has become —",
          choices: [
            { letter: "A", text: "boring, just as he expected it would be" },
            { letter: "B", text: "satisfying rather than merely exhausting" },
            { letter: "C", text: "frightening because of the mystery of the cookbook" },
            { letter: "D", text: "frustrating because the count did not balance" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c111-juniper",
      family: "G11",
      title: "One More Hour on Juniper Lane",
      kind: "Paired texts · 11.DSR",
      blurb: "The city's block party rules, and a neighbor's email asking to stretch them by one hour.",
      level: 2,
      passage:
        "<p><strong>Text 1 — City of Brookvale Special Events Office: Block Party Permits</strong></p>" +
        "<p>" + N(1) + "Block parties on residential streets require a permit from the Special Events Office, and applications must be submitted at least thirty days before the event. " +
        N(2) + "Each application must include signatures from at least two-thirds of the households on the affected block. " +
        N(3) + "Approved parties may close the street between 10:00 a.m. and 9:00 p.m.; requests for later hours are reviewed case by case and are rarely granted on weeknights. " +
        N(4) + "Organizers must place city-issued barricades at both ends of the closed section and must keep a twenty-foot lane clear at all times so that fire trucks and ambulances can pass. " +
        N(5) + "Amplified sound, including speakers and microphones, must end by 8:00 p.m. regardless of the party's closing time. " +
        N(6) + "Grills and open flames must stay at least ten feet from any building and may not be placed in the emergency lane. " +
        N(7) + "The organizer named on the permit is responsible for returning the barricades and for leaving the street free of trash by 10:00 a.m. the following day. " +
        N(8) + "Violations may result in a fine and may prevent the organizer from receiving a permit the next year. " +
        N(9) + "The office strongly encourages organizers to speak directly with neighbors who cannot attend, so that no resident is surprised by a closed street or an unfamiliar crowd outside the window.</p>" +
        "<p><strong>Text 2 — Email from Harjit Gill to the Juniper Lane neighbors</strong></p>" +
        "<p>" + N(10) + "Hi, neighbors, and thank you to everyone who signed the permit sheet; we have twenty-six of thirty-one households, which is more than enough. " +
        N(11) + "I want to ask the city for one thing this year: permission to keep the street closed until 10:00 p.m. instead of 9:00. " +
        N(12) + "Last year the light was just fading when we had to drag the barricades back, and the kids' flashlight tag game ended in the middle of a round. " +
        N(13) + "Our party falls on a Saturday this time, and I think that improves our chances. " +
        N(14) + "I know some of you worry about noise, especially the Nakamuras, who have a newborn, and Mr. Osei, who works early shifts at the hospital. " +
        N(15) + "So here is my proposal: the speakers go off at 8:00 sharp, as the rules already require, and the last hours are for conversation, flashlights, and dessert only. " +
        N(16) + "I'll also walk the block with a flyer the week before, so that anyone who missed the signature sheet hears about it from a person instead of a sign taped to a pole. " +
        N(17) + "If even two households tell me the extra hour would be a real hardship, I'll drop the request, no hard feelings. " +
        N(18) + "Reply here or knock on my door at number 12. " +
        N(19) + "Harjit</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by both the permit rules and Harjit's email?",
          choices: [
            { letter: "A", text: "Block parties should end before the sun goes down." },
            { letter: "B", text: "Organizers who break the rules should pay a fine." },
            { letter: "C", text: "Children's games are the most important part of a party." },
            { letter: "D", text: "Neighbors who may be affected should hear about the event directly." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the Brookvale permit rules and Harjit's email differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 argues for later parties, while Text 2 argues for earlier ones." },
            { letter: "B", text: "Text 1 sets requirements for all organizers, while Text 2 seeks neighbors' views on one request." },
            { letter: "C", text: "Text 1 reports on last year's party, while Text 2 plans next year's." },
            { letter: "D", text: "Text 1 complains about noise, while Text 2 defends loud music." }
          ],
          correct: "B"
        },
        {
          id: "chances",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select the TWO sentences that together best explain why Harjit believes the request for a later closing has a reasonable chance.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "sound",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does Text 2 make use of the amplified sound rule stated in sentence 5 of Text 1?",
          choices: [
            { letter: "A", text: "Harjit asks the city to make an exception to it for one night." },
            { letter: "B", text: "Harjit argues that the rule is unfair to families with children." },
            { letter: "C", text: "Harjit agrees to follow it and makes it part of his answer to noise concerns." },
            { letter: "D", text: "Harjit claims the rule does not apply to parties held on Saturdays." }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A Juniper Lane resident who read both texts could best conclude that, if the extra hour is granted, —",
          choices: [
            { letter: "A", text: "the barricades will be removed before the speakers are turned off" },
            { letter: "B", text: "the party can use microphones until 10:00 p.m." },
            { letter: "C", text: "the Nakamuras will be required to sign a second permit sheet" },
            { letter: "D", text: "the last two hours of the party will have no amplified music" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the central idea of Harjit's email?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the Special Events Office text is —",
          choices: [
            { letter: "A", text: "residents who are planning to organize a street party" },
            { letter: "B", text: "drivers looking for a detour around closed streets" },
            { letter: "C", text: "firefighters who respond to emergencies on residential blocks" },
            { letter: "D", text: "families who have just moved to the city of Brookvale" }
          ],
          correct: "A"
        },
        {
          id: "casebycase",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the words that follow the phrase case by case help show that it means —",
          choices: [
            { letter: "A", text: "always approved once the signatures are collected" },
            { letter: "B", text: "judged one at a time, with each request decided on its own" },
            { letter: "C", text: "handled by a court instead of by the events office" },
            { letter: "D", text: "reviewed only after the party has already happened" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c111-foldingtable",
      family: "G11",
      title: "Shared Plans",
      kind: "Paired texts · 11.DSR",
      blurb: "A dressmaker in 1893 and a student in the present both give away an invention. One of them learns from the other.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Table That Folded Twice</strong></p>" +
        "<p>" + N(1) + "In the spring of 1893, a dressmaker named Agnes Thorvaldsen solved a problem that had annoyed her for a decade. " +
        N(2) + "Her shop in the river town of Esker Falls was too small for a proper cutting table, so she designed one that folded flat against the wall and dropped open in seconds. " +
        N(3) + "Customers who saw it asked where to buy one, and Thorvaldsen, rather than seeking a patent, mailed a letter with a full drawing to a popular household magazine. " +
        N(4) + "The magazine printed it in its June issue, and within a year carpenters in at least four states were building copies. " +
        N(5) + "In 1897, a furniture company in a larger city patented a table that matched her drawing in nearly every detail and began selling it at a handsome profit. " +
        N(6) + "The patent should never have been granted, since the magazine's June issue was public proof that the design already existed. " +
        N(7) + "But no one brought that proof forward, and Thorvaldsen never wrote to the company or to the patent office. " +
        N(8) + "Her account books show that she earned nothing from the design for the rest of her life. " +
        N(9) + "It is tempting to read her story as a simple tragedy of generosity punished. " +
        N(10) + "That reading misses something. " +
        N(11) + "Her letter put a useful tool into hundreds of small shops years before the company's version reached a store, and most of those carpenters never paid anyone. " +
        N(12) + "Her choice was generous, and it largely worked; what failed was the assumption that publishing a design would be enough to defend it.</p>" +
        "<p><strong>Text 2 — Why I Posted My Plans</strong></p>" +
        "<p>" + N(13) + "Last winter a pipe burst in the apartment above ours while the family was away, and by the time anyone noticed, water was coming through our kitchen ceiling. " +
        N(14) + "That is how I ended up building a leak alarm out of two copper strips, a buzzer, and a battery, all for less than six dollars. " +
        N(15) + "My shop teacher said I should patent it, and I looked into it seriously. " +
        N(16) + "The fees and legal help would cost more than I have earned in my whole life, and I would still have to defend the patent myself if a company copied the alarm. " +
        N(17) + "So in March I posted the complete plans online, free for anyone to build, with my name and the date on every page. " +
        N(18) + "I had read about cases like the folding table from the 1890s, where a published design was patented by someone else anyway, so I did not stop at posting. " +
        N(19) + "I printed copies, had my teacher sign and date them, and sent the link to two maker groups that keep public archives. " +
        N(20) + "A record protects an idea only if someone can find it and point to it. " +
        N(21) + "Since then, people have built my alarm in apartments in three countries, and one builder added a blinking light for neighbors who cannot hear the buzzer. " +
        N(22) + "That improvement is better than anything I would have thought of alone. " +
        N(23) + "I may never make money from this, and I have made peace with that. " +
        N(24) + "What I wanted was fewer ruined kitchen ceilings, and that part is already working.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both the essay about Agnes Thorvaldsen and the student's reflection?",
          choices: [
            { letter: "A", text: "Patents are the only reliable way to make money from an invention." },
            { letter: "B", text: "Inventors should keep their designs secret until they are perfect." },
            { letter: "C", text: "Sharing an invention freely brings real benefits along with real risks." },
            { letter: "D", text: "Large companies are usually the first to recognize a good design." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes a key difference between the two texts about shared inventions?",
          choices: [
            { letter: "A", text: "Text 1 judges a past choice from the outside, while Text 2 explains a present choice from within." },
            { letter: "B", text: "Text 1 argues against sharing designs, while Text 2 argues against patents altogether." },
            { letter: "C", text: "Text 1 describes a failed invention, while Text 2 describes a successful one." },
            { letter: "D", text: "Text 1 is written for inventors, while Text 2 is written for magazine editors." }
          ],
          correct: "A"
        },
        {
          id: "steps",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that show the student taking steps to avoid what happened to Thorvaldsen's design.",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "combine",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader who combines sentence 7 of Text 1 with sentence 20 of Text 2 could best conclude that —",
          choices: [
            { letter: "A", text: "a published design is worthless once a company patents it" },
            { letter: "B", text: "patent offices check magazines carefully before granting patents" },
            { letter: "C", text: "inventors who share their work should never speak to companies" },
            { letter: "D", text: "public proof of an idea helps only when someone uses that proof" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the measured tone of Text 1, the tone of Text 2 is more —",
          choices: [
            { letter: "A", text: "bitter and regretful" },
            { letter: "B", text: "personal and contented" },
            { letter: "C", text: "formal and detached" },
            { letter: "D", text: "anxious and uncertain" }
          ],
          correct: "B"
        },
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best states the central claim of the essay \"The Table That Folded Twice\"?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 2" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author of Text 1 mainly develop the essay?",
          choices: [
            { letter: "A", text: "By comparing two inventors who lived in the same town" },
            { letter: "B", text: "By listing the steps needed to build a folding table" },
            { letter: "C", text: "By narrating events in order and then evaluating their meaning" },
            { letter: "D", text: "By presenting a problem and testing several solutions to it" }
          ],
          correct: "C"
        },
        {
          id: "proof",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author of Text 1 includes sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show that the company's table was better built than hers" },
            { letter: "B", text: "explain why the magazine stopped printing reader letters" },
            { letter: "C", text: "suggest that Thorvaldsen secretly filed her own patent" },
            { letter: "D", text: "establish that her design was already public before 1897" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c111-snowpoem",
      family: "G11",
      title: "The Night Shift Does Not Check the Weather",
      kind: "Poetry · 11.RL",
      blurb: "A storm closes the roads, and a mother who always works finds herself home for the night.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "All week the forecast stacked its warnings<br>" +
        L(2) + "like plates on a shelf too narrow to hold them,<br>" +
        L(3) + "and all week my mother said she would go anyway,<br>" +
        L(4) + "because the night shift does not check the weather.<br><br>" +
        L(5) + "Then the snow came the way a rumor comes,<br>" +
        L(6) + "a few flakes first, then everyone at once,<br>" +
        L(7) + "until the street forgot its edges<br>" +
        L(8) + "and the buses stood in the depot, dreaming.<br>" +
        L(9) + "At nine o'clock the hospital called.<br>" +
        L(10) + "Stay home, they said. The roads are closed.<br>" +
        L(11) + "My mother held the phone a long time after,<br>" +
        L(12) + "as if it might ring again and take it back.<br><br>" +
        L(13) + "We did not know what to do with her.<br>" +
        L(14) + "She did not know what to do with herself.<br>" +
        L(15) + "She washed a clean cup. She folded a folded towel.<br>" +
        L(16) + "At last she found the shovel in the hall,<br>" +
        L(17) + "and we went out into the white, unlit hour<br>" +
        L(18) + "to dig a path that no one needed yet.<br><br>" +
        L(19) + "Snow is a poor historian.<br>" +
        L(20) + "It covers the curb, the car, the argument<br>" +
        L(21) + "we had on Tuesday about my grades,<br>" +
        L(22) + "and leaves a page so blank it almost asks you<br>" +
        L(23) + "to write the evening over. We did.<br>" +
        L(24) + "We dug until the path reached nowhere, and we laughed.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the mother and the storm?",
          choices: [
            { letter: "A", text: "Hospitals should close whenever a large storm is predicted." },
            { letter: "B", text: "An unexpected interruption can open a rare chance to reconnect." },
            { letter: "C", text: "Children and parents rarely agree about schoolwork." },
            { letter: "D", text: "Hard work is the only reliable source of happiness." }
          ],
          correct: "B"
        },
        {
          id: "phone",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 11 and 12, in which the mother holds the phone \"as if it might ring again and take it back,\" imply that she —",
          choices: [
            { letter: "A", text: "is angry that the hospital did not call sooner" },
            { letter: "B", text: "wants to call a coworker to trade shifts" },
            { letter: "C", text: "is worried that the storm has damaged the phone line" },
            { letter: "D", text: "can hardly believe she has really been given the night off" }
          ],
          correct: "D"
        },
        {
          id: "towel",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Line 15, in which the mother washes a clean cup and folds a folded towel, reveals that she —",
          choices: [
            { letter: "A", text: "is so used to working that she does not know how to rest" },
            { letter: "B", text: "is preparing the house for guests who are on the way" },
            { letter: "C", text: "is upset with the speaker for leaving the kitchen messy" },
            { letter: "D", text: "has forgotten which chores she already finished that day" }
          ],
          correct: "A"
        },
        {
          id: "plates",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 1 and 2, comparing the forecast's warnings to plates stacked on a narrow shelf mainly suggests that the warnings —",
          choices: [
            { letter: "A", text: "were printed on paper and handed out to the neighbors" },
            { letter: "B", text: "were mostly wrong and soon forgotten by everyone" },
            { letter: "C", text: "kept piling up until they seemed ready to come crashing down" },
            { letter: "D", text: "were neatly organized and easy for the family to follow" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The tone of the final stanza (lines 19–24) is best described as —",
          choices: [
            { letter: "A", text: "tender and lighthearted" },
            { letter: "B", text: "tense and fearful" },
            { letter: "C", text: "cold and distant" },
            { letter: "D", text: "bitter and resentful" }
          ],
          correct: "A"
        },
        {
          id: "writeover",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In lines 22 and 23, the phrase \"write the evening over\" most nearly means to —",
          choices: [
            { letter: "A", text: "keep a written record of what happened during the storm" },
            { letter: "B", text: "copy the speaker's homework onto a clean sheet" },
            { letter: "C", text: "send the hospital a note explaining the absence" },
            { letter: "D", text: "start the night fresh, leaving the old quarrel behind" }
          ],
          correct: "D"
        },
        {
          id: "stanzas",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the poem's final stanza differ from its first stanza?",
          choices: [
            { letter: "A", text: "The first describes a calm night; the last describes a dangerous one." },
            { letter: "B", text: "The first stresses duty and pressure; the last stresses freedom and closeness." },
            { letter: "C", text: "The first is told by the mother; the last is told by the child." },
            { letter: "D", text: "The first describes the storm's end; the last describes its start." }
          ],
          correct: "B"
        },
        {
          id: "check",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In line 4, the speaker says the night shift \"does not check the weather.\" This phrase most nearly means that the shift —",
          choices: [
            { letter: "A", text: "has no windows that look outside" },
            { letter: "B", text: "is shorter during the winter months" },
            { letter: "C", text: "goes on no matter what conditions are like" },
            { letter: "D", text: "is assigned by people who live far away" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c111-planter",
      family: "G11",
      title: "The Self-Watering Planter",
      kind: "Drama · 11.RL",
      blurb: "Rafael is sure his soda-bottle planter will make him rich, until his sister finds four hundred videos and his grandmother tells a story.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A cluttered garage on a Saturday in late spring. " +
        N(2) + "A workbench holds cut plastic bottles, a ball of cotton string, and a small tomato plant growing in an odd container.</em></p>" +
        "<p><strong>RAFAEL:</strong> <em>(lifting the container proudly)</em> " + N(3) + "Ladies and gentlemen, I present the Rafael Self-Watering Planter.</p>" +
        "<p><strong>BEA:</strong> " + N(4) + "It's a soda bottle cut in half.</p>" +
        "<p><strong>RAFAEL:</strong> " + N(5) + "It's a soda bottle cut in half with a purpose. " +
        N(6) + "The top half holds the soil, upside down. " +
        N(7) + "The bottom half holds water. " +
        N(8) + "This string pulls the water up into the soil, so the plant drinks only what it needs.</p>" +
        "<p><strong>BEA:</strong> " + N(9) + "And you think you invented that?</p>" +
        "<p><strong>RAFAEL:</strong> " + N(10) + "I know I did. " +
        N(11) + "I built it Thursday night. " +
        N(12) + "Mr. Ilagan says I should enter it in the regional science fair, and after that I'm going to patent it and sell a million of them.</p>" +
        "<p><strong>BEA:</strong> <em>(looking at her phone)</em> " + N(13) + "Rafa, there are about four hundred videos of this exact thing. " +
        N(14) + "Here's one from a garden club. " +
        N(15) + "Here's one from a lady who uses yogurt cups.</p>" +
        "<p><strong>RAFAEL:</strong> <em>(taking the phone and scrolling, his shoulders slowly sinking)</em> " + N(16) + "Those are different. " +
        N(17) + "Hers leaks. <em>(A pause.)</em> " +
        N(18) + "Okay, they're not that different.</p>" +
        "<p><em>LOLA NENA enters carrying a plate of banana rolls.</em></p>" +
        "<p><strong>LOLA NENA:</strong> " + N(19) + "Why does my grandson look like a balloon the day after a birthday party?</p>" +
        "<p><strong>BEA:</strong> " + N(20) + "He invented something that already exists.</p>" +
        "<p><strong>LOLA NENA:</strong> <em>(setting down the plate and studying the planter)</em> " + N(21) + "Ah. " +
        N(22) + "Your great-grandfather did that once. " +
        N(23) + "In our village he built a rack for drying rice that you could turn, so the grain got sun on every side.</p>" +
        "<p><strong>RAFAEL:</strong> " + N(24) + "Did he get rich?</p>" +
        "<p><strong>LOLA NENA:</strong> <em>(laughing)</em> " + N(25) + "Rich? " +
        N(26) + "Within two harvests, every family on our road had built one. " +
        N(27) + "Nobody paid him a single peso.</p>" +
        "<p><strong>RAFAEL:</strong> " + N(28) + "That's terrible.</p>" +
        "<p><strong>LOLA NENA:</strong> " + N(29) + "He did not think so. " +
        N(30) + "Every September he walked down that road and counted the racks, and he smiled the whole way. " +
        N(31) + "He used to say that a good idea is like a seed: it is wasted only if it stays in your pocket.</p>" +
        "<p><em>Rafael looks at the planter for a long moment, then picks up a pencil.</em></p>" +
        "<p><strong>RAFAEL:</strong> " + N(32) + "None of those videos tells you when the water is about to run out.</p>" +
        "<p><strong>BEA:</strong> " + N(33) + "So?</p>" +
        "<p><strong>RAFAEL:</strong> " + N(34) + "So mine could. " +
        N(35) + "A little float, right here, resting on the water, with a red flag that drops out of sight when the water gets low. " +
        N(36) + "And I could show my whole class how to build one for the community garden.</p>" +
        "<p><strong>BEA:</strong> <em>(taking a banana roll)</em> " + N(37) + "Does this mean you're not selling a million of them?</p>" +
        "<p><strong>RAFAEL:</strong> <em>(already sketching)</em> " + N(38) + "Maybe a hundred. " +
        N(39) + "To Lola. " +
        N(40) + "At a family discount.</p>" +
        "<p><strong>LOLA NENA:</strong> " + N(41) + "I'll take two.</p>" +
        "<p><em>Lights fade as Rafael bends over the workbench.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the scene in Rafael's garage most clearly develop?",
          choices: [
            { letter: "A", text: "Sharing a good idea can matter more than profiting from it." },
            { letter: "B", text: "Inventors should always search online before building anything." },
            { letter: "C", text: "Science fairs reward students who work alone." },
            { letter: "D", text: "Old inventions are usually better than new ones." }
          ],
          correct: "A"
        },
        {
          id: "shoulders",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction before sentence 16, in which Rafael's shoulders slowly sink, mainly shows that he —",
          choices: [
            { letter: "A", text: "is tired from building the planter late at night" },
            { letter: "B", text: "is trying to hide the phone from his sister" },
            { letter: "C", text: "is growing disappointed as he realizes his idea is not new" },
            { letter: "D", text: "is pretending to be upset so that Bea will feel sorry" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which statement best describes how Rafael changes during the scene?",
          choices: [
            { letter: "A", text: "He goes from trusting his sister to doubting everything she says." },
            { letter: "B", text: "He goes from wanting to profit from his idea to wanting to improve and share it." },
            { letter: "C", text: "He goes from loving gardening to deciding it is a waste of time." },
            { letter: "D", text: "He goes from ignoring his grandmother to asking her to run his business." }
          ],
          correct: "B"
        },
        {
          id: "seed",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 31, Lola Nena compares a good idea to a seed mainly to suggest that ideas —",
          choices: [
            { letter: "A", text: "should be kept safe until the right season comes" },
            { letter: "B", text: "are small and easy to lose track of" },
            { letter: "C", text: "are worth more when they are sold to farmers" },
            { letter: "D", text: "grow and do good only when they are shared" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The tone of the scene's ending (sentences 37 through 41) is best described as —",
          choices: [
            { letter: "A", text: "tense and angry" },
            { letter: "B", text: "playful and hopeful" },
            { letter: "C", text: "gloomy and defeated" },
            { letter: "D", text: "formal and polite" }
          ],
          correct: "B"
        },
        {
          id: "balloon",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 19, Lola Nena says Rafael looks like \"a balloon the day after a birthday party.\" She most nearly means that he looks —",
          choices: [
            { letter: "A", text: "deflated and let down" },
            { letter: "B", text: "excited and full of energy" },
            { letter: "C", text: "colorful and dressed up" },
            { letter: "D", text: "sick from eating too much" }
          ],
          correct: "A"
        },
        {
          id: "rack",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Lola Nena's story about the rice-drying rack (sentences 22 through 31) affects the plot of the scene mainly by —",
          choices: [
            { letter: "A", text: "proving that Rafael's planter was copied from his great-grandfather" },
            { letter: "B", text: "convincing Bea to help Rafael enter the science fair" },
            { letter: "C", text: "ending the scene before Rafael can make a decision" },
            { letter: "D", text: "changing how Rafael sees his situation and leading to a new plan" }
          ],
          correct: "D"
        },
        {
          id: "float",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 35, the words \"resting on the water\" help show that a float is —",
          choices: [
            { letter: "A", text: "a tube that carries water into the soil" },
            { letter: "B", text: "a sticker that changes color in the sun" },
            { letter: "C", text: "a light object that sits on the surface of a liquid" },
            { letter: "D", text: "a small motor that pumps water upward" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c111-volunteer",
      family: "G11",
      title: "Willow Court Volunteer Guide",
      kind: "Functional text · 11.RI",
      blurb: "Shifts, food cards, the fire lane, and the one rule about lost children that surprises people.",
      level: 1,
      passage:
        "<p><strong>Willow Court Block Party — Volunteer Guide</strong></p>" +
        "<p>" + N(1) + "Thank you for signing up to help with this year's Willow Court Block Party on Saturday, August 16, from 2:00 to 8:00 p.m. (rain date: Sunday, August 17). " +
        N(2) + "Last year more than two hundred neighbors and guests came, and the party ran smoothly only because forty volunteers each took one small job. " +
        N(3) + "Please read the section for your station before the day of the party.</p>" +
        "<p><strong>Shifts.</strong> " + N(4) + "Setup runs from noon to 2:00 p.m. and includes placing cones, tables, and the information tent. " +
        N(5) + "Daytime shifts run from 2:00 to 5:00 p.m. and from 5:00 to 8:00 p.m. " +
        N(6) + "Cleanup begins at 8:00 p.m. sharp. " +
        N(7) + "If you cannot make your shift, text the organizer at least one day ahead so that someone else can cover it.</p>" +
        "<p><strong>Food Table.</strong> " + N(8) + "Wear gloves when serving, and never touch food with bare hands, even to move it. " +
        N(9) + "Every dish brought by a neighbor must have an index card listing all of its ingredients. " +
        N(10) + "Several children on our street have serious food allergies, and a parent should be able to check a dish without having to find the cook. " +
        N(11) + "Dishes without a card will wait in the shade behind the table until one is written.</p>" +
        "<p><strong>Kids' Zone.</strong> " + N(12) + "At least two adult volunteers must be in the Kids' Zone at all times, and three when the bounce house is open. " +
        N(13) + "Sidewalk chalk is for the street only, not for driveways or garage doors. " +
        N(14) + "Please collect the chalk and jump ropes in the blue bins when your shift ends.</p>" +
        "<p><strong>Safety.</strong> " + N(15) + "The orange cones down the center of the street mark the fire lane, which must stay clear for the entire party. " +
        N(16) + "Do not set up chairs, tables, or games inside the cones, even for a moment. " +
        N(17) + "The first-aid kit is kept at the information tent in front of number 7. " +
        N(18) + "If you find a child who is lost, walk the child to the information tent and stay until a parent arrives. " +
        N(19) + "Do not announce a lost child's name over the microphone. " +
        N(20) + "A name gives a stranger exactly what to call out.</p>" +
        "<p><strong>Cleanup.</strong> " + N(21) + "Our city permit requires the street to be completely clear of trash and tables by 9:00 p.m. " +
        N(22) + "If it is not, the city may deny our permit next summer, so this rule has no exceptions. " +
        N(23) + "Volunteers who stay for cleanup get first choice of the leftover food.</p>" +
        "<p><strong>Questions?</strong> " + N(24) + "Contact Priya Raman at number 11 or Tomasz Wojcik at number 4. " +
        N(25) + "The sign-up sheet for open shifts is taped to the Ramans' front porch until August 9.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main purpose of the Willow Court volunteer guide?",
          choices: [
            { letter: "A", text: "To invite new families on the street to the block party" },
            { letter: "B", text: "To explain what volunteers must do so the party runs safely" },
            { letter: "C", text: "To ask the city for permission to close the street" },
            { letter: "D", text: "To describe what happened at last year's party" }
          ],
          correct: "B"
        },
        {
          id: "lost",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, what should a volunteer do after finding a lost child at the Willow Court party?",
          choices: [
            { letter: "A", text: "Walk the child to the information tent and wait for a parent." },
            { letter: "B", text: "Announce the child's name over the microphone right away." },
            { letter: "C", text: "Take the child to the Kids' Zone until the party ends." },
            { letter: "D", text: "Text Priya Raman and stay where the child was found." }
          ],
          correct: "A"
        },
        {
          id: "cards",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, why must every shared dish have an ingredient card?",
          choices: [
            { letter: "A", text: "So the organizers can count how much food was brought" },
            { letter: "B", text: "So the cooks can receive credit for their recipes" },
            { letter: "C", text: "So the city inspector can approve the food table" },
            { letter: "D", text: "So parents can check for allergens without finding the cook" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the Willow Court guide is —",
          choices: [
            { letter: "A", text: "city officials who issue block party permits" },
            { letter: "B", text: "children who plan to play in the Kids' Zone" },
            { letter: "C", text: "neighbors who have agreed to work at the party" },
            { letter: "D", text: "guests from other neighborhoods visiting for the day" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Willow Court guide help the reader mainly by —",
          choices: [
            { letter: "A", text: "letting each volunteer quickly find the rules for a station" },
            { letter: "B", text: "showing the order in which the party events will happen" },
            { letter: "C", text: "listing the names of the volunteers for each job" },
            { letter: "D", text: "explaining which rules matter most to the city" }
          ],
          correct: "A"
        },
        {
          id: "name",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The guide includes sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "warn volunteers that strangers will attend the party" },
            { letter: "B", text: "show that the microphone will not work during the party" },
            { letter: "C", text: "suggest that lost children are common at block parties" },
            { letter: "D", text: "explain the reason behind the rule in sentence 19" }
          ],
          correct: "D"
        },
        {
          id: "strict",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence from the guide makes clear that the Willow Court cleanup deadline will be enforced strictly?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 23" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        },
        {
          id: "numbers",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence gives numerical evidence that volunteers made last year's Willow Court party a success?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c111-bookfair",
      family: "G11",
      title: "Bring the Book Fair Home",
      kind: "Argument · 11.RI",
      blurb: "A junior argues that Crestview High's book fair should be run by the bookstore six blocks away.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every March, the gym at Crestview High fills with folding tables, glossy posters, and plastic boxes of novelty pens, and for one week we call it a book fair. " +
        N(2) + "The fair is run by a national catalog company, and it does what it promises: it sells things. " +
        N(3) + "But Paper Lantern Books, just six blocks away, has offered to run our fair instead, and the PTA should accept that offer when it votes on March 4.</p>" +
        "<p>" + N(4) + "The first reason is selection. " +
        N(5) + "The catalog company ships the same boxes to thousands of schools, so the books on our tables are chosen for an average student who does not exist. " +
        N(6) + "The staff at Paper Lantern, by contrast, have asked our English teachers for their reading lists and our librarian for the titles students request most. " +
        N(7) + "Last month the store's owner, Teresa Lindo, showed me a draft list of three hundred titles, and nearly a third were books our own students had asked for by name.</p>" +
        "<p>" + N(8) + "The second reason is money. " +
        N(9) + "Under the current arrangement, our library receives credit worth about fifteen percent of sales, and that credit must be spent in the catalog company's own store. " +
        N(10) + "Ms. Lindo has offered to return twenty-five percent of sales to the library in cash, which the librarian could spend anywhere, including on repairs to our aging computers.</p>" +
        "<p>" + N(11) + "Supporters of the catalog fair raise fair points. " +
        N(12) + "Its posters and gadgets are popular, and some argue that they draw in students who would never wander into a bookstore. " +
        N(13) + "The catalog also offers thousands of titles, far more than a small store can carry. " +
        N(14) + "Yet the gadget table works the way the candy at a checkout line works: it sells, but it is not why anyone came. " +
        N(15) + "And Paper Lantern has promised to order any title a student wants and deliver it to the school within three days, which means the true selection is larger, not smaller.</p>" +
        "<p>" + N(16) + "There is also a reason that numbers cannot capture. " +
        N(17) + "My younger brother, who is in seventh grade, has never been inside an independent bookstore, though he has walked past one every day for two years. " +
        N(18) + "A fair run by our neighbors would give hundreds of students like him a reason to walk through that door afterward. " +
        N(19) + "The catalog company will still exist next year if we say no; I am not certain the same is true of the store on our corner.</p>" +
        "<p>" + N(20) + "Come to the PTA meeting on March 4, and tell the board that our book fair should belong to our town.</p>" +
        "<p><em>— Elif Demir, Grade 11, for the Crestview Courier</em></p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best states Elif Demir's central claim?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "library",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which detail most directly supports the claim that a Paper Lantern fair would benefit the school library?",
          choices: [
            { letter: "A", text: "The store is located six blocks from the school." },
            { letter: "B", text: "The catalog company ships boxes to thousands of schools." },
            { letter: "C", text: "The store will deliver ordered books within three days." },
            { letter: "D", text: "The store will return a quarter of sales to the library in cash." }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement from the Crestview editorial is an opinion rather than a verifiable fact?",
          choices: [
            { letter: "A", text: "Our book fair should belong to our town." },
            { letter: "B", text: "The library receives credit worth about fifteen percent of sales." },
            { letter: "C", text: "Paper Lantern Books is six blocks from the school." },
            { letter: "D", text: "The PTA will vote on the offer on March 4." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Elif Demir's attitude toward supporters of the catalog fair is best described as —",
          choices: [
            { letter: "A", text: "mocking and dismissive" },
            { letter: "B", text: "fearful and anxious" },
            { letter: "C", text: "respectful but unconvinced" },
            { letter: "D", text: "neutral and uninterested" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author of the book fair editorial organize sentences 11 through 15?",
          choices: [
            { letter: "A", text: "She lists the steps for planning a book fair in order." },
            { letter: "B", text: "She presents opposing points and then responds to them." },
            { letter: "C", text: "She compares two bookstores in different towns." },
            { letter: "D", text: "She tells a story from her own childhood." }
          ],
          correct: "B"
        },
        {
          id: "brother",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about her younger brother in sentences 17 and 18 mainly to —",
          choices: [
            { letter: "A", text: "show how the fair could connect students to a local store" },
            { letter: "B", text: "prove that seventh graders read more than older students" },
            { letter: "C", text: "suggest that her brother should work at the bookstore" },
            { letter: "D", text: "admit that she has never visited Paper Lantern herself" }
          ],
          correct: "A"
        },
        {
          id: "candy",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 14, comparing the gadget table to candy at a checkout line helps the reader understand that the gadgets —",
          choices: [
            { letter: "A", text: "are unhealthy for the students who buy them" },
            { letter: "B", text: "cost more than most of the books at the fair" },
            { letter: "C", text: "make money but are not the fair's real purpose" },
            { letter: "D", text: "are sold only to students who wait in long lines" }
          ],
          correct: "C"
        },
        {
          id: "corner",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the book fair editorial, sentence 19 is included mainly to —",
          choices: [
            { letter: "A", text: "predict that the catalog company will soon go out of business" },
            { letter: "B", text: "explain why the PTA meeting was moved to March 4" },
            { letter: "C", text: "compare the prices of books at the two kinds of fairs" },
            { letter: "D", text: "suggest that the vote may matter to the store's survival" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
