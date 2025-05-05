'use client';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import IconsSearch from '@icons/search-icon.svg'
import IconClose from '@icons/close-circle.svg'
function SearchBox({
  classes,
  forFavorite,
}: {
  classes: string;
  forFavorite?: boolean;
}) {
  const [inputValue, setInputValue] = useState<string>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const categorie = searchParams.get('categorie') || 'all';
  const params = new URLSearchParams(searchParams);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchQuery();
    }
  };

  const handleSearchQuery = async () => {
    const query = await new URLSearchParams({
      search: inputValue!,
      categorie: categorie!,
    }).toString();

    if (forFavorite) {
      router.push(`?${query}`);
    } else {
      router.push(`/search?${query}`);
    }
  };

  return (
    <div
      className={`h-8 md:h-10 border rounded-sm ${search == undefined ? 'border-gray-4 dark:border-zinc-600 md:hover:border-gray-8 md:dark:hover:border-gray-6 focus-within:border-primary' : 'border-primary'} relative flex items-center ${classes}`}
    >
      {search == undefined ? (
        <Input
          type="text"
          className="w-11/12 h-full border-none caption-sm md:caption-md text-gray-8 dark:text-gray-5"
          placeholder="جستجو"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className="w-10/12 mr-4 h-full flex items-center border-none caption-sm md:caption-md text-gray-8 dark:text-gray-5">
          <i className='w-4 h-4 ml-2 cursor-pointer' onClick={() => {
            params.delete('search');
            router.replace(`?${params.toString()}`);
          }}>
            <IconClose width={16} height={16} className="dark:fill-[rgb(171,171,171)] fill-[#353535]" />
          </i>
          <span>{search}</span>
        </div>
      )}

      <i className='absolute left-4 w-4 h-4 md:w-6 md:h-6 cursor-pointer' onClick={() => handleSearchQuery()}>
        <IconsSearch className="w-4 h-4 md:w-6 md:h-6 fill-[#353535] dark:fill-gray-5" />
      </i>
    </div>
  );
}

export default SearchBox;
