import Image from "next/image"
import { ShieldAlert } from "lucide-react"

// Para editar un texto o cambiar una imagen, solo modifica esta lista.
// Las imágenes viven en /public/hablapic/guia/
const pasos = [
  {
    titulo: "Abre la app y toca Comenzar",
    texto: [
      "Al abrir HablaPic verás la pantalla de bienvenida. Toca Comenzar para entrar al tablero.",
      "Si prefieres entrar directo cada vez, puedes omitir esta pantalla desde Configuración.",
    ],
    imagen: "/hablapic/guia/01-bienvenida.jpg",
    ancho: 1200,
    alto: 537,
    alt: "Pantalla de bienvenida de HablaPic con el botón Comenzar",
  },
  {
    titulo: "Arma tu frase y presiona Hablar",
    texto: [
      "Toca los botones de colores para armar una frase. Cada botón se dice en voz alta apenas lo tocas.",
      "Presiona Hablar, arriba, para que la app diga toda la frase junta. Para quitar una palabra, tócala en la frase.",
      "Los botones están ordenados por categorías de colores: Personas, Acciones, Respuestas, Necesidades, Social y Sentimientos.",
    ],
    imagen: "/hablapic/guia/02-tablero.jpg",
    ancho: 1200,
    alto: 537,
    alt: "Tablero principal de HablaPic con botones de colores por categoría",
  },
  {
    titulo: "Guarda tus frases favoritas",
    texto: [
      "Las frases que usas a diario se pueden guardar para decirlas rápido, con un solo toque, sin armarlas otra vez.",
      "Desde la lista de frases guardadas también puedes borrar las que ya no necesites.",
    ],
    imagen: "/hablapic/guia/03-frases-guardadas.jpg",
    ancho: 1200,
    alto: 537,
    alt: "Lista de frases guardadas en HablaPic",
  },
  {
    titulo: "Crea tus propios botones",
    texto: [
      "Toca el botón azul «+» para crear un botón nuevo. Escribe la palabra o frase y elige una imagen: puedes tomar una foto, elegir una de la galería, usar un emoji grande o pedirle a tu IA (ChatGPT o Gemini) que la cree.",
      "Elige la categoría del botón y toca Guardar. Para cambiar la foto o el texto de un botón que ya existe, mantenlo presionado.",
    ],
    imagen: "/hablapic/guia/04-nuevo-boton.jpg",
    ancho: 1000,
    alto: 849,
    alt: "Formulario para crear un botón nuevo en HablaPic",
  },
  {
    titulo: "Agrega muchos pictogramas de una vez",
    texto: [
      "Con la carga masiva puedes subir muchas imágenes en un solo paso. Primero elige la categoría donde se guardarán y luego elige las imágenes desde tus archivos.",
      "Ponle nombre a cada imagen y súbelas todas juntas; espera a que termine el proceso. Al final puedes borrar las imágenes originales de tu celular: quedan guardadas dentro de la app.",
    ],
    imagen: "/hablapic/guia/05-carga-masiva.jpg",
    ancho: 1200,
    alto: 537,
    alt: "Pantalla de carga masiva de imágenes en HablaPic",
  },
  {
    titulo: "Ajusta la app a tu medida",
    texto: [
      "Desde Configuración puedes elegir el idioma (la app está en 9 idiomas y por defecto usa el del celular), ajustar el tono y la velocidad de la voz y escoger entre las voces disponibles.",
      "También puedes poner tu propia imagen de fondo y borrar todos los botones si quieres empezar de cero. Para entrar a Configuración hay que resolver una suma de tres cifras: así nadie cambia los ajustes sin querer.",
      "Si tu celular no tiene instalada la voz del idioma, instálala en los ajustes del celular, en «Salida de texto a voz».",
    ],
    imagen: "/hablapic/guia/06-configuracion.jpg",
    ancho: 900,
    alto: 1181,
    alt: "Pantalla de configuración de HablaPic con idioma, tono y velocidad",
  },
  {
    titulo: "Una guía rápida dentro de la app",
    texto: [
      "HablaPic incluye una guía corta que explica lo esencial en cuatro pasos: cómo armar frases, cómo agregar o cambiar botones, la configuración y la carga masiva.",
      "Puedes saltarla o repasarla con el botón «?» cuando lo necesites.",
    ],
    imagen: "/hablapic/guia/07-guia-en-la-app.jpg",
    ancho: 1200,
    alto: 537,
    alt: "Guía rápida «¿Cómo se usa esta app?» dentro de HablaPic",
  },
  {
    titulo: "Un mensaje de papá a papá",
    texto: [
      "Dentro de la app también encontrarás la historia de por qué existe HablaPic, cómo compartirla de forma segura y cómo pedir soporte desde mi página web.",
      "Si quieres, puedes hacer un aporte voluntario como agradecimiento: el pago se hace de forma segura con Google Play y es totalmente opcional.",
      "Los enlaces (política de privacidad y mi página web) y el botón de aporte están protegidos con un candado: hay que resolver una multiplicación de dos cifras. Así los niños no salen de la app ni hacen un pago por accidente.",
    ],
    imagen: "/hablapic/guia/08-mensaje.jpg",
    ancho: 1000,
    alto: 1251,
    alt: "Mensaje del creador de HablaPic dentro de la app",
  },
]

export default function GuiaPasoAPaso({ playStoreUrl }: { playStoreUrl?: string }) {
  return (
    <section
      id="guia"
      className="scroll-mt-20 border-t border-slate-100 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Guía paso a paso
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Conoce HablaPic por dentro
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Así se ve la app y lo que puedes hacer en cada pantalla.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {pasos.map((p, i) => (
            <div
              key={p.titulo}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                  {p.titulo}
                </h3>

                <div className="mt-3 space-y-3">
                  {p.texto.map((parrafo) => (
                    <p
                      key={parrafo}
                      className="text-sm leading-7 text-slate-500"
                    >
                      {parrafo}
                    </p>
                  ))}
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
                  <Image
                    src={p.imagen}
                    alt={p.alt}
                    width={p.ancho}
                    height={p.alto}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso contra copias */}
        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-start gap-4">
            <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Descarga HablaPic solo desde Google Play
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Algunas personas están subiendo copias de HablaPic a otras
                plataformas y, en algunos casos, la cobran. Esas copias pueden
                estar modificadas con código malicioso y no reciben
                actualizaciones. La app oficial es gratuita y por ahora solo
                está publicada en Google Play.
              </p>

              {playStoreUrl && (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500"
                >
                  Ir a Google Play
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}