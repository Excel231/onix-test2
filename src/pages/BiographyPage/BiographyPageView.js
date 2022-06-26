import React from 'react';
import PropType from 'prop-types';
import TitleListOfParameters from '../../сomponents/biographyParameterLists/TitleParameterList/TitleParameterList';
import DraggableList from '../../сomponents/biographyParameterLists/DraggableList/DraggableList';
import BigRedButton from '../../сomponents/buttons/BigRedButton/BigRedButton';
import './BiographyPage.scss';
import CustomPersonCreator from '../../сomponents/biographyParameterLists/CustomPersonCreator/CustomPersonCreator';

const BiographyPageView = ({
  personsOnScreen,
  emptyIdValue,
  sortOnClick,
  addPerson,
  addCustomPerson,
  removePerson,
  onSaveChanges,
  changePersonsOnScreen
}) => {
  return (
    <div className="biography-section">
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
      <CustomPersonCreator addCustomPerson={addCustomPerson} emptyIdValue={emptyIdValue} />
    </div>
  );
};

BiographyPageView.propTypes = {
  personsOnScreen: PropType.arrayOf(PropType.shape({})).isRequired,
  emptyIdValue: PropType.node.isRequired,
  sortOnClick: PropType.func.isRequired,
  addPerson: PropType.func.isRequired,
  addCustomPerson: PropType.func.isRequired,
  removePerson: PropType.func.isRequired,
  onSaveChanges: PropType.func.isRequired,
  changePersonsOnScreen: PropType.func.isRequired
};

BiographyPageView.defaulProps = {
  personsOnScreen: null
};

export default BiographyPageView;
