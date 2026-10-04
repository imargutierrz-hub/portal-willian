"use client"

import { useEffect, useState } from "react"
import { Mail } from "lucide-react"

import { supabase } from "@/lib/supabase"
import { vincularCorreo, entrarConCorreo } from "@/lib/foroAuth"

export default function CuentaForo() {
  const [cargando, setCargando] = useState(true)
  const [correoActual, setCorreoActual] = useState<string | null>(null)
  const [abierto, setAbierto] = useState<"vincular" | "entrar" | null>(null)
  const [correo, setCorreo] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    function leerSesion(userEmail: string | null | undefined, esAnonimo: boolean | undefined) {
      setCorreoActual(!esAnonimo && userEmail ? userEmail : null)
    }

    supabase.auth.getSession().then(({ data }) => {
      leerSesion(data.session?.user.email, data.session?.user.is_anonymous)
      setCargando(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_evento, session) => {
      leerSesion(session?.user.email, session?.user.is_anonymous)
    })

    return () => sub.subscription.unsubscribe()
  }, [])

  async function enviar() {
    if (!correo.trim()) return
    setEnviando(true)
    setError("")
    try {
      if (abierto === "vincular") await vincularCorreo(correo.trim())
      else await entrarConCorreo(correo.trim())
      setEnviado(true)
    } catch {
      setError("No pudimos enviar el enlace. Revisa el correo e intenta de nuevo.")
    } finally {
      setEnviando(false)
    }
  }

  if (cargando) return null

  if (correoActual) {
    return (
      <p className="text-xs text-slate-500">
        Cuenta guardada: <span className="font-semibold text-slate-700">{correoActual}</span>
      </p>
    )
  }

  if (!abierto) {
    return (
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <button
          onClick={() => setAbierto("vincular")}
          className="inline-flex items-center gap-1.5 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          <Mail className="h-3.5 w-3.5" />
          Guardar mi cuenta con correo
        </button>
        <span className="text-slate-300">·</span>
        <button
          onClick={() => setAbierto("entrar")}
          className="font-semibold text-slate-500 transition hover:text-slate-700"
        >
          Ya tengo cuenta, entrar
        </button>
      </div>
    )
  }

  if (enviado) {
    return (
      <p className="text-xs text-slate-500">
        Revisa <span className="font-semibold">{correo}</span> y abre el enlace para{" "}
        {abierto === "vincular" ? "guardar tu cuenta" : "entrar"}.
      </p>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="apphablapic@gmail.com"
        className="h-9 rounded-full border border-slate-200 bg-white px-3 text-xs outline-none transition focus:border-blue-500"
      />
      <button
        onClick={enviar}
        disabled={enviando}
        className="rounded-full bg-blue-600 px-4 py-1.5 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
      >
        {enviando ? "Enviando…" : "Enviar enlace"}
      </button>
      <button
        onClick={() => setAbierto(null)}
        className="text-slate-400 transition hover:text-slate-600"
      >
        Cancelar
      </button>
      {error && <p className="w-full text-red-600">{error}</p>}
    </div>
  )
}