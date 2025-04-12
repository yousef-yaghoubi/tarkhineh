'use client';
import { OrderProvider } from '@/app/shoping/ShopingProvider';
import RenderAddresses from '@/components/shared/RenderAddresses';
import React from 'react';

export default function RenderAddressesClient({
  address,
}: {
  address: {
    id: number;
    titleAddress: string;
    meReciver: boolean;
    phone: string;
    nameReciver: string;
    address: string;
    userId: number;
  }[];
}) {
  return (
    <OrderProvider>
      <RenderAddresses
        addressesUser={address}
        showAddressBranch={false}
      />
    </OrderProvider>
  );
}
