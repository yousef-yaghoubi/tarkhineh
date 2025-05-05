import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import AddFavorite from './AddFavorite';
import { FoodType } from '@/types';
import { OrderBadge, Price, PriceOrder } from './CardFoodNecessary';
import { Rating } from '@smastrom/react-rating';
import RenderAddToCartButton  from './AddToCartButton';

function CardFoodMenu({ item }: { item: FoodType }) {
    return (
        <div className="w-4/5 min-w-80 h-[100px] md:w-4/5 md:h-[158px] md:min-w-[600px] border border-gray-4 dark:border-background-2 rounded flex relative overflow-hidden hover:shadow-cardFood transition-shadow duration-300">
            <Link href={`/food/${item.id}`}>
                <Image src={item.image} alt="food" fill className="!w-[92px] !h-full md:!w-[169px]" />
            </Link>
            <div className="w-[calc(100%_-_92px)] md:w-[calc(100%_-_169px)] absolute left-0 h-full p-2 md:pr-8 md:py-2 md:pl-4">
                <div className="flex justify-between items-center">
                    <Link href={`/food/${item.id}`}>
                        <span className="caption-md md:h7 text-gray-8 dark:text-gray-3">{item.name}</span>
                    </Link>
                    {item.order !== 0 && (
                        <div className="w-16 gap-1 items-center justify-between flex md:hidden">
                            <PriceOrder price={item.price} />
                            <OrderBadge order={item.order} />
                        </div>
                    )}

                    <AddFavorite height={24} width={24} item={item} className='hidden md:flex'/>

                </div>

                <div className="mt-2 md:mt-0 flex justify-between">
                    <p className="caption-sm md:body-sm text-gray-8 dark:text-gray-4 w-8/12 truncate md:whitespace-normal md:overflow-auto">
                        {item.desc}
                    </p>
                    <div className="text-gray-8 dark:text-gray-4 flex flex-col items-end">
                        {item.order !== 0 && (
                            <div className="hidden md:flex w-24 md:w-[5.5em] items-center justify-between">
                                <PriceOrder price={item.price} className="!text-base" />
                                <OrderBadge order={item.order} className="md:caption-md" />
                            </div>
                        )}
                        <span className="caption-sm md:body-lg">
                            <Price order={item.order} price={item.price} />
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-1">

                    <AddFavorite height={16} width={16} item={item} className='flex md:hidden'/>

                    <div className="flex items-center md:w-full md:justify-between">
                        <Rating value={item.rating} readOnly className="max-w-20 md:max-w-32 ml-2" />
                        <RenderAddToCartButton item={item} className='w-[100px] md:w-[244px] h-8 md:h-10 caption-sm md:button-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFoodMenu