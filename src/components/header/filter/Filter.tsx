import { MouseEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Label from '../Label';
import DownIcon from '../../../images/down.svg';
import UpIcon from '../../../images/up.svg';
import Git from '../../../images/github-logo.svg';
import FilterModal from './FilterModal';

const Filter = () => {
  const [isOn, setOn] = useState(false);

  const currentDOM = useRef<HTMLDivElement>(null);

  const blur = (ev: globalThis.MouseEvent) =>
    !currentDOM.current?.contains(ev.target as HTMLDivElement) && setOn(false);

  useEffect(() => {
    document.addEventListener('click', blur);
    return () => document.removeEventListener('click', blur);
  }, []);

  const gitLink = 'https://github.com/mico-members/miracle-coding';

  const gitClickHandler = (e: MouseEvent) => {
    window.open(gitLink, '_blank');
  };
  const popUpClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    setOn((status) => !status);
  };

  return (
    <LabelWrapper>
      <Label
        icon={<Git />}
        colorCode="#ABCDEF"
        text="GitHub"
        onClick={gitClickHandler}
      />
      <FilterWrapper ref={currentDOM}>
        <Label
          icon={isOn ? <UpIcon /> : <DownIcon />}
          text={'닉네임'}
          colorCode={'#b5eaea'}
          onClick={popUpClickHandler}
        />

        {isOn && <FilterModal />}
      </FilterWrapper>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div`
  display: flex;
`;

const FilterWrapper = styled.div`
  position: relative;
`;

export default Filter;
