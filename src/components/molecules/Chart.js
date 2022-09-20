import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import {
  Column,
  Subtitle,
  ColumnWrapper,
} from "../atoms/CharElements/Column.styles";

const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const AmountInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  height: 23px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Chart = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let biggestValue = 0;
  data.map(({ amount }) =>
    amount > biggestValue ? (biggestValue = amount) : biggestValue
  );

  return (
    <Wrapper>
      {data.map(({ day, amount }, i) => (
        <ColumnWrapper
          key={i}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Subtitle>{day}</Subtitle>
          <Column amount={amount} day={day} biggestValue={biggestValue} />
          {isHovering && <AmountInfo>${amount}</AmountInfo>}
        </ColumnWrapper>
      ))}
    </Wrapper>
  );
};
