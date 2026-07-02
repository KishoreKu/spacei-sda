import { useState } from 'react'

const TESTIMONIALS = [
  { quote: 'Space Eye collapsed a workflow that used to span three tools and a spreadsheet into a single screen. We act on the two conjunctions that matter instead of triaging forty.', role: 'Director of Space Operations', org: 'LEO constellation operator' },
  { quote: 'The provenance on every alert is the difference. When we escalate a maneuver decision, we can show exactly which observations drove it — that trust is what got operators to actually use it.', role: 'Head of Flight Dynamics', org: 'Commercial satellite fleet' },
  { quote: 'It flagged a fragmentation event from an RF signature change before it showed up in any public catalog. That lead time is worth the whole platform.', role: 'Mission Assurance Lead', org: 'Government space agency' },
  { quote: 'We connected our own ground stations in an afternoon. Space Eye handled the sensor fusion we had been putting off building for two years.', role: 'VP Engineering', org: 'Space situational awareness startup' },
  { quote: 'Underwriting orbital risk finally has a data source we can defend. The calibrated uncertainty is exactly what our actuaries needed.', role: 'Space Risk Lead', org: 'Specialty insurer' },
]

export default function SpaceEyeTestimonials() {
  const [i, setI] = useState(0)
  const t = TESTIMONIALS[i]

  return (
    <section style={{ maxWidth: 1000, margin: '0 auto', padding: '96px 40px 40px', textAlign: 'center' }}>
      <div style={{ fontFamily: "'Newsreader',serif", fontWeight: 300, fontStyle: 'italic', fontSize: 30, lineHeight: 1.4, color: '#26241F', minHeight: 168, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        &ldquo;{t.quote}&rdquo;
      </div>
      <div style={{ marginTop: 22, fontSize: 15, fontWeight: 600, color: '#1A1917' }}>{t.role}</div>
      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: '.06em', color: '#9A927F', marginTop: 5, textTransform: 'uppercase' }}>{t.org}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginTop: 32 }}>
        <button
          onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          aria-label="Previous testimonial"
          style={{ appearance: 'none', cursor: 'pointer', width: 40, height: 40, borderRadius: '50%', border: '1px solid #DAD3C5', background: '#fff', color: '#5C5648', fontSize: 15 }}
        >
          &larr;
        </button>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, color: '#9A927F' }}>{i + 1} / {TESTIMONIALS.length}</span>
        <button
          onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
          aria-label="Next testimonial"
          style={{ appearance: 'none', cursor: 'pointer', width: 40, height: 40, borderRadius: '50%', border: '1px solid #DAD3C5', background: '#fff', color: '#5C5648', fontSize: 15 }}
        >
          &rarr;
        </button>
      </div>
    </section>
  )
}
