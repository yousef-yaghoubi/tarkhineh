import Button from '@/components/shared/button/Button'
import ButtonBack from '@/components/shared/button/ButtonBack'
import Image from 'next/image'
import React from 'react'

function WithoutCart() {
  return (
    <div className=' w-full h-[422px] rounded-md border border-gray-4 dark:border-background-2 flex flex-col items-center justify-center relative'>
        <Image src={'/image/EmptyPage.png'} alt='empty' width={325} height={312} className='absolute'/>
        <span className='mt-12 body-sm sm:body-xl text-gray-6 dark:text-gray-4'>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</span>
        <Button btn='stroke' theme='Primary' classCustom='w-[184px] h-10 mt-6 bg-white dark:bg-background-1'>منوی رستوران</Button>
    </div>
  )

}

export default WithoutCart
