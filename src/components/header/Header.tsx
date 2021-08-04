import styled from 'styled-components';
import Filter from './filter/Filter';
import Label from './Label';
import Git from '../../images/github-logo.svg';
const Header = () => {
  return (
    <HeaderWrapper>
      <LabelWrapper>
        <Label icon={<Git />} colorCode="#ABCDEF" text="GitHub" />
        <Filter />
      </LabelWrapper>
      <Title>🌈 Miracle Coding Blog 🌈</Title>
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
  padding: 2rem 0;

  font-size: ${({ theme }) => theme.fontSize.XXL};
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.XL};
  }
`;

export default Header;
