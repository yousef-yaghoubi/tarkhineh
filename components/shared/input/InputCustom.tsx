import React, { ComponentProps, forwardRef } from 'react';
import { clsx } from 'clsx';
import ErrorMessage from '../loginForm/ErrorMessage';
import { FieldError } from 'react-hook-form';

type PropsInput = {
  type: ComponentProps<'input'>['type'];
  placeholder: string;
  classNameParent: ComponentProps<'div'>['className'];
  id: string;
  error?: FieldError | undefined;
  disabled?: ComponentProps<'input'>['disabled'];
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>;

const InputCustom = forwardRef<HTMLInputElement, PropsInput>(
  (
    { type, placeholder, className, classNameParent, id, error, disabled, ...rest },
    ref
  ) => {
    return (
      <div
        className={clsx(
          `relative flex flex-col justify-center items-center ${classNameParent}`
        )}
      >
        <input
          type={type}
          id={id}
          ref={ref}
          disabled={!!disabled}
          {...rest}
          className={clsx(
            `peer w-full border border-gray-4 bg-transparent disabled:!border-[rgb(242,242,242)] dark:border-background-2 h-8 md:h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary focus:dark:border-primary hover:border-gray-8 dark:hover:border-slate-400`,
            className
          )}
          placeholder={placeholder}
        />
        <label
          htmlFor={id}
          className={`absolute right-3 -top-[12px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[12px] focus:text-sm peer-focus:text-primary peer-focus:text-sm bg-white dark:bg-background-1`}
        >
          {placeholder}
        </label>
        <ErrorMessage forInput={error} />
      </div>
    );
  }
);

export default InputCustom;
