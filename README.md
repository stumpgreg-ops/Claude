# SOL Labyrinth
Solo Chromebook maze-chase extract. 100 nights. VA 2024 Grade 9 reading SOL.

**Theme (Norse × SOL):** You are **Sol**, the Norse sun goddess, collecting letter slips in a Pac-like school labyrinth. Ravenous wolves — **Hati** — patrol the corridors. Grab the **correct** letter to summon Sol's **CHARIOT** and smash Hati by contact (they return from the Wolf Pen). Wrong letter alarms. Fruit = bonus points only. Ice = brief escape freeze. **Only one power/effect active at a time.**

Play: `index.html`. Teacher monitor: `admin.html` (PIN lock; FERPA nicknames only).

Progress saves in this browser profile (`afterHours.v1.night`). Itch login does not store progress.

Vendored packs: `js/content.js` (not a live Heist path) plus `js/content2.js` (v4: poetry, drama, functional text, argument, vocabulary-in-context and paired texts for Grades 9–11, incl. Select TWO items).

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
