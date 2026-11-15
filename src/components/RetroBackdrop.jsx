import { useEffect, useRef } from 'react'

const BEAT = 60 / 96
const RING_INTERVAL = BEAT * 2
const MAX_RINGS = 6

export default function RetroBackdrop() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const rand = (a, b) => a + Math.random() * (b - a)

    let width = 0
    let height = 0
    let frame = 0
    let last = 0
    let time = 0
    let nextRing = 0
    let blocks = []
    let motes = []
    let rings = []

    const seed = () => {
      const count = Math.min(60, Math.max(20, Math.round((width * height) / 30000)))
      motes = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        r: rand(0.6, 1.5),
        speed: rand(4, 13),
        phase: rand(0, Math.PI * 2),
        alpha: rand(0.2, 0.6),
      }))
      blocks = Array.from({ length: 8 }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        w: Math.round(rand(3, 7)) * 8,
        h: Math.round(rand(1, 3)) * 8,
        speed: rand(5, 12),
        alpha: rand(0.03, 0.065),
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const update = (dt) => {
      time += dt
      blocks.forEach((b) => {
        b.x -= b.speed * dt
        if (b.x + b.w < 0) {
          b.x = width + rand(0, 80)
          b.y = rand(0, height)
        }
      })
      motes.forEach((m) => {
        m.y -= m.speed * dt
        m.x += Math.sin(time + m.phase) * 0.25
        if (m.y < -4) {
          m.y = height + 4
          m.x = rand(0, width)
        }
      })
      if (time >= nextRing) {
        nextRing = time + RING_INTERVAL
        rings.push({ x: rand(0.1, 0.9) * width, y: rand(0.1, 0.9) * height, life: 0 })
        if (rings.length > MAX_RINGS) rings.shift()
      }
      rings.forEach((r) => {
        r.life += dt / 2.4
      })
      rings = rings.filter((r) => r.life < 1)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      blocks.forEach((b) => {
        ctx.fillStyle = `rgba(125, 255, 177, ${b.alpha})`
        ctx.fillRect(Math.round(b.x / 8) * 8, Math.round(b.y / 8) * 8, b.w, b.h)
      })

      motes.forEach((m) => {
        const pulse = 0.6 + 0.4 * Math.sin(time * 1.3 + m.phase)
        ctx.fillStyle = `rgba(234, 255, 242, ${m.alpha * pulse})`
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
        ctx.fill()
      })

      rings.forEach((r) => {
        const eased = 1 - Math.pow(1 - r.life, 3)
        ctx.strokeStyle = `rgba(255, 95, 210, ${0.1 * (1 - r.life)})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(r.x, r.y, 14 + 110 * eased, 0, Math.PI * 2)
        ctx.stroke()
      })
    }

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      update(dt)
      draw()
      frame = requestAnimationFrame(loop)
    }

    const start = () => {
      if (!frame) {
        last = performance.now()
        frame = requestAnimationFrame(loop)
      }
    }

    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }

    const onVisibility = () => (document.hidden ? stop() : !reduceQuery.matches && start())

    resize()

    if (reduceQuery.matches) {
      update(8)
      draw()
    } else {
      start()
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="backdrop" aria-hidden="true" />
}
