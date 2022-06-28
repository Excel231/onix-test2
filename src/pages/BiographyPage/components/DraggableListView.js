import React, { useEffect } from 'react';
import PropType from 'prop-types';
import Aos from 'aos';
import ParameterList from './ParameterList';

const DraggableListView = ({
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

DraggableListView.propTypes = {
  personsOnScreen: PropType.arrayOf(PropType.shape({})).isRequired,
  onSaveChanges: PropType.func.isRequired,
  inactiveStyle: PropType.string.isRequired,
  activeStyle: PropType.string.isRequired,
  dragStartHandler: PropType.func.isRequired,
  dragOverHandler: PropType.func.isRequired,
  dropHandler: PropType.func.isRequired,
  handleMouseClick: PropType.func.isRequired,
  currentActivePerson: PropType.shape({}),
  handleParameterIsEdited: PropType.func.isRequired
};

DraggableListView.defaultProps = {
  currentActivePerson: null
};

export default DraggableListView;
