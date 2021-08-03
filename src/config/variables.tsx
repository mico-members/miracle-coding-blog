import { IPR } from './types/dataTypes';

export const PER_PAGE = 11;

export const bodyParser = ({ body, base, user, number }: IPR) => {
  const info = body.split('|');
  if (info.length !== 16) return { id: -1 };
  const link = info[14].match(/\([^)]+\)/)?.[0].replace(/[\(\)]/g, '');
  return {
    id: number,
    link: link || '잘못된 링크입니다.',
    condition: parseInt(info[13].trim()),
    userImgUrl: user.avatar_url,
    userName: base.ref,
    date: info[11],
  };
};
