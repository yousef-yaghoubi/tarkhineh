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

export interface FoodType {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: number;
  order: number;
  rating: number;
  _count: {
    commentsFood: number;
  };
}