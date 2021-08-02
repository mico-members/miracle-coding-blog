import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config/style/theme';
import { IArticleItem } from '../../../config/types/componentTypes';

export const ArticleItem = ({
  link,
  condition,
  userImgUrl,
  userName,
  date,
}: IArticleItem) => {
  return (
    <ArticleItemWrapper>
      <ArticleAuthor>
        <UserImg src={link} />
        <UserName>{userName}</UserName>
      </ArticleAuthor>

      <ArticleContent>
        <span>😀 9/10</span>
        <span>2021-07-28</span>
      </ArticleContent>
    </ArticleItemWrapper>
  );
};

const ArticleItemWrapper = styled.li`
  ${({ theme }) => theme.style.flexColumn};
  color: ${({ theme }) => theme.color.darkGray};
  padding: 1.5rem 1.8rem;
  background-color: ${({ theme }) => theme.color.gray};
  /* width: 37.5rem; */
  border-radius: ${({ theme }) => theme.border.radius.S};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.whiteMint};
  }
`;

const ArticleAuthor = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  margin-bottom: 1.5rem;
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const UserName = styled.span`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const ArticleContent = styled.div`
  ${({ theme }) => theme.style.flexSpaceBetween}
  span {
    :first-child {
      margin-left: 50px;
    }
    font-size: ${({ theme }) => theme.fontSize.M};
  }
`;
