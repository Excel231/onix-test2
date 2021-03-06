import React, { useEffect, useState } from 'react';
import '../../styles.scss';
import axios from 'axios';
import sortPersons from '../../helper/sortPersons';
import BiographyPageView from './BiographyPageView';
import withLayout from '../../HOC/withLayout/withLayout';
import { BOXER_API_LINK } from '../../constants/constants';
import { Person } from '../../types/Interfaces';

const BiographyPage = () => {
  const [allPersons, setAllPersons] = useState<Person[] | []>([]);
  const [personsOnScreen, setPersonsOnScreen] = useState<Person[] | []>([]);
  /* Boolean value that shows in which order parameters should be displayed
    (from greatest to lowest or vice versa) */
  const [sortFromGreatest, setSortFromGreatest] = useState<boolean>(false);
  const [nextEmptyIdValue, setNextEmptyIdValue] = useState<number>(0);

  const sortOnClick = (componentToCompare: string) => {
    setSortFromGreatest((prevSortFromGreatest) => !prevSortFromGreatest);
    setPersonsOnScreen(sortPersons([...personsOnScreen], componentToCompare, sortFromGreatest));
  };

  const addPerson = () => {
    if (personsOnScreen.length < allPersons.length) {
      const newPerson = allPersons[personsOnScreen.length];
      setPersonsOnScreen([...personsOnScreen, newPerson]);
    }
  };
  
  const addCustomPerson = (customPerson: Person) => {
    setAllPersons((prevState) => [...prevState, customPerson]);
    setNextEmptyIdValue((prevState) => prevState + 1);
  };

  const removePerson = () => {
    setPersonsOnScreen(personsOnScreen.slice(0, -1));
  };

  const onSaveChanges = (field: string, value: string | number, id: string | number) => {
    const newPersons = personsOnScreen.map((person: Person) => {
      return person.id === id ? { ...person, personInfo: { ...person.personInfo, [field]: value } } : person;
    });
    setPersonsOnScreen(newPersons);
  };

  const changePersonsOnScreen = (newPersonsArray: Person[]) => {
    setPersonsOnScreen(newPersonsArray);
  };

  const setDefaultPersonsOnScreen = (persons: Person[]) => {
    setPersonsOnScreen(persons.slice(0, 3));
  };

  useEffect(() => {
    axios.get(BOXER_API_LINK).then((res) => {
      setAllPersons(res.data);
      setDefaultPersonsOnScreen(res.data);
      setNextEmptyIdValue(res.data.length + 1);
    });
  }, []);

  return (
    <BiographyPageView
      personsOnScreen={personsOnScreen}
      emptyIdValue={nextEmptyIdValue}
      sortOnClick={sortOnClick}
      addPerson={addPerson}
      addCustomPerson={addCustomPerson}
      removePerson={removePerson}
      onSaveChanges={onSaveChanges}
      changePersonsOnScreen={changePersonsOnScreen}
    />
  );
};

export default withLayout(BiographyPage);
