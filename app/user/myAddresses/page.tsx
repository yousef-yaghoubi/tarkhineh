import { headers } from 'next/headers';
import React from 'react';
import RenderAddressesClient from './RenderAddressesClient';

async function page() {
  const {addresses: getAddresses} = await fetch(
    'http://localhost:3000/api/address/addressesOfUser',
    {
      headers: headers(),
    }
  ).then((res) => res).then((result) => result.json());

  // console.log(getAddresses)
  return (
    <>
      <RenderAddressesClient address={getAddresses} />
    </>
  );
}

export default page;
