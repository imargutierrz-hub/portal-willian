"use client"

import { useState } from "react"
import type { FormEvent } from "react"

const CAMPO =
  "mt-2 w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-blue-500 focus:bg-white transition"

export default function ContactoForm() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [estado, setEstado] = useState<"listo" | "enviando" | "enviado" | "error">(
    "listo"
  )

  async function enviar(e: FormEvent) {
    e.preventDefault()
    setEstado("enviando")

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      })

      if (!res.ok) throw new Error()

      setEstado("enviado")
      setNombre("")
      setEmail("")
      setMensaje("")
    } catch {
      setEstado("error")
    }
  }

  if (estado === "enviado") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <p className="text-base font-bold text-slate-900">
          ¡Mensaje enviado!
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Te responderé lo antes posible.
        </p>
        <button
          onClick={() => setEstado("listo")}
          className="mt-5 text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={enviar}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-slate-700">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            maxLength={100}
            required
            className={CAMPO}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            maxLength={254}
            required
            className={CAMPO}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs font-semibold text-slate-700">Mensaje</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={5}
          maxLength={5000}
          required
          placeholder="Cuéntame sobre tu proyecto..."
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      {estado === "error" && (
        <p className="mt-3 text-xs text-red-600">
          No pudimos enviar tu mensaje. Intenta de nuevo en un momento.
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-4 h-11 w-full rounded-full bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500 disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando…" : "Hablemos →"}
      </button>
    </form>
  )
}