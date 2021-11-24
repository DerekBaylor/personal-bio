import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditProjectView from '../views/EditProjectView';
import NewProjectView from '../views/NewProjectView';

export default function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/NewProjectView" component={NewProjectView} />
      <Route exact path="/editProjectView/:key" component={EditProjectView} />
    </Switch>
  );
}
