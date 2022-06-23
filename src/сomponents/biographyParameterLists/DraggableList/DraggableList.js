import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import DraggableListView from './DraggableListView';
import './DraggableList.scss';

const DEFAULT_INACTIVE_STYLE = 'biography-ul';

const DEFAULT_ACTIVE_STYLE = 'selected-biography-ul';

const DraggableList = ({
  personsOnScreen,
  changePersonsOnScreen,
  onSaveChanges
}) => {
  const [currentDraggedPerson, setCurrentDraggedPerson] = useState(null);
  const [currentActivePerson, setCurrentActivePerson] = useState(null);
  const [activeStyle, setActiveStyle] = useState(DEFAULT_ACTIVE_STYLE);
  const [parameterIsEdited, setParameterIsEdited] = useState(false);

  const getPersonIndex = (person) => {
    return personsOnScreen.indexOf(person);
  };

  const dragStartHandler = (person) => {
    setCurrentDraggedPerson(person);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, personToDropOn) => {
    e.preventDefault();
    const newArr = personsOnScreen.map((currentPerson) => {
      if (currentPerson.id === personToDropOn.id) return currentDraggedPerson;
      if (currentPerson.id === currentDraggedPerson.id) return personToDropOn;
      return currentPerson;
    });
    changePersonsOnScreen(newArr);
  };

  const handleMouseOver = (person) => {
    setCurrentActivePerson(person);
  };

  const handleParameterIsEdited = () => {
    setParameterIsEdited((prevState) => !prevState);
  };

  const handleKeypress = (e) => {
    if (parameterIsEdited) return;
    const keyPressed = e.key;
    switch (keyPressed) {
      case ('1'):
        setActiveStyle(`${DEFAULT_ACTIVE_STYLE}-white`);
        break;

      case ('2'):
        setActiveStyle(`${DEFAULT_ACTIVE_STYLE}-green`);
        break;

      case ('3'):
        setActiveStyle(`${DEFAULT_ACTIVE_STYLE}-blue`);
        break;

      case ('ArrowUp'):
        e.preventDefault();
        setCurrentActivePerson((prevState) => personsOnScreen[getPersonIndex(prevState) - 1]);
        break;

      case ('ArrowDown'):
        e.preventDefault();
        setCurrentActivePerson((prevState) => personsOnScreen[getPersonIndex(prevState) + 1]);
        break;

      default:
        setActiveStyle(DEFAULT_ACTIVE_STYLE);
        break;
    }
  };

  useEffect(() => {
    const keyPress = (e) => handleKeypress(e);
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [personsOnScreen]);

  return (
    <DraggableListView
      personsOnScreen={personsOnScreen}
      onSaveChanges={onSaveChanges}
      inactiveStyle={DEFAULT_INACTIVE_STYLE}
      activeStyle={activeStyle}
      dragStartHandler={dragStartHandler}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
      handleMouseOver={handleMouseOver}
      currentActivePerson={currentActivePerson}
      handleParameterIsEdited={handleParameterIsEdited}
    />
  );
};

DraggableList.propTypes = {
  personsOnScreen: PropType.arrayOf(PropType.shape({})).isRequired,
  onSaveChanges: PropType.func.isRequired,
  changePersonsOnScreen: PropType.func.isRequired
};

export default DraggableList;
