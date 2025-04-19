import { convertToPersianNumbers } from '@/lib/convertNumberToPersian'
import dynamic from 'next/dynamic'
import React from 'react'
const Button = dynamic(()=> import('@/components/shared/button/Button'))

function NotFound() {
  return (
    <div className='w-full h-[calc(100vh-64px)] md:h-[calc(100vh-115px)] flex flex-col justify-center items-center'>
      <h1 className='h4 md:h1 m-0'>{convertToPersianNumbers('404')}</h1>
      <h5 className='body-md md:body-xl'>صفحه مورد نظر پیدا نشد.</h5>

      <Button btn='stroke' theme='Primary' className='w-32 h-8 md:w-44 md:h-10 mt-16 caption-md md:body-md' link='/'>بازگشت به صفحه اصلی</Button>
    </div> 
  )
}   

export default NotFound