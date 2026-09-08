import { profile } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

const highlights = [
  {
    title: 'Aprendizaje continuo',
    text: 'Motivación constante por aprender nuevas tecnologías y metodologías.',
    icon: 'sparkles',
  },
  {
    title: 'Resolución de problemas',
    text: 'Enfoque analítico para identificar y resolver desafíos técnicos.',
    icon: 'rocket',
  },
  {
    title: 'Trabajo en equipo',
    text: 'Colaboración efectiva en proyectos académicos y multidisciplinarios.',
    icon: 'graduation',
  },
]

export default function Profile() {
  return (
    <Section
      id="perfil"
      eyebrow="Sobre mí"
      title="Perfil Profesional"
      subtitle="Quién soy y qué busco aportar."
    >
      <Reveal>
        <p className="lead">{profile.summary}</p>
      </Reveal>

      <div className="highlights">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 90} className="highlight-card">
            <div className="highlight-card__icon">
              <Icon name={h.icon} size={24} />
            </div>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
