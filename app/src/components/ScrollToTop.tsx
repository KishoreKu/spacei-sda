import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LenisScrollContext from '../context/LenisScrollContext'
import { useContext } from 'react'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenisRef = useContext(LenisScrollContext)

  useEffect(() => {
    // Reset scroll position immediately on route change
    if (!hash) {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }

    // Refresh ScrollTrigger after the new page's effects have registered
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

    return () => clearTimeout(timer)
  }, [pathname, hash, lenisRef])

  return null
}

