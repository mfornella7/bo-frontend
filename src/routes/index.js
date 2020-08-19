import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth     from './auth';
import Trading  from './trading';
import Cashier  from './cashier';
const Routes = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  return (
      <Switch>
          <Route 
              exact
              path="/"
              render={() => {
                if (isAuthenticated) return <Redirect to="/trading"/>
                return <Redirect to="/auth"/>
              }}
          />
          <Route path="/auth" component={Auth}/>
          {isAuthenticated &&
            (<Switch>
              <Route path="/trading" component={Trading}/>
              <Route path="/cashier" component={Cashier}/>
            </Switch>)
          }
          <Route render={() => <Redirect to="/"/>}/>
      </Switch>
  );
}

export default Routes;