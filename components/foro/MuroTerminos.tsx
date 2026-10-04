"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase"
import { asegurarSesion } from "@/lib/foroAuth"

const CLAVE = "hablapic_foro_terminos_v1"

export default function MuroTerminos({ children }: { children: React.ReactNode }) {
  const [aceptado, setAceptado] = useState<boolean | null>(null)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setAceptado(localStorage.getItem(CLAVE) === "si")
  }, [])

  async function aceptar() {
    setGuardando(true)
    setError("")

    try {
      // Registro real en Supabase: queda ligado a la misma identidad
      // (sesión anónima o correo vinculado) que usa la persona para
      // publicar, con fecha y hora exactas.
      const user = await asegurarSesion()

      const { error: err } = await supabase
        .from("foro_aceptaciones")
        .upsert({ usuario_id: user.id, aceptado_en: new Date().toISOString() })

      if (err) throw err

      localStorage.setItem(CLAVE, "si")
      setAceptado(true)
    } catch {
      setError("No pudimos registrar tu aceptación. Intenta de nuevo.")
    } finally {
      setGuardando(false)
    }
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

        {error && <p className="mt-3 text-xs text-red-600">{error}</p>}

        <button
          onClick={aceptar}
          disabled={guardando}
          className="mt-6 h-11 w-full rounded-full bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {guardando ? "Guardando…" : "Entiendo y acepto"}
        </button>
      </div>
    </div>
  )
}