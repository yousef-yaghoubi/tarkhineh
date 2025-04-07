import Image from 'next/image';
import React from 'react';
import Icon from './Icon';
import Nav from './Nav';
import { ModeToggle } from './ChangeTheme';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { iconDetails } from '@/lib/dataPublic';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/api/auth/[...nextauth]/route';
import IconNavbar from '@icons/menu.svg';
async function Navbar() {
  const session = await getServerSession(authOption);
  return (
    <div className="w-full h-16 md:h-[115px] flex flex-row justify-between px-4 md:justify-around md:p-0 items-center shadow-shadow-10">
      {/* <Sheet>
        <SheetTrigger className="md:!hidden" asChild>
          <IconNavbar width="24" height="24" className="fill-primary" />
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-[#1c1b22] border-none p-0 menuMobile"> */}
          <div className="flex flex-col justify-start md:!hidden">
            <Nav menuBar={true}/>
          </div>
        {/* </SheetContent>
      </Sheet> */}

      <div className="w-[102px] h-8 lg:w-[155px] lg:h-[51px]">
        <Link href={'/'}>
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
        </Link>
      </div>

      <div className="hidden md:flex w-full max-w-[500px] lg:max-w-[650px] xl:max-w-[808px]">
        <Nav menuBar={false} />
      </div>

      <div
        className={`flex w-24 sm:w-[140px] justify-around ${session ? 'md:w-52' : 'md:w-[185px]'}`}
      >
        <ModeToggle />
        {iconDetails.map((icon) => (
          <Icon
            alt={icon.alt}
            icon={icon.icon as 'IconShopingCard' | 'IconSearch' | 'IconProfile'}
            key={icon.id}
            className={icon.class}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
