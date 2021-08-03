export interface ILabel {
  colorCode: string;
  text: string;
}

export interface IArticleItem {
  refCallback?: (node: any) => void;
  link: string;
  condition: number;
  userImgUrl: string;
  userName: string;
  date: string;
}
