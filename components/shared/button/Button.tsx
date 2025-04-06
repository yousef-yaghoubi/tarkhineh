'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useCart } from '../shopingCardProvider';
import { FoodType } from '@/types';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes <HTMLButtonElement> {
  btn: 'text' | 'stroke' | 'fill';
  theme: 'Primary' | 'White' | 'Black';
  loading?: boolean;
  link?: string;
  onClickCustom?: (() => void) | 'reload';
  shopingCard?: FoodType | undefined;
}

const Button: React.FC<ButtonProps> = ({
  btn,
  className,
  theme,
  disabled,
  loading,
  link,
  onClickCustom,
  shopingCard,
  children,
  ...rest
}) => {
  const router = useRouter();
  const { addToCart } = useCart();
  if (btn == 'fill') {
    return (
      <button
        {...rest}
        className={clsx(
          `duration-300 disabled:bg-gray-3 disabled:text-gray-4 dark:disabled:bg-gray-8 ${
            theme === 'Primary'
              ? 'bg-primary text-white hover:bg-shade-2 selection:bg-shade-3'
              : theme === 'White'
                ? 'bg-tint-1 text-primary hover:bg-tint-2'
                : 'bg-gray-7 text-white hover:bg-gray-8'
          } rounded flex items-center justify-around ${className}`
        )}
        onClick={() => {
          if (shopingCard) {
            addToCart(shopingCard);
          }
          if (onClickCustom == 'reload') {
            window.location.reload();
          } else if (onClickCustom) {
            onClickCustom();
          }
          if (link) {
            router.push(link);
          }
        }}
        disabled={disabled === true}
      >
        {loading !== true ? (
          <>
            {children}
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
        {...rest}
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
          if (onClickCustom == 'reload') {
            window.location.reload();
          } else if (onClickCustom) {
            onClickCustom();
          }
          if (link) {
            router.push(link);
          }
        }}
        disabled={disabled === true}
      >
        {loading !== true ? (
          <>

            {children}

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
        {...rest}
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
          if (onClickCustom == 'reload') {
            window.location.reload();
          } else if (onClickCustom) {
            onClickCustom();
          }
          if (link) {
            router.push(link);
          }
        }}
        disabled={disabled === true}
      >
        {loading !== true ? (
          <>

            {children}

          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  }
};

export default Button;
