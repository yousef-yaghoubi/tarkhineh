import IconMap from '@/components/shared/IconMap';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import React from 'react';

function Address() {
    let number = '09058972658'
  return (
    <div className="min-w-72 md:min-w-80 w-full md:h-[115px] h-24 p-4 rounded border border-gray-4 selection:border-primary bg-gray-3 flex flex-col relative">
      <div className='flex justify-between'>
        <p className='caption-sm md:body-sm'>تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰</p>
        <span className='w-11 flex justify-between'>
            <i><IconMap icon='editShoping'/></i>
            <i><IconMap icon='removeIconShoping'/></i>
        </span>
      </div>
      <div className='caption-sm md:body-sm text-gray-7 flex justify-between mt-2 absolute bottom-4 w-11/12'>
        <span>محل کار</span>
        <span>نام و نام خانوادگی</span>
        <span>{convertToPersianNumbers(number)}</span>
      </div>
    </div>
  );
}

export default Address;
