import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente único para el navegador. La sesión (anónima o vinculada a un
// correo) se guarda sola en el navegador, así que un visitante que vuelve
// conserva su misma identidad y no genera usuarios nuevos.
export const supabase = createClient(url, anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true, // necesario para los enlaces que llegan por correo
  },
})