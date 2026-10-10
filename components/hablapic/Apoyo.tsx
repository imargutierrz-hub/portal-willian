"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    paypal?: any
  }
}

const BUTTON_ID = "MVTS2H4C6HV8Y"
const CONTAINER_ID = `paypal-container-${BUTTON_ID}`
const SDK =
  "https://www.paypal.com/sdk/js?client-id=BAA4AaS7MzifmECTqB-qvxlD6xjMUu5tPyyClIbt5N_XRaxRaARyitX9A6_vJXwxpAz8xSZha9MQHB4nh4&components=hosted-buttons&disable-funding=venmo&currency=USD&locale=es_CO"

export default function Apoyo() {
  const [listo, setListo] = useState(false)

  useEffect(() => {
    if (!listo || !window.paypal?.HostedButtons) return
    const el = document.getElementById(CONTAINER_ID)
    if (el && el.childElementCount === 0) {
      window.paypal
        .HostedButtons({ hostedButtonId: BUTTON_ID })
        .render(`#${CONTAINER_ID}`)
    }
  }, [listo])

  return (
    <section id="apoyo" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          Apóyanos
        </p>

        <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
          HablaPic es y seguirá siendo gratis
        </h2>

        <p className="mt-5 text-base text-slate-500 leading-7">
          Si la app le ha servido a tu familia y quieres ayudarnos a
          mantenerla, puedes dejar un aporte voluntario del valor que
          prefieras, desde un dólar. No es obligatorio ni cambia nada de lo
          que ya tienes disponible gratis.
        </p>

        <div className="mt-10 mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div id={CONTAINER_ID} className="min-h-[220px]" />
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Pago seguro procesado por PayPal. Puedes pagar con tarjeta o con tu
          cuenta de PayPal.
        </p>
      </div>

      <Script
        src={SDK}
        strategy="afterInteractive"
        onReady={() => setListo(true)}
      />
    </section>
  )
}