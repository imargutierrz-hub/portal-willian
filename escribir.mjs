import { writeFileSync } from 'fs'

const codigo = `import Link from "next/link"

export default async function Home() {
  return (
    <main style={{fontFamily: 'Georgia, serif', backgroundColor: '#fafafa', minHeight: '100vh', color: '#1a1a1a'}}>

      <header style={{borderBottom: '1px solid #e5e5e5', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 100}}>
        <span style={{fontWeight: '700', fontSize: '18px', letterSpacing: '-0.5px'}}>Andres Gutierrez</span>
        <nav style={{display: 'flex', gap: '32px'}}>
          <Link href="#articulos" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>Artículos</Link>
          <Link href="#libro" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>Libro</Link>
          <Link href="#herramientas" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>Herramientas</Link>
          <Link href="#proyectos" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>Proyectos</Link>
        </nav>
      </header>

      <section style={{maxWidth: '780px', margin: '0 auto', padding: '100px 40px 80px'}}>
        <p style={{fontSize: '13px', color: '#2d6a4f', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'system-ui, sans-serif'}}>Escritor · Desarrollador · Pensador</p>
        <h1 style={{fontSize: '64px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-2px'}}>Andres<br/>Gutierrez</h1>
        <p style={{fontSize: '20px', color: '#555', lineHeight: '1.7', maxWidth: '560px', fontFamily: 'system-ui, sans-serif'}}>
          Escribo sobre economia, dinero y las verdades que nadie explica con claridad.
          Tambien construyo herramientas para simplificar lo complejo.
        </p>
      </section>

      <section id="articulos" style={{maxWidth: '780px', margin: '0 auto', padding: '60px 40px', borderTop: '1px solid #e5e5e5'}}>
        <h2 style={{fontSize: '28px', fontWeight: '700', marginBottom: '40px', letterSpacing: '-0.5px'}}>Artículos</h2>
        <p style={{color: '#999', fontSize: '15px', fontFamily: 'system-ui, sans-serif'}}>Próximamente.</p>
      </section>

      <section id="libro" style={{maxWidth: '780px', margin: '0 auto', padding: '60px 40px', borderTop: '1px solid #e5e5e5'}}>
        <h2 style={{fontSize: '28px', fontWeight: '700', marginBottom: '40px', letterSpacing: '-0.5px'}}>Libro</h2>
        <div style={{backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '40px', display: 'flex', gap: '40px', alignItems: 'flex-start'}}>
          <div style={{width: '120px', height: '160px', backgroundColor: '#2d6a4f', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span style={{color: '#fff', fontSize: '11px', textAlign: 'center', padding: '10px', lineHeight: '1.4', fontFamily: 'system-ui, sans-serif', fontWeight: '600'}}>Las verdades de una mentira</span>
          </div>
          <div>
            <h3 style={{fontSize: '22px', fontWeight: '700', marginBottom: '12px', letterSpacing: '-0.5px'}}>Las verdades de una mentira</h3>
            <p style={{fontSize: '13px', color: '#2d6a4f', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'system-ui, sans-serif'}}>El gobierno, la economía y tu dinero</p>
            <p style={{fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '28px', fontFamily: 'system-ui, sans-serif'}}>
              Una explicacion clara y directa de como funciona realmente el dinero fiduciario
              y por que tu capacidad adquisitiva se deteriora sin que nadie te lo explique.
            </p>
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer"
              style={{backgroundColor: '#1a1a1a', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontFamily: 'system-ui, sans-serif', fontWeight: '600', textDecoration: 'none', display: 'inline-block'}}>
              Ver en Amazon
            </a>
          </div>
        </div>
      </section>

      <section id="herramientas" style={{maxWidth: '780px', margin: '0 auto', padding: '60px 40px', borderTop: '1px solid #e5e5e5'}}>
        <h2 style={{fontSize: '28px', fontWeight: '700', marginBottom: '40px', letterSpacing: '-0.5px'}}>Herramientas</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
          <div style={{backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '28px'}}>
            <div style={{width: '40px', height: '40px', backgroundColor: '#2d6a4f', borderRadius: '8px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#fff', fontSize: '18px'}}>IP</span>
            </div>
            <h3 style={{fontSize: '17px', fontWeight: '700', marginBottom: '8px'}}>Convertidor IP</h3>
            <p style={{fontSize: '14px', color: '#888', lineHeight: '1.6', fontFamily: 'system-ui, sans-serif', marginBottom: '16px'}}>Convierte direcciones IP entre decimal, binario y hexadecimal con procedimientos paso a paso.</p>
            <span style={{fontSize: '12px', color: '#2d6a4f', fontWeight: '600', fontFamily: 'system-ui, sans-serif'}}>App movil disponible</span>
          </div>
          <div style={{backgroundColor: '#fafafa', border: '1px dashed #ddd', borderRadius: '12px', padding: '28px'}}>
            <div style={{width: '40px', height: '40px', backgroundColor: '#e5e5e5', borderRadius: '8px', marginBottom: '16px'}}></div>
            <h3 style={{fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#aaa'}}>Calculadora cientifica</h3>
            <p style={{fontSize: '14px', color: '#bbb', lineHeight: '1.6', fontFamily: 'system-ui, sans-serif'}}>Proximamente — precision arbitraria, sin perdida de digitos.</p>
          </div>
        </div>
      </section>

      <section id="proyectos" style={{maxWidth: '780px', margin: '0 auto', padding: '60px 40px', borderTop: '1px solid #e5e5e5'}}>
        <h2 style={{fontSize: '28px', fontWeight: '700', marginBottom: '40px', letterSpacing: '-0.5px'}}>Proyectos</h2>
        <div style={{backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '32px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px'}}>
            <h3 style={{fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px'}}>Konta</h3>
            <span style={{fontSize: '12px', backgroundColor: '#f0faf4', color: '#2d6a4f', padding: '4px 12px', borderRadius: '20px', fontFamily: 'system-ui, sans-serif', fontWeight: '600'}}>En desarrollo</span>
          </div>
          <p style={{fontSize: '16px', color: '#555', lineHeight: '1.7', fontFamily: 'system-ui, sans-serif', marginBottom: '8px'}}>
            Plataforma contable para pequenas empresas colombianas.
            Disenada para simplificar la contabilidad sin necesidad de conocimientos tecnicos avanzados.
          </p>
          <p style={{fontSize: '14px', color: '#bbb', fontFamily: 'system-ui, sans-serif'}}>Proximamente disponible al publico</p>
        </div>
      </section>

      <footer style={{maxWidth: '780px', margin: '0 auto', padding: '40px', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span style={{fontSize: '14px', color: '#999', fontFamily: 'system-ui, sans-serif'}}>© {new Date().getFullYear()} Andres Gutierrez</span>
        <span style={{fontSize: '14px', color: '#999', fontFamily: 'system-ui, sans-serif'}}>Todos los derechos reservados</span>
      </footer>

    </main>
  )
}`

writeFileSync('app/page.tsx', codigo, 'utf8')
console.log('OK')