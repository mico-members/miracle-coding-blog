import { atom, selector } from 'recoil';
import { IArticle, IPR, IUser } from '../types/dataTypes';

const per_page = 10;

export const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {
    const userMap = new Map();
    process.env.USER_BRANCH?.split('&').forEach((v) => {
      const [branch, user] = v.split(':');
      userMap.set(user, branch);
    });

    const response = await fetch(
      `https://api.github.com/repos/mico-members/miracle-coding/collaborators`,
      {
        headers: {
          Authorization: `token ${process.env.WEBPACK_GITHUB_TOKEN}`,
        },
      },
    );

    const data = await response.json();

    interface userDataType {
      login: string;
      avatar_url: string;
      id: number;
    }
    
    return data.map(({ login, avatar_url, id }: userDataType) => ({
      userName: userMap.get(login),
      userImgUrl: avatar_url,
      id: id,
    }));
  },
});

export const articleListAtom = atom<IArticle[]>({
  key: 'articleList',
  default: [],
});

export const currentPage = atom<number>({
  key: 'currentPage',
  default: 1,
});

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
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month =
    date.getMonth() < 9
      ? '0' + (date.getMonth() + 1).toString()
      : date.getMonth() + 1;
  const day =
    date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
  const validatedDate = `${year}-${month}-${day}`;

  if (info.length !== 16) {
    return {
      id: number,
      link: html_url,
      prLink: html_url,
      userImgUrl: user.avatar_url,
      userName: base.ref,
      date: validatedDate,
    };
  }

  const dateInput = info[11];
  const conditionInput = info[13];
  const linkInput = info[14];
  const link = linkInput.match(/\([^)]+\)/)?.[0].replace(/[\(\)]/g, '');

  return {
    id: number,
    link: link || html_url,
    prLink: html_url,
    condition: isNaN(+conditionInput.trim()) ? -1 : +conditionInput.trim(),
    userImgUrl: user.avatar_url,
    userName: base.ref,
    date:
      new Date(dateInput).toString() === 'Invalid Date'
        ? validatedDate
        : dateInput,
  };
};

export const fetchData = selector<IArticle[]>({
  key: 'fetchDataSelector',
  get: async ({ get }) => {
    const user = get(userSelector);
    const page = get(currentPage);
    const filterPerPage = Math.floor(per_page / get(filterIndexAtom).length);

    const filterFetch = async (filterIndex: number) => {
      const author = user.filter((v: IUser) => v.id === filterIndex)[0];

      const response = await fetch(
        `https://api.github.com/repos/mico-members/miracle-coding/pulls?state=closed&per_page=
        ${filterPerPage}&page=${page}&base=${author.userName}`,
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
