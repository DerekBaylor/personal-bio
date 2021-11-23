import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import personalLogo from '../assets/personalLogo.png';

export default function Navigation({ admin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-top">
      <div className="container-fluid">
        <div id="navbarNav">
          <ul className="navbar-nav navbar-top-links">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                <img src={personalLogo} alt="logo" style={{ width: '100px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contactMe"
              >
                Contact Me
              </Link>
            </li>
            {admin ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/projectForm"
                >
                  Project Form
                </Link>
              </li>
            ) : (
              <li className="nav-item hidden-link">
                <Link className="nav-link active" aria-current="page" to="/">
                  Hidden Link
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  admin: null,
};
