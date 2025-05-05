import { FoodType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import RenderAddToCartButton from './AddToCartButton';
import AddFavorite from './AddFavorite';
import { OrderBadge, Price, PriceOrder, RenderRatingForCardFoodBranch } from './CardFoodNecessary';

function CardFoodBranch({ item }: { item: FoodType }) {
    const RenderPriceSection = () => {
        return (
            <div className="flex flex-col justify-between items-end relative w-1/2">
                {item.order !== 0 && (
                    <div className="w-[4em] h-1/2 items-center justify-between flex absolute top-0 left-0">
                        <PriceOrder price={item.price} />
                        <OrderBadge order={item.order} />
                    </div>
                )}
                <div className="w-full h-1/2 caption-sm md:body-md absolute left-0 bottom-0 flex justify-end">
                    <Price price={item.price} order={item.order} />
                </div>
            </div>
        )
    };


    return (
        <div className="w-[168px] md:w-72 h-[231px] md:h-[417px] rounded-sm relative overflow-hidden border border-gray-4 dark:border-background-2 bg-white dark:bg-background-1 hover:shadow-shadow-10 transition-shadow duration-300 flex flex-col items-center">
            <Link href={`/food/${item.id}`}>
                <Image src={item.image} alt="food" fill className="w-full !h-[109px] md:!h-[240px]" />
            </Link>

            <div className="absolute bottom-0 h-[calc(100%_-_109px)] md:h-[calc(100%_-_240px)] w-full flex flex-col items-center rounded-b">
                <Link href={`/food/${item.id}`}>
                    <span className="caption-md mt-1 md:h7 md:mt-2 text-gray-8 dark:text-gray-3">{item.name}</span>
                </Link>

                <div className="flex justify-between w-full h-10 md:h-[51px] px-2 mt-1 md:mt-4">
                    <div className="w-1/2 h-full flex flex-col justify-between">
                        <AddFavorite height={16} width={16} item={item} showText/>
                        <RenderRatingForCardFoodBranch item={item} />
                    </div>
                    <RenderPriceSection />
                </div>

                <RenderAddToCartButton item={item} className='w-[152px] h-8 caption-sm md:button-lg mt-3 md:mt-4 md:w-[256px] md:h-10' />
            </div>
        </div>
    );
}

export default CardFoodBranch