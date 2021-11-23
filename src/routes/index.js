import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactMe from '../views/ContactMe';
import Home from '../views/Home';
import LogIn from '../views/LogIn';
import ProjectForm from '../views/ProjectForm';
import Projects from '../views/Projects';

export default function Routes({ admin }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactMe" component={ContactMe} />
        <Route exact path="/login" component={LogIn} />
        <Route
          exact
          path="/projectForm"
          component={() => <ProjectForm admin={admin} />}
        />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  admin: PropTypes.shape,
};

Routes.defaultProps = {
  admin: null,
};
