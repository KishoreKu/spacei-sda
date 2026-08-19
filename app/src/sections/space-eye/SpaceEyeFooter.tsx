import { Link } from 'react-router-dom'
import SpaceEyeLogo from './SpaceEyeLogo'
import { scrollToSection } from '@/lib/scrollToSection'

const linkStyle = { color: 'inherit', textDecoration: 'none' } as const

export default function SpaceEyeFooter() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.08)', background: '#2B2820', color: '#D9D4C6' }}>
      <div className="flex-col sm:flex-row" style={{ maxWidth: 1240, margin: '0 auto', padding: '52px 40px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14, color: '#F2EEE4' }}>
            <SpaceEyeLogo size={32} />
            <span style={{ fontSize: 17, fontWeight: 600 }}>Space&thinsp;Eye</span>
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, color: '#9A927F', letterSpacing: '0.04em' }}>
            spacei.us
          </div>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: '#D9D4C6' }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A8578', marginBottom: 2 }}>Product</div>
            <a href="#platform" onClick={(e) => scrollToSection(e, 'platform')} style={linkStyle}>Platform</a>
            <a href="#usecases" onClick={(e) => scrollToSection(e, 'usecases')} style={linkStyle}>Use cases</a>
            <a href="#stack" onClick={(e) => scrollToSection(e, 'stack')} style={linkStyle}>Connectors</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} style={linkStyle}>Pricing</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: '#D9D4C6' }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A8578', marginBottom: 2 }}>Company</div>
            <Link to="/about" style={linkStyle}>About</Link>
            <a href="#" onClick={(e) => e.preventDefault()} style={linkStyle}>Careers</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={linkStyle}>Contact</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
        <div className="flex-col sm:flex-row" style={{ maxWidth: 1240, margin: '0 auto', padding: '22px 40px', fontSize: 12.5, color: '#8A8578', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2026 Space Eye. All rights reserved.</span>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace" }}>spacei.us</span>
        </div>
      </div>
    </footer>
  )
}
