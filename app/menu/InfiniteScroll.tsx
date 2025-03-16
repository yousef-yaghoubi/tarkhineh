'use client';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FoodType } from '@/lib/indexType';
import CardFoodLoading from '@/components/shared/card/CardFoodLoading';
import { useSearchParams } from 'next/navigation';

const CardFood = dynamic(() => import('@/components/shared/card/CardFood'), {
  loading: () => <CardFoodLoading isShowForMenu key={Math.random()} />,
});

function InfiniteScroll() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [numberOfAllFood, setNumberOfAllFood] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const { ref, inView } = useInView();
  const cookieBranch = Cookies.get('branchs');
  const queryType = useSearchParams().get('type') || 'all';
  const queryFilter = useSearchParams().get('categorie') || 'all';

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  useEffect(() => {
    setFoods([]);
    setPage(1);
    setNumberOfAllFood(1);
  }, [queryType, queryFilter]);

  async function loadMoreMovies() {
    const { foods: food } = await fetch(
      `http://localhost:3000/api/food?branchName=${cookieBranch}&filter=${queryFilter}&type=${queryType}&page=${page}`
    )
      .then((result) => result)
      .then((response) => response.json());

    setNumberOfAllFood(food ? food.length : 0);
    if (food?.length) {
      setFoods((prev: FoodType[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...food,
      ]);
    }
    setPage((prev) => prev + 1);
  }

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 mt-10 mb-48">
        {foods?.map((item) => (
          <CardFood isShowForMenu item={item} key={item.id} />
        ))}
      </section>
      <div
        className={`w-full ${numberOfAllFood !== 0 ? 'flex' : 'hidden'} justify-center items-center mt-20 mb-40`}
      >
        <div
          className={`text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]`}
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
