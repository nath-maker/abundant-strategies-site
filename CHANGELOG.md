# Abundant Strategies Website - Changelog

All notable changes to this project will be documented in this file.

---

## [v2.0.0] - 2025-01-07

### Added
- **Full site structure** with all pages:
  - About page (Paris→SF→Meta→Builder journey)
  - L'atelier page (AI HR Team product showcase)
  - Contact page (inquiry form with dropdown)
  - Custom 404 page

- **Navigation component**:
  - Fixed header with backdrop blur
  - Transparent → solid on scroll
  - Active page highlighting
  - Mobile hamburger menu with animation

- **CSS animations and polish**:
  - Fade-in animations for sections
  - Staggered grid item animations
  - Blockquote decorative quotes
  - Button hover lift effects
  - Smooth scrolling
  - Custom scrollbar styling
  - Reduced motion support

- **Image placeholder system**:
  - Hero landscape (3:1)
  - Dual photo grid (4:3)
  - Portrait in "The Difference" (3:4)
  - L'atelier product screenshot
  - Contact location image

- **Enhanced homepage**:
  - L'atelier teaser section (dark)
  - Better footer with navigation
  - Card hover effects
  - Larger proof numbers

### Technical
- All pages use Next.js App Router
- Client-side navigation with next/link
- Responsive mobile-first design
- Touch targets sized for mobile (44px min)

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
| 2025-01-07 | Built all pages in "fun session" | User gave creative freedom to explore |
| 2025-01-07 | Added scroll-aware navigation | Better UX, modern feel |
| 2025-01-07 | Image placeholders, not stock photos | Photos should be real/meaningful |
| 2025-01-07 | Changed "65+ agents" → "Builder" | Accuracy - she's built 55+ assistants + ~15 agents |
| 2025-01-07 | Tightened hero padding | Cards were truncated on first load |
| 2025-01-07 | Moved logo bar to hero | Ensure credibility visible above fold |
| 2025-01-07 | Used Montserrat via next/font | Better than CSS @import for Tailwind v4 |

---

## Screenshots Location
Screenshots saved to: `/iterations/`
- Name format: `v[version]-[page]-YYYY-MM-DD.png`

---

## Git Commits (v2)
- `2766c9f` - feat: Add responsive navigation component
- `c3869f8` - feat: Add navigation to layout
- `b359685` - feat: Add About page
- `0ec6958` - feat: Add L'atelier page
- `8d4cef3` - feat: Add Contact page
- `b912538` - feat: Enhance navigation with scroll effects
- `0761460` - style: Add animations and polish
- `86e08c4` - feat: Enhanced homepage with image placeholders
- `faba043` - feat: Add custom 404 page
- `f7a81db` - docs: Add v2 iteration documentation

## Git Commits (v1)
- `e81b28f` - Initial commit: package.json
- `f672c68` - feat: Complete homepage v1 with all sections
