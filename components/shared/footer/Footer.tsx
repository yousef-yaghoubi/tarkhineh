import Link from 'next/link';
import FormFooter from './FormFooter';
import IconFooter from './IconFooter';

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
    <footer className="bg-[url(/image/footerMobile.png)] flex flex-row justify-around h-[152px] sm:bg-[url(/image/footerDesktop.png)] md:h-[319px] bg-cover text-white p-3">
      <section className="flex flex-col mt-4 md:mt-8">
        <span className="caption-md md:h5">دسترسی آسان</span>
        <div className="mr-2 md:mr-3 flex flex-col caption-sm md:caption-lg text-gray-3 justify-between mt-2 md:mt-4 w-[84px] md:w-[172px] h-[84px] md:h-[148px]">
          {liLinksForFooter.map((link) => (
            <Link href={link.url} key={link.id} prefetch>
              {link.title}
            </Link>
          ))}

          <div className="flex flex-row items-center w-[72px] md:w-[172px]">
            <IconFooter img="/icons/XIcon.png" alt="X" route="/" />
            <IconFooter img="/icons/InstaIcon.png" alt="insta" route="/" />
            <IconFooter
              img="/icons/TelegramIcon.png"
              alt="telegram"
              route="/"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-4 md:mt-8">
        <span className="caption-md md:h5">شعبه های ترخینه</span>
        <div className="mr-3 flex flex-col caption-sm md:caption-lg text-gray-3 justify-between mt-4 w-[90px] h-[114px] md:w-[172px] md:h-[148px]">
          {liBranchesForFooter.map((li) => (
            <Link key={li.id} href={li.url}>شعبه {li.title}</Link>
          ))}
        </div>
      </section>

      <section className="hidden flex-col mt-8 md:flex w-[600px] ">
        <span className="h5">پیام به ترخینه</span>
        <FormFooter />
      </section>
    </footer>
  );
}

export default Footer;
