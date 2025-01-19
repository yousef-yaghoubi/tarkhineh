'use client';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import SearchBox from '../searchBox/SearchBox';
import { usePathname, useRouter } from 'next/navigation';
import IconMap from '../IconMap';
import { ProfileRoute } from '@/lib/dataPublic';
import { useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCart } from '../shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';

interface Props {
  alt: string;
  img: string;
  imgActive: string;
  className?: string;
}
function Icon({ alt, img, imgActive, className }: Props) {
  const { status } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isShowMenuProfile, setIsShowMenuProfile] = useState(false);
  const { cart } = useCart();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  let isActive = false;
  let isLogin = false;

  useEffect(() => {
    if (pathName == '/search') {
      closeModal();
    }
  }, [isModalOpen, openModal, closeModal]);

  if (pathName.includes(alt)) {
    isActive = true;
  }

  useEffect(() => {
    if (alt === 'profile') {
      setIsProfile(true);
    } else {
      setIsProfile(false);
    }
  }, []);

  if (status == 'authenticated') {
    isLogin = true;
  }

  return (
    <>
      <button
        className={`rounded ${alt == 'profile' && isLogin ? 'w-8 !h-6 md:!w-14 md:!h-10' : 'w-6 md:!w-10 md:!h-10'} ${
          isActive ? 'bg-primary' : 'bg-tint-1'
        } justify-center flex items-center relative ${className}`}
        onClick={() => {
          !isLogin && alt == 'profile' && router.push('/login');
          alt == 'search' && openModal();
          alt == 'shoping' && router.push('/shoping/shopingCart')
        }}
      >
        {alt == 'shoping' && cart.length !== 0 &&(
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
            <IconMap
              icon={isActive ? imgActive : img}
              key={isActive ? imgActive : img}
            />
          ) : isLogin ? (
            <DropdownMenu
              open={isShowMenuProfile !== false}
              onOpenChange={setIsShowMenuProfile}
            >
              <DropdownMenuTrigger
                className="focus:!outline-none focus:!border-none !outline-none !border-none flex items-center"
                onMouseEnter={() => setIsShowMenuProfile((prev) => !prev)}
                onMouseLeave={() => setIsShowMenuProfile((prev) => !prev)}
              >
                <div className="w-[18px] md:w-6 h-[18px] md:h-6 flex justify-center items-center relative">
                  <IconMap
                    icon={isActive ? imgActive : img}
                    key={isActive ? imgActive : img}
                  />
                </div>
                <IconMap icon="arrow-down" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`bg-white dark:bg-background-2 dark:border-background-1 ml-4 mt-2`}
                onMouseEnter={() => setIsShowMenuProfile(true)}
                onMouseLeave={() => setIsShowMenuProfile(false)}
              >
                {ProfileRoute.map((route) => (
                  <DropdownMenuItem
                    onClick={() => router.push(route.url)}
                    dir="rtl"
                    key={route.id}
                    className={`${route.id !== 5 ? 'border-b border-gray-3 dark:border-background-1' : ''} hover:!bg-slate-100 dark:hover:!bg-background-1`}
                  >
                    <IconMap icon={route.icon} />
                    <span className="pr-1">{route.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <IconMap
              icon={isActive ? imgActive : img}
              key={isActive ? imgActive : img}
            />
          )}
        </div>
      </button>

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
