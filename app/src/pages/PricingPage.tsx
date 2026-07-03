import PricingHeroSection from '@/sections/pricing/PricingHeroSection'
import PricingCardsSection from '@/sections/pricing/PricingCardsSection'
import PricingFAQSection from '@/sections/pricing/PricingFAQSection'
import PricingCTASection from '@/sections/pricing/PricingCTASection'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <PricingCardsSection />
      <PricingFAQSection />
      <PricingCTASection />
      <Footer />
    </>
  )
}
