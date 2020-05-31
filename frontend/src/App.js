import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import routes from "./routes";
import styled from "styled-components";
import Navbar from "./components/navbar";

const Main = styled.main`
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0a0a0a;
`;

function App() {
  return (
    <Main>
      <Router>
        <Navbar location={Router.location} />
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
