"use client";
import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export function ModeToggle() {
  const { setTheme } = useTheme();
  
  const themeLocal = localStorage ? localStorage.theme : 'light';

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger className="focus:!outline-none" asChild>
        <Button
          className={`w-6 h-6 md:w-10 md:h-10 rounded !bg-primary justify-center flex items-center relative`}
          size="icon"
          onClick={()=> themeLocal == 'light' ? setTheme('dark') : setTheme('light')}
        >
          <div
            className={`w-6 h-6 md:!w-10 md:!h-10 rounded bg-tint-1 justify-center flex items-center relative`}
          >
            <div className="w-6 h-6 flex justify-center items-center">
              {themeLocal == 'dark' ? (
                <Image
                  src="/icons/moon.svg"
                  alt="moon"
                  width={window.innerWidth < 770 ? 20 : 24}
                  height={window.innerWidth < 770 ? 20 : 24}
                />
              ) : (
                <Image
                  src="/icons/sun.svg"
                  alt="sun"
                  width={window.innerWidth < 770 ? 20 : 24}
                  height={window.innerWidth < 770 ? 20 : 24}
                />
              )}
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
