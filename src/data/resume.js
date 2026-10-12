import gustavoPhoto from '../assets/gustavo.jpg'

export const resumePdfUrl = `${import.meta.env.BASE_URL}CV-Gustavo-Diaz-Mercado.pdf`

export const profile = {
  name: 'Gustavo Alonso Díaz Mercado',
  role: 'Estudiante de Ingeniería de Software',
  university: 'Universidad de Cartagena',
  location: 'Magangué, Bolívar, Colombia',
  photo: gustavoPhoto,
  summary:
    'Estudiante de Ingeniería de Software con interés en el desarrollo web y la creación de soluciones tecnológicas. He construido y publicado proyectos reales: una aplicación web PWA offline-first, una herramienta de escritorio con IA generativa y una API REST empresarial con Spring Boot y PostgreSQL, aplicando tecnologías como TypeScript, React, Java, Python y Supabase. Me caracterizo por el aprendizaje continuo, la capacidad para resolver problemas y el interés por participar en proyectos que permitan fortalecer mis habilidades técnicas y profesionales.',
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
    title: 'Gestión de Agua Potable',
    period: '2026',
    subtitle: 'API REST empresarial con Spring Boot y JWT',
    description:
      'API REST en Java 17 y Spring Boot 3 para administrar un servicio de agua potable: clientes, tomas, medidores, lecturas, tarifas progresivas, facturación, pagos y red de distribución. Arquitectura por capas (Controller, Service, Repository, Entity), seguridad stateless con Spring Security y JWT, persistencia en PostgreSQL 16 y documentación con Swagger/OpenAPI.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA / Hibernate', 'Spring Security', 'JWT', 'REST API'],
    link: 'https://github.com/GustavoDiaz09/servicio-agua',
  },
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
  'Diseño Responsivo',
  'PWA / Offline-first',
  'Python',
  'Tkinter',
  'Java',
  'C#',
  '.NET',
  'Node.js',
  'Spring Boot',
  'Supabase',
  'PostgreSQL',
  'SQL Server',
  'IA Generativa (LLMs)',
  'Docker',
  'Testing (pytest)',
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
