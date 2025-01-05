import React from 'react';
import Tab from './Tab';
import Badge from './Badge';
import SearchBox from '@/components/shared/searchBox/SearchBox';
import { NavBadgeMenu } from '@/lib/dataPublic';

function HeaderMenu() {
  return (
    <div>
      <Tab />
      <div className="flex flex-col md:flex-row md:justify-around items-center">
        <div className="flex gap-2">
          {NavBadgeMenu.map((badge) => (
            <Badge title={badge.title} url={badge.url} key={badge.id} />
          ))}
        </div>
        <SearchBox classes="w-[90%] max-w-[496px] md:rounded-md" />
      </div>
    </div>
  );
}

export default HeaderMenu;
