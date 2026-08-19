import ScrollReveal from '@/components/ScrollReveal'
import OverlineLabel from '@/components/OverlineLabel'
import PillButton from '@/components/PillButton'
import GhostButton from '@/components/GhostButton'

export default function AboutCTASection() {
  return (
    <section className="py-[160px] bg-deep-space relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(117, 0, 234, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="content-container relative" style={{ zIndex: 10 }}>
        <ScrollReveal variant="stagger" className="max-w-[800px] mx-auto text-center">
          <div>
            <OverlineLabel className="text-center">GET IN TOUCH</OverlineLabel>
          </div>
          <div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
              Want to Learn More About Spacei?
            </h2>
          </div>
          <div>
            <p className="mt-4 text-lg text-text-secondary max-w-[560px] mx-auto">
              Whether you&apos;re evaluating SDA platforms for your constellation or just curious about how AI is changing space operations, we&apos;d love to hear from you.
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <PillButton size="large" href="mailto:hello@spacei.us">Request a Demo</PillButton>
              <GhostButton href="mailto:hello@spacei.us">Contact Us</GhostButton>
            </div>
          </div>
          <div>
            <p className="mt-6 text-base text-text-muted">
              Or email us directly at <a href="mailto:hello@spacei.us" className="text-accent-violet hover:underline">hello@spacei.us</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
