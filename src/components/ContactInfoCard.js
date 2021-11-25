import React from 'react';
import PropTypes from 'prop-types';

export default function ContactInfoCard({ card }) {
  return (
    <div>
      <div className="card contact-info-card">
        <div className="card-body">
          <h1 className="card-title">{card.name}</h1>
          <p className="card-text">Some quick example text.</p>
        </div>
        <div className="card-body">
          <a href="/" className="card-link">
            LinkedIn
          </a>
          <a href="/" className="card-link">
            Git Hub
          </a>
        </div>
      </div>
    </div>
  );
}

ContactInfoCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
