const pillarText = (title: string, body: string) => (
  <div>
    <div style={{ fontSize: 16.5, fontWeight: 600, color: '#1A1917', marginBottom: 6 }}>{title}</div>
    <div style={{ fontSize: 15, lineHeight: 1.55, color: '#6E685C' }}>{body}</div>
  </div>
)

export default function SpaceEyePlatform() {
  return (
    <section id="platform" style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 40px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E4DDCE', paddingTop: 16, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A927F' }}>
        <span>Space Eye</span><span>[ 002 ]</span>
      </div>
      <div style={{ maxWidth: 720, margin: '44px 0 8px' }}>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.015em', margin: '0 0 18px', color: '#141311' }}>
          Built for space operations
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#5C5648', margin: 0 }}>
          One environment that ingests your sensors, reasons over the physics of orbit, and hands operators decisions they can defend — with the evidence attached to every one.
        </p>
      </div>

      {/* Pillar 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: 'center', padding: '64px 0' }}>
        <div>
          <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 29, lineHeight: 1.15, margin: '0 0 30px', color: '#141311' }}>
            Every alert, traced to the observation behind it
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {pillarText('Provenance on every score', 'See the observations, orbits, and covariance that produced each conjunction alert — reproducible months later.')}
            {pillarText('Native orbital renderers', 'Inspect orbits, ground tracks, and covariance ellipsoids in their natural form — no export required.')}
            {pillarText('Results that check themselves', 'A background reviewer flags stale ephemerides and untraceable numbers before they reach operators.')}
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', border: '1px solid #E9E3D5' }}>
          <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1100&q=72" alt="Earth observed from orbit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        </div>
      </div>

      {/* Pillar 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: 'center', padding: '44px 0 64px' }}>
        <div className="order-2 md:order-1" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', border: '1px solid #E9E3D5' }}>
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=72" alt="City lights seen from orbit at night" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        </div>
        <div className="order-1 md:order-2">
          <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 29, lineHeight: 1.15, margin: '0 0 30px', color: '#141311' }}>
            Fuses every sensor you feed it
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {pillarText('Optical, radar & RF', 'Ingest heterogeneous observations and fuse them into one continuously propagated catalog.')}
            {pillarText('Your sensors or ours', 'Connect a partner network or bring your own ground stations and telescopes.')}
            {pillarText('Always-current state', 'Propagation runs continuously; the catalog stays live across every session.')}
          </div>
        </div>
      </div>

      {/* Pillar 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: 'center', padding: '0 0 40px' }}>
        <div>
          <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 29, lineHeight: 1.15, margin: '0 0 30px', color: '#141311' }}>
            Pre-configured for the mission
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {pillarText('Conjunction, maneuver, breakup', 'Specialists for the operations you run every day, ready on day one.')}
            {pillarText('Built to extend', 'Save any workflow as a reusable playbook; connect the tools your team already runs.')}
            {pillarText('LEO to GEO', 'Tuned per regime, from the crowded low-orbit shells to the geostationary belt.')}
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', border: '1px solid #E9E3D5' }}>
          <img src="https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Satellite in orbit over Earth" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
