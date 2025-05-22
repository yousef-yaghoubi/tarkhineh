import { getBaseUrl } from "@/lib/getBaseUrl";
import LogOutClient from "./LogOutClient";
import { Metadata } from "next";

export const metadata: Metadata  = {
  title: 'خروج از حساب کاربری | ترخینه',
  description: 'با خروج از حساب کاربری خود در ترخینه، امنیت حساب خود را حفظ کنید. برای ورود مجدد کافیست به صفحه ورود مراجعه کنید.',
  openGraph: {
    title: 'خروج از حساب کاربری | ترخینه',
    description: 'خروج امن از حساب کاربری و حفظ امنیت اطلاعات شخصی شما در ترخینه.',
    url: `${getBaseUrl()}/user/logOut`,
    images: [
      {
        url: `/logoGreenBig.webp`,
        width: 1200,
        height: 630,
        alt: `خروج از حساب - ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/user/logOut`,
  },
}

function Page() {
  return (
    <LogOutClient/>
  );
}

export default Page;
