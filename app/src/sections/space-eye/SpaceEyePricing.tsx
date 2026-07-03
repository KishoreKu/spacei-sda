import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Plan {
  name: string
  price: number | string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: 299,
    period: '/month',
    description: 'For small missions',
    features: ['Up to 5 satellites', '100 queries/month', '2-day lookhead', 'Priority alerts', 'Email support'],
    cta: 'Start Trial',
  },
  {
    name: 'Professional',
    price: 999,
    period: '/month',
    description: 'For growing constellations',
    features: [
      'Up to 50 satellites',
      'Unlimited queries',
      '7-day lookhead',
      'AI-powered recommendations',
      'API access',
      'Slack integration',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For mega-constellations',
    features: [
      'Unlimited satellites',
      'Unlimited queries',
      '14-day lookhead',
      'Multi-constellation coordination',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
]

export default function SpaceEyePricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll('[data-card]')
      if (!cards) return

      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
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
    <section id="pricing" style={{ background: '#FBFAF6', padding: '120px 40px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', marginBottom: 26 }}>
            Simple, Transparent Pricing
          </div>
          <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#141311', marginBottom: 20 }}>
            Plans for every mission
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5C5648', maxWidth: 600, margin: '0 auto' }}>
            From single satellites to unlimited constellations. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 60 }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              fontFamily: "'Hanken Grotesk',sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: billingCycle === 'monthly' ? '#FBF9F3' : '#1A1917',
              background: billingCycle === 'monthly' ? 'var(--accent,#CC785C)' : 'transparent',
              border: billingCycle === 'monthly' ? 'none' : '1px solid #E1DBCD',
              padding: '12px 24px',
              borderRadius: 9,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            style={{
              fontFamily: "'Hanken Grotesk',sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: billingCycle === 'annual' ? '#FBF9F3' : '#1A1917',
              background: billingCycle === 'annual' ? 'var(--accent,#CC785C)' : 'transparent',
              border: billingCycle === 'annual' ? 'none' : '1px solid #E1DBCD',
              padding: '12px 24px',
              borderRadius: 9,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Annual <span style={{ color: '#5C5648', fontSize: 13, marginLeft: 6 }}>Save 17%</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div
          ref={containerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32,
            maxWidth: 1100,
            margin: '0 auto',
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-card
              style={{
                background: plan.highlighted ? 'var(--accent,#CC785C)' : '#FFFFFF',
                border: plan.highlighted ? 'none' : '1px solid #E1DBCD',
                borderRadius: 16,
                padding: 40,
                position: 'relative',
                transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                boxShadow: plan.highlighted ? '0 30px 60px rgba(204,120,92,.2)' : '0 10px 30px rgba(0,0,0,.08)',
                transition: 'all 0.3s ease',
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#141311',
                    color: 'var(--accent,#CC785C)',
                    padding: '6px 16px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 28, color: plan.highlighted ? '#FBF9F3' : '#141311', marginBottom: 8 }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: 14, color: plan.highlighted ? 'rgba(255,255,255,.8)' : '#5C5648' }}>
                  {plan.description}
                </p>
              </div>

              <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: plan.highlighted ? '1px solid rgba(255,255,255,.2)' : '1px solid #E1DBCD' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
                  <span style={{ fontFamily: "'Newsreader',serif", fontSize: 48, fontWeight: 400, color: plan.highlighted ? '#FBF9F3' : '#141311' }}>
                    {typeof plan.price === 'number' ? '$' : ''}{plan.price}
                  </span>
                  <span style={{ fontSize: 14, color: plan.highlighted ? 'rgba(255,255,255,.7)' : '#5C5648' }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                style={{
                  fontFamily: "'Hanken Grotesk',sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  width: '100%',
                  padding: '14px 20px',
                  marginBottom: 32,
                  borderRadius: 9,
                  border: 'none',
                  cursor: 'pointer',
                  background: plan.highlighted ? '#141311' : 'var(--accent,#CC785C)',
                  color: plan.highlighted ? 'var(--accent,#CC785C)' : '#FBF9F3',
                  transition: 'all 0.3s ease',
                }}
              >
                {plan.cta}
              </button>

              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: 12, marginBottom: 12, fontSize: 14, color: plan.highlighted ? 'rgba(255,255,255,.9)' : '#5C5648' }}>
                    <span style={{ color: plan.highlighted ? '#FBF9F3' : 'var(--accent,#CC785C)', fontWeight: 600, flexShrink: 0 }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
