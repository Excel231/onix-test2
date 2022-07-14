import React from 'react';
import CustomPersonCreatorView from './CustomPersonCreatorView';
import { Person } from '../../../types/Interfaces';

interface Props {
  addCustomPerson: (customPerson: Person) => void;
  emptyIdValue: string | number;
}

const CustomPersonCreator: React.FC<Props> = ({ addCustomPerson, emptyIdValue }) => {
  const customPerson: Person = {
    id: emptyIdValue,
    personInfo: {
      fullName: 'Full Name',
      photo: 'defaultImage',
      birthYear: 'Birth Year',
      weight: 'Weight',
      belts: []
    }
  };

  const setFullName = (fullName: string) => {
    customPerson.personInfo.fullName = fullName;
  };

  const setBirthYear = (birthYear: string | number) => {
    customPerson.personInfo.birthYear = birthYear;
  };

  const setWeight = (weight: string | number) => {
    customPerson.personInfo.weight = weight;
  };

  const setBelt = (beltString: string) => {
    if (beltString === null) return;
    const beltName: string[] | null = beltString.match(/[A-Z]/gi) ?? [];
    const year: string[] | null = beltString.match(/\d/gi) ?? [];

    customPerson.personInfo.belts[0] = { beltName: beltName.join(''), year: year.join('') };
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

export default CustomPersonCreator;
