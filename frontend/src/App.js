import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import styled from 'styled-components';
import Navbar from './components/navbar';


const Main = styled.main`
  height: 100%;
  background-color: #0A0A0A;
`;

function App() {

  return (
    <Main>
      <Router>
        <Navbar location={Router.location} />
        <Switch>
          {
            routes.map(
              ({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />
              )
            )
          }
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
