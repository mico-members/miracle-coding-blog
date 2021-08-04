import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { currentPage, fetchData } from '../../../config/store/store';
import { IArticle } from '../../../config/types/dataTypes';
import { ArticleItem } from './ArticleItem';

const Articles = () => {
  const setPageNum = useSetRecoilState(currentPage);
  const articleList = useRecoilValueLoadable(fetchData);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const observer = useRef<IntersectionObserver>();

  const lastArticleElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(articleList.contents)
        setPageNum((prevPageNum) => prevPageNum + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    if (articleList.state === 'hasValue') {
      setArticles((articles) => {
        return [...articles, ...articleList.contents];
      });
    }
  }, [articleList]);

  return (
    <ArticlesWrapper>
      {articles.map(
        ({ id, date, link, condition, userImgUrl, userName }, index) => (
          <ArticleItem
            refCallback={
              articles.length - 1 === index ? lastArticleElementRef : null
            }
            key={id}
            {...{ date, link, condition, userImgUrl, userName }}
          />
        ),
      )}
    </ArticlesWrapper>
  );
};

const ArticlesWrapper = styled.ul`
  ${({ theme }) => theme.style.flexColumn};
  gap: 1rem;
`;

export default Articles;
