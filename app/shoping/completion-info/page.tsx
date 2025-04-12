import React from 'react';
import SectionPage from './SectionPage';
import { headers } from 'next/headers';

async function page() {

  const addressUser = await fetch(`${process.env.NEXTAUTH_URL}/api/address/addressesOfUser`, {
   cache: 'no-store',
    headers: headers()
  }).then(res => res).then(result => result.json());


  return (
    <>
      <SectionPage userAddress={addressUser.addresses}/>
    </>
  );
}

export default page;
