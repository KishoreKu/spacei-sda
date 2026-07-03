import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LenisScrollContext from './context/LenisScrollContext'
import Navigation from './components/Navigation'
import StarfieldShader from './components/StarfieldShader'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as any)
    }
  }, [])

  return (
    <LenisScrollContext.Provider value={lenisRef}>
      <div className={isHome ? 'relative min-h-screen' : 'relative min-h-screen bg-deep-space'}>
        <ScrollToTop />
        {!isHome && <StarfieldShader />}
        {!isHome && <Navigation />}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
      </div>
    </LenisScrollContext.Provider>
  )
}

export default App
