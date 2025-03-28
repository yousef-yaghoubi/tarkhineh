import { Skeleton } from '@/components/ui/skeleton';
import { FoodType } from '@/lib/indexType';
import React from 'react'

function CardFoodLoading({
    isShowForMenu,
  }: {
    isShowForMenu?: boolean;
  }) {
    if (isShowForMenu !== true) {
        return (
          <div className="w-[168px] md:w-72 h-[231px] md:h-[417px] overflow-hidden rounded-sm relative transition-shadow  border border-gray-4/20 dark:border-background-2 duration-300 flex flex-col items-center bg-white dark:bg-background-1">
            <Skeleton
              className="w-full !h-[109px] md:!h-[240px]"
            />
            <div className="absolute bottom-0 h-[calc(100%_-_109px)] md:h-[calc(100%_-_240px)] w-full flex flex-col items-center rounded-b">
              <Skeleton className="w-16 md:w-24 h-6 mt-2 md:mt-4"/>
    
              <div className="flex justify-between w-full h-10 md:h-[4.2em] px-2 mt-1 md:mt-4">
                <div className="w-1/2 h-full md:h-[3.6em] flex flex-col justify-between md:mt-2">
                  <Skeleton className="relative flex items-center w-8 md:w-28 h-5"/>
    
                  <Skeleton className="w-14 md:w-20 h-6 flex items-center mt-[2px] md:m-0"/>
                    
                </div>
    
                <div className="flex flex-col justify-between items-end relative w-1/2 gap-y-2">
                  <Skeleton
                    className='w-20 h-4 md:h-6 items-center justify-between flex absolute top-0 left-0'
                  />
    
                  <Skeleton className="w-14 h-[2em] md:w-28 md:h-8 caption-sm md:body-md absolute left-0 bottom-0 flex justify-end"/>
                </div>
              </div>
    
              <Skeleton className='w-[152px] h-8 md:w-[256px] md:h-10 mt-2'/>
            </div>
          </div>
        );
      } else {
        return (
          <div className="w-4/5 min-w-80 h-[100px] md:w-4/5 md:h-[158px] md:min-w-[600px] border border-gray-4/20 dark:border-background-2 rounded flex relative overflow-hidden">
            <Skeleton
              className="!w-[92px] !h-full md:!w-[169px]"
            />
            <div className="w-[calc(100%_-_92px)] md:w-[calc(100%_-_169px)] absolute left-0 h-full p-2 md:pr-8 md:py-2 md:pl-4">
              <div className="flex justify-between items-center">
                <Skeleton className="w-24 h-6"/>
                <Skeleton
                  className='flex md:hidden w-16 h-4'
                />

                <Skeleton
                  className="hidden md:flex w-8 h-8"
                />

              </div>
              <div className="mt-2 md:mt-0 flex justify-between">
                <Skeleton className="w-8/12 h-5 md:h-6"/>

                <div className="flex flex-col items-end">
                  <Skeleton
                    className='hidden md:flex md:w-[5.5em] h-6 mt-2'
                  />
                  <Skeleton className="w-16 md:w-24 h-5 md:h-5 md:mt-2"/>
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <Skeleton
                  className="md:hidden w-6 h-6"
                />
                <div className="flex items-center md:w-full md:justify-between">
                  <Skeleton className="flex w-20 h-4 md:h-7 md:w-28 ml-2"/>
    
                  <Skeleton className='w-[100px] md:w-[244px] h-8 md:h-10'/>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default CardFoodLoading
