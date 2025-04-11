import { BadgeType, ProfileRoutes } from '@/types';

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
  nickName: string;
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
    nickName: 'ekbatan',
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
    nickName: 'chaloos',
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
    nickName: 'aghdasie',
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
    nickName: 'vanak',
    desc: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
  },
];

export const iconDetails = [
  {
    id: 1,
    alt: 'search',
    icon: 'IconSearch',
    isActive: false,
    class: 'hidden sm:flex',
  },
  {
    id: 2,
    alt: 'shoping',
    icon: 'IconShopingCard',
    isActive: false,
    class: '',
  },
  {
    id: 3,
    alt: 'user',
    icon: 'IconProfile',
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
    alt: 'تجربه غذای سالم',
  },
  {
    id: 2,
    title: 'طعم بی‌نظیر طبیعت!',
    img: '/image/bannerSlider2.jpg',
    imgMobile: '/image/bannerSlider2Mobile.jpg',
    alt: 'طعم بی‌نظیر طبیعت',
  },
  {
    id: 3,
    title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!',
    img: '/image/bannerSlider3.jpg',
    imgMobile: '/image/bannerSlider3Mobile.jpg',
    alt: 'لذت غذای سالم',
  },
];

export const arraySlideBranch = [
  {
    id: 1,
    img: '/image/ekbatanBranch1.jpg',
    imgMobile: '/image/ekbatanBranch1Mobile.jpg',
    alt: 'ekbatan Branch',
  },
  {
    id: 2,
    img: '/image/ekbatanBranch1.jpg',
    imgMobile: '/image/ekbatanBranch1Mobile.jpg',
    alt: 'ekbatan Branch',
  },
];

export const navStats = [
  {
    id: 1,
    label: 'صفحه اصلی',
    route: '/',
    icon: 'IconNavMain',
  },
  {
    id: 2,
    label: 'شعبه',
    route: '/branchs',
    subMain: [
      // { id: 1, label: 'شعبه', route: '/branchs' },
      { id: 2, label: 'ونک', routeQuery: '/branchs/vanak' },
      { id: 3, label: 'اکباتان', routeQuery: '/branchs/ekbatan' },
      { id: 4, label: 'چالوس', routeQuery: '/branchs/chaloos' },
      { id: 5, label: 'اقدسیه', routeQuery: '/branchs/aghdasie' },
    ],
    icon: 'IconNavBranch',
  },
  {
    id: 3,
    label: 'منو',
    route: '/menu',
    subMain: [
      { id: 0, label: 'منو', routeQuery: 'all' },
      { id: 1, label: 'غذا اصلی', routeQuery: 'food' },
      { id: 2, label: 'پیش غذا', routeQuery: 'appetizer' },
      { id: 3, label: 'دسر', routeQuery: 'dessert' },
      { id: 4, label: 'نوشیدنی', routeQuery: 'drink' },
    ],
    icon: 'IconNavMenu',
  },
  {
    id: 4,
    label: 'اعطای نمایندگی',
    route: '/represent',
    icon: 'IconNavRepresent',
  },
  {
    id: 5,
    label: 'درباره ما',
    route: '/about',
    icon: 'IconNavAbout',
  },
  {
    id: 6,
    label: 'تماس با ما',
    route: '/contact',
    icon: 'IconCallCalling',
  },
];

export const NavBadgeMenu: BadgeType[] = [
  { id: 1, title: 'بدون ترتیب', url: 'all' },
  { id: 2, title: 'ایرانی ها', url: 'irani' },
  { id: 3, title: 'غیر ایرانی ها', url: 'non-Iranian' },
  { id: 4, title: 'پیتزاها', url: 'pizzas' },
  { id: 5, title: 'ساندویچ ها', url: 'sandwiches' },
  { id: 6, title: 'پرفروش ترین', url: 'bestSeller' },
  { id: 7, title: 'اقتصادی ترین', url: 'mostEconomical' },
  { id: 8, title: 'محبوب ترین', url: 'mostPopular' },
];

export const NavBadgeOrderTracking: BadgeType[] = [
  { id: 1, title: 'همه', url: 'all' },
  { id: 2, title: 'جاری', url: 'current' },
  { id: 3, title: 'تحویل شده', url: 'delivered' },
  { id: 4, title: 'لغو شده', url: 'canceled' },
];

export const ProfileRoute: ProfileRoutes[] = [
  { id: 1, title: 'پروفایل', icon: 'IconProfile', url: '/user/profile' },
  {
    id: 2,
    title: 'پیگیری سفارش',
    icon: 'IconOrderTracking',
    url: '/user/order-tracking',
  },
  { id: 3, title: 'علاقه مندی ها', icon: 'IconHeart', url: '/user/favorites' },
  {
    id: 4,
    title: 'آدرس های من',
    icon: 'IconLocation',
    url: '/user/myAddresses',
  },
  { id: 5, title: 'خروج', icon: 'IconLogout', url: '/user/logOut' },
];


export const questionsPrivacy = [
  {
    id: 1,
    question: 'حریم خصوصی',
    answer:
      'ترخینه متعهد به رعایت حریم خصوصی شما و حفظ آن است. اطلاعات شخصی شما برای بهبود کیفیت خدمات، پردازش سفارش، ارتباط با شما و ارسال اطلاع‌رسانی‌های مرتبط استفاده می‌شود. این اطلاعات فقط با رضایت شما یا طبق قوانین به اشتراک گذاشته می‌شود.',
  },
  {
    id: 2,
    question: 'چه اطلاعاتی را گردآوری می‌کنیم؟',
    answer:
      'ما اطلاعاتی مانند نام، شماره تماس، نشانی، و اطلاعات سفارش شما را گردآوری می‌کنیم. همچنین ممکن است اطلاعاتی از دستگاه شما و بازدیدتان از سایت دریافت شود.',
  },
  {
    id: 3,
    question: 'چگونه اطلاعات شما را گردآوری می‌کنیم؟',
    answer:
      'اطلاعات از طریق فرم‌های ثبت‌نام و سفارش در وب‌سایت و همچنین هنگام ثبت‌نام کاربر گردآوری می‌شود.',
  },
  {
    id: 4,
    question: 'چرا به شماره تلفن شما نیاز داریم؟',
    answer:
      'برای فعال‌سازی حساب کاربری شما، ارسال کد تایید، پیگیری سفارشات و اطلاع‌رسانی درباره خدمات، به شماره تلفن شما نیاز داریم.',
  },
  {
    id: 5,
    question: 'فعالیت‌های مرورگر شما در هنگام بازدید از وب‌سایت ترخینه',
    answer:
      'ممکن است اطلاعاتی از مرورگر شما (مانند نوع مرورگر، آدرس IP، زمان بازدید و صفحات مشاهده‌شده) جمع‌آوری شود تا تجربه کاربری بهتری فراهم شود.',
  },
  {
    id: 6,
    question: 'استفاده از کوکی‌ها و دستگاه‌های ذخیره‌سازی دیگر',
    answer:
      'ما از کوکی‌ها برای بهبود عملکرد وب‌سایت و ذخیره تنظیمات کاربری شما استفاده می‌کنیم. می‌توانید تنظیمات مرورگر خود را برای غیرفعال کردن کوکی‌ها تغییر دهید، اما این کار ممکن است بر عملکرد سایت تأثیر بگذارد.',
  },
  {
    id: 7,
    question: 'اطلاعات بیشتر',
    answer:
      'برای اطلاعات بیشتر در مورد حفظ حریم خصوصی و فناوری‌های مرتبط با داده‌های شما، می‌توانید با ما تماس بگیرید. هرگونه تغییر در سیاست‌های حفظ حریم خصوصی از طریق وب‌سایت اطلاع‌رسانی خواهد شد.',
  },
];
export const questionsRuls = [
  {
    id: 1,
    question: 'حداقل سفارش',
    answer:
      'حداقل سفارش در رستوران‌های طرف قرارداد، مبلغ ۵۰٬۰۰۰ تومان است. برای ثبت، پردازش و ارسال سفارشات، باید حداقلی این مبلغ سفارش داده شود در غیر این‌صورت سفارش ثبت نخواهد شد.',
  },
  {
    id: 2,
    question: 'فاصله تحویل',
    answer:
      'تحویل و ارسال سفارشات به نقاط دور محدودیت دارد و حداکثر فاصله از رستوران‌های ذخیره‌سازی برای ارسال کالا، ۶ کیلومتر است. لطفا قبل از ثبت سفارش، نزدیک‌ترین شعبه به محل ارسال را انتخاب کنید و در رعایت کردن حداکثر فاصله برای ارسال سفارشات، اطمینان حاصل فرمایید.',
  },
  {
    id: 3,
    question: 'زمان تحویل',
    answer:
      'جدول زمان تخمینی تحویل در زمان ثبت سفارش به اطلاع شما خواهد رسید. این ممکن است تحت تأثیر عوامل زیادی مانند ترافیک، آب و هوا، ازدحام رستوران و غیره باشد. بنابراین در صورت تأخیر لطفا صبور باشید.',
  },
  {
    id: 4,
    question: 'گزینه‌های پرداخت',
    answer:
      'ما گزینه‌های پرداخت مختلفی را می‌پذیریم؛ از جمله پرداخت اینترنتی، کارت‌های اعتباری یا پول نقد. لطفا قبل از تکمیل سفارش، روش پرداختی را که ترجیح می‌دهید، تأیید کنید.',
  },
  {
    id: 5,
    question: 'دقت سفارش',
    answer:
      'لطفا قبل از ارسال از دقیق بودن تمام جزئیات سفارش خود، از جمله موارد منو، دستورالعمل‌های خاص و جزئیات سفارش خود اطمینان حاصل کنید تا اختلالی در فرآیند پردازش و تحویل سفارشات شما ایجاد نشود و سفارشات شما به سریع‌ترین زمان ممکن به دستتان برسد.',
  },
  {
    id: 6,
    question: 'شرایط لغو سفارش',
    answer:
      'شما می‌توانید با تماس مستقیم با هر شعبه از رستوران‌های طرف‌قرارداد، سفارش خود را لغو کنید. لطفا توجه داشته باشید که ممکن است محدودیت زمانی برای لغو وجود داشته باشد، زیرا ممکن است غذا از قبل آماده شده باشد و در اینصورت متاسفانه امکان لغو سفارش وجود ندارد.',
  },
  {
    id: 7,
    question: 'شرایط بازگشت سفارش',
    answer:
      'اگر سفارش شما انتظارات شما را برآورده نمی‌کند، لطفا بلافاصله با شعبه تماس بگیرید؛ ما در اسرع وقت به دنبال حل مشکل شما خواهیم بود.',
  },
  {
    id: 8,
    question: 'تخفیفات',
    answer:
      'گردونه تخفیف یا برنامه‌های وفاداری ممکن است قوانین و شرایط خاصی داشته باشند که به وضوح در وب‌سایت مشخص می‌شوند.',
  },
];
export const questionsFAQ = [
  {
    id: 1,
    question: 'ترخینه چه امکانات متفاوتی داره؟',
    answer:
      'وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم‌افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده‌سازی و تحویل آن را به حداقل ممکن می‌رسونه.',
  },
  {
    id: 2,
    question: 'چطور می‌تونم در ترخینه حساب کاربری ایجاد کنم؟',
    answer:
      'خیلی ساده، پس از انتخاب غذای مورد علاقه‌تان از منوی رستوران، هنگام ثبت سفارش یا وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می‌شه. یا می‌تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.',
  },
  {
    id: 3,
    question: 'سابقه و لیست خریدهای قبلی‌ام رو کجا ببینم؟',
    answer:
      'با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی، سابقه تمامی خریدهای شما نمایش داده می‌شه.',
  },
  {
    id: 4,
    question: 'چه راه هایی برای پرداخت دارم؟',
    answer:
      'هنگام ثبت سفارش غذا می‌تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین یا نقدی در هنگام تحویل سفارش بصورت حضوری.',
  },
  {
    id: 5,
    question:
      'آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟',
    answer:
      'بله. قیمت منوی وبسایت ترخینه دقیقاً مطابق با قیمت منوی شعب رستوران است و در صورت تغییر قیمت از طرف رستوران، این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.',
  },
  {
    id: 6,
    question: 'چطور می‌تونم از اعتبار هدیه و تخفیف استفاده کنم؟',
    answer:
      'برای استفاده از کد تخفیف می‌تونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل می‌تونید ازش استفاده کنید.',
  },
];