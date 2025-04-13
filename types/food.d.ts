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
