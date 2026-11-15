import { useEffect } from 'react'

const ARROW = [
  'o..........',
  'oo.........',
  'o@o........',
  'o@@o.......',
  'o@@@o......',
  'o@@@@o.....',
  'o@@@@@o....',
  'o@@@@@@o...',
  'o@@@@@@@o..',
  'o@@@@@o....',
  'o@@o@@o....',
  'o@o.o@@o...',
  'oo..o@@o...',
  'o....o@@o..',
  '.....o@@o..',
  '......oo...',
]

const PX = 2
const OUTLINE = '#0b0d0c'

const cursorUrl = (fill) => {
  const rects = []
  ARROW.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      if (ch === '.') return
      const color = ch === 'o' ? OUTLINE : fill
      rects.push(`<rect x="${x * PX}" y="${y * PX}" width="${PX}" height="${PX}" fill="${color}"/>`)
    }),
  )
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${11 * PX}" height="${16 * PX}" viewBox="0 0 ${11 * PX} ${16 * PX}" shape-rendering="crispEdges">${rects.join('')}</svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 0 0, auto`
}

const SHARD_COLORS = ['#7dffb1', '#ff5fd2', '#eafff2']

const burst = (x, y) => {
  const ring = document.createElement('span')
  ring.className = 'fx-ring'
  ring.style.left = `${x}px`
  ring.style.top = `${y}px`
  document.body.appendChild(ring)

  for (let i = 0; i < 8; i++) {
    const shard = document.createElement('span')
    const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4
    const dist = 26 + Math.random() * 18
    shard.className = 'fx-shard'
    shard.style.left = `${x}px`
    shard.style.top = `${y}px`
    shard.style.background = SHARD_COLORS[i % SHARD_COLORS.length]
    shard.style.setProperty('--dx', `${Math.cos(angle) * dist}px`)
    shard.style.setProperty('--dy', `${Math.sin(angle) * dist}px`)
    document.body.appendChild(shard)
    setTimeout(() => shard.remove(), 500)
  }

  setTimeout(() => ring.remove(), 450)
}

export default function PixelCursor() {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--cursor-default', cursorUrl('#7dffb1'))
    root.style.setProperty('--cursor-pointer', cursorUrl('#ff5fd2'))

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onDown = (event) => {
      if (reduce.matches) return
      burst(event.clientX, event.clientY)
    }

    window.addEventListener('pointerdown', onDown)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      root.style.removeProperty('--cursor-default')
      root.style.removeProperty('--cursor-pointer')
    }
  }, [])

  return null
}
