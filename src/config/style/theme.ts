import { css } from "styled-components";
import { DefaultTheme } from "../types/stylesTypes";

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
     main: '#FFCD3E',
     inputBG: '#FFF5DE',
     yellow: '#FFCD3E',
     disable: '#AAAAAA',
     gray: '#E7E6E1',
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