export interface CommentType {
  id?: string;
  desc: string;
  createdAt: Date;
  score: number;
  public?: boolean,
  user: {
    profile: string;
    firstName: string;
    lastName: string;
  };
}

interface CommentTypeBase {
  createdAt: string
  desc: string
  id: string
  public: boolean
  score: number
  userId: string
}
type CommentType = CommentTypeBase & ({ foodId: string } | { branchId: string })