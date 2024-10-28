import Image from 'next/image';
import React from 'react';

interface Props {
    img: string,
    title: string
}
function MiniCardMenu({img, title}: Props) {
  return <div className='w-[152px] h-20 md:w-[180px] md:h-24 lg:w-[220px] lg:h-[120px] xl:w-[287px] xl:h-40 bg-primary rounded-sm lg:rounded-md relative flex justify-center shadow-cards mt-28'>
    <Image src={img} alt={title} width={240} height={240} className='absolute bottom-5 lg:bottom-10 w-[120px] h-[120px] md:w-40 md:h-40 lg:w-[180px] xl:w-[240px] lg:h-[180px] xl:h-[240px]'/>
    <span className='w-24 h-8 lg:w-[120px] xl:w-[155px] lg:h-[38px] xl:h-12 lg:body-lg xl:body-xl bg-gray-1 dark:bg-background-2 absolute -bottom-5 caption-md flex justify-center items-center rounded-sm shadow-cards'>{title}</span>
  </div>;
}

export default MiniCardMenu;
