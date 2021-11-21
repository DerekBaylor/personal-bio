import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCards({ card }) {
  return (
    <div>
      <div className="card project-card">
        <img
          src={card.projectImage}
          className="card-img-top"
          alt="Logo of Project"
        />
        <div className="card-body">
          <h5 className="card-title">{card.projectName}</h5>
          <p className="card-text">{card.projectDescription}</p>
          <a href="/" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
