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

  const setFullName = (fullName) => {
    customPerson.personInfo.fullName = fullName;
  };

  const setBirthYear = (birthYear) => {
    customPerson.personInfo.birthYear = birthYear;
  };

  const setWeight = (weight) => {
    customPerson.personInfo.weight = weight;
  };

  const setBelt = (beltString) => {
    if (beltString === null) return;
    let beltName = beltString.match(/[A-Z]/gi);
    let year = beltString.match(/\d/gi);

    beltName = beltName === null ? '' : beltName.join('');
    year = year === null ? '' : year.join('');
    customPerson.personInfo.belts[0] = { beltName, year };
  };

  return (
    <CustomPersonCreatorView
      addCustomPerson={addCustomPerson}
      customPerson={customPerson}
      setFullName={setFullName}
      setBirthYear={setBirthYear}
      setWeight={setWeight}
      setBelt={setBelt}
    />
  );
};

CustomPersonCreator.propTypes = {
  addCustomPerson: PropType.func.isRequired,
  emptyIdValue: PropType.node.isRequired
};

export default CustomPersonCreator;
