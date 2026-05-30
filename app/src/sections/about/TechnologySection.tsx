import ScrollReveal from '@/components/ScrollReveal'
import OverlineLabel from '@/components/OverlineLabel'

const techBlocks = [
  {
    bgColor: 'rgba(0, 200, 255, 0.05)',
    borderColor: 'rgba(0, 200, 255, 0.15)',
    accent: '#00C8FF',
    title: 'Propagation Engine',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C8FF" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-20 12 12)" />
      </svg>
    ),
    specs: ['SGP4 / HPOP propagation', 'Sub-meter position accuracy', 'Covariance realism filtering', '10-day prediction horizon'],
  },
  {
    bgColor: 'rgba(117, 0, 234, 0.05)',
    borderColor: 'rgba(117, 0, 234, 0.15)',
    accent: '#7500EA',
    title: 'GenAI Core',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="12" cy="12" r="2" />
        <line x1="8" y1="8" x2="12" y2="12" /><line x1="16" y1="8" x2="12" y2="12" />
        <line x1="8" y1="16" x2="12" y2="12" /><line x1="16" y1="16" x2="12" y2="12" />
      </svg>
    ),
    specs: ['Fine-tuned LLM architecture', 'Real-time risk scoring', 'Maneuver recommendation', 'Natural language queries'],
  },
  {
    bgColor: 'rgba(245, 158, 11, 0.05)',
    borderColor: 'rgba(245, 158, 11, 0.15)',
    accent: '#F59E0B',
    title: 'Data Fusion',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="5" rx="1" />
        <rect x="4" y="11" width="16" height="5" rx="1" />
        <rect x="4" y="18" width="16" height="2" rx="1" />
      </svg>
    ),
    specs: ['15+ data sources ingested', 'Real-time deduplication', 'Automatic quality scoring', '50M+ obs/day throughput'],
  },
  {
    bgColor: 'rgba(91, 155, 255, 0.05)',
    borderColor: 'rgba(91, 155, 255, 0.15)',
    accent: '#5B9BFF',
    title: 'API & Integration',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5B9BFF" strokeWidth="1.5">
        <path d="M8 6 L4 10 L8 14" /><path d="M16 6 L20 10 L16 14" /><path d="M10 18 L14 6" />
      </svg>
    ),
    specs: ['RESTful + GraphQL APIs', 'Webhook notifications', 'SSO / SAML auth', '99.99% SLA uptime'],
  },
]

export default function TechnologySection() {
  return (
    <section className="py-[120px] bg-surface">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 items-start">
          {/* Image */}
          <ScrollReveal variant="fade-scale">
            <img
              src="/assets/img-anomaly.jpg"
              alt="Anomaly detection visualization"
              className="rounded w-full object-cover border border-[#F59E0B]/20 lg:sticky lg:top-32"
            />
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal variant="stagger">
              <div>
                <OverlineLabel>TECHNOLOGY</OverlineLabel>
                <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
                  AI-Native, Physics-Informed, Operator-Validated
                </h2>
                <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-[520px]">
                  Spacei&apos;s technical architecture combines three pillars: a high-fidelity orbit propagation engine, a generative AI inference layer, and a real-time data fusion pipeline. Each component is independently validated and continuously benchmarked against industry gold standards.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="stagger" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {techBlocks.map((block) => (
                <div
                  key={block.title}
                  className="p-8 rounded transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: block.bgColor,
                    border: `1px solid ${block.borderColor}`,
                  }}
                >
                  {block.icon}
                  <h4 className="mt-4 text-xl font-normal" style={{ color: block.accent }}>
                    {block.title}
                  </h4>
                  <ul className="mt-4 space-y-2">
                    {block.specs.map((spec) => (
                      <li key={spec} className="font-mono text-[13px] text-text-muted">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
