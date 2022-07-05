import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import TitleListOfParameters from './components/TitleParameterList';
import DraggableList from './components/DraggableList';
import BigRedButton from '../../сomponents/buttons/BigRedButton/BigRedButton';
import './BiographyPage.scss';
import CustomPersonCreator from './components/CustomPersonCreator';

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
  const { t } = useTranslation();
  return (
    <div className="biography-section">
      <TitleListOfParameters sortOnClick={sortOnClick} />

      <DraggableList
        personsOnScreen={personsOnScreen}
        onSaveChanges={onSaveChanges}
        changePersonsOnScreen={changePersonsOnScreen}
      />
      <div>
        <BigRedButton onClick={addPerson}>{t('addPersonButton')}</BigRedButton>
        <BigRedButton onClick={removePerson}>{t('removePersonButton')}</BigRedButton>
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
