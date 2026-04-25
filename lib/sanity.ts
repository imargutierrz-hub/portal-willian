import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getArticulos() {
  return client.fetch(`
    *[_type == "articulo"] | order(fechaPublicacion desc) {
      _id,
      titulo,
      slug,
      resumen,
      fechaPublicacion
    }
  `)
}

export async function getArticulo(slug: string) {
  return client.fetch(`
    *[_type == "articulo" && slug.current == $slug][0] {
      _id,
      titulo,
      resumen,
      contenido,
      fechaPublicacion
    }
  `, { slug })
}

export async function getLibro() {
  return client.fetch(`
    *[_type == "libro"][0] {
      titulo,
      descripcion,
      linkAmazon,
      portada
    }
  `)
}