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
}

interface CartFoodForShopingCart extends FoodType{
  quantity : number
}