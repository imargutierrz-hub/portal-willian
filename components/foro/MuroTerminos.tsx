"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const CLAVE = "hablapic_foro_terminos_v1"

export default function MuroTerminos({ children }: { children: React.ReactNode }) {
  const [aceptado, setAceptado] = useState<boolean | null>(null)

  useEffect(() => {
    setAceptado(localStorage.getItem(CLAVE) === "si")
  }, [])

  function aceptar() {
    localStorage.setItem(CLAVE, "si")
    setAceptado(true)
  }

  if (aceptado === null) return null // evita parpadeo mientras lee el navegador
  if (aceptado) return <>{children}</>

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-16">
      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Antes de entrar al foro</h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Este es un espacio de apoyo entre familias. Al publicar aceptas
          nuestras normas de comunidad: nada de spam, acoso ni información
          personal de terceros, y cualquier publicación puede ocultarse de
          inmediato si alguien la reporta.
        </p>

        <Link
          href="/hablapic/foro/terminos"
          target="_blank"
          className="mt-3 inline-block text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Leer los Términos completos →
        </Link>

        <button
          onClick={aceptar}
          className="mt-6 h-11 w-full rounded-full bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          Entiendo y acepto
        </button>
      </div>
    </div>
  )
}