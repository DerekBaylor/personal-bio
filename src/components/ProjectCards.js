import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCards({ card }) {
  return (
    <div>
      <div className="card project-card">
        <img
          src={card.projectImage}
          className="card-img-top project-image"
          alt="Logo of Project"
        />
        <div className="card-body">
          <h3 className="card-title">{card.projectName}</h3>
          <h5 className="card-contributors">{card.contributors}</h5>
          <p className="card-text">{card.projectDescription}</p>
          <div className="project-card-button-group">
            <a
              href={card.deployedLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success project-link-button"
            >
              See it live!
            </a>
            <a
              href={card.gitHubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-info project-link-button"
            >
              Git Hub Repo
            </a>
            <a
              href={card.projectLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary project-link-button"
            >
              Project Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
