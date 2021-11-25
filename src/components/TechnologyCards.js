import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTechLogos, deleteTechLogo } from '../api/data/techLogoData';

export default function TechnologyCards({ admin, card, setCards }) {
  const handleDelete = (method) => {
    if (method === 'delete') {
      deleteTechLogo(card.firebaseKey).then(() => {
        getTechLogos().then(setCards);
      });
    }
  };

  return (
    <div>
      <div className="card tech-logo-card">
        <div>
          <img
            className="card-img"
            src={card.techLogoLink}
            alt="Logo of technology"
          />
        </div>
        {admin ? (
          <div className="tech-logo-btn-group">
            <Link
              to={`/editTechLogoView/${card.firebaseKey}`}
              className="btn btn-warning card-btn"
              aria-current="page"
              type="button"
            >
              Edit Logo
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
  );
}

TechnologyCards.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};

TechnologyCards.defaultProps = {
  admin: null,
};
