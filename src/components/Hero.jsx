import { useRef } from 'react'
import { profile, contact, copy, resumePdfUrl, easterEgg } from '../data/resume'
import Icon from './Icon'

export default function Hero() {
  const photoClicks = useRef([])

  const onPhotoClick = () => {
    const now = Date.now()
    photoClicks.current = [...photoClicks.current.filter((t) => now - t < easterEgg.windowMs), now]
    if (photoClicks.current.length >= easterEgg.clicks) {
      photoClicks.current = []
      window.open(easterEgg.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {copy.hero.status}
          </p>

          <h1 className="hero__name">
            Gustavo Alonso
            <em className="hero__name-accent">Díaz Mercado</em>
          </h1>

          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#proyectos" className="btn btn--primary">
              {copy.hero.actions.projects}
              <Icon name="arrowDown" size={16} />
            </a>
            <a href={resumePdfUrl} className="btn btn--ghost" download>
              {copy.hero.actions.cv}
            </a>
          </div>
        </div>

        <aside className="hero__aside">
          <figure className="hero__figure">
            <img
              className="hero__img"
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              onClick={onPhotoClick}
            />
            <figcaption className="hero__caption">
              {profile.location}
              <span>{profile.university}</span>
            </figcaption>
          </figure>

          <ul className="hero__contact">
            {contact.map((c) => (
              <li key={c.id}>
                <a
                  href={c.href}
                  data-contact={c.id}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="hero__contact-link"
                >
                  <span className="hero__contact-key">{c.id}</span>
                  <span className="hero__contact-value">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
