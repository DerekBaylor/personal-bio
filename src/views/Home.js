import React from 'react';
import headShot from '../assets/headShot.png';
import PersonalBio from '../components/PersonalBio';

export default function Home() {
  return (
    <div>
      <h1>This is Home</h1>
      <img
        className="img img-head-shot"
        src={headShot}
        alt="headShot"
        style={{ width: '300px' }}
      />
      <br />
      <PersonalBio />
    </div>
  );
}
