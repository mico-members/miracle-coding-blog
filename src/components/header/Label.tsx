import React from 'react';
import styled from 'styled-components';
import { ILabel } from '../../config/types/componentTypes';

const setTextColor = (code: string): string => {
  const red = code.slice(1, 3);
  const green = code.slice(3, 5);
  const blue = code.slice(5, 7);
  const isDark =
    parseInt(red, 16) > parseInt('A0', 16) &&
    parseInt(green, 16) > parseInt('A0', 16) &&
    parseInt(blue, 16) > parseInt('A0', 16);
  return isDark ? '#000000' : '#FFFFFF';
};

const Label = ({ colorCode, text }: ILabel) => {
  return <LabelWrapper {...{ colorCode }}>{text}</LabelWrapper>;
};

type colorType = Pick<ILabel, 'colorCode'>;

const LabelWrapper = styled.div<colorType>`
  padding: 0.6rem 1rem;
  width: fit-content;
  background-color: ${({ colorCode }) => colorCode};
  color: ${({ colorCode }) => setTextColor(colorCode)};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.L};
`;
export default Label;
