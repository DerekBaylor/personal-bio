import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function BottomNavigation({ admin }) {
  return (
    <div>
      <nav className="navbar btm-nav-bar">
        <div className="container-fluid">
          <div id="navbarNav">
            <ul className="navbar-nav btm-nav-links-group">
              <li className="nav-item">
                <Link
                  className="nav-link active btm-nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btm-nav-link active"
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btm-nav-link active"
                  aria-current="page"
                  to="/contactMe"
                >
                  Contact Me
                </Link>
              </li>
              {admin ? (
                <li className="nav-item">
                  <button
                    onClick={signOutUser}
                    type="button"
                    className="btn btn-light border border-dark"
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link btm-nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

BottomNavigation.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

BottomNavigation.defaultProps = {
  admin: null,
};
