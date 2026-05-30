import ScrollReveal from '@/components/ScrollReveal'
import StatusBadge from '@/components/StatusBadge'
import PillButton from '@/components/PillButton'

const trustItems = [
  { icon: 'shield', label: 'SOC 2 Certified' },
  { icon: 'lock', label: 'End-to-End Encrypted' },
  { icon: 'zap', label: '99.99% Uptime' },
  { icon: 'globe', label: 'Global Coverage' },
]

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-[160px] bg-deep-space relative overflow-hidden"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 animate-glow-drift"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(117, 0, 234, 0.08) 0%, transparent 70%)',
          backgroundSize: '150% 150%',
        }}
      />

      <div className="content-container relative" style={{ zIndex: 10 }}>
        <ScrollReveal variant="stagger" className="max-w-[800px] mx-auto text-center">
          <div>
            <StatusBadge label="LIVE OPERATIONS" />
          </div>
          <div>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
              Ready to Protect Your Constellation?
            </h2>
          </div>
          <div>
            <p className="mt-4 text-lg text-text-secondary max-w-[560px] mx-auto">
              Join 120+ satellite operators using Spacei for real-time collision risk intelligence. Deploy in days, see results in hours.
            </p>
          </div>
          <div>
            <div className="mt-10 animate-pulse-glow rounded-full inline-block">
              <PillButton size="large" href="#cta">Request a Demo</PillButton>
            </div>
          </div>
          <div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  {i > 0 && <span className="hidden md:block w-px h-4 bg-text-muted/30 mr-4" />}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#A8AAAD" strokeWidth="1.5">
                    {item.icon === 'shield' && (
                      <><path d="M8 1 L14 4 V8 C14 11.5 11.5 14.5 8 15 C4.5 14.5 2 11.5 2 8 V4 L8 1Z" /><path d="M6 8 L7.5 9.5 L10.5 6.5" /></>
                    )}
                    {item.icon === 'lock' && (
                      <><rect x="3" y="8" width="10" height="7" rx="1" /><path d="M5 8V5a3 3 0 016 0v3" /></>
                    )}
                    {item.icon === 'zap' && (
                      <><path d="M9 1 L3 9 H8 L7 15 L13 7 H8 Z" /></>
                    )}
                    {item.icon === 'globe' && (
                      <><circle cx="8" cy="8" r="7" /><ellipse cx="8" cy="8" rx="3" ry="7" /><path d="M1 8 H15" /></>
                    )}
                  </svg>
                  <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
