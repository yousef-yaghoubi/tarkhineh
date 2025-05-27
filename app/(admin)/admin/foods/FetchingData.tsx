'use client'

import React, { useMemo, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

import CardFoodAdmin from '@/components/shared/card/admin/CardFoodAdmin'
import ModalRemoving from '@/components/shared/ModalRemoving'
import { useInfiniteFoodsData } from '@/hooks/foods'
import { useModalStateRemoving } from '@/hooks/modal'
import { useSearchParams } from 'next/navigation'
import HeaderMenu from '@/app/(main)/(foods)/menu/HeaderMenu'

const FoodsListPage = () => {
    const searchParams = useSearchParams();
    const queryType = searchParams.get('type') || 'all';
    const queryFilter = searchParams.get('categorie') || 'all';
    const querySearch = searchParams.get('search') || '';
    const fetchFoods = useCallback(async ({ pageParam = 1 }) => {
        const response = await fetch(`/api/food/allFoods?page=${pageParam}&filter=${queryFilter}&type=${queryType}&search=${querySearch}`, {
            cache: 'no-store',
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        return {
            foods: data,
            nextPage: pageParam + 1,
            hasMore: data.length > 0,
        }
    }, [queryType, queryFilter, querySearch])

    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteFoodsData({ Key: ['foods-infinite', queryFilter, queryType, querySearch], Fn: fetchFoods })

    const {
        isOpenModal,
        setIdForRemoving,
        setIsOpenModal,
        idForRemoving
    } = useModalStateRemoving()
    const selectedFood = data?.pages?.flatMap(page => page.foods || []).find(food => food.id === idForRemoving)
    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.1, rootMargin: '20px' })

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage()
    }, [inView, hasNextPage, fetchNextPage])

    const allFoods = useMemo(() => {
        return data?.pages?.flatMap(page => page.foods || []) || []
    }, [data])
    return (
        <div className='gap-y-4 flex flex-col'>
            <h1 className='h5 sm:h4 md:h2'>لیست غذاها</h1>

            <HeaderMenu forCustomPage />
            {error ? (<>
                <div className='p-4 bg-red-50 border border-red-200 rounded-md'>
                    <p className='text-red-600'>خطا در بارگذاری اطلاعات غذاها: {error.message}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className='mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
                    >
                        تلاش مجدد
                    </button>
                </div>
            </>) : (<>

                {isLoading && (
                    <div className="w-full flex flex-col justify-center items-center mt-20 mb-40">
                        <div className="text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <h2 className='text-gray-500 mt-4'>در حال بارگذاری...</h2>
                    </div>
                )}

                {!isLoading && allFoods.length === 0 && (
                    <div className='text-center py-8 text-gray-500'>غذایی یافت نشد</div>
                )}

                {allFoods.map((food, index) => (
                    <CardFoodAdmin
                        key={`${food.id}-${index}`}
                        food={food}
                        setIdForRemoving={setIdForRemoving}
                        setIsOpenModal={setIsOpenModal}
                    />
                ))}

                {hasNextPage && (
                    <div ref={loadMoreRef} className="w-full flex flex-col justify-center items-center">
                        {isFetchingNextPage && (
                            <>
                                <div className="text-primary h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <h2 className='text-gray-500 mt-4'>در حال بارگذاری...</h2>
                            </>
                        )}
                    </div>
                )}

                {!hasNextPage && allFoods.length > 0 && (
                    <div className="text-center py-8 text-gray-400">
                        همه غذاها نمایش داده شدند
                    </div>
                )}

                {selectedFood && (
                    <ModalRemoving
                        isOpenModal={isOpenModal}
                        setIsOpenModal={setIsOpenModal}
                        typeRemove={selectedFood?.isExtant === false ? 'foodBack' : 'food'}
                        idForRemoving={selectedFood.id}
                    />
                )}
            </>)}
        </div>
    )
}

export default FoodsListPage
