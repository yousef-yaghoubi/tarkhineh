'use client';
import IconMap from '@/components/shared/IconMap';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

interface PropsBox {
    icon: string;
    title: string;
    className?: ComponentProps<'div'>['className'];
    children: React.ReactNode;
}
function BoxOfMain({icon, title, className,children}: PropsBox) {
  return (
    <div className={clsx(`w-full h-[133px] md:h-[107px] rounded-md border flex flex-col md:flex-row md:justify-between md:items-center border-gray-4 dark:border-background-2 px-4 py-2`, className)}>
      <h3 className="py-2 body-sm md:body-md border-b md:border-0 border-gray-4 dark:border-background-2 flex gap-x-1 items-center md:w-1/3">
        <IconMap icon={icon} />
        {title}
      </h3>
      <div className="flex flex-row md:justify-between items-center w-full h-full gap-4 md:w-2/3">
        {children}
      </div>
    </div>
  );
}

export default BoxOfMain;
