import { setTextColor } from '../../config/utils/util';
import styled from 'styled-components';
import { ILabel } from '../../config/types/componentTypes';

const Label = ({ icon, colorCode, text, onClick }: ILabel) => {
  return (
    <LabelWrapper {...{ colorCode, onClick }}>
      <IconWrapper>{icon}</IconWrapper>
      {text}
    </LabelWrapper>
  );
};

type colorType = Pick<ILabel, 'colorCode'>;
const IconWrapper = styled.div`
  width: 24px;
  @media screen and (max-width: 768px) {
    width: 16px;
  }
  margin-right: 0.5rem;
`;

const LabelWrapper = styled.div<colorType>`
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  margin: 0 0.5rem;
  cursor: pointer;
  padding: 0.4rem 1rem;
  width: fit-content;
  ${({ theme }) => theme.style.flexCenter};
  background-color: ${({ colorCode }) => colorCode};
  color: ${({ colorCode }) => setTextColor(colorCode)};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.L};
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.S};
  }
  border-radius: ${({ theme }) => theme.border.radius.L};
`;
export default Label;
