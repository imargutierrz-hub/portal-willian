import Link from 'next/link'
import { getArticulo } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export default async function ArticuloPage({ params }: { params: { slug: string } }) {
  const articulo = await getArticulo(params.slug)

  if (!articulo) {
    return (
      <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg tracking-tight hover:text-gray-600 transition-colors">
          Andres Gutierrez
        </Link>
        <Link href="/#articulos" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
          ← Todos los artículos
        </Link>
      </header>

      <article className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs text-gray-400 mb-4 tracking-widest uppercase">
          {new Date(articulo.fechaPublicacion).toLocaleDateString('es-CO', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-6 leading-tight">
          {articulo.titulo}
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-12 border-b border-gray-100 pb-12">
          {articulo.resumen}
        </p>
        <div className="prose prose-gray max-w-none">
          {articulo.contenido && <PortableText value={articulo.contenido} />}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-1">Autor</p>
          <p className="font-semibold">Andres Gutierrez</p>
          <p className="text-sm text-gray-400 mt-1">Autor de <em>Las verdades de una mentira</em></p>
        </div>
      </article>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Andres Gutierrez — Todos los derechos reservados
      </footer>
    </main>
  )
}