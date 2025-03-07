'use client';
import React, { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import 'react-multi-date-picker/styles/colors/green.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';
import ErrorMessage from '@/components/shared/loginForm/ErrorMessage';
import DateObject from 'react-date-object';

const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

type IPropDatePick = React.HTMLAttributes<HTMLDivElement> & {
    placeholder: string;
    className?: React.ComponentProps<'div'>['className'];
    id: string;
    error?: FieldError | undefined;
    disabled?: React.ComponentProps<'input'>['disabled'];
};

const DatePic = forwardRef<HTMLInputElement, IPropDatePick>(
  (
    { placeholder, className, id, error, disabled, ...rest },
    ref
  ) => {
    
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={clsx(
        `relative flex flex-col justify-center items-center ${className}`
      )}
    >
      <DatePicker
        monthYearSeparator=" "
        maxDate={new DateObject({ calendar: persian })}
        disabled={!!disabled}
        weekDays={weekDays}
        placeholder={placeholder}
        renderButton={(direction: any, handleClick: any) => (
          <button
            onClick={handleClick}
            className="border border-primary w-6 h-6 rounded-full text-primary"
          >
            {direction === 'right' ? '>' : '<'}
          </button>
        )}
        className={`green w-full ${windowWidth < 1024 ? 'rmdp-mobile' : ''}`}
        inputClass="peer w-full bg-transparent border border-gray-4 disabled:!border-[rgb(242,242,242)] dark:border-background-2 h-8 md:h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary focus:dark:border-primary hover:border-gray-8 dark:hover:border-slate-400"
        calendar={persian}
        locale={persian_fa}
      />
      <label
          htmlFor={id}
          className={`absolute right-3 -top-[12px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[12px] focus:text-sm peer-focus:text-primary peer-focus:text-sm bg-white dark:bg-background-1`}
        >
          {placeholder}
        </label>
        <ErrorMessage forInput={error} />
    </div>
  )
});
  
export default DatePic;
