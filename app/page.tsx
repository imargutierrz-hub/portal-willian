import Link from "next/link"

export default async function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg tracking-tight">Andres Gutierrez</span>
      </header>
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Andres Gutierrez</h1>
        <p className="text-xl text-gray-500">Escritor - Desarrollador - Pensador</p>
      </section>
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        Andres Gutierrez
      </footer>
    </main>
  )
}
