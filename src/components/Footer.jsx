import { contact, copy, resumePdfUrl } from '../data/resume'

const email = contact.find((c) => c.id === 'email')

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer__cta">
          <h2 className="footer__title">{copy.footer.title}</h2>
          <p className="footer__subtitle">{copy.footer.subtitle}</p>
          <a href={email.href} className="footer__mail">
            {email.label}
          </a>
          <div className="footer__actions">
            <a href={resumePdfUrl} className="btn btn--outline" download>
              {copy.footer.cv}
            </a>
          </div>
        </div>

        <ul className="footer__socials">
          {contact.map((c) => (
            <li key={c.id}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="footer__social"
                aria-label={c.label}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </footer>
  )
}
