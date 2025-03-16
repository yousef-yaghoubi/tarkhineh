import { headers } from 'next/headers';
import React from 'react';
import RenderAddressesClient from './RenderAddressesClient';

async function page() {

  const getAddresses = await fetch(
    'http://localhost:3000/api/address/addressesOfUser',
    {
      cache: 'no-store',
      headers: headers(),
    }
  ).then((res) => res).then((result) => result.json());

  return (
    <>
      <RenderAddressesClient getAddresses={getAddresses} />
    </>
  );
}

export default page;
