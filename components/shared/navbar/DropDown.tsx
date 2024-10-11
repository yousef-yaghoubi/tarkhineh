import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

interface Props{
    id: number,
    label: string,
    route: string,
    isSub: boolean,
    subMain:string[]
}
function DropDown( {stats} :{stats: Props}) {
  return (
    <DropdownMenu key={stats.route} dir="rtl">
      <DropdownMenuTrigger className="focus:!outline-none flex flex-row items-center justify-center w-fit">
        {stats.label}
        <Image src="/icons/arrow-down.svg" alt="arrow" className='dark:!invert' width={24} height={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuSeparator />
        {stats.subMain?.map((sub)=> (
            <DropdownMenuItem key={sub}>{sub}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
