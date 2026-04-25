import { writeFileSync, readFileSync } from 'fs'

const pagina = readFileSync('app/page.tsx', 'utf8')

const nuevaPagina = pagina
  .replace(
    'import Link from "next/link"',
    'import Link from "next/link"\nimport { getArticulos } from "../lib/sanity"'
  )
  .replace(
    'export default async function Home() {',
    'export default async function Home() {\n  const articulos = await getArticulos()'
  )
  .replace(
    `<p style={{color: '#999', fontSize: '15px', fontFamily: 'system-ui, sans-serif'}}>Próximamente.</p>`,
    `{articulos && articulos.length > 0 ? articulos.map((art) => (
          <Link key={art._id} href={\`/articulos/\${art.slug.current}\`} style={{textDecoration: 'none', display: 'block', marginBottom: '16px'}}>
            <div style={{backgroundColor: '#fff', border: '1px solid #e8e0d5', borderRadius: '12px', padding: '24px'}}>
              <p style={{fontSize: '12px', color: '#2d6a4f', fontWeight: '600', marginBottom: '8px'}}>
                {new Date(art.fechaPublicacion).toLocaleDateString('es-CO', {year: 'numeric', month: 'long', day: 'numeric'})}
              </p>
              <h3 style={{fontSize: '18px', fontWeight: '700', color: '#2d3a4a', marginBottom: '8px', fontFamily: 'Georgia, serif'}}>{art.titulo}</h3>
              <p style={{fontSize: '14px', color: '#888', lineHeight: '1.6'}}>{art.resumen}</p>
            </div>
          </Link>
        )) : <p style={{color: '#999', fontSize: '15px'}}>Próximamente.</p>}`
  )

writeFileSync('app/page.tsx', nuevaPagina, 'utf8')
console.log('OK')