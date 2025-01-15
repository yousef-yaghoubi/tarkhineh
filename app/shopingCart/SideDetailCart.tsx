import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import React from 'react';

function SideDetailCart() {
  return (
    <aside className="w-[496px] h-[323px] bg-slate-500 rounded-md p-6">
      <div>
        <span>سبد خرید ({convertToPersianNumbers()})</span>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </aside>
  );
}

export default SideDetailCart;
