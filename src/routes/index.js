import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

export default function Routes({ admin }) {
  return (
    <>
      {admin?.isAdmin && <AdminRoutes admin={admin} />}
      <UserRoutes />
    </>
  );
}

Routes.propTypes = {
  admin: PropTypes.shape,
};

Routes.defaultProps = {
  admin: null,
};
