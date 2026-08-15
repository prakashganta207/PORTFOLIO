# Portfolio Site

Static site — no build step required.

## Files
- `index.html` — all content/markup
- `style.css` — all styling
- `script.js` — mobile nav toggle + scroll-reveal animations

## Run locally
Just open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

## Deploy on GitHub Pages
1. Create a repo (e.g. `your-username.github.io` for a root site, or any repo name for a project site).
2. Push these three files (plus this README) to the repo.
3. In the repo: Settings → Pages → Source → deploy from the `main` branch, root folder.
4. Your site will be live at `https://your-username.github.io/` (or `/repo-name/`).

## Things to personalize before publishing
- Replace `YOUR-USERNAME` in the GitHub/LinkedIn links (hero section + contact section) with your real profile URLs.
- Add real project links (the "Code ↗" / "Details ↗" links currently point to `#`).
- Fill in the "Add your education / earlier roles" timeline placeholder with your actual school/college + dates, and any earlier jobs or internships.
- Optional: swap the terminal `whoami.sh` copy, tagline, or skills list to match how you'd describe yourself.
- Optional: add a headshot/avatar — currently the design is intentionally photo-free (terminal graphic instead).
