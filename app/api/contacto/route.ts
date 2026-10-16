import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// A dónde llegan los mensajes del formulario de contacto principal.
const CORREO_DESTINO = "wagutierrezdev@gmail.com"

export async function POST(request: Request) {
  try {
    const { nombre, email, mensaje } = await request.json()

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { error: "Faltan campos por completar." },
        { status: 400 }
      )
    }

    // Límites básicos para evitar abuso del formulario.
    if (nombre.length > 100 || email.length > 254 || mensaje.length > 5000) {
      return NextResponse.json(
        { error: "Uno de los campos es demasiado largo." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({

      from: "Portal Willian <contacto@andresgutierrez-dev.com>",
      to: CORREO_DESTINO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${nombre}`,
      text: `De: ${nombre} <${email}>\n\n${mensaje}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "No se pudo enviar", detalle: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error en /api/contacto:", err)
    return NextResponse.json(
      { error: "No pudimos enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    )
  }
}