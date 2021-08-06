import styled from 'styled-components';

const ArticleItemSkeleton = () => (
  <SkWrapper>
    <SkArticleAuthor>
      <SkUserImg />
      <SkUserName />
    </SkArticleAuthor>
    <SkArticleContent>
      <div className="flex">
        <SkEmoji></SkEmoji>
        <SkCondition></SkCondition>
      </div>
      <SkDate></SkDate>
    </SkArticleContent>
  </SkWrapper>
);

const SkWrapper = styled.li`
  ${({ theme }) => theme.style.flexColumn};
  color: ${({ theme }) => theme.color.darkGray};
  padding: 1.5rem 1.8rem;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.border.radius.S};
`;

const SkArticleAuthor = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  margin-bottom: 1.5rem;
`;

const SkUserImg = styled.div`
  ${({ theme }) => theme.style.skeletonStyles};
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
`;

const SkUserName = styled.div`
  ${({ theme }) => theme.style.skeletonStyles};
  margin-left: 1rem;
  width: 6rem;
  height: 1.5rem;
`;

const SkArticleContent = styled.div`
  ${({ theme }) => theme.style.flexSpaceBetween}
  display: flex;

  .flex {
    display: flex;
  }
`;

const SkEmoji = styled.div`
  ${({ theme }) => theme.style.skeletonStyles};
  margin-left: 3.4rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
`;

const SkCondition = styled.div`
  ${({ theme }) => theme.style.skeletonStyles};
  margin-left: 0.3rem;
  width: 3rem;
  height: 1.2rem;
`;

const SkDate = styled.div`
  ${({ theme }) => theme.style.skeletonStyles};
  width: 6rem;
  height: 1.2rem;
`;

export default ArticleItemSkeleton;
