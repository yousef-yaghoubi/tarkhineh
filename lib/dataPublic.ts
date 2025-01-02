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
    class: 'hidden sm:flex',
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

export const arraySlideMain = [
  {
    id: 1,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    img: '/image/bannerSlider1.jpg',
    imgMobile: '/image/bannerSlider1Mobile.jpg',
    alt:'تجربه غذای سالم'
  },
  {
    id: 2,
    title: 'طعم بی‌نظیر طبیعت!',
    img: '/image/bannerSlider2.jpg',
    imgMobile: '/image/bannerSlider2Mobile.jpg',
    alt:'طعم بی‌نظیر طبیعت'
  },
  {
    id: 3,
    title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!',
    img: '/image/bannerSlider3.jpg',
    imgMobile: '/image/bannerSlider3Mobile.jpg',
    alt:'لذت غذای سالم'
  },
];

export const arraySlideBranch = [
  {id:1, img: '/image/ekbatanBranch1.jpg', imgMobile: '/image/ekbatanBranch1Mobile.jpg', alt: 'ekbatan Branch'},
  {id:2, img: '/image/ekbatanBranch1.jpg', imgMobile: '/image/ekbatanBranch1Mobile.jpg', alt: 'ekbatan Branch'}
]

export const items = [
  {
    id: 1,
    title: 'پیتزا قارچ',
    price: '۱۲۵,۰۰۰ تومان',
    img: '/images/imageFood.jpg', // مسیر تصویر پیتزا
    rating: 4.5,
    orders: 32,
  },
  {
    id: 2,
    title: 'کالزونه اسفناج',
    price: '۱۷۷,۰۰۰ تومان',
    img: '/images/imageFood.jpg', // مسیر تصویر کالزونه
    rating: 4.7,
    orders: 25,
  },
  {
    id: 3,
    title: 'بادمجان شکم‌پر',
    price: '۱۳۶,۰۰۰ تومان',
    img: '/images/imageFood.jpg', // مسیر تصویر بادمجان
    rating: 4.3,
    orders: 19,
  },
  {
    id: 4,
    title: 'دلمه برگ کلم',
    price: '۱۰۹,۰۰۰ تومان',
    img: '/images/imageFood.jpg', // مسیر تصویر دلمه
    rating: 4.8,
    orders: 42,
  },
  {
    id: 5,
    title: 'دلمه برگ کلم',
    price: '۱۰۹,۰۰۰ تومان',
    img: '/images/imageFood.jpg', // مسیر تصویر دلمه
    rating: 4.8,
    orders: 42,
  },
];

