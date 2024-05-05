import { currencyFormat } from '@/utils/currencyFormat'
import Image from 'next/image'
import Link from 'next/link'

export default async function Search() {
  return (
    <main className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/products/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            alt="{highlightedProduct.description}"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            title="{highlightedProduct.title}"
          />

          <section className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">highlightedProduct.title</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {currencyFormat(129)}
            </span>
          </section>
        </Link>

        <Link
          href={`/products/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            alt="{highlightedProduct.description}"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            title="{highlightedProduct.title}"
          />

          <section className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">highlightedProduct.title</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {currencyFormat(129)}
            </span>
          </section>
        </Link>

        <Link
          href={`/products/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            alt="{highlightedProduct.description}"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            title="{highlightedProduct.title}"
          />

          <section className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">highlightedProduct.title</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {currencyFormat(129)}
            </span>
          </section>
        </Link>
      </div>
    </main>
  )
}
