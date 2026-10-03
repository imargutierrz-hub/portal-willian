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

        {/* Panel de donaciones incrustado directamente */}
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
      </div>
    </section>
  )
}