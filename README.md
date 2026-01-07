# Abundant Strategies Website

Website for Nathalie Salles-Olivier — Advisor to CEOs & AI Builder.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Typography:** Montserrat (headlines) + Segoe UI (body)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| ink | #333333 | Primary text |
| stone | #555555 | Secondary emphasis |
| slate | #666666 | Body text |
| mist | #767676 | Section headers |
| fog | #888888 | Light text |
| cloud | #999999 | Lightest text |
| background | #ffffff | White background |
| whisper | #fafafa | Subtle gray background |

### Typography
- **Montserrat** — Headlines, labels, navigation (`.font-display`)
- **Segoe UI** — Body text, paragraphs

## Project Structure

```
src/app/
├── page.tsx       # Homepage
├── layout.tsx     # Root layout with fonts
└── globals.css    # Design system
iterations/        # Version documentation
CHANGELOG.md       # Decision log
```

## Documentation

- See [CHANGELOG.md](./CHANGELOG.md) for version history and decisions
- See [iterations/](./iterations/) for detailed iteration documentation

---

*Built with THEA + Nathalie collaboration*
