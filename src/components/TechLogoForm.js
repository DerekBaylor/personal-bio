import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createTechLogo, updateTechLogo } from '../api/data/techLogoData';

const initialState = {
  name: '',
  techLogoLink: '',
};

export default function TechLogoForm({ obj }) {
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
      updateTechLogo(obj.firebaseKey, formInput).then(() => {
        resetForm();
        history.push('/');
      });
    } else {
      createTechLogo({ ...formInput }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <>
      <div className="tech-logo-form-container">
        <form className="tech-logo-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Tech Name:
              <input
                className="form-input"
                id="name"
                name="name"
                value={formInput.name}
                onChange={handleChange}
                required
                placeholder="Enter Tech Name"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Logo Link:
              <input
                className="form-input"
                id="techLogoLink"
                name="techLogoLink"
                value={formInput.techLogoLink}
                onChange={handleChange}
                required
                placeholder="Enter Logo Link"
              />
            </label>
            <button type="submit" className="btn btn-info form-btn">
              {obj.firebaseKey ? 'Submit Changes' : 'Add Logo'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

TechLogoForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

TechLogoForm.defaultProps = {
  obj: {},
};
