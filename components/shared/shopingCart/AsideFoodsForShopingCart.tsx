'use client';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import React, { useEffect, useState } from 'react';
import { Price } from '../card/cardFood/CardFoodNecessary';
import { useCart } from '../../../providers/shopingCardProvider';
import IconRemove from '@icons/remove.svg';
import IconWarning from '@icons/warning-2.svg';
import { useOrder } from '@/app/(main)/shoping/ShopingProvider';
import { CartFoodForShoppingCart } from '@/types';
import MapCard from './MapCard';
import ConditionalButton from './ConditionalButton';
import { PropAsideFoodsForShopingCart } from '@/types/prop';
import ModalRemoving from '../ModalRemoving';
import { useModalStateRemoving } from '@/hooks/modal';

const calcDiscountPrice = (cart: CartFoodForShoppingCart[]) => {
  const offerCart = cart.filter((item) => item.order !== 0);
  const allOffer = [
    offerCart.map(
      (item) =>
        (item.price - (item.price * (100 - item.order)) / 100) * item.quantity
    ),
  ];
  const sum = allOffer[0].reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return sum;
};

const calcAllPrice = (cart: CartFoodForShoppingCart[]) => {
  const offerCart = cart.filter((item) => item.order !== 0);
  const allOffer = [
    offerCart.map(
      (item) => (item.price - (item.price * item.order) / 100) * item.quantity
    ),
  ];
  const sum = allOffer[0].reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return sum;
};



function AsideFoodsForShopingCart({
  hiddenSection,
  linkBTN,
  onClickCustom,
  BtnDisabeld,
}: PropAsideFoodsForShopingCart) {
  const { cart } = useCart();
  const { updateFee } = useOrder();
  const { isOpenModal, setIsOpenModal} = useModalStateRemoving()
  // const [isOpenModal, setIsOpenModel] = useState(false);


  
  useEffect(() => {
    updateFee({ price: calcAllPrice(cart), discount: calcDiscountPrice(cart) });
  }, [cart, updateFee]);

  return (
    <aside className=" w-full md:w-11/12 max-w-[704px] xl:max-w-[496px] h-fit flex flex-col mt-10 xl:mt-0 border border-gray-4 dark:border-background-2 rounded-md p-6 text-gray-8 dark:text-gray-1">
      <div
        className={`${hiddenSection?.length && hiddenSection.find((num) => num == 1) ? 'hidden' : 'flex'} justify-between items-center border-b border-gray-4 dark:border-background-2 pb-3`}
      >
        <span>
          سبد خرید ({convertToPersianNumbers(cart.length.toString())})
        </span>
        <span onClick={() => setIsOpenModal(true)} className="cursor-pointer">
          <IconRemove className="w-6 h-6" />
        </span>
      </div>

      <div
        className={`${hiddenSection?.length && hiddenSection.find((num) => num == 2) ? 'hidden' : 'block'} py-2 !h-48 w-full border-b border-gray-4 dark:border-background-2`}
      >
        <div className="overflow-auto h-full scrollbar">
          <MapCard cart={cart}/>
        </div>
      </div>

      <div className="flex justify-between items-center border-b border-gray-4 dark:border-background-2 py-3">
        <span className="body-sm">تخفیف محصولات</span>
        <span className="text-gray-6">
          <Price price={calcDiscountPrice(cart)} order={0} />
        </span>
      </div>

      <div className="py-3 border-b border-gray-4 dark:border-background-2">
        <div className="flex justify-between items-center mb-2">
          <span className="body-sm">هزینه ارسال</span>
          <span className="text-gray-6">
            <Price price={0} order={0} />
          </span>
        </div>
        <div className="caption-sm text-warning flex mt-2">
          <IconWarning width="24" height="24" className="fill-[#A9791C]" />
          <p className="mr-2">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-3 pb-6">
        <div className="flex justify-between">
          <span className="body-sm">مبلغ قابل پرداخت</span>
          <span className="text-primary">
            <Price price={calcAllPrice(cart)} order={0} />
          </span>
        </div>
        
        <ConditionalButton onClickCustom={onClickCustom} linkBTN={linkBTN} BtnDisabeld={BtnDisabeld}/>
      </div>

      <ModalRemoving isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} idForRemoving={null} typeRemove='shoppingCart'/>
    </aside>
  );
}

export default AsideFoodsForShopingCart;
