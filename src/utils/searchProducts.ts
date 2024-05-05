import { api } from '@/data/api'
import { Product } from '@/data/types/products'

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  return await response.json()
}
