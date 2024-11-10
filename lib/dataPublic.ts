export const miniCards = [
  { id: 4, img: '/image/miniCardFood.png', title: 'غذای اصلی' },
  { id: 3, img: '/image/miniCardAppetizer.png', title: 'پیش غذا' },
  { id: 2, img: '/image/miniCardDecer.png', title: 'دسر' },
  { id: 1, img: '/image/miniCardDrink.png', title: 'نوشیدنی' },
];
interface image {
  id: number;
  src: string;
}
interface branchType {
  id: number;
  images: image[];
  title: string;
  desc: string;
}
export const branchs: branchType[] = [
  {
    id: 1,
    images: [
      { id: 1, src: '/image/ekbatan1.jpg' },
      { id: 2, src: '/image/vanak1.jpg' },
      { id: 3, src: '/image/chaloos1.jpg' },
      { id: 4, src: '/image/aghdasie1.jpg' },
    ],
    title: 'اکباتان',
    desc: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
  },
  {
    id: 2,
    images: [
      { id: 1, src: '/image/chaloos1.jpg' },
      { id: 2, src: '/image/vanak1.jpg' },
      { id: 3, src: '/image/aghdasie1.jpg' },
      { id: 4, src: '/image/ekbatan1.jpg' },
    ],
    title: 'چالوس',
    desc: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
  },
  {
    id: 3,
    images: [
      { id: 1, src: '/image/aghdasie1.jpg' },
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
      { id: 2, src: '/image/aghdasie1.jpg' },
      { id: 3, src: '/image/chaloos1.jpg' },
      { id: 4, src: '/image/ekbatan1.jpg' },
    ],
    title: 'ونک',
    desc: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
  },
];


export const iconDetails = [
  {
    id: 1,
    alt: 'search',
    img: '/icons/search-icon.svg',
    imgActive: '/icons/search-icon-active.svg',
    isActive: false,
    quantity: 0,
    class: 'hidden sm:!flex',
  },
  {
    id: 2,
    alt: 'shopping',
    img: '/icons/shopping-icon.svg',
    imgActive: '/icons/shopping-icon-active.svg',
    isActive: false,
    quantity: 0,
    class: '',
  },
  {
    id: 3,
    alt: 'profile',
    img: '/icons/profile-icon.svg',
    imgActive: '',
    isActive: false,
    quantity: 0,
    class: '',
  },
];