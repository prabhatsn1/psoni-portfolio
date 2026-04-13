<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Portfolio Project Agent Rules

## Architecture

- **Next.js 16 App Router** with static generation. All routes SSG/SSR — no client-side data fetching.
- **Server Components by default.** Only add `"use client"` for components needing interactivity, hooks, or browser APIs (animations, forms, state).
- `params` in dynamic routes (`[slug]`) is a `Promise` — always `await params` before use.

## Data

- All content comes from `data/content-mock.json`. Never hardcode content in components.
- Access data via typed helpers in `lib/data.ts` (`getContent()`, `getProjectBySlug()`, etc.).
- Types are in `types/content.ts` — keep them in sync with the JSON.

## Animations

- Use Framer Motion. Reusable variants live in `lib/motion.ts`.
- Scroll-based: use `useScroll` + `useTransform` from Framer Motion.
- Viewport reveal: use `useInView` with `<AnimatedSection>` wrapper.
- Keep animations professional — subtle transforms, no excessive bounce or overshoot.

## Components

- Shared UI components go in `components/ui/`.
- Layout components (Navbar, Footer) go in `components/layout/`.
- Home page sections go in `components/sections/`.
- Page-specific client components live alongside their `page.tsx` (e.g., `app/projects/ProjectGrid.tsx`).

## Styling

- Tailwind CSS 4 with `@import "tailwindcss"` syntax (no `@tailwind` directives).
- Dark theme only (bg `#050505`, text `#ededed`). Accent color: indigo-500.
- Use `@theme inline` block for custom theme values in `globals.css`.

## Conventions

- TypeScript strict mode. No `any` types.
- Use `@/` path alias for imports.
- SEO: every page exports `metadata` (or `generateMetadata` for dynamic routes).
- Static params: dynamic routes must export `generateStaticParams`.
