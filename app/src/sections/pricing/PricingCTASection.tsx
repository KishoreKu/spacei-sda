import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function PricingCTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          once: true,
        },
      })

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          once: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-4 relative">
      <div ref={containerRef} className="max-w-4xl mx-auto text-center">
        <div ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Ready to monitor your constellation?
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            Join leading space agencies and private operators in tracking their assets with Space Eye.
            Start your free trial today.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-accent-violet text-white hover:bg-accent-violet/90 px-8 py-6 text-lg">
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            className="border-accent-violet/30 text-text-primary hover:bg-accent-violet/10 px-8 py-6 text-lg"
          >
            Schedule Demo
          </Button>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent-blue">✓</span>
            <span>14-day free trial for paid plans</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-blue">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-blue">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
