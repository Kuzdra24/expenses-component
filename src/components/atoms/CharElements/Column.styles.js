import styled from 'styled-components';

export const Column = styled.div`
  background-color: ${({biggestValue, amount, theme}) => biggestValue === amount ? theme.colors.lightBlue : theme.colors.orange};
  opacity: ${({isHovering}) => isHovering ? '.5' : '1'};
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

export const AmountInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  height: 23px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;