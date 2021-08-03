import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import { currentPage, fetchData } from '../../../config/store/store';
import { IArticle } from '../../../config/types/dataTypes';
import { ArticleItem } from './ArticleItem';

const Articles = () => {
  const [pageNum, setPageNum] = useRecoilState(currentPage);
  const articleList = useRecoilValueLoadable(fetchData);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const observer = useRef<IntersectionObserver>();

  const lastArticleElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('마지막놈');
        setPageNum((prevPageNum) => prevPageNum + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    if (articleList.state === 'hasValue') {
      setArticles((articles) => {
        if (pageNum === 1) return articleList.contents;
        return [...articles, ...articleList.contents];
      });
    }
  }, [articleList, pageNum]);

  return (
    <ArticlesWrapper>
      {articles.map((articleItem, index) => {
        if (articles.length - 1 === index) {
          return (
            <ArticleItem
              refCallback={lastArticleElementRef}
              key={articleItem.id}
              date={articleItem.date}
              link={articleItem.link}
              condition={articleItem.condition}
              userImgUrl={articleItem.userImgUrl}
              userName={articleItem.userName}
            />
          );
        } else {
          return (
            <ArticleItem
              key={articleItem.id}
              date={articleItem.date}
              link={articleItem.link}
              condition={articleItem.condition}
              userImgUrl={articleItem.userImgUrl}
              userName={articleItem.userName}
            />
          );
        }
      })}
    </ArticlesWrapper>
  );
};

const ArticlesWrapper = styled.ul`
  ${({ theme }) => theme.style.flexColumn};
  gap: 1rem;
`;

const Div = styled.div`
  height: 50px;
  background-color: beige;
`;

export default Articles;
