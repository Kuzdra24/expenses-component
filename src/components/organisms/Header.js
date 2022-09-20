import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 5px 0;
  padding: 0;
`;

const Ammount = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
  padding: 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Subtitle>My balance</Subtitle>
        <Ammount>$921.48</Ammount>
      </InfoWrapper>
      <Logo />
    </Wrapper>
  );
};
