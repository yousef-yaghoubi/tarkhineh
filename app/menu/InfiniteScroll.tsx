'use client';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { GetAllFoods } from '../actions/branchAction';
import { useEffect, useState, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { FoodType } from '@/lib/indexType';
import CardFoodLoading from '@/components/shared/card/CardFoodLoading';

const CardFood = dynamic(() => import('@/components/shared/card/CardFood'), {
  loading: () => <CardFoodLoading isShowForMenu key={Math.random()} />,
});

let page = 2
function InfiniteScroll({
  initialFood,
}: {
  initialFood:
    | { foods: FoodType[]; numberOfFood: number | undefined }
    | undefined;
}) {
  const [foods, setFoods] = useState(initialFood?.foods);
  // const [page, setPage] = useState(1);
  const {ref, inView} = useInView();

  const cookie = Cookies.get('branchs');

  async function loadMoreMovies() {
    // const next = page + 1;
    const food: { foods: FoodType[]; numberOfFood: number | undefined } | undefined = await GetAllFoods({ branchName: cookie!, page });
    let foodsLength = (food?.foods.length as number + foods!.length as number)
    console.log(foodsLength, initialFood?.numberOfFood)

    if (food?.foods.length) {
      setFoods((prev: FoodType[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...food.foods,
      ]);
      page++;
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView, foods]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 mt-10">
        {foods?.map((item, index) => (
          <CardFood isShowForMenu item={item} key={index} />
        ))}
      </div>
      <div
        className={`w-full ${foods?.length !== initialFood?.numberOfFood ? 'flex' : 'hidden'} justify-center items-center mt-10 mb-40`}
      >
        <div
          className={`${foods?.length !== initialFood?.numberOfFood ? 'inline-block' : 'hidden'} text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]`}
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
