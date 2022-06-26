import React from 'react';
import PropType from 'prop-types';
import BigRedSubmitButton from '../../buttons/BigRedSubmitButton/BigRedSubmitButton';
import './CustomPersonCreator.scss';
import BiographyImage from '../../BiographyImage/BiographyImage';

const CustomPersonCreatorView = ({
  addCustomPerson,
  customPerson,
  setFullName,
  setWeight,
  setBirthYear
}) => {
  return (
    <div className="custom-person-section">
      <form>
        <ul>
          <li>
            <BiographyImage fullName="Default Image" photo="defaultImage" />
          </li>
          <li>
            <div>
              <h3>Full Name</h3>
              <input type="text" onChange={(e) => setFullName(e.target.value)} />
            </div>
          </li>
          <li>
            <div>
              <h3>Birth Year</h3>
              <input type="text" onChange={(e) => setBirthYear(e.target.value)} />
            </div>
          </li>
          <li>
            <h3>Weight</h3>
            <input type="text" onChange={(e) => setWeight(e.target.value)} />
          </li>
        </ul>
      </form>
      <BigRedSubmitButton onClick={() => addCustomPerson(customPerson)}>
        Add custom person
      </BigRedSubmitButton>
    </div>
  );
};

CustomPersonCreatorView.propTypes = {
  addCustomPerson: PropType.func.isRequired,
  customPerson: PropType.shape({}).isRequired,
  setFullName: PropType.func.isRequired,
  setWeight: PropType.func.isRequired,
  setBirthYear: PropType.func.isRequired,
};

export default CustomPersonCreatorView;
