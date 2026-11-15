import Reveal from './Reveal'

export default function Section({ id, index, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container section__grid">
        <div className="section__index" aria-hidden="true">
          {index}
        </div>
        <div className="section__content">
          <Reveal className="section__head">
            <h2 className="section__title">{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </Reveal>
          {children}
        </div>
      </div>
    </section>
  )
}
