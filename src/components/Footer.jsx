import { profile, contact } from '../data/resume'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer__cta">
          <h2 className="footer__title">¿Trabajamos juntos?</h2>
          <p className="footer__subtitle">
            Si buscas un desarrollador web con ganas de aprender y crecer, estaré encantado de
            conversar.
          </p>
          <a
            href={contact[0].href}
            className="btn btn--light"
            target="_blank"
            rel="noreferrer"
          >
            Escríbeme un correo
            <Icon name="mail" size={18} />
          </a>
        </div>

        <div className="footer__socials">
          {contact.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              className="footer__social"
              aria-label={c.label}
            >
              <Icon name={c.icon} size={20} />
              <span>{c.label}</span>
            </a>
          ))}
        </div>

        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Hecho con React</span>
        </div>
      </div>
    </footer>
  )
}
