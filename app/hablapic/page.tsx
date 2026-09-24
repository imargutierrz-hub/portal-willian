import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Download,
  MessageSquare,
  PackageOpen,
  Store,
  PlayCircle,
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
    titulo: "Elige los pictogramas",
    texto: "Toca las imágenes del tablero para agregarlas a tu frase.",
  },
  {
    titulo: "Arma la frase",
    texto:
      "Las imágenes elegidas aparecen arriba. Con borrar quitas la última y con limpiar empiezas de nuevo.",
  },
  {
    titulo: "Toca Hablar",
    texto:
      "La app lee la frase en voz alta. Funciona en 9 idiomas y utiliza el idioma del teléfono.",
  },
  {
    titulo: "Guarda tus favoritas",
    texto:
      "Las frases que usas a diario quedan disponibles para acceder a ellas rápidamente.",
  },
]

const actualizaciones = [
  {
    version: "Versión reciente",
    titulo: "Mejor voz en teléfonos Samsung",
    texto:
      "Si una voz falla, la app prueba otra automáticamente y recuerda cuál funciona.",
  },
  {
    version: "Versión reciente",
    titulo: "Frases más cómodas",
    texto:
      "Los botones de Hablar, borrar, limpiar y favorita ya no se cortan cuando la frase crece.",
  },
]

const accesos = [
  {
    icono: MessageSquare,
    titulo: "Foro de papás",
    texto:
      "Cuenta la condición de tu hijo, qué les ha servido y resuelve dudas con otros papás.",
    href: "/hablapic/foro",
    accion: "Entrar al foro",
  },
  {
    icono: PackageOpen,
    titulo: "Banco de pictogramas",
    texto:
      "Descarga paquetes y categorías completas de una vez, o comparte los que creaste.",
    href: "/hablapic/pictogramas",
    accion: "Ver pictogramas",
  },
  {
    icono: Store,
    titulo: "Profesionales y tiendas",
    texto:
      "Terapeutas y vendedores de productos y servicios para personas no hablantes.",
    href: "/hablapic/profesionales",
    accion: "Conocerlos",
  },
]

// =====================================================
// PÁGINA
// =====================================================

export default function HablaPicPage() {
  return (
    <HablaPicShell>

      {/* =================================================
          PORTADA / HERO
      ================================================= */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          min-h-[620px]
          sm:min-h-[620px]
          lg:min-h-0
          lg:aspect-[1488/720]
          flex
          items-center
        "
      >

        {/* Imagen de fondo */}

        <Image
          src="/banner_hablapic.jpg"
          alt="HablaPic, comunicación y voz"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            z-0
          "
        />

        {/* Capa suave para mejorar la lectura del texto */}

        <div className="absolute inset-0 bg-black/10 z-[1]" />

        {/* Contenido */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-5
            sm:px-6
            lg:px-10
            w-full
            py-16
            sm:py-20
            lg:py-10
            flex
            items-center
          "
        >

          <div
            className="
              w-full
              max-w-xl
              bg-slate-950/40
              p-6
              sm:p-8
              lg:p-8
              rounded-3xl
              backdrop-blur-sm
              border
              border-white/15
              shadow-xl
            "
          >

            <h1
              className="
                text-2xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                tracking-tight
                text-white
                drop-shadow-md
              "
            >
              Una app para comunicarse con pictogramas
            </h1>

            <p
              className="
                mt-3
                text-sm
                sm:text-base
                text-slate-100
                leading-relaxed
                drop-shadow
              "
            >
              Para personas no hablantes, y un espacio donde las familias se
              apoyan entre sí.
            </p>

            <div
              className="
                mt-6
                flex
                flex-col
                sm:flex-row
                sm:flex-wrap
                gap-3
              "
            >

              {PLAY_STORE_URL ? (
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-blue-600
                    hover:bg-blue-500
                    text-white
                    px-5
                    py-3
                    rounded-full
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition
                    shadow-lg
                    w-full
                    sm:w-auto
                  "
                >
                  <Download className="w-4 h-4" />
                  Descargar en Google Play
                </a>
              ) : (
                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-slate-900/80
                    backdrop-blur
                    px-5
                    py-3
                    rounded-full
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-slate-300
                    w-full
                    sm:w-auto
                  "
                >
                  <Download className="w-4 h-4" />
                  Pronto en Google Play
                </span>
              )}

              <a
                href="#como-funciona"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/30
                  bg-black/20
                  backdrop-blur
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-white
                  hover:border-blue-400
                  hover:bg-black/40
                  transition
                  w-full
                  sm:w-auto
                "
              >
                Cómo funciona
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          INTRODUCCIÓN
      ================================================= */}

      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            HablaPic
          </p>

          <h2
            className="
              mt-3
              text-3xl
              lg:text-4xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            Una herramienta pensada para facilitar la comunicación
          </h2>

          <p
            className="
              mt-5
              mx-auto
              max-w-2xl
              text-base
              text-slate-500
              leading-7
            "
          >
            El objetivo es sencillo: seleccionar imágenes, formar una frase y
            convertirla en voz. Todo desde una interfaz visual que puede
            adaptarse a las necesidades de cada persona.
          </p>

        </div>

      </section>


      {/* =================================================
          COMUNIDAD
      ================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Comunidad
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Comunidad HablaPic
            </h2>

            <p className="mt-4 text-base text-slate-500 leading-7">
              Un espacio para familias, profesionales y personas interesadas
              en mejorar las herramientas de comunicación.
            </p>

          </div>


          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">

            {accesos.map((a) => {
              const Icono = a.icono

              return (
                <Link
                  key={a.href}
                  href={a.href}
                  className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-7
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-xl
                    hover:shadow-slate-200/60
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      text-blue-600
                      transition
                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    <Icono className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {a.titulo}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500 leading-6">
                    {a.texto}
                  </p>

                  <span
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-blue-600
                    "
                  >
                    {a.accion}

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </Link>
              )
            })}

          </div>

          <p className="mt-6 text-xs text-slate-400">
            Para participar en la comunidad necesitas crear una cuenta
            gratuita en esta página. La aplicación HablaPic no necesita una
            cuenta para utilizarse.
          </p>

        </div>

      </section>


      {/* =================================================
          PUBLICIDAD
      ================================================= */}

      <AdSlot slot="SLOT_HABLAPIC_1" />


      {/* =================================================
          CÓMO FUNCIONA
      ================================================= */}

      <section
        id="como-funciona"
        className="
          py-20
          bg-white
          scroll-mt-20
        "
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              lg:items-center
            "
          >

            {/* Pasos */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Así funciona
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  lg:text-4xl
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                Crear una frase es muy sencillo
              </h2>

              <p className="mt-4 max-w-xl text-base text-slate-500 leading-7">
                HablaPic está pensada para que el proceso sea visual y fácil
                de entender.
              </p>


              <div className="mt-10 space-y-7">

                {pasos.map((p, i) => (

                  <div
                    key={p.titulo}
                    className="flex gap-5"
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-600
                        text-sm
                        font-bold
                        text-white
                        shadow-sm
                      "
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900">
                        {p.titulo}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500 leading-6">
                        {p.texto}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Video */}

            <div>

              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-slate-950
                  shadow-2xl
                  shadow-slate-200
                "
              >

                {VIDEO_URL ? (

                  <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      flex
                      min-h-[330px]
                      flex-col
                      items-center
                      justify-center
                      gap-4
                      text-white
                    "
                  >

                    <div
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        backdrop-blur
                        transition
                        group-hover:scale-110
                      "
                    >
                      <PlayCircle className="h-12 w-12 text-cyan-300" />
                    </div>

                    <span className="text-sm font-bold">
                      Ver el video de instrucciones
                    </span>

                  </a>

                ) : (

                  <div
                    className="
                      flex
                      min-h-[330px]
                      flex-col
                      items-center
                      justify-center
                      px-8
                      text-center
                      text-white
                    "
                  >

                    <div
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                      "
                    >
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
        className="
          py-20
          bg-slate-50
          border-y
          border-slate-100
        "
      >

        <div className="max-w-4xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Novedades
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Actualizaciones
            </h2>

            <p className="mt-4 mx-auto max-w-xl text-sm text-slate-500 leading-6">
              Estas son algunas de las mejoras incorporadas recientemente a
              HablaPic.
            </p>

          </div>


          <div className="mt-10 space-y-4">

            {actualizaciones.map((u, i) => (

              <article
                key={i}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition
                  hover:shadow-md
                "
              >

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-blue-600
                  "
                >
                  {u.version}
                </span>

                <h3 className="mt-3 font-bold text-slate-900">
                  {u.titulo}
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-6">
                  {u.texto}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA FINAL
      ================================================= */}

      <section className="py-20 bg-[#07101d]">

        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">

          <h2
            className="
              text-3xl
              sm:text-4xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Empieza a utilizar HablaPic
          </h2>

          <p
            className="
              mt-4
              mx-auto
              max-w-xl
              text-sm
              sm:text-base
              text-slate-400
              leading-6
            "
          >
            Descarga la aplicación gratuitamente y descubre una nueva forma
            visual de construir frases y comunicarte.
          </p>

          {PLAY_STORE_URL && (

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-950/40
                transition
                hover:-translate-y-0.5
                hover:bg-blue-500
              "
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