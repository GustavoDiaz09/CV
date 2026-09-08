import { useEffect, useState } from 'react'
import { navLinks } from '../data/resume'
import Icon from './Icon'

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

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">GD</span>
          <span className="nav__brand-text">Gustavo Díaz</span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="nav__cta" onClick={() => setOpen(false)}>
            Contáctame
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
