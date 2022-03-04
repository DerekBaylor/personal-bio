import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTechLogos } from '../api/data/techLogoData';
import PersonalBio from '../components/PersonalBio';
import TechnologyCards from '../components/TechnologyCards';
// import TechLogoForm from '../components/TechLogoForm';

export default function Home({ admin }) {
  const [techLogoCards, setTechLogoCards] = useState([]);

  useEffect(() => {
    getTechLogos().then(setTechLogoCards);
  }, []);

  return (
    <div className="home-view">
      <h1 className="title-text">Welcome to my Site</h1>
      <img
        className="img img-head-shot"
        src="https://zfjepfckphrvbatmvyud.supabase.in/storage/v1/object/public/personal-bio-storage/headshot.jpg"
        alt="headShot"
      />
      <PersonalBio />
      <div className="tech-cards-view">
        {techLogoCards.map((card) => (
          <TechnologyCards
            key={card.firebaseKey}
            card={card}
            setCards={setTechLogoCards}
            admin={admin}
          />
        ))}
      </div>
      {/* <TechLogoForm /> */}
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

Home.defaultProps = {
  admin: null,
};
