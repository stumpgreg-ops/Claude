# Writing an expansion file (v5.15)

The game needs about 3,500 questions per Virginia selection so a student can play all 7 game modes to level 100
without a repeat. `tools/expansion/PLAN.md` lists the new files; each is written by one writer. You write ONE file.

## Before you write

1. Read `tools/CONTENT-GUIDE.md` (the pack format and the writing rules) and `tools/expansion/STANDARDS.md`
   (what each standard code means, with example stems).
2. Find your row in `tools/expansion/PLAN.md`: grade, tier, number of packs, questions per pack, word counts, topics.
3. Read two or three existing packs of your grade for tone and difficulty:
   - Grade 9: `js/content3.js` (literary), `js/content4.js` (informational), `js/content5.js` (vocabulary, paired), `js/content18.js` (tiny/short), `js/content19.js` (long/epic)
   - Grade 10: `js/content6.js`, `js/content7.js`, `js/content8.js`, `js/content20.js`, `js/content21.js`
   - Grade 11: `js/content9.js`, `js/content10.js`, `js/content11.js`, `js/content22.js`, `js/content23.js`

## The rules for your file

- Write only `js/contentNN.js` (your row). Never edit any other file. Don't run builds, tests or git.
- Exactly the number of packs in your row, every pack `family` = your grade.
- **Ids:** `g9-rl-c32-tidepool` = grade, strand (rl, ri, rv, dsr), `c` + your file number, a short slug. Unique.
- **Length:** every passage inside your tier's word range (the sentence numbers don't count). Paired texts: each text
  in the paired range. Poems: the line count. Tiny packs have 5 questions (4 allowed), others exactly your row's number.
- **Standards:** only your grade's own codes (9.x for G9, 10.x for G10, 11.x for G11; the list is in
  `tools/expansion/STANDARDS.md`), and use EVERY one of them in your file, spread as evenly as the passages allow.
  The teacher's report breaks results down by code, so the code must match what the question really asks.
- **Kinds:** about 25% Literary, 22% Informational, 14% Vocabulary, 14% Paired texts, 9% Poetry (none in epic),
  5% Drama, 6% Functional text, 5% Argument. Use the kind strings from the guide with your grade (`Literary · 10.RL`).
- **Levels:** spread 1, 2 and 3 about evenly.
- **Topics:** build your passages around the topics in your row (and nearby ideas); give every pack its own
  characters, names and setting. Vary cultures and names. Original text only.
- **Quality:** one defensible answer; plausible distractors; keys spread (each letter used, none more than twice in
  a pack); the correct answer never the noticeably longest; stems in test phrasing; questions that reach across the
  whole passage in long and epic packs.

## Check, then fix until clean

    node tools/expansion/check.js js/contentNN.js

It runs the content validator and checks your row (count, family, ids, lengths, codes, levels). Fix every
PROBLEM until it prints `CHECK OK`. Then reply with one line: the file, packs, questions and `CHECK OK`.
