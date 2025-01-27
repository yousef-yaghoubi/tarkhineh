'use client';
import IconMap from '@/components/shared/IconMap';
import React, { useEffect, useRef, useState } from 'react';

function TextAreaInfo() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [focusIsTextArea, setFocusIsTextArea] = useState(false);

  return (
    <div
      className={`w-full mt-3 md:mt-6 rounded-md h-36 border ${focusIsTextArea ? 'border-primary' : 'border-gray-4 dark:border-background-2 hover:border-black'} transition-colors duration-300 px-3 py-4 md:p-4 relative group`}
    >
      <i className="absolute z-50">
        <IconMap icon="document-normal" />
      </i>

      <span
        className={`right-8 md:right-11 flex items-center bg-white ${focusIsTextArea ? 'text-primary' : ' text-gray-7 group-hover:text-black'} ${focusIsTextArea || (ref.current && ref.current.value.replace(/\s+/g, " ").trim().length > 0) ? 'top-[-1em] caption-sm' : 'top-[10px] md:top-[14px] body-sm peer-focus:top-0'} md:body-md absolute z-50 transition-all duration-300`}
      >
        توضیحات سفارش &nbsp;
        <span
          className={`caption-sm md:caption-md ${focusIsTextArea || (ref.current && ref.current.value.replace(/\s+/g, " ").trim().length > 0) ? 'hidden' : 'flex'}`}
        >
          (اختیاری)
        </span>
      </span>

      <textarea
        ref={ref}
        className="peer outline-none z-10 w-full !h-[calc(100%_-_1em)] body-sm resize-none absolute top-[5px] right-0 px-8 py-2 md:p-4 md:pr-12"
        onFocus={() => setFocusIsTextArea(true)}
        onBlur={() => setFocusIsTextArea(false)}
      ></textarea>
    </div>
  );
}

export default TextAreaInfo;
