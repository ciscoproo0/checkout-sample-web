import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Error from './pages/Error';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Checkout} />
      <Route path="/success" exact component={Success} />
      <Route path="/error" exact component={Error} />
    </Switch>
  );
};

export default Routes;
