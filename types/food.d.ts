import { CommentType } from "./comment";

export interface DemoFoodModalType {
  id: number;
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
  favorite?: { id: number } | null;
  isFavorite?: boolean;
  commentsFood?: CommentType[]
}


export interface CartFoodForShoppingCart extends FoodType {
  quantity: number;
}

export interface FoodTypeFull {
  id: number;   name: string;   image: string;   desc: string;   price: number;   order: number;   rating: number;   typeId: number;   categorieId: number;   favoriteId: number | null;   branchId: number;   specialOffer: boolean;   numberOfSell: number;
}