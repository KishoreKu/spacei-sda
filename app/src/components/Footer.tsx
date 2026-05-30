import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-dark-surface py-20">
      <div className="content-container">
        <ScrollReveal variant="cascade">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="text-xl font-medium text-white tracking-[-0.03em]">
                space<span className="text-accent-violet">i</span>
              </Link>
              <p className="mt-4 text-base text-text-muted leading-relaxed">
                GenAI-powered space domain awareness for the commercial space era.
              </p>
              <div className="flex gap-4 mt-6">
                {/* LinkedIn */}
                <a href="#" className="text-text-muted hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* X/Twitter */}
                <a href="#" className="text-text-muted hover:text-white transition-colors duration-300" aria-label="X (Twitter)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" className="text-text-muted hover:text-white transition-colors duration-300" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-accent-violet mb-4">Products</h4>
              <ul className="space-y-3">
                {['Collision Avoidance', 'Anomaly Detection', 'Orbit Intelligence'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-text-muted hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-accent-violet mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-base text-text-muted hover:text-white transition-colors duration-300">About</Link></li>
                {['Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-text-muted hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-accent-violet mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-text-muted hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Row */}
        <div className="mt-16 pt-6 border-t border-surface flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
            2026 Spacei Inc. All rights reserved.
          </p>
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">
            Built for the orbital future.
          </p>
        </div>
      </div>
    </footer>
  )
}
