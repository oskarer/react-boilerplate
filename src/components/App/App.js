import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';

export default ({ history }) => {
  return (
    <ConnectedRouter history={history} >
      <Switch>
        <Route component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};
