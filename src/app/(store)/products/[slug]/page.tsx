import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { currencyFormat } from '@/utils/currencyFormat'
import { Metadata } from 'next'
import Image from 'next/image'

export interface ProductProps {
  params: {
    slug: string
  }
}

async function getProductBySlug(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()
  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const { title } = await getProductBySlug(params.slug)

  return { title }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProductBySlug(params.slug)
  const { description, image, price, title } = product

  return (
    <section className="relative grid max-h-[860px] grid-cols-3">
      <aside className="col-span-2 overflow-hidden">
        <Image
          src={image}
          alt={description}
          title={title}
          width={1000}
          height={1000}
          quality={100}
        />
      </aside>

      <aside className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {currencyFormat(price)}
          </span>

          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de {currencyFormat(price / 12, 2)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XGG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </aside>
    </section>
  )
}
