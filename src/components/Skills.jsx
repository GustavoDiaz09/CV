import { skillGroups, copy } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <Section id="habilidades" index="04" {...copy.sections.skills}>
      <div className="skill-groups">
        {skillGroups.map((group, g) => (
          <Reveal key={group.label} delay={g * 80} className="skill-group">
            <h3 className="skill-group__title">{group.label}</h3>
            <ul className="skills">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
