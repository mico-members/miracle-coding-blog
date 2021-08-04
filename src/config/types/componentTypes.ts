export interface ILabel {
  colorCode: string;
  text: string;
}

export interface IArticleItem {
  refCallback?:  ((node: any) => void) | null;  
  link: string;
  condition: number;
  userImgUrl: string;
  userName: string;
  date: string;
}

