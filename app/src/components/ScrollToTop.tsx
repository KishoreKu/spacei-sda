import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LenisScrollContext from '../context/LenisScrollContext'
import { useContext } from 'react'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenisRef = useContext(LenisScrollContext)

  useEffect(() => {
    // Reset scroll position
    if (!hash) {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }

    // Give the DOM a moment to settle then refresh ScrollTrigger
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname, hash, lenisRef])

  return null
}

