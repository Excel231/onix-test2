import React, { useEffect, useState } from 'react';
import '../../styles.scss';
import sortPersons from '../../helper/sortPersons';
import BiographyPageView from './BiographyPageView';
import withLayout from '../../HOC/withLayout';
import { BOXER_API_LINK } from '../../constants/constants';

const BiographyPage = () => {
  const [allPersons, setAllPersons] = useState([]);
  const [personsOnScreen, setPersonsOnScreen] = useState([]);
  /* Boolean value that shows in which order parameters should be displayed
    (from greatest to lowest or vice versa) */
  const [sortFromGreatest, setSortFromGreatest] = useState(false);

  const sortOnClick = (componentToCompare) => {
    setSortFromGreatest((prevSortFromGreatest) => !prevSortFromGreatest);
    setPersonsOnScreen(sortPersons([...personsOnScreen], componentToCompare, sortFromGreatest));
  };

  const addPerson = () => {
    if (personsOnScreen.length < allPersons.length) {
      const newPerson = allPersons[personsOnScreen.length];
      setPersonsOnScreen([...personsOnScreen, newPerson]);
    }
  };
  
  const addCustomPerson = (customPerson) => {
    setAllPersons((prevState) => [...prevState, customPerson]);
  };

  const removePerson = () => {
    setPersonsOnScreen(personsOnScreen.slice(0, -1));
  };

  const onSaveChanges = (field, value, id) => {
    const newPersons = personsOnScreen.map((person) => {
      return person.id === id ? { ...person, personInfo: { ...person.personInfo, [field]: value } } : person;
    });
    setPersonsOnScreen(newPersons);
  };

  const changePersonsOnScreen = (newPersonsArray) => {
    setPersonsOnScreen(newPersonsArray);
  };

  const setDefaultPersonsOnScreen = (persons) => {
    setPersonsOnScreen(persons.slice(0, 3));
  };

  useEffect(() => {
    fetch(BOXER_API_LINK)
      .then((res) => res.json())
      .then((data) => {
        setAllPersons(data);
        setDefaultPersonsOnScreen(data);
      });
  }, []);

  return (
    <BiographyPageView
      personsOnScreen={personsOnScreen}
      emptyIdValue={allPersons.length + 1}
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
