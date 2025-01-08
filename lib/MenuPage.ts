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
