import { writeFileSync } from 'fs'
import { readFileSync } from 'fs'

const paginaActual = readFileSync('app/page.tsx', 'utf8')

const nuevaPagina = `import Link from "next/link"
import { client } from "../lib/sanity"

async function getArticulos() {
  return client.fetch(\`*[_type == "articulo"] | order(fechaPublicacion desc) {
    _id, titulo, slug, resumen, fechaPublicacion
  }\`)
}

export default async function Home() {
  const articulos = await getArticulos()
` + paginaActual.split('export default async function Home() {')[1].replace(
  `<p style={{color: '#999', fontSize: '15px', fontFamily: 'system-ui, sans-serif'}}>Próximamente.</p>`,
  `{articulos && articulos.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {articulos.map((art) => (
              <Link key={art._id} href={\`/articulos/\${art.slug.current}\`} style={{textDecoration: 'none'}}>
                <div style={{backgroundColor: '#fff', border: '1px solid #e8e0d5', borderRadius: '12px', padding: '24px', cursor: 'pointer'}}>
                  <p style={{fontSize: '12px', color: '#2d6a4f', fontWeight: '600', marginBottom: '8px'}}>
                    {new Date(art.fechaPublicacion).toLocaleDateString('es-CO', {year: 'numeric', month: 'long', day: 'numeric'})}
                  </p>
                  <h3 style={{fontSize: '18px', fontWeight: '700', color: '#2d3a4a', marginBottom: '8px', fontFamily: 'Georgia, serif'}}>{art.titulo}</h3>
                  <p style={{fontSize: '14px', color: '#888', lineHeight: '1.6'}}>{art.resumen}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{color: '#999', fontSize: '15px'}}>Próximamente.</p>
        )}`
)

writeFileSync('app/page.tsx', nuevaPagina, 'utf8')
console.log('OK')