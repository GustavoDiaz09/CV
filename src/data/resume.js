import gustavoPhoto from '../assets/gustavo.jpg'

export const profile = {
  name: 'Gustavo Alonso Díaz Mercado',
  role: 'Estudiante de Ingeniería de Software',
  university: 'Universidad de Cartagena',
  location: 'Magangué, Bolívar, Colombia',
  photo: gustavoPhoto,
  summary:
    'Estudiante de Ingeniería de Software con interés en el desarrollo web y la creación de soluciones tecnológicas. He construido y publicado proyectos reales: una aplicación web PWA offline-first, herramientas de escritorio con IA generativa y utilidades de concurrencia, aplicando tecnologías como TypeScript, React, Python, Java y Supabase. Me caracterizo por el aprendizaje continuo, la capacidad para resolver problemas y el interés por participar en proyectos que permitan fortalecer mis habilidades técnicas y profesionales.',
}

export const contact = [
  {
    id: 'email',
    label: 'gustavoalonsomercado199@gmail.com',
    icon: 'mail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gustavoalonsomercado199@gmail.com',
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
    title: 'AdmiTienda',
    period: '2026',
    subtitle: 'Aplicación web PWA offline-first',
    description:
      'Aplicación web para administrar una tienda: usuarios, productos, ingresos, egresos, resúmenes financieros, alertas de inventario y CRM de deudas. Funciona sin conexión (IndexedDB), es instalable como PWA y sincroniza entre dispositivos mediante Supabase y una Edge Function. Incluye sistema de roles y autenticación local.',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind', 'PWA', 'Supabase', 'Offline-first'],
    link: 'https://github.com/GustavoDiaz09/Admitienda',
    demo: 'https://admitienda.vercel.app',
  },
  {
    title: 'Generador de Documentos (DOCX)',
    period: '2026',
    subtitle: 'Herramienta de escritorio con IA',
    description:
      'Aplicación de escritorio en Python (Tkinter) que extrae texto de un PDF, lo redacta con IA (Gemini, Groq, OpenAI, OpenRouter) y genera documentos DOCX replicando fielmente una plantilla, con verificación automática de la estructura y reintentos ante respuestas incompletas.',
    tags: ['Python', 'Tkinter', 'IA Generativa', 'python-docx', 'OCR', 'PDF'],
    link: 'https://github.com/GustavoDiaz09/generador-de-documento',
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
  'TypeScript',
  'React',
  'Vite',
  'Tailwind',
  'Python',
  'Java',
  'C#',
  'PWA / Offline-first',
  'Supabase',
  'IA Generativa (LLMs)',
  'Diseño Responsivo',
  'Git & GitHub',
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
