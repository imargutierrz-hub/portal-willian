import type { User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

const RUTA_FORO = "/hablapic/foro"

function urlRetorno() {
  return `${window.location.origin}${RUTA_FORO}`
}

/**
 * Devuelve el usuario actual. Si el visitante no tiene sesión, crea una
 * anónima (sin pedirle ningún dato). Llamar justo antes de publicar,
 * responder o reportar, no en cada carga de página, para no generar
 * usuarios anónimos innecesarios.
 */
export async function asegurarSesion(): Promise<User> {
  const { data } = await supabase.auth.getSession()
  if (data.session?.user) return data.session.user

  const { data: anon, error } = await supabase.auth.signInAnonymously()
  if (error || !anon.user) {
    throw new Error("No se pudo iniciar la sesión anónima")
  }
  return anon.user
}

/** true si la sesión ya está vinculada a un correo (no es anónima). */
export function tieneCorreoVinculado(user: User | null | undefined) {
  return !!user && !user.is_anonymous
}

/**
 * Vincula un correo a la sesión anónima actual. Supabase envía un enlace de
 * confirmación a ese correo; al abrirlo, la cuenta queda ligada al correo y
 * conserva todas las publicaciones hechas hasta ahora.
 * Requiere "Allow manual linking" activado en Supabase.
 */
export async function vincularCorreo(correo: string) {
  await asegurarSesion()
  const { error } = await supabase.auth.updateUser(
    { email: correo },
    { emailRedirectTo: urlRetorno() }
  )
  if (error) throw error
}

/**
 * Para volver a entrar desde otro dispositivo: envía un enlace de acceso al
 * correo ya vinculado. No crea cuentas nuevas.
 */
export async function entrarConCorreo(correo: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email: correo,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: urlRetorno(),
    },
  })
  if (error) throw error
}

/** Guarda el correo (opcional, sin verificar) para avisar si responden. */
export async function guardarAviso(postId: string, correo: string) {
  const { error } = await supabase
    .from("foro_avisos")
    .insert({ post_id: postId, correo })
  if (error) throw error
}