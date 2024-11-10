import { Input } from '@/components/ui/input';
import React from 'react';

function SearchBox({classes} : {classes: string}) {
  return (
    <div className={`h-8 md:h-10 border rounded-sm border-gray-4 md:hover:border-gray-8 md:dark:hover:border-gray-6 relative flex items-center focus-within:border-primary ${classes}`}>
      <Input
        type="text"
        className="w-11/12 h-full border-none caption-sm md:caption-md text-gray-8 dark:text-gray-5"
        placeholder="جستجو"
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='absolute left-4'
      >
        <path
          d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z"
          className='fill-[#353535] dark:fill-gray-5'
        />
        <path
          d="M14.6676 15.1666C14.5409 15.1666 14.4143 15.12 14.3143 15.02L12.9809 13.6866C12.7876 13.4933 12.7876 13.1733 12.9809 12.98C13.1743 12.7866 13.4943 12.7866 13.6876 12.98L15.0209 14.3133C15.2143 14.5066 15.2143 14.8266 15.0209 15.02C14.9209 15.12 14.7943 15.1666 14.6676 15.1666Z"
          className='fill-[#353535] dark:fill-gray-5'
        />
      </svg>
    </div>
  );
}

export default SearchBox;
