import styled from 'styled-components';

export const Column = styled.div`
  background-color: ${({biggestValue, amount, theme}) => biggestValue === amount ? theme.colors.lightBlue : theme.colors.orange};
  width: 30px;
  margin: 6px;
  height: ${({ amount }) => amount * 2.5}px;
  border-radius: 5px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
