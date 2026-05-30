import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OverlineLabel from '@/components/OverlineLabel'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const valueCards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <path d="M20 4 L24 14 H36 L26 21 L30 33 L20 26 L10 33 L14 21 L4 14 H16 Z" />
        <path d="M20 18 L20 22" strokeLinecap="round" />
        <circle cx="20" cy="16" r="1" fill="#7500EA" />
      </svg>
    ),
    title: 'Safety Above All',
    description: 'Every line of code, every algorithm, every recommendation is measured against one standard: does it make space safer? This is our non-negotiable priority.',
    accent: '#7500EA',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#5B9BFF" strokeWidth="1.5">
        <path d="M20 6 C20 6 30 12 30 20 C30 28 26 34 20 36 C14 34 10 28 10 20 C10 12 20 6 20 6Z" />
        <circle cx="20" cy="20" r="5" />
        <path d="M20 12 V15" strokeLinecap="round" />
      </svg>
    ),
    title: 'Radical Transparency',
    description: 'We show our work. Every risk assessment includes its confidence interval, data sources, and assumptions. No black boxes, no opaque scoring.',
    accent: '#5B9BFF',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#00C8FF" strokeWidth="1.5">
        <path d="M30 10 A14 14 0 0 1 30 34" />
        <path d="M10 10 A14 14 0 0 0 10 34" />
        <path d="M34 20 L30 16 L30 24 Z" />
        <path d="M6 20 L10 16 L10 24 Z" />
      </svg>
    ),
    title: 'Continuous Learning',
    description: 'Space evolves. Our models adapt. We retrain, revalidate, and improve our systems daily using operational feedback and new observational data.',
    accent: '#00C8FF',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#F59E0B" strokeWidth="1.5">
        <path d="M20 34 C20 34 8 26 8 17 C8 11 13 7 17 7 C19 7 20 9 20 9 C20 9 21 7 23 7 C27 7 32 11 32 17 C32 26 20 34 20 34Z" />
        <circle cx="14" cy="14" r="2" />
        <path d="M14 14 L12 10" strokeLinecap="round" />
      </svg>
    ),
    title: 'Operator Empathy',
    description: "We've been in mission control at 3 AM during a conjunction event. We know the pressure. Every design decision respects the reality of satellite operations.",
    accent: '#F59E0B',
  },
]

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const cards = cardsRef.current.children
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
      } else {
        gsap.from(cards, {
          opacity: 0,
          rotateY: -90,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[120px] bg-deep-space">
      <div className="content-container">
        <ScrollReveal className="text-center mb-16">
          <OverlineLabel className="text-center">OUR PRINCIPLES</OverlineLabel>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
            What We Believe
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-[520px] mx-auto">
            These principles guide every decision we make — from product design to customer relationships.
          </p>
        </ScrollReveal>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ perspective: '1000px' }}
        >
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="group p-8 rounded bg-surface border border-white/[0.08] text-center transition-all duration-400 ease-out hover:-translate-y-1.5 min-h-[280px] flex flex-col items-center justify-center"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                el.style.boxShadow = `0 12px 40px ${card.accent}10`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                el.style.boxShadow = 'none'
              }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h4 className="mt-6 text-xl font-normal text-white">{card.title}</h4>
              <p className="mt-3 text-base text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
