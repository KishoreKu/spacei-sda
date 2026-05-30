import ScrollReveal from '@/components/ScrollReveal'
import OverlineLabel from '@/components/OverlineLabel'

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <path d="M10 2 C10 2 16 6 16 11 C16 15 13 17 10 18 C7 17 4 15 4 11 C4 6 10 2 10 2Z" />
        <circle cx="10" cy="11" r="2" />
        <path d="M10 7 V9" />
      </svg>
    ),
    title: 'Operator-First Design',
    description: 'Built by operators, for operators. Every feature starts with a real mission control workflow.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <path d="M10 1 L12 7 H18 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 H8 Z" />
      </svg>
    ),
    title: 'Relentless Accuracy',
    description: "Sub-meter precision isn't a feature — it's the foundation. We validate against gold-standard references continuously.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <path d="M10 1V4M10 16V19M1 10H4M16 10H19M4.2 4.2L6.3 6.3M13.7 13.7L15.8 15.8M4.2 15.8L6.3 13.7M13.7 6.3L15.8 4.2" />
        <circle cx="10" cy="10" r="3" />
      </svg>
    ),
    title: 'Accessible Intelligence',
    description: 'Generative AI makes complex orbital analysis as easy as asking a question. No PhD required.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <path d="M13 2 L16 5 L13 8" />
        <path d="M4 9 C4 9 6 5 10 5 H16" />
        <path d="M7 18 L4 15 L7 12" />
        <path d="M16 11 C16 11 14 15 10 15 H4" />
      </svg>
    ),
    title: 'Open Ecosystem',
    description: 'We integrate with your tools, not the other way around. Open APIs, standard formats, no lock-in.',
  },
]

export default function MissionSection() {
  return (
    <section className="py-[120px] bg-deep-space">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Text */}
          <ScrollReveal variant="stagger">
            <div>
              <OverlineLabel>OUR MISSION</OverlineLabel>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
                Democratizing Space Domain Awareness
              </h2>
              <div className="mt-6 space-y-4 max-w-[520px]">
                <p className="text-base text-text-secondary leading-relaxed">
                  We believe that safe, sustainable space operations shouldn&apos;t require government budgets or bespoke engineering teams. Every satellite operator — from a 2-person startup to a global communications giant — deserves access to the same quality of orbital intelligence that military operators have enjoyed for decades.
                </p>
                <p className="text-base text-text-secondary leading-relaxed">
                  Spacei&apos;s mission is to make advanced space domain awareness accessible, affordable, and actionable. We combine cutting-edge AI with deep aerospace expertise to deliver a platform that operators actually want to use — not one they&apos;re forced to tolerate.
                </p>
              </div>

              <div className="mt-8 space-y-0">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.06]">
                    <div className="mt-0.5 shrink-0">{v.icon}</div>
                    <div>
                      <h4 className="text-base font-medium text-white">{v.title}</h4>
                      <p className="mt-1 text-base text-text-secondary">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variant="slide-right" className="lg:sticky lg:top-32">
            <img
              src="/assets/img-constellation.jpg"
              alt="Satellite constellation visualization"
              className="rounded w-full object-cover max-h-[500px]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
