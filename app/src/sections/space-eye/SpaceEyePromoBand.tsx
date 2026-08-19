export default function SpaceEyePromoBand() {
  return (
    <section style={{ background: '#F1E4DA', color: '#141311', marginTop: 60 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '88px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', marginBottom: 22 }}>
          Introducing Space Eye
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 300, fontSize: 38, lineHeight: 1.2, margin: '0 auto 26px', maxWidth: 660, color: '#141311' }}>
          One catalog for your whole team — sensors, orbits, risk, and reentry, in a single AI-native environment.
        </h2>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 15, fontWeight: 600, color: '#FBF9F3', background: '#1A1917', padding: '13px 24px', borderRadius: 9, textDecoration: 'none' }}>
          Read the announcement
        </a>
      </div>
    </section>
  )
}
