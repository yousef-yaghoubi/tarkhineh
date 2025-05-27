import { Metadata } from 'next';
import { getBaseUrl } from '@/lib/getBaseUrl';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'پروفایل من | حساب کاربری در ترخینه',
  description:
    'مشاهده و مدیریت اطلاعات حساب کاربری خود در ترخینه. به‌روزرسانی مشخصات، مشاهده سفارش‌ها و مدیریت آدرس‌ها.',
  openGraph: {
    title: 'پروفایل من | حساب کاربری در ترخینه',
    description:
      'وارد حساب کاربری خود شوید و به راحتی اطلاعاتتان را مدیریت کنید.',
    url: `${getBaseUrl()}/user`,
    images: [
      {
        url: `/logoGreenBig.webp`,
        width: 1200,
        height: 630,
        alt: `پروفایل کاربری - ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/user`,
  },
};

function Page() {
  return <ClientPage />;
}

export default Page;
