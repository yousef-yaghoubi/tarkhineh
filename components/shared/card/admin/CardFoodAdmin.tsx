'use client'
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import React from 'react'
import Button from '../../button/Button'
import { FoodTypeFull } from '@/types'

function CardFoodAdmin({ food, setIsOpenModal, setIdForRemoving }: { food: FoodTypeFull, setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>, setIdForRemoving: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className='w-full h-32 sm:h-32 shadow dark:shadow-background-2 flex items-center rounded md:rounded-md overflow-hidden'>
            <div className='relative min-w-24 sm:min-w-32 h-full'>
                <Image alt={food.name} src={food.image} fill />
            </div>
            <div className='w-full h-full px-2 md:px-4 flex items-center'>
                <div className='w-1/2 h-full flex flex-col justify-evenly'>
                    <span className='body-sm xs:text-[15px] sm:h5 text-gray-8 dark:text-gray-4'>{food.name}</span>
                    <p className='hidden sm:block caption-sm md:body-sm text-gray-8 dark:text-gray-4 max-w-64 xl:max-w-96 truncate'>{food.desc}</p>
                    <div className='flex flex-col sm:flex-row items-start sm:gap-x-1 sm:items-center caption-sm xs:caption-md md:body-sm'>
                        <span>{convertToPersianNumbers(food.price.toLocaleString())} تومان</span>
                        <Rating value={food.rating} readOnly className="max-w-20 md:max-w-32" />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row w-1/2 items-end justify-end gap-x-4 gap-y-1 caption-sm xs:caption-md md:body-sm'>
                    <Button btn='fill' theme='Primary' className='w-12 md:w-20 h-8 md:h-10'>
                        <span>ویرایش</span>
                    </Button>
                    <Button btn='stroke' theme='Primary' className='w-12 md:w-20 h-8 md:h-10' onClickCustom={() => {
                        setIdForRemoving(food.id)
                        setIsOpenModal(true)
                    }}>
                        <span>{food.isExtant == true ? 'حذف' : 'بازگرداندن'}</span>
                    </Button>
                    <Button btn='fill' theme='Primary' className='w-12 md:w-20 h-8 md:h-10'>
                        <span>جزئیات</span>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CardFoodAdmin