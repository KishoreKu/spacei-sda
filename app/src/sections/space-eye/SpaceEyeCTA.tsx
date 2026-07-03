export default function SpaceEyeCTA() {
  return (
    <section id="cta" style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 40px 96px' }}>
      <div className="px-6 sm:px-14" style={{ background: '#F2EFE7', border: '1px solid #E7E0D1', borderRadius: 22, paddingTop: 76, paddingBottom: 76, textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.015em', margin: '0 auto 20px', color: '#141311', maxWidth: 620 }}>
          Keep your orbit navigable.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5C5648', maxWidth: 520, margin: '0 auto 34px' }}>
          Request access and we'll stand up an environment against your catalog within a week — then screen your live constellation so you can see the alerts on real data.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:hello@spacei.us" style={{ fontSize: 15, fontWeight: 600, color: '#FBF9F3', background: 'var(--accent,#CC785C)', padding: '15px 28px', borderRadius: 9, textDecoration: 'none' }}>
            Request access
          </a>
          <a href="mailto:sales@spacei.us" style={{ fontSize: 15, fontWeight: 600, color: '#141311', background: '#FFF', border: '1px solid #DAD3C5', padding: '15px 28px', borderRadius: 9, textDecoration: 'none' }}>
            Contact sales
          </a>
        </div>
      </div>
    </section>
  )
}
