const linkStyle = { color: 'inherit', textDecoration: 'none' } as const

export default function SpaceEyeFooter() {
  return (
    <footer style={{ borderTop: '1px solid #E4DDCE' }}>
      <div className="flex-col sm:flex-row" style={{ maxWidth: 1240, margin: '0 auto', padding: '52px 40px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
            <div style={{ position: 'relative', width: 24, height: 24, borderRadius: '50%', border: '1.5px solid #1A1917', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent,#CC785C)' }} />
            </div>
            <span style={{ fontSize: 17, fontWeight: 600 }}>Space&thinsp;Eye</span>
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, color: '#9A927F', letterSpacing: '0.04em' }}>
            spacei.us · Westley Group
          </div>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: '#5C5648' }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B4AC98', marginBottom: 2 }}>Product</div>
            <a href="#platform" style={linkStyle}>Platform</a>
            <a href="#usecases" style={linkStyle}>Use cases</a>
            <a href="#stack" style={linkStyle}>Connectors</a>
            <a href="#cta" style={linkStyle}>Request access</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: '#5C5648' }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B4AC98', marginBottom: 2 }}>Company</div>
            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Contact</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #E4DDCE' }}>
        <div className="flex-col sm:flex-row" style={{ maxWidth: 1240, margin: '0 auto', padding: '22px 40px', fontSize: 12.5, color: '#B4AC98', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2026 Westley Group. All rights reserved.</span>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace" }}>spacei.us</span>
        </div>
      </div>
    </footer>
  )
}
