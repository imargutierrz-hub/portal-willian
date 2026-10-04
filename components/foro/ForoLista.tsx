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
          mantenerla, puedes dejar un aporte voluntario usando el panel de
          aquí abajo, o ingresando directamente a nuestra página en Ko-fi. No
          es obligatorio ni cambia nada de lo que ya tienes disponible gratis.
        </p>

        {/* Panel de Ko-fi incrustado directamente */}
        <div className="mt-8 flex justify-center">
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/hablapic/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{
              border: "none",
              width: "100%",
              padding: "4px",
              background: "#f9f9f9",
            }}
            height="712"
            title="hablapic"
            className="max-w-md rounded-2xl shadow-md"
          ></iframe>
        </div>

        <a
          href={KOFI_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#13C3FF] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#0fb3ea]"
        >
          ☕ Ingresar a Ko-fi
        </a>

        <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-slate-400">
          El panel de Ko-fi aparece en inglés. Si prefieres verlo en español,
          al ingresar directamente a la página puedes usar el traductor de tu
          navegador (clic derecho → Traducir al español).
        </p>
      </div>
    </section>
  )
}