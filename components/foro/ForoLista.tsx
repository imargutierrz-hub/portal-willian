"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { FormEvent } from "react"
import { MessageSquare, Plus, Search, X } from "lucide-react"

import { supabase } from "@/lib/supabase"
import { asegurarSesion, guardarAviso } from "@/lib/foroAuth"
import CuentaForo from "@/components/foro/CuentaForo"
import { MAX_TITULO, MAX_CONTENIDO, MAX_NOMBRE, limpiarTexto } from "@/lib/foroTexto"

type Tipo = "pregunta" | "consejo" | "experiencia"

type Post = {
  id: string
  tipo: Tipo
  titulo: string
  contenido: string
  etiquetas: string[]
  nombre_mostrado: string | null
  es_anonimo: boolean
  created_at: string
  total_respuestas: number
}

const FILTROS: { valor: "todas" | Tipo; texto: string }[] = [
  { valor: "todas", texto: "Todas" },
  { valor: "pregunta", texto: "Preguntas" },
  { valor: "consejo", texto: "Consejos" },
  { valor: "experiencia", texto: "Experiencias" },
]

const TEXTO_TIPO: Record<Tipo, string> = {
  pregunta: "Pregunta",
  consejo: "Consejo",
  experiencia: "Experiencia",
}

const CAMPO =
  "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white"

const nombreDe = (p: Post) =>
  p.es_anonimo || !p.nombre_mostrado ? "Anónimo" : p.nombre_mostrado

const fecha = (iso: string) =>
  new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

function Contador({ actual, max }: { actual: number; max: number }) {
  const cerca = actual > max * 0.9
  return (
    <div className="mt-1 flex justify-end">
      <span className={`text-[11px] ${cerca ? "text-amber-600" : "text-slate-400"}`}>
        {actual} / {max}
      </span>
    </div>
  )
}

// =====================================================
// LISTA
// =====================================================

export default function ForoLista() {
  const [filtro, setFiltro] = useState<"todas" | Tipo>("todas")
  const [etiqueta, setEtiqueta] = useState("")
  const [busqueda, setBusqueda] = useState("")
  const [posts, setPosts] = useState<Post[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState("")
  const [formAbierto, setFormAbierto] = useState(false)
  const [version, setVersion] = useState(0)

  useEffect(() => {
    let cancelado = false

    async function cargar() {
      setCargando(true)
      setError("")

      let consulta = supabase
        .from("foro_posts_con_conteo")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50)

      if (filtro !== "todas") consulta = consulta.eq("tipo", filtro)
      if (etiqueta) consulta = consulta.contains("etiquetas", [etiqueta])

      const { data, error: err } = await consulta
      if (cancelado) return

      if (err) setError("No pudimos cargar las publicaciones. Intenta de nuevo.")
      else setPosts((data ?? []) as Post[])
      setCargando(false)
    }

    cargar()
    return () => {
      cancelado = true
    }
  }, [filtro, etiqueta, version])

  function filtrarPorEtiqueta(valor: string) {
    const limpia = valor.trim().toLowerCase().replace(/^#/, "")
    setEtiqueta(limpia)
    setBusqueda(limpia)
  }

  return (
    <section className="min-h-[70vh] bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        <Link
          href="/hablapic"
          className="text-xs font-semibold text-slate-500 transition hover:text-blue-600"
        >
          ← Volver a HablaPic
        </Link>

        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Comunidad
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Foro de papás
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Preguntas, consejos y experiencias entre familias. Puedes leer y
              publicar sin crear una cuenta.
            </p>
          </div>

          <button
            onClick={() => setFormAbierto((a) => !a)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            {formAbierto ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {formAbierto ? "Cerrar" : "Nueva publicación"}
          </button>
        </div>

        <div className="mt-4">
          <CuentaForo />
        </div>

        {formAbierto && (
          <FormularioNuevo
            onPublicado={() => {
              setFormAbierto(false)
              setFiltro("todas")
              setEtiqueta("")
              setBusqueda("")
              setVersion((v) => v + 1)
            }}
          />
        )}

        {/* Filtros */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTROS.map((f) => (
              <button
                key={f.valor}
                onClick={() => setFiltro(f.valor)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  filtro === f.valor
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                }`}
              >
                {f.texto}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              filtrarPorEtiqueta(busqueda)
            }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value)
                if (!e.target.value) setEtiqueta("")
              }}
              placeholder="Buscar por etiqueta (ej: tea)"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pl-9 pr-4 text-xs outline-none transition focus:border-blue-500 md:w-64"
            />
          </form>
        </div>

        {/* Publicaciones */}
        <div className="mt-8 space-y-4">
          {cargando && (
            <p className="text-sm text-slate-400">Cargando publicaciones…</p>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          {!cargando && !error && posts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
              Aún no hay publicaciones aquí. ¡Sé el primero en compartir!
            </div>
          )}

          {posts.map((p) => (
            <article
              key={p.id}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-blue-50 px-3 py-1 font-bold text-blue-600">
                  {TEXTO_TIPO[p.tipo]}
                </span>
                <span className="text-slate-400">
                  {nombreDe(p)} · {fecha(p.created_at)}
                </span>
              </div>

              <Link
                href={`/hablapic/foro/${p.id}`}
                className="mt-3 block text-lg font-bold text-slate-900 transition hover:text-blue-600 after:absolute after:inset-0"
              >
                {p.titulo}
              </Link>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {p.contenido.length > 180
                  ? `${p.contenido.slice(0, 180)}…`
                  : p.contenido}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.etiquetas.map((t) => (
                    <button
                      key={t}
                      onClick={() => filtrarPorEtiqueta(t)}
                      className="relative z-10 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 transition hover:border-blue-300 hover:text-blue-600"
                    >
                      #{t}
                    </button>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <MessageSquare className="h-3.5 w-3.5" />
                  {p.total_respuestas}{" "}
                  {p.total_respuestas === 1 ? "respuesta" : "respuestas"}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

// =====================================================
// FORMULARIO NUEVA PUBLICACIÓN
// =====================================================

function FormularioNuevo({ onPublicado }: { onPublicado: () => void }) {
  const [tipo, setTipo] = useState<Tipo>("pregunta")
  const [titulo, setTitulo] = useState("")
  const [contenido, setContenido] = useState("")
  const [etiquetasTexto, setEtiquetasTexto] = useState("")
  const [nombre, setNombre] = useState("")
  const [anonimo, setAnonimo] = useState(false)
  const [correo, setCorreo] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState("")

  async function publicar(e: FormEvent) {
    e.preventDefault()

    const tituloLimpio = limpiarTexto(titulo.trim())
    const contenidoLimpio = limpiarTexto(contenido.trim())

    if (!tituloLimpio || !contenidoLimpio) {
      setError("Escribe un título y tu mensaje.")
      return
    }

    setEnviando(true)
    setError("")

    try {
      const user = await asegurarSesion()

      const etiquetas = Array.from(
        new Set(
          etiquetasTexto
            .split(",")
            .map((t) => limpiarTexto(t).trim().toLowerCase().replace(/^#/, ""))
            .filter(Boolean)
        )
      ).slice(0, 5)

      const { data, error: err } = await supabase
        .from("foro_posts")
        .insert({
          usuario_id: user.id,
          tipo,
          titulo: tituloLimpio,
          contenido: contenidoLimpio,
          etiquetas,
          es_anonimo: anonimo,
          nombre_mostrado: anonimo ? null : limpiarTexto(nombre).trim() || null,
        })
        .select("id")
        .single()

      if (err || !data) throw err ?? new Error("Sin respuesta")

      if (correo.trim()) await guardarAviso(data.id, correo.trim())

      onPublicado()
    } catch {
      setError("No pudimos publicar. Revisa tu conexión e intenta de nuevo.")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form
      onSubmit={publicar}
      className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-slate-700">Tipo</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as Tipo)}
            className={CAMPO}
          >
            <option value="pregunta">Pregunta</option>
            <option value="consejo">Consejo</option>
            <option value="experiencia">Experiencia</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">
            Etiquetas (opcional, separadas por coma)
          </label>
          <input
            value={etiquetasTexto}
            onChange={(e) => setEtiquetasTexto(e.target.value)}
            placeholder="ej: tea, no verbal, 4 años"
            className={CAMPO}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs font-semibold text-slate-700">Título</label>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          maxLength={MAX_TITULO}
          className={CAMPO}
        />
        <Contador actual={titulo.length} max={MAX_TITULO} />
      </div>

      <div className="mt-4">
        <label className="text-xs font-semibold text-slate-700">Mensaje</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows={6}
          maxLength={MAX_CONTENIDO}
          className={`${CAMPO} resize-none`}
        />
        <Contador actual={contenido.length} max={MAX_CONTENIDO} />
        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          Evita escribir nombres completos, documentos o datos que permitan
          identificar a tu hijo o a otras personas.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-slate-700">
            Nombre para mostrar (opcional)
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={anonimo}
            maxLength={MAX_NOMBRE}
            className={`${CAMPO} disabled:opacity-50`}
          />
          <label className="mt-3 flex items-center gap-2 text-xs text-slate-600">
            <input
              type="checkbox"
              checked={anonimo}
              onChange={(e) => setAnonimo(e.target.checked)}
            />
            Publicar como Anónimo
          </label>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">
            Avisarme por correo si responden (opcional)
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="apphablapic@gmail.com"
            className={CAMPO}
          />
          <p className="mt-2 text-[11px] text-slate-400">
            Tu correo no se muestra públicamente.
          </p>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <p className="mt-4 text-center text-[11px] text-slate-400">
        Al publicar aceptas los{" "}
        <a
          href="/hablapic/foro/terminos"
          target="_blank"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Términos de uso del foro
        </a>
      </p>

      <button
        type="submit"
        disabled={enviando}
        className="mt-3 h-11 w-full rounded-full bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-500 disabled:opacity-60"
      >
        {enviando ? "Publicando…" : "Publicar"}
      </button>
    </form>
  )
}