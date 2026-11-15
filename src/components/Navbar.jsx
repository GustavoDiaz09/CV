import { useEffect, useState } from 'react'
import { navLinks, profile, copy, resumePdfUrl } from '../data/resume'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__brand" onClick={close}>
          {profile.shortName}
        </a>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`nav__links ${open ? 'nav__links--open' : ''}`}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href={resumePdfUrl} className="nav__cta" download onClick={close}>
            {copy.nav.cv}
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="menu-principal"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>
    </header>
  )
}
