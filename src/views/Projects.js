import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import getProjects from '../api/data/projectData';
import ProjectCards from '../components/ProjectCards';

export default function Projects() {
  const [projCards, setProjCards] = useState([]);

  useEffect(() => {
    getProjects().then(setProjCards);
  }, []);

  getProjects().then('Project Page Console Warn', console.warn);
  console.warn('Project Cards', ProjectCards);
  return (
    <div>
      <h1>These are my Projects</h1>
      <div className="d-flex flex-wrap">
        {projCards.map((card) => (
          <ProjectCards
            key={card.projectId}
            card={card}
            setCard={setProjCards}
          />
        ))}
      </div>
    </div>
  );
}

// Projects.propTypes = {
//   projectId: PropTypes.string.isRequired,
// };
