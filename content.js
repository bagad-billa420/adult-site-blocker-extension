const KEYWORDS = [
  "porn", "xxx", "nude", "nudes", "hentai", "onlyfans",
  "xvideos", "xhamster", "sex video", "adult video", "erotic"
];

function looksAdult() {
  const meta = document.querySelector('meta[name="description"]');
  const text = (
    document.title + " " +
    (meta ? meta.content : "") + " " +
    (document.body ? document.body.innerText.slice(0, 20000) : "")
  ).toLowerCase();

  let hits = 0;
  for (const word of KEYWORDS) {
    if (text.includes(word)) hits++;
  }
  return hits >= 3;
}

function showBlockPage() {
  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;background:#fff;z-index:2147483647;" +
    "display:flex;flex-direction:column;align-items:center;" +
    "justify-content:center;font-family:sans-serif;text-align:center;padding:20px;";
  overlay.innerHTML =
    "<h1>This page is blocked</h1>" +
    "<p>It appears to contain adult content.</p>" +
    "<p>Take a breath. What would you rather be doing right now?</p>";
  document.documentElement.style.overflow = "hidden";
  document.documentElement.appendChild(overlay);
}

if (looksAdult()) {
  showBlockPage();
}