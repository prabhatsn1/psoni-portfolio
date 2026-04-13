# Alex Morgan — Portfolio

A production-ready, animation-driven portfolio website for a freelance software engineer, built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router, static generation)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (scroll-based animations, parallax, 3D perspective effects)
- **React 19**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                        # App Router pages
  layout.tsx                # Root layout (Navbar + Footer)
  page.tsx                  # Home
  about/                    # About page + timeline/skill components
  services/                 # Freelance services
  projects/                 # Project grid + [slug] detail pages
  reviews/                  # Client testimonials
  process/                  # Development methodology
  blog/                     # Blog listing (mock)
  contact/                  # Contact form (UI only)

components/
  layout/                   # Navbar, Footer
  sections/                 # Hero, Skills, FeaturedProjects, Testimonials, CTA
  ui/                       # AnimatedSection, GlowCard, Button, ParallaxSection, etc.

data/
  content-mock.json         # All site content (single source of truth)

lib/
  data.ts                   # Typed data accessors
  motion.ts                 # Reusable Framer Motion variants

types/
  content.ts                # TypeScript interfaces for all content
```

## Routes

| Route              | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `/`                | Animated hero, skills, featured projects, testimonials |
| `/about`           | Bio, values, experience timeline, tech stack           |
| `/services`        | Freelance service offerings                            |
| `/projects`        | Filterable project grid                                |
| `/projects/[slug]` | Project detail with case study                         |
| `/reviews`         | Client testimonials (masonry layout)                   |
| `/process`         | Development process steps                              |
| `/blog`            | Blog listing (mock data)                               |
| `/contact`         | Contact form + social links                            |

## Key Features

- Scroll-based section animations via `useScroll` / `useTransform`
- 3D perspective card grids and parallax depth layers
- Mouse-tracking radial glow cards
- Animated nav with `layoutId` active pill transitions
- Filter animations with `AnimatePresence`
- All pages statically generated at build time
- Fully responsive (desktop-first)
- SEO metadata on every route

## Data

All content is driven by `data/content-mock.json`. To customize the portfolio, edit that file — no code changes needed for content updates.

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy to [Vercel](https://vercel.com) with zero configuration — all routes are statically generated.
