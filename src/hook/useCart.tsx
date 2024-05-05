import { CartContext } from '@/contexts/cart-context'
import { useContext } from 'react'

export const useCart = () => useContext(CartContext)
