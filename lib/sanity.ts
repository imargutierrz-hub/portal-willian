import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getArticulos() {
  return client.fetch(`*[_type == "articulo"] | order(fechaPublicacion desc) {
    _id, titulo, slug, resumen, fechaPublicacion
  }`)
}