import { GetDemoUniqueFood } from '@/app/actions/foodAction';
import Button from '@/components/shared/button/Button';
import ButtonBack from '@/components/shared/button/ButtonBack';
import IconMap from '@/components/shared/IconMap';
import Portal from '@/components/shared/Portal';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';;
import React from 'react';

async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  const food = await GetDemoUniqueFood(Number(id));
  const starFill = Math.round(food?.food?.rating!);
  const starStroke = 5 - starFill;

  const arrayStarFill = Array.from({ length: starFill }, (_, i) => i + 1);
  const arrayStarStroke = Array.from({ length: starStroke }, (_, i) => i + 1);

  return (
    <Portal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        {food?.status == 200 ? (
          <section className="bg-white dark:bg-background-1 rounded-md w-11/12 max-w-[808px] max-h-full flex flex-col items-center overflow-hidden relative">
            <div className="w-full h-[72px] flex justify-center relative items-center">
              <h3 className="h7">اطلاعات محصول</h3>

              <ButtonBack>
                <IconMap icon="closeIcon" />
              </ButtonBack>
            </div>
            <div className="!w-full !h-96 relative">
              <Image
                src={'/image/imageFood.jpg'}
                alt={food.food!.name}
                fill
                className="!bg-cover !w-fit justify-self-center !rounded-sm"
              />
            </div>
            <div className="grid grid-cols-[80%,20%] grid-rows-2 w-full justify-between items-center px-4 py-4">
              <span className="body-sm md:h7">{food.food!.name}</span>
              <div className="flex justify-end">
                {arrayStarStroke.map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    className="!w-4 !h-4 md:!w-6 md:!h-6"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.11803L9.32058 6.18237L9.43284 6.52786H9.79611H14.0696L10.6123 9.03976L10.3184 9.25329L10.4306 9.59878L11.7512 13.6631L8.29389 11.1512L8 10.9377L7.70611 11.1512L4.24877 13.6631L5.56936 9.59878L5.68162 9.25329L5.38772 9.03976L1.93039 6.52786H6.20389H6.56716L6.67942 6.18237L8 2.11803Z"
                      stroke="#F4B740"
                    />
                  </svg>
                ))}
                {arrayStarFill.map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    className="!w-4 !h-4 md:!w-6 md:!h-6"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.904509L9.67723 6.06649L9.70529 6.15286H9.79611H15.2237L10.8327 9.34315L10.7592 9.39653L10.7873 9.4829L12.4645 14.6449L8.07347 11.4546L8 11.4012L7.92653 11.4546L3.53548 14.6449L5.21271 9.4829L5.24078 9.39653L5.1673 9.34315L0.776258 6.15286H6.20389H6.29471L6.32277 6.06649L8 0.904509Z"
                      fill="#F4B740"
                      stroke="#CBCBCB"
                      strokeWidth="0.25"
                    />
                  </svg>
                ))}
              </div>
              <span className="caption-sm md:body-sm">{food.food!.desc}</span>
              <span className="body-sm text-gray-4 grid justify-end">
                (
                {`${convertToPersianNumbers(food.food!._count.commentsFood.toString())} نظر`}
                )
              </span>
            </div>
            <div className='w-full flex justify-center mb-4'>
              <Button btn='fill' theme='Primary' btnSize='w-56 h-10' onClickReload>دیدن جزئیات بیشتر</Button>
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
