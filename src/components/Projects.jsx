import { projects, copy } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Projects() {
  return (
    <Section id="proyectos" index="02" {...copy.sections.projects}>
      <ol className="projects">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 80} className="project">
            <div className="project__meta">
              <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="project__period">{project.period}</span>
            </div>

            <div className="project__body">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__subtitle">{project.subtitle}</p>
              <p className="project__desc">{project.description}</p>

              <ul className="project__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project__links">
                {project.demo && (
                  <a href={project.demo} className="text-link" target="_blank" rel="noreferrer">
                    Ver demo
                    <Icon name="external" size={14} />
                  </a>
                )}
                <a href={project.link} className="text-link" target="_blank" rel="noreferrer">
                  Código
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
