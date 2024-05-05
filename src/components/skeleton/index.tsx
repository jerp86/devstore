import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({
  className,
  ...skeletonProps
}: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...skeletonProps}
    />
  )
}
