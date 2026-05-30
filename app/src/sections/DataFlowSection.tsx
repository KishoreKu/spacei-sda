import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OverlineLabel from '@/components/OverlineLabel'

gsap.registerPlugin(ScrollTrigger)

const panels = [
  {
    accent: '#00C8FF',
    title: 'Multi-Source Data Ingestion',
    body: "Spacei ingests orbital data from 15+ sources — US Space Force's 18 SPCS, LeoLabs, ComSpOC, internal operator ephemeris, and proprietary sensor networks. All data is normalized, deduplicated, and validated in real-time.",
    detail: '50M+ observations processed daily',
    label: 'INGEST',
  },
  {
    accent: '#7C3AED',
    title: 'Real-Time Orbit Propagation',
    body: 'Our physics-aware propagation engine runs high-fidelity orbit determination using the latest atmospheric density models, solar radiation pressure calculations, and gravitational perturbation corrections. Orbits propagated with sub-meter accuracy.',
    detail: 'Sub-meter position accuracy',
    label: 'PROCESS',
  },
  {
    accent: '#7500EA',
    title: 'AI-Powered Risk Analysis',
    body: "Spacei's GenAI core doesn't just flag close approaches — it understands context. The system evaluates collision probability, assesses maneuver feasibility, generates recommended actions, and ranks risks by operational impact, not just raw Pc.",
    detail: '99.7% false positive elimination',
    label: 'ANALYZE',
  },
  {
    accent: '#5B9BFF',
    title: 'Actionable Intelligence Delivered',
    body: "Risk assessments arrive where you work — integrated into your mission control software, sent via API webhook, or displayed in Spacei's dashboard. Each alert includes recommended actions, maneuver delta-v estimates, and impact analysis.",
    detail: 'Sub-second alert delivery',
    label: 'DELIVER',
  },
]

function PipelineNode({ label, color, isActive }: { label: string; color: string; isActive: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500"
        style={{
          borderColor: isActive ? color : `${color}80`,
          backgroundColor: isActive ? `${color}33` : `${color}1A`,
          boxShadow: isActive ? `0 0 20px ${color}40` : 'none',
        }}
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      </div>
      <span
        className="mt-2 text-[12px] font-medium uppercase tracking-[0.08em]"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  )
}

function PipelineConnector({ fromColor, toColor, isActive }: { fromColor: string; toColor: string; isActive: boolean }) {
  return (
    <div className="w-[2px] h-16 mx-auto transition-opacity duration-500" style={{
      background: isActive
        ? `linear-gradient(to bottom, ${fromColor}, ${toColor})`
        : `linear-gradient(to bottom, ${fromColor}40, ${toColor}40)`,
      opacity: isActive ? 1 : 0.3,
    }} />
  )
}

export default function DataFlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activePanel, setActivePanel] = useState(0)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    if (isMobile || !sectionRef.current) return

    const section = sectionRef.current
    const panelEls = section.querySelectorAll('.data-panel')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const idx = Math.min(Math.floor(progress * 4), 3)
          setActivePanel(idx)
        },
      },
    })

    panelEls.forEach((panel, i) => {
      tl.fromTo(panel,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' },
        i * 0.25
      )
      if (i < panelEls.length - 1) {
        tl.to(panel,
          { y: -80, opacity: 0, duration: 0.15, ease: 'power2.in' },
          (i + 1) * 0.25 - 0.05
        )
      }
    })

    return () => { tl.kill() }
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative bg-deep-space"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(30,30,30,0.5) 0%, transparent 70%)',
      }}
    >
      {/* Header */}
      <div className="text-center py-20 md:py-20">
        <div className="content-container">
          <OverlineLabel className="text-center">HOW IT WORKS</OverlineLabel>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
            From Raw Data to Orbital Intelligence
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-[560px] mx-auto">
            Spacei&apos;s AI pipeline transforms millions of observations into prioritized, actionable decisions in seconds.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="content-container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">
          {/* Pipeline Visualization */}
          <div className="hidden md:flex flex-col items-center sticky top-32 self-start">
            {panels.map((panel, i) => (
              <div key={panel.label}>
                <PipelineNode
                  label={panel.label}
                  color={panel.accent}
                  isActive={activePanel === i}
                />
                {i < panels.length - 1 && (
                  <PipelineConnector
                    fromColor={panel.accent}
                    toColor={panels[i + 1].accent}
                    isActive={activePanel >= i}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Progress Bar */}
          <div className="flex md:hidden justify-between mb-8">
            {panels.map((panel, i) => (
              <div key={panel.label} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="h-1 w-full rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: i <= activePanel ? panel.accent : 'rgba(255,255,255,0.1)',
                  }}
                />
                <span className="text-[10px] uppercase tracking-wider" style={{ color: panel.accent }}>
                  {panel.label}
                </span>
              </div>
            ))}
          </div>

          {/* Content Panels */}
          <div className="relative">
            {panels.map((panel, i) => (
              <div
                key={panel.label}
                className={`data-panel ${i === 0 ? '' : 'md:absolute md:inset-0'}`}
                style={{ opacity: isMobile || i === 0 ? 1 : 0 }}
              >
                <div
                  className="p-8 md:p-10 rounded border border-white/[0.08] bg-surface/50"
                  style={{ borderLeft: `3px solid ${panel.accent}` }}
                >
                  <h3 className="text-2xl md:text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-white">
                    {panel.title}
                  </h3>
                  <p className="mt-4 text-base text-text-secondary leading-relaxed">
                    {panel.body}
                  </p>
                  <p
                    className="mt-6 font-mono text-[13px] text-text-muted"
                  >
                    {panel.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
