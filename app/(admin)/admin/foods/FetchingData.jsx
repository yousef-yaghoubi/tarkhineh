'use client'
import CardFoodAdmin from '@/components/shared/card/admin/CardFoodAdmin'
import ModalRemoving from '@/components/shared/ModalRemoving'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { set } from 'zod'
// import {FoodType} from '@/types'

function FetchingData() {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [food, setFood] = useState(null)
    const [idForRemoving, setIdForRemoving] = useState(null)
    const { data, isLoading } = useQuery({
        queryKey: ['foods'], queryFn: async () => {
            const response = await fetch('http://localhost:3000/api/food/allFoods', { cache: 'no-store' });
            return response.json()
        },
    })

    useEffect(()=>{
        if (idForRemoving) {
            const FoodUniqe = data?.find((food) => food.id === idForRemoving)
            setFood(FoodUniqe)
        }
    },[idForRemoving])

    return (
        <div className='gap-y-4 flex flex-col'>
            {isLoading && (<span>loading...</span>)}
            {data?.map((food) => (
                <CardFoodAdmin food={food} key={food.id} setIdForRemoving={setIdForRemoving} setIsOpenModal={setIsOpenModal} />
            ))}
            <ModalRemoving isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} typeRemove={food?.isExtant == false ? 'foodBack' : 'food'} idForRemoving={idForRemoving} />
        </div>
    )
}

export default FetchingData