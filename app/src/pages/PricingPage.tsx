import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SpaceEyePricing from '@/sections/space-eye/SpaceEyePricing'

const ACCENT = '#CC785C'

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: 'Can I change my plan anytime?',
    answer:
      'Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle. No penalties or long-term commitments required.',
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
]

export default function PricingPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  useEffect(() => {
    document.body.style.backgroundColor = '#FBFAF6'
    document.body.style.color = '#1A1917'
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [])

  return (
    <div
      style={{
        ['--accent' as string]: ACCENT,
        background: '#FBFAF6',
        color: '#1A1917',
        fontFamily: "'Hanken Grotesk',system-ui,sans-serif",
      }}
    >
      <Navigation />

      {/* Hero */}
      <header style={{ maxWidth: 940, margin: '0 auto', padding: '120px 40px 60px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', marginBottom: 26 }}>
          Pricing
        </div>
        <h1 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#141311' }}>
          Plans for every mission
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5C5648', maxWidth: 600, margin: '0 auto' }}>
          From single satellites to unlimited constellations. No hidden fees, cancel anytime.
        </p>
      </header>

      {/* Pricing Section */}
      <SpaceEyePricing />

      {/* FAQ Section */}
      <section style={{ background: '#FFFFFF', padding: '120px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', marginBottom: 26 }}>
              Questions?
            </div>
            <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#141311' }}>
              Frequently asked questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid #E1DBCD',
                  paddingTop: idx === 0 ? 0 : 24,
                  paddingBottom: 24,
                }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 20,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 18, color: '#141311', margin: 0, flex: 1 }}>
                    {faq.question}
                  </h3>
                  <span style={{ fontSize: 24, color: 'var(--accent,#CC785C)', flexShrink: 0, transition: 'transform 0.3s ease', transform: expandedFAQ === idx ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>
                {expandedFAQ === idx && (
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5C5648', marginTop: 16, margin: 0 }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 80, padding: '32px', background: '#FBFAF6', borderRadius: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 15, color: '#5C5648', marginBottom: 12 }}>
              Still have questions? Reach out to our team.
            </p>
            <a
              href="mailto:sales@spacei.us"
              style={{
                fontWeight: 600,
                color: 'var(--accent,#CC785C)',
                textDecoration: 'none',
                fontSize: 15,
              }}
            >
              sales@spacei.us
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FBFAF6', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#141311', marginBottom: 24 }}>
            Ready to launch?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5C5648', marginBottom: 40 }}>
            Join leading space agencies and private operators in tracking their assets with Space Eye.
          </p>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 15,
              fontWeight: 600,
              color: '#FBF9F3',
              background: 'var(--accent,#CC785C)',
              padding: '14px 28px',
              borderRadius: 9,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            Start Free Trial
            <span>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
