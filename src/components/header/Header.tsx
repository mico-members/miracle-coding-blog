import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Header = () => {
  return (
    <HeaderWrapper>
      <LabelWrapper>
        <Label colorCode="#ABCDEF" text="test!!!" />
        <Label colorCode="#00FF00" text="fooooooobarrrrrrrr" />
      </LabelWrapper>
      <Title>🌈Miracle Coding Blog🌈</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.style.flexColumn}
`;
const LabelWrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.XXL};
`;

export default Header;
