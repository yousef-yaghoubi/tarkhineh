'use client'

import { HydrationBoundary, HydrationBoundaryProps } from '@tanstack/react-query'

export function ReactQueryHydrate(props: HydrationBoundaryProps) {
  return <HydrationBoundary {...props} />
}
