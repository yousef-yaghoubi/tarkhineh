'use client';

import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';

import { FoodType } from '@/types';
import CardFoodLoading from '@components/shared/card/CardFoodLoading';

const CardFood = dynamic(() => import('@components/shared/card/CardFood'), {
  loading: () => <CardFoodLoading isShowForMenu />,
});

function InfiniteScroll() {
  const { ref, inView } = useInView();
  const cookieBranch = Cookies.get('branches');
  const searchParams = useSearchParams();
  const queryType = searchParams.get('type') || 'all';
  const queryFilter = searchParams.get('categorie') || 'all';

  const fetchFoods = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const res = await fetch(
      `/api/food?branchName=${cookieBranch}&filter=${queryFilter}&type=${queryType}&page=${pageParam}`,
      {
        credentials: 'include',
      }
    );
    const data = await res.json();
    return { foods: data.foods, nextPage: pageParam + 1, hasMore: data.foods.length > 0 };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    isLoading
  } = useInfiniteQuery({
    queryKey: ['foods', cookieBranch, queryFilter, queryType],
    queryFn: fetchFoods,
    staleTime: (600 * 60),
    getNextPageParam: (lastPage: { hasMore: boolean; nextPage: number }) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    initialPageParam: 1,
  });


  // Load more when in view
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // Refetch when filters change
  useEffect(() => {
    refetch();
  }, [queryType, queryFilter, cookieBranch, refetch]);

  const allFoods = data?.pages.flatMap(page => page.foods) || [];

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 mt-10 mb-48">
        {allFoods.map((item: FoodType) => (
          <CardFood isShowForMenu item={item} key={item.id} />
        ))}
      </section>

      {hasNextPage && (
        <div className="w-full flex justify-center items-center mt-20 mb-40">
          <div
            className="text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
            ref={ref}
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}

      { isLoading == true && (
        <div className="w-full flex justify-center items-center mt-20 mb-40">
        <div
          className="text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      )}
    </>
  );
}

export default InfiniteScroll;
