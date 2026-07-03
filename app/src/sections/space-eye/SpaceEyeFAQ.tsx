import { useState } from 'react'

const FAQS = [
  { q: 'What sensor data does Space Eye ingest?', a: 'Optical, radar, and RF observations from your own ground stations and telescopes or from partner networks. Space Eye fuses heterogeneous feeds into a single, continuously propagated catalog — no manual reconciliation required.' },
  { q: 'How is a collision-risk score produced?', a: 'Every score carries its provenance: the observations, the propagated orbits, the covariance, and the assumptions behind it. A background reviewer flags stale ephemerides and low-confidence tracks before an alert reaches an operator.' },
  { q: 'Where does Space Eye run, and is my data private?', a: 'Deploy in your own cloud or on-premise. Raw observation data and compute stay in your environment; you control access with SSO, SCIM, and role-based controls.' },
  { q: 'Does it replace my existing tools?', a: 'No. Space Eye is the workbench where your existing catalogs, flight-dynamics tools, and ground-segment systems work together. Connect them through connectors and keep what already works.' },
  { q: 'What orbital regimes are supported?', a: 'LEO through GEO, including the crowded low-orbit shells and the geostationary belt. Models are tuned per regime rather than applied uniformly.' },
  { q: 'How do we get started?', a: 'Pick a plan and create your account — start free with a single satellite or trial a paid tier, and we will screen your live constellation so you can see the alerts on real data. For mega-constellations, contact sales for a custom Enterprise setup.' },
]

export default function SpaceEyeFAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 40px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E4DDCE', paddingTop: 16, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A927F' }}>
        <span>Space Eye</span><span>[ 004 ]</span>
      </div>
      <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.015em', margin: '40px 0 34px', color: '#141311' }}>
        FAQs
      </h2>
      <div style={{ maxWidth: 840 }}>
        {FAQS.map((f, i) => {
          const isOpen = i === open
          return (
            <div key={f.q} style={{ borderBottom: '1px solid #E4DDCE' }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{ appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '24px 0', fontFamily: "'Hanken Grotesk',sans-serif" }}
              >
                <span style={{ fontSize: 19, fontWeight: 600, color: '#1A1917' }}>{f.q}</span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 22, color: 'var(--accent,#CC785C)', lineHeight: 1 }}>{isOpen ? '–' : '+'}</span>
              </button>
              <div style={{ display: isOpen ? 'block' : 'none', fontSize: 16, lineHeight: 1.62, color: '#5C5648', padding: '0 40px 26px 0', maxWidth: 720 }}>
                {f.a}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
