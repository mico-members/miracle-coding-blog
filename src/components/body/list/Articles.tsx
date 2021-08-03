import { useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import { fetchData } from '../../../config/store/store';
import { ArticleItem } from './ArticleItem';

const Articles = () => {
  const articleList = useRecoilValueLoadable(fetchData);

  return (
    <ArticlesWrapper>
      {articleList.state === 'hasValue' &&
        articleList.contents.map((articleItem) => (
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
