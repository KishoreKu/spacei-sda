import ScrollReveal from '@/components/ScrollReveal'
import OverlineLabel from '@/components/OverlineLabel'

const capabilities = [
  'Real-time conjunction screening for entire constellations',
  'Automated maneuver planning with delta-v optimization',
  'Anomaly detection across 50+ behavioral parameters',
  'Multi-source data fusion (18 SPCS, LeoLabs, ComSpOC)',
  'RESTful API with webhook notifications',
  'SOC 2 Type II compliant, ITAR-ready infrastructure',
]

export default function PlatformSection() {
  return (
    <section id="platform" className="py-[120px] bg-deep-space">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Dashboard Image */}
          <ScrollReveal variant="fade-scale">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/img-dashboard.jpg"
                alt="Spacei SDA Dashboard"
                className="rounded border border-white/10 w-full object-cover"
                style={{ boxShadow: 'inset 0 0 80px rgba(117, 0, 234, 0.05)' }}
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal variant="stagger" className="order-1 lg:order-2">
            <div>
              <OverlineLabel>THE PLATFORM</OverlineLabel>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
                Built for Commercial Space Operations
              </h2>
              <p className="mt-4 text-base text-text-secondary leading-relaxed">
                Spacei integrates with your existing ground segment, mission control software, and data sources. No rip-and-replace. No custom hardware. Deploy in days, not months.
              </p>

              <ul className="mt-8 space-y-0">
                {capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-white/[0.06]"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0">
                      <circle cx="10" cy="10" r="9" stroke="#7500EA" strokeWidth="1.5" />
                      <path d="M6 10 L9 13 L14 7" stroke="#7500EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base text-text-secondary">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
