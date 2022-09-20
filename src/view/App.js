import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import Dashboard from "../components/organisms/Dashboard";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { Header } from "../components/organisms/Header";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Form from "../components/organisms/Form"
import {Navbar} from '../components/organisms/Navbar'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navbar />
          <Switch>
            <Route path="/add-expenses" element={<Form />} />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Dashboard />
                </>
              }
            />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
