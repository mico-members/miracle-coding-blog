import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { currentPage, filterIndexAtom } from '../../../config/store/store';
import { IUser } from '../../../config/types/dataTypes';

interface IAuthor extends IUser{
  colorCode: string;
}

const Author = ({ colorCode, id, userImgUrl, userName }: IAuthor) => {
  const [filterIndex, setFilterIndex] = useRecoilState(filterIndexAtom);
  const setPageNum = useSetRecoilState(currentPage);
  const isChecked = filterIndex.includes(id);

  const check = () =>
    setFilterIndex((arr) =>
      isChecked ? arr.filter((el) => el !== id) : [...arr, id],
    );
  useEffect(() => {
    setPageNum(1);
  }, [isChecked]);

  return (
    <AuthorWrapper onClick={check}>
      <User {...{ colorCode, isChecked }}>
        <UserImg src={userImgUrl} />
        <UserName>{userName}</UserName>
      </User>
    </AuthorWrapper>
  );
};

const AuthorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.6rem 1rem;
`;

type colorCode = Pick<IAuthor, 'colorCode'>;
const User = styled.div<{ isChecked: boolean } & colorCode>`
  cursor: pointer;
  position: relative;
  width: 170px;
  height: 42px;
  background: ${({ isChecked, colorCode }) => (isChecked ? colorCode : 'none')};
  border-radius: ${({ theme }) => theme.border.radius.S};

  @media (hover: hover) {
    &:hover {
      background: ${({ colorCode }) => colorCode};
    }
  }
`;
const UserImg = styled.img`
  position: absolute;
  top: 9px;
  left: 11px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 1px;
  border: 2px solid rgb(210 210 210);
`;
const UserName = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: 50px;
  width: 61px;
  height: 23px;
`;

export default Author;
