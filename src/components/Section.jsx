import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section__head">
          {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
