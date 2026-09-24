"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export default function AdSlot({ slot, className = "" }: { slot: string; className?: string }) {
  const cargado = useRef(false)
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  useEffect(() => {
    if (!client || cargado.current) return
    cargado.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [client])

  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-10 my-8 ${className}`}>
      <p className="mb-1 text-center text-[10px] text-slate-400">Publicidad</p>
      {client ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400">
          Espacio publicitario (AdSense)
        </div>
      )}
    </div>
  )
}