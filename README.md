# Saqi — Portfolio

Premium dark/glassmorphism freelance portfolio. Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## Status: Step 4 — bug-check pass + real photo added

Bugs found and fixed during a full code review:
- **Build-breaking TS error in `Hero.tsx`** — `ease: "easeOut"` inside an untyped `const` object gets widened to `string` by TypeScript, which Framer Motion's `Variants` type rejects. Fixed with an explicit `Variants` annotation.
- **Build-breaking TS error in `GlassCard.tsx` and `Contact.tsx`** — both used bare `React.MouseEvent` / `React.FormEvent` without importing `React`, which throws "Cannot find name 'React'" under modern `@types/react`. Fixed by importing the event types directly.
- **Mobile layout bug** — the Hero availability badge's long mono-font string could wrap inside a `rounded-full` pill on narrow screens, producing a squashed-oval look. Fixed with a shorter label variant below the `sm` breakpoint.
- **Accessibility gap** — `prefers-reduced-motion` was only handled for Tailwind's CSS `animate-*` utilities, not Framer Motion's JS-driven transitions. Added `useReducedMotion()` to `FadeInWhenVisible` and a `matchMedia` check to the typewriter hook so motion-sensitive visitors get instant, static content instead.
- **Missing `.eslintrc.json`** — without it, `next build` can hit an interactive ESLint setup prompt on a fresh clone or in CI/Vercel and fail. Added a minimal config.
- Removed an unnecessary `"use client"` from `Services.tsx` (no interactivity, can be server-rendered for a faster first paint).

Also added:
- Your real photo (`public/saqi-photo.jpg`) in the **About** section with a neon-glow glass frame, plus wired into Open Graph / Twitter card metadata and the Person JSON-LD schema so shared links and search results show it too.
- `app/icon.svg` — a branded favicon (gradient chevron, tested for legibility down to 16px). Next.js auto-detects this file and wires up the `<link rel="icon">` tag — no code changes needed elsewhere.
- `app/apple-icon.png` — your photo, used as the icon for "Add to Home Screen" on iOS/Android. A photo doesn't read well at 16px browser-tab size (especially this one, since the dark suit/hair/background give little contrast to work with), but at the 180px home-screen size it looks great — so each icon gets used where it actually works.

## Contact form setup (required for the form to actually send email)

1. Create a free account at [resend.com](https://resend.com) and grab an API key
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=re_your_key
   CONTACT_TO_EMAIL=your-real-email@example.com
   ```
3. The default `from` address (`onboarding@resend.dev`) works out of the box on Resend's free tier for testing. For production, verify your own domain in Resend and update the `from` field in `app/api/contact/route.ts`.

Without these env vars, the form will show a friendly error telling the visitor to email you directly instead of failing silently.

## Projects section note

The Projects section is intentionally placeholder for now:
- **Student Reporting System** (flagship) — full case study copy is final, but "View code" / "Live demo" show "coming soon" until you push the project to GitHub and optionally deploy it.
- **Student Management System** — linked to your existing repo, labeled honestly as a frontend prototype.

Send me the repo/deploy links whenever they're ready and I'll wire in real "View Code" / "Live Demo" buttons.

## Still to come
- R3F particle-field enhancement for the hero background (currently CSS-based ambient glow, chosen for faster initial paint)
- Page transition polish, performance pass, deployment guide

## Name-reveal preloader

`components/layout/Preloader.tsx`, wired into `app/layout.tsx`, sits above the whole site and plays once per browser session:
1. "Saqi" slides up letter-by-letter out of a clipped mask
2. Subtitle ("full-stack developer") fades in
3. A thin gradient progress bar fills
4. The whole overlay fades out, revealing the already-loaded site underneath

**Behavior notes:**
- Only plays on a visitor's *first* page load per browser session (`sessionStorage`) — won't replay on every refresh while you're developing. To force it again, clear site data for `localhost:3000` or open an incognito window.
- Automatically skipped (shown instantly with no animation) if the visitor has `prefers-reduced-motion` enabled.
- Easy to tweak in `Preloader.tsx`:
  - `DISPLAY_DURATION` (currently `1900`ms) — how long it stays up before fading
  - `NAME` — the text that animates in
  - The subtitle text, in the `<motion.p>`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/            # routes, layout, global styles
components/
  ui/           # NeonButton, GlassCard, Badge, Terminal — reusable primitives
  layout/       # Navbar, Footer
  sections/     # Hero, About, Skills, Services, Projects, Experience, Contact
data/           # site.ts — all copy/content lives here, edit freely
lib/            # utils, hooks (typewriter effect, etc.)
```

All copy lives in `data/site.ts` and the per-section data files added in later steps — update content there without touching component code.
