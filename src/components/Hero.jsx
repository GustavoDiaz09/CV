import { profile, contact } from '../data/resume'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__ring" aria-hidden="true" />

        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__dot" />
            {profile.university}
          </span>
          <h1 className="hero__name">
            Gustavo Alonso
            <span className="hero__name-accent">Díaz Mercado</span>
          </h1>
          <h2 className="hero__role">{profile.role}</h2>
          <p className="hero__intro">{profile.summary}</p>

          <div className="hero__actions">
            <a href="#proyectos" className="btn btn--primary">
              Ver proyectos
              <Icon name="arrowDown" size={18} />
            </a>
            <a href="#contacto" className="btn btn--ghost">
              Contactar
            </a>
          </div>

          <div className="hero__contact">
            {contact.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="hero__contact-link"
                title={c.label}
              >
                <Icon name={c.icon} size={20} />
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__card">
            <div className="hero__img-wrap">
              <img className="hero__img" src={profile.photo} alt={`Foto de ${profile.name}`} />
            </div>
            <div className="hero__card-footer">
              <span className="hero__status">
                <span className="hero__status-dot" />
                Disponible para proyectos
              </span>
              <span className="hero__location">{profile.location}</span>
            </div>
          </div>

          <div className="hero__badge hero__badge--top">
            <Icon name="rocket" size={18} />
            <span>
              <strong>Desarrollo</strong>
              Web
            </span>
          </div>
          <div className="hero__badge hero__badge--bottom">
            <Icon name="graduation" size={18} />
            <span>
              <strong>Ing. Software</strong>
              En curso
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
