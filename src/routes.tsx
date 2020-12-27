import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import PublicPage from './Public';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/public" component={PublicPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;