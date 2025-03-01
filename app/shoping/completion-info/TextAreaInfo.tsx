"use client";
import React, { ComponentProps, forwardRef } from "react";
import { clsx } from "clsx";
import IconDocument from "@icons/document-normal.svg"
type PropsTextArea = {
  showIcon?: boolean;
  placeholder: string;
  className?: ComponentProps<"div">["className"];
  id: string;
} & Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>>;


const TextAreaInfo = forwardRef<HTMLTextAreaElement, PropsTextArea>(
  ({ showIcon, placeholder, className, id, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          "border border-gray-4 dark:border-background-2 hover:border-black dark:hover:border-gray-6 transition-colors duration-300 relative group focus-within:dark:border-primary focus-within:border-primary",
          className
        )}
      >
        {showIcon && (
          <i className="absolute z-50">
            <IconDocument className="w-4 h-4 md:w-6 md:h-6 transition-colors duration-300 dark:group-hover:fill-gray-6 group-hover:fill-black peer-focus:fill-primary fill-gray-7"/>
          </i>
        )}

        <textarea
          id={id}
          ref={ref}
          {...rest}
          className={clsx(
            `peer placeholder-transparent bg-transparent outline-none z-10 w-full h-[calc(100%_-_1em)] body-sm resize-none absolute top-[5px] right-0`,
            showIcon ? "px-8 py-2 md:p-4 md:pr-12" : "px-8 py-2 md:p-4"
          )}
          placeholder={placeholder}
        />

        <label
          htmlFor={id}
          className={clsx(
            `absolute ${showIcon ? "right-10" : "right-3"} group-hover:!text-black dark:group-hover:!text-gray-6 z-40 -top-[12px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-[12px] peer-focus:text-sm peer-focus:text-primary bg-white dark:bg-background-1`
          )}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

export default TextAreaInfo;
