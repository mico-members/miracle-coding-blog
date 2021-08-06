import styled, { keyframes } from 'styled-components';
import { theme } from '../../../config/style/theme';
import Author from './Author';


const FilterModal = () => {
  return (
    <ModalWrapper> 
      {authorList.map((author) => (
        <Author colorCode={theme.color.mint} key={author.id} {...author} />
      ))}
    </ModalWrapper>
  );
};

export default FilterModal;

const ModalAction = keyframes`
from {
    transform: translateY(8px);
    opacity:0
  }

  to {
    transform: translateY(0px);
    opacity:1
  }
`;

const ModalWrapper = styled.div`
  z-index: 2;
  padding: 0.5rem 0;
  position: absolute;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  top: 53px;
  left: calc(45% - 35%);
  background: ${({theme}) => theme.color.gray};
  border-radius: ${({ theme }) => theme.border.radius.L};
  animation: ${ModalAction} 0.1s ease-out;
`;

export const authorList = [
  {
    id: 0,
    name: 'Q',
    imgUrl: 'https://avatars.githubusercontent.com/u/71962505?v=4',
  },
  {
    id: 1,
    name: 'Daisy',
    imgUrl: 'https://avatars.githubusercontent.com/u/56783350?v=4',
  },
  {
    id: 2,
    name: 'goody',
    imgUrl: 'https://avatars.githubusercontent.com/u/71166372?v=4',
  },
  {
    id: 3,
    name: 'adela',
    imgUrl: 'https://avatars.githubusercontent.com/u/49264795?v=4',
  },
  {
    id: 4,
    name: 'Seong',
    imgUrl: 'https://avatars.githubusercontent.com/u/70461368?v=4',
  },
  {
    id: 5,
    name: 'eamon',
    imgUrl: 'https://avatars.githubusercontent.com/u/68339352?v=4',
  },
  {
    id: 6,
    name: 'Tami',
    imgUrl: 'https://avatars.githubusercontent.com/u/71919983?v=4',
  },
  {
    id: 7,
    name: 'autumn',
    imgUrl: 'https://avatars.githubusercontent.com/u/60209518?v=4',
  },
  {
    id: 8,
    name: 'eve',
    imgUrl: 'https://avatars.githubusercontent.com/u/62237639?v=4',
  },
  {
    id: 9,
    name: 'swing',
    imgUrl: 'https://avatars.githubusercontent.com/u/69034766?v=4',
  },
];
