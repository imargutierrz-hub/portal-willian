import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Download,
  MessageSquare,
  PackageOpen,
  Store,
  PlayCircle,
  Check,
  Sparkles,
} from "lucide-react"

import HablaPicShell from "@/components/HablaPicShell"
import AdSlot from "@/components/AdSlot"

// =====================================================
// CONFIGURACIÓN
// =====================================================

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.andresgutierrez.hablapic"

const VIDEO_URL = ""

// =====================================================
// DATOS
// =====================================================

const pasos = [
  {
    numero: "01",
    titulo: "Elige los pictogramas",
    texto:
      "Toca las imágenes del tablero para seleccionar las palabras que quieres comunicar.",
  },
  {
    numero: "02",
    titulo: "Construye tu frase",
    texto:
      "Las palabras seleccionadas aparecen en la frase. Puedes borrar la última o comenzar de nuevo.",
  },
  {
    numero: "03",
    titulo: "Toca Hablar",
    texto:
      "HablaPic convierte la frase en voz para facilitar la comunicación.",
  },
  {
    numero: "04",
    titulo: "Guarda tus favoritas",
    texto:
      "Guarda las frases que utilizas con frecuencia para tenerlas disponibles rápidamente.",
  },
]

const actualizaciones = [
  {
    version: "Reciente",
    titulo: "Mejor voz en teléfonos Samsung",
    texto:
      "Si una voz falla, HablaPic prueba automáticamente otra disponible y recuerda cuál funciona.",
  },
  {
    version: "Reciente",
    titulo: "Frases más cómodas",
    texto:
      "Los botones de Hablar, borrar, limpiar y favorita se mantienen visibles aunque la frase crezca.",
  },
]

const accesos = [
  {
    icono: MessageSquare,
    titulo: "Foro de papás",
    texto:
      "Comparte experiencias, cuenta qué les ha funcionado y encuentra apoyo de otras familias.",
    href: "/hablapic/foro",
    accion: "Entrar al foro",
  },
  {
    icono: PackageOpen,
    titulo: "Banco de pictogramas",
    texto:
      "Encuentra pictogramas y categorías para ampliar y personalizar tu tablero.",
    href: "/hablapic/pictogramas",
    accion: "Ver pictogramas",
  },
  {
    icono: Store,
    titulo: "Profesionales y tiendas",
    texto:
      "Descubre terapeutas, profesionales y productos relacionados con la comunicación.",
    href: "/hablapic/profesionales",
    accion: "Conocerlos",
  },
]

// =====================================================
// COMPONENTE
// =====================================================

export default function HablaPicPage() {
  return (
    <HablaPicShell>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-[#07101d]">

        {/* Imagen */}

        <div className="absolute inset-0">
          <Image
            src="/banner_hablapic.jpg"
            alt="HablaPic, aplicación de comunicación mediante pictogramas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay para mejorar lectura */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#07101d]/90 via-[#07101d]/55 to-[#07101d]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/35 to-transparent" />
        </div>

        {/* Contenido */}

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-10">

          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Comunicación más accesible
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Comunicar también es{" "}
              <span className="text-cyan-300">tener voz.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              HablaPic utiliza pictogramas para ayudar a las personas no
              hablantes a construir frases y comunicarse de una manera sencilla,
              visual y personalizable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {PLAY_STORE_URL ? (
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  <Download className="h-4 w-4" />
                  Descargar gratis
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
                  <Download className="h-4 w-4" />
                  Próximamente
                </span>
              )}

              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Cómo funciona
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>

            {/* Beneficios rápidos */}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" />
                Gratis
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" />
                9 idiomas
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" />
                Personalizable
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* =================================================
          INTRODUCCIÓN
      ================================================= */}

      <section className="border-b border-slate-100 bg-white py-16">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            HablaPic
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Una herramienta pensada para facilitar la comunicación
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
            El objetivo es sencillo: seleccionar imágenes, formar una frase y
            convertirla en voz. Todo desde una interfaz visual que puede
            adaptarse a las necesidades de cada persona.
          </p>

        </div>

      </section>


      {/* =================================================
          COMUNIDAD
      ================================================= */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Comunidad
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Mucho más que una aplicación
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              También estamos construyendo un espacio para familias,
              profesionales y personas interesadas en la comunicación
              aumentativa y alternativa.
            </p>

          </div>


          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

            {accesos.map((a) => {
              const Icono = a.icono

              return (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icono className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {a.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {a.texto}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    {a.accion}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>

                </Link>
              )
            })}

          </div>

          <p className="mt-6 text-xs text-slate-400">
            La comunidad requiere una cuenta gratuita en esta página. La
            aplicación HablaPic no necesita una cuenta para utilizarse.
          </p>

        </div>

      </section>


      <AdSlot slot="SLOT_HABLAPIC_1" />


      {/* =================================================
          CÓMO FUNCIONA
      ================================================= */}

      <section
        id="como-funciona"
        className="scroll-mt-20 bg-white py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">

            {/* Pasos */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Así funciona
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Crear una frase es muy sencillo
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                HablaPic está pensada para que el proceso sea visual y fácil
                de entender.
              </p>


              <div className="mt-10 space-y-7">

                {pasos.map((p) => (

                  <div
                    key={p.numero}
                    className="flex gap-5"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-sm">
                      {p.numero}
                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900">
                        {p.titulo}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {p.texto}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Video */}

            <div className="relative">

              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-200">

                {VIDEO_URL ? (

                  <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-[330px] flex-col items-center justify-center gap-4 text-white"
                  >

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur transition group-hover:scale-110">
                      <PlayCircle className="h-12 w-12 text-cyan-300" />
                    </div>

                    <span className="text-sm font-bold">
                      Ver el video de instrucciones
                    </span>

                  </a>

                ) : (

                  <div className="flex min-h-[330px] flex-col items-center justify-center px-8 text-center text-white">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                      <PlayCircle className="h-11 w-11 text-cyan-300" />
                    </div>

                    <h3 className="mt-6 font-bold">
                      Aprende a utilizar HablaPic
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                      Aquí podrás encontrar próximamente un video explicando
                      cómo utilizar las principales funciones de la aplicación.
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          ACTUALIZACIONES
      ================================================= */}

      <section
        id="actualizaciones"
        className="border-y border-slate-100 bg-slate-50 py-20"
      >

        <div className="mx-auto max-w-4xl px-6 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Novedades
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Actualizaciones
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Estas son algunas de las mejoras incorporadas recientemente a
              HablaPic.
            </p>

          </div>


          <div className="mt-10 space-y-4">

            {actualizaciones.map((u, i) => (

              <article
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
              >

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      {u.version}
                    </span>

                    <h3 className="mt-3 font-bold text-slate-900">
                      {u.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {u.texto}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA FINAL
      ================================================= */}

      <section className="bg-[#07101d] py-20">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Empieza a utilizar HablaPic
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Descarga la aplicación gratuitamente y descubre una nueva forma
            visual de construir frases y comunicarte.
          </p>

          {PLAY_STORE_URL && (

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <Download className="h-4 w-4" />
              Descargar HablaPic
            </a>

          )}

        </div>

      </section>

    </HablaPicShell>
  )
}
