import { Skeleton } from '@/components/skeleton'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CurrentSearch = dynamic(() => import('@/components/current-search'))

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
      </div>
    </div>
  )
}
