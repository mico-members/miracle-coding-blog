import { ReactElement, MouseEvent } from 'react';

export interface ILabel {
  icon?: ReactElement;
  colorCode: string;
  text: string;
  onClick?: (e: MouseEvent) => void;
}

export interface IArticleItem {
  refCallback?: ((node: any) => void) | null;
  link: string;
  condition: number;
  userImgUrl: string;
  userName: string;
  date: string;
}
