import fs from "fs"
import path from "path"
import matter from "gray-matter"

const articulosDir = path.join(process.cwd(), "content/articulos")

export function getArticulos() {
  if (!fs.existsSync(articulosDir)) return []
  const archivos = fs.readdirSync(articulosDir).filter(f => f.endsWith(".md"))
  return archivos.map(archivo => {
    const contenido = fs.readFileSync(path.join(articulosDir, archivo), "utf8")
    const { data } = matter(contenido)
    return {
      slug: archivo.replace(".md", ""),
      titulo: data.titulo || "",
      fecha: data.fecha || "",
      resumen: data.resumen || "",
    }
  }).sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
}

export function getArticulo(slug: string) {
  const filePath = path.join(articulosDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const contenido = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(contenido)
  return {
    slug,
    titulo: data.titulo || "",
    fecha: data.fecha || "",
    resumen: data.resumen || "",
    contenido: content,
  }
}