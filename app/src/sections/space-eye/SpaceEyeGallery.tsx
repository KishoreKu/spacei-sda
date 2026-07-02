import { useEffect, useRef, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80', alt: 'Night sky over mountains' },
  { src: 'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_640.jpg', alt: 'Orion nebula' },
  { src: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80', alt: 'Deep space field' },
  { src: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=900&q=80', alt: 'Star trails' },
  { src: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80', alt: 'Earth from orbit' },
  { src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80', alt: 'Earth observed from orbit' },
  { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80', alt: 'City lights seen from orbit at night' },
  { src: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Satellite in orbit over Earth' },
  { src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80', alt: 'Reentry debris trail' },
  { src: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=900&q=80', alt: 'Rocket launch' },
  { src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80', alt: 'Galaxy field' },
]

const WHEEL_COOLDOWN_MS = 550

export default function SpaceEyeGallery() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const lastWheelRef = useRef(0)

  useEffect(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap())
    api.on('select', () => setSelected(api.selectedScrollSnap()))
  }, [api])

  const handleWheel = (e: React.WheelEvent) => {
    if (!api) return
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
    if (Math.abs(delta) < 8) return
    e.preventDefault()
    const now = Date.now()
    if (now - lastWheelRef.current < WHEEL_COOLDOWN_MS) return
    lastWheelRef.current = now
    if (delta > 0) api.scrollNext()
    else api.scrollPrev()
  }

  return (
    <div style={{ maxWidth: 1180, margin: '16px auto 8px', padding: '0 40px' }}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: 'start', duration: 20 }}
        className="group"
        onWheel={handleWheel}
      >
        <CarouselContent>
          {IMAGES.map((img, i) => (
            <CarouselItem key={i} className="basis-full md:basis-1/2 xl:basis-1/3">
              <div
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid #E9E3D5',
                  boxShadow: '0 24px 50px -24px rgba(20,19,17,.4)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" style={{ left: -6, borderColor: '#DAD3C5', background: '#fff', color: '#1A1917' }} />
        <CarouselNext className="hidden sm:flex" style={{ right: -6, borderColor: '#DAD3C5', background: '#fff', color: '#1A1917' }} />
      </Carousel>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 22 }}>
        {IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            style={{
              width: i === selected ? 20 : 7,
              height: 7,
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === selected ? 'var(--accent, #CC785C)' : '#DED6C4',
              transition: 'width 200ms ease, background 200ms ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
