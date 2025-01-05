import React from 'react';
import Tab from './Tab';
import Badge from './Badge';
import SearchBox from '@/components/shared/searchBox/SearchBox';
const NavBadgeMenu = [
  { id: 1, title: 'غذاهای ایرانی', url: 'irani' },
  { id: 2, title: 'غذاهای غیر ایرانی', url: 'non-Iranian' },
  { id: 3, title: 'پیتزاها', url: 'pizzas' },
  { id: 4, title: 'ساندویچ ها', url: 'سandwiches' },
  { id: 5, title: 'پرفروش ترین', url: 'bestSeller' },
  { id: 6, title: 'اقتصادی ترین', url: 'mostEconomical' },
  { id: 7, title: 'محبوب ترین', url: 'mostPopular' },
];
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
