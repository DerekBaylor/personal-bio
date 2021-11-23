import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomNavigation() {
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
