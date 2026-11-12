# Adult Site Blocker

A Chrome extension that blocks adult websites from a list and also checks
other pages for explicit content. When a site is blocked, it plays a
muted video full screen with a "BLOCKED" label.

## Features

- **Site list:** Blocks the domains listed in `rules.json` before they load.
- **Content check:** `content.js` scans pages not on the list and blocks
  those with several explicit keywords.
- **Blocked page:** `blocked.html` plays `video.mp4` full screen, muted,
  on loop, with the controls hidden.

## Files

| File | Purpose |
|------|---------|
| `manifest.json` | Extension settings and permissions |
| `rules.json` | List of blocked domains |
| `content.js` | Keyword check on each page |
| `background.js` | Required empty service worker |
| `blocked.html` | Page shown when a site is blocked |
| `video.mp4` | Video played on the blocked page |
| `screenshot.png` | Screenshot used in this README (optional) |

## Installing

1. Download or clone this repository and keep the files in one folder.
2. Add your own `video.mp4` to the folder. The repository does not include a video.
3. Open `chrome://extensions` in Chrome.
4. Turn on **Developer mode** (top right).
5. Click **Load unpacked** and select the folder.
6. Make sure the extension is switched on.

## Adding sites

Edit `rules.json`. Copy one rule block, change its `"id"` to a number
not already used, and change `"urlFilter"` to the domain. Then go to
`chrome://extensions` and click the reload icon on the extension.

## Notes

- The content check is a rough keyword match. It can miss image-heavy
  pages and can occasionally block non-adult pages that use the same words.
- This tool is meant to support personal goals. For stronger protection,
  consider a browser password or an accountability app.
