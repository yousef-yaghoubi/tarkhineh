'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ComponentProps } from 'react';
import IconMap from '../IconMap';
import { useCart } from '../shopingCardProvider';
import { FoodType } from '@/lib/indexType';
import clsx from 'clsx';

interface Props {
  btn: 'text' | 'stroke' | 'fill';
  className: ComponentProps<"button">["className"];
  theme: 'Primary' | 'White' | 'Black';
  disabled?: boolean;
  loading?: boolean;
  children: string | React.ReactNode;
  iconR?: string;
  iconL?: string;
  link?: string;
  iconW?: string;
  iconH?: string;
  onClickReload?: boolean;
  shopingCard?: FoodType;
}
function Button({
  btn,
  className,
  theme,
  disabled,
  loading,
  children,
  iconR,
  iconL,
  link,
  iconW,
  iconH,
  onClickReload,
  shopingCard,
}: Props) {
  const router = useRouter();
  const { addToCart } = useCart();
  if (btn == 'fill') {
    return (
      <button
        className={clsx(
          `duration-300 disabled:bg-gray-3 disabled:text-gray-4 ${
            theme === 'Primary'
              ? 'bg-primary text-white hover:bg-shade-2 selection:bg-shade-3'
              : theme === 'White'
                ? 'bg-tint-1 text-primary hover:bg-tint-2'
                : 'bg-gray-7 text-white hover:bg-gray-8'
          } rounded-sm md:rounded-md flex items-center justify-around ${className}`
        )}
        onClick={() => {
          shopingCard && addToCart(shopingCard);
          onClickReload && window.location.reload();
          link && router.push(link);
        }}
        disabled={disabled !== true ? false : true}
      >
        {loading !== true ? (
          <>
            {iconR && (
              <i className={`${iconH} ${iconW} absolute right-1`}>
                <IconMap icon={iconR} key={iconR} />
              </i>
            )}

            {children}

            {iconL && (
              <span className={`${iconH} ${iconW} absolute left-1`}>
                <IconMap icon={iconL} key={iconL} />
              </span>
            )}
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  } else if (btn == 'stroke') {
    return (
      <button
        className={clsx(
          `bg-transparent relative border duration-300 disabled:border-gray-4 disabled:text-gray-4 ${
            theme === 'Primary'
              ? 'text-primary border-primary hover:border-shade-2 hover:text-shade-2 selection:text-shade-3 selection:border-shade-3'
              : theme === 'White'
                ? 'text-white border-white hover:border-gray-2 hover:text-gray-2 selection:text-gray-3 selection:border-gray-3'
                : 'text-gray-7 border-gray-7 hover:border-gray-8 hover:text-gray-8 selection:text-black selection:border-blatext-black'
          } rounded-sm flex items-center justify-around ${className}`
        )}
        onClick={() => {
          onClickReload && window.location.reload();
          link && router.push(link);
        }}
        disabled={disabled !== true ? false : true}
      >
        {loading !== true ? (
          <>
            {iconR && (
              <i className={`${iconH} ${iconW} absolute right-1`}>
                <IconMap icon={iconR} key={iconR} />
              </i>
            )}

            {children}

            {iconL && (
              <span className={`${iconH} ${iconW} absolute left-1`}>
                <IconMap icon={iconL} key={iconL} />
              </span>
            )}
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  } else {
    return (
      <button
        className={clsx(
          `bg-transparent disabled:text-gray-4 ${
            theme === 'Primary'
              ? 'text-primary hover:text-shade-2 selection:text-shade-3'
              : theme === 'White'
                ? 'text-white hover:text-gray-1 selection:text-gray-3'
                : 'text-gray-7 hover:text-gray-8 selection:text-black'
          } rounded-sm md:rounded-md flex items-center justify-around ${className}`
        )}
        onClick={() => {
          onClickReload && window.location.reload();
          link && router.push(link);
        }}
        disabled={disabled !== true ? false : true}
      >
        {loading !== true ? (
          <>
            {iconR && (
              <i className={`${iconH} ${iconW} absolute right-1`}>
                <IconMap icon={iconR} key={iconR} />
              </i>
            )}

            {children}

            {iconL && (
              <span className={`${iconH} ${iconW} absolute left-1`}>
                <IconMap icon={iconL} key={iconL} />
              </span>
            )}
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  }
}

export default Button;
