import { useEffect, useRef, useState } from 'react'

const HERO_VIDEO_SRC = 'https://videos.pexels.com/video-files/2062566/2062566-hd_1920_1080_24fps.mp4'
const HERO_POSTER_SRC = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=55'

interface SpaceEyeHeroProps {
  onOpenFilm: () => void
}

export default function SpaceEyeHero({ onOpenFilm }: SpaceEyeHeroProps) {
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const [videoVisible, setVideoVisible] = useState(false)

  useEffect(() => {
    const el = videoWrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header style={{ maxWidth: 940, margin: '0 auto', padding: '74px 40px 46px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent,#CC785C)', marginBottom: 26 }}>
          Space Eye · Space Domain Awareness
        </div>
        <h1 style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 64, lineHeight: 1.03, letterSpacing: '-0.02em', margin: '0 auto 24px', maxWidth: 760, color: '#141311' }}>
          Your command center for everything in orbit
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#5C5648', maxWidth: 600, margin: '0 auto 34px' }}>
          Space Eye fuses every sensor feed into one live catalog, predicts collision risk in real time, and traces every alert back to the observation behind it — so your operators act on intelligence, not spreadsheets.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#cta" style={{ fontSize: 15, fontWeight: 600, color: '#FBF9F3', background: 'var(--accent,#CC785C)', padding: '14px 26px', borderRadius: 9, textDecoration: 'none' }}>
            Request access
          </a>
          <button
            onClick={onOpenFilm}
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 15, fontWeight: 600, color: '#1A1917', background: '#FFF', border: '1px solid #E1DBCD', padding: '14px 22px', borderRadius: 9, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 9 }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', background: 'var(--accent,#CC785C)', color: '#fff', fontSize: 8 }}>
              &#9654;
            </span>
            Watch the film
          </button>
        </div>
      </header>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '8px 40px 0' }}>
        <div style={{ position: 'relative', borderRadius: 22, padding: '34px 34px 0', overflow: 'hidden', background: 'radial-gradient(120% 130% at 50% 0%, #E6EBDD 0%, #EEEDE2 45%, #FBFAF6 100%)' }}>
          <div style={{ position: 'relative', margin: '0 auto', maxWidth: 1000, borderRadius: '14px 14px 0 0', overflow: 'hidden', border: '1px solid rgba(20,19,17,.1)', borderBottom: 'none', boxShadow: '0 -1px 0 rgba(255,255,255,.6) inset, 0 40px 80px -30px rgba(20,19,17,.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '12px 16px', background: '#141311' }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#E5675B' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#E7B14B' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#5FA860' }} />
              <span style={{ marginLeft: 14, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#8A8578', letterSpacing: '.04em' }}>
                spaceeye — live catalog
              </span>
            </div>
            <div ref={videoWrapRef} onClick={onOpenFilm} style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', background: '#000' }}>
              <video
                {...(videoVisible ? { src: HERO_VIDEO_SRC } : {})}
                poster={HERO_POSTER_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg,rgba(20,19,17,.05),rgba(20,19,17,.28))' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 66, height: 66, borderRadius: '50%', background: 'rgba(255,255,255,.94)', color: '#141311', fontSize: 19, paddingLeft: 4, boxShadow: '0 10px 30px rgba(0,0,0,.28)' }}>
                  &#9654;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
