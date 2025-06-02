'use client'

import React, { useMemo, useEffect, useCallback, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import CardFoodAdmin from '@/components/shared/card/admin/CardFoodAdmin'
import ModalRemoving from '@/components/shared/ModalRemoving'
import { useInfiniteDataCustom } from '@/hooks/foods'
import { useModalStateRemoving } from '@/hooks/modal'
import { useSearchParams } from 'next/navigation'
import HeaderMenu from '@/app/(main)/(foods)/menu/HeaderMenu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { branches } from '@/lib/dataPublic'
import { CommentType } from '@/types'

const FoodsListPage = () => {
    const fetchComments = useCallback(async ({ pageParam = 1 }) => {
        const response = await fetch(`/api/comment?page=${pageParam}`, {
            cache: 'no-store',
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        return {
            comments: data,
            nextPage: pageParam + 1,
            hasMore: data.length > 0,
        }
    }, [])

    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteDataCustom({ Key: ['comments-infinite'], Fn: fetchComments })

    const {
        isOpenModal,
        setIdForRemoving,
        setIsOpenModal,
        idForRemoving
    } = useModalStateRemoving()

    const selectedFood = data?.pages?.flatMap(page => page.comments || []).find(comment => comment.id === idForRemoving)
    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.1, rootMargin: '20px' })

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage()
    }, [inView, hasNextPage, fetchNextPage])

    const allComments: CommentType[] | [] = useMemo(() => {
        return data?.pages?.flatMap(page => page.comments || []) || []
    }, [data])

    console.log(allComments)

    return (
        <div className='gap-y-4 flex flex-col'>
            <div className='flex flex-col sm:flex-row gap-y-2 w-full justify-between'>
                <h1 className='h5 sm:h4 md:h2'>لیست کامنت ها</h1>
                <div className='flex items-center gap-2'>
                    {/* <Select dir='rtl' onValueChange={(value) => setQueryBranch(value)} defaultValue='all'>
                        <SelectTrigger className="w-[180px] bg-gray-3 dark:bg-background-2 border-none">
                            <SelectValue placeholder="شعبه" />
                        </SelectTrigger>
                        <SelectContent className='bg-gray-3 dark:bg-background-2 border-none'>
                            <SelectItem value="all" className='cursor-pointer'>همه شعبه ها</SelectItem>
                            {branches.map((branch) => (
                                <SelectItem value={branch.nickName} key={branch.id} className='cursor-pointer'>{branch.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select> */}

                    {/* <Select dir='rtl' onValueChange={(value) => setQueryIsExent(value)} defaultValue='all'>
                        <SelectTrigger className="w-[180px] bg-gray-3 dark:bg-background-2 border-none">
                            <SelectValue placeholder="موجودیت" />
                        </SelectTrigger>
                        <SelectContent className='bg-gray-3 dark:bg-background-2 border-none'>
                            <SelectItem value="all" className='cursor-pointer'>همه غذاها</SelectItem>
                            <SelectItem value='isExent' className='cursor-pointer'>غذا های موجود</SelectItem>
                            <SelectItem value='isNotExent' className='cursor-pointer'>غذا های حذف شده</SelectItem>
                        </SelectContent>
                    </Select> */}
                </div>
            </div>

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

                {!isLoading && allComments.length === 0 && (
                    <div className='text-center py-8 text-gray-500'>غذایی یافت نشد</div>
                )}

                <div className='flex flex-col gap-4'>
                    {allComments.map((comment, index) => (
                        <div className='w-full h-32 sm:h-32 shadow dark:shadow-background-2 flex items-center rounded md:rounded-md overflow-hidden' key={comment.id}>
                            <div className='w-full h-full px-2 md:px-4 flex items-center'>
                                <div className='w-1/2 h-full flex flex-col justify-evenly'>
                                    <span className='body-sm xs:text-[15px] sm:h5 text-gray-8 dark:text-gray-4'>{comment.food.name}</span>
                                    <span className='caption-sm xs:text-[10px] sm:h5 text-gray-8 dark:text-gray-4'>{comment.desc}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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

                {!hasNextPage && allComments.length > 0 && (
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
