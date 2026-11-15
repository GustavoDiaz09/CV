import { useEffect } from 'react'

const PANEL_SELECTOR = '.hero, .section, .footer'

export default function PanelFade() {
  useEffect(() => {
    const query = window.matchMedia('(min-width: 761px) and (hover: hover)')
    const root = document.documentElement
    let observer = null

    const enable = () => {
      root.classList.add('panels')
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            entry.target.dataset.active =
              entry.isIntersecting && entry.intersectionRatio >= 0.6 ? 'true' : 'false'
          }),
        { threshold: [0, 0.6, 1] },
      )
      document.querySelectorAll(PANEL_SELECTOR).forEach((panel) => observer.observe(panel))
    }

    const disable = () => {
      root.classList.remove('panels')
      if (observer) observer.disconnect()
      observer = null
      document.querySelectorAll(PANEL_SELECTOR).forEach((panel) => delete panel.dataset.active)
    }

    const sync = () => (query.matches ? enable() : disable())

    sync()
    query.addEventListener('change', sync)
    return () => {
      query.removeEventListener('change', sync)
      disable()
    }
  }, [])

  return null
}
