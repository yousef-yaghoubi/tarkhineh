'use client'
import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

interface Props{
  title: string,
  desc: string,
  img: string,
  hrefBTN: string
}
function CardTarkhineGardi({title, desc, img, hrefBTN}: Props) {
  console.log(img)
  return (
    <div className="w-full h-[85px] rounded-sm border-gray-4 dark:border-[rgb(64,65,66)]  group selection:border-primary transition-all overflow-hidden border flex justify-between mt-3 hover:shadow-cards duration-300 sm:w-72 sm:h-[344px] sm:flex-col">
      <div className="relative w-[144px] h-full sm:w-full sm:h-[230px] sm:group-hover:h-[190px] duration-300 transition-all">
        <Image
          src={img}
          alt={title}
          fill
          className="w-full h-full"
        />
        <Image
          src="/image/zoomPicture.png"
          alt="zoom"
          width={16}
          height={16}
          className="absolute bottom-2 right-2 sm:hidden"
        />

        <div className="w-full h-full z-30 !bg-[rgba(0,0,0,0.6)] absolute top-0 flex opacity-0  duration-500 transition-all ease-in-out  justify-center items-center sm:group-hover:opacity-100 cursor-pointer">
          <div className="relative w-[52px] h-[52px] flex justify-center items-center">
            <Image
              src="/icons/backIcon1.png"
              alt="back1"
              width={58}
              height={58}
              className="absolute"
            />
            <Image
              src="/icons/backIcon2.png"
              alt="back1"
              width={42}
              height={42}
              className="absolute"
            />
            <Image
              src="/icons/gallery.png"
              alt="gallery"
              width={32}
              height={32}
              className="absolute"
            />
          </div>
        </div>
      </div>

      <div className="w-[calc(100%_-_144px)] h-[110px] group-hover:h-[154px] flex items-center flex-col px-2 py-2 sm:w-full duration-300 transition-all">
        <span className="button-sm sm:h7">شعبه {title}</span>
        <p className="caption-sm text-gray-7 px-1 text-center mt-2 sm:caption-lg">
          {desc}
        </p>

        <Button
          btn="stroke"
          btnSize="!w-32 !h-8 md:caption-md invisible opacity-0 group-hover:visible sm:group-hover:opacity-100 mt-2"
          theme="Primary"
          title="صفحه شعبه"
          iconL="/icons/arrow-left.svg"
          iconSize={16}
          link={hrefBTN}
        />
      </div>
    </div>
  );
}

export default CardTarkhineGardi;
