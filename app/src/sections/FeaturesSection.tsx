import ScrollReveal from '@/components/ScrollReveal'
import OverlineLabel from '@/components/OverlineLabel'

const featureCards = [
  {
    accent: '#7500EA',
    title: 'Collision Avoidance',
    description: 'Continuous screening against the full space catalog. Multi-day look-ahead with AI-predicted covariance growth. Automated maneuver recommendations with full feasibility analysis.',
    link: 'Learn more',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <ellipse cx="32" cy="32" rx="20" ry="12" transform="rotate(-20 32 32)" />
        <ellipse cx="32" cy="32" rx="20" ry="12" transform="rotate(20 32 32)" />
        <circle cx="32" cy="32" r="2" fill="#7500EA" />
      </svg>
    ),
  },
  {
    accent: '#00C8FF',
    title: 'Anomaly Detection',
    description: "Behavioral modeling for every satellite in your fleet. Detects attitude anomalies, unexpected maneuvers, power deviations, and communication gaps. Learns what's normal for each spacecraft.",
    link: 'Learn more',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M8 48 L16 48 L20 28 L28 52 L36 16 L40 36 L48 36 L56 36" stroke="#00C8FF" strokeWidth="1.5" fill="none" />
        <circle cx="36" cy="16" r="3" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    accent: '#5B9BFF',
    title: 'Orbit Intelligence',
    description: 'Comprehensive orbital analysis including conjunction probability estimation, fragmentation risk assessment, station-keeping optimization, and deorbit trajectory planning.',
    link: 'Learn more',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#5B9BFF" strokeWidth="1.5">
        <circle cx="32" cy="32" r="6" />
        <ellipse cx="32" cy="32" rx="24" ry="10" transform="rotate(-30 32 32)" />
        <ellipse cx="32" cy="32" rx="24" ry="10" transform="rotate(30 32 32)" />
        <ellipse cx="32" cy="32" rx="24" ry="10" />
        <circle cx="48" cy="24" r="1.5" fill="#5B9BFF" />
        <circle cx="16" cy="38" r="1.5" fill="#5B9BFF" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-[120px] bg-surface border-y border-white/[0.06]">
      <div className="content-container">
        <ScrollReveal className="text-center mb-16">
          <OverlineLabel className="text-center">CAPABILITIES</OverlineLabel>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
            Three Ways Spacei Protects Your Constellation
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featureCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <div
                className="group p-8 rounded bg-deep-space border border-white/[0.08] transition-all duration-400 ease-out hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                style={{ borderTop: `3px solid ${card.accent}` }}
              >
                <div className="flex items-center justify-center h-16">
                  {card.icon}
                </div>
                <h4 className="mt-6 text-xl font-normal text-white">{card.title}</h4>
                <p className="mt-3 text-base text-text-secondary leading-relaxed flex-1">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="mt-5 text-base font-normal inline-flex items-center gap-1 transition-colors hover:opacity-80"
                  style={{ color: card.accent }}
                >
                  {card.link} <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
