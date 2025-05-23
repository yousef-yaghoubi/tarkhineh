'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import IconMoon from "@icons/moon.svg"
import IconSun from "@icons/sun.svg"
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { theme ,setTheme } = useTheme();
  const [themeSite, setThemeSite] = useState<string>()

  useEffect(()=>{
    if(theme){
      setThemeSite(theme)
    }
  },[theme])
  
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger className="focus:!outline-none" asChild>
        <Button
          className={`w-6 h-6 md:w-10 md:h-10 rounded !bg-primary justify-center flex items-center relative shadow-none`}
          size="icon"
          onClick={() =>
            theme == 'light' ? setTheme('dark') : setTheme('light')
          }
        >
          <div
            className={`w-6 h-6 md:!w-10 md:!h-10 rounded bg-tint-1 justify-center flex items-center relative`}
          >
            <div className="w-[18px] md:w-6 h-[18px] md:h-6 flex justify-center items-center relative">
              {themeSite == 'dark' ? (
                <IconMoon width="24" height="24"/>
              ) :
              (
                <IconSun width="24" height="24" className="fill-transparent"/>
              )}
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
