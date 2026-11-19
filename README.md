# Cosmic Scribe

An iPad handwriting practice app: a single-file web app with no build step. It retrains a child to write letters top-down (instead of one stroke from the bottom), then builds up to spacing, words, sentences, numbers and short stories. Space and sandbox theme.

Live app: https://jevandavid.github.io/graesyn/ ・ Kid guide: https://jevandavid.github.io/graesyn/help.html

## What it does
- **Top-start stroke training.** Every stroke starts at a green star at the top. A touch that starts low is refused and counted. Strokes must follow the numbered order and direction.
- **Textbook three lines** (Space, Orbit, Surface, plus a Black Hole zone for tails). Start heights are checked against the real lines.
- **Content:** letters a to z and A to Z, digits and number lines, themed words, sentences, 12 two-line stories and 6 three-line stories.
- **Super Words:** a rotating set of 8 iReady high-frequency words (Kindergarten to Grade 2, grade range set by the parent). A new set is drawn each Mission Control session, with no repeats until the whole list has been used. The child's name is asked on first open and used in the title, words, sentences and stories.
- **Four levels per item:** Trace, Star dots, Moon helper, Solo. A level unlocks only after a clean 3-star run on the one before it.
- **Trace accuracy.** Ink turns orange when it leaves the path. In levels 2 to 4 a strayed stroke is erased right away and must be redone. Level 1 checks when the pencil lifts. Strictness (Gentle / Standard / Strict) is a parent setting.
- **Spacing coaching:** a small gap inside words, one "moon" between words.
- **Watch / Peek / Redo.** Watch animates the stroke order (the whole word on the Words tab).
- **Mission Control (timed sessions):** 10, 15 or 20 minutes of active writing with a fuel gauge. Only clean 3-star runs earn fuel points (letter 1, word 3+, sentence 8, 2-line story 14, 3-line story 20, scaled by level). A first baseline session sets the target, and after that the target adapts (about 85% of recent median, +5% when hit). Hitting the target banks the points.
- **Bank and screen time:** bank points are spent on screen time (default 2 points = 1 minute) with a full-screen countdown.
- **Progress protection:** lifetime points ledger (fuel earned, banked, spent) that is never reset by updates, a second copy in IndexedDB, a weekly backup reminder, and Back up / Restore (a text code or file saved via the share sheet). Reset needs the parent check.
- **Log:** per-session history, by-type matrix, letter and digit heat map, CSV copy.
- **Parent settings** (behind a multiplication check, from the 📊 log): session length, points per minute, coach voice and speed, bank adjust, reset target, change name.
- **How to Play** guide for the child (❓ button in the app).
- Fun / Pro coach tone, daily goal, XP ranks. Works with Apple Pencil (palm rejection) or a finger.

## Files
| File | Purpose |
|---|---|
| `index.html` | The whole app (HTML, CSS, JS) |
| `help.html` | Kid-friendly How to Play guide, opened inside the app by ❓ |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Install as a Home Screen app |
| `sw.js` | Service worker: network-first (latest version when online, cached copy offline) |

## Install on iPad
Open the live link in Safari, tap Share, then **Add to Home Screen**. Progress is saved on the device (localStorage), separately for the Safari tab and the installed app.

## Deploying changes
Push to `main`; GitHub Pages republishes in a minute or two. Bump the cache name (`V`) in `sw.js` when you change the app files, and add any new files to its `FILES` list.

## Notes
- All progress and settings live in the browser, with no accounts or servers. Updates never touch saved progress; deleting the Home Screen icon does, so keep a backup code.
- Voice uses the iPad's built-in speech; which voices appear depends on what Safari exposes.
- Original art and sounds only; not affiliated with Minecraft.
