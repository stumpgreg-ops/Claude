# “The Lotus Eaters”: teacher's annotated copy (9.RL.1.A)

Grade 9 · Unit 2 · Lesson 3 (Challenge Accepted!) · *The Odyssey*, textbook p. 721.

| File | What it is |
|---|---|
| `LotusEaters-TeacherCopy-9RL1A.pdf` | Print copy. Page 1 is the annotated passage. Pages 2–4 are the teacher key: theme statements, a development chart (beginning, middle, end), a model response, answers to the slide-note discussion questions, sample Character Tracker rows, the 3-2-1 exit ticket key, look-fors, and the margin notes written out as text. |
| `LotusEaters-Canvas-Embed.html` | Paste into a Canvas page's HTML editor. |
| `LotusEaters-Annotated.png` | The annotated page as a picture, for the Canvas page. |
| `LotusEaters-TeacherCopy-print.html`, `annotated-page.svg` | The same content as a web page and as a scalable picture. |
| `build.py` | Rebuilds everything above. |

**Annotation codes.** From the lesson's directions: pink highlight = Odysseus acting as a hero/leader, circle = major event, star = clarifying/explaining. Added for 9.RL.1.A: blue highlight = setting detail, purple underline = theme clue.

## Putting it in Canvas

Canvas removes inline `<svg>`, `<style>` and `data:` images from pages, so the annotated page goes in as a picture.

1. **Files** → upload `LotusEaters-Annotated.png`. Click the file and copy its link, e.g. `https://yourschool.instructure.com/courses/12345/files/67890`.
2. Open `LotusEaters-Canvas-Embed.html` in a text editor (Notepad, TextEdit in plain-text mode). Replace **both** copies of `REPLACE-WITH-CANVAS-IMAGE-LINK` with that link plus `/preview`.
   Or rebuild with the link: `python3 build.py --image-url "https://…/files/67890/preview"`.
3. **Pages** → **+ Page** → click the **</>** (HTML editor) button → paste the whole file → **Save**.

Below the picture are two fold-out sections: the margin notes as text (for screen readers) and the teacher key. Leave the page unpublished if students shouldn't see the key.

## Rebuilding

Needs Python 3 with `fonttools` and `Pillow`, Chromium (or Chrome), and `pdftoppm` (poppler-utils).
`python3 build.py [--image-url URL] [path-to-chrome]`. The notes, marks and passage are plain lists at the top of `build.py`.

The handwriting is drawn from the **Caveat** font's letter outlines, so it looks handwritten without Caveat installed. The passage is set in Georgia; `Gelasio` (same letter widths as Georgia) is used to measure it. Both fonts are under the SIL Open Font License (`fonts/OFL-*.txt`).
