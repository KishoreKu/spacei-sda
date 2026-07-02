export default function SpaceEyeStack() {
  return (
    <section id="stack" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 40px 0' }}>
      <div style={{ maxWidth: 640 }}>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', marginBottom: 18 }}>
          Works with your stack
        </div>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 36, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 18px', color: '#141311' }}>
          Connectors bring your ground segment into the workflow.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: '#5C5648', margin: '0 0 8px' }}>
          Wire in your catalogs, flight-dynamics tools, ELNs, and internal APIs so Space Eye works with the systems your operations center already runs.
        </p>
        <a href="#" style={{ fontSize: 15, fontWeight: 600, color: '#141311', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Explore connectors <span style={{ color: 'var(--accent,#CC785C)' }}>&rarr;</span>
        </a>
      </div>
    </section>
  )
}
