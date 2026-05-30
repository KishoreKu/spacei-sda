import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

export function useVisibilityPause(ref: RefObject<HTMLElement | null>): boolean {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(ref.current)

    const handleVisibility = () => {
      if (document.hidden) setIsVisible(false)
      else if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setIsVisible(rect.bottom > 0 && rect.top < window.innerHeight)
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [ref])

  return isVisible
}
