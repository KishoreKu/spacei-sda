import AboutHeroSection from '@/sections/about/AboutHeroSection'
import MissionSection from '@/sections/about/MissionSection'
import TechnologySection from '@/sections/about/TechnologySection'
import ValuesSection from '@/sections/about/ValuesSection'
import AboutCTASection from '@/sections/about/AboutCTASection'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <TechnologySection />
      <ValuesSection />
      <AboutCTASection />
      <Footer />
    </>
  )
}
