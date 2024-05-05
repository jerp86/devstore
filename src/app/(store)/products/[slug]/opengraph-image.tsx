/* eslint-disable @next/next/no-img-element */
import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'
import { ProductProps } from './page'

interface OgProductImageProps {
  id: string
  params: { slug: string }
}

async function getProductBySlug(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 15, // 15 minutes
    },
  })

  const product = await response.json()
  return product
}

const sizes = [
  {
    id: 'icon',
    size: { width: 48, height: 48 },
  },
  {
    id: 'medium',
    size: { width: 600, height: 600 },
  },
  {
    id: 'large',
    size: { width: 1200, height: 630 },
  },
]

export async function generateImageMetadata({ params }: ProductProps) {
  const { description, image } = await getProductBySlug(params.slug)
  const contentType = 'image/png'
  const src = new URL(image, env.APP_URL).toString()

  return [
    {
      id: sizes[0].id,
      size: sizes[0].size,
      alt: description,
      contentType,
      src,
    },
    {
      id: sizes[1].id,
      size: sizes[1].size,
      alt: description,
      contentType,
      src,
    },
    {
      id: sizes[2].id,
      size: sizes[2].size,
      alt: description,
      contentType,
      src,
    },
  ]
}

export default async function OgProductImage({
  id,
  params,
}: OgProductImageProps) {
  const product = await getProductBySlug(params.slug)
  const productImageUrl = new URL(product.image, env.APP_URL).toString()
  const size = sizes.find((size) => size.id === id)

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          color: 'white',
        }}
      >
        <img src={productImageUrl} alt={product.description} loading="lazy" />
      </div>
    ),
    {
      ...size?.size,
    },
  )
}
