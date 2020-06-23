import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {ROUTES} from '../constants/routes';



const Root = () => {
  const showRoutes = () => {
    const RoutesKeys = Object.keys(ROUTES);
    return RoutesKeys.map((key) => {
      let ROUTE = ROUTES[key];
      return <Route exact={ROUTE.exact}
                    key={key}
                    path={ROUTE.path}
                    component={ROUTE.component}
      />;
    });
  };
  return (
      <>
        <Switch>
          {showRoutes()}
        </Switch>
      </>
  );
};
export default Root;