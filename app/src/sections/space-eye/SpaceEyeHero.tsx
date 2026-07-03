import { useEffect, useRef, useState } from 'react'

const HERO_VIDEO_SRC = 'https://videos.pexels.com/video-files/8733055/8733055-hd_1280_720_30fps.mp4'
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
          <a href="#pricing" style={{ fontSize: 15, fontWeight: 600, color: '#FBF9F3', background: 'var(--accent,#CC785C)', padding: '14px 26px', borderRadius: 9, textDecoration: 'none' }}>
            Get started
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

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '8px 24px 0' }}>
        <div ref={videoWrapRef} onClick={onOpenFilm} style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', background: '#000', borderRadius: 28, overflow: 'hidden', boxShadow: '0 40px 80px -30px rgba(20,19,17,.35)' }}>
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
    </>
  )
}
