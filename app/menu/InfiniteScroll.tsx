'use client';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { GetAllFoods } from '../actions/branchAction';
import { useEffect, useState, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { FoodType } from '@/lib/indexType';
import CardFoodLoading from '@/components/shared/card/CardFoodLoading';
import { useSearchParams } from 'next/navigation';

const CardFood = dynamic(() => import('@/components/shared/card/CardFood'), {
  loading: () => <CardFoodLoading isShowForMenu key={Math.random()} />,
});



function InfiniteScroll(){
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [numberOfAllFood, setNumberOfAllFood] = useState<number>(1)
  const [page, setPage] = useState<number>(1);
  const { ref, inView } = useInView();
  const cookieBranch = Cookies.get('branchs');
  const queryType = useSearchParams().get('type') || 'all'


  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView, foods]);

  useEffect(()=>{
    setFoods([])
    setPage(1)
    setNumberOfAllFood(1)
  },[queryType])
  
  async function loadMoreMovies() {
    // const next = page + 1;
    const food: { foods: FoodType[]; numberOfFood: number | undefined } | undefined = await GetAllFoods({ branchName: cookieBranch!, page, categorie: queryType });
    setNumberOfAllFood(food!.foods.length)
    if (food?.foods.length) {
      setFoods((prev: FoodType[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...food.foods,
      ]);
      setPage((prev)=> prev + 1)
    }
  }


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 mt-10">
        {foods?.map((item, index) => (
          <CardFood isShowForMenu item={item} key={index} />
        ))}
      </div>
      <div
        className={`w-full ${numberOfAllFood !== 0 ? 'flex' : 'hidden'} justify-center items-center mt-10 mb-40`}
      >
        <div
          className={`${numberOfAllFood !== 0 ? 'inline-block' : 'hidden'} text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]`}
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
