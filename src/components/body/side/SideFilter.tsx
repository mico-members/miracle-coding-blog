import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../../config/style/theme';
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
        <Author colorCode={'#e8e8e8'} key={'side' + `${author.id}`} {...author} />
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
  background-color: ${({theme}) => theme.color.gray};
  border-radius: 1rem;
  box-shadow: rgb(85 91 255) 0px 0px 0px 2px, rgb(31 193 27) 0px 0px 0px 4px, rgb(255 217 19) 0px 0px 0px 6px, rgb(255 156 85) 0px 0px 0px 8px, rgb(255 85 85) 0px 0px 0px 10px;
  transition: 0.7s ease-in-out;
  transform: ${({ state }) => `translateY(${state + 10}px)`};

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
