import { useInfiniteQuery } from "@tanstack/react-query"

export const useInfiniteFoodsData = (query: { queryFilter?: string | null, queryType?: string | null }) => {
    return useInfiniteQuery({
        queryKey: ['foods-infinite'],
        queryFn: async ({ pageParam = 1 }) => {
            const response = await fetch(`/api/food/allFoods?page=${pageParam}&filter=${query.queryFilter}&type=${query.queryType}`, {
                cache: 'no-store',
                headers: { 'Content-Type': 'application/json' },
            })
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const data = await response.json()
            return {
                foods: data,
                nextPage: pageParam + 1,
                hasMore: data.length > 0,
            }
        },
        getNextPageParam: (lastPage) => lastPage?.hasMore ? lastPage.nextPage : undefined,
        initialPageParam: 1,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        retry: 3,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    })
}