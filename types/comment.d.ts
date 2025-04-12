export interface CommentType {
    id?: number;
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