import { education, copy } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Education() {
  return (
    <Section id="educacion" index="03" {...copy.sections.education}>
      <ul className="education">
        {education.map((edu, i) => (
          <Reveal as="li" key={edu.degree} delay={i * 90} className="edu">
            <p className="edu__period">{edu.period}</p>
            <div className="edu__body">
              <h3 className="edu__degree">{edu.degree}</h3>
              <p className="edu__institution">{edu.institution}</p>
              <p className="edu__desc">{edu.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
