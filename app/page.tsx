import Button from '@/components/shared/button/Button';
import CardTarkhineGardi from '@/components/shared/card/CardTarkhineGardi';
import MiniCardMenu from '@/components/shared/card/MiniCardMenu';
import SwiperMain from '@/components/shared/swiper/swiper';
import Image from 'next/image';
import React from 'react';

const miniCards = [
  { id: 4, img: '/image/miniCardFood.png', title: 'غذای اصلی' },
  { id: 3, img: '/image/miniCardAppetizer.png', title: 'پیش غذا' },
  { id: 2, img: '/image/miniCardDecer.png', title: 'دسر' },
  { id: 1, img: '/image/miniCardDrink.png', title: 'نوشیدنی' },
];

interface image {
  id: number,
  src: string
}
interface branchType {
  id: number,
  images: image[],
  title: string,
  desc: string
}
const branchs: branchType[] = [
  {
    id: 1,
    images: [
      { id: 1, src: '/image/ekbatan1.jpg' },
      { id: 2, src: '/image/vanak1.jpg' },
      { id: 3, src: '/image/chaloos1.jpg' },
      { id: 4, src: '/image/aghdasie1.jpg'},
    ],
    title: 'اکباتان',
    desc: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
  },
  {
    id: 2,
    images: [
      { id: 1, src: '/image/chaloos1.jpg' },
      { id: 2, src: '/image/vanak1.jpg' },
      { id: 3, src: '/image/aghdasie1.jpg'},
      { id: 4, src: '/image/ekbatan1.jpg' },
    ],
    title: 'چالوس',
    desc: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
  },
  {
    id: 3,
    images: [
      { id: 1, src: '/image/aghdasie1.jpg'},
      { id: 2, src: '/image/chaloos1.jpg' },
      { id: 3, src: '/image/vanak1.jpg' },
      { id: 4, src: '/image/ekbatan1.jpg' },
    ],
    title: 'اقدسیه',
    desc: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
  },
  {
    id: 4,
    images: [
      { id: 1, src: '/image/vanak1.jpg' },
      { id: 2, src: '/image/aghdasie1.jpg'},
      { id: 3, src: '/image/chaloos1.jpg' },
      { id: 4, src: '/image/ekbatan1.jpg' },
    ],
    title: 'ونک',
    desc: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
  },
];
function Home() {

  return (
    <div>
      <SwiperMain />
      <section className="w-full max-w-[1222px] inset-0 m-auto flex items-center flex-col justify-around mt-8 !mb-16">
        <h4 className="h4">منوی رستوران</h4>
        <div className="w-full grid grid-cols-2 justify-items-center sm:grid-cols-4 lg:mt-8">
          {miniCards.map((card) => (
            <MiniCardMenu img={card.img} title={card.title} key={card.id} />
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row justify-between md:justify-around h-[339px] md:h-[390px] bg-[url(/image/bannerAboutMobile.png)] bg-cover md:bg-[url(/image/bannerAbout.png)] py-4 px-5 md:py-12">
        <div className="md:w-3/5 md:max-w-[600px] md:h-[294px]">
          <span className="overline-lg md:h4 text-withe md:mb-6">
            رستوران های نجیره ای ترخینه
          </span>
          <p className="caption-sm text-white text-justify mt-2 md:mt-6 sm:caption-md md:caption-lg lg:body-xl">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="w-full justify-end flex md:mt-10 lg:mt-0">
            <Button
              btn="stroke"
              theme="White"
              title="اطلاعات بیشتر"
              iconL="/icons/arrow-left-white.svg"
              btnSize="h-[32px] md:h-[40px] w-[152px] md:w-[184px] mt-8 md:mt-4"
              iconSize={16}
              iconW="w-[16px]"
              iconH="h-[16px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 text-white gap-y-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/profile-white.svg"
              width={24}
              height={24}
              alt="profile"
              className="w-6 h-6 md:w-12 md:h-12"
            />
            <span className="caption-md md:caption-lg lg:body-xl mt-1">
              پرسنلی مجرب و حرفه‌ای
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/diagram.png"
              width={24}
              height={24}
              alt="profile"
              className="w-6 h-6 md:w-12 md:h-12"
            />
            <span className="caption-md md:caption-lg lg:body-xl mt-1">
              کیفیت بالای غذا ها
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/home-wifi.png"
              width={24}
              height={24}
              alt="profile"
              className="w-6 h-6 md:w-12 md:h-12"
            />
            <span className="caption-md md:caption-lg lg:body-xl mt-1">
              محیطی دلنشین و آرام
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/menu-board.png"
              width={24}
              height={24}
              alt="profile"
              className="w-6 h-6 md:w-12 md:h-12"
            />
            <span className="caption-md md:caption-lg lg:body-xl mt-1">
              منوی متنوع
            </span>
          </div>
        </div>
      </section>

      <section className="w-full flex py-6 px-5 flex-col items-center">
        <h6 className="h6 sm:h4 sm:mt-12">ترخینه گردی</h6>
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {branchs.map((branch) => (
            <CardTarkhineGardi title={branch.title} desc={branch.desc} hrefBTN='' img={branch.images[0].src} key={branch.id}/>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
