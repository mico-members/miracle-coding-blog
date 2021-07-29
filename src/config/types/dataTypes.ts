export interface IPR {
  body: string;
  base: { ref: string };
  user: { avatar_url: string };
  number: number;
}

export interface IArticle {
  id: number;
  link: string;
  condition: number;
  userImgUrl: string;
  userName: string;
  date: string;
}
