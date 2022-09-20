import React from "react";
import styled from "styled-components";
import { Chart } from "../molecules/Chart";
import { Raport } from "../molecules/Raport";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  padding: 5px 20px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Title>Spending - Last 7 days</Title>
      <Chart />
      <Raport />
    </Wrapper>
  );
};
export default Dashboard;
