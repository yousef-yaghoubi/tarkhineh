import React from 'react';
import SectionPage from './SectionPage';
import { headers } from 'next/headers';

async function page() {

  const addressUser = await fetch('http://localhost:3000/api/address/addressesOfUser', {
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
