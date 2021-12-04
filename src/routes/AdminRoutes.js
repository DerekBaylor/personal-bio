import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditProjectView from '../views/EditProjectView';
import EditTechLogoView from '../views/EditTechLogoView';
import NewProjectView from '../views/NewProjectView';
import NewTechLogoView from '../views/NewTechLogoView';

export default function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/newProjectView" component={NewProjectView} />
      <Route exact path="/editProjectView/:key" component={EditProjectView} />

      <Route exact path="/newTechLogoView" componet={NewTechLogoView} />
      <Route exact path="/editTechLogoView/:key" component={EditTechLogoView} />
    </Switch>
  );
}
