import Link from "next/link"
import AdSlot from "@/components/AdSlot"

const enlaces = [
  { texto: "Cómo funciona", href: "/hablapic#como-funciona" },
  { texto: "Actualizaciones", href: "/hablapic#actualizaciones" },
  { texto: "Foro", href: "/hablapic/foro" },
  { texto: "Pictogramas", href: "/hablapic/pictogramas" },
  { texto: "Profesionales", href: "/hablapic/profesionales" },
]

export default function HablaPicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="bg-[#050b14] border-b border-blue-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-xs text-slate-400 hover:text-white transition">
            ← Andrés Gutiérrez
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <Link href="/hablapic" className="font-bold text-white">
              HablaPic
            </Link>
            {enlaces.map((e) => (
              <Link key={e.href} href={e.href} className="hover:text-white transition">
                {e.texto}
              </Link>
            ))}
          </nav>

          <Link
            href="/hablapic/ingresar"
            className="px-4 py-2 rounded-full border border-blue-500/60 text-white text-xs font-semibold hover:bg-blue-500/10 transition"
          >
            Ingresar
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <AdSlot slot="SLOT_HABLAPIC_PIE" />

      <footer className="bg-[#050b14] text-slate-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>HablaPic es una app gratuita, creada por Andrés Gutiérrez.</p>
          <Link href="/" className="hover:text-white transition">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  )
}