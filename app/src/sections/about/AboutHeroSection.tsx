import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import OverlineLabel from '@/components/OverlineLabel'
import { useCountUp } from '@/hooks/useCountUp'

const aboutStats = [
  { value: 2019, label: 'Founded', suffix: '' },
  { value: 50, label: 'Team Members', suffix: '+' },
  { value: 3, label: 'Office Locations', suffix: '' },
]

function AboutStat({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count] = useCountUp(value, 1500, ref)

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl md:text-4xl font-normal gradient-text-violet">
        {count}{suffix}
      </div>
      <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted mt-2">
        {label}
      </div>
    </div>
  )
}

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const overlineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from(overlineRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
        .from(headlineRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from(statsRef.current, { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Ambient Image */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.12) 100%)',
        }}
      >
        <img
          src="/assets/img-team.jpg"
          alt="Team collaboration"
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-[0.12]"
          style={{ maskImage: 'linear-gradient(to left, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)' }}
        />
      </div>

      <div className="relative content-container text-center max-w-[900px]" style={{ zIndex: 10 }}>
        <div ref={overlineRef}>
          <OverlineLabel className="text-center">ABOUT SPACEI</OverlineLabel>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-[56px] font-medium leading-[1.1] tracking-[-0.03em] text-white"
        >
          We&apos;re Building the Nervous System for Space
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg text-text-secondary leading-relaxed max-w-[640px] mx-auto"
        >
          Born from a frustration with legacy space domain awareness tools, Spacei exists to make every satellite operator as capable as a government mission control center — at a fraction of the cost.
        </p>

        <div ref={statsRef} className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16">
          {aboutStats.map((stat) => (
            <AboutStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
