import { Skeleton } from '@/components/ui/skeleton';
import { FoodType } from '@/types';
import dynamic from 'next/dynamic';
import React from 'react';
import ClientPageForButton from './ClientPageForButton';
import { headers } from 'next/headers';
import ShowComments from '@/components/shared/comment/ShowComments';

const Rating = dynamic(
  () => import('@smastrom/react-rating').then((mod) => mod.Rating),
  {
    loading: () => <Skeleton className="w-24 md:w-44 h-5 md:h-10 mt-4 lg:mt-0"></Skeleton>,
    ssr: false,
  }
);

const Image = dynamic(() => import('next/image'), {
  loading: () => <Skeleton className="w-full h-80 md:h-80 md:w-96"></Skeleton>,
  ssr: false,
});

async function page({ params }: { params: { id: string } }) {
  const { food } = (await fetch(
    `${process.env.NEXTAUTH_URL}/api/food/uniqeFoodFull?id=${params.id}`,
    {
      headers: headers(),
    }
  ).then((result) => result.json())) as {
    status: number;
    message: string;
    food: FoodType | null;
  };

  console.log(food)
  return (
    <div className="p-4 md:p-10 lg:p-16">
      {food ? (
        <>
          <div className="flex flex-col md:flex-row h-fit">
            <div className="relative w-full h-80 md:h-80 md:min-w-96 md:w-96">
              <Image
                alt={food.name}
                src={food.image}
                fill
                className="rounded"
              />
            </div>

            <div className="w-full h-36 md:h-80 flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col mr-6 justify-between lg:h-full">
                <div className="h-fit mt-6">
                  <h4 className="h7 md:h4">{food.name}</h4>
                  <p className="body-sm md:body-md">{food.desc}</p>
                </div>

                <div>
                  <Rating
                    readOnly
                    value={food.rating}
                    className='max-w-24 md:max-w-44 mt-4 lg:mt-0'
                  />
                </div>
              </div>

              <ClientPageForButton food={food} />
            </div>
          </div>


          <ShowComments comments={food.commentsFood} id={food.id} type='product' className='mt-[5em]'/>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default page;
