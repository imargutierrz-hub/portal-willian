import Link from 'next/link'

export default async function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg tracking-tight">Andres Gutierrez</span>
        <nav className="flex gap-6 text-sm text-gray-500">
          <Link href="#articulos" className="hover:text-gray-900 transition-colors">Articulos</Link>
          <Link href="#libro" className="hover:text-gray-900 transition-colors">Libro</Link>
          <Link href="#herramientas" className="hover:text-gray-900 transition-colors">Herramientas</Link>
          <Link href="#proyectos" className="hover:text-gray-900 transition-colors">Proyectos</Link>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-sm text-gray-400 mb-3 tracking-widest uppercase">Escritor - Desarrollador - Pensador</p>
        <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">Andres Gutierrez</h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
          Escribo sobre economia, dinero y las verdades que nadie explica con claridad.
          Tambien construyo herramientas para simplificar lo complejo.
        </p>
      </section>

      <section id="articulos" className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-10">Articulos</h2>
        <p className="text-gray-400 text-sm">Proximamente.</p>
      </section>

      <section id="libro" className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-10">Libro</h2>
        <div className="border border-gray-100 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Las verdades de una mentira</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            El gobierno, la economia y tu dinero. Una explicacion clara y directa
            de como funciona realmente el dinero fiduciario y por que tu capacidad
            adquisitiva se deteriora sin que nadie te lo explique.
          </p>
          
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white text-sm px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Ver en Amazon
          </a>
        </div>
      </section>

      <section id="herramientas" className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-10">Herramientas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Convertidor IP</h3>
            <p className="text-gray-400 text-sm mb-4">Convierte direcciones IP entre decimal, binario y hexadecimal.</p>
            <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">App movil</span>
          </div>
          <div className="border border-dashed border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2 text-gray-400">Calculadora cientifica</h3>
            <p className="text-gray-300 text-sm">Proximamente.</p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-10">Proyectos</h2>
        <div className="border border-gray-100 rounded-xl p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold">Konta</h3>
            <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">En desarrollo</span>
          </div>
          <p className="text-gray-500 leading-relaxed mb-4">
            Plataforma contable para pequenas empresas colombianas.
            Disenada para simplificar la contabilidad sin necesidad de conocimientos tecnicos avanzados.
          </p>
          <span className="text-sm text-gray-300">Proximamente disponible al publico</span>
        </div>
      </section>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        Andres Gutierrez
      </footer>

    </main>
  )
}