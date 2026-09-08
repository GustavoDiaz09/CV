import { skills } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Stack"
      title="Habilidades Destacadas"
      subtitle="Tecnologías y competencias que domino."
    >
      <div className="skills">
        {skills.map((skill, i) => (
          <Reveal key={skill} delay={(i % 5) * 70} className="skill-chip">
            <span className="skill-chip__dot" />
            {skill}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
