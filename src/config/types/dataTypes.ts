export interface IPR {
  body: string;
  base: { ref: string };
  user: { avatar_url: string };
  number: number;
  html_url: string;
  created_at: string;
}

export interface IArticle {
  id: number;
  link: string;
  condition: number;
  userImgUrl: string;
  userName: string;
  date: string;
}
