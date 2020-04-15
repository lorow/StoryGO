import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import subRoutes from './subRoutes';

function GeneratePage(props) {

  const history = useHistory();
  useEffect(() => {
    // we don't really want anyone here since, reroute the to the actual start
    history.push('edit')
  }, [history])

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