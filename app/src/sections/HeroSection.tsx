import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import OverlineLabel from '@/components/OverlineLabel'
import PillButton from '@/components/PillButton'
import GhostButton from '@/components/GhostButton'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 8500, suffix: '+', label: 'SATELLITES TRACKED' },
  { value: 2147, suffix: '', label: 'COLLISION FREE DAYS' },
  { value: 120, suffix: '+', label: 'OPERATORS SERVED' },
]

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count] = useCountUp(value, 1500, ref)

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-mono text-2xl md:text-3xl font-normal gradient-text-violet">
        {value >= 1000 ? `${Math.floor(count / 1000)},${String(count % 1000).padStart(3, '0')}${suffix}` : `${count}${suffix}`}
      </div>
      <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted mt-1">
        {label}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const overlineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.from(overlineRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
    })
    .from(headlineRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.3')
    .from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.4')
    .from(ctaRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3')
    .from(statsRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source src="/assets/vid-hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative px-6 pb-[15vh] md:pb-[15vh] max-w-[640px]" style={{ zIndex: 10 }}>
        <div ref={overlineRef}>
          <OverlineLabel>GENAI-POWERED SPACE DOMAIN AWARENESS</OverlineLabel>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-[56px] font-medium leading-[1.1] tracking-[-0.03em] text-white"
        >
          Real-time collision risk intelligence for every satellite operator
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg text-text-secondary leading-relaxed max-w-[520px]"
        >
          Spacei transforms raw orbital data into actionable decisions — using generative AI to predict conjunction risks, detect anomalies, and keep your constellation safe.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-10">
          <PillButton href="#cta">Request Demo</PillButton>
          <GhostButton href="#intelligence">See How It Works</GhostButton>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className="relative w-full border-t border-white/10 py-6 px-6"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-6 md:gap-0">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
