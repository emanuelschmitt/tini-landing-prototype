import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyles from "./global-styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RevolvingBackground from "./revolving-background";
import Navigation from "./navigation";

import About from "./pages/about";
import Dates from "./pages/dates";

const Content = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <RevolvingBackground />
      <Navigation />
      <Content>
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/dates" exact>
            <Dates />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
