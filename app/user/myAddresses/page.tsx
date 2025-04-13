import { headers } from 'next/headers';
import React from 'react';
import RenderAddressesClient from './RenderAddressesClient';

async function page() {
  const {addresses: getAddresses} = await fetch(
    `${process.env.NEXTAUTH_URL}/api/address/addressesOfUser`,
    {
      headers: headers(),
    }
  ).then((res) => res).then((result) => result.json());

  return (
    <>
      <RenderAddressesClient address={getAddresses} />
    </>
  );
}

export default page;
