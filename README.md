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
npm run pdf     # genera public/CV-Gustavo-Diaz-Mercado.pdf (A4, 1 página)
```

## PDF de la hoja de vida

`npm run pdf` construye la app, la sirve en local e imprime el sitio con Chrome (o
Edge) headless usando los estilos de `src/print.css`. El PDF resultante queda en
`public/` —y por tanto en `dist/`— y se descarga desde el botón **Descargar CV (PDF)**
del hero, del navbar y del footer.

El `@media print` de `src/print.css` reformatea la misma interfaz como documento:

- Una sola columna A4, sin navegación, botones ni bloques decorativos.
- Se fuerzan visibles los bloques con animación de scroll (`opacity: 1`).
- Se neutraliza el `order: -1` de las media queries móviles, que si no rompe el
  hero en el ancho de impresión.
- Se imprime el texto de los enlaces (GitHub, demo, LinkedIn) y se separan las
  etiquetas con `·` para que el texto extraído por un ATS no quede pegado
  (`HTML5CSS3` → `HTML5 · CSS3`).

Si Chrome o Edge no están en las rutas habituales, define `CHROME_PATH`:

```bash
CHROME_PATH=/ruta/al/navegador npm run pdf
```

## Estructura

```
src/
├─ main.jsx              # punto de entrada de React
├─ App.jsx               # composición de la app
├─ App.css               # estilos (design system + animaciones)
├─ print.css             # estilos de impresión para el PDF de la hoja de vida
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
- Descarga del PDF de la hoja de vida desde el hero, el navbar y el footer.