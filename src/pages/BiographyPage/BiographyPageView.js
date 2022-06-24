import React from 'react';
import PropType from 'prop-types';
import TitleListOfParameters from '../../сomponents/biographyParameterLists/TitleParameterList/TitleParameterList';
import DraggableList from '../../сomponents/biographyParameterLists/DraggableList/DraggableList';
import BigRedButton from '../../сomponents/buttons/BigRedButton/BigRedButton';
import './BiographyPage.scss';

const BiographyPageView = ({
  darkThemeOn,
  personsOnScreen,
  sortOnClick,
  addPerson,
  removePerson,
  onSaveChanges,
  changePersonsOnScreen
}) => {
  return (
    <div className={`biography-section ${darkThemeOn ? 'dark-theme' : 'light-theme'}`}>
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
    </div>
  );
};

BiographyPageView.propTypes = {
  darkThemeOn: PropType.bool.isRequired,
  personsOnScreen: PropType.arrayOf(PropType.shape({})).isRequired,
  sortOnClick: PropType.func.isRequired,
  addPerson: PropType.func.isRequired,
  removePerson: PropType.func.isRequired,
  onSaveChanges: PropType.func.isRequired,
  changePersonsOnScreen: PropType.func.isRequired
};

BiographyPageView.defaulProps = {
  personsOnScreen: null
};

export default BiographyPageView;
