'use client';
import { Input } from '@/components/ui/input';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import React, { useState } from 'react';

function SearchBox({ classes }: { classes: string }) {
  const [inputValue, setInputValue] = useState<string>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get('search');

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      handleSearchQuery()
    }
  };

  const handleSearchQuery = async () => {
    const query = await new URLSearchParams({
      search: inputValue!,
    }).toString();
    router.push(`/search?${query}`);
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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => router.replace(pathname)}
          >
            <path
              d="M7.99967 15.1668C4.04634 15.1668 0.833008 11.9535 0.833008 8.00016C0.833008 4.04683 4.04634 0.833496 7.99967 0.833496C11.953 0.833496 15.1663 4.04683 15.1663 8.00016C15.1663 11.9535 11.953 15.1668 7.99967 15.1668ZM7.99967 1.8335C4.59967 1.8335 1.83301 4.60016 1.83301 8.00016C1.83301 11.4002 4.59967 14.1668 7.99967 14.1668C11.3997 14.1668 14.1663 11.4002 14.1663 8.00016C14.1663 4.60016 11.3997 1.8335 7.99967 1.8335Z"
              fill="#353535"
            />
            <path
              d="M6.11357 10.3869C5.9869 10.3869 5.86023 10.3402 5.76023 10.2402C5.5669 10.0469 5.5669 9.7269 5.76023 9.53357L9.53357 5.76023C9.7269 5.5669 10.0469 5.5669 10.2402 5.76023C10.4336 5.95357 10.4336 6.27357 10.2402 6.4669L6.4669 10.2402C6.37357 10.3402 6.24023 10.3869 6.11357 10.3869Z"
              fill="#353535"
            />
            <path
              d="M9.8869 10.3869C9.76023 10.3869 9.63357 10.3402 9.53357 10.2402L5.76023 6.4669C5.5669 6.27357 5.5669 5.95357 5.76023 5.76023C5.95357 5.5669 6.27357 5.5669 6.4669 5.76023L10.2402 9.53357C10.4336 9.7269 10.4336 10.0469 10.2402 10.2402C10.1402 10.3402 10.0136 10.3869 9.8869 10.3869Z"
              fill="#353535"
            />
          </svg>
          <span>{search}</span>
        </div>
      )}
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        onClick={()=> handleSearchQuery()}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-4 !w-4 !h-4 md:!w-6 md:!h-6"
      >
        <path
          d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z"
          className="fill-[#353535] dark:fill-gray-5"
        />
        <path
          d="M14.6676 15.1666C14.5409 15.1666 14.4143 15.12 14.3143 15.02L12.9809 13.6866C12.7876 13.4933 12.7876 13.1733 12.9809 12.98C13.1743 12.7866 13.4943 12.7866 13.6876 12.98L15.0209 14.3133C15.2143 14.5066 15.2143 14.8266 15.0209 15.02C14.9209 15.12 14.7943 15.1666 14.6676 15.1666Z"
          className="fill-[#353535] dark:fill-gray-5"
        />
      </svg>
    </div>
  );
}

export default SearchBox;
