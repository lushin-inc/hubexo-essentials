# Hubexo Essentials — Sandler Knowledge Portal

A calm, Apple-grade knowledge hub for reps going through the Lushin / Sandler
"Essentials" training with Hubexo. It distills each training session into
browsable **concept cards**, a **flashcard study mode**, and a **searchable
glossary**. Built as a static Vite + React + TypeScript site that deploys to
GitHub Pages.

**Live URL (once deployed):** https://lushin-inc.github.io/hubexo-essentials/

---

## Quick start (local)

```bash
npm install
npm run dev      # http://localhost:5173/hubexo-essentials/
```

Other scripts:

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc --noEmit only
```

---

## Adding a new session (≈ weekly)

Everything is data-driven, so a new training is basically a copy-paste:

1. Open [`src/data/sessions.ts`](src/data/sessions.ts) and append a new session
   object (`id: 's3'`, `number: '03'`, `accent: false`, its `topics`, and a
   `concepts` array). Concept `diagram`, `asset`, and `fullWidth` are optional.
2. Add `'s3'` to the `View` union in [`src/types.ts`](src/types.ts).
3. In [`src/App.tsx`](src/App.tsx), render it next to the others:
   `{view === 's3' && <SessionView session={s3} go={go} />}` (and grab
   `s3` with `sessions.find(...)` like `s1`/`s2`).
4. To add its flashcards, append entries to
   [`src/data/flashcards.ts`](src/data/flashcards.ts) with `s: 3`, and add the
   deck filter button in `Flashcards.tsx` if you want a "Session 3" segment.
5. New glossary terms go in [`src/data/glossary.ts`](src/data/glossary.ts).

The home page, banner, concept grid, and "N concepts →" count all generate
themselves from that data.

## Images

There is **no photography** by default. The fallbacks are intentional:

- **Hero** → the Success Triangle diagram.
- **Session thumbnail** → a navy tile with the session number.
- **Session banner** → a navy panel with the number + eyebrow + title.

To drop in a real photo later **without any refactor**, put the file in
`public/img/` and set the matching field:

- Hero: `heroImageSrc` in [`src/data/images.ts`](src/data/images.ts)
- Per session: `thumbnailSrc` / `bannerSrc` in
  [`src/data/sessions.ts`](src/data/sessions.ts)

Paths are relative to `/public` (e.g. `'img/s1-banner.jpg'`) or full URLs. When
a field is empty the built-in fallback renders.

## Excel templates

The Cookbook and Cash Machine downloads are served from
`public/templates/` (`Cookbook.xlsx` and `Cash Machine.xlsx`) and are wired to
both the Tool concept cards and their flashcards. Replace those two files in
place to update the templates — the filenames are what the links point at.

---

## Deploy to GitHub Pages

The repo is already created: **https://github.com/lushin-inc/hubexo-essentials**

### 1. Push this project to it

From inside this folder:

```bash
git init
git add .
git commit -m "Hubexo Essentials portal"
git branch -M main
git remote add origin https://github.com/lushin-inc/hubexo-essentials.git
git push -u origin main
```

(If the repo already has commits, `git pull --rebase origin main` first.)

### 2. Turn on Pages (one time)

1. Go to the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. That's it — no branch to pick.

### 3. It deploys itself

The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
builds and publishes on every push to `main`. Watch progress under the repo's
**Actions** tab. When it finishes, the site is live at:

**https://lushin-inc.github.io/hubexo-essentials/**

Every later change is just `git commit` + `git push` — the site rebuilds
automatically.

### Alternative: manual deploy from your machine

If you'd rather not use Actions, the `gh-pages` package is already wired up:

```bash
npm run deploy    # builds and pushes dist/ to the gh-pages branch
```

Then set **Settings → Pages → Source** to **Deploy from a branch**, branch
`gh-pages` / root. (Use one method or the other, not both.)

> **Note on `base`:** [`vite.config.ts`](vite.config.ts) sets
> `base: '/hubexo-essentials/'` so assets resolve under the repo path on Pages.
> If you ever rename the repo, update that value to match.

---

## Project structure

```
public/
  templates/            Cookbook.xlsx, Cash Machine.xlsx (download assets)
  .nojekyll             tells Pages not to run Jekyll
src/
  types.ts              shared types + the View union
  data/
    sessions.ts         ← session + concept content
    flashcards.ts       flashcard deck
    glossary.ts         glossary terms
    categories.ts       category → pill colour map
    images.ts           optional hero image source
  components/
    Nav, Home, SessionCard, SessionView, ConceptCard,
    Flashcards, Glossary, SessionBanner,
    SessionThumb, HeroArt, BackLink, DownloadLink, Icons
    diagrams/ConceptDiagram.tsx   the inline concept visuals
  App.tsx               view switching
  styles.css            design tokens, animations, hover + reduced-motion
```

Design tokens (colours, radii, shadows, motion) are recreated exactly from the
original design spec. Motion respects `prefers-reduced-motion`.
