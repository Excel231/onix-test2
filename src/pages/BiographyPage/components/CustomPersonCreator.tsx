import React, { useState } from 'react';
import CustomPersonCreatorView from './CustomPersonCreatorView';
import { Person } from '../../../types/Interfaces';

interface Props {
  addCustomPerson: (customPerson: Person) => void;
  emptyIdValue: string | number;
}

const CustomPersonCreator: React.FC<Props> = ({ addCustomPerson, emptyIdValue }) => {
  const [customPerson, setCustomPerson] = useState<Person>({
    id: emptyIdValue,
    personInfo: {
      fullName: 'Full Name',
      photo: 'defaultImage',
      birthYear: 'Birth Year',
      weight: 'Weight',
      belts: []
    }
  });

  const setFullName = (fullName: string) => {
    setCustomPerson((prevState) => {
      return { id: emptyIdValue, personInfo: { ...prevState.personInfo, fullName } };
    });
  };

  const setBirthYear = (birthYear: string | number) => {
    setCustomPerson((prevState) => {
      return { id: emptyIdValue, personInfo: { ...prevState.personInfo, birthYear } };
    });
  };

  const setWeight = (weight: string | number) => {
    setCustomPerson((prevState) => {
      return { id: emptyIdValue, personInfo: { ...prevState.personInfo, weight } };
    });
  };

  const setBelt = (beltString: string) => {
    if (beltString === null) return;
    const beltNameArray: string[] | null = beltString.match(/[A-Z]/gi) ?? [];
    const yearArray: string[] | null = beltString.match(/\d/gi) ?? [];

    const beltName = beltNameArray.join('');
    const year = yearArray.join('');

    setCustomPerson((prevState) => {
      return { id: emptyIdValue, personInfo: { ...prevState.personInfo, belts: [{ beltName, year }] } };
    });
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
