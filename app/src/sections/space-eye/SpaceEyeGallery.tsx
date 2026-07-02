import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(Observer, ScrollTrigger)

const IMAGES = [
  { src: 'https://images-assets.nasa.gov/image/KSC-20170418-PH_AWG04_0023/KSC-20170418-PH_AWG04_0023~medium.jpg', alt: 'NASA rocket launch against bright sky' },
  { src: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80', alt: 'Deep space field' },
  { src: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=900&q=80', alt: 'Star trails' },
  { src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80', alt: 'Earth observed from orbit' },
  { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80', alt: 'City lights seen from orbit at night' },
  { src: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Satellite in orbit over Earth' },
  { src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80', alt: 'Reentry debris trail' },
  { src: 'https://images-assets.nasa.gov/image/iss056e130478/iss056e130478~medium.jpg', alt: 'CubeSat satellite deployment from the ISS' },
]

// ─── Tuning Constants (matched to Claude Science) ─────────────────────────
const ROTATION_ANGLE    = 34       // angular spacing between cards (degrees)
const CARD_Y_SPACING    = 0.62     // vertical card offset multiplier
const EDGE_OFFSET       = 2.8      // vertical edge offset multiplier
const ORBIT_DEPTH       = 42       // orbit radius in em units
const AUTO_SPEED        = 0.002    // automatic rotation speed
const SCROLL_SPEED      = 0.02     // scroll/drag speed multiplier
const DRAG_MULTIPLIER   = 11       // extra sensitivity for drag gestures
const SCROLL_EASE       = 0.05     // speed lerp (lower = smoother glide)
const MAX_DELTA         = 60       // clamp wheel bursts per frame
const MAX_SPEED         = 0.25     // maximum spin speed
const EDGE_SCALE        = 0.7      // edge scale distance
const MIN_SCALE         = 0.7      // smallest scale for distant cards
const BACK_FADE         = 0.85     // rear cards blend toward bg
const BACK_BLUR         = 0.55     // max blur in em
const BLUR_BIAS         = 2        // >1 keeps front crisp, blur only rear
const HELICES           = 2        // double helix
const PHASE_STEP        = 360 / HELICES  // 180° offset
const HANDEDNESS        = -1       // right-handed helix
const CULL_SCALE        = 0.05     // hide cards below this scale

export default function SpaceEyeGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list) return

    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const actualAutoSpeed = reduceMotion ? 0 : AUTO_SPEED

    let inputObserver: Observer | undefined
    let scrollDelta = 0

    const state = {
      amount: 0,
      progress: 0,
      velocity: actualAutoSpeed,
      direction: 1,
      cardHeight: 0,
      cardGap: 0,
      em: 16,
      isActive: false,
      cards: [] as HTMLElement[],
    }

    // ─── Card amount calculation ──────────────────────────────────
    function getCardAmount() {
      const containerHalfHeight = container!.offsetHeight * 0.5
      const edgeOffsetDistance = state.cardHeight * EDGE_OFFSET
      const fadeDistance = state.cardHeight * EDGE_SCALE
      const neededDistance = containerHalfHeight + edgeOffsetDistance + fadeDistance
      const cardsPerSide = Math.ceil(neededDistance / state.cardGap) + 1
      const neededAmount = cardsPerSide * 2 + 1
      const batchCount = Math.ceil(neededAmount / IMAGES.length)
      return IMAGES.length * batchCount
    }

    // ─── Edge scale easing ────────────────────────────────────────
    const edgeEase = gsap.parseEase('power2.inOut')

    function getEdgeScale(y: number) {
      const containerHalfHeight = container!.offsetHeight * 0.5
      const edgeOffsetDistance = state.cardHeight * EDGE_OFFSET
      const fadeDistance = state.cardHeight * EDGE_SCALE
      const distanceFromCenter = Math.abs(y)
      const fadeStart = containerHalfHeight + edgeOffsetDistance
      const progress = gsap.utils.clamp(0, 1, (fadeStart - distanceFromCenter) / fadeDistance)
      return edgeEase(progress)
    }

    // ─── Build cards (double helix) ───────────────────────────────
    function buildCards() {
      list!.innerHTML = ''

      // Measure card size
      const measureCard = document.createElement('div')
      measureCard.className = 'helix-item'
      measureCard.innerHTML = '<div class="helix-card"><div style="width:100%;height:100%"></div></div>'
      list!.appendChild(measureCard)
      state.cardHeight = measureCard.offsetHeight
      state.cardGap = state.cardHeight * CARD_Y_SPACING
      state.em = parseFloat(getComputedStyle(list!).fontSize)
      state.amount = getCardAmount()
      list!.innerHTML = ''

      // Build helices * amount cards
      for (let h = 0; h < HELICES; h++) {
        const phase = h * PHASE_STEP
        for (let i = 0; i < state.amount; i++) {
          const imgData = IMAGES[i % IMAGES.length]
          const card = document.createElement('div')
          card.className = 'helix-item'
          card.dataset.index = String(i)
          card.dataset.phase = String(phase)
          card.innerHTML = `
            <div class="helix-card">
              <img src="${imgData.src}" alt="${imgData.alt}" class="helix-visual" loading="lazy" draggable="false" />
            </div>
          `
          list!.appendChild(card)
        }
      }
      state.cards = Array.from(list!.querySelectorAll<HTMLElement>('.helix-item'))
    }

    // ─── Render ───────────────────────────────────────────────────
    function render() {
      const radius = ORBIT_DEPTH * state.em

      state.cards.forEach((card) => {
        const startIndex = parseFloat(card.dataset.index || '0')
        const phase = parseFloat(card.dataset.phase || '0')
        const loopIndex = (((startIndex + state.progress) % state.amount) + state.amount) % state.amount
        const index = loopIndex > state.amount * 0.5 ? loopIndex - state.amount : loopIndex
        const angleDeg = HANDEDNESS * index * ROTATION_ANGLE + phase
        const angleRad = (angleDeg * Math.PI) / 180
        const center = 1 - Math.min(Math.abs(index) / (state.amount * 0.5), 1)
        const y = index * state.cardGap
        const baseScale = MIN_SCALE + center * (1 - MIN_SCALE)
        const scale = baseScale * getEdgeScale(y)
        const backAmount = gsap.utils.clamp(0, 1, (1 - Math.cos(angleRad)) * 0.5)
        const recede = backAmount * BACK_FADE
        const blur = Math.pow(backAmount, BLUR_BIAS) * BACK_BLUR

        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: Math.sin(angleRad) * radius,
          y,
          z: (Math.cos(angleRad) - 1) * radius,
          rotateY: angleDeg,
          scale,
          filter: blur > 0.001 ? `blur(${blur}em)` : 'none',
          autoAlpha: scale < CULL_SCALE ? 0 : 1,
          zIndex: Math.round(center * 1000),
          '--recede': recede,
        } as gsap.TweenVars)
      })
    }

    // ─── Tick (called every GSAP frame) ───────────────────────────
    function tick() {
      if (!state.isActive) {
        scrollDelta = 0
        return
      }
      if (scrollDelta) {
        const step = gsap.utils.clamp(-MAX_DELTA, MAX_DELTA, scrollDelta)
        state.direction = step > 0 ? 1 : -1
        state.velocity = gsap.utils.clamp(
          -MAX_SPEED,
          MAX_SPEED,
          state.velocity + (step * SCROLL_SPEED) / 100
        )
        scrollDelta = 0
      }
      const targetVelocity = actualAutoSpeed * state.direction
      state.velocity = gsap.utils.interpolate(state.velocity, targetVelocity, SCROLL_EASE)
      state.progress += state.velocity
      render()
    }

    // ─── Input handling ───────────────────────────────────────────
    function handleInput(self: Observer) {
      if (!state.isActive) return
      const e = self.event as Event
      const drag = Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : self.deltaY
      const delta = e.type === 'wheel' ? self.deltaY : drag * DRAG_MULTIPLIER
      scrollDelta += delta
    }

    function setActive(isActive: boolean) {
      state.isActive = isActive
      if (!inputObserver) return
      if (isActive) inputObserver.enable()
      else inputObserver.disable()
    }

    // ─── Build & start ────────────────────────────────────────────
    buildCards()
    render()

    inputObserver = Observer.create({
      target: window,
      type: coarsePointer ? 'wheel' : 'wheel,touch,pointer',
      preventDefault: false,
      lockAxis: true,
      onChange: handleInput,
      onPress: () => { container!.style.cursor = 'grabbing' },
      onRelease: () => { container!.style.cursor = 'grab' },
    })

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => setActive(true),
      onEnterBack: () => setActive(true),
      onLeave: () => setActive(false),
      onLeaveBack: () => setActive(false),
    })

    setActive(ScrollTrigger.isInViewport(container!))
    gsap.ticker.add(tick)

    // Touch scroll coupling
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      if (state.isActive) scrollDelta += (y - lastScrollY)
      lastScrollY = y
    }
    if (coarsePointer) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    // Resize handler (only on width change)
    let lastWidth = window.innerWidth
    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      if (window.innerWidth === lastWidth) return
      lastWidth = window.innerWidth
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        buildCards()
        render()
        ScrollTrigger.refresh()
      }, 150)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      gsap.ticker.remove(tick)
      inputObserver?.kill()
      scrollTrigger.kill()
      window.removeEventListener('resize', handleResize)
      if (coarsePointer) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <>
      {/* Scoped styles */}
      <style>{`
        .helix-wrap {
          --helix-bg: #F9F9F7;
          cursor: grab;
          touch-action: none;
          width: 100%;
          height: 80dvh;
          max-height: 55rem;
          position: relative;
          overflow: clip;
        }
        .helix-collection {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .helix-list {
          font-size: clamp(0.62em, 0.85vw, 1.35em);
          width: 100%;
          height: 100%;
          perspective: 75em;
          transform-style: preserve-3d;
          position: relative;
        }
        .helix-item {
          transform-style: preserve-3d;
          backface-visibility: visible;
          will-change: transform, filter;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .helix-card {
          aspect-ratio: 3 / 2;
          width: 22em;
          border-radius: 0.9em;
          background: #fff;
          pointer-events: none;
          user-select: none;
          position: relative;
          overflow: hidden;
        }
        .helix-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: var(--helix-bg);
          opacity: var(--recede, 0);
          pointer-events: none;
        }
        .helix-visual {
          object-fit: cover;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .helix-vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(to bottom, var(--helix-bg) 0%, transparent 18%, transparent 82%, var(--helix-bg) 100%),
            linear-gradient(to right, var(--helix-bg) 0%, transparent 9%, transparent 91%, var(--helix-bg) 100%);
        }
        @media (pointer: coarse) {
          .helix-wrap {
            touch-action: pan-y pinch-zoom;
            cursor: auto;
          }
        }
        @media (max-width: 768px) {
          .helix-list {
            font-size: clamp(7px, 2.3vw, 13px);
          }
        }
      `}</style>

      <div ref={containerRef} className="helix-wrap">
        <div className="helix-collection">
          <div ref={listRef} className="helix-list" />
        </div>
        <div className="helix-vignette" />
      </div>
    </>
  )
}
