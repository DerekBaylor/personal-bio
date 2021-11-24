import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../api/data/projectData';
import ProjectCards from '../components/ProjectCards';

export default function Projects({ admin }) {
  const [projCards, setProjCards] = useState([]);

  useEffect(() => {
    getProjects().then(setProjCards);
  }, []);

  return (
    <div className="project-view">
      <h1>These are my Projects</h1>
      <div className="project-card-view">
        {projCards.map((card) => (
          <ProjectCards
            key={card.firebaseKey}
            card={card}
            setCards={setProjCards}
            admin={admin}
          />
        ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

Projects.defaultProps = {
  admin: null,
};
