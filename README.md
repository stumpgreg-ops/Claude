# SOL Labyrinth
Solo Chromebook maze-chase extract. 100 nights. Virginia 2024 EOC Reading SOL (grades 9–11), New Jersey NJSLA-ELA (grade 5), and The Odyssey (English 9, Unit 2).

**Theme (Norse × SOL):** You are **Sol**, the Norse sun goddess, collecting letter slips in a Pac-like school labyrinth. Ravenous wolves — **Hati** — patrol the corridors. Grab the **correct** letter to summon Sol's **CHARIOT** and smash Hati by contact (they return from the Wolf Pen). Wrong letter alarms. Fruit = bonus points only. Ice = brief escape freeze. **Only one power/effect active at a time.**

**Regenerating the castle kit (v5.3, v5.5).** `node tools/render-kaykit.js <KayKit Assets/gltf> <renders>` then `python3 tools/make-castle-kit.py <kenney mirror> --kaykit <renders> --ne-only` (sprites: thumbnails and stand-ins) and `node tools/pack-models.js <KayKit Assets/gltf> <kenney mirror> <renders>/sizes.json` (the 3D models); three.js is fetched from GitHub into `tools/three/` on first run, and `sh tools/bundle-three.sh` bundles it into `js/vendor/three.min.js`.

**Two games, one codebase (v5.2).** `node tools/build-games.js` writes `dist/nj/` (New Jersey, Grade 5 NJSLA-ELA) and `dist/va/` (Virginia, Grades 9–11 EOC Reading SOL) and zips each as `dist/SOLLabyrinth-NJ-v<version>.zip` and `dist/SOLLabyrinth-VA-v<version>.zip`, ready for two itch.io projects. Each build opens on its own title screen with only its grade cards, carries only its question files, and has no state gateway. The root `index.html` stays the combined development build with the New Jersey / Virginia gateway.

Play (combined dev build): `index.html`. Teacher monitor: `admin.html` (PIN lock; FERPA nicknames only).

Progress saves in this browser profile (`afterHours.v1.night`). Itch login does not store progress.

Question packs: `js/content.js` and `js/content2.js` (the v4 Virginia packs) plus `js/content3.js`–`js/content11.js` (v4.9 Virginia) and `js/content12.js`–`js/content17.js` (v4.9 New Jersey grade 5). Format and writing rules: `tools/CONTENT-GUIDE.md`. Check every file with `node tools/validate-content.js`. Headless smoke test of the gateway, builder, shop, a night, the realms and their creatures, Fenrir, the castle perks, the shooter levels and the two built games: `node tools/smoke.js` (screenshots in `tools/shots/`).

## Progress codes and the teacher page (tracking students in Canvas)

A game uploaded to Canvas can't send anything anywhere, so progress is shown to the teacher as a **progress code**.

**Students:** **My progress code** (on the title screen next to My Town / Music, and on every end-of-level screen, won or lost) opens a window with a short summary (levels won, highest level, questions answered, % right on the first try, minutes and days played), the code in a large box, a **Copy code** button (if Canvas blocks the clipboard the code is selected and the window says to press Ctrl+C) and "Paste this code into the Sol's Labyrinth progress assignment in Canvas." (the Odyssey: "Odyssey game progress"). The nickname from the title screen goes into the code if there is one.

**Teachers:** each Canvas zip (`tools/build-canvas.js`, full and update) carries `SOLLabyrinth-VA-Teacher.html` / `SOLLabyrinth-NJ-Teacher.html` / `SOLLabyrinth-Odyssey-Teacher.html`, and its READ ME has the steps: upload the page to the game's folder and **Unpublish** it so only teachers can open it; make an assignment named "Sol's Labyrinth progress" with Online → **Text Entry** submission; students paste their codes; then either copy codes from SpeedGrader into the page (`Ann Smith: SOL1-…` lines give the name) or click **Download Submissions** and drop the .zip on the page (the student name comes from Canvas's file name, e.g. `smithann_12345_67890_text.html`; .txt and .html files work too). The page checks every code (Valid / INVALID / from another game), shows a sortable table (student, nickname, highest level, levels won and played, questions, % right first try, minutes, days, first and last played, each skill's or episode's % right, when the code was made) with a **suggested participation grade** from the goals at the top (default: 60 minutes, 10 levels won, 50 questions, equal weight, accuracy and days weight 0, out of 100 points; remembered in that browser), keeps the newest code when a student appears twice (and says so), and offers Download CSV, Copy the table (with a select-and-Ctrl+C fallback) and Print. It is one self-contained file (about 42 KB, no outside scripts or fonts) and works offline. `node tools/build-teacher.js VA` writes one on its own.

**What is measured** (`js/progress.js`, one record in `localStorage` `afterHours.v1.progress.<STATE>`, so a later version can send it to a Google Sheet): first and last day played, days played, active play time, levels started / won / lost, highest level reached and won, questions answered, right on the first try, wrong picks, each skill (RL / RI / RV / DSR; the Odyssey's episodes) answered / right on the first try, each game mode's levels played / won, and the last 30 levels (date, level, mode, answers, right, wrong picks, result). **Time** counts only while a level is running and on screen: the tab visible, no card that pauses the game open (reading, how-to, field guide, help, end of level), and at most 90 s after the last key press, tap or mouse move.

**The code format** (`js/progress-code.js`, shared by the game and the teacher page so they can't drift; since v5.14 the game makes `SOL2-` codes that also carry the level and the town or castle for **Restore my progress**, see v5.14.0 below): `SOL1-VA-` (or `NJ`, `ODY`) then Crockford base32 in blocks of 4 (I and L read as 1, O as 0, any case); about 65–110 characters. It carries the game and version, when it was made, the nickname (up to 12 letters) and the numbers above (not the 30-level log or per-mode detail; just how many modes were tried), and a 30-bit tag computed from the payload with a per-game secret, so a typo or a made-up code shows as INVALID.

**Limits:** progress lives on each Chromebook (and each browser profile): a student who plays on two devices has two codes, and the teacher page keeps only the newest one. Clearing site data resets it. A code is everything up to the moment it was made, so ask for new codes each time you grade. The secret ships inside the game, so the tag stops typos and casual tampering, not a determined student who reads the source.

Tests: `node tools/smoke-progress.js` (after `node tools/build-games.js`, `node tools/build-appsscript.js VA|ODY` and `node tools/build-canvas.js VA|ODY`).

## v5.17.0 (2026-10-07) — skills under each standard, LOTS and HOTS

- **The 2024 standards, word for word, split into skills.** `js/standards-va.js` holds the official text of all 91 Grade 9–11 reading standards (DSR, RV, RL, RI) from the *English Standards of Learning for Virginia Public Schools* (2024), and splits each one into skills, one per action verb: 153 skills, 90 LOTS (lower-order: identify, describe, explain, interpret) and 63 HOTS (higher-order: analyze, compare, distinguish, evaluate). A standard that asks students to analyze named devices or elements is split into identifying them (LOTS) and analyzing their effect (HOTS): `9.RL.2.A.1` Identify rhyme, rhythm, sound, imagery, and other literary devices in poetry (LOTS); `9.RL.2.A.2` Analyze how poetic devices convey a message and elicit a reader's emotions (HOTS). To move a skill between LOTS and HOTS, change its `level` there.
- **The standards report** shows each standard with its official text and its skills under it (each marked LOTS or HOTS), LOTS and HOTS totals for the class (and a callout when the class is 10+ points lower on HOTS), the weakest skills first under *Reteach first*, and, on *Student by student*, LOTS and HOTS columns for each student, then each skill (or each standard: *Columns*). The CSV has the same.
- **Questions name their skill** (`sub: "9.RL.2.A.2"`, checked by `tools/validate-content.js`); the game records the skill, and the progress code carries it (format 3, the skill ids appended to its table of standards, so older codes still read). Codes from before v5.17 show under their standard as "questions on the whole standard".

## v5.16.0 (2026-10-07) — 9,400 new Virginia questions: every mode, 100 levels, no repeats

The Virginia question bank grew from about 1,180 to about 10,560 questions: **1,407 new packs** in `js/content32.js`–`js/content113.js` (82 files, written to `tools/expansion/PLAN.md` and checked with `tools/expansion/check.js`), the same amount for each grade so Grades 10 and 11 keep their own grade-level questions. Each grade now has about 3,520 questions of its own (G9 3,521, G10 3,521, G11 3,520), enough for all 7 game modes × 100 levels × 5 questions without a repeat; Grade 10's pool (with Grade 9's) is about 7,040 and Grade 11's about 10,560. The new packs follow the levels' passage lengths (tiny for levels 1–8 up to epic for 95–100; Grade 9 now has 298 questions in the level-1 band, more than the 7 modes × 40 the first levels use), use only their grade's own standard codes and spread across all of them. The Canvas bundle is 7.4 MiB gzip in 14 data files (576 KB each, as before); the Canvas zip is 7.5 MiB. `tools/build-games.js` takes the new files from `tools/expansion/accepted.json`.

## v5.15.2 (2026-10-07) — the Teacher link is hidden from students

The Teacher link starts hidden. A teacher turns it on for their own computer by typing the word **teacher** in the nickname box on the title screen and clicking OK (`afterHours.v1.teacherLink`; the box is cleared, so it never becomes a nickname). The teacher screen has **Hide the Teacher link on this computer**. The READ ME explains it (SECTION 4.0).

## v5.15.1 (2026-10-07) — grading rounds: only the work since last time counts

The teacher screen always grades "since last time". A code is a running total, so after the teacher enters a round's grades and clicks **Finish this grading round**, each student's code is kept on that computer (`solTeacher.<ST>.rounds`, matched by Canvas ID, roster, name or nickname) as the start of the next round; every number then counts only the work after it (minutes, levels won, questions, accuracy, days, standards, new badges, perfect levels; the highest level stays the student's highest). The first round counts everything. A student whose totals went down (a new Chromebook, a restore from an older code) is counted from the new code alone and flagged. **Undo** goes back one round; **Use an earlier .zip as the starting point** rebuilds the start on another computer. The READ ME's grading section explains rounds (4.2).

## v5.15.0 (2026-10-07) — a level per mode, standards, badges, Submit my progress, the Teacher screen in the game

- **A level per game mode.** Each mode (Mixed, Labyrinth, Eagle Swoop …) keeps its own level 1–100 (`afterHours.v1.night.<mode>`; `afterHours.v1.night` still holds the level last played). An older single level moves to the mode last picked. The question picker already never repeats a question across modes until the pool is used up (the used list is per grade and skill, not per mode); the question expansion (`tools/expansion/`) gives each Virginia selection enough questions for all 7 modes × 100 levels.
- **Progress codes, format 3 (`SOL3-…`)** (`js/progress-code.js`): each standard practiced (answered / right on the first try, codes as numbers into the append-only `STDS`), each mode's highest level reached and won, the best streak, perfect levels and the badges (one bit each, append-only `BADGES`); the restore part carries every mode's level. SOL1 and SOL2 codes still read.
- **Badges** (`js/badges.js`): 45 general badges (questions, streaks, perfect levels, skills, standards, days, minutes, Fangs, town, coins, explorer, comeback …) plus Bronze/Silver/Gold/Platinum/Champion for levels 10/25/50/75/100 in each mode (80 in Virginia). A pop-up when one is earned, **My badges** on the title screen. Restore brings them back.
- **Submit my progress** (was My progress code): Copy code and the Canvas steps (scroll down, Start Assignment / New Attempt, Ctrl+V, Submit), and the student's nickname.
- **The Teacher screen inside the game** (`js/teacher-screen.js`, a small Teacher link under the title screen) opens the teacher page (`tools/teacher/`, built into each game as `teacher/<STATE>.html`) over the game. It now reads Canvas's **gradebook export** as the class list (kept on that computer; real names, "Ann S." on the leaderboard, who hasn't turned in), shows **student cards** with colour-coded suggested grades and a **class summary**, the **table**, a **leaderboard** (rank by levels won, highest level, questions, accuracy, badges, minutes or best streak; First name + last initial by default, nicknames or no names; full screen; hide a student), a separate **standards report** (class and student by student, with a CSV) and a **Canvas gradebook import file**. The same page is in each Canvas zip to open on a computer (not uploaded to Canvas any more), so its size limit is gone; its scripts are minified at build time.
- **The READ ME** in each Canvas zip is in numbered sections with a contents list; the ZIP download is the recommended way to grade.

## v5.14.0 (2026-10-07) — Restore my progress from the last code

- **Codes are now format 2 (`SOL2-…`)** and also carry what the game needs to bring a student's game back: the level to play next, the Fangs (Ram's Fleeces in the Odyssey) as one bit per realm, and the town or castle (theme, salt, coins, kit, pieces owned beyond those placed, the reward picked at each 5th level, and every placed piece with its style, how it was got, decoration flag, turn and cell). Theme, style and piece ids are numbers into `WORDS` in `js/progress-code.js` (append only; a word not in it is spelled out); the test checks every theme, style and piece in `assets/build/pieces.json` is in it. A code with no town yet is about 90 characters; a 20-piece castle about 260. Long codes show smaller and scroll in the window.
- **Restore my progress** (title screen, `js/progress.js`): paste the newest code (any text around it is fine), **Check code** shows what comes back (level, levels won, questions, minutes, town or castle size and coins, Fangs) and warns when it replaces progress already on this Chromebook; **Restore** writes the record (its totals, so the next code goes on from them), the level, the Fangs, the town or castle and the nickname, then reloads the game. A `SOL1-` code (before v5.14) restores the totals and the level and leaves the town or castle on the Chromebook alone. A typo or another game's code is refused.
- The teacher page reads `SOL1-` and `SOL2-` codes alike (it skips the restore part). Each READ ME tells teachers how students restore.

## v5.13.0 (2026-10-06) — progress codes, a teacher page, and a harder, longer Scylla and Charybdis

- **Progress codes and the teacher page** (all three games): see the section above. Each Canvas zip, the update zip included, carries the game's teacher page (`SOLLabyrinth-<VA|NJ|Odyssey>-Teacher.html`).
- **Scylla and Charybdis** (Odyssey), after the teacher's notes "the rocks look like a slalom", "too easy, over too quickly" and "the path is too wide":
  - The gates are big sea stacks, and each hit area matches its drawing.
  - The strait is about half the screen wide, and reefs of rock lie between the lettered rows.
  - Every setting in `straitParams` is harder from level 9 on.
  - After the last answer the galley must still get through the rest of the strait: `mopup_strait`, with 11 rows of rocks at level 9 and 40 at level 99.

## v5.12.2 (2026-10-06) — the Odyssey in story order

- **Why:** a teacher saw the Cyclops's cry "Nobody is killing me!" come up before the passage where Odysseus tells him his name is Nobody. The picker chose passages by length and at random.
- **Within an episode:** the Odyssey game now asks its passages in story order (`ODY_STORY` in `js/content.js`). The scenes come in the order they happen, and passages that retell a whole episode come after its scenes. Short and long passages mix wherever the story puts them.
- **One passage at a time:** a passage stays on screen until all of its questions are asked, in the order they were written. The next level continues where the last one stopped, and after the last passage the story starts again.
- **"All episodes":** first the frame at the Phaeacian court, then the Lotus-Eaters, the Cyclops, Circe, the Cattle of the Sun and Calypso, then the paired texts.
- **Other games:** the Virginia and New Jersey games keep their length-based picker.

## VA zip names (2026-10-07)

`node tools/build-canvas.js VA` now writes **`dist/canvas/SOL Lab VA Eng.zip`** (first-time setup) and **`dist/canvas/SOL Lab VA Eng update.zip`** (update). Only the zip names changed: the files inside keep their `SOLLabyrinth-VA-*` names, so an update still replaces the files already in Canvas, and the embed code and students' saves are untouched. The READ ME in each zip names the new zips. NJ and Odyssey zips keep their `SOLLabyrinth-<NJ|Odyssey>-Canvas*.zip` names.

Every READ ME (all games, full and update) now opens with **both Canvas embed codes**: the game's (`height="700"`, for a Page students see) and the teacher page's (`<iframe src="/courses/COURSE/files/NUMBER/preview" width="100%" height="900" allow="clipboard-write"></iframe>`, for a Canvas Page kept unpublished), with how to find COURSE and each file's NUMBER. The teacher steps now say to put the teacher page on its own unpublished Canvas Page; opening it from Files or from the computer stays as the fallback if Download CSV or Copy is blocked inside Canvas (in an iframe, Copy falls back to select-and-Ctrl+C).

## v5.12.1 (2026-10-06) — a READ ME in every Canvas zip

`tools/build-canvas.js` puts a plain-text file in each zip:
- "READ ME FIRST - Canvas setup.txt" in the full zip: how to upload the files, find the course and file numbers, and paste the embed code.
- "READ ME FIRST - Canvas update.txt" in the update zip: how to replace the .js files and keep the page.

Both carry the embed code (`<iframe src="/courses/COURSE/files/NUMBER/preview" width="100%" height="700" allowfullscreen="allowfullscreen"></iframe>`). The game files are unchanged.

## v5.12.0 (2026-10-05) — Root Worms, new birds in Eagle Swoop, and "clear the field" after the last answer

Ported from the teacher's Chemistry build (its v1.3, forked from v5.8.0): only the game-mode code, fitted into the current shooter shell. No Chemistry content or wording came over.

- **Root Worms, a centipede-style level (Virginia and New Jersey only).** Nidhogg's worms wind down a mushroom field and turn at every mushroom. Some segments of the lead worm glow with the letters; shoot the one with the right answer. A wrong glowing segment costs a life. Any other segment you shoot becomes a mushroom and splits the worm. Sol walks in the clearing at the bottom with one arrow in the air at a time. A worm, a wolf or a falling raven reaching Sol costs a life. Each realm adds something (a wolf, a second worm, falling ravens, longer and faster worms, a wisp that poisons mushrooms, an iron-helmed head, a third worm).
  - **Difficulty:** `wormsParams` in `js/modes.js` is harder at every level 2–100. Level 18, where it first comes in the Mixed game, has one slow worm (a step every 175 ms) and a wolf every 8.5 s. Level 99 has three worms stepping every 86 ms, the iron helm, the wisp, ravens every 5 s and four-hit mushrooms.
  - **No soft-lock:** a worm, or a piece split off one, that is still off the edge always walks onto the field. A worm that bites Sol never loses a glowing segment. A worm at the bottom keeps moving in the clearing, where it can be shot. If a right letter ever went missing, a watchdog would lay the letters out again on a fresh worm.
- **Mixed rotation (Virginia and New Jersey).** Five shooters now share the four shooter levels of a realm (2, 4, 6 and 8). The order raid, rocks, sky, ring, worms turns one place every realm, so each shooter plays in eight realms of the ten. Realm 1 is unchanged; Root Worms first comes on level 18. When a shooter comes back after a realm away, its card also lists what came in while it was away. Sun Chariot's raven guards (from level 11) and sparks (from 21) start in the realm its card names them. The Odyssey rotation is unchanged.
- **Game mode screen:** a **Root Worms** card in the Virginia and New Jersey games. The Odyssey game never offers it, and a saved pick of it falls back to All modes there.
- **Eagle Swoop's rows are new birds realm by realm.** Ravens, then magpies (fast, zig-zag), hawks (two arrows, steer at Sol), owls (drop a spread of three) and falcons (the fastest, aim at Sol). Ragnarok mixes them all. Each bird has its own picture. The card lists the birds in the rows, and the first wave names the new ones. A bird shot out of the rows stays down (the rows no longer refill). The capture beam and the two Sols are unchanged. In the Odyssey's Siren Swoop the birds are gulls, terns, hawks, owls and falcons.
- **The teacher's rule (Eagle Swoop, Siren Swoop and Root Worms).** Answering the level's last question no longer ends the level: the student must shoot down every bird (or worm segment) left.
  - A banner counts what is left ("All questions answered — now clear the sky! 12 birds left"). Letters no longer matter and any hit takes one down.
  - Nothing new flies in, and catching beams stop. Hazards keep going: a hit still costs a life, and losing the last life still loses the level.
  - The clearing can't drag on: birds still waiting off-screen fly in, the stragglers dive more, and a worm still up in the field after 15 s plunges into the clearing.
  - The level is won when the last one falls, with the usual end screen, plus a small bonus for clearing without a hit.
- **Tests** (`tools/smoke.js`): the birds per realm, a hawk taking two arrows, rows that don't refill; a Root Worms run (a right segment scores, a wrong one costs a life, a shot splits the worm and leaves a mushroom, a bite costs a life, Select TWO needs both, nothing can get stuck); the clearing rule in both modes (no win on the last answer, the banner, a win only on the last kill, a loss when the last life goes); `wormsParams` in the every-level ramp check; the new rotation; the card in each `dist/` game. Pictures: `tools/shots/22a`–`22e` and `23a`–`23c`. On a loaded machine three older checks broke on fixed waits: the Eagle Swoop capture test crashed when the freed Sol had not landed within 8 s, the Rune Rocks beam-lock test ran while the next question's pop-up paused the level, and `tools/smoke-mode-ram.js` could loop forever behind that pop-up. They now wait on the game itself. `smoke-mode-ram.js` also expects the new Virginia rotation (levels 2, 22 and 62: raid, sky, rocks).

## v5.11.0 (2026-10-05) — four more Odyssey modes

Odyssey build only. Each mode lives in its own file and registers itself with `SolModes.extend(id, def, methods)` (new in `js/modes.js`, with the shared helpers on `SolModes.lib`). Each has its own test, `tools/smoke-mode-<id>.js`.

- **Under the Ram** (`js/mode-ram.js`, Book 9): cling under the ram with the right letter and ride it out of the Cyclops's cave past blind Polyphemus's groping hands.
- **Bend the Bow** (`js/mode-bow.js`, Book 21): aim and draw the great bow and shoot through the twelve axe heads in the row with the right letter, before the suitors run out of patience.
- **Calypso's Raft** (`js/mode-raft.js`, Book 5): ride the waves to the right letter and get on top of Poseidon's breakers. Ino's veil saves one hit.
- **Row Past the Sirens** (`js/mode-row.js`, Book 12): a rhythm game. Row on the drum's beat and steer through the right letter's passage while the Sirens' song pulls toward the rocks.
- **The Odyssey's Mixed rotation** (`ODY_ROT`): each island mixes in the modes that fit it (the ram on the Cyclopes' island, rowing on the Sirens' isle), and Poseidon's Storm brings them all back. All four new modes also have cards on the mode screen.

## v5.10.0 (2026-10-05) — The Odyssey gets its own look, its own creatures and a new mode

Only in the Odyssey build (`window.SOL_STATE === "ODY"`); the Virginia and New Jersey builds are byte-identical to before.

### The look and the words
- **Words:** at build time, `tools/ody-theme.js` rewrites the Odyssey copy's player-visible text (325 strings in `js/game.js`, `js/realms.js`, `js/modes.js`, `js/build.js`, `js/music.js`, `index.html` and the trophy pieces).
  - Sol becomes Odysseus, the Hati become Circe's wolves, Sol's chariot becomes Helios's, and Fenrir becomes Polyphemus, who blocks the gate with boulders and pays out the Ram's Fleece.
  - Realms become islands, and Ragnarok becomes "You reached Ithaca!".
  - It only touches the inside of string literals, using a small tokenizer (`tools/ody-jstok.js`). The build fails if any code token changes. Every change is listed in `dist/ody-theme-review.txt`.
- **Islands, art and colors:** `js/odyssey.js` (loaded only by the Odyssey build, before `js/game.js`):
  - It rewrites the ten realms as the voyage: Troy's Shore, the Lotus-Eaters, the Cyclopes, Aeolia, the Laestrygonians, Circe's Aeaea, the House of Hades, the Sirens' Isle, Scylla and Charybdis, and Poseidon's Storm. Each island gets its own palette and creature: lotus blossoms, a Cyclops shepherd, storm gulls, the giants' cooking fires, Circe's swine, shades, Siren song and Scylla's necks.
  - It draws Polyphemus as the boss.
  - It turns the shooter modes into Siren Swoop, The Wandering Rocks, Chariot of Helios and Circe's Courtyard, with Sirens, a Greek galley, storm clouds, sun-discs and moly flowers.
- **Page styling:** `css/odyssey.css` gives the pages Greek-pottery colors, serif headings and Greek-key borders.
- **Logo:** `tools/make-odyssey-logo.js` renders the new emblem and favicons into `assets/logo/odyssey-*.png`.
- `js/build.js`: a trophy names its realm by the realm's shown name, so the Odyssey castle builder says the island.

### Scylla and Charybdis, a new steering level

- **The level (Odyssey Book 12):** Odysseus's galley sails up the strait while the water scrolls down toward it. Rows of gates, each two sea stacks with a letter stone on top, come down the strait; sail between the two stacks of the gate with the right letter. A row holds one to three gates (as many as fit) with open water beside them, so a gate can be passed by, and its letter comes round again.
  - **v5.12.4 (the teacher: "the rocks look like a slalom", "too easy", "over too quickly", "the path is too wide"):** every rock is a big sea stack in three-quarter view (cliff faces with strata, a jagged top, white water round its foot, its shadow on the water), and what is drawn is what hurts (the foot and the top). The strait between Scylla's cliff and Charybdis is about half the playfield. Between two rows of gates come **reefs**: stacks right across the strait with one or two gaps (2 reefs at level 9, 3 from 39, 4 from 79). And the **last answer doesn't end the level**: the galley still has to run the rest of the strait — 11 reefs at level 9, 24 at 49, 40 at 99 — counted down on a banner ("All questions answered — now get through the strait! N rows of rocks left") as each passes the ship; a hit still costs a life and the last reef passed wins (the shell's clearing rule, `mopup_strait`, with its own words through `mopupText_strait` and `MODES.strait.clear`).
  - **Charybdis** (right): a whirlpool under the fig tree's rock. Every few seconds her water turns dark and spins faster for about a second, then she surges and drags the ship toward her. Her dark centre costs a life, and she spits the ship back out.
  - **Scylla** (left): a shadow and a closing ring on the water mark where one of her heads will strike. The sea-green neck then lunges there; a ship under it loses a crewman (a life). Her necks reach only partway across, so the safe water is next to Charybdis, as Circe warned.
  - A wrong gate, a pillar or a lone rock also costs a life. A Select TWO question needs both right gates. **ROW** (Space, the ROW button or a mouse button) gives a short burst of speed.
- **Difficulty** (`straitParams` in `js/modes.js`): one curve, harder at every level (v5.12.4: harder from the start). Level 9: one head, a strike every 3.3 s with 1.1 s of warning, a steady tug and a surge every 7 s, lone rocks, gates 113 px wide. Level 99: four heads, a strike every 0.8 s with half a second of warning, near-constant surges, gates 60 px wide, swaying gates, reefs with mostly one gap, and more than twice the speed.
- **Where it plays:** the Odyssey game's Mixed rotation is level 2 Siren Swoop, 4 The Wandering Rocks, 6 Chariot of Helios, 8 Circe's Courtyard and **9 Scylla and Charybdis**; levels 1, 3, 5, 7 and 10 stay the maze and the boss. Its game mode screen also has a **Scylla and Charybdis** card that plays it on every level. The card, and a saved pick of it, exist only in the Odyssey build.
- **Tests:** `tools/smoke.js` checks the rotation in both kinds of build, the card in each `dist/` game, the difficulty ramp (every level 2–100 harder than the one before), and a run: the right gate answers, a wrong gate, a pillar, Charybdis's centre and Scylla's strike each cost a life, a surge is telegraphed and then pulls, and a Select TWO question needs both gates; and (v5.12.4) the run to the end: the last answer doesn't win, the banner counts the reefs down, a rock still costs a life, and the last reef passed wins. Pictures: `tools/shots/21a-scylla-charybdis-9.png`, `21b-scylla-charybdis-89.png`, and the run to the end, `21c-scylla-charybdis-run-9.png` and `21d-scylla-charybdis-run-89.png`.

## v5.9.0 (2026-10-05) — The Odyssey: a third game for English 9, Unit 2

- **A separate game:** `node tools/build-games.js` now also writes `dist/ody/`, built for the Eng 9 Unit 2 "Challenge Accepted!" plan. In Canvas it is its own file, `SOLLabyrinth-Odyssey.html` (`node tools/build-appsscript.js ODY` then `node tools/build-canvas.js ODY` → `dist/canvas/SOLLabyrinth-Odyssey-Canvas.zip`). It opens on its own title screen, with no state or grade to choose.
- **Pick an episode:** after the game mode, the skill screen lists the episodes instead of the skills:
  - The Lotus-Eaters, the Cyclops, Circe, the Cattle of the Sun and Calypso
  - The Whole Voyage: paired texts that compare characters across episodes, Greek values, and an article on facing setbacks set beside Odysseus
  - All
- **The questions:** 48 passages and 296 questions, eight passages per episode from tiny (about 80 words) to epic (about 600), in `js/content26.js`–`content31.js` (`family: "ODY"`, with an `episode` on every pack).
  - The passages are original retellings of Homer, some in verse. No modern translation is used.
  - The questions use the unit's Virginia codes: character traits and responses to challenges, setting and plot, theme ("How do the challenges of life affect a person?"), epic similes and imagery, word choice and tone, vocabulary in context, allusions, and comparing texts.
- **Its own saves:** the build's save keys are `afterHours.ody.*`, so its levels, castle and used questions never mix with the Virginia game's, even on the same site.
- **Tests:** `tools/smoke.js` checks the episode pools (each episode serves only its own passages, and no other game sees them) and the `dist/ody` build: the episode screen, the save keys, and a Cyclops level. `tools/smoke-canvas.js ody` checks the Canvas build.

## v5.8.5 (2026-10-05) — Rune Rocks: the beam stays locked on the rock it is pulling

- **The bug:** a teacher pulled in the second right letter of a two-answer question while still holding the beam, and was told "you let go of the beam too soon" and lost a life (twice).
- **The cause:** the beam re-picked its target every frame (the nearest rock in a narrow cone). A rock drifting into the cone nearer the ship, or the pulled rock sliding out of the cone in the last moment, dropped the pulled rock. That rock flew on at pull speed, hit the ship, and was counted as released early.
- **The fix:** the beam now locks on the rock it is pulling until that rock is in or the beam is let go.
- **Test:** `tools/smoke.js` recreates both causes at once. A plain rock appears in the beam nearer the ship while the ship turns mid-pull. The test failed on the old code with "YOU LET GO OF THE BEAM TOO SOON" and passes now.

## v5.8.4 (2026-10-05) — every mode gets harder at every level; Rune Rocks waves and saucers; a tougher Wolf Ring

Each mode now has one difficulty curve tied to the level number, so every level is harder than the one before. That matters most when a student picks a single mode, because then it plays on every level.

- **Rune Rocks** (`rkParams`), modeled on Asteroids:
  - **Every level:** more rocks at the start (3 at level 1, 9 at 48, 14 from 88), a fuller field, faster respawns and faster rocks.
  - **Waves:** each new question in a level sends in another wave of big rocks.
  - **Dark-elf saucers** (Asteroids' flying saucers): a big one from level 6 fires in random directions; a small one from level 16 aims at the ship. Both come more often, and the small one aims better, as levels rise.
  - Saucer shots break plain rocks. A saucer's shot or ram costs a life, and shooting one gives 1,000 or 2,000 points.
- **Wolf Ring** (`ringParams`) starts harder and keeps climbing:
  - At level 1: four wolves at once, sooner and faster, in packs from the start.
  - Every level: more wolves, faster, more packs, shorter head start, and stones that stay up for less time.
  - The alpha wolf comes from level 12 and packs of three from level 21.
- **Eagle Swoop** (`raidParams`): dives come sooner and faster, more birds dive at once (one more every 20 levels), poo falls faster, and eagles beam more often.
- **Sun Chariot:** the curve now climbs from level 1, not flat until level 6.
- **Maze:** already harder every level (wider cameras, faster Hati, longer chases). The new test confirms it.
- **Test:** `tools/smoke.js` checks every mode's settings for levels 1–100: each level must be harder than the one before and never easier on any setting. It also checks Rune Rocks waves and saucers (they fly in, fire, can be shot down, and their shot costs a life).

## v5.8.3 (2026-10-03) — pick a game mode; a caught Sol costs a life only if he isn't freed

- **A game mode screen after the grade.** The cards are **All modes** (the mixed campaign, as before), **Labyrinth** (the maze only), and one card for each shooter: **Eagle Swoop**, **Rune Rocks**, **Sun Chariot** and **Wolf Ring**.
  - With one mode picked, every level plays as that mode, boss levels included. The levels, realms and questions don't change.
  - The choice is remembered on the Chromebook (`afterHours.v1.gameMode`), and the skill screen names it.
  - Back on the skill screen goes to the mode screen; Back there goes to the grades.
  - How it works: `game.js` sets `SolModes.only`, and `SolModes.modeFor(n)` (`js/modes.js`) follows it.
- **Eagle Swoop: being caught costs nothing yet.**
  - An eagle's beam catches Sol without costing a life (a 1.2 s safe time, and a big "THE EAGLE CAUGHT SOL!").
  - A life is lost only if he is still held when the question is answered (the round ends), except on the level's last answer.
  - An arrow on that eagle frees him even while he is still rising up the beam.
- **Tests:** `tools/smoke.js` covers the mode screen (cards, Back, remembered choice, maze only, one shooter on every level, Rune Rocks on level 3) and the new capture rule. The Apps Script and Canvas tests click through the mode screen.

## v5.8.2 (2026-10-03) — Eagle Swoop's capture and two Sols; the Canvas version runs

### Eagle Swoop: Galaga's capture
An eagle's beam no longer just takes a life. It works the way a boss Galaga captures the fighter (`js/modes.js`):
- **One Sol, caught:** the beam costs a life. A copy of Sol, tinted gold, spins up the beam, and the eagle carries him back to the formation, where he hangs over it.
- **Getting him back:** the next arrow that hits that eagle frees him. That arrow doesn't hurt the eagle, so it never picks the eagle's letter. He flies down and stands next to Sol, worth 1,000 points.
- **Two Sols** stand side by side and shoot two arrows at a time.
  - A beam, a diving bird or poo that hits either Sol takes that Sol away instead of a life.
  - Once one Sol is left, he can be caught and freed again.
- **Limits:** while an eagle holds Sol, no eagle beams. When the flock goes (a correct answer, a new question), a Sol still held goes with it, and one already on his way down lands.
- **Test:** `tools/smoke.js` checks the whole sequence: the beam carries Sol off, an arrow frees him without hurting the eagle, two Sols fire two arrows, and poo on one takes him away with no life lost. Its screenshots are `16c-eagle-caught-sol` and `16d-two-sols`.

### The Canvas version runs: a small starter page and its data files

The one-file Canvas build (v5.8.1) never got past its first screen in Canvas. Tests in a real course showed why:
- Canvas runs the scripts of a small uploaded HTML page shown in a Page's iframe (`/courses/…/files/…/preview`), but not of a 7 MB one.
- A small page can read a file next to it in the same Canvas folder with a relative `<script src>`.

So `node tools/build-canvas.js VA` now writes **`dist/canvas/VA/`** and the same files as **`dist/canvas/SOLLabyrinth-VA-Canvas.zip`** (5.2 MB):
- `SOLLabyrinth-VA.html`: the starter page (3 KB). It holds the loading screen and one `<script src>`.
- `SOLLabyrinth-VA-game.js`: the loader, the manifest and the list of data files.
- `SOLLabyrinth-VA-data-01.js` … `-10.js`: the gzip bundle as base64, 576 KB of it per file. Each file calls `solPart(i, hash, base64)`, and a file from another version is refused.

- **In Canvas:**
  1. Upload the zip to one folder in **Files** and let Canvas expand it.
  2. Embed `SOLLabyrinth-VA.html` in a Page: `<iframe src="/courses/<course>/files/<file id>/preview" width="100%" height="700" allowfullscreen></iframe>`.
- **Saves:** Canvas gives each uploaded file its own web address, and the saves live with the starter page's. An update replaces only the `.js` files, so the starter page and every student's progress stay. `SOLLabyrinth-VA-Canvas-update.zip` holds just those `.js` files.
- **A missing or renamed file is named on screen** (for example, "can't find SOLLabyrinth-VA-data-03.js: upload it to the same folder as this page, with the same name").
- **Test:** `node tools/smoke-canvas.js va` serves the files from a Canvas-like folder path (with a space in it) and embeds the starter page in a "course page" on another origin. It checks that the page reads only its own files, that every file is read, and that a missing data file is named. The v5.8.1 checks (level, 3D castle, music, separate saves) still run.

## v5.8.1 (2026-10-02) — a Canvas version: one HTML file, nothing hosted outside the school

For schools where the game can't be hosted on GitHub or any other outside site: `node tools/build-canvas.js VA` (after `tools/build-games.js` and `tools/build-appsscript.js VA`) writes **`dist/canvas/SOLLabyrinth-VA-Canvas.html`** (about 7 MB). The whole game is inside that one file. That includes the 3D castle but no music, like the Apps Script version.

- **In Canvas:**
  1. Upload the file to the course's **Files**.
  2. Embed it in a Page with an iframe pointing at the file's `/preview` address.
- **How it loads:** The file holds the Apps Script loader with the manifest and the gzip bundle written in as base64. The loader (`tools/appsscript/loader.js`) sees the bundle in the page, so it needs no server: no `google.script.run` calls, no downloads and no IndexedDB.
  - The bundle is split into 384 KB pieces, each followed by a one-line script that moves the loading bar, so the bar moves while the browser is still reading the file.
  - The page also says plainly when it isn't allowed to run scripts, and shows any error.
- **Smaller bundle (both versions):** The file went from 12.3 MB to 7.3 MB, and the Apps Script download from 8.6 MB to 5.2 MB.
  - A castle model that differs from an earlier one by one word in its name (the four colours) is stored as a delta of that model. That makes 5 MB of models 0.14 MB.
  - PNGs travel as lossless WebP when that is smaller. The pixels are the same; `tools/webp-cache.py` keeps the encodings in `dist/.webp-cache`.
- **Saves:** Canvas serves every uploaded HTML file from one shared domain. The Canvas build therefore gives the game's localStorage keys their own prefix (`solReading.va:`). Another game built on this engine on the same Canvas can't read or overwrite these saves.
- **Not included:** Class sessions and the teacher page need the Apps Script server, so they are not in the Canvas file.
- **Test:** `node tools/smoke-canvas.js va` serves the file from one origin and embeds it in a "course page" on another. It checks that:
  - the file requests nothing else;
  - a level starts and the 3D castle draws;
  - music is off;
  - another game's saves on the same domain stay separate.

## v5.8.0 (2026-09-30) — class sessions and a teacher page (Google Apps Script)
- **A class-only session without changing the core game.** The teacher page is the Apps Script link with `?admin=1`, locked with a teacher PIN chosen on the first visit. It makes classes. Each class has its own link, the game link with `?class=CODE`, and only students on that link get the class's settings. Everyone on the plain link keeps the regular game.
- **Per class:**
  - **Question sets on any theme** (for example *The Odyssey*): a passage (sentences numbered automatically) and multiple-choice questions, each with a skill (RL / RI / RV / DSR) and a right letter.
  - **Hide** a regular question.
  - **Edit** a regular question's wording, choices or right answer.
  - **Choose** whether the class plays only its own sets or mixes them with the regular questions.
  - **See students' progress:** highest level, current level, right and wrong answers, reading level, and when last seen.
  - Students type a first name or nickname once. Real names are never required.
- **Where it lives:**
  - `Code.gs` stores classes and progress in the script's own properties, split into 8 KB pieces. Nothing goes in Google Drive.
  - The game loads a class's settings while it downloads (`tools/appsscript/loader.js`). `js/classes.js` applies them to the question bank before `game.js` starts and does nothing without a class.
  - Progress goes out through `solReport` whenever the game pings the teacher.
  - The teacher page (`tools/appsscript/admin.js` and `admin.css`) is packed into the bundle and runs after the question bank, instead of the game.
  - An unknown class code plays the regular game and says so.
- `Code.gs` changed, so paste it into the Apps Script project once more.
- `node tools/smoke-appsscript.js` also drives the teacher page and a class session:
  - PIN setup
  - a new class with an Odyssey set and a hidden question
  - the student's nickname
  - the set mixed into the pool
  - progress reaching the teacher page
  - "only this class's sets"
  - an unknown code

## v5.7.9 (2026-09-30) — every shooter climbs, a shielded Sun Chariot, horses, and town fixes
- **Each shooter adds something every time it comes round.** A mode comes round once a realm, 10 times in all. From the second time on, its intro card says what is new ("New this time: …"), and the new thing stays for the rest of the run.
  - **Eagle Swoop:**
    - aimed poo, two drops a dive
    - eagles trade places
    - iron-helmed eagles (three arrows)
    - a third raven row
    - a storm cloud that stops arrows
    - beams that follow Sol
    - ravens in formation drop poo
    - two clouds and faster swaps
    - one more diver in Ragnarok
  - **Rune Rocks:**
    - comets (a red line shows where first)
    - iron rocks (two shots)
    - heavy runes (slower pull)
    - a slippery ship
    - guard stones circling each letter rock (they block the beam until they are shot)
    - comets in pairs
    - a valkyrie throwing spears
    - rock showers
    - faster rocks in Ragnarok
  - **Wolf Ring:**
    - wolf packs
    - the alpha wolf (three arrows)
    - ravens dropping poo, with a shadow showing where it will land
    - sliding runestones
    - a quiver of six arrows that refills
    - zig-zag wolves
    - shorter stone time and two alphas
    - leaping wolves (they crouch first)
    - faster wolves in Ragnarok
- **Sun Chariot is harder from the start.**
  - Every letter orb sits in a turning gold shield with one gap. A sunbolt only gets through when the gap faces the chariot, so a shot needs timing, not just aim.
  - Orbs are smaller, faster and wobble more.
  - Each time the level comes round, the gap narrows (62° to 35° either side) and the shields spin faster. From level 36 the shields reverse without warning, and from level 66 each shield spins at its own speed. The guard ravens and wisps' sparks stay.
- **Two horses pull the sun chariot.** A two-frame gallop. The whole team is drawn smaller than the old chariot on its own. Anything that hits the horses costs a life too, and bolts leave from in front of the horses.
- **Sol rides the chariot in the maze.** The CHARIOT power after a right letter used to say Sol rides the sun's chariot but showed nothing. Now the horse team pulls Sol while it lasts: the horses lead the way Sol runs, sparks trail behind, and it fades in the last half second.
- **Town builder.**
  - Dragging a piece no longer drags the view with it. The view fits itself to the pieces, so a lone house used to stay put while the ground slid under it.
  - The view now holds still during a drag, and after the drop it pans so the piece stays where it was let go.
  - Turn now flips a town building to face the other way. Town buildings are single pictures, so they have two ways to face. Before, Turn said "turned" and nothing changed.
- **A wrong letter names the letter.** The banner reads "WRONG LETTER (B)", and when a wrong letter uses the last life, the end screen says which letter was picked and which the question wanted. This makes it easy to check a question that seems marked wrong. All 2,849 keys map correctly, and letter tiles are never closer than 128 px (the pickup reach is 92 px).
- `tools/smoke.js` (121 checks) adds tests for:
  - the shields
  - the chariot ride in the maze
  - the town drag and turn
  - every shooter at its Ragnarok level

## v5.7.8 (2026-09-29) — a Google Apps Script version (Virginia)
- **For schools that block GitHub Pages and Netlify.** The teacher pastes one small file, `dist/appsscript/Code.gs` (also published at `appsscript/Code.gs` on the gh-pages branch), into a new project on script.google.com and deploys it as a web app. Students open the `/exec` link, or the teacher embeds it in Google Sites. The page only ever talks to script.google.com. The script fetches the game from this public repository on Google's servers, where the school's filter never sees the request.
- **The whole game, without the music.** The 3D castle is included. `tools/build-appsscript.js` packs the built game (511 files, 17.6 MiB) into one gzip (8.6 MiB), cut into three parts. The loader keeps the bundle in the Chromebook's IndexedDB, so each Chromebook downloads a version once. After that, a visit only asks for the small manifest. The loader answers every request the game makes (fetch, XMLHttpRequest, images, CSS) from the bundle in memory. With `window.SOL_NO_MUSIC` set, `js/music.js` plays nothing, and the music buttons are hidden.
- **Updates arrive by themselves.** `sh tools/publish-pages.sh` now also publishes `appsscript/va/` (loader, manifest and parts). Every page load asks for the newest manifest.
- `node tools/smoke-appsscript.js` tests it. It serves `dist/appsscript/test.html`, which stands in for Apps Script, and checks the title screen, a level, the Phaser textures and every 3D model of a full castle. It also checks that nothing but the loader, manifest and parts came from the server, and that a second visit loads from the cache.

## v5.7.7 (2026-09-28) — a harder Eagle Swoop
- **No shooting until the flock has formed.** "GET READY" shows while the birds fly in; arrows only start once every bird of the wave has reached its place ("FIRE!"). A student who fires early is told to wait.
- **Always a bird in the air.** Once shooting starts, a bird dives the moment none is flying. Up to 2 dive at once at first, 3 from level 25, 4 from 50 and 5 from 75, launched every 0.7–1.4 s. Eagles lead half the dives (up from 40%), so the right answer is often on the move.
- **Eagles are better guarded.** Two pale guard ravens hang just under every eagle's letter, and an arrow hits the first bird in its path. Guards never dive and fly back to an eagle that is home in the formation (checked every 5 s). The raven rows sit lower, and they refill sooner: at 75% instead of 60%, every 5 s instead of 7.
- **Bird poo instead of feathers.** Thick white drops with a dark outline, easy to see on any sky, splat on Sol ("SPLAT! BIRD POO GOT YOU") or on the ground. The Sun Chariot's thrown feathers are bigger and have a light outline.
- `tools/smoke.js` checks that early shots do nothing, two guards per eagle, and a bird always flying once shooting starts.

## v5.7.6 (2026-09-28) — a Fenrir worth fearing, and boss rewards
- **Fenrir hunts.**
  - He stalks Sol through the whole maze at 70% of her walking speed, re-aiming every 1.5 s. When she stands in START or EXIT he wanders instead.
  - He charges 7 s into the level, then every 10 s, and 0.8 s sooner for each chain broken (never less often than every 5.5 s).
  - A charge lasts 4.5 s at 390 speed plus 10 per realm, and 8 faster for every chain broken. Sol outruns him empty-handed, but not while carrying a letter (365).
  - Picking up a right letter brings his charge within 2.5 s ("Fenrir smells the rune you picked up").
  - After a charge, a catch or a stun he pants for a moment instead of walking home to the pen.
  - Boss levels keep every Hati; they used to lose one.
- **Beating Fenrir pays three ways.**
  - Coins: 100 plus 25 per realm (325 at level 100), up from 40.
  - Fenrir's Fang for that realm: +1 coin on every correct answer for good, one per realm, stored as `afterHours.v1.fangs`. The win screen shows the fangs collected.
  - The realm's monument, placed in the castle: ten castle pieces nobody can buy and that are never offered as rewards. They are Hero of Midgard, Frost Obelisk, Giant's Head, Fire Beacon, Dwarf-Forged Urn, Sun Ring, Light Spire, Ward Stone, King of Asgard and the Wolf-Slayer's Column (`pieces.json`, `"boss": realm`; `SolBuild.grantTrophy`). The palette shows the ones still to win as "Beat Fenrir in …". A Town gets +50 coins instead, and the message suggests the Castle.
- **Every question with no adapting.** `docs/questions/SOL-Labyrinth-Grade5/9/10/11-all-questions-no-adapting.docx` list every question of a grade in level order. Each passage sits at the level whose target length is closest to its word count, reading level shown but not used. A table shows how many passages each group of ten levels has. The earlier average-student lists are still there.
- `tools/smoke.js` checks the hunter, the smell of a picked-up rune, every Hati on a boss level, the boss coins, the Fang and its +1, the monument on the field, and that the shop never lists a monument.

## v5.7.5 (2026-09-28) — a harder Sun Chariot, runestones that rise under attack
- **Sun Chariot is harder from the start and keeps climbing** (`skyParams`). The first one (level 6) plays like level 30 used to, and each later one adds more on a steeper curve: creatures come every ~1.0 s at level 6 and every ~0.4 s by level 96, and ravens and wisps fly faster.
  - Ravens now throw feathers at the chariot, aimed at where it is. A raven glows orange for a third of a second first. The chance a raven throws grows from 45% to 83%.
  - From level 26, wisps throw sparks too.
  - From level 16 the orbs weave further and faster.
  - Also from level 16, a guard raven (pale violet) flies in front of some orbs: 1 at level 16, 2 at 36, 3 at 56, 4 at 76. A bolt hits the guard first; it comes back when the orb comes round again. Right and wrong orbs are guarded alike.
  - Bolts now check their whole path, so fast shots no longer pass through a target.
- **Wolf Ring: the runestones rise under attack.** Every stone starts sunk in the ground while the Hati come in. After about 3.6 s, stones rise one or two at a time, in a shuffled order, on random spots round the ring, never right beside Sol. Each stays up for 6.3 s at level 8, down to 4 s at the top levels, then sinks, and the next rise. Every stone comes up once per round. A sunk stone can't be shot. A wrong stone is crossed out and leaves the rotation, so the right answer is only open for moments while the wolves are running.
- The mode cards and hints describe the new rules.
- `tools/smoke.js` checks the Sun Chariot difficulty curve, a thrown feather, a guard taking the bolt, the stones starting sunk, a sunk stone ignoring arrows, and one or two stones rising at a time.

## v5.7.4 (2026-09-28) — clicking only shoots; letting go of the beam too soon
- **The mouse never steers in Rune Rocks or Sun Chariot.** A click used to turn and thrust the ship toward the pointer (Rune Rocks) or fly the chariot to it (Sun Chariot) as well as fire. Now the left button only fires and, in Rune Rocks, the right button only holds the beam straight ahead; ◀ ▶ ▲, WASD and the on-screen pad steer. Wolf Ring still aims where you click (Sol does not move).
- **Letting go of the beam early is explained.** A rock pulled part of the way keeps flying at the ship when the beam is released, and hitting the ship costs a life even when it carries the right letter. The beam card says so ("Don't let go early!", and step 3 is now "Keep holding until the rock touches your ship"), the mode card's rules say so, and such a hit is labelled YOU LET GO OF THE BEAM TOO SOON with a reminder on the side panel.
- `tools/smoke.js` checks that clicks fire without moving the ship or the chariot, the early-release hit and its label, and the card's warning.

## v5.7.3 (2026-09-28) — how to use the Rune Rocks beam
- **A one-card tutorial.** On a Rune Rocks level, once the reading pop-up closes, a card shows how to pull a rock in: a picture of the ship's gold beam pulling a lettered rock, three steps (point the ship, hold the beam, keep holding until the rock reaches the ship) and a reminder not to shoot the right rock. The level waits while it is open; Got it, Enter, Space or Esc closes it. It comes back on each Rune Rocks level until the student has pulled a rock in once on that Chromebook (`afterHours.v1.beamLearned`).
- **The right mouse button is the beam.** In Rune Rocks the left button turns the ship toward the pointer and fires; the right button turns it toward the pointer and holds the beam (no thrust while beaming). ▼, Shift and the PULL button still work. The right-click menu is off in every shooter.
- `tools/smoke.js` checks the card appears, pauses the level and closes, that the right button beams and the left fires, and that pulling a rock in retires the card.

## v5.7.2 (2026-09-28) — question lists, late-level passage lengths
- **Longer texts stay longer late in the campaign.** When a grade's pool had few unused passages of the level's length left (Grade 9 after about level 60), the picker fell back to any length, so 100-word texts could come up at level 80. It now asks again from right-length passages the student has not seen in the last 20 questions (a repeat weighs a third of a fresh question), and a Part A asked again brings its Part B.
- **Rune Rocks names the real reason.** Losing the last life by blasting the rock with the right answer says so and tells the student to pull it in with the beam, instead of "That wrong letter used your last life."
- **Question lists for review.** `docs/questions/SOL-Labyrinth-Grade5/9/10/11-questions-by-level.docx` (Word files; Google Docs opens them) follow an average on-grade student (reading level 2) through levels 1–100 with the game's own picker: each level's questions in order, every passage in full the first time it appears, the keyed answer marked, check boxes for the reviewer, a table of passage lengths by realm, and the grade's remaining questions in an appendix. Rebuild with `node tools/make-question-docs.js` (needs `npm install --no-save docx`). The game builds leave `docs/` out.
- `tools/smoke.js` checks the Rune Rocks loss message.

## v5.7.1 (2026-09-28) — Eagle Swoop replaces Raven Raid
- **Level 2 of each realm is now Galaga-style.** Great eagles sit in the top row, each carrying a letter in its talons (the way Galaga's boss ships carry a captured fighter), with two or three rows of ravens flying guard below them; an arrow hits the first bird in its path, so the ravens shield the eagles. The birds fly in by groups on looping paths, the formation sways and breathes, and ravens and eagles peel off to dive at Sol (an eagle brings up to two raven escorts) and drop feathers aimed at him. A diving eagle can stop mid-sky and shine a beam down to the ground: it grows for 0.6 s as a warning, and standing in it costs a life. An eagle takes two arrows (the first one tints it); the second decides its letter. When the ravens thin out, more fly in to guard the eagles. Huginn still crosses the top for bonus coins. The bunkers and the marching flock are gone.
- **Clicking only shoots.** On Eagle Swoop a left or right mouse button (or a tap) fires without moving Sol, and the right-click menu no longer opens over the game; Sol walks with ◀ ▶, A / D or the on-screen pad.
- `tools/smoke.js` checks the eagles and their raven guard, the two-arrow eagle, the beam, and that holding either mouse button fires without moving Sol.

## v5.7 (2026-09-27) — shooter levels
- **Every other level is a shooter.** Levels 2, 4, 6 and 8 of each realm swap the maze for one of four shooters, in the same order in every realm; odd levels stay in the maze and every tenth level is still Fenrir's boss maze. The questions, the reading pop-up, the passage in the side panel, lives, coins, the adaptive reading level, the castle perks and the end-of-level screens are the maze's own (`js/modes.js`: `ModeScene` extends `NightScene` and only replaces the playfield; `game.js` switches scenes in `restartNight()`). A wrong letter costs a life, and so does getting hit. A card at the top of the first reading pop-up explains the mode and its controls.
  - **Raven Raid (2, space-invaders style).** A flock of Odin's ravens marches side to side and down the sky; some carry letter shields. Sol walks along the ground behind four rune-stone bunkers and shoots up. Shoot the raven with the right letter. Falling feathers and the flock reaching the ground cost a life; the bunkers wear away. Huginn, a golden raven, crosses the top now and then for bonus coins.
  - **Rune Rocks (4, asteroids style).** Plain rocks and lettered rocks drift across space and wrap around the screen. Sol's ship turns, thrusts and shoots; plain rocks split when shot. Hold the beam (▼, Shift or the PULL button) on the rock with the right letter to pull it in, and blast the wrong letters. Pulling in a wrong letter, blasting the right answer (it comes back from the edge) or a rock hitting the ship costs a life.
  - **Sun Chariot (6, side-scrolling flyer).** Sol drives the sun's chariot over the realm's hills. Letter orbs float past among ravens and will-o'-wisps and come round again if missed. Shoot the orb with the right letter; flying into a creature costs a life.
  - **Wolf Ring (8, arena).** Sol stands in a ring of runestones while the Hati run in from all sides. Arrows send a wolf running; shoot the runestone with the right letter (a wrong stone is crossed out). A wolf reaching Sol costs a life. Arrow keys move and aim, or click or tap to aim and shoot.
- **Controls.** Keyboard (arrows or WASD, Space fires), the on-screen d-pad with the big button relabelled FIRE, or a mouse or finger held where Sol should go (Wolf Ring: where to aim). The minimap and the LOCK button hide on shooter levels; PULL shows on Rune Rocks. Every twelve creatures or plain rocks pay bonus coins. Nothing flashes.
- `tools/smoke.js` checks the rotation, that each mode's wrong letters and hits cost a life and its right answer scores, that the last answer clears the level and Next level returns to the maze with its own controls, and that Retry restarts the same shooter.

## v5.6 (2026-09-25) — the nine realms, Fenrir and castle perks
- **Ten realms of ten levels.** Levels 1–100 walk through the nine Norse worlds and end in Ragnarok: Midgard (1–10), Niflheim (11–20), Jotunheim (21–30), Muspelheim (31–40), Svartalfheim (41–50), Vanaheim (51–60), Alfheim (61–70), Helheim (71–80), Asgard (81–90), Ragnarok (91–100). Each realm has its own floor (flagstones, ice, cobbles, cracked ash, ore-flecked stone, grass and flowers, marble, rune-carved stone, scorched ash), wall touches, colours, background, drifting particles (fireflies, snow, dust, embers, sparks, petals, light motes, mist, gold, ash), a quiet background sound (wind, fire, cave drips, birdsong, chimes) and its own music (the existing tracks, some slowed or sped up; `js/music.js` REALM_TRACKS). The HUD names the realm. A realm card at the top of the reading pop-up introduces the realm, its creature and any boss on the first level of a realm, on boss levels, and the first time a Chromebook reaches a realm.
- **A creature in every realm** (`js/realms.js`): Niflheim's ravens fly over the walls and call a wolf when they see Sol (not in the dark); Jotunheim's trolls guard one long hall each and stomp after her; Muspelheim's fire vents glow, then burst into flame; Svartalfheim's serpent winds through the tunnels and its whole body is dangerous; Vanaheim's golden boars charge down a hall when they see her and stun themselves on the wall; Alfheim's will-o'-wisps drift through walls and dazzle her (the view closes to a small circle for four seconds); Helheim's draugr creep closer only while she looks away; Asgard's valkyries sweep along a hall after a golden shadow falls across it; Ragnarok brings back three creatures at a time. The chariot power knocks the walking creatures flat; a catch names the creature ("CAUGHT BY A TROLL"). Movement is smooth and nothing flashes.
- **Fenrir on every tenth level.** The great wolf has chained the realm gate with one lock per question. Each correct answer banked at EXIT breaks a lock; a wrong letter makes him howl and charge, and he also charges every 16 seconds or so (sooner as the locks break). He prowls the Wolf Pen, shows red on the minimap, and one Hati sits the boss level out. Clearing a boss level pays 40 coins and names the next realm.
- **Castle perks.** Buildings placed in the castle builder give perks in the maze (`js/build.js` PERKS, `SolBuild.perks()`): Stables → Swift feet (6% faster); Well → Sure footing (wet floors never slow or trip Sol); Watchtower → Lookout (the realm creatures show on the minimap); Barracks → Castle guard (the first catch each level bounces off); Church or Shrine → Blessing (a 1UP every level); Market → Trade (+2 coins an answer); Mine → Gold vein (double pickup coins); Blacksmith → Iron boots (slowing floors slow half as much); Archery range → Archers (Hati 5% slower); Inn → Warm hearth (an extra second of safety after a catch); Workshop → Tinkerer (the chariot lasts 25% longer); Town hall → Royal charter (+10 coins a level); a mill → Harvest (+5 coins a level); Great castle → Rune of Sol (Fenrir's first charge each boss level misses). Village pieces map to the same perks where they fit. The builder marks perk pieces with ★, names the perk on the selection bar and shop cards, and lists the castle's perks under the gallery summary; the maze shows them on the level-start toast, the realm card and the HUD.
- `tools/smoke.js` checks the realm names, each realm's creature, that every creature that hurts costs a life, the raven's call, the draugr freezing when watched, Fenrir's gate and charge, and the perks.

## v5.5.1 (2026-09-24) — the logo
- **Sol's Labyrinth logo.** The game's logo replaces the text title (`assets/logo/`: a 512 px copy for the start screens and favicons at 32, 64 and 180 px; `tools/pages/assets/`: the full mark on transparency, the sun emblem alone and a 1920 × 640 banner for a website header, kept out of the game builds) on the state gateway and the title screen, and the sun is the browser tab's icon.
- **Publishing to GitHub Pages.** `sh tools/publish-pages.sh` builds both games and pushes them with a landing page (`tools/pages/index.html`) to the `gh-pages` branch as a single commit: `https://stumpgreg-ops.github.io/Claude/` links to `nj/` and `va/`. Turn Pages on once under the repository's Settings → Pages (branch `gh-pages`, folder `/ (root)`). A school site (Google Sites, Wix) links to or embeds those addresses.

## v5.5 (2026-09-24) — the castle in 3D
- **Every piece turns with the map.** The castle builder now draws its pieces with WebGL (`js/build3d.js`, three.js r160 vendored as `js/vendor/three.min.js`) from the kits' own models instead of sprites. A sprite only exists facing four ways, so between the quarter turns of the view every building sat still while its footprint turned under it; now the KayKit buildings, the Kenney castle-kit towers and keeps, the town-kit houses, stalls and carts, the figures and the siege engines all turn with the map by the degree, like the v5.4 walls. The camera is the builder's own isometric projection (elevation atan(1/√2), a cell 151 × 87.2 px, +x down-right and +y down-left at 0°) with the same fit, zoom and pan as the 2D canvas, so the sky, ground and footprints underneath and the hit tests line up with it to a hundredth of a pixel. Walls, gates, hedges and fences are boxes from the same plan as the 2D drawing (`runPlan`), one instanced mesh for all of them; the portcullis gate is two piers and a lintel with iron bars in the gateway, so the way through is open.
- **Models.** `tools/pack-models.js <KayKit Assets/gltf> <kenney mirror> [sizes.json]` writes `assets/build/models/`: the KayKit models the pieces use, one GLB per model and colour, repacked with 16-bit positions and texture coordinates (KHR_mesh_quantization) and no normals, about a third the size of the pack's files, sharing one texture; the Kenney Fantasy Town Kit GLBs and Castle Kit OBJ + MTL files as they are; and `models.json`, which maps each sprite's base name to its model files, scale, colour variants and base turn. Models load on first use and the field draws again as they arrive. The castle kit's beige stone is tinted grey and its blue accents recoloured per style on the materials, as the sprites were.
- **Pieces without a model** (the nature, graveyard and animal kits: trees, flowers, bushes, mushrooms, rocks, statues, benches, lamp posts, animals) stand upright as their sprites, facing the view, at the same spot on the ground the 2D drawing put them.
- **Sprites face one way.** `tools/make-castle-kit.py --ne-only` packs each sprite facing front only, since the sprites now serve the palette and shop thumbnails, the stand-ins above, and the 2D drawing on a Chromebook without WebGL (which then shows every piece facing front). The atlases shrink to a quarter, which pays for the models.
- **Fallback.** If three.js, WebGL or the model list is missing, the builder keeps drawing in 2D as before. The Town theme still draws in 2D (its pieces are single pictures, not kit sprites).
- `tools/smoke.js` runs Chromium with WebGL (SwiftShader) and checks that the 3D view is on, that its projection matches the 2D layer at 0° and 217°, and that every model the castle asked for loaded. `tools/bundle-three.sh` rebuilds `js/vendor/three.min.js` with esbuild.

## v5.4.1 (2026-09-24)
- **The build's version on its title screen.** A small `v5.4.1` under the title on the state gateway and the title screen (`tools/build-games.js` stamps the build's version into it), so a screen recording says which build it is. The v5.3 walls are sculpted sprite tiles that keep their screen orientation; the v5.4 walls are plain grey boxes with square battlements that turn with the map.

## v5.4 (2026-09-21) — walls that turn with the map
- **Walls, gates, hedges and fences are drawn as geometry.** A run piece (wall, portcullis gate, open gate, stairs wall, corner turret, hedge, hedge gate, wooden fence, fence gate, rail fence) used to be a sprite that only exists facing four ways, so between the quarter turns of the view a ring of walls broke into staggered parallel blocks. Each run cell is now built from its cell's corners in world space and projected through the view as boxes: a full box for a straight run, half boxes for the arms of a corner, T or cross, with battlements along the top, an archway (and iron bars on the portcullis) on the face toward the viewer, three steps for the stairs wall and a round turret with its own ring of merlons for the corner tower; hedges are green blocks with a gap in the hedge gate, fences are posts and rails. A wall stays one continuous line at every angle, and joins read from world neighbours (the same kind of run, or a solid building). All side faces of a cell draw before its tops, so overlapping arms show no seams. Stone is the grey of the KayKit buildings.
- **Turning a joined wall.** A wall that joins other pieces keeps its line, since the joins decide its direction; the note says so (and a turned stairs wall moves its stairs to the other side). A wall on its own still switches between its two ways.
- Palette and shop thumbnails still use the sprites.

## v5.3 (2026-09-21) — the KayKit castle
- **A base-builder castle.** 57 new castle pieces from Kay Lousberg's **KayKit Medieval Hexagon Pack** (CC0): a three-cell Great castle with a tower at every corner, a Town hall, Barracks, Archery range, Market hall, Mine, Shipyard, Stables, Workshop, Army tent (two cells each), a Blacksmith, Church, Small and Tall house, Lumber mill, Shrine, Inn, Water mill and Stone windmill, six stone and timber towers (a Squat tower and a Wooden watchtower take flags), a Stone well, a Grain field, a Building site, Ruins, stages, barrels, crates, supplies, hay, a wheelbarrow, an archery target, a weapon rack, a trough, cannonballs, a camp tent, carts, a wheeled catapult, a cannon, a warhorse, a soldier, a war banner and a ground flag in your colour, two trees, two groves and rocks. Every coloured piece comes in Royal Blue, Crimson, Forest and Gold, straight from the pack's four team colours. Town, Garrison, Mill and Stone tower packs in the shop.
- **Grey stone walls.** Kenney's beige wall and tower tiles are tinted to grey stone so they sit with the new buildings (`greystone` in the generator); the blue accents still recolour.
- **Multi-cell pieces.** The builder anchors and depth-sorts 2×2 and 3×3 pieces from the front apex of the whole footprint.
- **Rendering pipeline.** `tools/render-kaykit.js` (Playwright + three.js in headless Chromium, WebGL through SwiftShader) renders the pack's glTF models in true isometric onto Kenney-convention canvases in four directions and four colours, fitting each model by its rendered width (hexagonal bases are narrower than their bounding box); `tools/make-castle-kit.py --kaykit <renders>` imports them like any other extra kit (1-, 2- and 3-cell reference tiles). The KayKit glTF folder and the renders are not in the repo; the atlases are.

## v5.2.1 (2026-09-20)
- **Turning a wall or gate.** A wall, portcullis gate, open gate, hedge, hedge gate, fence, fence gate or rail fence looks the same from behind, so it only has two ways to face; before, two of every four right-clicks looked like nothing happened. Turn now switches such a piece between its two ways and says "now runs the other way". Towers, houses, stairs and corner turrets still turn through all four quarter turns.

## v5.2 (2026-09-20) — New Jersey and Virginia as separate games
- **Two builds.** `node tools/build-games.js [version]` produces a New Jersey game and a Virginia game from the one codebase. In each, `index.html` sets `window.SOL_STATE`, starts on that state's title screen (the gateway section is hidden in the markup, so it is right even with JavaScript off), shows only that state's grade cards, has no "change state" button, and loads only that state's content files (`content.js`, which holds the pack engine, ships in both and `game.js` prunes the other state's packs from it at start-up). `tools/` is left out of the zips; both are about 23 MB and under 300 files.
- **Locked state in `game.js`.** With `SOL_STATE` set, the gateway never shows (not on load, not on the back-forward cache, not after a level), `applyState` always resolves to the built state, and the page title reads "SOL Labyrinth · New Jersey" or "· Virginia". Saves stay under the same keys, so progress carries over from the combined build.
- `tools/smoke.js` loads each built game and checks: title first, no gateway, only its cards, only its packs, back from the skill screen returns to the title.

## v5.1 (2026-09-16)
- **Turn any piece.** Right-click a piece (or tap it and use Turn, or press R) to turn it a quarter turn, so gates, stalls, benches, houses and towers face the way you want and join up. Every kit sprite now ships in all four orientations. Turned pieces keep their turn in the save and the build code, and Copy keeps it too.
- **Turn the view by the degree.** ⟲ ⟳ turn the whole scene 1° per tap; hold them to keep turning (about 40° a second). The mouse wheel turns faster (about 3° a notch); Ctrl + wheel zooms; ← → also turn (Shift for 15°). Positions rotate smoothly on the ground; the art itself only exists in four directions, so sprites snap to the nearest quarter turn and straight runs of wall or hedge show their seams in between. A view that stops within 4° of a quarter turn settles onto it.
- **Atlas sheets.** The kit's 926 sprite files are packed into six atlas sheets (2.1 MB), so a build zip stays under itch.io's 1,000-file limit and a page loads six images instead of nine hundred. `tools/make-castle-kit.py` packs them; `kit.atlas` in pieces.json maps each sprite to its sheet.
- **A flat field.** The dome is gone: the build stands on a flat square of grass cells with a faint grid that turns with the view, on a plain that runs to the mountains.

## v5.0 (2026-09-16) — the full-screen castle editor
- **Full screen.** "My Castle" / "My Town", the shop and every reward step now fill the whole screen; the scene takes all the room the palette and buttons leave.
- **Own it once, place it forever.** A piece earned as a reward or bought in the shop is unlocked for good. The palette on the right lists every unlocked piece by category (Keep, Towers, Walls & gates, Buildings, Nature, Statues, Village, Animals, People & siege, Flags); tap one to place another copy, as many times as you like. Locked pieces show their price and open the shop. Packs charge only for pieces you do not own yet.
- **Any piece, anywhere, any time.** Drag any piece to any free cell, joined to the rest or on its own. Tap a piece for its bar: recolour (four house colours), Copy, Remove. Removed pieces stay unlocked in the palette. Delete / Backspace removes the selected piece.
- **Rotate, zoom, pan.** ⟲ ⟳ turn the whole scene in 90° steps (walls, hedges and fences re-tile for the new view), + − and the scroll wheel zoom, ⤢ fits the build, and dragging the ground pans. The view is saved with the build.
- **A castle environment.** 70+ new decorations from Kenney's Fantasy Town, Nature and Graveyard kits (CC0): cottages, huts, stables, barns, taverns, stone halls, chapels, manors and a windmill; market stalls, carts, lanterns, lamp posts, benches, fountains, a pool, a water wheel, decks, paths, signposts, campfire, tent, log pile, crops; hedges, wooden fences and rail fences that turn corners by themselves; oaks, pines, firs, poplars, autumn trees, bushes, flower beds in four colours, mushrooms, boulders and crags; obelisks, columns, a giant stone head, a stone ring, pedestals, and stone knight and king statues; nine animals (cow, horse, pig, goat, chicken, dog, rabbit, duck, owl). Garden, Farm, Village and Monument packs. The shop sells everything from level 1; coins are the only gate. Reward offers still start with towers and gates.
- **Rating** counts the first four copies of a piece in full and later copies at a quarter, so a castle scores for variety, not spam.
- Build codes are v5 (unlocked pieces, rewards taken, placed pieces with positions); v1–v4 codes still load. Saved builds migrate in place.

## v4.9.8 (2026-09-15)
- **A modest keep that grows.** Reward 1 offers three small keeps (Keep, Round keep, Watch keep: two sprites high). The keep gains a storey at 4, 8 and 13 buildings, ending as a five-storey royal keep with coloured bands and a high roof, and its score rises with each stage. The end-of-reward card says when it grew.
- **Towers and gates first.** Rewards 2–5 offer only tier-1 towers and gate pieces (Round tower, Square tower, Gate tower, Portcullis gate, Open gate). Walls, wall stairs, corner turrets and the Gatehouse tower arrive at tier 2, grand and royal towers later. The forced wall in every reward offer is gone; walls stay in the shop from level 1 and the curtain wall still rises at the 8th building.
- **Every piece is movable at any time.** No more Arrange mode: in the gallery, in the shop and while placing a new piece, any piece drags to a new spot that touches another piece. Footprints show only under the piece being moved. The gallery badge updates as pieces move.
- `tools/make-castle-kit.py` carries the new module list and the theme's `growAt` stages.

## v4.9.7 (2026-09-15)
- **The shop is open from night 1.** The Shop button shows on every end-of-night card, win or lose, and in the gallery, even before the first reward. A student with no build yet is asked Town or Castle first (the same permanent choice the first reward makes), then the shop opens. Lot 1 stays reserved for the core building, so walls or towers bought before level 5 never take the keep's place and the first reward still offers keeps.
- **Nights are now levels.** Every player-facing "night" reads "level" (Level 12 / 100, Level cleared, Next level, Retry this level, Continue Level 7, perfect level, 100 levels) on the title, skill, HUD, end-of-level, reward, shop and gallery screens and in the teacher monitor. Save keys and code identifiers are unchanged, so existing progress carries over.

## v4.9.6 (2026-09-15)
- **The state gateway is always the first screen.** `index.html` now ships with the New Jersey / Virginia screen visible and the title screen hidden, `game.js` shows the gateway before it runs anything else, and returning to the page from the browser's back-forward cache shows it again. Every stylesheet and script URL carries `?v=4.9.6`, so a Chromebook that cached an older build fetches the new files instead of showing last week's title screen.
- **Build codes keep the arrangement.** A castle built in v4.9.5 never recorded its kit version, so exporting it and pasting the code back (or reloading after choosing the theme) ran the old-castle migration and re-placed every piece. Fresh saves and the theme pick now record the kit, and the migration only moves pieces when the castle really holds pre-4.9.5 pieces or styles.
- **Night length band.** When the pool has enough passages between 60% and 160% of the night's target length, only those are drawn, so a late night never serves a 250-word text; thin pools fall back to the whole pool.

## v4.9.5 (2026-09-15)
- **A real castle.** The castle theme is rebuilt on Kenney's Castle Kit (CC0): 1-cell isometric tiles that were designed to snap together. Walls are auto-tiled — one "Wall" piece turns into a straight run, a corner, a gate or wall-stairs depending on its neighbours — towers are stacks of base / middle / top / roof sprites, and flags and banners fly from tower tops. Four house colours (Royal Blue, Crimson, Forest, Gold) recolour the roofs, flags and bands. At the 8th building a curtain wall with a gate goes up one cell out from everything built, as real movable wall pieces. Reward 1 offers a Keep, a Round keep or a Watch keep. The shop sells walls (15 coins), gates, towers, wall stairs, corner turrets, flags, banners, knights, the king and siege engines, plus Wall / Gatehouse / Tower / Siege packs.
- **Castle rating.** Every piece scores points, an enclosed courtyard scores 12 per cell, and the total gives a rank: Camp → Fort → Stronghold → Castle → Fortress → Citadel → Royal Seat. It shows in the gallery badge and on every "built" card, for classroom competition.
- Old castle saves migrate: keeps, halls and towers map to kit pieces, pieces are re-placed, and the old styles map to colours. `tools/make-castle-kit.py` regenerates the kit and modules from a Castle Kit checkout.

## v4.9.4 (2026-09-15)
- **Letter tiles never land on a trap or a power-up.** A shared `spotBlocked` check keeps tiles at least 76 px from wet floors, alarm mats, cameras, zap/mushroom/fire/tar pads, the auto door, colour doors, skulls and every live pickup; the same check keeps pads, skulls and pickups off the tiles and off each other.
- **Skulls no longer send a Hati back to the Wolf Pen.** A wolf that steps on a skull is poison-stunned where it stands for about 3 seconds (still +coins), then carries on. The touch radius is wider so the skull actually triggers, and a fresh set of skulls is guaranteed on the floor once the tiles are down.

## v4.9.3 (2026-09-15)
- **Placing pieces, after the recording.** The estate is drawn up to 2.6× larger while a piece is being placed or arranged, so pieces are big enough to grab on a Chromebook. A piece can only be dropped where it touches another piece; anywhere else (the sky, the far field) it bounces back with a note. Footprints were tightened so joined sprites sit flush against each other, and the new piece can still be dragged on the "built" card after Keep it here.
- The length picker is sharper: night 1 now draws 50–90 word texts and night 90 draws 450–520 word texts in testing.

## v4.9.2 (2026-09-15)
- **Pieces join.** The estate is now a snap-to-grid tile map: every piece has a footprint (`cells` in pieces.json), a new piece is auto-placed touching the building, and the student can drag it (finger or mouse) to any free spot before tapping "Keep it here". "Arrange pieces" in the gallery lets them move any piece later; the fence or wall ring re-wraps the estate by itself. Build code v4 carries positions; older codes load and get auto-placed.
- **Stamina: passages grow with the nights.** Night 1 aims for about 60 words (a few sentences); the target rises by 10 words every 2 nights to about 550 by night 99 (`STAMINA` in `js/content.js`). The picker weights every candidate by how close its length is to tonight's target, on top of the adaptive level. New packs at every length feed it: tiny (50–90 words), short (100–150), long (380–520) and epic (540–650) for each grade (`js/content18.js`–`content25.js`); the guide's tier table is in `tools/CONTENT-GUIDE.md`. The reading pop-up shows the word count.

## v4.9.1 (2026-09-15)
- **A wrong letter costs a life.** Grabbing a wrong tile (or carrying one to EXIT) now takes a strike, the same as a catch; a 1UP spare life is spent first. The on-screen tag says "WRONG LETTER · 2 left", and the run-over card says whether the last life went to a catch or a wrong letter.

## v4.9 (2026-09-15)
- **State gateway.** The first screen asks New Jersey or Virginia (saved on the Chromebook; "change" button on the title screen). Virginia keeps the Grade 9 / 10 / 11 cards. New Jersey shows one Grade 5 card with Literature, Informational, Vocabulary, Paired texts and All.
- **Grade 5 NJSLA-ELA pool.** 48 original packs (288 questions) written to the 2023 NJSLS-ELA codes (RL.CI.5.2, RI.AA.5.7, L.VL.5.2 …). Every pack carries Evidence-Based Selected Response pairs: a Part A question is always followed by its Part B ("Which sentence best supports…"), and the HUD and reading pop-up label them.
- **Question pool ×5.** 72 new Virginia packs. Pools per selection: Grade 9 209 items, Grade 10 414, Grade 11 621 (was 65 / 61 / 63). Grade 10 now really mixes Grade 9 and 10 packs and Grade 11 mixes all three, as the title cards always said. A night never repeats a passage, and when a pool is used up the last 20 items stay out so nothing comes straight back.
- **Adaptive texts and questions.** Every pack has a reading level 1–3 (tagged, or estimated from sentence length and long words). The game keeps a level per grade (`afterHours.v1.adapt.<family>`): banking an answer with no wrong tile grabbed nudges it up, grabbing a wrong tile nudges it down, and the next question is drawn near that level. On All-skills nights the picker also leans toward the strands the student misses most. The HUD shows "Level 1/2/3"; the teacher ping carries level, coins and wrong grabs.
- **Coins.** Every correct answer banked pays 10 coins; a perfect night (all questions, no wrong letter grabbed) pays 25 more; fruit and the other bonus pickups pay 3–12 coins instead of points. The HUD "Bonus" pip is now "Coins" (with tonight's gain in brackets). Amounts live in `assets/build/pieces.json` → `economy`.
- **Modular Town & Castle.** The reward builder no longer scatters props: reward 1 is a livable core (cottage / stone cottage / two-storey house, or keep / stone lodge / great hall), and every later reward offers three buildings that attach to the next lot of the estate (wings, bakery, chapel, mills, towers, gatehouses, halls…). Every piece is chosen in one of three **styles** per theme — Town: Red Tile, Slate, Thatch; Castle: Grey Stone, Sandstone, Whitestone — and the style step says which style matches the student's main one. At the 8th building (night 40) a fence (town) or wall ring with gate (castle) goes up around the estate by itself and widens as the estate grows. Style sprites are generated by `tools/make-styles.py` into `assets/build/styles/`.
- **Shop.** After any night from night 1 (Shop button on the end-of-night card, and in the gallery) coins buy buildings for the next lot, decorations for the yard, or packs (Yard pack, Builder pack, Grand pack) at a discount. Purchases go on the same estate as the reward pieces.
- **Save / build code v3** carries coins, shop pieces and decorations; v1 and v2 codes still load (old scattered props become default modular pieces).
- Phaser 3.80.1 and PeerJS 1.5.4 are now shipped in `js/vendor/` instead of loaded from unpkg, so the game works without internet.

## v4 (2026-09-10)
- **Freeze fixed.** Retry / Next night destroyed the scene's display objects but left stale references (dark-zone overlay, status graphics) on the scene instance; the first frame outside a safe booth threw inside `update()` and stopped Phaser's loop. `init()` now drops destroyed refs before rebuilding, and `update()` is wrapped so a one-off error logs instead of freezing the run.
- **Hati movement rebuilt** on a corridor "rail" navigator: shortest-path over the junction graph, centreline following, smooth cornering, jam detection for dropped shutters/doors, and a direct-pursuit mode for close chases. The old whisker/peel steering stack is retired (kept only as a fallback for mazes without nodes). Also fixed the hunt-target flapping that made calm wolves shiver.
- **Maze variety:** ten grid families, open courtyards (Sol cuts across, Hati circle), roaming dark zones that grow with the night, asymmetric layouts from night 20.
- **Night themes:** every ten nights the wing changes (floor tile, wash, wall paint, courtyard tile, vignette) and the HUD shows the wing name.
- Diagnostic overlays (crash box, stall badge) removed.

## v4.8 (2026-09-13)
- **Background music.** Nine tracks from EpsilonGamesOfficial's Game Background Music Pack (MP3, `assets/music/`, about 19 MB): two suspense piano pieces, a boss track, a gentle piano piece, four lo-fi hip hop "Chill Vibe" tracks and a jazz piano track. Students pick their track on the skill screen ("Background music" chips: tap one to hear it; the choice is saved on that Chromebook). "Surprise me" alternates the two suspense tracks (Gloomy Piano, Electricity) by wing; "No music" silences the night. While any Hati is chasing, the music crossfades to Boss Fight Piano and back. The reading pop-up ducks the music to a quarter. The title screen plays Chill Vibe 1 and the builder plays Jazz Piano. A ♪ button on the title screen and in the HUD mutes/unmutes, and a volume slider (skill screen and HUD, kept in sync) sets the level; both are saved on that Chromebook. Music starts after the first tap or key, per Chrome's autoplay rule. Credits for the packs are in CREDITS.md.
- **EXIT and teleports move every night.** The EXIT spur now hangs off a different column of the south edge each night (columns 3 to nx-2), and the two wrap tunnels use a fresh pair of rows (one in the top half, one in the bottom half, never beside the START spine). Both are drawn from their own seed, so the maze carve for a given night is unchanged.
- **Town & Castle reward builder.** After every 5th night won (5, 10, … 100 = 20 rewards) a pop-up covers the game with three pieces to choose from. The first reward asks the student to choose a Town or a Castle (permanent). The chosen piece is placed by tapping a glowing spot in the student's own scene; pieces get grander with each band of five rewards (humble props → cottages → houses, mills and towers → manors, gatehouses and citadels). "My Town" / "My Castle" on the title screen shows the build any time. The build saves in this browser profile (`afterHours.v1.build`) and has a **build code** (Copy / Load in the gallery) so a student can carry it to another Chromebook or restore it after a wipe. Pieces are 52 sprites pre-rendered from the Modular Village Collection (29) and the Castles and Forts pack (23); see CREDITS.md.

## v4.7 (2026-09-12)
- **No more phantom corners.** A headless sweep pushed Sol through every open cell-to-cell hop in the maze while pressing into each side wall (960 hops). She froze on 14 spots that have no corner in the drawn wall: a horizontal wall whose end sat flush with the face of the vertical wall she was sliding along. Arcade physics separates Y before X, so that exposed end corner cancelled her vertical motion every frame. Wall runs that end against a crossing wall now stop at that wall's centreline (their end corners are buried); free tips and the vertical side of an L still fill the junction square. The same sweep after the change: 0 phantom stops (the only stops left were the AUTO GREEN door in its closed phase). Extra straight-line checks along the booth shells, up and down the EXIT spur, out of the EXIT door and through both tunnel mouths: no stops.
- **Step-edges around the booths and the spur removed** (found by a collider audit): the START booth's top and bottom walls now sit on the maze wall lines instead of 36px slabs that stuck 21px into the corridors above and below; the EXIT spur is exactly one cell wide so the exit cell's side walls end inside the spur walls (they overhung the spur by 10px); the spur walls' top face is flush with the floor line (an 8px pit at the mouth is gone); the EXIT door stubs meet the spur walls flush; the tunnel mouths are exactly one corridor tall (a 4px lip on the frame is gone).
- **Corner assist.** Pressing a single direction that is blocked just ahead, with an opening within about 30 px to one side (an early turn press), slides Sol toward the opening instead of pinning her on the wall. The window is deliberately small so she never picks a new corridor on her own.
- **One wall.** All maze, frame and pen walls are painted once as a single merged shape (canvas union): one fill, one outline hugging the outside, a top-left light rim, a bottom-right shade and one soft drop shadow. Corners and T-joins have no seams or end caps, and the junction dots are gone. Booth shells keep their own art.

## v4.6 (2026-09-12)
- **Camera alarm loops.** Lock-on now starts a looping alarm: one dissonant beep (Eb + A tritone with a minor-second rub, triangle/sine only, about 0.3 s), a 1 s pause, beep, pause… The alarm stays live while any camera has Sol and expires 6.5 s after she breaks the lock; the CAMERA ALERT flag stays up for the same window. A catch or the end of the night stops it at once.

## v4.5 (2026-09-12)
- **Camera alarm retuned.** The v4.3 bell was too soft to read as an alarm. The camera lock-on is now a two-tone alert (E5/A5 alternating, three pulses, about 0.7 s) on triangle waves with a low thump underneath — as loud as the old alarm, still no square/sawtooth buzz, still once per lock-on.

## v4.4 (2026-09-12)
- **A catch drops the letter.** Getting caught while carrying a letter (or two) now sends the letter(s) back to where they were found, and the HUD says so. Before, the letter rode along to the respawn booth — and because Sol respawns at the *nearest* booth, a catch near EXIT put a correct letter straight into the extract zone for a free bank.

## v4.3 (2026-09-12)
- **Camera sound.** Being caught in a security camera beam now plays one soft two-note bell (sine tones only) instead of the alarm klaxon. The chase-start beeps that re-fired every frame while any Hati was walking home as eyes (the machine-gun buzz) are gone: the camera lock-on is silent after the bell. While the beam is on Sol the camera feed keeps the wolves' sight fresh, so they no longer drop and re-enter chase every few seconds.

## v4.2 (2026-09-11)
- **New maze generator** (`buildMaze`, "CELL MAZE"): thin 16px walls on a 112px cell grid instead of thick blocks. Growing-tree carve for long twisting runs, braided so no cell is a dead end, a modest share of extra loops for escapes, 2x2 courtyards, an open 3x2 Wolf Pen with hazard stripes, a full east-west spine, START booth at the west end, EXIT on the south-east spur. Junction posts cap the wall runs; the floor grout lines up with the wall grid.
- **Wrap tunnels:** on two rows Sol can walk off the west edge and come out on the east (and back). Wolves have no rail there, so a tunnel always breaks a chase.
- **Reading pop-up:** when a night opens and right after each banked answer, the game pauses and the passage + question + choices fill the screen. Tap/click/Space/Enter to dismiss; the side panel keeps the text during play.
- **Select TWO questions:** Sol can carry both letters at once (or bank them one at a time). Extras ride along beside her; the HUD shows "Carrying C + D".
- **Look:** wolves and Sol cast shadows; a chasing wolf shows a breathing red ring; wolves are a touch larger for the wider cells.

## v4.1 (2026-09-10)
- **"Night 2 has no path to EXIT" fixed.** `create()` spawned the swing gates and section doors inside `seedHazards()` and then reset the tracking arrays, leaving orphaned colliders that could never be bumped open; on some layouts a gate sat on the only route. Gates now stay tracked, a bump always swings them, an open gate parks flush against the wall (thinner, clear lane), it only closes when pushed from the side, and a start-of-night flood fill removes any door that would still seal the EXIT.
- **Hati speed profile:** a little faster than Sol's walk on the straights (patrol 1.06x–1.20x, chase 1.16x–1.24x, hard-capped in the navigator), braking into corners and pulling away after them.
- **Camera beams** have a saturated fill and a pale hard edge; lock-on cones are stronger red.
- **Booth lettering** (START · SAFE / EXIT · SAFE) is black.
- **New wall and floor art:** clean rounded wall blocks with a top-lit bevel and soft shadow, smooth procedural linoleum per wing, and big low-contrast courtyard tiles. The hatched tile pack and gold edge sprites are gone.
