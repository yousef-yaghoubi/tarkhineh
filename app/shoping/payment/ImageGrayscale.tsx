'use client';
import Image from 'next/image';
import React, { ComponentProps, SetStateAction } from 'react';

function ImageGrayscale({ src, id, isHover, setIsHover }: { src: string, id:ComponentProps<'div'>['id'], isHover:string, setIsHover:React.Dispatch<SetStateAction<string>> }) {
//   const [isHover, setIsHover] = React.useState(false);
  return (
    <div id={id} className={`w-16 h-16 md:w-24 md:h-24 group flex justify-center items-center rounded border ${isHover == id ? 'border-primary shadow-bank-primary' : 'border-gray-4 dark:border-background-2'}`} onClick={()=> setIsHover(id as string)}>
      <div className={`!w-3/4 !h-3/4 transition-all duration-500 filter grayscale ${isHover == id ? 'filter-none' : 'group-hover:filter-none'} overflow-hidden relative rounded-lg`}>
        <Image
          src={src}
          alt="Hover to colorize"
          fill
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default ImageGrayscale;
