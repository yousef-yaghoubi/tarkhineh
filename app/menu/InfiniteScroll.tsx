'use client';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { GetAllFoods } from '../actions/branchAction';
import { useEffect, useState, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { FoodType } from '@/lib/indexType';
import CardFoodLoading from '@/components/shared/card/CardFoodLoading';
import { randomUUID } from 'crypto';

const CardFood = dynamic(() => import('@/components/shared/card/CardFood'),{
    loading: ()=> <CardFoodLoading isShowForMenu key={Math.random()}/>
})

function InfiniteScroll({
  initialFood,
}: {
  initialFood: FoodType[] | undefined;
}) {
  const [foods, setFoods] = useState(initialFood);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const cookie = Cookies.get('branchs');

  async function loadMoreMovies() {
    const next = page + 1;
    const food = await GetAllFoods({ branchName: cookie!, page });
    if (food?.length ) {
      setPage(next);
      setFoods((prev: FoodType[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...food,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 mt-10">
        {foods?.map((item, index) => <CardFood isShowForMenu item={item} key={index}/>)}
      </div>
      <div className="w-full flex justify-center items-center mt-10 mb-40">
        <div
          className="inline-block text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
          ref={ref}
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;
