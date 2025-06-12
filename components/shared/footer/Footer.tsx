import Link from 'next/link';
import FormFooter from './FormFooter';
import IconInsta from '/public/icons/instaIcon.svg';
import IconTwitter from '/public/icons/twitterIcon.svg';
import IconTelegram from '/public/icons/telegramIcon.svg';

const liBranchesForFooter = [
  { id: 1, title: 'اکباتان', url: '/branches/ekbatan' },
  { id: 2, title: 'چالوس', url: '/branches/chaloos' },
  { id: 3, title: 'اقدسیه', url: '/branches/aghdasie' },
  { id: 4, title: 'ونک', url: '/branches/vanak' },
];

const liLinksForFooter = [
  { id: 1, title: 'پرسش های متداول', url: '/FAQ' },
  { id: 2, title: 'قوانین ترخینه', url: '/ruls' },
  { id: 3, title: 'حریم خصوصی', url: '/privacy' },
];

function Footer() {
  return (
    <footer className="flex flex-col">
      <div className='bg-[url(/image/footerMobile.webp)] flex flex-row justify-around h-[152px] sm:bg-[url(/image/footerDesktop.webp)] md:h-[319px] bg-cover text-white p-3'>
        <div className="flex flex-col mt-4 md:mt-8">
          <span className="caption-md md:h5">دسترسی آسان</span>
          <div className="mr-2 md:mr-3 flex flex-col caption-sm md:caption-lg text-gray-3 justify-between mt-2 md:mt-4 w-[84px] md:w-[172px] h-[84px] md:h-[148px]">
            {liLinksForFooter.map((link) => (
              <Link href={link.url} key={link.id} prefetch>
                {link.title}
              </Link>
            ))}

            <div className="flex flex-row items-center w-[72px] md:w-[172px] gap-2 md:gap-4">
              <Link href={'/'}>
                <IconInsta className='w-4 h-4 md:w-6 md:h-6' />
              </Link>
              <Link href={'/'}>
                <IconTwitter className='w-4 h-4 md:w-6 md:h-6' />
              </Link>
              <Link href={'/'}>
                <IconTelegram className='w-4 h-4 md:w-6 md:h-6' />
              </Link>
            </div>

          </div>
        </div>

        <div className="flex flex-col mt-4 md:mt-8">
          <span className="caption-md md:h5">شعبه های ترخینه</span>
          <div className="mr-3 flex flex-col caption-sm md:caption-lg text-gray-3 justify-between mt-4 w-[90px] h-[114px] md:w-[172px] md:h-[148px]">
            {liBranchesForFooter.map((li) => (
              <Link key={li.id} href={li.url}>شعبه {li.title}</Link>
            ))}
          </div>
        </div>

        <div className="hidden flex-col mt-8 md:flex w-[600px] ">
          <span className="h5">پیام به ترخینه</span>
          <FormFooter />
        </div>
      </div>
      {/* <div className='w-full bg-primary text-white flex justify-center items-center py-2 caption-md md:body-md'>
        ساخته شده با ❤️ توسط <Link href={'https://github.com/yousef-yaghoubi'} className='font-semibold mr-1'>یوسف یعقوبی</Link>
      </div>*/}
    </footer>
  );
}

export default Footer;
