import { education } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Education() {
  return (
    <Section
      id="educacion"
      eyebrow="Formación"
      title="Educación"
      subtitle="Mi desarrollo académico y profesional."
    >
      <div className="education">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 110} className="edu-card">
            <div className="edu-card__left">
              <div className="edu-card__badge">
                <Icon name="graduation" size={22} />
              </div>
              <div className="edu-card__line" aria-hidden="true" />
            </div>
            <div className="edu-card__body">
              <div className="edu-card__period">
                <Icon name="calendar" size={15} />
                {edu.period}
              </div>
              <h3 className="edu-card__degree">{edu.degree}</h3>
              <span className="edu-card__institution">{edu.institution}</span>
              <p className="edu-card__desc">{edu.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
