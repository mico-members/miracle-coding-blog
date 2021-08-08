export interface IPR {
  body: string;
  base: { ref: string };
  user: { avatar_url: string };
  number: number;
  html_url: string;
  created_at: string;
}

export interface IArticle extends IUser {
  link: string;
  condition: number;
  date: string;
  prLink: string;
}

export interface IUser {
  userName: string;
  userImgUrl: string;
  id: number;
}
