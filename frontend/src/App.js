import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {

  const routes = [
    { path: '/', name: 'home', Component: null },
    { path: '/generate', name: 'generate', Component: null },
    { path: '/about', name: 'about', Component: null }
  ]

  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          {routes.map(
            ({ path, Component }) => (
              <Route key={path} exact path={path} component={Component} />
            )
          )}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
