# Project Overview

Personal portfolio website for Kumar Aditya Mohta.

## Tech Stack

- Static HTML with Tailwind CSS (CDN)
- Custom CSS in `docs/styles.css`
- Hosted on GitHub Pages from `docs/` folder

## Design

The site follows a **GitHub dark theme** style with these colors:
- Background: `#0d1117`
- Secondary background: `#161b22`
- Border: `#30363d`
- Primary text: `#c9d1d9`
- Headings: `#f0f6fc`
- Muted text: `#8b949e`
- Links: `#58a6ff`
- PR status colors: green (`#238636`) for open, red (`#da3633`) for closed, purple (`#a371f7`) for merged

## Structure

- `docs/index.html` - Main page
- `docs/styles.css` - Custom styles
- `docs/contributions.json` - Open source PR data (edit this to add/update PRs)
- `docs/images/` - Logo and profile images

## Adding Open Source Contributions

Edit `docs/contributions.json` to add new PRs:

```json
{
  "repo": "owner/repo",
  "title": "PR title",
  "url": "https://github.com/...",
  "date": "Mon YYYY",
  "year": 2025,
  "status": "open" | "merged" | "closed"
}
```
