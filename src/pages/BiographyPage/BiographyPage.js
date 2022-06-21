import React, { useEffect, useState } from 'react';
import '../../styles.scss';
import sortPersons from '../../helper/sorters/sortPersons';
import BiographyPageView from './BiographyPageView';
import withLayout from '../../HOC/withLayout/withLayout';

function BiographyPage() {
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

  useEffect(() => {
    fetch('https://62a1ede4cd2e8da9b0fec808.mockapi.io/api/comments/boxers')
      .then((res) => res.json())
      .then((data) => setAllPersons(data));
  }, []);

  return (
    <BiographyPageView
      personsOnScreen={personsOnScreen}
      sortOnClick={sortOnClick}
      addPerson={addPerson}
      removePerson={removePerson}
      onSaveChanges={onSaveChanges}
      changePersonsOnScreen={changePersonsOnScreen}
    />
  );
}

export default withLayout(BiographyPage);
