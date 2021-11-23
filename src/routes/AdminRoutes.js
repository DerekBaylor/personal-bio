import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectForm from '../views/ProjectForm';

export default function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/projectForm" component={ProjectForm} />
    </Switch>
  );
}
