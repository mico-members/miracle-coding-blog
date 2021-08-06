import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Label from '../Label';
import DownIcon from '../../../images/down.svg';
import UpIcon from '../../../images/up.svg';
import Git from '../../../images/github-logo.svg';
import FilterModal from './FilterModal';

const Filter = () => {
  const [isOn, setOn] = useState(false);

  const currentDOM = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const blur = ({ target }: MouseEvent) =>
      !currentDOM.current?.contains(target as HTMLDivElement) && setOn(false);
    document.addEventListener('click', blur);
    return () => document.removeEventListener('click', blur);
  });
  const gitLink = 'https://github.com/mico-members/miracle-coding';
  const gitClickHandler = () => {
    window.open(gitLink, '_blank');
  };

  return (
    <FilterWrapper ref={currentDOM}>
      <Label
        icon={<Git />}
        colorCode="#ABCDEF"
        text="GitHub"
        onClick={gitClickHandler}
      />
      <Label
        icon={isOn ? <UpIcon /> : <DownIcon />}
        text={'닉네임'}
        colorCode={'#b5eaea'}
        onClick={() => setOn((status) => !status)}
      />
      {isOn && <FilterModal />}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  position: relative;
`;

export default Filter;
