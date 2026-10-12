// Captcha de Cloudflare Turnstile para las sesiones anónimas del foro.
// Es invisible: solo aparece un recuadro (abajo a la derecha) si Cloudflare
// duda de que quien visita sea una persona.

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

type TurnstileApi = {
  render: (el: HTMLElement, opciones: Record<string, unknown>) => string
  remove: (id: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let cargaScript: Promise<void> | null = null

function cargarScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (cargaScript) return cargaScript

  cargaScript = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script")
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => {
      cargaScript = null
      reject(new Error("No se pudo cargar el captcha"))
    }
    document.head.appendChild(s)
  })

  return cargaScript
}

/**
 * Devuelve un token de captcha para pasárselo a Supabase.
 * Si no hay clave configurada (NEXT_PUBLIC_TURNSTILE_SITE_KEY), devuelve
 * undefined y todo sigue funcionando como antes.
 */
export async function obtenerTokenCaptcha(): Promise<string | undefined> {
  if (!SITE_KEY) return undefined

  await cargarScript()

  return new Promise<string>((resolve, reject) => {
    const contenedor = document.createElement("div")
    contenedor.style.cssText =
      "position:fixed;bottom:16px;right:16px;z-index:9999"
    document.body.appendChild(contenedor)

    let widgetId: string | undefined
    let temporizador: ReturnType<typeof setTimeout>

    const limpiar = () => {
      clearTimeout(temporizador)
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
      contenedor.remove()
    }

    temporizador = setTimeout(() => {
      limpiar()
      reject(new Error("El captcha tardó demasiado"))
    }, 30000)

    widgetId = window.turnstile!.render(contenedor, {
      sitekey: SITE_KEY,
      appearance: "interaction-only",
      callback: (token: string) => {
        limpiar()
        resolve(token)
      },
      "error-callback": () => {
        limpiar()
        reject(new Error("Falló el captcha"))
      },
    })
  })
}