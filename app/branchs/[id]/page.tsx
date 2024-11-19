import CardFoodBranch from '@/components/shared/card/CardFoodBranch'
import SearchBox from '@/components/shared/searchBox/SearchBox'
import SwiperMain from '@/components/shared/swiper/swiper'
import React from 'react'

function DynamicBranchs() {
  return (
    <div className='h-screen'>
      <SwiperMain />
      <div className='w-full flex justify-center'>
        <SearchBox classes='w-[90%] mt-4 sm:hidden'/>
      </div>

      <CardFoodBranch/>

    </div>
  )
}

export default DynamicBranchs