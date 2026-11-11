import gustavoPhoto from '../assets/gustavo.jpg'

export const resumePdfUrl = `${import.meta.env.BASE_URL}CV-Gustavo-Diaz-Mercado.pdf`

export const profile = {
  name: 'Gustavo Alonso Díaz Mercado',
  role: 'Ingeniero de Software en formación · Desarrollo Web y Backend',
  university: 'Universidad de Cartagena',
  location: 'Magangué, Bolívar, Colombia',
  photo: gustavoPhoto,
  summary:
    'Ingeniero de Software en formación con experiencia en desarrollo web y APIs REST. He publicado proyectos reales con TypeScript, React, Java, Spring Boot, PostgreSQL y Supabase, entre ellos una aplicación PWA offline-first y una API con autenticación JWT. Trabajo con agentes de IA para acelerar el desarrollo y reviso, pruebo y valido cada resultado para entregar código limpio, seguro y funcional.',
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
    period: '2023 - 2026',
    institution: 'Universidad de Cartagena',
    description:
      'Formación en programación, diseño de sistemas y metodologías ágiles para construir software de calidad.',
  },
]

export const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'HTML5',
  'CSS3',
  'Tailwind',
  'Vite',
  'Diseño Responsivo',
  'PWA / Offline-first',
  'Java',
  'Spring Boot',
  'REST APIs',
  'JWT',
  'Node.js',
  'Python',
  'Supabase',
  'PostgreSQL',
  'SQL Server',
  'C#',
  '.NET',
  'Docker',
  'Git & GitHub',
  'Testing (pytest)',
  'IA Generativa (LLMs)',
  'Agentes de IA',
  'Desarrollo asistido por IA',
  'Código limpio y seguro',
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
