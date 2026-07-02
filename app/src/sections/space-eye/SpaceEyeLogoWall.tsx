const LOGOS = ['Orbital Dynamics', 'Apogee Space', 'Meridian SDA', 'Vanguard Orbital', 'Helios Networks', 'Perigee Labs']

export default function SpaceEyeLogoWall() {
  return (
    <section style={{ maxWidth: 1160, margin: '0 auto', padding: '12px 40px 40px' }}>
      <div style={{ textAlign: 'center', fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A79E8B', marginBottom: 26 }}>
        Trusted across the space enterprise
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6" style={{ gap: 1, background: '#E7E0D1', border: '1px solid #E7E0D1', borderRadius: 14, overflow: 'hidden' }}>
        {LOGOS.map((name) => (
          <div key={name} style={{ background: '#FBFAF6', height: 86, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em', color: '#8A857A', textAlign: 'center', padding: '0 8px' }}>
            {name}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', fontSize: 12.5, color: '#B4AC98', marginTop: 14, fontFamily: "'IBM Plex Mono',monospace" }}>
        Representative segments — swap in your customer logos.
      </div>
    </section>
  )
}
