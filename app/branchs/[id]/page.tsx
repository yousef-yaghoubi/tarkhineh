
import SearchBox from '@/components/shared/searchBox/SearchBox'
import SwiperMain from '@/components/shared/swiper/swiper'
import React from 'react'
import FoodSlider from './FoodSlider'
import Button from '@/components/shared/button/Button'

function DynamicBranchs() {
  return (
    <div className='flex flex-col items-center'>
      <SwiperMain />
      <div className='w-full flex justify-center'>
        <SearchBox classes='w-[90%] mt-4 sm:hidden'/>
      </div>

      <FoodSlider theme='White' title='پیشنهاد ویژه'/>
      <FoodSlider theme='Primary' title='غذاهای محبوب'/>
      <FoodSlider theme='White' title='غذاهای غیر ایرانی'/>
      <Button btn='stroke' btnSize='w-[152px] h-8 md:w-[184px] md:h-10 caption-lg md:button-lg' iconR='/icons/notePrimary.png' iconSize={24} theme='Primary' title='مشاهده منوی کامل'/>
    </div>
  )
}

export default DynamicBranchs