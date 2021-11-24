import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

export default function Routes({ admin }) {
  return (
    <>
      {admin ? <AdminRoutes admin={admin} /> : ''}
      <UserRoutes admin={admin} />
    </>
  );
}
// console.warn('Is not an Admin')
Routes.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  admin: null,
};
