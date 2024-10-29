import MiniCardMenu from '@/components/shared/card/MiniCardMenu';
import SwiperMain from '@/components/shared/swiper/swiper';
import React from 'react';

const miniCards = [
  { id: 4, img: '/image/miniCardFood.png', title: 'غذای اصلی' },
  { id: 3, img: '/image/miniCardAppetizer.png', title: 'پیش غذا' },
  { id: 2, img: '/image/miniCardDecer.png', title: 'دسر' },
  { id: 1, img: '/image/miniCardDrink.png', title: 'نوشیدنی' },
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

      <section className="w-full flex flex-col h-[339px] bg-[url(/image/bannerAboutMobile.png)] bg-cover md:bg-[url(/image/bannerAbout.png)]">
        <div>
          <span className="overline-lg text-withe">
            رستوران های نجیره ای ترخینه
          </span>
          <p className='caption-sm text-white'>
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
        </div>

        <div></div>
      </section>
    </div>
  );
}

export default Home;
