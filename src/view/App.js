import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import Dashboard from "../components/organisms/Dashboard";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { Header } from "../components/organisms/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Dashboard />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
