import { projects } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Trayectoria"
      title="Proyectos Académicos"
      subtitle="Experiencias que han fortalecido mis habilidades técnicas."
    >
      <div className="projects">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 110} className="project-card">
            <div className="project-card__head">
              <div className="project-card__icon">
                <Icon name="rocket" size={22} />
              </div>
              <div className="project-card__meta">
                <span className="project-card__period">
                  <Icon name="calendar" size={15} />
                  {project.period}
                </span>
                <span className="project-card__subtitle">{project.subtitle}</span>
              </div>
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
