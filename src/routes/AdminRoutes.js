import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectForm from '../views/ProjectForm';

export default function AdminRoutes({ admin }) {
  return (
    <Switch>
      <Route
        exact
        path="/projectForm"
        component={() => <ProjectForm admin={admin} />}
      />
    </Switch>
  );
}

AdminRoutes.propTypes = {
  admin: PropTypes.shape,
};

AdminRoutes.defaultProps = {
  admin: null,
};
