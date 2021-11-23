import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectForm({ admin }) {
  console.warn('Project Form Console Warn', admin);
  return <h1>This is the ProjectForm</h1>;
}

ProjectForm.propTypes = {
  admin: PropTypes.shape.isRequired,
};
