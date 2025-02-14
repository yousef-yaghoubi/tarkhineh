import React from 'react';
import SectionPage from './SectionPage';
import { GetAddressUser } from '@/app/actions/address';

async function page() {
  const addressUser = await GetAddressUser();
  console.log(addressUser?.addresses)
  return (
    <>
      <SectionPage userAddress={addressUser?.addresses}/>
    </>
  );
}

export default page;
