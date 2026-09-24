import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, MessageSquare, PackageOpen, Store, PlayCircle } from "lucide-react"
import HablaPicShell from "@/components/HablaPicShell"
import AdSlot from "@/components/AdSlot"

// ===== Edita aquí =====
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.andresgutierrez.hablapic" // pega el enlace de Google Play cuando esté publicada
const VIDEO_URL = "" // pega el enlace del video de instrucciones (YouTube)

const pasos = [
  {
    titulo: "Elige los pictogramas",
    texto: "Toca las imágenes del tablero para agregarlas a tu frase.",
  },
  {
    titulo: "Arma la frase",
    texto: "Las imágenes elegidas aparecen arriba. Con borrar quitas la última y con limpiar empiezas de nuevo.",
  },
  {
    titulo: "Toca Hablar",
    texto: "La app lee la frase en voz alta. Funciona en 9 idiomas y elige el del teléfono.",
  },
  {
    titulo: "Guarda tus favoritas",
    texto: "Las frases que usas a diario quedan a un toque.",
  },
]

const actualizaciones = [
  {
    version: "Versión reciente",
    texto:
      "Mejor voz en teléfonos Samsung: si una voz falla, la app prueba otra automáticamente y recuerda cuál funciona.",
  },
  {
    version: "Versión reciente",
    texto: "Los botones de Hablar, borrar, limpiar y favorita ya no se cortan cuando la frase crece.",
  },
]

const accesos = [
  {
    icono: MessageSquare,
    titulo: "Foro de papás",
    texto: "Cuenta la condición de tu hijo, qué les ha servido y resuelve dudas con otros papás.",
    href: "/hablapic/foro",
    accion: "Entrar al foro",
  },
  {
    icono: PackageOpen,
    titulo: "Banco de pictogramas",
    texto: "Descarga paquetes y categorías completas de una vez, o comparte los que creaste.",
    href: "/hablapic/pictogramas",
    accion: "Ver pictogramas",
  },
  {
    icono: Store,
    titulo: "Profesionales y tiendas",
    texto: "Terapeutas y vendedores de productos y servicios para personas no hablantes.",
    href: "/hablapic/profesionales",
    accion: "Conocerlos",
  },
]

export default function HablaPicPage() {
  return (
    <HablaPicShell>
      {/* Portada */}
      {/* Portada Hero con imagen como fondo completo sin recortes */}
      <section className="relative w-full aspect-[1488/720] flex items-center overflow-hidden">
        {/* La imagen es todo el fondo */}
        <Image
          src="/banner_hablapic.jpg"
          alt="HablaPic, comunicación y voz"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center z-0"
        />

        {/* Contenido flotante sobre la parte izquierda de la imagen */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-xl bg-slate-950/40 p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-white/15">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              Una app para comunicarse con pictogramas
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow">
              Para personas no hablantes, y un espacio donde las familias se apoyan entre sí.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {PLAY_STORE_URL ? (
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Descargar en Google Play
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-300">
                  <Download className="w-4 h-4" />
                  Pronto en Google Play
                </span>
              )}

              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-black/20 backdrop-blur text-xs sm:text-sm font-semibold text-white hover:border-blue-400 hover:bg-black/40 transition"
              >
                Cómo funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accesos a la comunidad */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Comunidad HablaPic</h2>
          <p className="mt-2 text-sm text-slate-500 max-w-xl">
            Para participar necesitas crear una cuenta gratis en esta página. La app no la pide.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {accesos.map((a) => {
              const Icono = a.icono
              return (
                <Link
                  key={a.href}
                  href={a.href}
                  className="rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition"
                >
                  <Icono className="w-6 h-6 text-blue-500" />
                  <h3 className="mt-4 font-bold text-slate-900">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-6">{a.texto}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                    {a.accion}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <AdSlot slot="SLOT_HABLAPIC_1" />

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Cómo funciona</h2>
            <ol className="mt-8 space-y-6">
              {pasos.map((p, i) => (
                <li key={p.titulo} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{p.titulo}</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-6">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            {VIDEO_URL ? (
              <a
                href={VIDEO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl bg-[#07101d] text-white hover:bg-[#0b1a2e] transition"
              >
                <PlayCircle className="w-14 h-14 text-cyan-300" />
                <span className="text-sm font-semibold">Ver el video de instrucciones</span>
              </a>
            ) : (
              <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white text-slate-400">
                <PlayCircle className="w-14 h-14" />
                <span className="text-sm">El video de instrucciones estará aquí pronto</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Actualizaciones */}
      <section id="actualizaciones" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Actualizaciones</h2>
          <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {actualizaciones.map((u, i) => (
              <li key={i} className="py-5">
                <p className="text-xs font-bold text-blue-600">{u.version}</p>
                <p className="mt-1 text-sm text-slate-600 leading-6">{u.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </HablaPicShell>
  )
}