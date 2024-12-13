import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';

function Comment() {
  const starRate = 3;
  const date = '11 اسفند 1401';
  return (
    <div className="w-[252px] h-[142px] md:w-[600px] md:h-[202px] rounded-sm border border-gray-4 relative">
      <div className="w-full h-full py-5 px-4 flex justify-between">
        <div className="w-[60px] md:w-24 md:h-[154px] flex flex-col items-center">
          <Image
            src={'/image/profile.jpg'}
            alt="profile"
            width={56}
            height={56}
            className="rounded-full !w-14 !h-14 md:!w-24 md:!h-24"
          />
          <div className="flex flex-col text-gray-7 caption-sm md:body-sm">
            <span>یوسف یعقوبی</span>
            <span>{convertToPersianNumbers(date)}</span>
          </div>
        </div>
        <p className="caption-sm md:body-md w-[152px] md:w-[427px] my-[6px] flex items-center">
          از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
          عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
          تشکر میکنم.
        </p>
      </div>

      <div className="flex items-center absolute bottom-[7px] left-4 md:left-8 md:bottom-4  ">
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 md:w-4 md:h-16"
        >
          <path
            d="M8 0.904509L9.67723 6.06649L9.70529 6.15286H9.79611H15.2237L10.8327 9.34315L10.7592 9.39653L10.7873 9.4829L12.4645 14.6449L8.07347 11.4546L8 11.4012L7.92653 11.4546L3.53548 14.6449L5.21271 9.4829L5.24078 9.39653L5.1673 9.34315L0.776258 6.15286H6.20389H6.29471L6.32277 6.06649L8 0.904509Z"
            fill="#F4B740"
            stroke="#CBCBCB"
            strokeWidth="0.25"
          />
        </svg>
        <span className="caption-md md:body-lg">
          {convertToPersianNumbers(starRate.toString())}
        </span>
      </div>
    </div>
  );
}

export default Comment;
