import { useState } from "react"
import PropTypes from "prop-types";
import "./styles/Education.css";

const Education = () => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [degreeYear, setDegreeYear] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Perform From Validation
    const validationErrors = {};
    if (!school){
      validationErrors.school = "School is required";
    }
    if (!degree){
      validationErrors.degree = "Degree is required";
    }
    if (!degreeYear) {
      validationErrors.degreeYear = "Degree Year is required";
    }

    if (Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      return;
    }
    // Save the education data
    onSave({school, degree, degreeYear});
    setIsEditing(false);
  };


  const handeEdit = () => {
      setIsEditing(true)
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="school">School :</label>
            <input
              type="text"
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)} required
              aria-required="true"
            />
            {errors.school && <span>{errors.school}</span>}
          </div>
          <div>
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)} required
              aria-required="true"
            />
            {errors.degree && <span>{errors.degree}</span>}
          </div>
          <div>
            <label htmlFor="degreeYear">Degree Year:</label>
            <input
              type="text"
              id="degreeYear"
              value={degreeYear}
              onChange={(e) => setDegreeYear(e.target.value)} required
              aria-required="true"
            />
            {errors.degreeYear && <span>{errors.degreeYear}</span>}
          </div>
          <button type="submit">Save</button>
          </form>
      ) : (
        <div className="education">
          <h2>{degree}</h2>
          <h3>{school}</h3>
          <span>{degreeYear}</span>
          <button type="button" onClick={handeEdit}>
            Edit 
          </button>
        </div>
      )}
      </div>   

  );
};


Education.propTypes = {
  onSave: PropTypes.func.isRequired,
};
export default Education