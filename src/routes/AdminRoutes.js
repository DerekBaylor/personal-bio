import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectFormView from '../views/ProjectFormView';

export default function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/projectFormView" component={ProjectFormView} />
    </Switch>
  );
}
