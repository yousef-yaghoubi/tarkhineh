'use client';
import { OrderProvider } from '@/app/shoping/ShopingProvider';
import RenderAddresses from '@/components/shared/RenderAddresses';
import React from 'react';

export default function RenderAddressesClient({
  getAddresses,
}: {
  getAddresses: any;
}) {
  const address = getAddresses?.addresses;
  return (
    <OrderProvider>
      <RenderAddresses
        addressesUser={address}
        sendDataToParent={() => {}}
        showAddressBranch={false}
      />
    </OrderProvider>
  );
}
