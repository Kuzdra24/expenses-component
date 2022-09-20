import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { Column } from "../atoms/CharElements/Column.js";

const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Chart = () => {
  let biggestValue = 0;
  data.map(({ amount }) =>
    amount > biggestValue ? (biggestValue = amount) : biggestValue
  );

  return (
    <Wrapper>
      {data.map(({ day, amount }, i) => (
        <Column key={i} amount={amount} day={day} biggestValue={biggestValue} />
      ))}
    </Wrapper>
  );
};
