import { writeFileSync } from 'fs'

const codigo = `import Link from "next/link"

export default async function Home() {
  return (
    <main style={{fontFamily: 'system-ui, sans-serif', minHeight: '100vh', backgroundColor: '#f8f4ef'}}>

      <header style={{background: 'linear-gradient(135deg, #2d3a4a 0%, #1a2634 100%)', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: '3px solid #c9a84c'}}>
        <span style={{fontWeight: '800', fontSize: '18px', color: '#f0e6cc', letterSpacing: '-0.5px', fontFamily: 'Georgia, serif'}}>Andres Gutierrez</span>
        <nav style={{display: 'flex', gap: '32px'}}>
          <Link href="#articulos" style={{fontSize: '13px', color: '#b8c4cc', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500'}}>Artículos</Link>
          <Link href="#libro" style={{fontSize: '13px', color: '#b8c4cc', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500'}}>Libro</Link>
          <Link href="#herramientas" style={{fontSize: '13px', color: '#b8c4cc', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500'}}>Herramientas</Link>
          <Link href="#proyectos" style={{fontSize: '13px', color: '#b8c4cc', textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500'}}>Proyectos</Link>
        </nav>
      </header>

      <section style={{background: 'linear-gradient(160deg, #2d3a4a 0%, #3d5a6e 50%, #4a7c6f 100%)', padding: '120px 48px 100px', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 80px)'}}></div>
        <div style={{maxWidth: '780px', margin: '0 auto', position: 'relative'}}>
          <div style={{width: '60px', height: '4px', background: 'linear-gradient(90deg, #c9a84c, #e8c96e)', borderRadius: '2px', marginBottom: '28px'}}></div>
          <p style={{fontSize: '12px', color: '#c9a84c', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px'}}>Escritor · Desarrollador · Pensador</p>
          <h1 style={{fontSize: '72px', fontWeight: '800', lineHeight: '1.05', marginBottom: '28px', letterSpacing: '-3px', color: '#f0e6cc', fontFamily: 'Georgia, serif'}}>Andres<br/>Gutierrez</h1>
          <p style={{fontSize: '19px', color: '#a8bcc8', lineHeight: '1.8', maxWidth: '520px'}}>
            Escribo sobre economia, dinero y las verdades que nadie explica con claridad.
            Tambien construyo herramientas para simplificar lo complejo.
          </p>
        </div>
      </section>

      <section id="articulos" style={{maxWidth: '780px', margin: '0 auto', padding: '80px 48px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px'}}>
          <div style={{width: '6px', height: '32px', background: 'linear-gradient(180deg, #c9a84c, #e8c96e)', borderRadius: '3px'}}></div>
          <h2 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '-1px', color: '#2d3a4a', fontFamily: 'Georgia, serif'}}>Artículos</h2>
        </div>
        <div style={{background: 'linear-gradient(135deg, #fff 0%, #f8f4ef 100%)', border: '1px solid #e8e0d5', borderRadius: '16px', padding: '40px', textAlign: 'center'}}>
          <p style={{color: '#aaa', fontSize: '15px'}}>Próximamente.</p>
        </div>
      </section>

      <section id="libro" style={{background: 'linear-gradient(135deg, #2d3a4a 0%, #3d5a6e 100%)', padding: '80px 48px'}}>
        <div style={{maxWidth: '780px', margin: '0 auto'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px'}}>
            <div style={{width: '6px', height: '32px', background: 'linear-gradient(180deg, #c9a84c, #e8c96e)', borderRadius: '3px'}}></div>
            <h2 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '-1px', color: '#f0e6cc', fontFamily: 'Georgia, serif'}}>Libro</h2>
          </div>
          <div style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '20px', padding: '48px', display: 'flex', gap: '48px', alignItems: 'flex-start', backdropFilter: 'blur(10px)'}}>
            <div style={{width: '130px', height: '180px', background: 'linear-gradient(160deg, #c9a84c 0%, #8b6914 100%)', borderRadius: '10px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '8px 8px 24px rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.5)'}}>
              <span style={{color: '#fff', fontSize: '11px', textAlign: 'center', padding: '12px', lineHeight: '1.5', fontWeight: '700'}}>Las verdades de una mentira</span>
            </div>
            <div>
              <h3 style={{fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: '#f0e6cc', letterSpacing: '-0.5px', fontFamily: 'Georgia, serif'}}>Las verdades de una mentira</h3>
              <p style={{fontSize: '12px', color: '#c9a84c', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px'}}>El gobierno, la economía y tu dinero</p>
              <p style={{fontSize: '16px', color: '#a8bcc8', lineHeight: '1.8', marginBottom: '32px'}}>
                Una explicacion clara y directa de como funciona realmente el dinero fiduciario
                y por que tu capacidad adquisitiva se deteriora sin que nadie te lo explique.
              </p>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer"
                style={{background: 'linear-gradient(135deg, #c9a84c 0%, #e8c96e 100%)', color: '#1a1a1a', padding: '14px 32px', borderRadius: '10px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', letterSpacing: '0.5px'}}>
                Ver en Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="herramientas" style={{maxWidth: '780px', margin: '0 auto', padding: '80px 48px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px'}}>
          <div style={{width: '6px', height: '32px', background: 'linear-gradient(180deg, #4a7c6f, #6aab9c)', borderRadius: '3px'}}></div>
          <h2 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '-1px', color: '#2d3a4a', fontFamily: 'Georgia, serif'}}>Herramientas</h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
          <div style={{background: 'linear-gradient(135deg, #2d3a4a 0%, #4a7c6f 100%)', borderRadius: '16px', padding: '32px', border: '1px solid rgba(74,124,111,0.3)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)'}}></div>
            <div style={{width: '44px', height: '44px', background: 'linear-gradient(135deg, #c9a84c, #e8c96e)', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#1a1a1a', fontSize: '13px', fontWeight: '800'}}>IP</span>
            </div>
            <h3 style={{fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#f0e6cc'}}>Convertidor IP</h3>
            <p style={{fontSize: '14px', color: '#a8bcc8', lineHeight: '1.6', marginBottom: '20px'}}>Convierte IPs entre decimal, binario y hexadecimal con procedimientos paso a paso.</p>
            <span style={{fontSize: '11px', color: '#c9a84c', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase'}}>App movil disponible</span>
          </div>
          <div style={{background: 'linear-gradient(135deg, #f8f4ef 0%, #ede8e0 100%)', borderRadius: '16px', padding: '32px', border: '1px dashed #d4c9b8'}}>
            <div style={{width: '44px', height: '44px', backgroundColor: '#e0d8cc', borderRadius: '10px', marginBottom: '20px'}}></div>
            <h3 style={{fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#aaa'}}>Calculadora cientifica</h3>
            <p style={{fontSize: '14px', color: '#bbb', lineHeight: '1.6'}}>Proximamente — precision arbitraria, sin perdida de digitos.</p>
          </div>
        </div>
      </section>

      <section id="proyectos" style={{background: 'linear-gradient(135deg, #4a7c6f 0%, #2d5a52 100%)', padding: '80px 48px'}}>
        <div style={{maxWidth: '780px', margin: '0 auto'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px'}}>
            <div style={{width: '6px', height: '32px', background: 'linear-gradient(180deg, #c9a84c, #e8c96e)', borderRadius: '3px'}}></div>
            <h2 style={{fontSize: '28px', fontWeight: '800', letterSpacing: '-1px', color: '#f0e6cc', fontFamily: 'Georgia, serif'}}>Proyectos</h2>
          </div>
          <div style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '16px', padding: '36px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px'}}>
              <h3 style={{fontSize: '24px', fontWeight: '800', color: '#f0e6cc', fontFamily: 'Georgia, serif'}}>Konta</h3>
              <span style={{fontSize: '11px', backgroundColor: 'rgba(201,168,76,0.2)', color: '#c9a84c', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase'}}>En desarrollo</span>
            </div>
            <p style={{fontSize: '16px', color: '#a8d4c8', lineHeight: '1.8', marginBottom: '8px'}}>
              Plataforma contable para pequenas empresas colombianas.
              Disenada para simplificar la contabilidad sin necesidad de conocimientos tecnicos avanzados.
            </p>
            <p style={{fontSize: '13px', color: 'rgba(168,212,200,0.5)'}}>Proximamente disponible al publico</p>
          </div>
        </div>
      </section>

      <footer style={{background: 'linear-gradient(135deg, #1a2634 0%, #2d3a4a 100%)', padding: '40px 48px', borderTop: '3px solid #c9a84c'}}>
        <div style={{maxWidth: '780px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontSize: '16px', color: '#f0e6cc', fontWeight: '700', fontFamily: 'Georgia, serif'}}>Andres Gutierrez</span>
          <span style={{fontSize: '13px', color: '#666'}}>© {new Date().getFullYear()} — Todos los derechos reservados</span>
        </div>
      </footer>

    </main>
  )
}`

writeFileSync('app/page.tsx', codigo, 'utf8')
console.log('OK')