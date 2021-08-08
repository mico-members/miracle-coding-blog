import { useRecoilValueLoadable } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { userSelector } from '../../../config/store/store';
import { theme } from '../../../config/style/theme';
import { IUser } from '../../../config/types/dataTypes';
import Author from './Author';

const FilterModal = () => {
  const userList = useRecoilValueLoadable(userSelector);

  return (
    <ModalWrapper>
      {userList.state === 'hasValue' &&
        userList.contents.map((author: IUser) => (
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
  top: 3.6rem;
  @media screen and (max-width: 768px) {
    top: 3rem;
  }
  right: 0;
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.border.radius.L};
  animation: ${ModalAction} 0.1s ease-out;
`;

