import React from 'react';
import PropTypes from 'prop-types';

export default function ContactInfoCard({ card }) {
  return (
    <div>
      <div className="card contact-info-card">
        <div className="card-body">
          <h1 className="card-title">{card.name}</h1>
          <img
            className="img img-head-shot"
            src={card.headShot}
            alt="headShot"
          />
          <p className="card-text">Please reach out to me on linkedIn.</p>
        </div>
        <div className="card-body">
          <a
            href="https://www.linkedin.com/in/derek-baylor/"
            className="card-link"
          >
            LinkedIn
          </a>
          <a href="https://github.com/DerekBaylor" className="card-link">
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
