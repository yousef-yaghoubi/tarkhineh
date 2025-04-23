import ButtonBack from '@/components/shared/button/ButtonBack';
import Portal from '@/components/shared/Portal';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';
import IconClose from '@icons/CloseIcon.svg';
import dynamic from 'next/dynamic';
import { Rating } from '@smastrom/react-rating';
import { FoodType } from '@/types';
import { getBaseUrl } from '@/lib/getBaseUrl';
const Button = dynamic(() => import('@/components/shared/button/Button'));

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const food = await fetch(
    `${getBaseUrl()}/api/food/uniqeFood?id=${id}`
  ).then((result) => result.json()) as {status:number, food: FoodType};


  console.log(food)
  return (
    <Portal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        {food?.status == 200 ? (
          <section className="bg-white dark:bg-background-1 rounded-md w-11/12 max-w-[808px] max-h-full flex flex-col items-center overflow-hidden relative">
            <div className="w-full h-[72px] flex justify-center relative items-center">
              <h3 className="h7">اطلاعات محصول</h3>

              <ButtonBack>
                <IconClose />
              </ButtonBack>
            </div>
            <div className="!w-full !h-96 relative">
              <Image
                src={food.food!.image}
                alt={food.food!.name}
                fill
                className="!bg-cover !w-fit justify-self-center !rounded-sm"
              />
            </div>
            <div className="grid grid-cols-[80%,20%] grid-rows-2 w-full justify-between items-center px-4 py-4">
              <span className="body-sm md:h7">{food.food!.name}</span>
              <div className="flex justify-end">
                <Rating
                  readOnly
                  value={food.food.rating}
                  className="max-w-24 md:max-w-44 mt-4 lg:mt-0"
                />
              </div>
              <span className="caption-sm md:body-sm">{food.food!.desc}</span>
              <span className="body-sm text-gray-4 grid justify-end">
                (
                {`${convertToPersianNumbers(food.food!._count.commentsFood.toString())} نظر`}
                )
              </span>
            </div>
            <div className="w-full flex justify-center mb-4">
              <Button
                btn="fill"
                theme="Primary"
                className="w-56 h-10"
                onClickCustom="reload"
              >
                دیدن جزئیات بیشتر
              </Button>
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
    </Portal>
  );
}

export default page;
