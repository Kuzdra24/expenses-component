import React from "react";
import styled from "styled-components";
import data from "../../data/data.json";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;
  padding: 0;
`;

const BoldText = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const sumAmount = () => {
  let sum = 0;
  data.forEach(({ amount }) => {
    sum += amount;
  });
  return Math.floor(sum);
};

export const Raport = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Subtitle>Total in this week: </Subtitle>
        <StyledTitle>${sumAmount()}</StyledTitle>
      </InfoWrapper>
      <InfoWrapper>
        <BoldText>+2,4%</BoldText>
        <Subtitle>from last week</Subtitle>
      </InfoWrapper>
    </Wrapper>
  );
};
