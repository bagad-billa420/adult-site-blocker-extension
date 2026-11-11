# Adult Site Blocker

A Chrome extension that blocks adult websites from a list and also checks
other pages for explicit content. When a site is blocked, it shows an
animated pixel hand and a short message encouraging a pause.

## Features

- **Site list:** Blocks the domains listed in `rules.json` before they load.
- **Content check:** `content.js` scans pages not on the list and blocks
  those with several explicit keywords.
- **Blocked page:** `blocked.html` and `blocked.js` show an animated pixel
  art message instead of the site.

## Files

| File | Purpose |
|------|---------|
| `manifest.json` | Extension settings and permissions |
| `rules.json` | List of blocked domains |
| `content.js` | Keyword check on each page |
| `background.js` | Required empty service worker |
| `blocked.html` | Page shown when a site is blocked |
| `blocked.js` | Animation for the blocked page |

## Installing

1. Download or clone this repository and keep the files in one folder.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the folder.
5. Make sure the extension is switched on.

## Adding sites

Edit `rules.json`. Copy one rule block, change its `"id"` to a number
not already used, and change `"urlFilter"` to the domain. Then go to
`chrome://extensions` and click the reload icon on the extension.

## Notes

- The content check is a rough keyword match. It can miss image-heavy
  pages and can occasionally block non-adult pages that use the same words.
- This tool is meant to support personal goals. For stronger protection,
  consider a browser password or an accountability app.
