import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LenisScrollContext } from '../context/LenisScrollContext'
import { useContext } from 'react'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenisRef = useContext(LenisScrollContext)

  useEffect(() => {
    if (!hash) {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [pathname, hash, lenisRef])

  return null
}
