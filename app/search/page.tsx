import SearchBox from '@/components/shared/searchBox/SearchBox'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <section className='flex flex-col items-center'>
      <p className='body-xl mb-4 mt-12'>موردی با این مشخصات پیدا نکردیم!</p>
      <SearchBox classes='w-5/6 max-w-[392px]'/>
      <Image src={'/image/MatchNotFound.png'} alt='not found' width={390} height={345} className='mt-14 mb-12'/>
    </section>
  )
}

export default page
