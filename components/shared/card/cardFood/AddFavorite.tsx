'use client'
import { AddFoodToFavorite } from '@/app/actions/food';
import { FoodType } from '@/types';
import IconHeart from '@icons/Heart.svg';
import IconHeartFill from '@icons/HeartFill.svg';
import clsx from 'clsx';
import { ComponentProps, useState } from 'react';
import { toast } from 'sonner';

function AddFavorite({ item, showText, width, height, className }: { item: FoodType, showText?: boolean, width: 24 | 16, height: 24 | 16, className?: ComponentProps<'svg'>['className'] }) {
    const [isRedHeart, setIsRedHeart] = useState(item.isFavorite);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddFoodToFavorite = async (id: string) => {
        setIsLoading(true)
        const response = await AddFoodToFavorite(JSON.parse(JSON.stringify(id)));
        setIsLoading(false);
        if (response.status === 200) {
            setIsRedHeart(false);
        } else if (response.status === 201) {
            setIsRedHeart(true);
        }

        toast[response.status === 200 || response.status === 201 ? 'success' : 'warning'](response.message as string);
    };

    return (
        <div
            className={clsx("relative h-6 flex items-center cursor-pointer w-fit", className)}
            onClick={() => {
                handleAddFoodToFavorite(item.id);
            }}
        >

            {isLoading == true ? (
                <div className='flex h-4 md:h-6 gap-x-2 justify-center items-center bg-gray-3 dark:bg-background-2 px-2 rounded-md'>
                    <span className='sr-only'>Loading...</span>
                    <div className='h-[5px] w-[5px] bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='h-[5px] w-[5px] bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='h-[5px] w-[5px] bg-primary rounded-full animate-bounce'></div>
                </div>
            ) : (
                <>
                    {isRedHeart ? (
                        <IconHeartFill width={width} height={height} className={"fill-red-600 cursor-pointer"} />
                    ) : (
                        <IconHeart width={width} height={height} className={"fill-[#ADADAD] cursor-pointer"} />
                    )}

                    {showText == true && (
                        <span className="caption-sm hidden md:flex text-gray-5 mr-1">
                            افزودن به علاقمندی ها
                        </span>
                    )}
                </>
            )}

        </div>
    )
}

export default AddFavorite