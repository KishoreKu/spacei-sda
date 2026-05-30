# Spacei — Technical Specification & Instructional Context

Spacei is a high-performance React application designed for Space Domain Awareness (SDA). It leverages Generative AI to provide real-time collision risk intelligence and anomaly detection for satellite operators. The application is characterized by its sophisticated visual effects, including custom WebGL shaders and Three.js particle systems, and a smooth, cinematic user experience driven by GSAP and Lenis.

## 🚀 Core Technologies

- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3.4+ (Utility-first)
- **Animations:** GSAP 3.15+ (Core timelines, ScrollTrigger)
- **Smooth Scroll:** Lenis 1.3+
- **Visuals:** Three.js (Particles) & Raw WebGL (Starfield Shader)
- **UI Components:** shadcn/ui (Radix UI primitives)

## 📁 Project Structure

```text
app/
├── src/
│   ├── components/       # Reusable UI components & visual shaders
│   │   ├── ui/           # shadcn/ui base components
│   │   └── StarfieldShader.tsx # Raw WebGL background
│   ├── sections/         # Page-specific modular sections
│   ├── pages/            # Top-level page compositions (Home, About)
│   ├── hooks/            # Custom logic (animation, scroll, visibility)
│   ├── context/          # Global state (LenisScrollContext)
│   ├── lib/              # Utilities (cn helper)
│   ├── shaders/          # GLSL shader files
│   ├── App.tsx           # Router, Lenis setup, Starfield mount
│   └── main.tsx          # App entry point
├── public/               # Static assets (images, video)
└── tech-spec.md          # Comprehensive technical documentation
```

## 🛠 Building and Running

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build optimized production bundle |
| `npm run lint` | Run ESLint for code quality |
| `npm run preview` | Preview production build locally |

## 🎨 Development Conventions

### Styling & UI
- **Tailwind First:** Use utility classes for almost all styling. Follow the established color palette (e.g., `deep-space`, `accent-violet`).
- **shadcn/ui:** Use `npx shadcn add [component]` to add new base components. Customize them in `src/components/ui/`.
- **Responsive Design:** Use Tailwind's `sm:`, `md:`, `lg:` prefixes. Capped DPR at 2 for WebGL to ensure performance on high-DPI screens.

### Animations (GSAP)
- **Timelines:** Prefer GSAP timelines (`gsap.timeline()`) for coordinated entrances.
- **ScrollTrigger:** Use GSAP ScrollTrigger for scroll-based animations, ensuring sync with Lenis via the `LenisScrollContext`.
- **Reduced Motion:** Always respect `prefers-reduced-motion` using the `useReducedMotion` hook.

### High-Performance Visuals
- **Visibility Pause:** Use the `useVisibilityPause` hook to stop WebGL/Three.js render loops when the component is off-screen.
- **Persistence:** High-cost visual components like `StarfieldShader` are mounted at the `App` level to persist across route changes and avoid recompilation.

## 📝 Key Files to Reference

- `tech-spec.md`: The definitive guide for component props, animation implementation, and state management.
- `app/src/App.tsx`: Central hub for routing and global orchestration.
- `app/src/index.css`: Defines global CSS variables, keyframes, and Tailwind layer overrides.
