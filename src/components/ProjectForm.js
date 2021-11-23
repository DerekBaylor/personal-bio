import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProject, updateProject } from '../api/data/projectData';

const initialState = {
  projectName: '',
  projectImage: '',
  contributors: '',
  projectDescription: '',
  deployedLink: '',
  projectLink: '',
  gitHubLink: '',
};

export default function ProjectForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateProject(obj.firebaseKey, formInput).then(() => {
        resetForm();
        history.push('/projects');
      });
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/projects');
      });
    }
  };

  return (
    <>
      <div className="project-form-conatiner">
        <div>
          <form className="project-form-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Project Name:
                <input
                  className="form-input"
                  id="projectName"
                  name="projectName"
                  value={formInput.projectName}
                  onChange={handleChange}
                  required
                  placeholder="Project Name"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Project Name:
                <input
                  className="form-input"
                  id="projectImage"
                  name="projectImage"
                  value={formInput.projectImage}
                  onChange={handleChange}
                  required
                  placeholder="Project Image Link"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Project Contributors:
                <input
                  className="form-input"
                  id="contributors"
                  name="contributors"
                  value={formInput.contributors}
                  onChange={handleChange}
                  required
                  placeholder="Contributors"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Project Description:
                <input
                  className="form-input"
                  id="projectDescription"
                  name="projectDescription"
                  value={formInput.projectDescription}
                  onChange={handleChange}
                  required
                  placeholder="Project Description"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Site Link:
                <input
                  className="form-input"
                  id="deployedLink"
                  name="deployedLink"
                  value={formInput.deployedLink}
                  onChange={handleChange}
                  required
                  placeholder="Link to Deployed Site"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Project Link:
                <input
                  className="form-input"
                  id="projectLink"
                  name="projectLink"
                  value={formInput.projectLink}
                  onChange={handleChange}
                  required
                  placeholder="Link to Site Projects"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Github Link:
                <input
                  className="form-input"
                  id="gitHubLink"
                  name="gitHubLink"
                  value={formInput.gitHubLink}
                  onChange={handleChange}
                  required
                  placeholder="Link to Github Repo"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-info">
              {obj.firebaseKey ? 'Edit' : 'Create'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

ProjectForm.defaultProps = {
  obj: {},
};
