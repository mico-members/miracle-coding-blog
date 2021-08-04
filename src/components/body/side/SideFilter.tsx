import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { debounce } from '../../../config/utils/util';
import Author from '../../header/filter/Author';
import { authorList } from '../../header/filter/FilterModal';

function SideFilter() {
  const [state, setState] = useState(0);
  const handleScroll = debounce(() => {
    setState(window.scrollY);
  }, 50);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <SideFilterWrapper {...{ state }}>
      {authorList.map((author) => (
        <Author key={'side' + `${author.id}`} {...author} />
      ))}
    </SideFilterWrapper>
  );
}

export default SideFilter;

const sideAction = keyframes`
from{
    transform: translateY(8px);
}to {
    transform: translateY(0);
}
`;

const SideFilterWrapper = styled.div<{ state: number }>`
  position: absolute;
  padding: 1rem 0;
  top: 0;
  right: -280px;
  background-color: #abcdef;
  border-radius: 1rem;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);
  transition: 0.7s ease-in-out;
  transform: ${({ state }) => `translateY(${state + 10}px)`};
`;
