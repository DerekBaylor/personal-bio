import React, { useEffect, useState } from 'react';
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
    <div className="project-view">
      <h1>These are my Projects</h1>
      <div className="project-card-view">
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
