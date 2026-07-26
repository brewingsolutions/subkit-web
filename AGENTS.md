<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Coding Agent Guidelines - Subkit Landing Page

This guide establishes the rules and patterns that all AI coding agents must follow to maintain codebase elegance, scalability, and performance.

---

## 1. Project Overview
- A production-grade Next.js landing page & marketing website.
- **Goal**: Maintain visual excellence, clean domain separation, and long-term expandability.
- Read the repository root `CONTEXT.md` before changing product language or domain ownership.
- Read applicable decisions in `docs/adr/` before architectural changes.

## 2. Tech Stack
- **Framework**: Next.js (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, `@tailwindcss/postcss`
- **Primitives & Helpers**: Shadcn UI style, Base UI, Class Variance Authority (CVA), `clsx`, `tailwind-merge`, Lucide React
- **Typography System**:
  - Headings / Hero Text: `Plus Jakarta Sans` (CSS variable `--font-heading`)
  - Body & UI Controls: `Inter` (CSS variable `--font-sans`)
  - Technical / Logs UI: `Source Code Pro` (CSS variable `--font-mono`)

## 3. Directory & Architecture Rules
Keep elements separated strictly by domain and category:
```text
features/             # Domain-owned content, types, server/client implementation, and tests
├── contact/
├── docs/
├── home/
├── navigation/
├── pricing/
├── roadmap/
└── status/
components/
├── ui/               # Primitive, atomic, unopinionated widgets
├── layout/           # Global structural scaffolding
└── visuals/          # Shared decorative and technical visuals
```
- **Rule**: Avoid monolithic files like single `constants.ts` or single `types.ts`. Split by domain or keep component-local.

## 4. Component Standards
- Prefer highly modular,composable components.
- Do not repeat JSX, custom borders, or responsive sizing grids.
- Keep `components/ui/` unopinionated. Product-specific presentation belongs in its owning `features/` module; reusable decorative visuals belong in `components/visuals/`.
- **Files**: Use **lowercase kebab-case** names (`testimonial-card.tsx`).

## 5. Styling & Visual Design Guidelines
- **Zero Hex Magic Values**: Do not write `#635bff` or `#f6f9fc` as hardcoded Tailwind utility classes. Use semantic tokens (`bg-background`, `text-foreground`, `text-card-foreground`, `bg-primary`).
- Preserve the premium visual assets, layout padding (`py-20 lg:py-32`), gradients, and animations.
- Rely on theme variables configured in [globals.css](file:///Users/ataberkdonmez/Downloads/test/landing-page/app/globals.css) for Light/Dark continuity.

## 6. TypeScript Rules
- Enforce strict typing. **No `any` annotations**.
- Make React component props interfaces explicit and clean.
- Favor readability over complex utility generic manipulations.

## 7. Accessibility (a11y) & UX
- Semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<section>`).
- Full keyboard support for active interactive states (drawers, dropdown targets).
- Maintain responsive layouts across mobile, tablet, and widescreen viewports.

## 8. Performance & Bundle Optimization
- Use `"use client"` only for client-state requirements (typewriters, sliders, toggle states).
- Keep animations lightweight (SVG and CSS animations). Limit raw bundles size.

## 9. Restructuring & Refactoring Protocol
- **Analyze First**: Read existing implementations prior to making architectural adjustments.
- **Incremental Modifications**: Do not move multiple dependencies or rename files in a single pass.
- Restructure sequentially, update import routes immediately, and verify build health before moving forward.

## 10. Verification Checkpoints
Always test structural changes by executing:
- **Build**: `npm run build`
- **Lint**: `npm run lint` (or check for eslint errors)
- **TypeScript**: `npx tsc --noEmit`

## 11. Dependency Management
- Prefer the existing stack. Do not install state managers, UI libraries, or charting libraries without explicit request.

## 12. Output Expectations for Agents
When reporting tasks, provide:
1. Architectural changes overview.
2. Direct checklist of modified files.
3. Verification logs (compilation outputs).
