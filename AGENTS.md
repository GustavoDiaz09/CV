# AGENTS.md

Hoja de vida digital de Gustavo Alonso Díaz Mercado. React 19 + Vite, sin
dependencias de UI. Todo el contenido editable vive en `src/data/resume.js`.

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (HMR)
npm run build   # build de producción en /dist
npm run lint    # oxlint (plugins react + oxc)
npm run preview # previsualizar el build
npm run pdf     # regenera public/CV-Gustavo-Diaz-Mercado.pdf
```

`npm run pdf` ya hace su propio `vite build` antes y después de imprimir, así que
no hace falta llamar a `build` por separado. En PowerShell usar `npm.cmd` si la
política de ejecución bloquea `npm.ps1`.

No hay suite de tests ni script `test`: la verificación es `npm run lint` y
`npm run build` (y `npm run pdf` si se toca la impresión). Antes de dar por
terminado cualquier cambio: `npm run lint` y `npm run build`.

## Estructura

```
src/
├─ main.jsx       # entrada; importa index.css y luego App
├─ App.jsx        # composición; importa App.css y después print.css
├─ index.css      # resets, variables CSS (:root), tipografía
├─ App.css        # design system + animaciones + media queries
├─ print.css      # @media print: reformatea la web como CV en A4
├─ data/resume.js # contenido único (perfil, contacto, proyectos, educación, skills)
├─ assets/        # foto de perfil (gustavo.jpg), importada desde resume.js
└─ components/    # Navbar, Hero, Profile, Projects, Education, Skills, Footer,
                  # Section, Reveal, Icon
scripts/generate-pdf.mjs
public/CV-Gustavo-Diaz-Mercado.pdf   # se versiona aquí; dist/ está en .gitignore
```

## Convenciones

- **Contenido solo en `src/data/resume.js`.** No hardcodear textos ni URLs en los
  componentes. `resumePdfUrl` ya usa `import.meta.env.BASE_URL`.
- Componentes = funciones flecha en archivos separados, un export default.
  `Icon.jsx` es el único lugar con un mapa de SVGs; para un icono nuevo se agrega
  la entrada en `paths`.
- Estilos en CSS plano con clases BEM (`bloque__elemento--modificador`). Sin
  librerías CSS ni CSS-in-JS. `print.css` va después de `App.css` para ganar la
  cascada.
- Sin comentarios en el código.
- Sin commits automáticos: solo cuando el usuario lo pida.

## PDF de la hoja de vida

`npm run pdf` sirve `dist/` con un servidor estático propio y usa
`--print-to-pdf` de Chrome/Edge headless. Detecta el navegador en las rutas
habituales de Windows, macOS y Linux; si falla, `CHROME_PATH=/ruta npm run pdf`.

Requisitos que ya rompieron el resultado y no deben olvidarse:

- `vite.config.js` tiene `base: '/CV/'`. El servidor del script prueba la ruta
  con y sin ese prefijo, y devuelve 404 (nunca `index.html`) para rutas con
  extensión: si no, un fallo silencioso produce un PDF en blanco.
- El PDF es **A4 y una sola página**. El presupuesto es de ~1040 px de alto útil
  (A4 con márgenes de 11mm/13mm); el contenido actual ocupa ~983 px. Si se añade
  contenido, hay que volver a medir y ajustar, no dejar que desborde a 2 páginas.
- El ancho de impresión (~695 px) dispara las media queries móviles de `App.css`.
  Por eso `print.css` fuerza `.hero__media { order: 0 !important }`; sin eso el
  hero se invierte y se desborda.
- `.reveal` usa `IntersectionObserver`: en impression hay que forzar
  `opacity: 1`, si no los bloques fuera de pantalla salen invisibles.
- Los `::after { content: ' ·' }` en `.skill-chip`, `.tag` y
  `.project-card__link` existen para que el texto que extrae un ATS no quede
  pegado (`HTML5CSS3` → `HTML5 · CSS3`) y para imprimir las URLs de los proyectos.
  No quitarlos si se toca la impresión.

## Verificar el PDF

Este modelo no puede leer imágenes ni PDFs, así que la validación es programática:

```powershell
# páginas y tamaño de página
$b = [System.IO.File]::ReadAllBytes("public\CV-Gustavo-Diaz-Mercado.pdf")
$t = [System.Text.Encoding]::GetEncoding(28591).GetString($b)
([regex]::Matches($t, '/Count\s+\d+') | ForEach-Object { $_.Value })   # debe ser /Count 1
([regex]::Matches($t, '/MediaBox\s*\[[^\]]*\]') | ForEach-Object { $_.Value } | Select-Object -First 1)  # A4
```

Para medir la maqueta en media `print` (alto, overflow, `::after` generados) hay
que hacerlo por CDP: lanzar Chrome con `--remote-debugging-port`, adjuntar con
`Target.attachToTarget`, `Emulation.setEmulatedMedia({ media: 'print' })`,
`Emulation.setDeviceMetricsOverride({ width: 695, height: 1039 })` y leer
`getBoundingClientRect()` de `.hero`, `.section` y `.footer` con
`Runtime.evaluate`. Ojo: `innerText` **no** incluye el contenido de los
pseudoelementos, hay que leerlos con `getComputedStyle(el, '::after').content`.

## Deploy

`.github/workflows/deploy.yml` publica `dist/` en GitHub Pages en cada push a
`main`. El PDF se versiona en `public/` (469 KB); la alternativa es regenerarlo en
CI, pero no está configurado. La URL es `https://gustavodiaz09.github.io/CV/`.
