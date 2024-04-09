import { useState } from "react";
import PropTypes from "prop-types";

const Experience = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    period: "",
  });
  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (!formData.title) {
      validationErrors.title = "Occupation is required";
    }
    if (!formData.company) {
      validationErrors.company = "Company is required";
    }
    if (!formData.period) {
      validationErrors.period = "Working period is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save the experience data
    onSave(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Occupation Title:</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              aria-required="true"
            />
            {errors.title && <span>{errors.title}</span>}
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
              aria-required="true"
            />
            {errors.company && <span>{errors.company}</span>}
          </div>
          <div>
            <label htmlFor="period">Working Period:</label>
            <input
              type="text"
              id="period"
              value={formData.period}
              onChange={handleChange}
              required
              aria-required="true"
            />
            {errors.period && <span>{errors.period}</span>}
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h2>{formData.title}</h2>
          <h3>{formData.company}</h3>
          <span>{formData.period}</span>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

Experience.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default Experience;