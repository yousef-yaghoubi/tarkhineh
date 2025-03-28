export interface PropsSearchParams {
  searchParams: {
    type?: string;
  };
}


export interface BadgeType {
  id:number,
  url: string;
  title: string;
}
export interface ProfileRoutes extends BadgeType {
  icon: string
}


export interface CommentType {
  id: number;
  desc: string;
  createdAt: Date;
  score: number;
  user: {
    profile: string;
    firstName: string;
    lastName: string;
  };
}
export interface DemoFoodModalType {
  id: number,
  name: string,
  image: string,
  desc: string,
  rating: number,
  _count:{
    commentsFood: number
  }
}
export interface FoodType extends DemoFoodModalType{
  price: number;
  order: number;
  favorite: null | {id: number},
  isFavorite : boolean
}

interface CartFoodForShopingCart extends FoodType{
  quantity : number
}

export interface AddressUserProps {
  id: number;
  address: string;
  phone: string;
  titleAddress: string;
  meReciver: boolean | null;
  nameReciver: string | null;
  userId: number;
}

export type DeliveryMethod =
  | { type: 'pickup'; branch: 'ekbatan' | 'vanak' | 'aghdasie' | 'chaloos' } 
  | { type: 'delivery'; address: string };

export type PaymentMethod = {type: 'online', banck: 'tejarat' | 'saderat' | 'saman'} | {type: 'cash_on_delivery'};

export interface OrderState {
  delivery: DeliveryMethod;
  payment: PaymentMethod;
  fee : {price: number, discount: number}
}

