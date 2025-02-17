import React from 'react';
import ProgressShoping from './ProgressShoping';
import { OrderProvider } from './ShopingProvider';

function ShopingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <OrderProvider>
        <ProgressShoping />
        {children}
      </OrderProvider>
    </div>
  );
}

export default ShopingLayout;
