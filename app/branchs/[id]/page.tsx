
import SearchBox from '@/components/shared/searchBox/SearchBox'
import SwiperMain from '@/components/shared/swiper/swiper'
import React from 'react'
import FoodSlider from './FoodSlider'
import Button from '@/components/shared/button/Button'
import { cookies } from 'next/headers'
import { arraySlideBranch, arraySlideMain } from '@/lib/dataPublic'

async function DynamicBranchs() {
  const cookieStore =await cookies()
  const branchCookie =await cookieStore.get('branchs')
  const branch = branchCookie?.value
  
  return (
    <div className='flex flex-col items-center'>
      <SwiperMain slides={arraySlideMain} pagination showBtn/>
      <div className='w-full flex justify-center'>
        <SearchBox classes='w-[90%] mt-4 sm:hidden'/>
      </div>

      <FoodSlider theme='White' title='پیشنهاد ویژه'/>
      <FoodSlider theme='Primary' title='غذاهای محبوب'/>
      <FoodSlider theme='White' title='غذاهای غیر ایرانی'/>
      <Button btn='stroke' btnSize='w-[152px] h-8 md:w-[184px] md:h-10 caption-lg md:button-lg' iconR='/icons/notePrimary.png' iconSize={24} theme='Primary' title='مشاهده منوی کامل'/>

      <span className='h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]'>
        {branch}
      </span>
      <SwiperMain slides={arraySlideBranch}/>
    </div>
  )
}

export default DynamicBranchs