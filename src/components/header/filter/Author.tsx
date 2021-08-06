import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { currentPage, filterIndexAtom } from '../../../config/store/store';

interface IAuthor {
  id: number;
  name: string;
  imgUrl: string;
  colorCode: string;
}

const Author = ({ colorCode, id, name, imgUrl }: IAuthor) => {
  const [filterIndex, setFilterIndex] = useRecoilState(filterIndexAtom);
  const [pageNum, setPageNum] = useRecoilState(currentPage);
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
        <UserImg src={imgUrl} />
        <UserName>{name}</UserName>
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
  &:hover {
    background: ${({ colorCode }) => colorCode};
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
