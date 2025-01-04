import React from 'react';

interface PropsSearchParams {
  searchParams: {
    q?: string;
  };
}
async function page({ searchParams }: PropsSearchParams) {
  const { q } = searchParams;

  
  return <div>{q || 'all'}</div>;
}

export default page;
