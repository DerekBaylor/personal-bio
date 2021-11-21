import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getProjects from '../../sample-data/projectData';
import ProjectCards from '../components/ProjectCards';

export default function Projects({ projectId }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getProjects(projectId).then(setCards);
  }, []);

  console.warn(cards);

  return (
    <div>
      <h1>This is Projects</h1>
      <div className="d-flex flex-wrap">
        {cards.map((card) => (
          <ProjectCards key={card.projectId} card={card} setCards={setCards} />
        ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  projectId: PropTypes.string.isRequired,
};
