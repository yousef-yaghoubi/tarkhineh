'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCart } from '@/providers/shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { icons } from '@/lib/indexIcon';
import IconProfile from './IconProfile';
import clsx from 'clsx';
import Modal from '../Modal';
import SearchBox from '../SearchBox/SearchBox';

interface Props {
  alt: string;
  icon: keyof typeof icons;
  className?: string;
}

function Icon({ alt, icon, className }: Props) {
  const { status } = useSession();
  const pathName = usePathname();
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const isLogin = status === 'authenticated';
  const isActive = pathName.includes(alt);

  useEffect(() => {
    if (alt === 'user') setIsProfile(true);
    else setIsProfile(false);
  }, [alt]);

  useEffect(() => {
    if (pathName === '/search') setIsModalOpen(false);
  }, [pathName]);

  const IconComponent = icons[icon];

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (alt === 'search') {
      e.preventDefault();
      setIsModalOpen(true);
      return;
    }

    if (alt === 'user' && !isLogin) {
      return;
    }

    if (alt === 'shoping') {
      return;
    }
  };

  const href =
    alt === 'user' && !isLogin
      ? '/login'
      : alt === 'shoping'
        ? '/shoping/shopingCart'
        : pathName;

  return (
    <>
      <Link
        href={href}
        onClick={handleClick}
        className={clsx(
          'flex justify-center items-center relative rounded cursor-pointer transition-all duration-200',
          isProfile && isLogin
            ? 'w-8 !h-6 md:!w-14 md:!h-10'
            : 'w-6 md:!w-10 md:!h-10',
          isActive ? 'bg-primary' : 'bg-tint-1',
          className
        )}
      >

        {alt === 'shoping' && cart.length > 0 && (
          <div
            className={clsx(
              'absolute w-4 h-4 text-xs flex justify-center items-center rounded-full z-10',
              'md:top-[2px] md:right-[2px]',
              '-top-1.5 -right-1',
              isActive ? 'bg-tint-6 text-white' : 'bg-white text-primary'
            )}
          >
            {convertToPersianNumbers(cart.length.toString())}
          </div>
        )}

        <div className="w-[18px] md:w-6 h-[18px] md:h-6 flex justify-center items-center relative">
          {!isProfile ? (
            <IconComponent fill={isActive ? 'white' : '#417F56'} />
          ) : isLogin ? (
            <IconProfile icon={icon} isActive={isActive} />
          ) : (
            <IconComponent fill={isActive ? 'white' : '#417F56'} />
          )}
        </div>
      </Link>


      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={<h3 className="caption-lg md:h7">جستجو</h3>}
        desc="لطفا متن خود را تایپ و سپس دکمه Enter را بزنید."
      >
        <SearchBox classes="w-[90%] max-w-[409px]" />
      </Modal>
    </>
  );
}

export default Icon;
