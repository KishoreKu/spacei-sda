# Spacei — Technical Specification

## Dependencies

### Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | DOM renderer |
| react-router-dom | ^7.0.0 | Multi-page routing (Home + About) |
| vite | ^6.0.0 | Build tool |
| @vitejs/plugin-react | ^4.0.0 | React Vite plugin |
| tailwindcss | ^4.0.0 | Utility-first CSS |
| @tailwindcss/vite | ^4.0.0 | Tailwind Vite integration |

### Animation

| Package | Version | Purpose |
|---------|---------|---------|
| gsap | ^3.12.0 | Core animation engine — timelines, tweens, scroll-driven animations |
| lenis | ^1.1.0 | Smooth scroll with inertia |

### 3D / WebGL

| Package | Version | Purpose |
|---------|---------|---------|
| three | ^0.170.0 | Intelligence Flow Particles (Three.js particle system + nodes) |
| @types/three | ^0.170.0 | TypeScript types for Three.js |

### shadcn/ui Components

| Component | Install Command | Usage |
|-----------|----------------|-------|
| button | `npx shadcn add button` | CTA buttons (Pill Button, Ghost Button variants) |
| badge | `npx shadcn add badge` | Status Badge component |
| card | `npx shadcn add card` | Feature cards, value cards, tech stack blocks |

### Fonts

| Package | Purpose |
|---------|---------|
| @fontsource/plus-jakarta-sans | Primary font (all headings, body, nav, CTAs) |
| @fontsource/ibm-plex-mono | Technical labels, data readouts, stats |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^5.6.0 | Type safety |
| @types/react | ^19.0.0 | React types |
| @types/react-dom | ^19.0.0 | React DOM types |

---

## Component Inventory

### shadcn/ui Components (pre-built)

| Component | Source | Customization |
|-----------|--------|---------------|
| Button | `npx shadcn add button` | Two custom variants: `pill` (Accent Violet, 100px radius, uppercase) and `ghost` (transparent, white border). Magnetic hover effect applied via wrapper. |
| Badge | `npx shadcn add badge` | Custom status variant with pulsing dot animation (CSS keyframes). |
| Card | `npx shadcn add card` | Base card with Surface background, subtle border, hover lift. Used across Features, Values, and Tech Stack sections. |

### Custom Components

| Component | File | Props | Description |
|-----------|------|-------|-------------|
| Navigation | `components/Navigation.tsx` | — | Fixed header with scroll-aware background blur, mobile hamburger with fullscreen overlay, logo, nav links, CTA. |
| Footer | `components/Footer.tsx` | — | 4-column footer with brand, product/company/legal links, social icons, copyright. |
| PillButton | `components/PillButton.tsx` | `children, href?, onClick?, size?: 'default' \| 'large'` | Violet pill CTA with magnetic hover wrapper. Size large for CTA sections (16px font, 16px/48px padding). |
| GhostButton | `components/GhostButton.tsx` | `children, href?, onClick?` | Outlined transparent button with white border. Hover: rgba(255,255,255,0.1) fill. |
| StatusBadge | `components/StatusBadge.tsx` | `label: string` | Inline badge with pulsing cyan dot and label text. |
| OverlineLabel | `components/OverlineLabel.tsx` | `children` | Eyebrow text: Caption token, Accent Violet, uppercase, letter-spacing 0.08em. |
| StatsDisplay | `components/StatsDisplay.tsx` | `stats: { value: string, label: string }[]` | Horizontal row of metric blocks with gradient numbers. Integrates CountUpAnimation. |
| CardComponent | `components/CardComponent.tsx` | `children, className?` | Reusable card: Surface bg, subtle border, hover border-brighten + glow. |
| FeatureBlock | `components/FeatureBlock.tsx` | `icon, title, body, accentColor` | Intelligence section feature block with left accent border, icon, backdrop blur bg. |
| TechBlock | `components/TechBlock.tsx` | `icon, title, specs, accentColor, bgColor, borderColor` | Technology section colored block with icon, title, specs list. |
| ValueCard | `components/ValueCard.tsx` | `icon, title, description, accentColor` | Values section card with 3D flip entrance, hover lift + glow. |
| PipelineNode | `components/PipelineNode.tsx` | `label, color, icon, isActive` | Data Flow section vertical node with pulse animation when active. |
| PipelineConnector | `components/PipelineConnector.tsx` | `fromColor, toColor, isActive` | Vertical gradient line connecting pipeline nodes. |
| ContentPanel | `components/ContentPanel.tsx` | `title, body, detail, accentColor` | Data Flow section scrollable content panel. |
| PageLoader | `components/PageLoader.tsx` | `children, sequence` | Orchestrates page load animation timeline. Wraps hero sections. |
| ScrollReveal | `components/ScrollReveal.tsx` | `children, variant?, delay?, stagger?` | Reusable scroll-triggered entrance wrapper. Variants: standard, stagger, cascade, fade-scale. |
| CountUpAnimation | `components/CountUpAnimation.tsx` | `end: number, suffix?: string, duration?: number` | Animated number counter triggered on scroll entry. |
| MagneticWrapper | `components/MagneticWrapper.tsx` | `children, strength?: number` | Wrapper that applies magnetic pull effect on mousemove within radius. |

### Section Components

| Section | File | Description |
|---------|------|-------------|
| HeroSection | `sections/HeroSection.tsx` | Full-viewport hero with starfield shader (WebGL), video bg, headline, subtitle, CTAs, stats bar. |
| ProblemSection | `sections/ProblemSection.tsx` | Two-column editorial: text left, collision image right. |
| DataFlowSection | `sections/DataFlowSection.tsx` | Scroll-pinned (3000px) storytelling: sticky pipeline visualization + 4 scrolling content panels. |
| IntelligenceSection | `sections/IntelligenceSection.tsx` | Scroll-pinned (2000px): Three.js particle canvas bg + 3 feature content blocks. |
| PlatformSection | `sections/PlatformSection.tsx` | Two-column: dashboard image left, capabilities checklist right. |
| FeaturesSection | `sections/FeaturesSection.tsx` | 3-column grid of feature cards with accent-colored top borders. |
| CTASection | `sections/CTASection.tsx` | Centered conversion block with pulsing CTA, status badge, trust indicators. |
| AboutHeroSection | `sections/about/AboutHeroSection.tsx` | Full-viewport with ambient team image, mission statement, stats. |
| MissionSection | `sections/about/MissionSection.tsx` | Two-column: mission text + values list, constellation image. |
| TechnologySection | `sections/about/TechnologySection.tsx` | Two-column: anomaly image, 2x2 tech stack grid. |
| ValuesSection | `sections/about/ValuesSection.tsx` | 2x2 grid of value cards with 3D flip entrance. |
| AboutCTASection | `sections/about/AboutCTASection.tsx` | CTA with demo request + contact options. |

### WebGL / 3D Components

| Component | File | Description |
|-----------|------|-------------|
| StarfieldShader | `components/StarfieldShader.tsx` | Fullscreen fixed WebGL canvas with fragment shader (8-layer starfield, depth-of-field, mouse parallax). Renders via single fullscreen triangle. Manages its own rAF loop, visibility pause, resize. |
| IntelligenceParticles | `components/IntelligenceParticles.tsx` | Three.js canvas (z-index 1, pointer-events none). 600 particles on 4 orbit paths, 3 glowing nodes, connection lines, mouse parallax camera. Manages own render loop + visibility. |

---

## Animation Implementation

### Page Load Orchestration (GSAP Timeline)

Both pages use a master GSAP timeline for coordinated entrance. The timeline is created on mount and plays automatically.

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Starfield init (0-400ms) | Raw WebGL | Shader compiles, first frame rendered via rAF. No CSS transition — shader starts rendering immediately on canvas mount. | High |
| Headline character stagger (400-1200ms) | GSAP SplitText + timeline | SplitText splits headline into chars/words. Each group: `{ opacity: 0, y: 30 }` → `{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.03 }`. Fires at position "+=0.4" in master timeline. | Medium |
| Subtitle fade (600-1400ms) | GSAP timeline | `{ opacity: 0, y: 20 }` → `{ opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }`. At position "+=0.2" relative to headline start. | Low |
| CTA buttons fade (1000-1600ms) | GSAP timeline | Primary: `{ opacity: 0, y: 15 }` → visible, 0.6s, power3.out. Ghost: same with 0.2s offset. | Low |
| Stats bar fade + count-up (1200-2000ms) | GSAP + custom | Container: `{ opacity: 0 }` → `{ opacity: 1, duration: 0.8 }`. Numbers: CountUpAnimation triggered after container visible. | Medium |

### Hero Starfield Shader

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| 8-layer starfield rendering | Raw WebGL (no Three.js) | Fragment shader with hash/noise/fbm functions, per-pixel star computation. Single fullscreen triangle. 4 uniforms: u_resolution, u_time, u_mouse, u_starColor. | High |
| Mouse parallax | Raw WebGL | mousemove → update u_mouse uniform (clientX * dpr, (height - clientY) * dpr). Shader applies -(mouse/res - 0.5) * 0.5 offset to star positions. | Low |
| Time drift | Raw WebGL | rAF timestamp * 0.001 → u_time uniform. Drives twinkle noise, nebula fbm, and star position drift. | Low |
| Visibility pause | IntersectionObserver | Observe canvas. When intersectionRatio < 0.1 or document.hidden: cancel rAF. Resume on re-visible. | Low |
| Resize handling | ResizeObserver | Canvas dims = clientRect * min(dpr, 2). Update u_resolution + gl.viewport. | Low |

### Intelligence Flow Particles (Three.js)

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| 600 orbiting particles | Three.js | 4 BufferGeometry orbit groups × 150 particles each. CPU-updated positions per frame: `angle = initialAngle + time * speed`, `x = cos(angle) * radiusX`, `y = sin(angle) * radiusY`, with tilt rotation. PointsMaterial with AdditiveBlending, size 2px. | High |
| 3 pulsing nodes | Three.js | SphereGeometry (radius 0.5-0.7). MeshBasicMaterial with transparent opacity. Scale oscillates: `0.9 + 0.25 * sin(time * 0.003)` per frame. | Medium |
| Connection lines | Three.js | Per-frame distance check between particles on same orbit. If dist < 3.0 and connections < 3: draw Line with opacity 0.1. Recalculated each frame. | High |
| Mouse parallax camera | Three.js | Normalized mouse [-1, 1] → camera position lerp target. Lerp factor 0.05 per frame. Max shift: 0.5 units on X/Y. | Low |
| Depth-based opacity | Three.js | Particle opacity = `0.3 + 0.7 * ((z + 5) / 10)` computed in vertex shader or attribute. | Low |
| Visibility pause | IntersectionObserver + document.hidden | Same pattern as starfield. Pause renderer when not visible. | Low |

### Scroll-Triggered Section Entrances

All scroll-triggered animations use GSAP ScrollTrigger with Lenis sync. Standard pattern unless noted.

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Standard fade-up | GSAP ScrollTrigger | `gsap.from(el, { opacity: 0, y: 40, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } })` | Low |
| Stagger children | GSAP ScrollTrigger | Parent container as trigger. `gsap.from(children, { opacity: 0, y: 40, stagger: 0.12, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: parent, start: "top 85%" } })` | Low |
| Cascade columns | GSAP ScrollTrigger | 3-4 columns. `gsap.from(columns, { opacity: 0, y: 30, stagger: 0.15, duration: 0.7, ease: "power3.out" })` | Low |
| Image slide-in (right) | GSAP ScrollTrigger | `gsap.from(image, { opacity: 0, x: 60, duration: 1.0, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 75%" } })` | Low |
| Image scale-in | GSAP ScrollTrigger | `gsap.from(image, { opacity: 0, scale: 0.95, duration: 1.0, ease: "power3.out" })` | Low |
| Capabilities list stagger | GSAP ScrollTrigger | Each item: `gsap.from(item, { opacity: 0, x: -20, duration: 0.5, stagger: 0.08, ease: "power3.out" })` | Low |
| Footer column stagger | GSAP ScrollTrigger | 4 columns: `gsap.from(columns, { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: "power3.out", scrollTrigger: { start: "top 85%" } })` | Low |
| Stats count-up | Custom hook + GSAP | `useCountUp(end, duration, triggerRef)`. Uses requestAnimationFrame to interpolate from 0 to end over 1.5s. Triggered by IntersectionObserver or ScrollTrigger onEnter. Supports suffix append ("+", "%"). | Medium |
| Character split stagger | GSAP SplitText + ScrollTrigger | SplitText splits into chars. `gsap.from(chars, { opacity: 0, y: 30, stagger: 0.03, duration: 0.8, ease: "power3.out" })` | Medium |

### Scroll-Pinned Sections

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Data Flow pin (3000px) | GSAP ScrollTrigger | `ScrollTrigger.create({ trigger: section, start: "top top", end: "+=3000", pin: true, scrub: 1 })`. 4 content panels animated via scrubbed timeline: enter (0-25%), settle (25-75%), exit (75-100%). | High |
| Data Flow panel transitions | GSAP ScrollTrigger (scrub) | Master timeline with 4 panel sub-timelines. Each panel: `fromTo({ y: 100, opacity: 0 }, { y: 0, opacity: 1 })` at 0-25%, hold, `to({ y: -80, opacity: 0 })` at 75-100%. | High |
| Data Flow node activation | GSAP ScrollTrigger (scrub) | Synced with panel timeline. Node border opacity 0.5→1.0, bg opacity 0.1→0.2. Connector lines illuminate via gradient fill opacity. | Medium |
| Intelligence pin (2000px) | GSAP ScrollTrigger | `ScrollTrigger.create({ trigger: section, start: "top top", end: "+=2000", pin: true, scrub: 1 })`. Particles continue animating (independent rAF loop). | High |
| Intelligence feature blocks | GSAP ScrollTrigger (scrub) | 3 blocks stagger within pinned range. Each: `fromTo({ opacity: 0, x: 60 }, { opacity: 1, x: 0 })` at scrubbed positions. | Medium |

### Interactive Effects

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Magnetic button hover | Custom (mousemove + GSAP) | `MagneticWrapper` tracks mouse position relative to button center within 50px radius. Computes offset (max 4px), applies GSAP `{ x, y, duration: 0.4, ease: "elastic.out(1, 0.5)" }`. On mouseleave: spring back to `{ x: 0, y: 0 }`. | Medium |
| Header scroll behavior | GSAP ScrollTrigger | Two triggers: (1) `start: "100px top"` toggles background transparent → `rgba(0,0,0,0.85)` with `backdrop-filter: blur(12px)`. (2) `onUpdate` with direction check: scroll down → hide (translateY -100%, 0.3s, power2.in), scroll up → show (translateY 0, 0.3s, power3.out). Only after scrolling past hero. | Medium |
| Mobile menu overlay | GSAP | Open: `gsap.fromTo(overlay, { y: "-100%" }, { y: "0%", duration: 0.5, ease: "power3.out" })`. Close: reverse. Lock body scroll when open. | Low |
| CTA button pulse glow | CSS keyframes | `@keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 20px rgba(117,0,234,0.3) } 50% { box-shadow: 0 0 40px rgba(117,0,234,0.5) } }` animation: 2s ease-in-out infinite. | Low |
| Status badge dot pulse | CSS keyframes | `@keyframes pulseDot { 0% { opacity: 0.4 } 100% { opacity: 1 } }` animation: 2s ease-in-out infinite alternate. | Low |
| Pipeline node pulse | CSS keyframes | `@keyframes nodePulse { 0%, 100% { border-opacity: 0.5 } 50% { border-opacity: 1 } }` animation: 2s ease-in-out infinite. Applied to active node. | Low |
| CTA radial glow drift | CSS keyframes | `@keyframes glowDrift { 0%, 100% { background-position: center } 50% { background-position: calc(50% + 10px) calc(50% + 5px) } }` animation: 8s ease-in-out infinite. Large background-size to allow drift. | Low |
| Value card 3D flip | GSAP ScrollTrigger | `gsap.from(card, { opacity: 0, rotateY: -90, duration: 0.8, ease: "power3.out", stagger: 0.15, scrollTrigger: { start: "top 75%" } })`. Parent has `perspective: 1000px`. | Medium |
| Card hover lift | CSS transition | `transition: transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out`. Hover: `translateY(-4px)`, brightened border, accent glow shadow. | Low |
| Feature card hover | CSS transition | Same card hover pattern with accent-colored glow: `box-shadow: 0 8px 32px rgba(accent, 0.08)`. | Low |
| Nav link hover | CSS transition | `transition: color 0.3s ease`. Default: Text Muted → hover: Text Primary. | Low |
| Button hover (Pill/Ghost) | CSS transition | `transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`. Scale 1.02 on hover, 0.98 on active. Background/color swap for pill. | Low |

### Smooth Scroll Setup

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Global smooth scroll | Lenis | `const lenis = new Lenis({ lerp: 0.1 })`. Sync with GSAP: `lenis.on("scroll", ScrollTrigger.update)`. rAF loop: `function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }`. | Low |

### Reduced Motion

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| prefers-reduced-motion check | CSS + JS | Media query `prefers-reduced-motion: reduce` → disable CSS transitions/animations. JS: check `window.matchMedia` → set GSAP global `gsap.core.globals().ScrollTrigger.defaults({ animation: null })` or skip timeline creation. Starfield: freeze u_time. Particles: pause render loop. Lenis: disable (native scroll). | Low |

---

## State & Logic Plan

### Global State (React Context)

**LenisScrollContext**: Provides the Lenis instance to all components. Created at App level. Components access it for scroll-to (anchor links), scroll lock (mobile menu), and programmatic scroll.

```typescript
interface LenisScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number, options?: object) => void;
  isScrolling: boolean;
}
```

### Component-Level State

| Component | State | Type | Purpose |
|-----------|-------|------|---------|
| Navigation | `isScrolled` | boolean | Toggles background blur after 100px scroll |
| Navigation | `isVisible` | boolean | Show/hide on scroll direction (down = hide, up = show) |
| Navigation | `isMobileMenuOpen` | boolean | Toggles fullscreen mobile overlay |
| StarfieldShader | `isVisible` | boolean | IntersectionObserver controls rAF pause/resume |
| StarfieldShader | `dpr` | number | Capped at 2, updated on resize |
| IntelligenceParticles | `isVisible` | boolean | IntersectionObserver controls render loop |
| IntelligenceParticles | `particleCount` | number | 600 desktop, 300 mobile (reduced for performance) |
| CountUpAnimation | `currentValue` | number | Animated counter value |
| CountUpAnimation | `hasAnimated` | boolean | Prevents re-triggering after first count |
| DataFlowSection | `activePanel` | number (0-3) | Currently active pipeline stage, drives node activation |
| Mobile menu | `isLocked` | boolean | Locks/unlocks body scroll via Lenis |

### Custom Hooks

| Hook | File | Purpose |
|------|------|---------|
| useScrollTrigger | `hooks/useScrollTrigger.ts` | Thin wrapper around GSAP ScrollTrigger setup with cleanup. Accepts animation config + trigger options. |
| useCountUp | `hooks/useCountUp.ts` | Animates number from 0 to target. Triggered by IntersectionObserver. Supports suffix, duration, decimal places. |
| useMagneticEffect | `hooks/useMagneticEffect.ts` | Mouse position tracking within radius. Returns transform offsets. Uses GSAP for spring-back. |
| useVisibilityPause | `hooks/useVisibilityPause.ts` | Combines IntersectionObserver (threshold 0.1) + document.visibilitychange. Returns `isVisible` boolean for controlling rAF loops. |
| useReducedMotion | `hooks/useReducedMotion.ts` | Reads `prefers-reduced-motion: reduce`. Returns boolean. Used to skip/disable animations. |
| useHeaderScroll | `hooks/useHeaderScroll.ts` | Scroll position + direction tracking. Returns `{ isScrolled, isVisible, scrollDirection }`. |

### Data Flow

```
App.tsx
├── LenisScrollContext.Provider
│   ├── Navigation (uses: useHeaderScroll, Lenis for scroll lock)
│   ├── <Routes>
│   │   ├── HomePage (Hero → Problem → DataFlow → Intelligence → Platform → Features → CTA → Footer)
│   │   └── AboutPage (AboutHero → Mission → Technology → Values → AboutCTA → Footer)
│   └── Footer
├── StarfieldShader (fixed, independent rAF — NOT inside route, persists across pages)
└── IntelligenceParticles (mounted only on Home page, within IntelligenceSection)
```

**Note**: StarfieldShader is mounted once at App level as a fixed background canvas. It persists across page transitions (React Router). This avoids shader recompilation on navigation. It sits at z-index -1 and is visible behind all content.

IntelligenceParticles is mounted/unmounted with the Home page route. It manages its own Three.js renderer lifecycle (init on mount, dispose on unmount).

### WebGL Lifecycle Management

Both WebGL components manage their own render loops and must clean up on unmount:

**StarfieldShader**:
- Mount: Create WebGL context, compile shaders, start rAF loop
- Unmount: Cancel rAF, delete WebGL resources (shader programs, buffers)
- Resize: ResizeObserver updates canvas dims + viewport

**IntelligenceParticles**:
- Mount: Create Three.js scene, camera, renderer, geometries, materials. Start render loop.
- Unmount: Dispose renderer, geometries, materials, textures. Cancel rAF.
- Resize: Update renderer size + camera aspect ratio.

---

## Web Project Structure

```
├── app/
│   ├── main.tsx                          # Entry point, mounts App with BrowserRouter
│   ├── App.tsx                           # Root component: Router, Lenis provider, StarfieldShader mount
│   ├── index.css                         # Global styles, Tailwind directives, CSS custom properties, font imports, keyframes
│   │
│   ├── pages/
│   │   ├── HomePage.tsx                  # Composes: Hero, Problem, DataFlow, Intelligence, Platform, Features, CTA, Footer
│   │   └── AboutPage.tsx                 # Composes: AboutHero, Mission, Technology, Values, AboutCTA, Footer
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx               # Full-viewport hero with video bg, headline, CTAs, stats
│   │   ├── ProblemSection.tsx            # Problem statement two-column layout
│   │   ├── DataFlowSection.tsx           # Scroll-pinned pipeline visualization (3000px)
│   │   ├── IntelligenceSection.tsx       # Scroll-pinned with Three.js particles (2000px)
│   │   ├── PlatformSection.tsx           # Dashboard image + capabilities list
│   │   ├── FeaturesSection.tsx           # 3-column feature cards
│   │   ├── CTASection.tsx                # Conversion CTA with trust bar
│   │   └── about/
│   │       ├── AboutHeroSection.tsx      # About page hero with ambient image
│   │       ├── MissionSection.tsx        # Mission statement + constellation image
│   │       ├── TechnologySection.tsx     # Tech stack grid + anomaly image
│   │       ├── ValuesSection.tsx         # 2x2 value cards with flip animation
│   │       └── AboutCTASection.tsx       # About page closing CTA
│   │
│   ├── components/
│   │   ├── Navigation.tsx                # Fixed header with scroll-aware behavior
│   │   ├── Footer.tsx                    # Shared footer with 4-column grid
│   │   ├── StarfieldShader.tsx           # WebGL starfield (fullscreen fixed canvas)
│   │   ├── IntelligenceParticles.tsx     # Three.js particle system
│   │   ├── ui/                           # shadcn/ui components (auto-installed)
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   └── card.tsx
│   │   ├── PillButton.tsx               # Violet pill CTA with magnetic hover
│   │   ├── GhostButton.tsx              # Outlined transparent button
│   │   ├── StatusBadge.tsx              # Pulsing dot + label badge
│   │   ├── OverlineLabel.tsx            # Eyebrow text component
│   │   ├── StatsDisplay.tsx             # Metric row with count-up numbers
│   │   ├── CardComponent.tsx            # Reusable card container
│   │   ├── FeatureBlock.tsx             # Intelligence section feature block
│   │   ├── TechBlock.tsx                # Technology stack colored block
│   │   ├── ValueCard.tsx                # Values card with 3D flip
│   │   ├── PipelineNode.tsx             # Data flow pipeline node
│   │   ├── PipelineConnector.tsx        # Pipeline connecting line
│   │   ├── ContentPanel.tsx             # Data flow scrollable panel
│   │   ├── ScrollReveal.tsx             # Reusable scroll-triggered entrance wrapper
│   │   ├── CountUpAnimation.tsx         # Animated number counter
│   │   └── MagneticWrapper.tsx          # Magnetic hover effect wrapper
│   │
│   ├── hooks/
│   │   ├── useScrollTrigger.ts          # ScrollTrigger setup/cleanup wrapper
│   │   ├── useCountUp.ts                # Number count-up animation hook
│   │   ├── useMagneticEffect.ts         # Magnetic hover transform hook
│   │   ├── useVisibilityPause.ts        # IntersectionObserver + visibility pause
│   │   ├── useReducedMotion.ts          # prefers-reduced-motion detection
│   │   └── useHeaderScroll.ts           # Scroll position/direction tracking
│   │
│   ├── context/
│   │   └── LenisScrollContext.tsx        # Lenis instance provider + scroll utilities
│   │
│   ├── shaders/
│   │   ├── starfield.vert               # Starfield vertex shader (pass-through)
│   │   └── starfield.frag               # Starfield fragment shader (8-layer starfield)
│   │
│   ├── lib/
│   │   └── utils.ts                      # cn() helper from shadcn + general utilities
│   │
│   └── types/
│       └── index.ts                      # Shared TypeScript interfaces
│
├── public/
│   ├── img-dashboard.jpg                 # SDA dashboard screenshot
│   ├── img-collision.jpg                 # Satellite collision visualization
│   ├── img-team.jpg                      # Team collaboration photo
│   ├── img-anomaly.jpg                   # Anomaly detection visualization
│   ├── img-constellation.jpg             # Satellite constellation pattern
│   └── vid-hero-bg.mp4                   # Hero background video (8s loop)
│
├── components/ui/                        # shadcn/ui components (auto-generated)
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Key Implementation Notes

### Raw WebGL vs. Three.js Split

The starfield uses **raw WebGL** (not Three.js) because it is a single fullscreen fragment shader with no geometry, materials, or scene graph. Using Three.js would add unnecessary overhead. The Intelligence Particles use **Three.js** because they require a scene graph (camera, multiple geometries, Points, Line, Sphere meshes), buffer management, and 3D math.

### Shader Asset Loading

Starfield vertex and fragment shaders are imported as raw strings via Vite's `?raw` import suffix:
```typescript
import starfieldVert from '../shaders/starfield.vert?raw';
import starfieldFrag from '../shaders/starfield.frag?raw';
```

### Performance Strategy

1. **DPR cap at 2** for both WebGL canvases to prevent GPU strain on high-DPI displays
2. **Visibility pausing** via IntersectionObserver (threshold 0.1) — both canvases stop rendering when off-screen or tab is hidden
3. **Mobile particle reduction** — IntelligenceParticles reduces from 600 to 300 particles on viewports below 768px
4. **Shader layer reduction** — Starfield LAYERS constant can be reduced from 8 to 4 on low-power devices (detected via `navigator.hardwareConcurrency` or reduced-motion preference)
5. **Connection line optimization** — Only compute particle connections for particles within the same orbit group (not cross-orbit), limiting complexity to O(n) per group

### Page Transition

StarfieldShader mounts once at App level and persists across route changes. It does not recompile or restart on navigation. The canvas has `pointer-events: none` and sits at a fixed z-index below all content.

### Accessibility

- All canvas elements: `aria-hidden="true"`, `role="presentation"`
- Focus states: 2px Outline (#FFFFFF) with 2px offset on all interactive elements
- Text contrast: All body/heading text meets WCAG AA against Deep Space (#000000) background
- Reduced motion: Full `prefers-reduced-motion: reduce` support (see Animation table above)
- Mobile menu: Trap focus within overlay when open, restore on close

### Font Loading

Plus Jakarta Sans and IBM Plex Mono loaded via `@fontsource` packages for self-hosting. Import in `index.css`:
```css
@import '@fontsource/plus-jakarta-sans/400.css';
@import '@fontsource/plus-jakarta-sans/500.css';
@import '@fontsource/ibm-plex-mono/400.css';
```

### Tailwind Configuration

Design tokens mapped as CSS custom properties in `index.css` and referenced in Tailwind config as theme extensions. Colors use the token names (e.g., `deep-space`, `accent-violet`) with corresponding hex values. Typography uses `fontFamily` mappings to the loaded font packages.
