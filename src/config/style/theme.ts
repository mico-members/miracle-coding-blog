import { css } from 'styled-components';
import { DefaultTheme } from '../types/stylesTypes';

const flexSpaceBetween = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const flexAlignItemsCenter = css`
  display: flex;
  align-items: center;
`;
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const flexColumn = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const theme: DefaultTheme = {
  fontFamily: 'Noto Sans KR',
  fontWeight: {
    normal: '400',
    bold: '700',
    bold2: '900',
  },
  color: {
    darkGray: '#14142B',
    gray: '#F9F9F9',
    white: '#fff',
    green: '#71EFA3',
    mint: '#B5EAEA',
    whiteMint: '#EDF6E5',
    purple: '#C6B4CE',
  },
  fontSize: {
    XXL: '2rem', // 32px
    XL: '1.5rem', //  24px
    L: '1.2rem', //18px
    M: '1rem', // 16px
    S: '0.75rem', //12px
  },

  border: {
    radius: {
      XL: '2rem', // 30px
      L: '1.25rem', // 20px
      M: '1rem', // 16px
      S: '0.7rem', // 11px
    },
  },
  style: {
    flexColumn: `${flexColumn}`,
    flexSpaceBetween: `${flexSpaceBetween}`,
    flexAlignItemsCenter: `${flexAlignItemsCenter}`,
    flexCenter: `${flexCenter}`,
  },
};

export { theme };
