import React from 'react';
import { Route, Switch } from 'react-router-dom';
import subRoutes from './subRoutes';

function GeneratePage(props) {
  return (
    <Switch>
      {
        subRoutes.map(
          ({ path, Component }) => (<Route key={path} path={path} component={Component} />)
        )
      }
    </Switch>
  )
}

export default GeneratePage;