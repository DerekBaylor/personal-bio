import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditProjectView from '../views/EditProjectView';
import EditTechLogoView from '../views/EditTechLogoView';
import NewProjectView from '../views/NewProjectView';

export default function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/NewProjectView" component={NewProjectView} />
      <Route exact path="/editProjectView/:key" component={EditProjectView} />
      <Route exact path="/editTechLogoView/:key" componet={EditTechLogoView} />
    </Switch>
  );
}
