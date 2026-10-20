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

## Things to fill in before publishing
Search the HTML for `TODO` to find each spot.
- **Resume/CV** — set the `href` on the "Download Resume" button (hero) to your PDF (e.g. drop `resume.pdf` in the repo and use `href="resume.pdf"`), then delete its `data-placeholder` attribute.
- **LinkedIn** — the contact section has a "Coming soon" card; swap it for the commented-out link once you have a URL (and optionally add it to the hero socials).
- **Project repos** — each project shows "Repo — coming soon"; replace with a `Code ↗` link once the repo is public.
- **Optional: CGPA** — there's a commented-out `CGPA 8.03` row in the About facts list. Uncomment it only if you're comfortable making it public.
