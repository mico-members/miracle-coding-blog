import styled from 'styled-components';
import Filter from './filter/Filter';
import Label from './Label';

const Header = () => {
  return (
    <HeaderWrapper>
      <Filter />
      <Title>🌈 Miracle Coding Blog 🌈</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.style.flexColumn}
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
