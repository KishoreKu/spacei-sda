import { useState } from 'react'

const TABS = [
  {
    label: 'Collision avoidance',
    title: 'Screen your whole constellation, act on the few events that matter',
    body: 'Space Eye propagates the entire tracked population against your assets continuously, ranks conjunctions by calibrated probability, and attaches the maneuver window and fuel cost to each one.',
    img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1100&q=72',
  },
  {
    label: 'Maneuver detection',
    title: 'Know not just where an object is, but what it is doing',
    body: 'Detect and characterize maneuvers across the catalog in near real time, separating routine station-keeping from behavior that warrants a closer look.',
    img: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1100',
  },
  {
    label: 'RF & anomaly',
    title: 'Flag what changes before it becomes a problem',
    body: 'Fuse RF and optical signatures to surface objects behaving outside their pattern — spectrum shifts, unexpected burns, or fragmentation events.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=72',
  },
  {
    label: 'Debris & reentry',
    title: 'Track the debris field and forecast reentry windows',
    body: 'Maintain custody of fragments and forecast decay and reentry with uncertainty you can actually plan around.',
    img: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1100&q=72',
  },
]

export default function SpaceEyeUseCases() {
  const [tab, setTab] = useState(0)
  const active = TABS[tab]

  return (
    <section id="usecases" style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 40px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E4DDCE', paddingTop: 16, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A927F' }}>
        <span>Space Eye</span><span>[ 003 ]</span>
      </div>
      <div style={{ maxWidth: 720, margin: '44px 0 34px' }}>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.015em', margin: '0 0 18px', color: '#141311' }}>
          How teams use Space Eye
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#5C5648', margin: 0 }}>
          Pre-configured for the operations that keep orbit navigable. When a problem spans regimes and sensors, one environment carries it end to end.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, borderBottom: '1px solid #E4DDCE', flexWrap: 'wrap' }}>
        {TABS.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            style={{ appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 2px 14px', fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 15, fontWeight: 600, position: 'relative' }}
          >
            <span style={{ color: i === tab ? '#141311' : '#8A857A' }}>{t.label}</span>
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: 'var(--accent,#CC785C)', opacity: i === tab ? 1 : 0 }} />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: 'center', padding: '48px 0 8px' }}>
        <div>
          <h3 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 31, lineHeight: 1.14, margin: '0 0 18px', color: '#141311' }}>
            {active.title}
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.62, color: '#5C5648', margin: '0 0 26px' }}>{active.body}</p>
          <a href="#cta" style={{ fontSize: 15, fontWeight: 600, color: '#141311', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            See it on live data <span style={{ color: 'var(--accent,#CC785C)' }}>&rarr;</span>
          </a>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', border: '1px solid #E9E3D5' }}>
          <img src={active.img} alt="Space Eye use case" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
