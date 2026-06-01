import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LenisScrollContext from '../context/LenisScrollContext'
import { useContext } from 'react'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenisRef = useContext(LenisScrollContext)

  useEffect(() => {
    // Kill all stale ScrollTrigger instances from the previous page
    // This MUST happen before the new page's GSAP effects register
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // Reset scroll position immediately
    if (!hash) {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }

    // Give the new page's GSAP effects time to register, then refresh
    // so ScrollTrigger calculates correct trigger positions
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

    return () => clearTimeout(timer)
  }, [pathname, hash, lenisRef])

  return null
}

