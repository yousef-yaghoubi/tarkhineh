import { getBaseUrl } from '@/lib/getBaseUrl';
import RenderCardFoods from './RenderCardFoods';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'سبد خرید | بررسی و نهایی کردن سفارش در ترخینه',
  description: 'سبد خرید خود را بررسی کنید و برای ثبت سفارش نهایی آماده شوید. تجربه‌ای آسان و سریع با غذاهای خوشمزه ترخینه!',
  openGraph: {
    title: 'سبد خرید | بررسی و نهایی کردن سفارش در ترخینه',
    description: 'غذاهای انتخابی شما در سبد خرید آماده هستند. یک قدم تا سفارش لذت‌بخش در رستوران‌های ترخینه فاصله دارید!',
    url: `${getBaseUrl()}/shoping/shopingCart`,
    images: [
      {
        url: `/logoGreenBig.png`, // پیشنهاد: تصویر سبد خرید پر از غذا یا فاکتور سفارش
        width: 1200,
        height: 630,
        alt: 'سبد خرید - رستوران‌های ترخینه',
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/shoping/shopingCart`,
  },
}

function page() {
  return (
    <>
      <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1300px] mb-12">
        <RenderCardFoods/>
      </section>
    </>
  );
}

export default page;
