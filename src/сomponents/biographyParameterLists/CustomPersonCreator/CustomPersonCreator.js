import React from 'react';
import PropType from 'prop-types';
import CustomPersonCreatorView from './CustomPersonCreatorView';

const CustomPersonCreator = ({ addCustomPerson, emptyIdValue }) => {
  const customPerson = {
    id: emptyIdValue,
    personInfo: {
      fullName: 'Full Name',
      photo: 'defaultImage',
      birthYear: 'Birth Year',
      weight: 'Weight',
      belts: []
    }
  };

  const setPhoto = (photo) => {
    customPerson.personInfo.photo = photo;
  };

  const setFullName = (fullName) => {
    customPerson.personInfo.fullName = fullName;
  };

  const setBirthYear = (birthYear) => {
    customPerson.personInfo.birthYear = birthYear;
  };

  const setWeight = (weight) => {
    customPerson.personInfo.weight = weight;
  };
  
  return (
    <CustomPersonCreatorView
      addCustomPerson={addCustomPerson}
      customPerson={customPerson}
      setPhoto={setPhoto}
      setFullName={setFullName}
      setBirthYear={setBirthYear}
      setWeight={setWeight}
    />
  );
};

CustomPersonCreator.propTypes = {
  addCustomPerson: PropType.func.isRequired,
  emptyIdValue: PropType.node.isRequired
};

export default CustomPersonCreator;
