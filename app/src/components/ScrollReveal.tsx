import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: 'standard' | 'stagger' | 'cascade' | 'fade-scale' | 'slide-right'
  delay?: number
  className?: string
  staggerDelay?: number
}

export default function ScrollReveal({
  children,
  variant = 'standard',
  delay = 0,
  className = '',
  staggerDelay = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const children = el.children

      if (variant === 'stagger' && children.length > 0) {
        gsap.from(children, {
          opacity: 0,
          y: 40,
          stagger: staggerDelay,
          duration: 0.8,
          ease: 'power3.out',
          delay,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      } else if (variant === 'cascade' && children.length > 0) {
        gsap.from(children, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          delay,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      } else if (variant === 'fade-scale') {
        gsap.from(el, {
          opacity: 0,
          scale: 0.95,
          duration: 1.0,
          ease: 'power3.out',
          delay,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      } else if (variant === 'slide-right') {
        gsap.from(el, {
          opacity: 0,
          x: 60,
          duration: 1.0,
          ease: 'power3.out',
          delay,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      } else {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          delay,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [variant, delay, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
