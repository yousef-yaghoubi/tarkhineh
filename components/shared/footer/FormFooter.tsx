'use client';
import React, { useState } from 'react';
import InputFooter from './InputFooter';
import { Textarea } from '@/components/ui/textarea';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Button from '../button/Button';
import { toast } from 'sonner';

function FormFooter() {
  const [quan, setQuan] = useState(0);
  const maxNumber = 200;
  return (
    <>
      <div className=" h-[163px] flex gap-x-6 mt-4 w-full">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <InputFooter placeholder="نام و نام خانوادگی" />

          <InputFooter placeholder="شماره تماس" />

          <InputFooter placeholder="آدرس ایمیل(اختیاری)" />
        </div>

        <div className="w-1/2">
          <Textarea
            className="rounded-sm resize-none border-gray-7 h-[11.5em] hover:border-gray-1"
            placeholder={'پیام شما'}
            maxLength={200}
            onChange={(e) => setQuan(e.target.value.length)}
          />
          <span className={`flex justify-end text-gray-4 text-xs`}>
            {convertToPersianNumbers(quan.toString())}/
            {convertToPersianNumbers(maxNumber.toString())}
          </span>

        </div>
      </div>
      <Button btn='stroke' theme='White' className='w-[183px] h-10 self-end mt-4' onClickCustom={()=> toast.warning('این عمل فعلا در دسترس نیست.')}>ارسال پیام</Button>
    </>
  );
}

export default FormFooter;
