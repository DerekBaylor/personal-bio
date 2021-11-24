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
    <div>
      <h1>Edit Project</h1>
      <ProjectForm obj={editProject} />
    </div>
  );
}
