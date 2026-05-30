import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OverlineLabel from '@/components/OverlineLabel'
import { useVisibilityPause } from '@/hooks/useVisibilityPause'

gsap.registerPlugin(ScrollTrigger)

const ORBITS = [
  { radiusX: 10, radiusY: 4, tiltX: 0.3, tiltY: 0, speed: 0.005 },
  { radiusX: 7, radiusY: 3.5, tiltX: -0.2, tiltY: 0, speed: 0.008 },
  { radiusX: 12, radiusY: 3, tiltX: 0, tiltY: 0.2, speed: 0.004 },
  { radiusX: 6, radiusY: 2, tiltX: 0, tiltY: -0.3, speed: 0.01 },
]

const COLORS = [
  new THREE.Color('#00C8FF'),
  new THREE.Color('#7C3AED'),
  new THREE.Color('#F59E0B'),
  new THREE.Color('#00C8FF'),
]

const NODE_POSITIONS = [
  new THREE.Vector3(-5, 2, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, -2, 0),
]

const NODE_COLORS = ['#7500EA', '#5B9BFF', '#D4AF37']

const PARTICLES_PER_ORBIT = 150

function IntelligenceParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isVisible = useVisibilityPause(canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    const dpr = Math.min(window.devicePixelRatio, 2)
    renderer.setPixelRatio(dpr)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 25

    const particleGroups: THREE.Points[] = []
    const nodeMeshes: THREE.Mesh[] = []

    // Create particles for each orbit
    ORBITS.forEach((orbit, orbitIdx) => {
      const count = PARTICLES_PER_ORBIT
      const positions = new Float32Array(count * 3)
      const angles = new Float32Array(count)

      for (let i = 0; i < count; i++) {
        angles[i] = (i / count) * Math.PI * 2
        positions[i * 3] = 0
        positions[i * 3 + 1] = 0
        positions[i * 3 + 2] = 0
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('initialAngle', new THREE.BufferAttribute(angles, 1))

      const material = new THREE.PointsMaterial({
        color: COLORS[orbitIdx],
        size: 0.15,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      const points = new THREE.Points(geometry, material)
      points.userData = { orbitIdx, angles, orbit }
      scene.add(points)
      particleGroups.push(points)
    })

    // Create nodes
    NODE_POSITIONS.forEach((pos, i) => {
      const geometry = new THREE.SphereGeometry(0.5 + i * 0.1, 16, 16)
      const material = new THREE.MeshBasicMaterial({
        color: NODE_COLORS[i],
        transparent: true,
        opacity: 0.6,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.copy(pos)
      scene.add(mesh)
      nodeMeshes.push(mesh)
    })

    // Mouse tracking
    const mouse = { x: 0, y: 0 }
    const targetCamera = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Resize
    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Render loop
    let rafId = 0
    const render = (time: number) => {
      if (!isVisible) {
        rafId = requestAnimationFrame(render)
        return
      }

      const t = time * 0.001

      // Update particles
      particleGroups.forEach((points) => {
        const { angles, orbit } = points.userData
        const posAttr = points.geometry.attributes.position as THREE.BufferAttribute
        const positions = posAttr.array as Float32Array

        for (let i = 0; i < PARTICLES_PER_ORBIT; i++) {
          const angle = angles[i] + t * orbit.speed
          const x = Math.cos(angle) * orbit.radiusX
          const y = Math.sin(angle) * orbit.radiusY
          const z = Math.sin(angle * 2) * 2

          // Apply tilt
          const tiltedY = y * Math.cos(orbit.tiltX) - z * Math.sin(orbit.tiltX)
          const tiltedZ = y * Math.sin(orbit.tiltX) + z * Math.cos(orbit.tiltX)
          const tiltedX = x * Math.cos(orbit.tiltY) + tiltedZ * Math.sin(orbit.tiltY)
          const finalZ = -x * Math.sin(orbit.tiltY) + tiltedZ * Math.cos(orbit.tiltY)

          positions[i * 3] = tiltedX
          positions[i * 3 + 1] = tiltedY
          positions[i * 3 + 2] = finalZ
        }
        posAttr.needsUpdate = true
      })

      // Pulse nodes
      nodeMeshes.forEach((mesh, i) => {
        const scale = 0.9 + 0.25 * Math.sin(t * 2 + i)
        mesh.scale.setScalar(scale)
      })

      // Camera parallax
      targetCamera.x = mouse.x * 0.5
      targetCamera.y = mouse.y * 0.5
      camera.position.x += (targetCamera.x - camera.position.x) * 0.05
      camera.position.y += (targetCamera.y - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(render)
    }

    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      ro.disconnect()
      renderer.dispose()
      particleGroups.forEach((p) => {
        p.geometry.dispose()
        ;(p.material as THREE.Material).dispose()
      })
      nodeMeshes.forEach((m) => {
        m.geometry.dispose()
        ;(m.material as THREE.Material).dispose()
      })
    }
  }, [isVisible])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.4,
      }}
    />
  )
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#7500EA" strokeWidth="1.5">
        <circle cx="16" cy="16" r="6" />
        <path d="M16 2 C16 2 24 8 24 16 C24 24 16 30 16 30" />
        <path d="M16 2 C16 2 8 8 8 16 C8 24 16 30 16 30" />
      </svg>
    ),
    title: 'Predictive Collision Avoidance',
    body: "Spacei's AI predicts conjunction events days in advance with 94% accuracy. Each alert includes collision probability, miss distance, recommended maneuver parameters, and operational impact assessment — prioritized by your mission requirements.",
    accent: '#7500EA',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#00C8FF" strokeWidth="1.5">
        <path d="M4 16 H8 L10 10 L14 22 L18 8 L20 16 H28" />
        <circle cx="28" cy="16" r="2" fill="#00C8FF" />
      </svg>
    ),
    title: 'Autonomous Anomaly Detection',
    body: 'Continuous monitoring of every tracked satellite against 50+ behavioral models. The AI flags attitude deviations, unexpected maneuvers, power anomalies, and communication gaps — learning normal patterns for each spacecraft and alerting only on genuine anomalies.',
    accent: '#00C8FF',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5B9BFF" strokeWidth="1.5">
        <path d="M6 24 C6 24 6 18 12 18 C16 18 16 22 16 22" />
        <path d="M6 24 L6 28 L22 28 L22 18" />
        <path d="M20 8 L24 4 L28 8" />
        <path d="M24 4 L24 14" />
        <circle cx="24" cy="16" r="1.5" fill="#5B9BFF" />
      </svg>
    ),
    title: 'Natural Language Mission Control',
    body: "Ask Spacei anything about your constellation in plain English. 'What's my collision risk for the next 72 hours?' 'Show me all anomalies in GEO last week.' The AI understands orbital mechanics, parses your intent, and delivers precise answers with visualizations.",
    accent: '#5B9BFF',
  },
]

export default function IntelligenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<HTMLDivElement>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    if (isMobile || !sectionRef.current || !blocksRef.current) return

    const blocks = blocksRef.current.children

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 1,
      },
    })

    tl.fromTo(blocks[0], { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.33, ease: 'power3.out' })
    tl.fromTo(blocks[1], { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.33, ease: 'power3.out' }, 0.33)
    tl.fromTo(blocks[2], { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.34, ease: 'power3.out' }, 0.66)

    return () => { tl.kill() }
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      id="intelligence"
      className="relative min-h-screen bg-deep-space overflow-hidden"
    >
      <IntelligenceParticlesCanvas />

      <div className="relative py-[120px]" style={{ zIndex: 10 }}>
        <div className="content-container">
          <div className="text-center mb-16">
            <OverlineLabel className="text-center">ARTIFICIAL INTELLIGENCE</OverlineLabel>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-white">
              Intelligence, Not Just Data
            </h2>
          </div>

          <div ref={blocksRef} className="flex flex-col gap-12 max-w-[480px] ml-auto md:ml-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="backdrop-card p-8 rounded border border-white/[0.08]"
                style={{ borderLeft: `3px solid ${feature.accent}` }}
              >
                {feature.icon}
                <h4 className="mt-4 text-xl font-normal text-white">{feature.title}</h4>
                <p className="mt-3 text-base text-text-secondary leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
