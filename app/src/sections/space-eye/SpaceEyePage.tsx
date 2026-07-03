import { useEffect, useState } from 'react'
import SpaceEyeNav from './SpaceEyeNav'
import SpaceEyeHero from './SpaceEyeHero'
import SpaceEyeGallery from './SpaceEyeGallery'
import SpaceEyePlatform from './SpaceEyePlatform'
import SpaceEyePromoBand from './SpaceEyePromoBand'
import SpaceEyeUseCases from './SpaceEyeUseCases'
import SpaceEyeTestimonials from './SpaceEyeTestimonials'
import SpaceEyeLogoWall from './SpaceEyeLogoWall'
import SpaceEyeStack from './SpaceEyeStack'
import SpaceEyePricing from './SpaceEyePricing'
import SpaceEyeFAQ from './SpaceEyeFAQ'
import SpaceEyeCTA from './SpaceEyeCTA'
import SpaceEyeFooter from './SpaceEyeFooter'
import SpaceEyeVideoLightbox from './SpaceEyeVideoLightbox'

const ACCENT = '#CC785C'

export default function SpaceEyePage() {
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    const prevBg = document.body.style.backgroundColor
    const prevColor = document.body.style.color
    document.body.style.backgroundColor = '#FBFAF6'
    document.body.style.color = '#1A1917'
    return () => {
      document.body.style.backgroundColor = prevBg
      document.body.style.color = prevColor
    }
  }, [])

  return (
    <div
      style={{
        ['--accent' as string]: ACCENT,
        background: '#FBFAF6',
        color: '#1A1917',
        fontFamily: "'Hanken Grotesk',system-ui,sans-serif",
        overflowX: 'hidden',
      }}
    >
      <SpaceEyeNav />
      <SpaceEyeHero onOpenFilm={() => setVideoOpen(true)} />
      <SpaceEyeGallery />
      <SpaceEyePlatform />
      <SpaceEyePromoBand />
      <SpaceEyeUseCases />
      <SpaceEyeTestimonials />
      <SpaceEyeLogoWall />
      <SpaceEyeStack />
      <SpaceEyePricing />
      <SpaceEyeFAQ />
      <SpaceEyeCTA />
      <SpaceEyeFooter />
      <SpaceEyeVideoLightbox open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  )
}
