import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProjects, deleteProject } from '../api/data/projectData';

export default function ProjectCards({ admin, card, setCards }) {
  const handleDelete = (method) => {
    if (method === 'delete') {
      deleteProject(card.firebaseKey).then(() => {
        getProjects().then(setCards);
      });
    }
  };

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
          <div className="project-card-link-group">
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
          {admin ? (
            <div className="project-card-button-group">
              <Link
                to={`/editProjectView/${card.firebaseKey}`}
                className="btn btn-warning card-btn"
                aria-current="page"
                type="button"
              >
                Edit Project
              </Link>
              <button
                onClick={() => handleDelete('delete')}
                className="btn btn-danger card-btn"
                type="button"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="project-card-hidden-text">
              <h1>Hidden Text</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};

ProjectCards.defaultProps = {
  admin: null,
};
