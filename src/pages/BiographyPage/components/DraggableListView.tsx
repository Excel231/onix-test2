import React, { useEffect, DragEvent } from 'react';
import Aos from 'aos';
import ParameterList from './ParameterList';
import { Person } from '../../../types/Interfaces';

interface Props {
  personsOnScreen: Person[];
  onSaveChanges: (field: string, value: string | number, id: string | number) => void;
  inactiveStyle: string;
  activeStyle: string;
  dragStartHandler: (person: Person) => void;
  dragOverHandler: (e: DragEvent<HTMLDivElement>) => void
  dropHandler: (e: DragEvent<HTMLDivElement>, personToDropOn: Person) => void;
  handleMouseClick: (person: Person) => void;
  currentActivePerson: Person | null;
  handleParameterIsEdited: () => void;
}

const DraggableListView: React.FC<Props> = ({
  personsOnScreen,
  onSaveChanges,
  inactiveStyle,
  activeStyle,
  dragStartHandler,
  dragOverHandler,
  dropHandler,
  handleMouseClick,
  currentActivePerson,
  handleParameterIsEdited
}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {
        personsOnScreen.map((person) => (
          <div
            data-aos="fade-right"
            aria-hidden="true"
            key={person.id}
            draggable="true"
            onDragStart={() => dragStartHandler(person)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, person)}
            onClick={() => handleMouseClick(person)}
          >
            <ParameterList
              id={person.id}
              fullName={person.personInfo.fullName}
              photo={person.personInfo.photo}
              birthYear={person.personInfo.birthYear}
              weight={person.personInfo.weight}
              belts={person.personInfo.belts}
              onSaveChanges={onSaveChanges}
              listStyle={
              person === currentActivePerson
                ? activeStyle : inactiveStyle
            }
              handleParameterIsEdited={handleParameterIsEdited}
            />
          </div>
        ))
      }
    </>
  );
};

export default DraggableListView;
