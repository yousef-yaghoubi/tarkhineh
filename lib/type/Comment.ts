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
