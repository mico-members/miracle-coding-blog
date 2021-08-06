import styled from 'styled-components';
import { IArticleItem } from '../../../config/types/componentTypes';
import {
  renderConditionEmoji,
  timeCalculator,
} from '../../../config/utils/util';

export const ArticleItem = ({
  refCallback,
  link,
  condition,
  userImgUrl,
  userName,
  date,
  prLink,
}: IArticleItem) => {
  const handleClickArticle = () => {
    window.open(link, '_blank');
  };

  const handleClickPrBtn = () => {
    window.open(prLink, '_blank');
  };

  return (
    <ArticleItemWrapper ref={refCallback} onClick={handleClickArticle}>
      <ArticleAuthor>
        <div className="author">
          <UserImg src={userImgUrl} />
          <UserName>{userName}</UserName>
        </div>
        <PrBtn onClick={handleClickPrBtn}>comment</PrBtn>
      </ArticleAuthor>
      <ArticleContent>
        <div>
          <span className="emoji">{renderConditionEmoji(+condition)}</span>
          <span className="condition">{condition}/10</span>
        </div>
        <span>{timeCalculator(date)}</span>
      </ArticleContent>
    </ArticleItemWrapper>
  );
};

const ArticleItemWrapper = styled.li`
  ${({ theme }) => theme.style.flexColumn};
  color: ${({ theme }) => theme.color.darkGray};
  padding: 1.5rem 1.8rem;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.border.radius.S};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.whiteMint};
  }
`;

const ArticleAuthor = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .author {
    display: flex;
  }
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const UserName = styled.div`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: flex;
  align-items: center;
`;

const ArticleContent = styled.div`
  ${({ theme }) => theme.style.flexSpaceBetween}

  .emoji {
    font-size: ${({ theme }) => theme.fontSize.L};
    margin-left: 3.4rem;
  }
  .condition {
    font-size: ${({ theme }) => theme.fontSize.M};
    margin-left: 0.4rem;
  }
`;

const PrBtn = styled.button`
  all: unset;
  background-color: #d3e0ea;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: #1687a7;
    color: white;
  }
`;
