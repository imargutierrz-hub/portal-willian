import type { Metadata } from "next"
import { Mail, Store } from "lucide-react"

import HablaPicShell from "@/components/HablaPicShell"

const CORREO = "apphablapic@gmail.com"

export const metadata: Metadata = {
  title: "Profesionales y tiendas | HablaPic",
}

export default function ProfesionalesPage() {
  return (
    <HablaPicShell>
      <section className="flex min-h-[70vh] items-center bg-slate-50 py-16">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-10">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Store className="h-8 w-8" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Comunidad
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Profesionales y tiendas
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Este espacio está dedicado a terapeutas, profesionales y
            vendedores de productos o servicios para personas no hablantes.
            Estamos armando esta sección — si quieres aparecer aquí,
            escríbenos y lo conversamos.
          </p>

          <a
            href={`mailto:${CORREO}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            <Mail className="h-4 w-4" />
            {CORREO}
          </a>

        </div>
      </section>
    </HablaPicShell>
  )
}