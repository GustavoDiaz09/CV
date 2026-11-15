import gustavoPhoto from '../assets/gustavo.jpg'

export const resumePdfUrl = `${import.meta.env.BASE_URL}CV-Gustavo-Diaz-Mercado.pdf`

export const profile = {
  name: 'Gustavo Alonso Díaz Mercado',
  shortName: 'Gustavo Díaz Mercado',
  role: 'Ingeniero de Software en formación · Desarrollo Web y Backend',
  university: 'Universidad de Cartagena',
  location: 'Magangué, Bolívar, Colombia',
  availability: ['Disponible para viajar', 'Siempre disponible'],
  photo: gustavoPhoto,
  tagline:
    'Desarrollo aplicaciones web y APIs REST con React, TypeScript, Java y Spring Boot.',
  summary:
    'Ingeniero de Software en formación con experiencia en desarrollo web y APIs REST. He publicado proyectos reales con TypeScript, React, Java, Spring Boot, PostgreSQL y Supabase, entre ellos una aplicación PWA offline-first y una API con autenticación JWT. Uso agentes de IA para acelerar el desarrollo y reviso y valido cada resultado antes de entregarlo.',
}

export const copy = {
  nav: {
    cv: 'CV (PDF)',
  },
  meta: {
    description:
      'Hoja de vida de Gustavo Alonso Díaz Mercado, ingeniero de software en formación en la Universidad de Cartagena.',
    title: 'Gustavo Díaz Mercado | Hoja de Vida',
  },
  hero: {
    status: 'Disponible para proyectos',
    actions: {
      projects: 'Ver proyectos',
      cv: 'Descargar CV (PDF)',
    },
  },
  sections: {
    profile: {
      title: 'Perfil profesional',
      subtitle: 'Quién soy y qué busco aportar.',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Proyectos desarrollados por mí, con código disponible en GitHub.',
    },
    education: {
      title: 'Educación',
      subtitle: 'Mi desarrollo académico y profesional.',
    },
    skills: {
      title: 'Tecnologías',
      subtitle: 'Herramientas que he usado en proyectos reales.',
    },
  },
  footer: {
    title: '¿Trabajamos juntos?',
    subtitle:
      'Si buscas un desarrollador de software con ganas de aprender y crecer, estaré encantado de conversar.',
    cv: 'Descargar CV (PDF)',
    made: 'Hecho con React',
  },
}

export const contact = [
  {
    id: 'email',
    label: 'gustavoalonsomercado199@gmail.com',
    icon: 'mail',
    href: 'mailto:gustavoalonsomercado199@gmail.com',
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

export const highlights = [
  {
    title: 'Aprendizaje continuo',
    text: 'Incorporé Spring Boot 3, Supabase y PWA en proyectos reales.',
  },
  {
    title: 'Backend y APIs',
    text: 'API REST con Spring Security, JWT, PostgreSQL y documentación Swagger/OpenAPI.',
  },
  {
    title: 'Frontend y offline',
    text: 'Aplicación PWA que funciona sin conexión y sincroniza con Supabase.',
  },
]

export const projects = [
  {
    title: 'Gestión de Agua Potable',
    period: '2026',
    subtitle: 'API REST con Spring Boot, JWT y PostgreSQL',
    description:
      'API REST en Java 17 y Spring Boot 3 para gestionar un servicio de agua potable: clientes, medidores, lecturas, tarifas progresivas, facturación y pagos. Arquitectura por capas (Controller, Service, Repository), seguridad stateless con Spring Security y JWT, persistencia en PostgreSQL 16 y documentación con Swagger/OpenAPI.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA / Hibernate', 'Spring Security', 'JWT', 'REST API'],
    link: 'https://github.com/GustavoDiaz09/servicio-agua',
  },
  {
    title: 'AdmiTienda',
    period: '2026',
    subtitle: 'Aplicación web PWA offline-first',
    description:
      'Aplicación para administrar una tienda: productos, ingresos y egresos, resúmenes financieros, alertas de inventario y CRM de deudas. Funciona sin conexión (IndexedDB), es instalable como PWA y sincroniza entre dispositivos con Supabase y Edge Functions. Incluye roles de usuario y autenticación local.',
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
    period: '2023 - 2026 (egreso previsto)',
    institution: 'Universidad de Cartagena',
    description:
      'Formación en programación, diseño de sistemas y metodologías ágiles para construir software de calidad.',
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Vite', 'Diseño Responsivo', 'PWA / Offline-first'],
  },
  {
    label: 'Backend y datos',
    items: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Python', 'Supabase', 'PostgreSQL'],
  },
  {
    label: 'Herramientas',
    items: ['Git & GitHub'],
  },
  {
    label: 'Inteligencia artificial',
    items: ['IA Generativa (LLMs)', 'Agentes de IA', 'Desarrollo asistido por IA'],
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Habilidades', href: '#habilidades' },
]
