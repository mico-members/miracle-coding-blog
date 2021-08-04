import { atom, selector } from 'recoil';
import { IArticle, IPR } from '../types/dataTypes';

const per_page = 10;

export const articleListAtom = atom<IArticle[]>({
  key: 'articleList',
  default: [],
});

export const currentPage = atom<number>({
  key: 'currentPage',
  default: 1,
});

const authorList = [
  'Q',
  'Daisy',
  'goody',
  'adela',
  'Seong',
  'eamon',
  'Tami',
  'autumn',
  'eve',
  'swing',
];

export const filterIndexAtom = atom<number[]>({
  key: 'filterIndex',
  default: [],
});

const bodyParser = ({
  body,
  base,
  user,
  number,
  html_url,
  created_at,
}: IPR) => {
  const info = body.split('|');
  if (info.length !== 16) {
    const date = new Date(created_at);
    const month = date.getMonth() + 1;
    return {
      id: number,
      link: html_url,
      prLink: html_url,
      userImgUrl: user.avatar_url,
      userName: base.ref,
      date: `${date.getFullYear()}-${
        month > 9 ? month : '0' + month.toString()
      }-${date.getDate()}`,
    };
  }
  const link = info[14].match(/\([^)]+\)/)?.[0].replace(/[\(\)]/g, '');
  return {
    id: number,
    link: link || '잘못된 링크입니다.',
    prLink: html_url,
    condition: parseInt(info[13].trim()),
    userImgUrl: user.avatar_url,
    userName: base.ref,
    date: info[11],
  };
};

export const fetchData = selector<IArticle[]>({
  key: 'fetchDataSelector',
  get: async ({ get }) => {
    const page = get(currentPage);

    const filterFetch = async (filterIndex: number) => {
      const author = authorList[filterIndex];
      const response = await fetch(
        `https://api.github.com/repos/mico-members/miracle-coding/pulls?state=closed&per_page=${per_page}&page=${page}&base=${author}`,
        {
          headers: {
            Authorization: `token ${process.env.WEBPACK_GITHUB_TOKEN}`,
          },
        },
      );
      const data = await response.json();
      return data.map(bodyParser);
    };

    const defaultFetch = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/mico-members/miracle-coding/pulls?state=closed&per_page=${per_page}&page=${page}`,
          {
            headers: {
              Authorization: `token ${process.env.WEBPACK_GITHUB_TOKEN}`,
            },
          },
        );
        const data = await response.json();
        return data.map(bodyParser);
      } catch (error) {
        console.error(error);
      }
    };

    const reducer = async (acc: Promise<IArticle[]>, cur: number) => {
      const awaitedAcc = await acc.then();
      const data = await filterFetch(cur);
      const result: IArticle[] = [...awaitedAcc, ...data];
      return result;
    };

    return get(filterIndexAtom).length === 0
      ? defaultFetch()
      : (await get(filterIndexAtom).reduce(reducer, Promise.resolve([]))).sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
  },
});
