import { atom } from 'recoil';
import { IArticle } from './types/dataTypes';

export const articleListAtom = atom<Array<IArticle>>({
  key: 'articleList',
  default: [],
});
