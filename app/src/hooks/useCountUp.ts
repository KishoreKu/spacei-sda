import { useState, useEffect, useRef } from 'react'

export function useCountUp(
  end: number,
  duration: number = 1500,
  triggerRef?: React.RefObject<HTMLElement | null>
): [number, boolean] {
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!triggerRef?.current) {
      setHasAnimated(true)
      animate()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animate()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(triggerRef.current)
    return () => observer.disconnect()
  }, [triggerRef])

  const animate = () => {
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return [value, hasAnimated]
}
