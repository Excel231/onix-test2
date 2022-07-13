import React, { useEffect, useState } from 'react';
import DraggableListView from './DraggableListView';
import '../sass/DraggableList.scss';
import { DEFAULT_INACTIVE_STYLE, DEFAULT_ACTIVE_STYLE } from '../../../constants/constants';
import { Person } from '../../../types/Interfaces';

interface Props {
  personsOnScreen: Person[];
  changePersonsOnScreen: (newPersonsArray: Person[]) => void;
  onSaveChanges: (field: string, value: string | number, id: string | number) => void;
}

const DraggableList: React.FC<Props> = ({
  personsOnScreen,
  changePersonsOnScreen,
  onSaveChanges
}) => {
  const [currentDraggedPerson, setCurrentDraggedPerson] = useState<Person | null>(null);
  const [currentActivePerson, setCurrentActivePerson] = useState<Person | null>(null);
  const [activeStyle, setActiveStyle] = useState<string>(DEFAULT_ACTIVE_STYLE);
  const [parameterIsEdited, setParameterIsEdited] = useState<boolean>(false);

  const getPersonIndex = (person: Person) => {
    return personsOnScreen.indexOf(person);
  };

  const dragStartHandler = (person: Person) => {
    setCurrentDraggedPerson(person);
  };

  const dragOverHandler = (e: DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = (e: DragEvent, personToDropOn: Person) => {
    e.preventDefault();
    const newArr = personsOnScreen.map((currentPerson) => {
      if (currentPerson.id === personToDropOn.id) return currentDraggedPerson;
      if (currentPerson.id === currentDraggedPerson?.id) return personToDropOn;
      return currentPerson;
    });
    changePersonsOnScreen(newArr);
  };

  const handleMouseClick = (person: Person) => {
    setCurrentActivePerson(person);
  };

  const handleParameterIsEdited = () => {
    setParameterIsEdited((prevState) => !prevState);
  };

  const handleKeypress = (e: KeyboardEvent) => {
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
        setCurrentActivePerson((prevState) => personsOnScreen[getPersonIndex(prevState!) - 1]);
        break;

      case ('ArrowDown'):
        e.preventDefault();
        setCurrentActivePerson((prevState) => personsOnScreen[getPersonIndex(prevState!) + 1]);
        break;

      default:
        setActiveStyle(DEFAULT_ACTIVE_STYLE);
        break;
    }
  };

  const keyPress = (e: KeyboardEvent) => {
    if (!parameterIsEdited) handleKeypress(e);
  };

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [personsOnScreen, parameterIsEdited]);

  return (
    <DraggableListView
      personsOnScreen={personsOnScreen}
      onSaveChanges={onSaveChanges}
      inactiveStyle={DEFAULT_INACTIVE_STYLE}
      activeStyle={activeStyle}
      dragStartHandler={dragStartHandler}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
      handleMouseClick={handleMouseClick}
      currentActivePerson={currentActivePerson}
      handleParameterIsEdited={handleParameterIsEdited}
    />
  );
};

export default DraggableList;
