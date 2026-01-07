# Abundant Strategies Website - Changelog

All notable changes to this project will be documented in this file.

---

## [v1.0.0] - 2025-01-07

### Added
- **Homepage complete** with all sections:
  - Hero (headline, subhead, CTA, logo bar)
  - "Who I Work With" (3 audience cards)
  - "The Proof" (4 credibility metrics)
  - Testimonials (4 blockquotes)
  - "The Difference" (positioning statement)
  - Final CTA (mailto link)
  - Footer

- **Design system** established:
  - Color palette: ink→cloud (#333→#999)
  - Typography: Montserrat (headlines) + Segoe UI (body)
  - Backgrounds: white (#fff) + whisper (#fafafa)

- **Iteration tracking** system in `/iterations/` folder

### Changed
- **AI count accuracy fix**: Changed "65+ agents" to "Builder" with accurate description
- **Cards visibility fix**: Tightened hero padding so cards visible on first load
- **Logo bar relocated**: Moved from "The Proof" section into Hero

### Technical
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4 with @theme inline
- Montserrat via next/font/google

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-01-07 | Changed "65+ agents" → "Builder" | Accuracy - she's built 55+ assistants + ~15 agents, not 65+ agents |
| 2025-01-07 | Tightened hero padding | Cards were truncated on first load |
| 2025-01-07 | Moved logo bar to hero | Ensure credibility visible above fold |
| 2025-01-07 | Used Montserrat via next/font | Better than CSS @import for Tailwind v4 |

---

## Screenshots Location
Screenshots saved to: `/iterations/`
- Name format: `v1-[section]-2025-01-07.png`

---

## Git Commits
- `e81b28f` - Initial commit: package.json
- `f672c68` - feat: Complete homepage v1 with all sections
