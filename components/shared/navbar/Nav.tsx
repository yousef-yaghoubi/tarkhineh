import Link from 'next/link';
import DropDown from './DropDown';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const navStats = [
  { id: 1, label: 'صفحه اصلی', route: '/', isSub: false, subMain: ['', ''] },
  {
    id: 2,
    label: 'شعبه',
    route: '/',
    isSub: true,
    subMain: ['ونک', 'اکباتان'],
  },
  { id: 3, label: 'منو', route: '/', isSub: true, subMain: ['غذا', 'نوشیدنی'] },
  {
    id: 4,
    label: 'اعطای نمایندگی',
    route: '/',
    isSub: false,
    subMain: ['', ''],
  },
  { id: 5, label: 'درباره ما', route: '/', isSub: false, subMain: ['', ''] },
  { id: 6, label: 'تماس با ما', route: '/', isSub: false, subMain: ['', ''] },
];
function Nav({ menuBar }: { menuBar: boolean }) {
  return (
    <div className={menuBar == false ? 'flex justify-between font-normal text-xs md:text-base w-full text-gray-7 dark:text-gray-4' : 'flex flex-col justify-start text-gray-7 dark:text-gray-4'}>
      {navStats.map((stats) =>
        stats.isSub ? (
          menuBar == true ? (
            <Accordion type="single" collapsible dir='rtl'>
              <AccordionItem value="item-1" className='border-none hover:!no-underline my-2'>
                <AccordionTrigger className=' hover:!no-underline p-0'>{stats.label}</AccordionTrigger>
                <AccordionContent dir='rtl' className='flex justify-start flex-col'>
                  {stats.subMain.map((sub)=>(
                    <span key={sub} className='w-fit mr-2 pt-2'>{sub}</span>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <DropDown stats={stats} key={stats.id} />
          )
        ) : (
          <Link
            href={stats.route}
            key={stats.id}
            className={ menuBar == false ?'flex items-center' : 'flex items-center my-2'}
          >
            {stats.label}
          </Link>
        )
      )}
    </div>
  );
}

export default Nav;
