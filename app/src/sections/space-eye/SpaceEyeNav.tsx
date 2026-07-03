import SpaceEyeLogo from './SpaceEyeLogo'
import { SPACEI_APP_URL } from '@/config/urls'

export default function SpaceEyeNav() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1240, margin: '0 auto', padding: '22px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#1A1917' }}>
        <SpaceEyeLogo size={26} />
        <span style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em' }}>Space&thinsp;Eye</span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', border: '1px solid #E6C6B6', borderRadius: 5, padding: '2px 7px' }}>
          beta
        </span>
      </div>
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32, fontSize: 14.5, color: '#4A463D', fontWeight: 500 }}>
        <a href="#platform" style={{ color: 'inherit', textDecoration: 'none' }}>Platform</a>
        <a href="#usecases" style={{ color: 'inherit', textDecoration: 'none' }}>Use cases</a>
        <a href="#stack" style={{ color: 'inherit', textDecoration: 'none' }}>Connectors</a>
        <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <a href={SPACEI_APP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline" style={{ fontSize: 14.5, color: '#4A463D', textDecoration: 'none', fontWeight: 500 }}>Sign in</a>
        <a href="#cta" style={{ fontSize: 14.5, fontWeight: 600, color: '#FBF9F3', background: '#1A1917', padding: '10px 18px', borderRadius: 8, textDecoration: 'none' }}>Request access</a>
      </div>
    </nav>
  )
}
