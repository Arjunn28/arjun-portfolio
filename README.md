# Arjun AN — Portfolio

AI Engineer portfolio site. Dark editorial aesthetic, Next.js 15, Tailwind, Framer Motion.

## What's inside

- Hero with animated terminal widget
- Four featured projects with dedicated case study pages
- Work experience timeline (anonymized for public safety)
- Principles section on production AI thinking
- About with personal story and stats
- Contact form wired to Resend
- Placeholder "Ask my portfolio" assistant (backend to be added later)
- Custom 404 page
- Fully responsive, dark mode only

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Email | Resend |
| Fonts | Instrument Serif, Inter, JetBrains Mono (Google Fonts) |
| Icons | Lucide React |
| Hosting | Vercel (free tier) |

## Local setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=arjun.2001.an@gmail.com
```

**Get a free Resend API key** at [resend.com](https://resend.com) — 3,000 emails per month free, no credit card.

Until you verify a custom domain in Resend, emails send from `onboarding@resend.dev` which works immediately for testing. The contact form works even without a Resend key, but submissions will return a 500 error.

### 3. Add your resume

Drop your resume PDF into `public/resume.pdf`. The site links to it from the Nav, Hero and Footer.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to edit

Everything that is "content" lives in two files so you can update without digging through components:

- `lib/data.ts` — projects list, experience bullets, principles, social links
- `lib/case-studies.ts` — full case study content for each featured project

Common tweaks:

| Change | File |
|---|---|
| Project titles, taglines, stack, URLs | `lib/data.ts` |
| Case study deep content (problem, decisions, results) | `lib/case-studies.ts` |
| Hero headline or terminal commands | `components/Hero.tsx` |
| About bio paragraphs | `components/About.tsx` |
| Nav links | `components/Nav.tsx` |
| Footer columns | `components/Footer.tsx` |
| Design tokens (colors, fonts) | `tailwind.config.ts` + `app/globals.css` |

## Project structure

```
app/
  layout.tsx                  # Root layout, fonts, metadata
  page.tsx                    # Home page (stitches all sections)
  globals.css                 # Global styles, design tokens, noise texture
  not-found.tsx               # 404 page
  icon.svg                    # Favicon
  api/
    contact/route.ts          # Resend POST endpoint
  projects/
    [slug]/page.tsx           # Dynamic case study page
components/
  Nav.tsx
  Hero.tsx
  StackMarquee.tsx
  ProjectsGrid.tsx
  Experience.tsx
  Principles.tsx
  About.tsx
  Contact.tsx
  AskPortfolio.tsx            # Placeholder chatbot widget
  Footer.tsx
lib/
  data.ts                     # Projects, experience, principles
  case-studies.ts             # Deep case study content
  utils.ts                    # cn() helper
public/
  resume.pdf                  # Your resume goes here
```

## Deploying to Vercel

### Option A: GitHub → Vercel (recommended)

1. Push this project to a new GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo
4. Add environment variables in the Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
5. Click Deploy

You'll get a URL like `arjun-portfolio.vercel.app`. You can rename the project in Vercel settings to get `arjun-an.vercel.app` or similar.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Add the two env vars when asked or via the dashboard later.

## Keeping Render backends warm (optional but recommended)

Your Sentinel AI, DocCypher, SnapIQ and RetailIQ Copilot backends run on Render's free tier which cold-starts after 15 minutes of inactivity. A recruiter clicking "Live Demo" will wait 60 seconds for a loading spinner.

Fix: add a GitHub Actions cron that pings the health endpoints every 10 minutes.

Create `.github/workflows/keep-warm.yml` in each of those project repos:

```yaml
name: Keep backend warm
on:
  schedule:
    - cron: "*/10 * * * *"
  workflow_dispatch:
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping health endpoint
        run: curl -f https://your-backend.onrender.com/health || exit 0
```

Zero cost. Keeps your demos snappy.

## Adding the "Ask my portfolio" backend later

The `AskPortfolio.tsx` component is a placeholder UI right now. When you're ready, the backend plan is:

1. Build a small FastAPI service with ChromaDB containing your portfolio content as chunks
2. Use Groq free tier with Llama 3.3 70B for generation
3. Deploy on Render
4. Replace the placeholder input in `AskPortfolio.tsx` with a real chat interface posting to your new backend

The data source for the RAG index is already structured: `lib/data.ts` + `lib/case-studies.ts`. Chunk and embed those, and you have a portfolio assistant that can answer any recruiter question with citations.

## License

All content and code: © Arjun Abbimutt Nagendra Kumar. Feel free to take inspiration, don't copy verbatim.
