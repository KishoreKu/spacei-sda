import ScrollReveal from '@/components/ScrollReveal'
import OverlineLabel from '@/components/OverlineLabel'

export default function ProblemSection() {
  return (
    <section className="py-[120px] bg-deep-space">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-center">
          {/* Text */}
          <ScrollReveal variant="stagger">
            <div>
              <OverlineLabel>THE GROWING THREAT</OverlineLabel>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white max-w-[600px]">
                45,000+ trackable objects. Zero margin for error.
              </h2>
              <p className="mt-6 text-base text-text-secondary leading-relaxed max-w-[520px]">
                Every day, commercial satellite operators face a collision threat that grows more complex. Legacy space domain awareness tools were built for government missions — expensive, slow, and inaccessible to the commercial operators who now manage 80% of active satellites.
              </p>
              <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-[520px]">
                When a conjunction alert arrives with only hours of lead time, operators need more than raw ephemeris data. They need intelligence — prioritized, contextualized, and actionable.
              </p>
              <a href="#platform" className="inline-flex items-center gap-2 mt-6 text-accent-violet font-medium hover:underline">
                Learn About Our Platform
                <span>→</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variant="slide-right">
            <div className="relative">
              <img
                src="/assets/img-collision.jpg"
                alt="Satellite collision risk visualization"
                className="rounded-lg w-full object-cover shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
