import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../api/data/projectData';
import ProjectForm from '../components/ProjectForm';

export default function EditProjectView() {
  const [editProject, setEditProject] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleProject(key).then(setEditProject);
  }, []);

  return (
    <div className="edit-project-view-container">
      <h1 className="title-text">Edit Project</h1>
      <ProjectForm obj={editProject} />
    </div>
  );
}
