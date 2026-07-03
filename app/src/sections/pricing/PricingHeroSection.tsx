import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PricingHeroSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl text-center">
        <div ref={titleRef}>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Transparent
            <span className="bg-gradient-to-r from-accent-violet via-accent-blue to-particle-cyan bg-clip-text text-transparent">
              {' '}Pricing
            </span>
          </h1>
        </div>
        <div ref={descRef} className="space-y-4">
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
            Choose the perfect plan for your space domain awareness needs
          </p>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Scale from a single satellite to unlimited constellations. No hidden fees, cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
