import type { Metadata } from "next"
import Link from "next/link"

import HablaPicShell from "@/components/HablaPicShell"

export const metadata: Metadata = {
  title: "Términos de uso del foro | HablaPic",
}

const SECCIONES = [
  {
    titulo: "1. Qué es este espacio",
    texto:
      "El foro de HablaPic es un espacio comunitario donde familias y personas interesadas pueden compartir preguntas, consejos y experiencias. Las publicaciones son responsabilidad de quien las escribe; HablaPic actúa como anfitrión del espacio, no como autor del contenido publicado por los usuarios.",
  },
  {
    titulo: "2. Contenido no permitido",
    lista: [
      "Spam, publicidad no solicitada o contenido repetitivo sin relación con la comunidad",
      "Acoso, amenazas o incitación a la violencia contra otra persona",
      "Información personal de terceros sin su consentimiento, incluyendo información de menores de edad",
      "Contenido difamatorio, falso con intención de dañar, o ilegal según la ley aplicable",
      "Suplantación de la identidad de otra persona",
    ],
  },
  {
    titulo: "3. Moderación",
    texto:
      "HablaPic se reserva el derecho de ocultar, remover o restringir el acceso a cualquier publicación que incumpla estas normas, con o sin aviso previo. Cualquier usuario puede reportar una publicación; en cuanto se recibe un reporte, el contenido se oculta de inmediato mientras se revisa. Esta moderación no constituye censura: es la administración de un espacio privado bajo reglas que el usuario acepta al utilizar el foro.",
  },
  {
    titulo: "4. Publicaciones anónimas",
    texto:
      "El foro permite publicar sin necesidad de registro. Mientras uses el mismo navegador y dispositivo, puedes editar o eliminar tus propias publicaciones y respuestas. Si cambias de navegador o dispositivo, o borras los datos de navegación, pierdes esa posibilidad sobre lo que ya publicaste (la publicación sigue visible para los demás, solo dejas de poder editarla o borrarla tú). Si deseas poder gestionar tus publicaciones desde cualquier dispositivo, puedes vincular tu correo de forma opcional desde el foro. Dejar un correo de contacto, con o sin vincular la cuenta, es opcional y solo se usa para avisar sobre respuestas a tu publicación; no se muestra públicamente.",
  },
  {
    titulo: "5. Responsabilidad",
    texto:
      "El contenido publicado por los usuarios refleja únicamente la opinión y experiencia de quien lo escribe, y no constituye consejo médico, legal ni profesional. HablaPic no garantiza la exactitud de lo compartido por la comunidad.",
  },
  {
    titulo: "6. Contacto",
    texto:
      "Para reportar contenido, solicitar la remoción de información personal, o cualquier consulta relacionada con el foro: apphablapic@gmail.com",
  },
  {
    titulo: "7. Cambios",
    texto:
      "Estas normas pueden actualizarse. El uso continuado del foro después de un cambio implica su aceptación.",
  },
]

export default function TerminosPage() {
  return (
    <HablaPicShell>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">

          <Link
            href="/hablapic/foro"
            className="text-xs font-semibold text-slate-500 transition hover:text-blue-600"
          >
            ← Volver al foro
          </Link>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Términos de Uso y Normas de Comunidad
          </h1>

          <p className="mt-2 text-xs text-slate-400">Foro HablaPic</p>

          <div className="mt-8 space-y-6">
            {SECCIONES.map((s) => (
              <div key={s.titulo}>
                <h2 className="text-sm font-bold text-slate-900">{s.titulo}</h2>

                {s.texto && (
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {s.texto}
                  </p>
                )}

                {s.lista && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                    {s.lista.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </HablaPicShell>
  )
}