import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Loading = dynamic(() => import('@/components/loading'))

export default function SearchLoading() {
  return (
    <Suspense>
      <Loading />
    </Suspense>
  )
}
