import { createServer } from 'node:http'
import { spawn } from 'node:child_process'
import { createReadStream, existsSync, mkdirSync, statSync, copyFileSync, rmSync } from 'node:fs'
import { extname, join, relative, resolve, isAbsolute } from 'node:path'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const dist = join(root, 'dist')
const publicDir = join(root, 'public')
const pdfName = 'CV-Gustavo-Diaz-Mercado.pdf'
const viteBin = join(root, 'node_modules', 'vite', 'bin', 'vite.js')

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
}

const browsers = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/microsoft-edge',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

const run = (args, options = {}) =>
  new Promise((res, rej) => {
    const child = spawn(process.execPath, args, { stdio: 'inherit', cwd: root, ...options })
    child.on('error', rej)
    child.on('exit', (code) => (code === 0 ? res() : rej(new Error(`vit exited con ${code}`))))
  })

function findFile(pathname) {
  const clean = decodeURIComponent(pathname.split('?')[0])
  const segments = clean.split('/').filter(Boolean)
  // El build usa base '/CV/', así que se prueban las rutas con y sin ese prefijo
  for (const parts of [segments, segments.slice(1)]) {
    const target = resolve(dist, ...parts)
    const rel = relative(dist, target)
    if (rel && !rel.startsWith('..') && !isAbsolute(rel) && existsSync(target) && statSync(target).isFile()) {
      return target
    }
  }
  return null
}

function serve() {
  const server = createServer((req, res) => {
    const found = findFile(req.url || '/')
    const pathname = decodeURIComponent((req.url || '/').split('?')[0])
    // Nunca devolver index.html para un archivo: eso produciría un PDF en blanco
    if (!found && extname(pathname) !== '') {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end(`404 ${pathname}`)
      return
    }
    const file = found ?? join(dist, 'index.html')
    res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' })
    createReadStream(file).pipe(res)
  })
  return new Promise((res) => server.listen(0, '127.0.0.1', () => res(server)))
}

const browser = browsers.find((p) => existsSync(p))
if (!browser) {
  console.error('No se encontró Chrome ni Edge. Define CHROME_PATH con la ruta al navegador.')
  process.exit(1)
}

console.log('→ Generando build de producción')
await run([viteBin, 'build', '--logLevel', 'warn'])

const server = await serve()
const { port } = server.address()
const profile = join(tmpdir(), `cv-pdf-${process.pid}`)
const target = join(publicDir, pdfName)
mkdirSync(publicDir, { recursive: true })

console.log(`→ Imprimiendo con ${browser}`)
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-extensions',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=20000',
  '--no-pdf-header-footer',
  `--user-data-dir=${profile}`,
  `--print-to-pdf=${target}`,
  `http://127.0.0.1:${port}/`,
]

await new Promise((res, rej) => {
  const child = spawn(browser, args, { stdio: 'inherit' })
  child.on('error', rej)
  child.on('exit', (code) => (code === 0 ? res() : rej(new Error(`navegador salió con ${code}`))))
})

server.close()
rmSync(profile, { recursive: true, force: true })

if (!existsSync(target)) {
  console.error('El navegador no generó el PDF.')
  process.exit(1)
}

const kb = (statSync(target).size / 1024).toFixed(0)
console.log(`✓ ${pdfName} (${kb} KB)`)

console.log('→ Reconstruyendo para incluir el PDF en dist/')
await run([viteBin, 'build', '--logLevel', 'warn'])
copyFileSync(target, join(dist, pdfName))
console.log('Listo. El PDF está en public/ y en dist/.')
