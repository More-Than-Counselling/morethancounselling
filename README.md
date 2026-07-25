# More Than Counselling — homepage

A single-page, fully static homepage for Fionna's online somatic counselling
practice. Plain HTML + CSS (all styles inline in `index.html`), so it deploys
anywhere with no build step — Netlify, GitHub Pages, Cloudflare Pages, etc.

Design is built from your mockup: watercolour paper texture, wavy section
dividers echoing the logo bands, the terracotta / blush / dusty-blue / sage /
eucalyptus palette sampled from the MTC logo, Cormorant Garamond + Karla type,
arched imagery, and a soft watercolour hills horizon above the footer.

## Files

| File | What it is |
|------|-----------|
| `index.html` | The whole page (structure + all styles + the Splose embeds) |
| `images/hero.jpg` | Watercolour art in the hero arch — **swap for a real photo anytime** |
| `images/about.jpg` | Watercolour art in the About blob — swap for a real photo |
| `images/waves.svg` | The muted hills horizon above the footer |
| `favicon.svg` | Browser tab icon (logo mark) |

## Preview locally
Open `index.html` in a browser, or run a tiny server so the Splose embeds behave
exactly as they will live:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What's already wired in
- **Book a Session** — your Splose online-booking widget is embedded in the
  “When you're ready” section (with the official auto-resize script). Every
  “Book a Session” button jumps to it.
- **Enquiries** — your Splose enquiry form is embedded in the “Rather send a
  message first?” section.
- Both are set to **transparent backgrounds** so the paper shows through. Note:
  if Splose renders its *own* solid background inside a form, set that form's
  background to transparent (or cream `#FBF8F2`) in your **Splose theme
  settings** — that part is controlled on Splose's side, not here.

## Things to personalise (all clearly marked in `index.html`)
- **Photos** — the hero holds an original watercolour landscape (warm sky over
  eucalyptus hills) and the About frame holds a soft watercolour wash, so nothing
  looks like a placeholder. To use real Elevae photography, just replace
  `images/hero.jpg` and `images/about.jpg` (same filenames, same crop shapes).
- **Waves** — `images/waves.svg` is my recreation of the watercolour hills you
  shared (I couldn't extract the original file from the project). To use your
  exact artwork instead, drop it in as `images/waves.png` and change the
  `.waves` background URL to point at it. It's set muted and fading to
  transparent; adjust `opacity` / the `mask-image` on `.waves` to taste.
- **Logo** — the header/footer logo is an SVG stand-in (the `#mtc-mark` group
  near the top of `index.html`) echoing your real logo. Swap in your actual logo
  file when ready, and update `favicon.svg` to match.
- **Email** — replace `hello@morethancounselling.com.au` (footer) with your real
  address. Search the file for `TODO`.
- **Fees** — the “Fees & rebates” note is intentionally general; add specifics
  whenever you like.

## Deploy
**Netlify (drag & drop, fastest):** go to <https://app.netlify.com/drop> and drag
this folder in. You'll get a live URL; add your domain under Domain management.

**Netlify from GitHub / GitHub Pages:** push this folder to a repo. For GitHub
Pages: Settings → Pages → Deploy from a branch → `main` → `/root`. For Netlify:
import the repo, leave the build command blank, publish directory `.`
(`netlify.toml` already sets this).

```bash
git init && git add . && git commit -m "MTC homepage"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
