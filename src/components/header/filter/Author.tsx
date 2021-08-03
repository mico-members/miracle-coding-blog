import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { filterIndexAtom } from '../../../config/store/store';

interface IAuthor {
  id: number;
  name: string;
  imgUrl: string;
}

const Author = ({ id, name, imgUrl }: IAuthor) => {
  const [filterIndex, setFilterIndex] = useRecoilState(filterIndexAtom);
  const isChecked = filterIndex.includes(id);
  const check = () =>
    setFilterIndex((arr) =>isChecked ? arr.filter((el) => el !== id) : [...arr, id]);
  return (
    <AuthorWrapper onClick={check}>
      <CheckButton isChecked={isChecked} />
      <User>
        <UserImg src={imgUrl} />
        <UserName>{name}</UserName>
      </User>
    </AuthorWrapper>
  );
};
const CheckButton = ({ isChecked }: { isChecked: boolean }) =>
  isChecked ? (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="11" stroke="black" stroke-width="3" />
      <path
        d="M10.4166 15.4167L7.49993 12.5L6.52771 13.4722L10.4166 17.3611L18.7499 9.02778L17.7777 8.05556L10.4166 15.4167Z"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="11" stroke="black" stroke-width="3" />
    </svg>
  );

const AuthorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;
const User = styled.div`
  position: relative;
  width: 150px;
  height: 42px;
  background: #b5eaea;
  border-radius: ${({ theme }) => theme.border.radius.S};
  margin-left: 1rem;
`;
const UserImg = styled.img`
  position: absolute;
  top: 9px;
  left: 11px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
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