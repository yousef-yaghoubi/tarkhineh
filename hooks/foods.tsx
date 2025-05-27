import { useInfiniteQuery } from "@tanstack/react-query"

type UseInfiniteFoodsDataProps<T> = {
    Fn: (params: { pageParam: number }) => Promise<T>
    Key: string[]
}

export const useInfiniteFoodsData = <T extends { hasMore: boolean; nextPage: number }>(
    { Fn, Key }: UseInfiniteFoodsDataProps<T>
) => {
    return useInfiniteQuery({
        queryKey: Key,
        queryFn: Fn,
        getNextPageParam: (lastPage) => lastPage?.hasMore ? lastPage.nextPage : undefined,
        initialPageParam: 1,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        retry: 3,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    })
}