'use client';
import clsx from 'clsx';
import React, { ComponentProps, useContext } from 'react';
import IconRight from '@icons/arrow-right.svg';
import { CountShowMenuBar } from '@/app/(main)/user/ContextProvider';
interface PropsBox {
  title: string | React.ReactNode;
  className?: ComponentProps<'div'>['className'];
  forUserPage?: boolean;
  children: React.ReactNode;
}

function BoxOfMain({ title, className, forUserPage, children }: PropsBox) {
  const showChild = useContext(CountShowMenuBar);
  return (
    <div
      className={clsx(
        `w-full rounded-md border flex flex-col ${forUserPage ? `h-full ` : `md:flex-row md:justify-between md:items-center h-[133px] md:h-[107px]`} border-gray-4 dark:border-background-2 px-4 py-2`,
        className
      )}
    >
      <h3
        className={`py-2 body-sm md:body-md border-b ${forUserPage ? 'mb-4' : 'md:border-0 md:w-1/3'} border-gray-4 dark:border-background-2 flex gap-x-1 items-center`}
      >
        <span className="ml-4 md:hidden cursor-pointer" onClick={() => showChild?.setCount(0)}>
          <IconRight width="16" height="16" />
        </span>
        {title}
      </h3>
      <div
        className={`flex flex-row md:justify-between items-center w-full h-full gap-4 ${forUserPage ? '' : 'md:w-2/3'}`}
      >
        {children}
      </div>
    </div>
  );
}

export default BoxOfMain;
