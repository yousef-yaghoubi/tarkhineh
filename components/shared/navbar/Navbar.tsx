import Image from 'next/image';
import React from 'react';
import Icon from './Icon';
import Nav from './Nav';
import { ModeToggle } from './ChangeTheme';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
const iconDetails = [
  {
    id: 1,
    alt: 'search',
    img: '/icons/search-icon.svg',
    imgActive: '/icons/search-icon-active.svg',
    isActive: false,
    quantity: 0,
    class: 'hidden sm:!flex',
  },
  {
    id: 2,
    alt: 'shopping',
    img: '/icons/shopping-icon.svg',
    imgActive: '/icons/shopping-icon-active.svg',
    isActive: false,
    quantity: 0,
    class: '',
  },
  {
    id: 3,
    alt: 'profile',
    img: '/icons/profile-icon.svg',
    imgActive: '',
    isActive: false,
    quantity: 0,
    class: '',
  },
];


function Navbar() {
  return (
    <div className="w-full h-16 md:h-[115px] flex flex-row justify-between px-4 md:justify-around md:p-0 items-center">
      <Sheet>
        <SheetTrigger className="md:!hidden" asChild>
          <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-[#1c1b22] border-none p-0 menuMobile">
          <SheetHeader>
            <div className="flex flex-col justify-start">
              <Nav menuBar={true}/>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="w-[102px] h-8 lg:w-[155px] lg:h-[51px]">
        <Image
          src="/logoGreenSmall.png"
          width={102}
          height={32}
          alt="logo"
          className="flex lg:hidden"
        />
        <Image
          src="/logoGreenBig.png"
          width={155}
          height={51}
          alt="logo"
          className="hidden lg:flex"
        />
      </div>

      <div className="hidden md:flex w-full max-w-[500px] lg:max-w-[650px] xl:max-w-[808px]">
        <Nav menuBar={false} />
      </div>

      <div className="flex w-24 sm:w-[140px] md:w-[185px] justify-around">
        <ModeToggle />
        {iconDetails.map((icon) => (
          <Icon
            alt={icon.alt}
            img={icon.img}
            imgActive={icon.imgActive}
            isActive={icon.isActive}
            quantity={icon.quantity}
            key={icon.id}
            className={icon.class}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
