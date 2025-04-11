import React from 'react';
import HeaderMenu from './HeaderMenu';
import InfiniteScroll from './InfiniteScroll';

async function page() {  
  return (
    <div>
      <HeaderMenu />
      <InfiniteScroll/>
    </div>
  );
}

export default page;
