'use client';
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';

function TextBox({ placeholder }: { placeholder: string }) {
  const [quan, setQuan] = useState(0);
  const maxNumber = 200;
  return (
    <div>
      <Textarea
        className="rounded-sm resize-none border-gray-7 w-[286px] h-36"
        placeholder={placeholder}
        maxLength={200}
        onChange={(e) => setQuan(e.target.value.length)}
      />
      <span className={`flex justify-end text-gray-4`}>
        {convertToPersianNumbers(quan.toString())}/
        {convertToPersianNumbers(maxNumber.toString())}
      </span>
    </div>
  );
}

export default TextBox;
