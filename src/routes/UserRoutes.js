import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactMe from '../views/ContactMe';
import Home from '../views/Home';
import LogIn from '../views/LogIn';
import Projects from '../views/Projects';

export default function UserRoutes({ admin }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/projects"
          component={() => <Projects admin={admin} />}
        />
        <Route exact path="/contactMe" component={ContactMe} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </>
  );
}

UserRoutes.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

UserRoutes.defaultProps = {
  admin: null,
};
