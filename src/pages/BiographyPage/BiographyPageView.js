import React from 'react';
import PropType from 'prop-types';
import TitleListOfParameters from '../../сomponents/biographyParameterLists/TitleParameterList/TitleParameterList';
import DraggableList from '../../сomponents/biographyParameterLists/DraggableList/DraggableList';
import BigRedButton from '../../сomponents/buttons/BigRedButton/BigRedButton';

function BiographyPageView({
  personsOnScreen,
  sortOnClick,
  addPerson,
  removePerson,
  onSaveChanges,
  changePersonsOnScreen
}) {
  return (
    <>
      <TitleListOfParameters sortOnClick={sortOnClick} />

      <DraggableList
        personsOnScreen={personsOnScreen}
        onSaveChanges={onSaveChanges}
        changePersonsOnScreen={changePersonsOnScreen}
      />
      <div>
        <BigRedButton onClick={addPerson}>Add new person</BigRedButton>
        <BigRedButton onClick={removePerson}>Remove last person</BigRedButton>
      </div>

    </>
  );
}

BiographyPageView.propTypes = {
  personsOnScreen: PropType.array,
  sortOnClick: PropType.func,
  addPerson: PropType.func,
  removePerson: PropType.func,
  onSaveChanges: PropType.func
};

export default BiographyPageView;
