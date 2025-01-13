import ButtonBack from '@/components/shared/button/ButtonBack';
import IconMap from '@/components/shared/IconMap';
import Portal from '@/components/shared/Portal';
import SearchBox from '@/components/shared/searchBox/SearchBox';
import Image from 'next/image';
import React from 'react';

function page() {
  return (
    <Portal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white dark:bg-background-1 rounded-sm shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
          <div className="bg-gray-3 dark:bg-background-2 relative w-full h-14 md:h-[86px] flex justify-center items-center">
            <ButtonBack>
              {/* <Image
                src={'/icons/CloseIcon.png'}
                width={40}
                height={40}
                alt="close"
              /> */}
              <IconMap icon='closeIcon'/>
            </ButtonBack>

            <h3 className="caption-lg md:h7">جستجو</h3>
          </div>
          <div className="mt-10 mb-12 flex flex-col justify-center items-center w-full">
            <p className="caption-md md:body-md mb-3">
              لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
            </p>
            <SearchBox classes="w-[90%] max-w-[409px]" />
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default page;
