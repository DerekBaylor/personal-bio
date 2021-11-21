// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { Card } from 'reactstrap';
// import getProjects from '../../sample-data/projectData';

export default function ProjectCards() {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   getProjects().then(setCards);
  // }, []);

  return (
    <div>
      <div className="card project-card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 className="card-title">{projectCards.projectName}</h5> */}
          {/* <p className="card-text">{card.projectDescription}</p> */}
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
