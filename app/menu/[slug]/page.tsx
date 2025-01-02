import React from 'react';

function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  return <div>
    {params.slug}
  </div>;
}

export default page;
