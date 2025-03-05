import Badge from '@/components/shared/badge/Badge';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import { NavBadgeOrderTracking } from '@/lib/dataPublic';
import React from 'react';

function page() {
  return (
    <BoxOfMain forUserPage title="سفارشات">
      <div className='flex w-fit gap-2'>
        {NavBadgeOrderTracking.map((badge) => (
          <Badge
            title={badge.title}
            url={badge.url}
            key={badge.id}
            forOrderTracking
          />
        ))}
      </div>
    </BoxOfMain>
  );
}

export default page;
