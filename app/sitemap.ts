import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const base = "https://andresgutierrez-dev.com";

// Carpetas que nunca deben aparecer en el sitemap
const excluir = ["api", "studio"];

function buscarRutas(dir: string, ruta = ""): string[] {
  let rutas: string[] = [];
  const entradas = fs.readdirSync(dir, { withFileTypes: true });

  if (entradas.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))) {
    rutas.push(ruta);
  }

  for (const e of entradas) {
    if (!e.isDirectory()) continue;
    const n = e.name;
    // Se saltan: privadas (_), paralelas (@) y dinámicas ([id], [slug])
    if (n.startsWith("_") || n.startsWith("@") || n.startsWith("[")) continue;
    if (excluir.includes(n)) continue;
    const esGrupo = n.startsWith("(") && n.endsWith(")");
    rutas = rutas.concat(
      buscarRutas(path.join(dir, n), esGrupo ? ruta : `${ruta}/${n}`)
    );
  }
  return rutas;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = buscarRutas(path.join(process.cwd(), "app"));
  return rutas.map((ruta) => ({
    url: `${base}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: ruta === "" ? 1 : 0.7,
  }));
}