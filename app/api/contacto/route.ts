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

    await resend.emails.send({
      // Mientras no tengas un dominio verificado en Resend, el remitente
      // tiene que ser este. Cuando compres tu dominio, lo verificas en
      // Resend y cambias esto por algo como "contacto@tudominio.com".
      from: "Portal Willian <onboarding@resend.dev>",
      to: CORREO_DESTINO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${nombre}`,
      text: `De: ${nombre} <${email}>\n\n${mensaje}`,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "No pudimos enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    )
  }
}