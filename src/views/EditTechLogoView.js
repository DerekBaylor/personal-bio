import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTechLogo } from '../api/data/techLogoData';
import TechLogoForm from '../components/TechLogoForm';

export default function EditTechLogoView() {
  const [editLogo, setEditLogo] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleTechLogo(key).then(setEditLogo);
  }, []);

  return (
    <div className="edit-project-view-container">
      <h1 className="title-text">Edit Project</h1>
      <TechLogoForm obj={editLogo} />
    </div>
  );
}
