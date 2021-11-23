import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

export default function Routes({ admin }) {
  console.warn('Routes Admin Check', admin);
  return (
    <>
      {/* {admin.isAdmin && <AdminRoutes admin={admin} />} */}
      {/* <AdminRoutes admin={admin} /> */}
      {admin ? <AdminRoutes admin={admin} /> : console.warn('Not and Admin')}
      <UserRoutes />
    </>
  );
}

Routes.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  admin: null,
};
