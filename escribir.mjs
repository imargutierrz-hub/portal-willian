import { writeFileSync, readFileSync } from 'fs'

let pagina = readFileSync('app/page.tsx', 'utf8')

// Eliminar duplicados
pagina = pagina.replace(/const articulos = await getArticulos\(\)\n  const articulos = await getArticulos\(\)/, 'const articulos = await getArticulos()')

// Eliminar imports duplicados
pagina = pagina.replace(/import { getArticulos } from "\.\.\/lib\/sanity"\nimport { getArticulos } from "\.\.\/lib\/sanity"/, 'import { getArticulos } from "../lib/sanity"')

writeFileSync('app/page.tsx', pagina, 'utf8')
console.log('OK')