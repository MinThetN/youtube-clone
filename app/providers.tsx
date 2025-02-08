'use client'

import {HeroUIProvider} from '@heroui/react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </HeroUIProvider>

  )
}