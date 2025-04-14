'use client';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import SearchBox from '../searchBox/SearchBox';
import { usePathname, useRouter } from 'next/navigation';
import { ProfileRoute } from '@/lib/dataPublic';
import { useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useCart } from '../../../providers/shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import clsx from 'clsx';
import IconArrowDown from '@icons/arrow-down.svg';
import { icons, iconsProfile } from '@/lib/indexIcon';

interface Props {
  alt: string;
  icon: keyof typeof icons;
  className?: string;
}

function Icon({ alt, icon, className }: Props) {
  const { status } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const { cart } = useCart();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const isActive = pathName.includes(alt)
  let isLogin = false;

  useEffect(() => {
    if (pathName == '/search') {
      closeModal();
    }
  }, [isModalOpen, pathName]);

  // if (pathName.includes(alt)) {
  //   isActive = true;
  // }

  useEffect(() => {
    if (alt == 'user') {
      setIsProfile(true);
    } else {
      setIsProfile(false);
    }
  }, [alt]);

  if (status == 'authenticated') {
    isLogin = true;
  }
  const IconComponent = icons[icon];
  return (
    <>
      <div
        className={clsx(
          `${alt == 'user' && isLogin ? 'w-8 !h-6 md:!w-14 md:!h-10' : 'w-6 md:!w-10 md:!h-10'}
          ${isActive ? 'bg-primary' : 'bg-tint-1'}
          justify-center flex items-center relative rounded cursor-pointer
          ${className}`
        )}
        onClick={() => {
          if(!isLogin && alt == 'user') router.push('/login');
          if(alt == 'search') openModal();
          if(alt == 'shoping') router.push('/shoping/shopingCart');
        }}
      >
        {alt == 'shoping' && cart.length !== 0 && (
          <div
            className={`absolute -top-1.5 -right-1 md:top-[2px] md:right-[2px] ${
              isActive ? 'bg-tint-6 text-white' : 'bg-white text-primary'
            } rounded-full w-4 h-4 text-xs flex justify-center items-center z-10`}
          >
            {convertToPersianNumbers(cart.length.toString())}
          </div>
        )}
        <div className="w-[18px] md:w-6 h-[18px] md:h-6 flex justify-center items-center relative">
          {!isProfile ? (
            <IconComponent
              fill={isActive ? 'white' : '#417F56'}
              width="24"
              height="24"
            />
          ) : isLogin ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:!outline-none focus:!border-none !outline-none !border-none flex items-center">
                  <div className="w-[18px] md:w-6 h-[18px] md:h-6 flex justify-center items-center relative">
                    <IconComponent
                      fill={isActive ? 'white' : '#417F56'}
                      width="24"
                      height="24"
                    />
                  </div>
                  <IconArrowDown
                    fill={isActive ? 'white' : '#417F56'}
                    width="16"
                    height="16"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`bg-white dark:bg-background-2 dark:border-background-1 ml-4 mt-2`}
                >
                  {ProfileRoute.map((route) => {
                    const IconProf = iconsProfile[route.icon as keyof typeof iconsProfile] as React.ElementType;
                    return (
                      <DropdownMenuItem
                        onClick={() => router.push(route.url)}
                        dir="rtl"
                        key={route.id}
                        className="hover:!bg-slate-100 dark:hover:!bg-background-1"
                      >
                        {IconProf && (
                          <IconProf
                            className="fill-black dark:fill-white"
                            width="16"
                            height="16"
                          />
                        )}
                        <span className="pr-1">{route.title}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <IconComponent fill={isActive ? 'white' : '#417F56'} />
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={<h3 className="caption-lg md:h7">جستجو</h3>}
        desc="لطفا متن خود را تایپ و سپس دکمه Enter را بزنید."
      >
        <SearchBox classes="w-[90%] max-w-[409px]" />
      </Modal>
    </>
  );
}

export default Icon;
