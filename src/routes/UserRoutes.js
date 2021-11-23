import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactMe from '../views/ContactMe';
import Home from '../views/Home';
import LogIn from '../views/LogIn';
import Projects from '../views/Projects';

export default function UserRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactMe" component={ContactMe} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </>
  );
}
