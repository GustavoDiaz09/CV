# Gustavo Aplication Job — React

Hoja de vida digital de **Gustavo Alonso Díaz Mercado**, estudiante de Ingeniería de
Software, migrada de un HTML estático a una aplicación **React + Vite** con diseño moderno,
interacciones suaves y código organizado en componentes.

## Stack

- [Vite](https://vitejs.dev/)
- [React 19](https://react.dev/)
- [OXLint](https://oxc.rs/) (linting)

## Scripts

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (HMR)
npm run build   # build de producción en /dist
npm run lint    # verificación de código con oxlint
npm run preview # previsualizar el build de producción
```

## Estructura

```
src/
├─ main.jsx              # punto de entrada de React
├─ App.jsx               # composición de la app
├─ App.css               # estilos (design system + animaciones)
├─ index.css             # resets, variables globales, tipografía
├─ assets/               # imágenes (foto de perfil)
├─ components/
│  ├─ Icon.jsx           # iconografía SVG inline
│  ├─ Reveal.jsx         # animación de aparición al hacer scroll
│  ├─ Navbar.jsx         # barra de navegación con menú móvil
│  ├─ Hero.jsx           # encabezado con foto y datos de contacto
│  ├─ Section.jsx        # sección reutilizable (título + contenido)
│  ├─ Profile.jsx        # perfil profesional
│  ├─ Projects.jsx       # proyectos académicos
│  ├─ Education.jsx      # educación
│  ├─ Skills.jsx         # habilidades
│  └─ Footer.jsx         # CTA de contacto + redes
└─ data/
   └─ resume.js          # contenido de la hoja de vida centralizado
```

## Extras incluidos

- Navegación fija con efecto al hacer scroll y menú hamburguesa en móvil.
- Animaciones de aparición (`IntersectionObserver`) y micro-interacciones CSS.
- Accesibilidad básica: `aria-label`, estados de foco, `prefers-reduced-motion`.
- Layout 100% responsivo.
- Contenido desacoplado en `src/data/resume.js` para editar fácilmente.