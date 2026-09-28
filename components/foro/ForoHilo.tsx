"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { FormEvent } from "react"
import { Flag } from "lucide-react"

import { supabase } from "@/lib/supabase"
import { asegurarSesion } from "@/lib/foroAuth"

type Tipo = "pregunta" | "consejo" | "experiencia"

type Autoria = {
  nombre_mostrado: string | null
  es_anonimo: boolean
  created_at: string
}

type Post = Autoria & {
  id: string
  tipo: Tipo
  titulo: string
  contenido: string
  etiquetas: string[]
}

type Respuesta = Autoria & {
  id: string
  contenido: string
}

const TEXTO_TIPO: Record<Tipo, string> = {
  pregunta: "Pregunta",
  consejo: "Consejo",
  experiencia: "Experiencia",
}

const MOTIVOS = [
  "Spam o publicidad",
  "Contenido inapropiado o agresivo",
  "Información personal expuesta",
  "Otro",
]

const CAMPO =
  "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white"

const nombreDe = (x: Autoria) =>
  x.es_anonimo || !x.nombre_mostrado ? "Anónimo" : x.nombre_mostrado

const fecha = (iso: string) =>
  new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

// =====================================================
// HILO
// =====================================================

export default function ForoHilo() {
  const { id } = useParams<{ id: string }>()

  const [post, setPost] = useState<Post | null>(null)
  const [respuestas, setRespuestas] = useState<Respuesta[]>([])
  const [estado, setEstado] = useState<
    "cargando" | "listo" | "no-disponible" | "reportado"
  >("cargando")
  const [version, setVersion] = useState(0)

  useEffect(() => {
    let cancelado = false

    async function cargar() {
      const { data: p } = await supabase
        .from("foro_posts")
        .select("*")
        .eq("id", id)
        .maybeSingle()

      if (cancelado) return
      if (!p) {
        setEstado("no-disponible")
        return
      }

      const { data: r } = await supabase
        .from("foro_respuestas")
        .select("id, contenido, nombre_mostrado, es_anonimo, created_at")
        .eq("post_id", id)
        .order("created_at", { ascending: true })

      if (cancelado) return
      setPost(p as Post)
      setRespuestas((r ?? []) as Respuesta[])
      setEstado("listo")
    }

    cargar()
    return () => {
      cancelado = true
    }
  }, [id, version])

  // Un solo reporte oculta el contenido al instante (lo hace el trigger en Supabase)
  async function reportar(
    objetivo: { post_id: string } | { respuesta_id: string },
    motivo: string
  ) {
    const { error } = await supabase
      .from("foro_reportes")
      .insert({ ...objetivo, motivo })
    if (error) throw error
  }

  return (
    <section className="min-h-[70vh] bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">

        <Link
          href="/hablapic/foro"
          className="text-xs font-semibold text-slate-500 transition hover:text-blue-600"
        >
          ← Volver al foro
        </Link>

        {estado === "cargando" && (
          <p className="mt-8 text-sm text-slate-400">Cargando…</p>
        )}

        {estado === "no-disponible" && (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
            Esta publicación no está disponible.
          </div>
        )}

        {estado === "reportado" && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            Gracias por avisar. Ocultamos esta publicación mientras la revisamos.
          </div>
        )}

        {estado === "listo" && post && (
          <>
            <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-blue-50 px-3 py-1 font-bold text-blue-600">
                  {TEXTO_TIPO[post.tipo]}
                </span>
                <span className="text-slate-400">
                  {nombreDe(post)} · {fecha(post.created_at)}
                </span>
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {post.titulo}
              </h1>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">
                {post.contenido}
              </p>

              {post.etiquetas.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.etiquetas.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Reportar
                  onConfirmar={async (motivo) => {
                    await reportar({ post_id: post.id }, motivo)
                    setEstado("reportado")
                  }}
                />
              </div>
            </article>

            <h2 className="mt-10 text-lg font-bold text-slate-900">
              {respuestas.length}{" "}
              {respuestas.length === 1 ? "respuesta" : "respuestas"}
            </h2>

            <div className="mt-4 space-y-3">
              {respuestas.length === 0 && (
                <p className="text-sm text-slate-400">
                  Todavía nadie ha respondido. ¡Tu experiencia puede ayudar!
                </p>
              )}

              {respuestas.map((r) => (
                <div
                  key={r.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-xs text-slate-400">
                    {nombreDe(r)} · {fecha(r.created_at)}
                  </p>

                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {r.contenido}
                  </p>

                  <div className="mt-3">
                    <Reportar
                      onConfirmar={async (motivo) => {
                        await reportar({ respuesta_id: r.id }, motivo)
                        setRespuestas((lista) =>
                          lista.filter((x) => x.id !== r.id)
                        )
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <FormularioRespuesta
              postId={post.id}
              onEnviada={() => setVersion((v) => v + 1)}
            />
          </>
        )}

      </div>
    </section>
  )
}

// =====================================================
// REPORTAR
// =====================================================

function Reportar({
  onConfirmar,
}: {
  onConfirmar: (motivo: string) => Promise<void>
}) {
  const [abierto, setAbierto] = useState(false)
  const [motivo, setMotivo] = useState(MOTIVOS[0])
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState("")

  if (!abierto) {
    return (
      <button
        onClick={() => setAbierto(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-red-600"
      >
        <Flag className="h-3.5 w-3.5" />
        Reportar
      </button>
    )
  }

  async function confirmar() {
    setEnviando(true)
    setError("")
    try {
      await onConfirmar(motivo)
    } catch {
      setError("No pudimos enviar el reporte. Intenta de nuevo.")
      setEnviando(false)
    }
  }

  return (
    <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
      <p className="text-xs leading-5 text-slate-600">
        Al reportar, este contenido se oculta de inmediato mientras lo
        revisamos.
      </p>

      <select
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
        className={CAMPO}
      >
        {MOTIVOS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

      <div className="mt-3 flex gap-2">
        <button
          onClick={confirmar}
          disabled={enviando}
          className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-500 disabled:opacity-60"
        >
          {enviando ? "Enviando…" : "Confirmar reporte"}
        </button>

        <button
          onClick={() => setAbierto(false)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

// =====================================================
// FORMULARIO DE RESPUESTA
// =====================================================

function FormularioRespuesta({
  postId,
  onEnviada,
}: {
  postId: string
  onEnviada: () => void
}) {
  const [contenido, setContenido] = useState("")
  const [nombre, setNombre] = useState("")
  const [anonimo, setAnonimo] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState("")

  async function responder(e: FormEvent) {
    e.preventDefault()

    if (!contenido.trim()) {
      setError("Escribe tu respuesta.")
      return
    }

    setEnviando(true)
    setError("")

    try {
      const user = await asegurarSesion()

      const { error: err } = await supabase.from("foro_respuestas").insert({
        post_id: postId,
        usuario_id: user.id,
        contenido: contenido.trim(),
        es_anonimo: anonimo,
        nombre_mostrado: anonimo ? null : nombre.trim() || null,
      })

      if (err) throw err

      setContenido("")
      onEnviada()
    } catch {
      setError("No pudimos enviar tu respuesta. Intenta de nuevo.")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form
      onSubmit={responder}
      className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h3 className="text-sm font-bold text-slate-900">Escribe una respuesta</h3>

      <textarea
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        rows={5}
        maxLength={3000}
        className={`${CAMPO} resize-none`}
      />

      <p className="mt-2 text-[11px] leading-5 text-slate-400">
        Evita escribir nombres completos, documentos o datos que permitan
        identificar a otras personas.
      </p>

      <div className="mt-4">
        <label className="text-xs font-semibold text-slate-700">
          Nombre para mostrar (opcional)
        </label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={anonimo}
          maxLength={40}
          className={`${CAMPO} disabled:opacity-50`}
        />

        <label className="mt-3 flex items-center gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            checked={anonimo}
            onChange={(e) => setAnonimo(e.target.checked)}
          />
          Responder como Anónimo
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="mt-5 h-11 w-full rounded-full bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-500 disabled:opacity-60"
      >
        {enviando ? "Enviando…" : "Responder"}
      </button>
    </form>
  )
}