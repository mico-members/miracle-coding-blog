import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Author from './Author';

const Filter = () => {
  const [isOn, setOn] = useState(false);

  const currentDOM = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const blur = ({ target }: MouseEvent) =>
      !currentDOM.current?.contains(target as HTMLDivElement) && setOn(false);
    document.addEventListener('click', blur);
    return () => document.removeEventListener('click', blur);
  });
  return (
    <FilterWrapper ref={currentDOM}>
      <FilterButton onClick={() => setOn((status) => !status)}>
        닉네임
      </FilterButton>
      {isOn && <FilterModal />}
    </FilterWrapper>
  );
};

const FilterModal = () => {
  const authorList = [
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
  return (
    <ModalWrapper>
      {authorList.map((author) => (
        <Author {...author} />
      ))}
    </ModalWrapper>
  );
};

const FilterWrapper = styled.div`
  position: relative;
`;
const FilterButton = styled.div`
  padding: 0.6rem 1rem;
  width: fit-content;
  background-color: #b5eaea;
  color: #000000;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.L};
`;
const ModalWrapper = styled.div`
  position: absolute;
  top: 40px;
  background: #f9f9f9;
  border-radius: ${({ theme }) => theme.border.radius.L};
`;

export default Filter;
