import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from '../cart-widget'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SearchForm = dynamic(() => import('../search-form'))

export default function Header() {
  return (
    <header className="flex item-center justify-between">
      <section className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </section>

      <section className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/jerp86.png"
            alt="Imagem de perfil do usuário"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Test account</span>
          <Image
            src="https://github.com/iguana-3d.png"
            alt="Imagem de perfil do usuário"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </section>
    </header>
  )
}
