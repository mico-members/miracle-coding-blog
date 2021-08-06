import styled from 'styled-components';
import ArticleItemSkeleton from './ArticleItemSkeleton';

const ArticlesSkeleton = () => {
  const NUM_OF_SKELETON_UI = 6;
  return (
    <ArticlesSkeletonWrapper>
      {new Array(NUM_OF_SKELETON_UI).fill(0).map((el,index) => (
        <ArticleItemSkeleton key={index}/>
      ))}
    </ArticlesSkeletonWrapper>
  );
};

const ArticlesSkeletonWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default ArticlesSkeleton;
