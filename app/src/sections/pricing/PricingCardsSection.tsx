import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

interface Plan {
  name: string
  tier: 'free' | 'starter' | 'professional' | 'enterprise'
  description: string
  price: { monthly?: number; annual?: number }
  features: string[]
  cta: string
  highlighted?: boolean
}

const PLANS: Plan[] = [
  {
    tier: 'free',
    name: 'Free',
    description: 'Get started with Space Eye',
    price: { monthly: 0 },
    features: ['1 satellite', '5 queries/month', '7-day lookhead', 'Basic alerts', 'Community support'],
    cta: 'Start Free',
  },
  {
    tier: 'starter',
    name: 'Starter',
    description: 'For small missions',
    price: { monthly: 299, annual: 2990 },
    features: [
      'Up to 5 satellites',
      '100 queries/month',
      '2-day lookhead',
      'Priority alerts',
      'Email support',
    ],
    cta: 'Start 14-day Trial',
  },
  {
    tier: 'professional',
    name: 'Professional',
    description: 'For growing constellations',
    price: { monthly: 999, annual: 9990 },
    highlighted: true,
    features: [
      'Up to 50 satellites',
      'Unlimited queries',
      '7-day lookhead',
      'AI-powered recommendations',
      'API access',
      'Slack integration',
      'Priority support',
    ],
    cta: 'Start 14-day Trial',
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    description: 'For mega-constellations',
    price: { monthly: 0 },
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

export default function PricingCardsSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('[data-card]')
      if (!cards) return

      gsap.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center+=100',
          once: true,
        },
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-accent-violet text-white'
                : 'bg-surface text-text-secondary hover:bg-surface/80'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              billingCycle === 'annual'
                ? 'bg-accent-violet text-white'
                : 'bg-surface text-text-secondary hover:bg-surface/80'
            }`}
          >
            Annual
            {billingCycle === 'annual' && <span className="text-light-blue text-sm">Save 17%</span>}
          </button>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.tier}
              data-card
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'lg:scale-105 bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 border-2 border-accent-violet/50 shadow-2xl'
                  : 'bg-surface border border-surface/80 hover:border-accent-violet/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-violet text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name & Description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                {billingCycle === 'monthly' && plan.price.monthly !== undefined ? (
                  <div>
                    <span className="text-4xl font-bold text-text-primary">${plan.price.monthly}</span>
                    <span className="text-text-muted text-sm ml-2">/month</span>
                  </div>
                ) : billingCycle === 'annual' && plan.price.annual !== undefined ? (
                  <div>
                    <span className="text-4xl font-bold text-text-primary">${plan.price.annual}</span>
                    <span className="text-text-muted text-sm ml-2">/year</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-text-primary">Custom</div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 mb-6 font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-accent-violet text-white hover:bg-accent-violet/90'
                    : 'bg-surface text-text-primary hover:bg-surface/80 border border-accent-violet/30'
                }`}
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-1">✓</span>
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
