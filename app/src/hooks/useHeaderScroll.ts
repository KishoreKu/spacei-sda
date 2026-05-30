import { useState, useEffect, useRef } from 'react'

interface HeaderScrollState {
  isScrolled: boolean
  isVisible: boolean
  scrollDirection: 'up' | 'down'
}

export function useHeaderScroll(): HeaderScrollState {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const lastScrollY = useRef(0)
  const pastHero = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsScrolled(currentY > 100)
      pastHero.current = currentY > window.innerHeight * 0.8

      if (pastHero.current) {
        if (currentY > lastScrollY.current && currentY - lastScrollY.current > 5) {
          setScrollDirection('down')
          setIsVisible(false)
        } else if (currentY < lastScrollY.current && lastScrollY.current - currentY > 5) {
          setScrollDirection('up')
          setIsVisible(true)
        }
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled, isVisible, scrollDirection }
}
