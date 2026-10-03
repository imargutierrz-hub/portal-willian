// Reemplaza esta URL por tu enlace real de Ko-fi cuando crees la cuenta.
const KOFI_URL = "https://ko-fi.com/hablapic"

export default function Apoyo() {
  return (
    <section className="border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          Apóyanos
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
          HablaPic es y seguirá siendo gratis
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
          Si la app le ha servido a tu familia y quieres ayudarnos a
          mantenerla, puedes dejar un aporte voluntario. No es obligatorio ni
          cambia nada de lo que ya tienes disponible gratis.
        </p>

        <a
          href={KOFI_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#13C3FF] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#0fb3ea]"
        >
          ☕ Invítanos un café en Ko-fi
        </a>
      </div>
    </section>
  )
}