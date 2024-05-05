import { currencyFormat } from '@/utils/currencyFormat'
import { searchProducts } from '@/utils/searchProducts'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <main className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map(({ description, id, image, price, slug, title }) => (
          <Link
            key={id}
            href={`/products/${slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={image}
              alt={description}
              className="group-hover:scale-105 transition-transform duration-500"
              width={480}
              height={480}
              quality={100}
              title={title}
            />

            <section className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {currencyFormat(price)}
              </span>
            </section>
          </Link>
        ))}
      </div>
    </main>
  )
}
