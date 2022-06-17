import React from 'react';
import PropType from 'prop-types';
import ParameterList from '../ParameterList/ParameterList';

function DraggableListView({
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
}) {
  return (
    <>
      {
        personsOnScreen.map((person) => (
          <div
            key={person.id}
            draggable="true"
            onDragStart={() => dragStartHandler(person)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, person)}
            onMouseEnter={() => handleMouseClick(person)}
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
}

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
