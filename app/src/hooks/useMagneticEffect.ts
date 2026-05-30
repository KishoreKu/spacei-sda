import { useRef, useCallback } from 'react'
import { gsap } from 'gsap'

export function useMagneticEffect(strength: number = 4, radius: number = 50) {
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!elementRef.current) return
    const rect = elementRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const distance = Math.sqrt(distX * distX + distY * distY)

    if (distance < radius) {
      const factor = 1 - distance / radius
      gsap.to(elementRef.current, {
        x: distX * factor * (strength / radius),
        y: distY * factor * (strength / radius),
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      })
    }
  }, [strength, radius])

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return
    gsap.to(elementRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    })
  }, [])

  return { elementRef, handleMouseMove, handleMouseLeave }
}
