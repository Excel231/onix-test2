import React from 'react';
import PropType from 'prop-types';
import BigRedSubmitButton from '../../buttons/BigRedSubmitButton/BigRedSubmitButton';
import './CustomPersonCreator.scss';
import BiographyImage from '../../BiographyImage/BiographyImage';
import CustomPersonParameter from '../CustomPersonParameter/CustomPersonParameter';

const CustomPersonCreatorView = ({
  addCustomPerson,
  customPerson,
  setFullName,
  setWeight,
  setBirthYear,
  setBelt
}) => {
  return (
    <div className="custom-person-section">
      <h2>
        <em>Add someone else to the list!</em>
      </h2>
      <form>
        <ul>
          <li>
            <BiographyImage fullName="Default Image" photo="defaultImage" />
          </li>
          <CustomPersonParameter setParameter={setFullName}>Full Name</CustomPersonParameter>
          <CustomPersonParameter setParameter={setBirthYear}>Birth Year</CustomPersonParameter>
          <CustomPersonParameter setParameter={setWeight}>Weight</CustomPersonParameter>
          <CustomPersonParameter setParameter={setBelt}>Belt</CustomPersonParameter>
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
  setBelt: PropType.func.isRequired
};

export default CustomPersonCreatorView;
