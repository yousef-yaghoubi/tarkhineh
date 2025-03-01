'use client';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

interface PropsBox {
  title: string | React.ReactNode;
  className?: ComponentProps<'div'>['className'];
  forProfile?: boolean;
  children: React.ReactNode;
}

function BoxOfMain({ title, className, forProfile, children }: PropsBox) {
  return (
    <div
      className={clsx(
        `w-full rounded-md border flex flex-col ${forProfile ? `h-full ` : `md:flex-row md:justify-between md:items-center h-[133px] md:h-[107px]`} border-gray-4 dark:border-background-2 px-4 py-2`,
        className
      )}
    >
      <h3
        className={`py-2 body-sm md:body-md border-b ${forProfile ? 'mb-4' : 'md:border-0 md:w-1/3'} border-gray-4 dark:border-background-2 flex gap-x-1 items-center`}
      >
        {title}
      </h3>
      <div className={`flex flex-row md:justify-between items-center w-full h-full gap-4 ${forProfile ? "" : "md:w-2/3"}`}>
        {children}
      </div>
    </div>
  );
}

export default BoxOfMain;
