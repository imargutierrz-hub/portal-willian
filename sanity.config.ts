import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  name: 'portal-andres-gutierrez',
  title: 'Portal Andres Gutierrez',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'articulo',
        title: 'Artículo',
        type: 'document',
        fields: [
          {
            name: 'titulo',
            title: 'Título',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'URL amigable',
            type: 'slug',
            options: { source: 'titulo' },
          },
          {
            name: 'resumen',
            title: 'Resumen',
            type: 'text',
          },
          {
            name: 'contenido',
            title: 'Contenido',
            type: 'array',
            of: [{ type: 'block' }],
          },
          {
            name: 'fechaPublicacion',
            title: 'Fecha de publicación',
            type: 'datetime',
          },
        ],
      },
      {
        name: 'libro',
        title: 'Libro',
        type: 'document',
        fields: [
          {
            name: 'titulo',
            title: 'Título',
            type: 'string',
          },
          {
            name: 'descripcion',
            title: 'Descripción',
            type: 'text',
          },
          {
            name: 'linkAmazon',
            title: 'Link de Amazon',
            type: 'url',
          },
          {
            name: 'portada',
            title: 'Portada',
            type: 'image',
          },
        ],
      },
    ],
  },
})