'use client'
import { AddFoodToFavorite } from '@/app/actions/food';
import { FoodType } from '@/types';
import React, { ComponentProps, useState } from 'react'
import { toast } from 'sonner';
import IconHeart from '@icons/Heart.svg';
import IconHeartFill from '@icons/HeartFill.svg';
import clsx from 'clsx';

function AddFavorite({ item, showText, width, height, className }: { item: FoodType, showText?: boolean, width: 24 | 16, height: 24 | 16, className?: ComponentProps<'svg'>['className'] }) {
    const [isRedHeart, setIsRedHeart] = useState(item.isFavorite);
    const handleAddFoodToFavorite = async (id: string) => {
        const response = await AddFoodToFavorite(JSON.parse(JSON.stringify(id)));

        if (response.status === 200) {
            setIsRedHeart(false);
        } else if (response.status === 201) {
            setIsRedHeart(true);
        }

        toast[response.status === 200 || response.status === 201 ? 'success' : 'warning'](response.message as string);
    };

    return (
        <div
            className={clsx("relative flex items-center cursor-pointer w-fit", className)}
            onClick={() => {
                handleAddFoodToFavorite(item.id);
            }}
        >
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
        </div>
    )
}

export default AddFavorite