# Lit and Film — building a movie's game

The Lit and Film game (`window.SOL_STATE === "LIT"`) gives **every movie its own arcade game**, styled like its
genre: a noir game looks and feels like film noir, a Western like a Western. `js/lit.js` lists the genres, the
movies and each movie's game (`mode` id, `game` name). A movie's card plays its game on **every level, 1–100**,
with that movie's questions; a genre's All plays the genre's games in turn.

## How a mode works (read the code)

- `js/modes.js`: the header comment, the `MODES` entries (the fields a mode defines: `name`, `kind`, `level`,
  `act`, `how`, `rules`, `keys`, `tip`, `hint1`, `hint2`, `clear`, `news` — one line per tier of ten levels),
  `SolModes.extend`, and `class ModeScene extends NightScene` (from about line 940): `setup_<id>`, `answers_<id>`
  (lay the answer letters out for a new question), `tick_<id>(dt, inp, ms)`, `resize_<id>`, `mopup_<id>` /
  `clear_<id>` (optional "clear the field" after the last answer), and the scene helpers the modes call to pick a
  letter, lose a life, score, show text and so on. `SolModes.lib` has the shared helpers (`canvasTex`, `snd`,
  `clamp`, `rnd`, `shuffle`, ...).
- `js/mode-bow.js` (Bend the Bow): a complete mode in its own file, registered with `SolModes.extend(id, def,
  methods)`. Copy its structure: the header comment, a `<id>Params(n)` difficulty curve, art drawn once with
  `canvasTex` under an `md-<id>-` key, `setup_`, `answers_`, `tick_`, `resize_`. Also look at one more of
  `js/mode-ram.js`, `js/mode-raft.js`, `js/mode-row.js` for another control scheme.
- `tools/smoke-mode-bow.js`: the test pattern (a local server, Playwright with the preinstalled Chromium, driving
  the mode through the scene's own methods, screenshots to `tools/shots/`).

## The rules every game follows

- **The answer:** the question's letters (A–D) are things in the game world. The player picks one by playing:
  shooting it, reaching it, landing on it, timing it. **A wrong letter costs a life.** Select TWO questions need
  both right letters (`hint2`). The game's own hazards also cost a life. The reading pop-up, lives, coins, castle
  perks and end screens are ModeScene's own: don't rebuild them.
- **Genre style.** Draw everything procedurally (canvas, like the other modes), in the genre's look:
  - Film history: black-and-white, film grain, flicker, a vignette, sprocket holes, intertitle cards; Méliès's
    painted-theater look; Chaplin's circus; the 1920s picture palace.
  - Film language: a soundstage: lights, a camera crew, a viewfinder frame.
  - Bad vs. good: Plan 9's cheap cardboard sets on visible strings; Iron Man's sleek red-and-gold tech.
  - Noir: high-contrast black and white, venetian-blind shadows, rain, neon reflections, a hardboiled voice in
    the text.
  - Westerns: sepia, dust and sunset, wooden storefronts, wanted posters, clocks.
  - Sci-fi: starfields, cockpits, laser bolts.
  - Horror: teal-green murk, TV static, flicker, dread more than shock.
- **Evoke, don't copy.** No logos, no studio marks, no actors' likenesses, no exact copies of trademarked designs
  (a "starfighter" and a "walker", not an X-wing or an AT-AT drawn to the model). Movie titles may appear in the
  text. Keep it school-appropriate: peril and slapstick, no blood.
- **Difficulty:** one curve `params(n)` for levels 1–100, every level a little harder than the one before
  (test it), and a `news` line for each tier of ten levels naming what is new. Level 1 should be gentle: these
  are English students, not gamers.
- **Controls:** keyboard (arrows / WASD / Space), mouse, and the on-screen pad and action button (`act` names
  it), like the other modes. It must play well on a 1366×768 Chromebook and in the 500-pixel-tall Canvas frame
  (`resize_`).
- **Sound:** short effects with `snd`; music optional (`js/mode-row.js` synthesizes its own).

## Your files, and only yours

- Write `js/mode-<id>.js` (it exists as a one-line stub: replace it) and `tools/smoke-mode-<id>.js`.
- Do not edit any other file. If you find you need a change in a shared file (`js/modes.js`, `js/game.js`,
  `js/lit.js`, `index.html`, ...), don't make it: work around it in your file, and report what you needed.
- Don't run `tools/build-games.js` and don't commit.

## Your test, `tools/smoke-mode-<id>.js`

Model it on `tools/smoke-mode-bow.js`, but as the Lit and Film build: `addInitScript(() => { window.SOL_STATE =
"LIT"; })`, then click `#title-screen .card[data-family="LIT"]`, the genre card `#mode-packs
.card[data-genre="<GENRE>"]`, and the movie card `#skill-packs .card[data-gamemode="<id>"]`, then
`#btn-skill-start`, `#btn-char-confirm` if shown, `#tut-skip` if shown. Restart levels with
`SolScene.scene.restart({ family: "LIT", strand: "<EP>", night: n })`. Check at least: the mode plays on levels 1,
10 and 100; the right letter scores; a wrong letter costs a life; each hazard costs a life (and can be avoided);
Select TWO needs both; the keys, the mouse and the action button work; the difficulty climbs every level 2–100;
the reading pop-up names the game and its controls; no page errors. Take screenshots at levels 1, ~50 and 100 to
`tools/shots/<id>-*.png` and **look at them** (Read the PNG): it should look good and read clearly as its genre.
Iterate until it does. Other movies' content files (`js/content114.js`–`js/content120.js`) may still be being
written: if one is missing, ignore its 404 in your test.

Run `node tools/smoke-mode-<id>.js` until it prints ALL OK. Then report: what the game is and how it plays, the
difficulty curve in a few lines, the test's result, the screenshot paths, and anything you needed from a shared
file.

## The eighteen games (stay distinct from each other)

| genre | movie | id | game | the idea |
|---|---|---|---|---|
| HISTORY | Arrival of a Train (1895) | crank | Hand-Crank Camera | Crank a Lumière Cinematograph at a steady speed (too slow flickers, too fast blurs) and film the scene with the right letter as trains, carriages and crowds pass the platform at La Ciotat. |
| HISTORY | A Trip to the Moon (1902) | moonshot | Shoot the Moon | Méliès's painted theater: set the cannon's angle and power and fire the capsule into the crater with the right letter on the Moon's face; the Moon drifts, Selenites puff in and out in smoke. |
| HISTORY | The Circus (1928) | tightrope | The Tightrope | Chaplin's Tramp balances on the high wire to the intertitle card with the right letter while monkeys climb on and pester him; silent film, piano score. |
| HISTORY | The Jazz Singer (1927) | sync | Keep It in Sync | The projection booth: keep the Vitaphone disc in sync with the picture (a lip-sync meter) and cue the reel with the right letter; the needle skips, the audience boos. |
| LANGUAGE | Lights, Camera, Action | director | Call the Shot | A soundstage: frame the actor holding the right letter in the viewfinder (pan, tilt, zoom) and hold the shot to roll; keep the boom mic and the crew out of frame. |
| BADGOOD | Plan 9 from Outer Space | strings | Saucers on Strings | Flying saucers bob on visible strings over a cardboard graveyard; snip the string of the saucer with the right letter; wobbly gravestones, day flipping to night. |
| BADGOOD | Iron Man (2008) | suit | Suit Up | Fly a red-and-gold armored suit with thrust and hover; repulsor-blast the drone with the right letter; watch the heat meter, and ice forms if you climb too high. |
| NOIR | Detour (1945) | highway | Night Highway | Drive a desert highway at night: only the headlights show the road; pick up the hitchhiker with the right letter's sign; oncoming trucks, fog, rain, fate. |
| NOIR | Scarlet Street (1945) | gallery | The Gallery | A night gallery in venetian-blind light: stay in the shadows, slip past the sweeping light and the con man, and sign the painting with the right letter. |
| NOIR | Double Indemnity (1944) | lastcar | The Last Car | On the observation platform of a moving train: jump off at the trackside marker with the right letter, dodge the poles, hide from the conductor. |
| NOIR | Casablanca (1942) | roulette | Rick's Roulette | Rick's Café: drop the ball so it lands in the right letter's pocket of the spinning wheel while the police raid draws closer and the searchlight sweeps. |
| WESTERN | High Noon (1952) | noon | Showdown at Noon | The clock ticks toward noon; outlaws step into the street, each with a letter; wait for the bell, then draw and fire on the right one; never draw early. |
| WESTERN | True Grit (2010) | charge | Reins in His Teeth | Charge across the meadow on horseback, a revolver in each hand, at the rider with the right letter while dodging their fire. |
| WESTERN | 3:10 to Yuma (1957) | yuma | Make the 3:10 | Escort the prisoner from cover to cover across Contention to the platform with the right letter before the 3:10 leaves; the gang is on the rooftops. |
| SCIFI | A New Hope (1977) | trench | Trench Run | Fly down the trench, dodge turret fire and catwalks, and fire into the exhaust port with the right letter. |
| SCIFI | The Empire Strikes Back (1980) | towcable | Tow Cable | On the snow plain, harpoon the walker with the right letter and circle its legs to wrap the cable and trip it, dodging its fire. |
| SCIFI | Return of the Jedi (1983) | speeder | Forest Chase | A speeder bike at full speed through a forest of giant trees: weave between trunks and knock the scout with the right letter into a tree. |
| HORROR | The Ring (2002) | tape | Seven Days | A dark room and an old TV: turn the dial through the static to the channel with the right letter while the lights flicker and something crawls closer each day. |

The idea is a starting point: make it fun, fair and clear, and make the genre unmistakable.
