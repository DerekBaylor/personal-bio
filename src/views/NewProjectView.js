import React from 'react';
import ProjectForm from '../components/ProjectForm';

export default function NewProjectView() {
  return (
    <div className="new-project-view-container">
      <h1 className="title-text">Add a Project</h1>
      <ProjectForm />
    </div>
  );
}
