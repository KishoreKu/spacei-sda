import HeroSection from '@/sections/HeroSection'
import ProblemSection from '@/sections/ProblemSection'
import DataFlowSection from '@/sections/DataFlowSection'
import IntelligenceSection from '@/sections/IntelligenceSection'
import PlatformSection from '@/sections/PlatformSection'
import FeaturesSection from '@/sections/FeaturesSection'
import CTASection from '@/sections/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <DataFlowSection />
      <IntelligenceSection />
      <PlatformSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  )
}
