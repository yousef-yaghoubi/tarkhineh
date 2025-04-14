'use client';
import Image from 'next/image';
import React, { ComponentProps, MouseEventHandler, useState } from 'react';
import Modal from '../Modal';
import { branches } from '@/lib/dataPublic';
import Cookies from 'js-cookie';
import IconArrowLeft from '@icons/arrow-left.svg';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';


const Button = dynamic(()=> import('@components/shared/button/Button'))
interface Props {
  title: string;
  desc: string;
  img: string;
  hrefBTN?: string;
  className?: ComponentProps<'div'>['className'];
  showBTN?: boolean;
  id: number;
  showType: 'small' | 'normal' | 'contactPage';
  onClickCustom?: MouseEventHandler<HTMLDivElement>;
}

function CardTarkhineGardi({
  title,
  desc,
  img,
  hrefBTN,
  className,
  showBTN,
  id,
  showType,
  onClickCustom,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (showType == 'small') {
    return (
      <div
        className={`w-11/12 min-w-72 !h-20 md:min-w-[170px] md:!w-44 md:!h-[260px] rounded-sm border-gray-4 dark:border-[rgb(64,65,66)]  ${
          showBTN !== undefined ? 'group' : ''
        } selection:border-primary transition-all overflow-hidden border flex justify-between mt-3 hover:shadow-cards duration-300 ${showBTN !== undefined ? ' sm:w-72 sm:h-[344px] sm:flex-col' : ' md:w-72 md:h-[344px] md:flex-col'}`}
        onClick={onClickCustom}
      >
        <div
          className={`relative w-[114px] h-full ${
            showBTN !== undefined
              ? 'sm:w-full sm:h-[230px] sm:group-hover:h-[190px] '
              : 'md:w-full md:h-[230px] md:group-hover:h-[190px] '
          } duration-300 transition-all`}
        >
          <Image src={img} alt={title} fill className="w-full h-full" />
          <Image
            src="/image/zoomPicture.png"
            alt="zoom"
            width={16}
            height={16}
            className={`absolute bottom-2 right-2 ${
              showBTN !== undefined ? 'sm:hidden' : 'hidden'
            }`}
            onClick={showBTN !== undefined ? openModal : undefined}
          />

          <div
            className="w-full h-full z-30 !bg-[rgba(0,0,0,0.6)] absolute top-0 flex opacity-0  duration-500 transition-all ease-in-out  justify-center items-center sm:group-hover:opacity-100 cursor-pointer"
            onClick={showBTN !== undefined ? openModal : undefined}
          >
            <div className="relative w-[52px] h-[52px] flex justify-center items-center">
              <Image
                src="/icons/backIcon1.png"
                alt="back1"
                width={58}
                height={58}
                className="absolute"
              />
              <Image
                src="/icons/backIcon2.png"
                alt="back1"
                width={42}
                height={42}
                className="absolute"
              />
              <Image
                src="/icons/gallery.png"
                alt="gallery"
                width={32}
                height={32}
                className="absolute"
              />
            </div>
          </div>
        </div>

        <div className="w-[calc(100%_-_114px)] h-[110px] group-hover:h-[154px] flex items-center flex-col px-2 py-2 sm:w-full duration-300 transition-all">
          <span
            className={`caption-md ${
              showBTN !== undefined ? 'sm:button-lg' : 'sm:caption-md'
            }`}
          >
            شعبه {title}
          </span>
          <p
            className={`caption-sm text-gray-7 px-1 text-center mt-2 ${
              showBTN !== undefined ? ' sm:caption-lg' : 'sm:caption-sm'
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    );
  } else if (showType == 'normal') {
    return (
      <div
        className={`w-full ${className}  h-[85px] rounded-sm border-gray-4 dark:border-[rgb(64,65,66)]  ${
          showBTN !== undefined ? 'group' : ''
        } selection:border-primary transition-all overflow-hidden border flex justify-between mt-3 hover:shadow-cards duration-300 ${
          showBTN !== undefined
            ? ' sm:w-72 sm:h-[344px] sm:flex-col'
            : ' md:w-72 md:h-[344px] md:flex-col'
        }`}
      >
        <div
          className={`relative w-[114px] h-full ${
            showBTN !== undefined
              ? 'sm:w-full sm:h-[230px] sm:group-hover:h-[190px] '
              : 'md:w-full md:h-[230px] md:group-hover:h-[190px] '
          } duration-300 transition-all`}
        >
          <Image src={img} alt={title} fill className="w-full h-full" />
          <Image
            src="/image/zoomPicture.png"
            alt="zoom"
            width={16}
            height={16}
            className={`absolute bottom-2 right-2 ${
              showBTN !== undefined ? 'sm:hidden' : 'hidden'
            }`}
            onClick={showBTN !== undefined ? openModal : undefined}
          />

          <div
            className="w-full h-full z-30 !bg-[rgba(0,0,0,0.6)] absolute top-0 flex opacity-0  duration-500 transition-all ease-in-out  justify-center items-center sm:group-hover:opacity-100 cursor-pointer"
            onClick={showBTN !== undefined ? openModal : undefined}
          >
            <div className="relative w-[52px] h-[52px] flex justify-center items-center">
              <Image
                src="/icons/backIcon1.png"
                alt="back1"
                width={58}
                height={58}
                className="absolute"
              />
              <Image
                src="/icons/backIcon2.png"
                alt="back1"
                width={42}
                height={42}
                className="absolute"
              />
              <Image
                src="/icons/gallery.png"
                alt="gallery"
                width={32}
                height={32}
                className="absolute"
              />
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={branches.find((branch) => branch.id == id)}
        ></Modal>

        <div className="w-[calc(100%_-_114px)] h-[110px] group-hover:h-[154px] flex items-center flex-col px-2 py-2 sm:w-full duration-300 transition-all">
          <span
            className={`caption-md ${
              showBTN !== undefined ? 'sm:button-lg' : 'sm:caption-md'
            }`}
          >
            شعبه {title}
          </span>
          <p
            className={`caption-sm text-gray-7 px-1 text-center mt-2 ${
              showBTN !== undefined ? ' sm:caption-lg' : 'sm:caption-sm'
            }`}
          >
            {desc}
          </p>
          {showBTN !== undefined && (
            <Button
              btn="stroke"
              className="!w-32 !h-8 md:caption-md invisible opacity-0 group-hover:visible sm:group-hover:opacity-100 mt-2"
              theme="Primary"
              link={hrefBTN}
              onClickCustom={() => Cookies.set('branches', `${title}`)}
            >
              <span className="flex items-center">
                صفحه شعبه
                <IconArrowLeft className="w-4 h-4 md:w-6 md:h-6 fill-primary" />
              </span>
            </Button>
          )}
        </div>
      </div>
    );
  } else if (showType == 'contactPage') {
    return (
      <div className="group h-fit pb-2 min-h-[252px] md:h-[280px] w-10/12 rounded border border-gray-4 flex flex-col md:flex-row overflow-hidden relative">
        <div className="relative w-full h-[112px] md:w-1/2 md:h-full">
          <Image alt={title} src={img} fill />
          <div
            className="w-full h-full z-30 !bg-[rgba(0,0,0,0.6)] absolute top-0 flex opacity-0  duration-500 transition-all ease-in-out  justify-center items-center sm:group-hover:opacity-100 cursor-pointer"
            onClick={openModal}
          >
            <div className="relative w-[52px] h-[52px] flex justify-center items-center">
              <Image
                src="/icons/backIcon1.png"
                alt="back1"
                width={58}
                height={58}
                className="absolute"
              />
              <Image
                src="/icons/backIcon2.png"
                alt="back1"
                width={42}
                height={42}
                className="absolute"
              />
              <Image
                src="/icons/gallery.png"
                alt="gallery"
                width={32}
                height={32}
                className="absolute"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-[calc(100%_-_112px)] md:w-1/2 md:h-full text-center">
          <div className="mt-1 md:mt-6 flex flex-col items-center">
            <h5 className="text-gray-8 caption-md md:h6 lg:h7">شعبه {title}</h5>
            <span className="mt-1 md:mt-6 text-gray-7 caption-sm md:body-sm lg:body-md xl:body-lg">
              آدرس: {desc}
            </span>
            <span
              className="mt-1 text-gray-7 caption-sm md:body-sm lg:body-md xl:body-lg"
              dir="rtl"
            >
              شماره تماس:{' '}
              <span dir="ltr">
                {convertToPersianNumbers('021-54891250-51')}
              </span>
            </span>
            <span className="mt-1 text-gray-7 caption-sm md:body-sm lg:body-md xl:body-lg">
              ساعت کاری: همه‌روزه از ساعت 12 تا 23 بجز روزهای تعطیل
            </span>
          </div>

          <div className="caption-sm md:button-lg flex md:invisible md:opacity-0 md:-bottom-6 md:group-hover:visible md:group-hover:bottom-4 transition-all duration-500 md:group-hover:opacity-100 w-full mt-3 md:mt-[22px] justify-evenly md:absolute md:w-1/2">
            <Button
              btn="stroke"
              theme="Primary"
              className="w-2/5 h-6 md:h-10"
              link={`/branches/${hrefBTN}`}
              onClickCustom={() => Cookies.set('branches', `${title}`)}
            >
              صفحه شعبه
            </Button>
            <Button
              btn="fill"
              theme="Primary"
              className="w-2/5 h-6 md:h-10"
              onClickCustom={() => toast.warning('این عمل دردسترس نیست.')}
            >
              دیدن در نقشه
            </Button>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={branches.find((branch) => branch.id == id)}
        ></Modal>
      </div>
    );
  }
}

export default CardTarkhineGardi;
