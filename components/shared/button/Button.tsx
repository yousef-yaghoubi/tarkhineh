'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useCart } from '../../../providers/shopingCardProvider';
import clsx from 'clsx';
import { ButtonProps } from '@/types/button';


const Button: React.FC<ButtonProps> = ({
  btn,
  theme,
  className,
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

  const handleClick = () => {
    if (shopingCard) addToCart(shopingCard);
    if (onClickCustom === 'reload') window.location.reload();
    else if (onClickCustom) onClickCustom();
    if (link) router.push(link);
  };

  const baseClass = 'flex items-center justify-around rounded duration-300';

  const renderContent = () =>
    loading ? <span className="loader" /> : <>{children}</>;

  const styles = {
    fill: clsx(
      'disabled:bg-gray-3 disabled:text-gray-4 dark:disabled:bg-gray-8',
      {
        'bg-primary text-white hover:bg-shade-2 selection:bg-shade-3': theme === 'Primary',
        'bg-tint-1 text-primary hover:bg-tint-2': theme === 'White',
        'bg-gray-7 text-white hover:bg-gray-8': theme === 'Black',
      }
    ),
    stroke: clsx(
      'bg-transparent relative border disabled:border-gray-4 disabled:text-gray-4 rounded-sm',
      {
        'text-primary border-primary hover:border-shade-2 hover:text-shade-2 selection:text-shade-3 selection:border-shade-3': theme === 'Primary',
        'text-white border-white hover:border-gray-2 hover:text-gray-2 selection:text-gray-3 selection:border-gray-3': theme === 'White',
        'text-gray-7 border-gray-7 hover:border-gray-8 hover:text-gray-8 selection:text-black selection:border-black': theme === 'Black',
      }
    ),

    text: clsx(
      'bg-transparent disabled:text-gray-4 rounded-sm md:rounded-md',
      {
        'text-primary hover:text-shade-2 selection:text-shade-3': theme === 'Primary',
        'text-white hover:text-gray-1 selection:text-gray-3': theme === 'White',
        'text-gray-7 hover:text-gray-8 selection:text-black': theme === 'Black',
      }
    ),
  };

  return (
    <button
      {...rest}
      className={clsx(baseClass, styles[btn], className)}
      onClick={handleClick}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
