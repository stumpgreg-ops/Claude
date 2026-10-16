// Prints an annotated-model page (docs/readings/*.html) to a letter-size PDF beside it, every highlight,
// note and arrow shown. For <name>-Annotated-Model.html it also prints the unannotated
//   <name>-Student-Copy.pdf     student copy: same sheets and line breaks, no key, highlights or notes
// Usage: node tools/make-reading-pdfs.js docs/readings/Odyssey-Circe-Annotated-Model.html
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const src = path.resolve(process.argv[2]);
  const out = src.replace(/\.html$/, "");
  const student = /-Annotated-Model\.html$/.test(src) && src.replace(/-Annotated-Model\.html$/, "-Student-Copy.pdf");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
  await page.goto("file://" + src);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: out + ".pdf", format: "Letter", printBackground: true, preferCSSPageSize: true });

  if (!student) return browser.close();

  await page.addStyleTag({ content: `
    .sheet-wrap:has(.key) { display: none; }
    .note, svg.ink, .tap, .fs-btn { display: none !important; }
    .annotated mark, mark { background: none !important; }
    .annotated { cursor: auto; }` });
  // Without the notes the text needs less room: lay the sheets out again so the student type is as large as fits.
  await page.evaluate(() => window.dispatchEvent(new Event("resize")));
  await page.waitForTimeout(400);
  await page.pdf({ path: student, format: "Letter", printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
