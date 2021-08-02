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
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  padding: 3rem 0;
  font-size: ${({ theme }) => theme.fontSize.XXL};
`;

export default Header;
