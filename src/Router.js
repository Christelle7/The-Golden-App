import React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ColdPress from './components/pages/ColdPress';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />

    <Route path="/ColdPress" component={ColdPress} />
  </Switch>
)
