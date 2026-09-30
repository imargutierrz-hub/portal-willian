export const MAX_TITULO = 150
export const MAX_CONTENIDO = 10000
export const MAX_NOMBRE = 40

/**
 * Quita caracteres de control invisibles (a veces vienen pegados al copiar
 * texto de otro lado). No toca tildes, emojis, signos ni saltos de línea.
 */
export function limpiarTexto(valor: string) {
  return valor.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
}