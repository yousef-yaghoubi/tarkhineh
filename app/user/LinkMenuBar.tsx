'use client';
import { iconsProfile } from '@/lib/indexIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function LinkMenuBar({
  route,
}: {
  route: { icon: string; id: number; url: string; title: string };
}) {
  const pathName = usePathname();
  const IconProf = iconsProfile[
    route.icon as keyof typeof iconsProfile
  ] as React.ElementType;
  return (
    <Link
      href={route.url}
      dir="rtl"
      key={route.id}
      className={`hover:!bg-slate-100 flex h-[38px] items-center rounded dark:hover:!bg-background-2 w-full last:text-red-600 p-2 rounded-r-none ${pathName === route.url ? 'text-primary caption-lg md:body-md border-r-2 last:border-red-600 border-primary' : 'caption-md md:body-sm'}`}
    >
      {IconProf && (
        <IconProf
          width={pathName === route.url ? '20' : '16'}
          height={pathName === route.url ? '20' : '16'}
        />
      )}
      <span className="pr-1">{route.title}</span>
    </Link>
  );
}

export default LinkMenuBar;
