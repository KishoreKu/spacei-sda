import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'
import PillButton from './PillButton'

export default function Navigation() {
  const { isScrolled, isVisible } = useHeaderScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Products', href: '/#features' },
    { label: 'Intelligence', href: '/#intelligence' },
    { label: 'Platform', href: '/#platform' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        const id = href.replace('/#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If on another page, navigate to home with the hash
        window.location.href = href
      }
    }
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[1000] h-16 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="content-container flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="text-xl font-medium text-white tracking-[-0.03em]">
            space<span className="text-accent-violet">i</span>
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-[13px] uppercase tracking-[0.02em] text-text-muted hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[13px] uppercase tracking-[0.02em] text-text-muted hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md:block">
            <PillButton href="mailto:hello@spacei.io">Request Demo</PillButton>
          </div>

          {/* Hamburger - Mobile */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden"
        style={{
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {navLinks.map((link) => (
          link.href.startsWith('/#') ? (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-[28px] font-medium text-white hover:text-accent-violet transition-colors duration-300"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[28px] font-medium text-white hover:text-accent-violet transition-colors duration-300"
            >
              {link.label}
            </Link>
          )
        ))}
        <PillButton href="mailto:hello@spacei.io" onClick={() => setMobileMenuOpen(false)}>
          Request Demo
        </PillButton>
      </div>
    </>
  )
}
