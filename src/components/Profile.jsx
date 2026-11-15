import { profile, copy, highlights } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Profile() {
  return (
    <Section id="perfil" index="01" {...copy.sections.profile}>
      <Reveal>
        <p className="lead">{profile.summary}</p>
      </Reveal>

      <ul className="availability">
        {profile.availability.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ol className="highlights">
        {highlights.map((h, i) => (
          <Reveal as="li" key={h.title} delay={i * 90} className="highlight">
            <span className="highlight__n">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="highlight__title">{h.title}</h3>
            <p className="highlight__text">{h.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
