# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Spacei** is a high-performance React application for Space Domain Awareness (SDA). It features sophisticated visual effects using GSAP animations, Three.js particles, and WebGL shaders, combined with smooth scroll interactions via Lenis.

## Quick Start

### Development
- **Start dev server:** `npm run dev` (runs at port 3000)
- **Build for production:** `npm run build` (TypeScript check + Vite bundling)
- **Lint code:** `npm run lint`
- **Preview production build:** `npm run preview`

All commands run from the `app/` directory. The dev server includes HMR (Hot Module Reload).

## Architecture & Organization

### Directory Structure
```
app/src/
├── pages/              # Top-level page components (HomePage, AboutPage)
├── sections/           # Modular page sections (e.g., space-eye/ with sub-components)
├── components/         # Reusable UI and visual components
│   ├── ui/            # shadcn/ui base components from Radix UI
│   ├── StarfieldShader.tsx  # Global WebGL background (mounted at App level)
│   ├── Navigation.tsx   # Navigation bar
│   └── ...
├── hooks/             # Custom hooks (useVisibilityPause, useCountUp, useHeaderScroll, etc.)
├── context/           # Global state (LenisScrollContext for Lenis scroll ref)
├── lib/               # Utilities (cn for Tailwind class merging)
├── shaders/           # GLSL shader files (.glsl)
├── App.tsx            # Router setup, Lenis initialization, Starfield mount
└── main.tsx           # Entry point
```

### Key Architectural Patterns

**Persistent Visual Components:** High-cost visuals like `StarfieldShader` are mounted at the `App` level (outside Routes) to persist across page transitions and avoid recompilation. They use the `useVisibilityPause` hook to pause rendering when off-screen.

**Scroll Sync:** Lenis is initialized in `App.tsx` and injected via `LenisScrollContext`. GSAP `ScrollTrigger` listens to Lenis scroll events via `lenis.on('scroll', ScrollTrigger.update)`. The ticker is configured with `gsap.ticker.lagSmoothing(0)` to ensure frame-accurate animations.

**Section Composition:** Large sections (e.g., `SpaceEyePage`) are composed of smaller, focused sub-components (e.g., `SpaceEyeHero`, `SpaceEyeGallery`, `SpaceEyeFAQ`) grouped in their own directory. This mirrors the visual structure and keeps files manageable.

## Development Guidelines

### Animations & GSAP
- **ScrollTrigger:** Use `ScrollTrigger.create()` for scroll-linked animations. Always verify animations sync with Lenis by testing scroll behavior—off-sync animations indicate ticker/Lenis integration issues.
- **Timelines:** Prefer `gsap.timeline()` for coordinated sequences.
- **Reduced Motion:** Wrap GSAP effects with the `useReducedMotion()` hook to respect user preferences.
- **Pinning:** When using `trigger: 'pin'` or similar persistent elements, beware of CSS artifacts (e.g., left/right offsets on pinned elements). Test transitions between pinned and unpinned sections.

### Styling & Components
- **Tailwind First:** Use utility classes for almost all styling. The project uses custom Tailwind colors (`deep-space`, `accent-violet`, etc.) defined in `tailwind.config.js`.
- **shadcn/ui:** Add new base components with `npx shadcn add [component]`. Customize in `src/components/ui/` to match the Space Eye design language.
- **Responsive Design:** Use Tailwind prefixes (`sm:`, `md:`, `lg:`). WebGL components cap DPR at 2 for performance on high-DPI screens.

### Performance & Visibility
- **useVisibilityPause:** Use this hook on refs of expensive components (WebGL, complex animations, heavy renders). It pauses rendering when the component scrolls out of view.
- **Intersection Observer:** Some hooks use `IntersectionObserver` with a 0.1 threshold; be aware that this can trigger state updates just inside the viewport.

### Path Aliases
- Use `@/` to import from `src/` (e.g., `import { cn } from '@/lib'`). This is configured in `tsconfig.json` and `vite.config.ts`.

## TypeScript Configuration

- **Target:** ES2022
- **Strict Mode:** Enabled (`strict: true`) with `noUnusedLocals` and `noUnusedParameters` enforced
- **Module Resolution:** Bundler mode with `verbatimModuleSyntax` for clean tree-shaking
- **JSX:** React JSX transform

## Key Dependencies

- **React 19** – Latest version with use hooks
- **Vite 7** – Fast build and dev server
- **Tailwind CSS 3.4** – Utility-first CSS
- **GSAP 3.15** – Animations and ScrollTrigger plugin
- **Lenis 1.3** – Smooth scroll library
- **Three.js 0.184** – 3D graphics and WebGL
- **shadcn/ui** – Component library (Radix UI primitives + Tailwind)
- **React Router 7** – Client-side routing
- **TypeScript 5.9** – Type checking

## Testing & Debugging

- **ESLint:** Configured in `eslint.config.js` with React Hooks and Refresh plugins. Run with `npm run lint`.
- **Type Checking:** Bundled with the build step (`tsc -b` in build script).
- **Console Logs:** GSAP ticker runs at 60 FPS; log selectively to avoid performance impact.
- **Visual Testing:** Use the dev server and browser DevTools. Disable hardware acceleration in DevTools (if animations seem off) to reveal rendering issues.

## Common Tasks

### Add a New Page
1. Create a new file in `src/pages/` (e.g., `ProductPage.tsx`)
2. Add a `<Route>` in `App.tsx`
3. Link to it via `<Link>` from React Router

### Add Animation to a Section
1. Import GSAP and ScrollTrigger in your component
2. Use `useRef` and `useEffect` to set up the timeline
3. Wrap expensive animations with `useVisibilityPause` to stop rendering when out of view
4. Test scroll sync with Lenis

### Add a New UI Component
1. Run `npx shadcn add [component]` to scaffold
2. Customize the component in `src/components/ui/[component].tsx` to match Space Eye theme (colors, spacing, animations)
3. Re-export from a barrel file if it's used widely

### Debug Blank Pages
- Check that routes are correctly defined in `App.tsx`
- Verify that `StarfieldShader` (mounted at App level) doesn't conflict with page-specific styling (it should only render on non-home pages: `{!isHome && <StarfieldShader />}`)
- Inspect CSS for pinned ScrollTrigger artifacts (e.g., `left: 0` or `top: 0` lingering after unpinning)

## Recent Work

See git history for context on recent changes:
- **"Refine Space Eye visuals"** – Updates to SpaceEyeGallery, hero section, and theming
- **"Replace SpaceEyeGallery with Claude Science-style 3D tornado helix"** – Advanced 3D visualization
- **"Replace homepage with Space Eye landing page"** – New homepage design

## Reference Files

- **tech-spec.md** – Comprehensive technical specification (component props, animation details, state management)
- **GEMINI.md** – Additional design and project documentation
- **app/src/index.css** – Global CSS variables, keyframes, and Tailwind layer overrides
