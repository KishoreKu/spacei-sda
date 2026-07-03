import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

gsap.registerPlugin(ScrollTrigger)

const FAQS = [
  {
    question: 'Can I change my plan anytime?',
    answer:
      'Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle. No penalties or long-term commitments.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express) via Stripe. Enterprise customers can arrange custom payment terms.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! Start with our Free tier to explore Space Eye with 1 satellite and 5 queries per month. Paid plans include a 14-day free trial.',
  },
  {
    question: 'What is a "query"?',
    answer:
      'A query is a single conjunction analysis request or API call. Free users get 5/month, Starter get 100/month, and Professional users get unlimited queries.',
  },
  {
    question: 'Do you offer volume discounts?',
    answer:
      'For Enterprise customers with high usage, we offer custom pricing and discounts. Contact our sales team to discuss your needs.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer:
      'We will notify you when you approach your limits. You can upgrade anytime, or we can discuss a custom plan tailored to your usage.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'We offer a 30-day money-back guarantee if you are not satisfied with your plan. Contact us within 30 days of purchase.',
  },
  {
    question: 'Is there a discount for annual billing?',
    answer:
      'Yes! Annual plans save you 17% compared to monthly billing. Pay once per year and enjoy consistent pricing.',
  },
]

export default function PricingFAQSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
          once: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div ref={containerRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-lg">
              Got questions? We have answers. Reach out if you don't find what you're looking for.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-surface border border-surface/80 rounded-lg px-6 py-4 hover:border-accent-violet/30 transition-colors"
              >
                <AccordionTrigger className="text-text-primary font-semibold hover:text-accent-violet transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-sm pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 rounded-xl bg-surface border border-accent-violet/20">
            <p className="text-text-primary mb-4">
              <span className="font-semibold">Still have questions?</span> Reach out to our team.
            </p>
            <a
              href="mailto:sales@spacei.us"
              className="text-accent-blue hover:text-accent-violet transition-colors font-medium"
            >
              sales@spacei.us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
