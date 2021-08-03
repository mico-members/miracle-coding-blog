import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { articleListAtom } from '../../../config/atoms';
import { ArticleItem } from './ArticleItem';

const Articles = () => {
  const articleList = useRecoilValue(articleListAtom);

  return (
    <ArticlesWrapper>
      {articleList &&
        articleList.map((articleItem) => (
          <ArticleItem
            key={articleItem.id}
            date={articleItem.date}
            link={articleItem.link}
            condition={articleItem.condition}
            userImgUrl={articleItem.userImgUrl}
            userName={articleItem.userName}
          />
        ))}
    </ArticlesWrapper>
  );
};

const ArticlesWrapper = styled.ul`
  ${({ theme }) => theme.style.flexColumn};
  gap: 1rem;
`;

export default Articles;
