import React from 'react';
import ProgressShoping from './ProgressShoping';

function ShopingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <ProgressShoping />
      {children}
    </div>
  );
}

export default ShopingLayout;
