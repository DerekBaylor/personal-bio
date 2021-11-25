import React from 'react';
import TechLogoForm from '../components/TechLogoForm';

export default function NewTechLogoView() {
  return (
    <div className="new-logo-view-container">
      <h1 className="title-text">Add a Logo</h1>
      <TechLogoForm />
    </div>
  );
}
