import { CommentType } from "./comment";

export interface DemoFoodModalType {
  id: string;
  name: string;
  image: string;
  desc: string;
  rating: number;
  _count: {
    commentsFood: number;
  };
}

export interface FoodType extends DemoFoodModalType {
  price: number;
  order: number;
  favorite?: { id: string } | null;
  isFavorite?: boolean;
  commentsFood?: CommentType[]
}


export interface CartFoodForShoppingCart extends FoodType {
  quantity: number;
}

export interface FoodTypeFull {
  id: string;   name: string;   image: string;   desc: string;   price: number;   order: number;   rating: number;   typeId: string;   categorieId: string;   favoriteId: string | null;   branchId: string;   specialOffer: boolean;   numberOfSell: number;
}