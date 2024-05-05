'use client'

import { useCart } from '@/hook/useCart'
import { AddToCartButtonProps } from './types'

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddProductToCart = () => addToCart(productId)

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
