export interface PropAsideFoodsForShopingCart {
    hiddenSection?: number[];
    linkBTN: string;
    onClickCustom?: () => void;
    BtnDisabeld?: boolean;
}

export interface PropsSliderSwiper {
    theme: 'Primary' | 'White';
    title?: string;
    foodSlides?: FoodType[];
    commentSlides?: CommentType[];
    badgeSlides?: 'type' | 'sort';
}

export interface PropsModal {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    images?: {
      id: number;
      desc: string;
      title: string;
      images: {
        id: number;
        src: string;
      }[];
    };
    title?: React.ReactElement;
    desc?: string;
    state?: 'removeShopingCart' | 'showMap';
  }
