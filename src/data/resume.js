import gustavoPhoto from '../assets/gustavo.jpg'

export const profile = {
  name: 'Gustavo Alonso Díaz Mercado',
  role: 'Estudiante de Ingeniería de Software',
  university: 'Universidad de Cartagena',
  location: 'Cartagena, Colombia',
  photo: gustavoPhoto,
  summary:
    'Estudiante de Ingeniería de Software con interés en el desarrollo web y la creación de soluciones tecnológicas. Poseo conocimientos en programación, desarrollo de interfaces y herramientas de control de versiones. Me caracterizo por el aprendizaje continuo, la capacidad para resolver problemas y el interés por participar en proyectos que permitan fortalecer mis habilidades técnicas y profesionales.',
}

export const contact = [
  {
    id: 'email',
    label: 'gdiazm@unicartagena.edu.co',
    icon: 'mail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gdiazm@unicartagena.edu.co',
  },
  {
    id: 'phone',
    label: '+57 300 879 58 37',
    icon: 'phone',
    href: 'tel:+573008795837',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/gustavo-alonso-diaz-mercado-a827a3419/',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/GustavoDiaz09',
  },
]

export const projects = [
  {
    title: 'Desarrollo de aplicaciones web',
    period: '2025 - 2026',
    subtitle: 'Proyecto académico',
    description:
      'Desarrollo de aplicaciones web utilizando HTML, CSS y JavaScript, aplicando diseño responsivo, organización estructurada del código y buenas prácticas de desarrollo.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
  },
  {
    title: 'Proyectos de Ingeniería de Software',
    period: '2023 - 2026',
    subtitle: 'Universidad de Cartagena',
    description:
      'Participación en proyectos académicos relacionados con programación, análisis de requerimientos, desarrollo de software, trabajo en equipo y aplicación de metodologías para la construcción de soluciones tecnológicas.',
    tags: ['Análisis', 'Metodologías', 'Trabajo en equipo'],
  },
]

export const education = [
  {
    degree: 'Ingeniería de Software',
    period: '2023 - 2026',
    institution: 'Universidad de Cartagena',
    description:
      'Formación integral en fundamentos de ingeniería, programación, diseño de sistemas y metodologías ágiles para la construcción de software de calidad.',
  },
]

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Diseño Responsivo',
  'Git & GitHub',
  'C#',
  'React',
  'Trabajo en equipo',
  'Resolución de problemas',
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Habilidades', href: '#habilidades' },
]
