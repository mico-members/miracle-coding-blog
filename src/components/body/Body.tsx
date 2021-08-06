import styled from 'styled-components';
import Articles from './list/Articles';
import SideFilter from './side/SideFilter';

const Body = () => {
  return (
    <BodyWrapper>
      <Articles />
      <SideFilter />
    </BodyWrapper>
  );
};

export default Body;

const BodyWrapper = styled.div`
  position: relative;
`;
